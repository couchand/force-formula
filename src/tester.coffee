# test formula against csv

csv = require 'csv'
parser = require '../dst/parser'
parser.parser.yy = require './nodes'
evaluator = require './evaluator'

getTemplate = (formula_src) ->
  formula = parser.parse formula_src
  lets = evaluator.unbound formula
  lets.push 'expected'
  lets.unshift 'message'
  lets.join ','

getUnbound = (formula_src) ->
  formula = parser.parse formula_src
  evaluator.unbound formula

test = (formula_src, csv_src, report) ->
  formula = parser.parse formula_src
  results = []
  csv().from(csv_src, columns: true).transform((data) ->
    data.actual = evaluator.evaluate formula, data
    results.push data
  ).on('end', ->
    report results
  )

testJson = (formula_src, json, report) ->
  formula = parser.parse formula_src
  data.actual = evaluator.evaluate formula, data for data in json
  report json

getFailures = (results) ->
  failures = []
  for data, index in results
    message = "Row #{index+1}:  expected #{data.actual} to equal #{data.expected}.  #{data.message}."
    failures.push(message) if data.actual isnt data.expected
  failures

module.exports = {
  getTemplate: getTemplate
  getUnbound: getUnbound
  test: test
  testJson: testJson
  getFailures: getFailures
}
