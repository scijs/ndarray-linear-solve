module.exports = function (A, L, U) {
    var m = A.shape[0];
    var n = A.shape[1];
    if (m !== n) return false; // non-square
    
    // diagonalize U
    for (var i = 0; i < n; i++) {
        U.set(i, i, 1);
    }
    
    for (var j = 0; j < n; j++) {
        for (var i = j; i < n; i++) {
            var sum = 0;
            for (var k = 0; k < j; k++) {
                sum += L.get(k,i) * U.get(j,k);  
            }
            L.set(j, i, A.get(j,i) - sum);
        }
         
        for (var i = j; i < n; i++){
            var sum = 0;
            for (var k = 0; k < j; k++){
                sum += L.get(k,j) * U.get(i, k);
            }
            var denom = L.get(j,j);
            if (denom === 0) return false;
            U.set(i, j, (A.get(i,j) - sum) / denom);
        }
    }
    return true;
};
