/* Function Helpers */
"use strict";

/** Covert stringified function to JavaScript function.
 * @param s {string} The string containing code for JavaScript function.
 * @returns {function} The unserialized JavaScript function.
 */
module.exports = function function_parse(s) {
	s = ''+s;

	if(s.substr(0, 8) !== 'function') {
		throw new TypeError('Invalid input: ' + s);
	}

	/*jslint evil: true */
	return new Function('return (' + s + ')')();
};

/* EOF */
