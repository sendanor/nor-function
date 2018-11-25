
"use strict";

/** Returns the name of function `f` */
module.exports = function() {
	var f = this.f;
	var ret = f.toString();
	ret = ret.substr('function '.length);
	ret = ret.substr(0, ret.indexOf('('));
	return ret;
};
