# [function-equal][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Compares two functions, are they equal? Checks their names, bodies and argument names. Powered by `parse-function`.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
```
npm i function-equal --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const functionEqual = require('function-equal')
```

### [functionEqual](index.js#L38)
> Check two functions are strictly the same.

**Params**

* `a` **{Function}**    
* `b` **{Function}**    
* `returns` **{Boolean}**  

**Example**

```js
var fnEqual = require('function-equal')

// returns true
console.log(fnEqual(fnEqual, fnEqual))
console.log(fnEqual(console.log, console.log))
console.log(fnEqual(function a (b, c) { return b + c }, function a (b, c) { return b + c }))

console.log(fnEqual(console.log, console.dir)) // => false
console.log(fnEqual(function a (foo) {}, function c (foo) {})) // => false
console.log(fnEqual(function a (foo) {}, function a (foo) {})) // => true
console.log(fnEqual(function a (foo) {return foo}, function a (foo) {return foo})) // => true
console.log(fnEqual(function a (foo) {}, function a (bar) {})) // => false
```

## Related
* [error-base](https://www.npmjs.com/package/error-base): Create custom Error classes. | [homepage](https://github.com/doowb/error-base)
* [is-empty-function](https://www.npmjs.com/package/is-empty-function): Check that given string, function or arrow function have empty body,… [more](https://www.npmjs.com/package/is-empty-function) | [homepage](https://github.com/tunnckocore/is-empty-function)
* [kind-error](https://www.npmjs.com/package/kind-error): Base class for easily creating meaningful and quiet by default Error… [more](https://www.npmjs.com/package/kind-error) | [homepage](https://github.com/tunnckocore/kind-error)
* [kind-of](https://www.npmjs.com/package/kind-of): Get the native type of a value. | [homepage](https://github.com/jonschlinkert/kind-of)
* [parse-function](https://www.npmjs.com/package/parse-function): Parse a function, arrow function or string to object with name,… [more](https://www.npmjs.com/package/parse-function) | [homepage](https://github.com/tunnckocore/parse-function)
* [useful-error](https://www.npmjs.com/package/useful-error): Enhanced Error class for creating meaningful and customizable error classes. Adds… [more](https://www.npmjs.com/package/useful-error) | [homepage](https://github.com/tunnckocore/useful-error)

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/function-equal/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[parse-function]: https://github.com/tunnckocore/parse-function

[npmjs-url]: https://www.npmjs.com/package/function-equal
[npmjs-img]: https://img.shields.io/npm/v/function-equal.svg?label=function-equal

[license-url]: https://github.com/tunnckoCore/function-equal/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/function-equal
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/function-equal.svg

[travis-url]: https://travis-ci.org/tunnckoCore/function-equal
[travis-img]: https://img.shields.io/travis/tunnckoCore/function-equal.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/function-equal
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/function-equal.svg

[david-url]: https://david-dm.org/tunnckoCore/function-equal
[david-img]: https://img.shields.io/david/tunnckoCore/function-equal.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckoCore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckoCore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg