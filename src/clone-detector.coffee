# clone detector formulas

FormulaVisitor = require './visitor'

class Masser extends FormulaVisitor
  visitLiteral: (node) ->
    node.mass = 1
  visitReference: (node) ->
    node.mass = 1
  visitParens: (node) ->
    return node.mass if node.mass?
    node.mass = super node
  visitInfixExpression: (node) ->
    return node.mass if node.mass?
    node.mass = super node, (a, b) -> 1 + a + b
  visitFunctionCall: (node) ->
    return node.mass if node.mass?
    return node.mass = 1 if node.parameters.length is 0
    params = (param.visit @ for param in node.parameters)
    mass = (mass or 1) + param_mass for param_mass in params
    node.mass = mass

class Flattener extends FormulaVisitor
  visitLiteral: (node) ->
    [node]
  visitReference: (node) ->
    [node]
  visitInfixExpression: (node) ->
    super node, (a, b) -> [node].concat a, b
  visitFunctionCall: (node) ->
    nodes = [node]
    for param in node.parameters
      nodes = nodes.concat param.visit @
    nodes

class Hasher extends FormulaVisitor
  constructor: (@buckets) ->
    @buckets ?= 8
  mod: (hash) ->
    Math.round(hash) % @buckets
  hash: (str) ->
    hash = (hash or 0) + str.charCodeAt i for i in str
    @mod hash
  reduce: (offset, val) ->
    @mod offset * @buckets / 3 + val / @buckets

  visitLiteral: (node) -> node.hash = 0
  visitReference: (node) -> node.hash = 0
  visitInfixExpression: (node) ->
    t = @
    total_mass = node.left.mass + node.right.mass
    a_weight = 0.5 * node.left.mass / total_mass
    b_weight = 0.5 * node.right.mass / total_mass
    super node, (a, b) ->
      hash = 1 # 2 * 0.5 = airity * airity_weight
      hash += a * a_weight
      hash += b * b_weight
      node.hash = t.mod hash
  visitFunctionCall: (node) ->
    return node.hash = 0 if node.parameters.length is 0
    airity_weight = 0.5
    total_mass = (total_mass or 0) + p.mass for p in node.parameters
    param_weight = 0.5 / total_mass
    params = (param.mass * param.visit @ for param in node.parameters)
    hash = (hash or 0) + param_hash for param_hash in params
    hash *= param_weight
    hash += params.length * airity_weight
    node.hash = @mod hash

class CloneDetector
  constructor: (@similarity_threshold, @mass_threshold) ->
    @similarity_threshold ?= 2
    @mass_threshold ?= 2
    @flattener = new Flattener
    @masser = new Masser
    @hasher = new Hasher

  flatten: (tree) ->
    tree.visit @flattener
  mass: (tree) ->
    tree.visit @masser
  hash: (tree) ->
    tree.visit @hasher

  detectClones: (tree) ->
    @mass tree #memoize
    @hash tree #memoize
    buckets = @bucket tree
    @match buckets

  bucket: (tree) ->
    subtrees = @flatten tree
    buckets = []
    for i in subtrees when @mass_threshold < @mass i
      hash = @hash i
      (buckets[hash] ||= []).push i
    buckets

  match: (buckets) ->
    for bucket in buckets
      for i, left of bucket
        for j in [++i...bucket.length]
          right = bucket[j]
          console.error 'left: ', left
          console.error 'right: ', right
#          if @similarity_threshold < @compare i, j
#            @add_pair i, j
    []

module.exports = CloneDetector
#module.exports = ( formula, st, mt ) ->
#  formula.visit new CloneDetector st, mt
