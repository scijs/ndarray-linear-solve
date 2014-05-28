# fixed-width-float

display a float in a fixed-width string

[![testling badge](https://ci.testling.com/substack/fixed-width-float.png)](https://ci.testling.com/substack/fixed-width-float)

[![build status](https://secure.travis-ci.org/substack/fixed-width-float.png)](http://travis-ci.org/substack/fixed-width-float)

# example

``` js
var showf = require('fixed-width-float');
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
```

output:

```
   1.000    2.000  250.212  9.88e+8
  -3.000 -1.23e-5  0.00e+0 -555.556
-5.00e+5  3.21050 -7.20e+5  6.00e-9
   4.000  -10.000  9950.25  0.00e+0
```

# methods

``` js
var showf = require('fixed-with-float')
```

## var s = showf(n, bytes=8)

Return a string `s` to display the floating point value `n` in so many `bytes`.

# install

With [npm](https://npmjs.org) do:

```
npm install fixed-width-float
```

This code works in the browser with [browserify](http://browserify.org).

You can download a UMD build from [browserify CDN](http://wzrd.in):

http://wzrd.in/standalone/fixed-width-float@latest

# license

MIT
