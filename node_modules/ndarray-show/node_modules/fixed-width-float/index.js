var sprintf = require('sprintf');
module.exports = format;

function format (x, bytes) {
    if (bytes === undefined) bytes = 8;
    var rfmt = '%' + bytes + '.' + bytes + 's';
    
    if (bytes <= 0) return undefined;
    if (isNaN(x)) return sprintf(rfmt, 'NaN');
    if (x === Infinity) {
        if (bytes === 1) return undefined;
        return sprintf(rfmt, bytes >= 9 ? 'Infinity' : ' Inf').slice(0, bytes);
    }
    if (x === -Infinity) {
        if (bytes === 1) return undefined;
        return sprintf(rfmt, bytes >= 9 ? '-Infinity' : '-Inf').slice(0, bytes);
    }
    return packf(x, bytes);
};

function sci (x, bytes) {
    var n = Math.max(1, log10f(Math.abs(x)));
    var sz = log10f(Math.abs(n));
    
    var b = Math.pow(10,bytes+1);
    if (Math.abs(x) < 1) {
        x = Math.round(x * b) / b;
    }
    else {
        var tn = Math.pow(10, n + 1);
        x = Math.round(x / tn * b) / b * tn;
    }
    
    var s;
    if (bytes - sz - 6 === -1) {
        x = Math.round(x / Math.pow(10, n));
        x = x * Math.pow(10, n);
        s = sprintf('%1e', x).replace(/\.[^e]+/, '');
    }
    else if (bytes - sz - 6 < 0) return undefined;
    else {
        s = sprintf('%.' + (bytes - sz - 6) + 'e', x);
    }
    if (x > 0) s = ' ' + s;
    return pad(s, bytes);
}

function pad (s, bytes) {
    return Array(Math.max(0, bytes - s.length + 1)).join(' ') + s;
}

function log10f (n) {
    return Math.floor(Math.log(n) / Math.log(10));
}

function packf (x, bytes) {
    var lbytes = Math.max(1, Math.floor((bytes - 2) / 2));
    var rbytes = bytes - lbytes - 2;
    
    if (x === 0 && bytes < 4) {
        return pad('0', bytes);
    }
    else if (x === 0) {
        return pad('0.' + Array(rbytes+1).join('0'), bytes);
    }
    
    if (rbytes <= 0) {
        var s = sprintf('%' + lbytes + 'f', x);
        if (x >= 0) s = ' ' + s;
        if (s.length > bytes) return undefined;
        return pad(s, bytes);
    }
    if (Math.abs(x) < Math.pow(10,1-rbytes)) return sci(x, bytes);
    
    var b = Math.pow(10,bytes-3);
    var tn = Math.pow(10, log10f(Math.abs(x)));
    var xr = Math.round(x / tn * b) / b * tn;
    
    var s = sprintf('%' + lbytes + '.' + rbytes + 'f', xr);
    if (xr > 0) s = ' ' + s;
    s = s.slice(0, bytes);
    var r = s.split('.')[1];
    if (!r || r.length < 1) return sci(xr, bytes);
    return pad(s, bytes).slice(0, bytes);
}
