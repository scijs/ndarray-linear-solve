# ndarray-linear-system

solve a linear system with a cached LU decomposition

This module provides a convenience layer on top of
[ndarray-crout-decomposition](https://npmjs.org/package/ndarray-crout-decomposition)
and
[ndarray-lu-solve](https://npmjs.org/package/ndarray-lu-solve)

# example

``` js
var system = require('ndarray-linear-system');
var show = require('ndarray-show');
var ndarray = require('ndarray');

var A = ndarray([ 2, 1, -1, -3, -1, 2, -2, 1, 2 ], [ 3, 3 ], [ 1, 3 ]);
var solve = system(A);

console.log('input:\n' + show(A), '\n');

var inputs = [ [ 8, -11, -3 ], [ 1, 2, 3 ], [ -9, 2, 5 ] ];

inputs.forEach(function (b) {
    console.log(
        'solve([' + b + ']) = \n'
        + show(solve(b)) + '\n'
    );
});
```

output:

```
input:
   2.000    1.000   -1.000
  -3.000   -1.000    2.000
  -2.000    1.000    2.000 

solve([8,-11,-3]) = 
   2.000    3.000   -1.000

solve([1,2,3]) = 
   7.000   -3.000   10.000

solve([-9,2,5]) = 
 -35.000   19.000  -42.000

```

# methods

``` js
var system = require('ndarray-linear-system')
```

## var solve = system(A, L, U)

Create a function `solve(B, X, Y)` from a matrix `A` and optional ndarrays `L`
and `U` to store the LU decomposition.

## var solution = solve(B, X, Y)

Compute a `solution` for the 1d ndarray `B` and optionally with defined 1d
scratch space for `X` and `Y` which will be allocated intelligently if not
provided.

The `solution` will be stored in `X` so make sure you don't depend on the
the `solution` reference elsewhere between calls if you pass in your own `X`.

# install

With [npm](https://npmjs.org) do:

```
npm install ndarray-linear-system
```

# license

MIT
