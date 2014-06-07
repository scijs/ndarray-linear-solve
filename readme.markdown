# ndarray-linear-solve

Solves a system of linear equations, similar to [MATLAB's backslash operator](http://www.mathworks.com/help/matlab/ref/mldivide.html), but not yet as sophisticated.  (But maybe it will be someday soon!  Pull requests welcome!)

[![testling badge](https://ci.testling.com/substack/ndarray-linear-solve.png)](https://ci.testling.com/substack/ndarray-linear-solve)

[![build status](https://secure.travis-ci.org/substack/ndarray-linear-solve.png)](http://travis-ci.org/substack/ndarray-linear-solve)

# example

``` js
var solve = require('ndarray-linear-solve');
var show = require('ndarray-show');
var ndarray = require('ndarray');

var A = ndarray([ 2, 1, -1, -3, -1, 2, -2, 1, 2 ], [ 3, 3 ], [ 1, 3 ]);
var B = ndarray([ 8, -11, -3 ])
var X = ndarray(new Float64Array(3))
var r = solve(X, A, B)
console.log('input:\n' + show(A), '\n');
if (r) {
  console.log('solution:\n' + show(X));
} else {
  console.log('matrix is singular')
}
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

# methods

``` js
var solve = require('ndarray-linear-solve')
```

## var solution = solve(X, A, B)
Solves the linear system, `AX = B` for `X`

* `X` is a vector into which the solution is written
* `A` is a matrix encoded as an ndarray
* `B` is a vector, encoded as an ndarray

**Returns** `true` if the matrix has a solution, otherwise `false`.

# install

With [npm](https://npmjs.org) do:

```
npm install ndarray-linear-solve
```

# license

MIT
