# ndarray-crout-decomposition

LU decomposition using the crout algorithm

[![testling badge](https://ci.testling.com/substack/ndarray-crout-decomposition.png)](https://ci.testling.com/substack/ndarray-crout-decomposition)

[![build status](https://secure.travis-ci.org/substack/ndarray-crout-decomposition.png)](http://travis-ci.org/substack/ndarray-crout-decomposition)

# example

``` js
var ndarray = require('ndarray');
var zeros = require('zeros');
var show = require('ndarray-show');
var crout = require('ndarray-crout-decomposition');

var A = ndarray([ 4, 3, 6, 3 ], [ 2, 2 ]);
var L = zeros([ 2, 2 ]);
var U = zeros([ 2, 2 ]);

crout(A, L, U);
console.log('L=\n' + show(L));
console.log('U=\n' + show(U));
```

output:

```
L=
   4.000    0.000
   3.000   -1.500
U=
   1.000    1.500
   0.000    1.000
```

# methods

``` js
var crout = require('ndarray-crout-decomposition')
```

## var ok = crout(A, L, U)

Decompose the matrix `A` into `L` and `U`, mutating `L` and `U` in-place.

`A` is not unmodified.

If `A` was non-square or the algorithm could not find a solution, `ok` is
`false`. Otherwise `ok` is `true`.

# install

With [npm](https://npmjs.org) do:

```
npm install ndarray-crout-decomposition
```

# license

MIT
