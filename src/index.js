/* Function Helpers */
"use strict";

//var debug = require('nor-debug');
var FUNCTION = module.exports = {};

/** Serialize JavaScript function as string.
 * @param f {function} The function to be serialized.
 * @returns {string} The function serialized to JavaScript string.
 */
FUNCTION.toString = function function_toString(f) {
	if(!(f && (f instanceof Function))) {
		throw new TypeError("argument is not Function");
	}
	var s = ''+f;

	if(s.substr(0, 8) !== 'function') {
		throw new TypeError('Failed to serialize function: ' + f);
	}

	return s;
};

FUNCTION.stringify = FUNCTION.toString;

/** Covert stringified function to JavaScript function.
 * @param s {string} The string containing code for JavaScript function.
 * @returns {function} The unserialized JavaScript function.
 */
FUNCTION.toFunction = function function_parse(s) {
	s = ''+s;

	if(s.substr(0, 8) !== 'function') {
		throw new TypeError('Invalid input: ' + s);
	}

	/*jslint evil: true */
	return new Function('return (' + s + ')')();
};

FUNCTION.parse = FUNCTION.toFunction;

/* EOF */
