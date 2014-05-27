var solve = require('../');
var show = require('ndarray-show');
var ndarray = require('ndarray');

var A = ndarray([ 2, 1, -1, -3, -1, 2, -2, 1, 2 ], [ 3, 3 ], [ 1, 3 ]);
console.log('input:\n' + show(A), '\n');
console.log('solution:\n' + show(solve(A, [ 8, -11, -3 ])));
