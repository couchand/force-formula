[![Build Status](https://travis-ci.org/couchand/force-formula.png?branch=master)](https://travis-ci.org/couchand/force-formula)
force.com formula parser
========================

parse force.com formula syntax. pretty-print, evaluate,
and unit test your formulas.

 * quick start
 * documentation
 * dependencies
 * more information

quick start
-----------

fire up your browser and load <http://formula.herokuapp.com/prettyprint.html>
or `example/prettyprint.html`.
type in some formula syntax and click 'pretty print!'.

documentation
-------------

parses formula syntax and returns an abstract syntax tree.
you can find the definition of the node types in
`nodes.coffee`.

 * `FunctionCall`
   * `name`
   * `parameters`
 * `Reference`: field reference
   * `name`
 * `Addition`: arithmetic expressions
 * `Subtraction`
 * `Multiplication`
 * `Division`
 * `Concatenation`: string expression
 * `Conjunction`: logical expressions
 * `Disjunction`
   * `left`: left side of operand
   * `right`: right side of operand
 * `Comparison`: comparison expression
   * `comparator`: comparison operator
   * `left`: left side of comparison
   * `right`: right side of comparison
 * `Parens`: parenthesized expression
   * `formula`: nested formula
 * `StringLiteral`
   * `value`
 * `DecimalLiteral`
   * `value`
 * `IntegerLiteral`
   * `value`

use the visitor pattern to traverse the nodes. all nodes in
the ast implement a `visit` method. this takes one
parameter, the visitor, and calls the corresponding `visitX`
method on it, where `X` is the particular node type.

to make this easy, extend the class found in `visitor.coffee`.

dependencies
------------

run
 * csv (for tester)

build
 * coffee
 * jison

more information
----------------

 * <http://wiki.developerforce.com/page/An_Introduction_to_Formulas>
 * <https://na3.salesforce.com/help/doc/en/salesforce_formulas_cheatsheet.pdf>
