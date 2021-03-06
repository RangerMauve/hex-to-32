var { base32 } = require('rfc4648')

module.exports = {
	encode: encode,
	decode: decode
};

/**
 * Convert a string of hex characters to a base32 encoded string
 * @param {String} hexString The hex string to encode
 */
function encode(hexString) {
	// Convert to array of bytes
	var bytes = Buffer.from(hexString, "hex");
	var encoded = base32.stringify(bytes);

	// strip padding & lowercase
	return encoded.replace(/(=+)$/, '').toLowerCase();
}

/**
 * Convert a base32 encoded string to a hex string
 * @param {String} base32String The base32 encoded string
 */
function decode(base32String) {
	// Decode to Buffer
	var bytes = base32.parse(base32String, {
		out: Buffer.alloc,
		loose: true
	});

	return bytes.toString("hex");
}
