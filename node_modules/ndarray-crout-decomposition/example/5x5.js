var ndarray = require('ndarray');
var show = require('ndarray-show');
var zeros = require('zeros');
var crout = require('../');

var A = ndarray([
    2, 1, 1, 3, 2,
    1, 2, 2, 1, 1,
    1, 2, 9, 1, 5,
    3, 1, 1, 7, 1,
    2, 1, 5, 1, 8
], [ 5, 5 ]);
var L = zeros([ 5, 5 ]);
var U = zeros([ 5, 5 ]);

crout(A, L, U);
console.log('L=\n' + show(L));
console.log('U=\n' + show(U));
