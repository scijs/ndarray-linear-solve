var solve = require('ndarray-lu-solve');
var crout = require('ndarray-crout-decomposition');
var ndarray = require('ndarray');
var scratch = require('ndarray-scratch');

module.exports = function (A, B, X) {
    if (A.dimension === undefined) {
        var sq = Math.sqrt(A.length);
        if (Math.floor(sq) !== sq) throw new Error('not a square length');
        A = ndarray(A, [ sq, sq ], [ 1, sq ]);
    }
    var m = A.shape[0], n = A.shape[1];
    
    if (B.dimension === undefined) B = ndarray(B, [m]);
    
    if (A.dimension !== 2) throw new Error('not a 2-dimensional matrix');
    if (m !== n) throw new Error('not a square matrix: ' + m + 'x' + n);
    if (B.dimension !== 1) throw new Error("B is not a vector")
    if (B.shape[0] !== m) throw new Error("B has an invalid length")
    
    if (X === undefined) {
        X = scratch.malloc([ m ]);
    }
    if (X.dimension === undefined) {
        X = ndarray(X, [ m ]);
    }
    
    if (X.shape[0] < m) throw new Error("X is too small")
    
    var L = scratch.malloc([ m, m ]);
    var ok = crout(A, L, L);
    if (!ok) {
        scratch.free(L);
        return undefined;
    }
    
    var Y = scratch.malloc([ m ]);
    var res = solve(L, L, B, X, Y);
    scratch.free(Y)
    scratch.free(L);
    if (!res) return undefined
    return X;
};
