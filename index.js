/*!
 * function-equal <https://github.com/tunnckoCore/function-equal>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var parse = require('parse-function')

/**
 * > Check two functions are strictly the same.
 *
 * **Example**
 *
 * ```js
 * var fnEqual = require('function-equal')
 *
 * // returns true
 * console.log(fnEqual(fnEqual, fnEqual))
 * console.log(fnEqual(console.log, console.log))
 * console.log(fnEqual(function a (b, c) { return b + c }, function a (b, c) { return b + c }))
 *
 * console.log(fnEqual(console.log, console.dir)) // => false
 * console.log(fnEqual(function a (foo) {}, function c (foo) {})) // => false
 * console.log(fnEqual(function a (foo) {}, function a (foo) {})) // => true
 * console.log(fnEqual(function a (foo) {return foo}, function a (foo) {return foo})) // => true
 * console.log(fnEqual(function a (foo) {}, function a (bar) {})) // => false
 * ```
 *
 * @param  {Function} `a`
 * @param  {Function} `b`
 * @return {Boolean}
 * @api public
 */

module.exports = function functionEqual (a, b) {
  if (typeof a !== 'function' && typeof b !== 'function') {
    return false
  }
  // try return earlier (performance?)
  if (a.length !== b.length) {
    return false
  }

  var ra = parse(a)
  var rb = parse(b)
  return isEqual(ra, rb)
}

/**
 * > Check both object from `parse-function` are the same.
 *
 * @param  {Object} `a`
 * @param  {Object} `b`
 * @return {Boolean}
 */

function isEqual (a, b) {
  if (a.name !== b.name) return false
  if (a.body !== b.body) return false
  if (a.params !== b.params) return false
  var len = a.args.length
  var i = -1

  while (i++ < len) {
    if (a.args[i] !== b.args[i]) return false
  }
  return true
}
