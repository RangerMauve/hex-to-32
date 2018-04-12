var base32 = require("base32");

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

	return base32.encode(bytes);
}

/**
 * Convert a base32 encoded string to a hex string
 * @param {String} base32String The base32 encoded string
 */
function decode(base32String) {
	// Decode to ascii text
	var ascii = base32.decode(base32String);

	// Convert to array of bytes
	var bytes = Buffer.from(ascii, "ascii");

	return bytes.toString("hex");
}