var showf = require('../');
var rows = [
    [ 1, 2, 250.212, 987654321 ],
    [ -3, -0.00001234, 6.212e-20, -555.5555 ],
    [ -500000, 32.105e99, -7.2e5, 6.1e-9 ],
    [ 4, -10, 9950.255, -9.96e-50 ]
];

rows.forEach(function (row) {
    var rs = row.map(function (x) { return showf(x, 8) })
    console.log(rs.join(' '));
});
