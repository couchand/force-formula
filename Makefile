# build parser and examples

all: parser examples server other tests

parser: dst/parser.js
examples: dst/printer.js dst/tree.js dst/complexity.js
server: dst/evaluator.js dst/tester.js
other: dst/apex.js

tests:
	mocha --compilers coffee:coffee-script

dst/parser.js: src/formula.jison
	jison -o ./dst/parser.js ./src/formula.jison

dst/nodes.js: dst/parser.js src/nodes.coffee
	coffee -c -o ./dst/ ./src/nodes.coffee

dst/printer.js: dst/parser.js dst/nodes.js src/visitor.coffee src/printer.coffee src/elideRequire.patch
	coffee -c -o ./dst/ -j printer ./src/visitor.coffee ./src/printer.coffee
	patch ./dst/printer.js ./src/elideRequire.patch

dst/tree.js: dst/parser.js dst/nodes.js src/visitor.coffee src/tree.coffee src/elideRequire.patch
	coffee -c -o ./dst/ -j tree ./src/visitor.coffee ./src/tree.coffee
	patch ./dst/tree.js ./src/elideRequire.patch

dst/complexity.js: dst/parser.js dst/nodes.js src/visitor.coffee src/complexity.coffee src/elideRequire.patch
	coffee -c -o ./dst/ -j complexity ./src/visitor.coffee ./src/complexity.coffee
	patch ./dst/complexity.js ./src/elideRequire.patch

dst/evaluator.js: src/evaluator.coffee
	coffee -c -o ./dst/ ./src/evaluator.coffee

dst/tester.js: src/tester.coffee
	coffee -c -o ./dst/ ./src/tester.coffee

dst/apex.js: src/apex.coffee
	coffee -c -o ./dst/ ./src/apex.coffee
