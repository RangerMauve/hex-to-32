# hex-to-32
Convert a hex string to base32 and back.

Uses [this](https://github.com/agnoster/base32-js) human-friendly base32 implementation.

```
npm install --save hex-to-32
```

```javascript
var value = 0xDEADA5;

var hex = value.toString(16);

var encoded = hexTo32.encode(hex);

assert.equal(encoded, "vupua");

var decoded = hexTo32.decode(encoded);

assert.equal(decoded, hex);
```