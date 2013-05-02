# json tree for d3 for formulas

FormulaVisitor = require './visitor'

class TreeBuilder extends FormulaVisitor
  visitLiteral: (node) ->
    { name: node.value }
  visitStringLiteral: (node) ->
    { name: "'#{node.value}'" }
  visitReference: (node) ->
    { name: node.name }
  visitParens: (node) ->
    { name: '(_)', children: [node.formula.visit @] }
  visitInfixExpression: (node) ->
    super node, (a, b) ->
      { name: node.operator, children: [a, b] }
  visitFunctionCall: (node) ->
    if node.name is 'case'
      children = [
        { name: "on", children: [node.parameters[0].visit @] }
      ]
      for i in [1..(node.parameters.length - 2)] by 2
        children.push {
          name: "when"
          children: [
            node.parameters[i].visit @
            node.parameters[i+1].visit @
          ]
        }
      children.push {
        name: "else"
        children: [node.parameters[node.parameters.length-1].visit @]
      }
    else
      children = (param.visit @ for param in node.parameters)
    { name: "#{node.name}()", children: children }

module.exports = ( formula ) ->
  formula.visit new TreeBuilder()
