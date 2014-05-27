var solve = require('ndarray-lu-solve');
var crout = require('ndarray-crout-decomposition');
var ndarray = require('ndarray');
var zeros = require('zeros');

module.exports = function (A, L, U) {
    var m = A.shape[0], n = A.shape[1];
    if (A.dimension !== 2) throw new Error('not a 2-dimensional matrix');
    if (m !== n) throw new Error('not a square matrix: ' + m + 'x' + n);
    
    if (!L) L = zeros([ m, m ]);
    if (!U) U = zeros([ m, m ]);
    crout(A, L, U);
    
    var scratch = null;
    
    return function (B, X, Y) {
        if (!X) X = ndarray(new Float64Array(m));
        if (!Y && scratch) Y = scratch;
        else if (!Y) Y = scratch = ndarray(new Float64Array(m));
        if (B.dimension === undefined) B = ndarray(B);
        return solve(L, U, B, X, Y);
    };
};
