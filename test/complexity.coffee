# complexity calculator tests

n = require '../src/nodes'
complexity = require '../src/complexity'
assert = require 'assert'

describe 'ComplexityComputer', ->
  describe '#', ->
    describe 'visitIntegerLiteral', ->
      it 'calculates', ->
        five = new n.IntegerLiteral '5'
        assert.equal complexity(five), 0

    describe 'visitStringLiteral', ->
      it 'calculates', ->
        foobar = new n.StringLiteral 'foobar'
        assert.equal complexity(foobar), 0

    describe 'visitReference', ->
      it 'calculates plain references', ->
        accountName = new n.Reference ['Account', 'Name']
        assert.equal complexity(accountName), 0

    describe 'visitParens', ->
      it 'calculates', ->
        five = new n.Parens new n.IntegerLiteral '5'
        assert.equal complexity(five), 0

      it 'passes through subexpressions', ->
        foo = new n.StringLiteral 'foo'
        bar = new n.StringLiteral 'bar'
        ifFooBar = new n.FunctionCall 'if', [foo, bar]
        parens = new n.Parens ifFooBar
        assert.equal complexity(parens), 1

    describe 'visitInfixExpression', ->
      it 'calculates', ->
        fivePlusThree = new n.InfixExpression '+', new n.IntegerLiteral('5'), new n.IntegerLiteral('3')
        assert.equal complexity(fivePlusThree), 0

      it 'sums subexpressions', ->
        foo = new n.StringLiteral 'foo'
        bar = new n.StringLiteral 'bar'
        ifFooBar = new n.FunctionCall 'if', [foo, bar]
        three = new n.IntegerLiteral 3
        five = new n.IntegerLiteral 5
        ifThreeFive = new n.FunctionCall 'if', [three, five]
        barPlusFive = new n.InfixExpression '+', ifFooBar, ifThreeFive
        assert.equal complexity(barPlusFive), 2

    describe 'visitFunctionCall', ->
      it 'counts if statements as one', ->
        foo = new n.StringLiteral 'foo'
        bar = new n.StringLiteral 'bar'
        ifFooBar = new n.FunctionCall 'if', [foo, bar]
        assert.equal complexity(ifFooBar), 1

      it 'counts case statements as one per case', ->
        ref = new n.Reference ['Foo', 'Bar']
        foo = new n.StringLiteral 'foo'
        bar = new n.StringLiteral 'bar'
        three = new n.IntegerLiteral 3
        five = new n.IntegerLiteral 5
        caseThreeFive = new n.FunctionCall 'case', [ref, foo, three, bar, five]
        assert.equal complexity(caseThreeFive), 2
