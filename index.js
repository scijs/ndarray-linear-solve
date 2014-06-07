var solve = require('ndarray-lu-solve');
var crout = require('ndarray-crout-decomposition');
var ndarray = require('ndarray');
var scratch = require('ndarray-scratch');

module.exports = function (X, A, B) {
    //Validate inputs
    if (A.dimension !== 2) throw new Error('not a 2-dimensional matrix');
    var m = A.shape[0], n = A.shape[1];
    if (m !== n) throw new Error('not a square matrix: ' + m + 'x' + n);
    if (B.dimension !== 1) throw new Error('B is not a vector');
    if (B.shape[0] !== m) throw new Error('B has an invalid length');
    if (X.dimension !== 1) throw new Error('X is not a vector');
    if (X.shape[0] !== m) throw new Error('X has an invalid length');
    
    //TODO: Implement other solvers based on the format of M
    //
    //  Would be nice to have:
    //
    //      * QR factorization for rectangular matrices
    //      * Cholesky/LDL solver for positive semidefinite matrices
    //      * Sparse solvers
    //      

    return denseGeneralSolve(m, X, A, B)
};

//TODO: Switch this to LUP eventually for better numerical stability and to support large matrices
function denseGeneralSolve(m, X, A, B) {
    var L = scratch.malloc([ m, m ]);
    var ok = crout(A, L, L);
    if (!ok) {
        scratch.free(L);
        return false;
    }
    var Y = scratch.malloc([ m ]);
    var res = solve(L, L, B, X, Y);
    scratch.free(Y)
    scratch.free(L);
    return !!res;
}