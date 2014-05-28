# ndarray-lu-solve

solve a system of linear equations from an LU decomposition

[![testling badge](https://ci.testling.com/substack/ndarray-lu-solve.png)](https://ci.testling.com/substack/ndarray-lu-solve)

[![build status](https://secure.travis-ci.org/substack/ndarray-lu-solve.png)](http://travis-ci.org/substack/ndarray-lu-solve)

# example

``` js
var solve = require('ndarray-lu-solve');
var show = require('ndarray-show');
var crout = require('ndarray-crout-decomposition');
var ndarray = require('ndarray');
var zeros = require('zeros');

var A = ndarray(
    [ 2, 1, -1, 8, -3, -1, 2, -11, -2, 1, 2, -3 ],
    [ 4, 3 ], [ 1, 4 ]
);
var L = zeros([ 3, 3 ]);
var U = zeros([ 3, 3 ]);
crout(A.hi(3,3), L, U);

var X = ndarray(new Float64Array(3));
var Y = ndarray(new Float64Array(3));
var solution = solve(L, U, A.lo(3,0).pick(0), X, Y);

console.log('input:\n' + show(A), '\n');
console.log('solution:\n' + show(solution));
```

output:

```
input:
   2.000    1.000   -1.000    8.000
  -3.000   -1.000    2.000  -11.000
  -2.000    1.000    2.000   -3.000 

solution:
   2.000    3.000   -1.000
```

# methods

``` js
var solve = require('ndarray-lu-solve')
```

## var solution = solve(L, U, B, X, Y)

Given an `L` and `U` ndarrays from a decomposition and a vector `B`, solve the
system `LY = B` for `Y` and `UX = Y` for `X`.

The `solution` is written to `X` as the computation procedes but is also the
return value.

Optional `X` and `Y` parameters are modified in-place and contain elements of
the result. If not given, `X` and `Y` will be allocated.

# install

With [npm](https://npmjs.org) do:

```
npm install ndarray-lu-solve
```

# license

MIT
