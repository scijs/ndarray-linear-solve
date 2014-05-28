var showf = require('../');
var test = require('tape');

test('NaN', function (t) {
    t.equal(showf(NaN, 0), undefined);
    t.equal(showf(NaN, 1), 'N');
    t.equal(showf(NaN, 2), 'Na');
    t.equal(showf(NaN, 3), 'NaN');
    t.equal(showf(NaN, 4), ' NaN');
    t.equal(showf(NaN, 5), '  NaN');
    t.end();
});
