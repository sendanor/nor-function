/* Function Helpers */
"use strict";

//var debug = require('nor-debug');
var fun = module.exports = {};

/** Serialize JavaScript function as string.
 * @param f {function} The function to be serialized.
 * @returns {string} The function serialized to JavaScript string.
 */
fun.toString = function(f) {
	if(!(f && (f instanceof Function))) {
		throw new TypeError("argument is not Function");
	}
	var s = ''+f;

	if(s.substr(0, 8) !== 'function') {
		throw new TypeError('Failed to serialize function: ' + f);
	}

	return s;
};

/** Covert stringified function to JavaScript function.
 * @param s {string} The string containing code for JavaScript function.
 * @returns {function} The unserialized JavaScript function.
 */
fun.toFunction = function(s) {
	s = ''+s;

	if(s.substr(0, 8) !== 'function') {
		throw new TypeError('Invalid input: ' + s);
	}

	/*jslint evil: true */
	return new Function('return (' + s + ')')();
};

/* EOF */
