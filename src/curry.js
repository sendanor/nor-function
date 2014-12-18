
"use strict";

/** Returns faster Function.prototype.bind() implementation for arguments from 1 to 3 without support for `this`
*/
module.exports = function(f) {
	return function() {
		var l = arguments.length;

		if(l < 0) {
			throw new TypeError("FUNCTION(...).bind() had unexpected amount of arguments (" + l + ")");
		}

		if(l === 0) {
			return function() {
				var l2 = arguments.length;
				if(l2 === 0) { return f(); }
				if(l2 === 1) { return f(arguments[0]); }
				if(l2 === 2) { return f(arguments[0], arguments[1]); }
				if(l2 === 3) { return f(arguments[0], arguments[1], arguments[2]); }
				if(l2 === 4) { return f(arguments[0], arguments[1], arguments[2], arguments[3]); }
				if(l2 === 5) { return f(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]); }
				throw new TypeError("The function was called with too many arguments (" + l2 + ")");
			};
		}

		var a1 = arguments[0];
		if(l === 1) {
			return function() {
				var l2 = arguments.length;
				if(l2 === 0) { return f(a1); }
				if(l2 === 1) { return f(a1, arguments[0]); }
				if(l2 === 2) { return f(a1, arguments[0], arguments[1]); }
				if(l2 === 3) { return f(a1, arguments[0], arguments[1], arguments[2]); }
				if(l2 === 4) { return f(a1, arguments[0], arguments[1], arguments[2], arguments[3]); }
				if(l2 === 5) { return f(a1, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]); }
				throw new TypeError("The function was called with too many arguments (" + l2 + ")");
			};
		}

		var a2 = arguments[1];
		if(l === 2) {
			return function() {
				var l2 = arguments.length;
				if(l2 === 0) { return f(a1, a2); }
				if(l2 === 1) { return f(a1, a2, arguments[0]); }
				if(l2 === 2) { return f(a1, a2, arguments[0], arguments[1]); }
				if(l2 === 3) { return f(a1, a2, arguments[0], arguments[1], arguments[2]); }
				if(l2 === 4) { return f(a1, a2, arguments[0], arguments[1], arguments[2], arguments[3]); }
				if(l2 === 5) { return f(a1, a2, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]); }
				throw new TypeError("The function was called with too many arguments (" + l2 + ")");
			};
		}

		var a3 = arguments[2];
		if(l === 3) {
			return function() {
				var l2 = arguments.length;
				if(l2 === 0) { return f(a1, a2, a3); }
				if(l2 === 1) { return f(a1, a2, a3, arguments[0]); }
				if(l2 === 2) { return f(a1, a2, a3, arguments[0], arguments[1]); }
				if(l2 === 3) { return f(a1, a2, a3, arguments[0], arguments[1], arguments[2]); }
				if(l2 === 4) { return f(a1, a2, a3, arguments[0], arguments[1], arguments[2], arguments[3]); }
				if(l2 === 5) { return f(a1, a2, a3, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]); }
				throw new TypeError("The function was called with too many arguments (" + l2 + ")");
			};
		}

		var a4 = arguments[3];
		if(l === 4) {
			return function() {
				var l2 = arguments.length;
				if(l2 === 0) { return f(a1, a2, a3, a4); }
				if(l2 === 1) { return f(a1, a2, a3, a4, arguments[0]); }
				if(l2 === 2) { return f(a1, a2, a3, a4, arguments[0], arguments[1]); }
				if(l2 === 3) { return f(a1, a2, a3, a4, arguments[0], arguments[1], arguments[2]); }
				if(l2 === 4) { return f(a1, a2, a3, a4, arguments[0], arguments[1], arguments[2], arguments[3]); }
				if(l2 === 5) { return f(a1, a2, a3, a4, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]); }
				throw new TypeError("The function was called with too many arguments (" + l2 + ")");
			};
		}

		var a5 = arguments[4];
		if(l === 5) {
			return function() {
				var l2 = arguments.length;
				if(l2 === 0) { return f(a1, a2, a3, a4, a5); }
				if(l2 === 1) { return f(a1, a2, a3, a4, a5, arguments[0]); }
				if(l2 === 2) { return f(a1, a2, a3, a4, a5, arguments[0], arguments[1]); }
				if(l2 === 3) { return f(a1, a2, a3, a4, a5, arguments[0], arguments[1], arguments[2]); }
				if(l2 === 4) { return f(a1, a2, a3, a4, a5, arguments[0], arguments[1], arguments[2], arguments[3]); }
				if(l2 === 5) { return f(a1, a2, a3, a4, a5, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]); }
				throw new TypeError("The function was called with too many arguments (" + l2 + ")");
			};
		}

		throw new TypeError("FUNCTION(...).bind() does not support more than five arguments");
	};
};
