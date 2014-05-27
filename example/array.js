var solve = require('../');
var show = require('ndarray-show');

var A = [ 2, 1, -1, -3, -1, 2, -2, 1, 2 ];
console.log('solution:\n' + show(solve(A, [ 8, -11, -3 ])));
