var test = require('tape');
var solve = require('../');
var ndarray = require('ndarray');
var show = require('ndarray-show');

test('known solutions', function (t) {
    var r = ndarray(new Float64Array(3))

    var A = ndarray([ 1, 2, -1, 2, 3, -1, -2, 0, -3 ], [3,3], [1,3]);
    var x = ndarray([ -4, -11, 22 ]);
    t.ok(solve(r, A, x))
    t.equal(show(r), show([ -8, 1, -2 ]));
    
    var B = ndarray([ 2, 1, -1, -3, -1, 2, -2, 1, 2 ], [3,3], [1,3]);
    var y = ndarray([ 8, -11, -3 ]);
    t.ok(solve(r, B, y))
    t.equal(show(r), show([ 2, 3, -1 ]));
    
    t.end();
});
