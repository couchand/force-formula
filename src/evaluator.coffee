# force formula evaluator

class Factory
  build: (node) ->
    switch node.expression
      when 'add'
        Builder = Addition
      when 'subtract'
        Builder = Subtraction
      when 'multiply'
        Builder = Multiplication
      when 'divide'
        Builder = Division
      when 'concat'
        Builder = Concatenation
      when 'conjunction'
        Builder = Conjunction
      when 'disjunction'
        Builder = Disjunction
      when 'comparison'
        Builder = Comparison
      when 'parens'
        Builder = Parens
      when 'string'
        Builder = StringLiteral
      when 'decimal'
        Builder = DecimalLiteral
      when 'integer'
        Builder = IntegerLiteral
      when 'reference'
        Builder = Reference
      when 'function'
        Builder = FunctionCall
      else
        throw 'unknown node type'
    new Builder node

factory = new Factory()

class InfixExpression
  constructor: (node, @operator) ->
    @left = factory.build node.left
    @right = factory.build node.right

  evaluate: (data) ->
    @operator @left.evaluate(data), @right.evaluate(data)

class Addition extends InfixExpression
  constructor: (node) ->
    super node, (left,  right) ->
      left + right

class Subtraction extends InfixExpression
  constructor: (node) ->
    super node, (left,  right) ->
      left - right

class Multiplication extends InfixExpression
  constructor: (node) ->
    super node, (left,  right) ->
      left * right

class Division extends InfixExpression
  constructor: (node) ->
    super node, (left,  right) ->
      left / right

class Concatenation extends InfixExpression
  constructor: (node) ->
    super node, (left,  right) ->
      left + right

class Conjunction extends InfixExpression
  constructor: (node) ->
    super node, (left,  right) ->
      left && right

class Disjunction extends InfixExpression
  constructor: (node) ->
    super node, (left,  right) ->
      left || right

class Comparison extends InfixExpression
  constructor: (node) ->
    super node
    @comparator = new Comparator node.comparator

  evaluate: (data) ->
    @comparator.compare @left.evaluate(data), @right.evaluate(data)

class Comparator
  constructor: (@comparator) ->
  compare: (left, right) ->
    switch @comparator
      when '=', '=='
        left == right
      when '!=', '<>'
        left != right
      when '<'
        left < right
      when '>'
        left > right
      when '<='
        left <= right
      when '>='
        left >= right

class Parens
  constructor: (node) ->
    @formula = factory.build node.formula
  evaluate: (data) ->
    @formula.evaluate data

class StringLiteral
  constructor: (node) ->
    @value = node.string
  evaluate: (data) ->
    @value

class DecimalLiteral
  constructor: (node) ->
    @value = parseFloat( node.whole + '.' + node.part )
  evaluate: (data) ->
    @value

class IntegerLiteral
  constructor: (node) ->
    @value = parseInt node.value
  evaluate: (data) ->
    @value

class Reference
  constructor: (node) ->
    @name = node.name.join '.'
  evaluate: (data) ->
    data[@name]

class FunctionCall
  constructor: (node) ->
    @params = (factory.build param for param in node.parameters)
    @func = funcs[node.function.toLowerCase()]
  evaluate: (data) ->
    vals = (param.evaluate data for param in @params)
    @func vals

funcs = {
  'and': (p) -> p.reduce (a, b) -> a && b,
  'or': (p) -> p.reduce (a, b) -> a || b,
  'not': (p) -> !p[0]
  'if': (p) -> if p[0] then p[1] else p[2]
  'isnull': (p) -> !p[0]?
  'isblank': (p) -> !p[0]? or p[0] is ''
  'nullvalue': (p) -> if p[0]? then p[0] else p[1]
  'blankvalue': (p) -> if p[0]? and p[0] is not '' then p[0] else p[1]
}

evaluate = (formula, data) ->
  f = factory.build formula
  f.evaluate data

module.exports = evaluate
