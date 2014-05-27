# ndarray-linear-solve

solve a linear system with LU decomposition

This module provides a convenience layer on top of
[ndarray-crout-decomposition](https://npmjs.org/package/ndarray-crout-decomposition)
and
[ndarray-lu-solve](https://npmjs.org/package/ndarray-lu-solve)

# example

``` js
var solve = require('ndarray-linear-solve');
var show = require('ndarray-show');
var ndarray = require('ndarray');

var A = ndarray([ 2, 1, -1, -3, -1, 2, -2, 1, 2 ], [ 3, 3 ], [ 1, 3 ]);
console.log('input:\n' + show(A), '\n');
console.log('solution:\n' + show(solve(A, [ 8, -11, -3 ])));
```

output:

```
input:
   2.000    1.000   -1.000
  -3.000   -1.000    2.000
  -2.000    1.000    2.000 

solution:
   2.000    3.000   -1.000

```

or you can just use an ordinary array for the same output:

``` js
var solve = require('ndarray-linear-solve');
var show = require('ndarray-show');

var A = [ 2, 1, -1, -3, -1, 2, -2, 1, 2 ];
console.log('solution:\n' + show(solve(A, [ 8, -11, -3 ])));
```

# methods

``` js
var solve = require('ndarray-linear-solve')
```

## var solution = solve(A, B)

Return a `solution` vector for the system of equations described by the square
matrix ndarray `A` and the vector `B`.

# install

With [npm](https://npmjs.org) do:

```
npm install ndarray-linear-system
```

# license

MIT
