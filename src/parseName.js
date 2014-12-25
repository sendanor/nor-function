
"use strict";

var debug = require('nor-debug');

/** Returns the name of function `f` */
module.exports = function(f) {
	debug.assert(f).is('function');
	var ret = f.toString();
	ret = ret.substr('function '.length);
	ret = ret.substr(0, ret.indexOf('('));
	return ret;
};
