/** Benchmarks for different Array join implementations */
"use strict";

module.exports = function capply_(args) {
	var f = this.f;
	//if(arguments.length !== 1) { throw new TypeError("Unexpected amount of arguments (" + arguments.length + ")"); }
	var l = args.length;
	//if(l < 0) { throw new TypeError("Unexpected amount of arguments (" + l + ")"); }
	if(l === 0) { return f(); }
	if(l === 1) { return f(args[0]); }
	if(l === 2) { return f(args[0], args[1]); }
	if(l === 3) { return f(args[0], args[1], args[2]); }
	if(l === 4) { return f(args[0], args[1], args[2], args[3]); }
	if(l === 5) { return f(args[0], args[1], args[2], args[3], args[4]); }
	//debug.warn("More than five arguments (" + l + ") for nor-apply detected... using standard apply.");
	return f.apply(undefined, args);
};

/* EOF */
