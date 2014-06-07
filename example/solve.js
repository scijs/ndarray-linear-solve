var solve = require('../');
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