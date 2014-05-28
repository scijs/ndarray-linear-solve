module.exports = function (M) {
    var rows = [];
    for (var y = 0; y < M.shape[1]; y++) {
        var row = [];
        rows.push(row);
        for (var x = 0; x < M.shape[0]; x++) {
            row.push(M.get(x, y));
        }
    }
    return rows;
}
