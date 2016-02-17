/*!
 * function-equal <https://github.com/tunnckoCore/function-equal>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var fnEql = require('./index')

test('should return true if name, args and body are the same', function (done) {
  test.strictEqual(fnEql(test, test), true)
  test.strictEqual(fnEql(test, fnEql), false)
  test.strictEqual(fnEql(fnEql, fnEql), true)
  done()
})

test('should return false if other than function passed', function (done) {
  test.strictEqual(fnEql(123), false)
  test.strictEqual(fnEql(function () {}, 123), false)
  done()
})

test('should return false even if minimal difference', function (done) {
  test.strictEqual(fnEql(test.strictEqual, test.deepEqual), false)
  test.strictEqual(fnEql(console.log, console.dir), false)
  // also works:
  // test.strictEqual(fnEql(function a (foo) {}, function a (bar) {}), false)
  // test.strictEqual(fnEql(function a (foo) {}, function a (bar) {}), false)
  // test.strictEqual(fnEql(function a (foo, baz) {}, function a (qux) {}), false)
  // test.strictEqual(fnEql(function foo (bar) {return 1}, function baz (qux) {}), false)
  done()
})
