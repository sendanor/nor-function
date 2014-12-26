/* Function Helpers */
"use strict";

/** Serialize JavaScript function as string.
 * @param f {function} The function to be serialized.
 * @returns {string} The function serialized to JavaScript string.
 */
module.exports = function function_toString() {
	var f = this.f;

	if(!(f && (f instanceof Function))) {
		throw new TypeError("argument is not Function");
	}
	var s = ''+f;

	if(s.substr(0, 8) !== 'function') {
		throw new TypeError('Failed to serialize function: ' + f);
	}

	return s;
};

/* EOF */
