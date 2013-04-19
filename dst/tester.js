// Generated by CoffeeScript 1.4.0
(function() {
  var csv, evaluator, getTemplate, parser, test;

  csv = require('csv');

  parser = require('../dst/parser.js');

  evaluator = require('../src/evaluator.coffee');

  getTemplate = function(formula_src) {
    var formula, lets, tree;
    formula = parser.parse(formula_src);
    tree = evaluator.build(formula);
    lets = tree.unbound();
    lets.push('expected');
    lets.push('message');
    return lets.join(',');
  };

  test = function(formula_src, csv_src, report) {
    var failures, formula;
    formula = parser.parse(formula_src);
    failures = [];
    return csv().from(csv_src, {
      columns: true
    }).transform(function(data) {
      data.actual = evaluator.evaluate(formula, data);
      return data;
    }).on('record', function(data, index) {
      var message;
      message = "Row " + (index + 1) + ":  expected " + data.actual + " to equal " + data.expected + ".  " + data.message + ".";
      if (data.actual !== data.expected) {
        return failures.push(message);
      }
    }).on('end', function() {
      return report(failures);
    });
  };

  module.exports = {
    getTemplate: getTemplate,
    test: test
  };

}).call(this);
