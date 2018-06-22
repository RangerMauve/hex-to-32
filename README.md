# hex-to-32

Convert a hex string to base32 and back using [`rfc4648`](https://www.npmjs.com/package/rfc4648).

```
npm install --save hex-to-32
```

```javascript
var value = 0xDEADA5;

var hex = value.toString(16);

var encoded = hexTo32.encode(hex);

assert.equal(encoded, "32w2k");

var decoded = hexTo32.decode(encoded);

assert.equal(decoded, hex);
```
