# clone detector formulas

FormulaVisitor = require './visitor'

class Masser extends FormulaVisitor
  visitLiteral: (node) ->
    1
  visitReference: (node) ->
    1
  visitInfixExpression: (node) ->
    super node, (a, b) -> 1 + a + b
  visitFunctionCall: (node) ->
    return 1 if node.parameters.length is 0
    params = (param.visit @ for param in node.parameters)
    mass = (mass or 1) + param_mass for param_mass in params
    mass

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
      nodes.push param.visit @
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

  visitIntegerLiteral: (node) ->
    @reduce 0, @mod(node.value)
  visitDecimalLiteral: (node) ->
    @reduce 0, @mod(node.value)
  visitReference: (node) ->
    @reduce 1, @hash(node.name)
  visitStringLiteral: (node) ->
    @reduce 2, @hash(node.value)
  visitInfixExpression: (node) ->
    t = @
    super node, (a, b) ->
      hash = t.hash(node.operator) / 2
      hash += a / 4
      hash += b / 4
      t.mod hash
  visitFunctionCall: (node) ->
    if node.parameters.length is 0
      return @mod @hash(node.name) / 2
    params = (param.visit @ for param in node.parameters)
    hash = (hash or 0) + param_hash for param_hash in params
    hash /= 4 * params.length
    hash += @hash(node.name) / 2
    hash += @mod(params.length) / 4
    @mod hash

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
    subtrees = @flatten tree
    buckets = []
    for i in subtrees when @mass i > @mass_threshold
      hash = @hash i
      buckets[hash] ||= []
      buckets[hash].push i
    buckets
#    for bucket in buckets
#      for i in bucket
#        for j in bucket when i isnt j
#          if @similarity_threshold < @compare i, j
#            @add_pair i, j

module.exports = CloneDetector
#module.exports = ( formula, st, mt ) ->
#  formula.visit new CloneDetector st, mt
