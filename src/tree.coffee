# json tree for d3 for formulas

FormulaVisitor = require './visitor'

class TreeBuilder extends FormulaVisitor
  visitLiteral: (node) ->
    val = node.value
    { name: val, value: val }
  visitStringLiteral: (node) ->
    val = "'#{node.value}'"
    { name: val, value: val }
  visitReference: (node) ->
    val = node.name
    { name: val, value: val }
  visitParens: (node) ->
    child = node.formula.visit @
    val = "( #{child.value} )"
    { name: '( )', children: [child], value: val }
  visitInfixExpression: (node) ->
    super node, (a, b) ->
      op = node.operator
      { name: op, children: [a, b], value: "#{a.value} #{op} #{b.value}" }
  visitFunctionCall: (node) ->
    children = (param.visit @ for param in node.parameters)
    val = "#{node.name}("
    unless children.length is 0
      val += " #{(child.value for child in children).join ', '} "
    val += ")"
    { name: "#{node.name}()", children: children, value: val }

module.exports = ( formula ) ->
  formula.visit new TreeBuilder()
