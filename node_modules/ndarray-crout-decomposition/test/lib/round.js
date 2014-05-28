module.exports = function (rows, p) {
    var e = Math.pow(10, p);
    for (var y = 0; y < rows.length; y++) {
        for (var x = 0; x < rows.length; x++) {
            rows[y][x] = Math.round(rows[y][x] * e) / e;
        }
    }
    return rows;
};
