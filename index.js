var solve = require('ndarray-lu-solve');
var crout = require('ndarray-crout-decomposition');
var ndarray = require('ndarray');
var scratch = require('ndarray-scratch');

module.exports = function (A, B) {
    if (!A.dimension) {
        var sq = Math.sqrt(A.length);
        if (Math.floor(sq) !== sq) throw new Error('not a square length');
        A = ndarray(A, [ sq, sq ], [ 1, sq ]);
    }
    if (B.dimension === undefined) B = ndarray(B);
    
    var m = A.shape[0], n = A.shape[1];
    
    if (A.dimension !== 2) throw new Error('not a 2-dimensional matrix');
    if (m !== n) throw new Error('not a square matrix: ' + m + 'x' + n);
    
    var L = scratch.zeros([ m, m ]);
    var U = scratch.zeros([ m, m ]);
    var ok = crout(A, L, U);
    if (!ok) return undefined;
    
    var X = ndarray(new Float64Array(m));
    var Y = ndarray(new Float64Array(m));
    var res = solve(L, U, B, X, Y);
    scratch.free(L);
    scratch.free(U);
    return res;
};
