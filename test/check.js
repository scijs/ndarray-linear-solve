var test = require('tape');
var solve = require('../');
var ndarray = require('ndarray');
var show = require('ndarray-show');

test('known solutions', function (t) {
    var A = [ 1, 2, -1, 2, 3, -1, -2, 0, -3 ];
    var x = [ -4, -11, 22 ];
    t.equal(show(solve(A, x)), show([ -8, 1, -2 ]));
    
    var B = [ 2, 1, -1, -3, -1, 2, -2, 1, 2 ];
    var y = [ 8, -11, -3 ];
    t.equal(show(solve(B, y)), show([ 2, 3, -1 ]));
    
    t.end();
});
