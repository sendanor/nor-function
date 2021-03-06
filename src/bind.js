
"use strict";

/** Returns faster Function.bind() implementation for arguments from 1 to 4 (including the first self)
*/
module.exports = function array_bind_(self) {
	var f = this.f;
	var l = arguments.length;

	if(l <= 0) {
		throw new TypeError("FUNCTION(...).bind() must have at least one argument");
	}

	if(l === 1) {
		return function array_bind_l1() {
			var l2 = arguments.length;
			if(l2 === 0) { return f.call(self); }
			if(l2 === 1) { return f.call(self, arguments[0]); }
			if(l2 === 2) { return f.call(self, arguments[0], arguments[1]); }
			if(l2 === 3) { return f.call(self, arguments[0], arguments[1], arguments[2]); }
			if(l2 === 4) { return f.call(self, arguments[0], arguments[1], arguments[2], arguments[3]); }
			if(l2 === 5) { return f.call(self, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]); }
			throw new TypeError("The function was called with too many arguments (" + l2 + ")");
		};
	}

	var a1 = arguments[1];
	if(l === 2) {
		return function array_bind_l2() {
			var l2 = arguments.length;
			if(l2 === 0) { return f.call(self, a1); }
			if(l2 === 1) { return f.call(self, a1, arguments[0]); }
			if(l2 === 2) { return f.call(self, a1, arguments[0], arguments[1]); }
			if(l2 === 3) { return f.call(self, a1, arguments[0], arguments[1], arguments[2]); }
			if(l2 === 4) { return f.call(self, a1, arguments[0], arguments[1], arguments[2], arguments[3]); }
			if(l2 === 5) { return f.call(self, a1, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]); }
			throw new TypeError("The function was called with too many arguments (" + l2 + ")");
		};
	}

	var a2 = arguments[2];
	if(l === 3) {
		return function array_bind_l3() {
			var l2 = arguments.length;
			if(l2 === 0) { return f.call(self, a1, a2); }
			if(l2 === 1) { return f.call(self, a1, a2, arguments[0]); }
			if(l2 === 2) { return f.call(self, a1, a2, arguments[0], arguments[1]); }
			if(l2 === 3) { return f.call(self, a1, a2, arguments[0], arguments[1], arguments[2]); }
			if(l2 === 4) { return f.call(self, a1, a2, arguments[0], arguments[1], arguments[2], arguments[3]); }
			if(l2 === 5) { return f.call(self, a1, a2, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]); }
			throw new TypeError("The function was called with too many arguments (" + l2 + ")");
		};
	}

	var a3 = arguments[3];
	if(l === 4) {
		return function array_bind_l4() {
			var l2 = arguments.length;
			if(l2 === 0) { return f.call(self, a1, a2, a3); }
			if(l2 === 1) { return f.call(self, a1, a2, a3, arguments[0]); }
			if(l2 === 2) { return f.call(self, a1, a2, a3, arguments[0], arguments[1]); }
			if(l2 === 3) { return f.call(self, a1, a2, a3, arguments[0], arguments[1], arguments[2]); }
			if(l2 === 4) { return f.call(self, a1, a2, a3, arguments[0], arguments[1], arguments[2], arguments[3]); }
			if(l2 === 5) { return f.call(self, a1, a2, a3, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]); }
			throw new TypeError("The function was called with too many arguments (" + l2 + ")");
		};
	}

	var a4 = arguments[4];
	if(l === 5) {
		return function array_bind_l5() {
			var l2 = arguments.length;
			if(l2 === 0) { return f.call(self, a1, a2, a3, a4); }
			if(l2 === 1) { return f.call(self, a1, a2, a3, a4, arguments[0]); }
			if(l2 === 2) { return f.call(self, a1, a2, a3, a4, arguments[0], arguments[1]); }
			if(l2 === 3) { return f.call(self, a1, a2, a3, a4, arguments[0], arguments[1], arguments[2]); }
			if(l2 === 4) { return f.call(self, a1, a2, a3, a4, arguments[0], arguments[1], arguments[2], arguments[3]); }
			if(l2 === 5) { return f.call(self, a1, a2, a3, a4, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]); }
			throw new TypeError("The function was called with too many arguments (" + l2 + ")");
		};
	}

	var a5 = arguments[5];
	if(l === 6) {
		return function array_bind_l6() {
			var l2 = arguments.length;
			if(l2 === 0) { return f.call(self, a1, a2, a3, a4, a5); }
			if(l2 === 1) { return f.call(self, a1, a2, a3, a4, a5, arguments[0]); }
			if(l2 === 2) { return f.call(self, a1, a2, a3, a4, a5, arguments[0], arguments[1]); }
			if(l2 === 3) { return f.call(self, a1, a2, a3, a4, a5, arguments[0], arguments[1], arguments[2]); }
			if(l2 === 4) { return f.call(self, a1, a2, a3, a4, a5, arguments[0], arguments[1], arguments[2], arguments[3]); }
			if(l2 === 5) { return f.call(self, a1, a2, a3, a4, a5, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]); }
			throw new TypeError("The function was called with too many arguments (" + l2 + ")");
		};
	}

	throw new TypeError("FUNCTION(...).bind() does not support more than five arguments");
};
