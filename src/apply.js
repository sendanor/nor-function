/** Faster apply implementation */

"use strict";

module.exports = function apply_(self, args) {
	var f = this.f;
	//if(arguments.length !== 1) { throw new TypeError("Unexpected amount of arguments (" + arguments.length + ")"); }
	var l = args.length;
	//if(l < 0) { throw new TypeError("Unexpected amount of arguments (" + l + ")"); }

	if(l === 0) { return f.call(self); }
	if(l === 1) { return f.call(self, args[0]); }
	if(l === 2) { return f.call(self, args[0], args[1]); }
	if(l === 3) { return f.call(self, args[0], args[1], args[2]); }
	if(l === 4) { return f.call(self, args[0], args[1], args[2], args[3]); }
	//if(l === 5) { return f.call(self, args[0], args[1], args[2], args[3], args[4]); }
	//if(l === 6) { return f.call(self, args[0], args[1], args[2], args[3], args[4], args[5]); }
	//if(l === 7) { return f.call(self, args[0], args[1], args[2], args[3], args[4], args[5], args[6]); }
	//if(l === 8) { return f.call(self, args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]); }

	//var Proxy = _proxies[l];
	//if(Proxy === undefined) {
		return f.apply(self, args);
	//}
	//return (new Proxy(f, self, args)).call();

	//debug.warn("More than eight arguments (" + l + ") for nor-function.apply detected... using standard apply.");
};

/* EOF */
