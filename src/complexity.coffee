# complexity calculation

FormulaVisitor = require './visitor'

sum = (a) ->
  s = (s or 0) + i for i in a
  s

functions =
  if: (params) -> 1 + sum(params)
  case: (params) -> Math.round((params.length - 1)/2) + sum(params)

class ComplexityCalculator extends FormulaVisitor
  constructor: (@options) ->

  visitLiteral: (node) ->
    0
  visitReference: (node) ->
    0
  visitInfixExpression: (node) ->
    super node, (a, b) -> a + b
  visitFunctionCall: (node) ->
    params = (param.visit @ for param in node.parameters)
    if functions[node.name]?
      functions[node.name] params
    else
      sum params

module.exports = ( formula, options ) ->
  formula.visit new ComplexityCalculator options
