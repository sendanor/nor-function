/** Faster apply implementation */

"use strict";

//var debug = require('nor-debug');

/*

// Proxy implementation for length 0
function CallProxy0(f, self) {
	this.f = f;
	this.self = self;
}

CallProxy0.prototype.call = function() {
	return this.f.call(this.self);
};

// Proxy implementation for length 1
function CallProxy1(f, self, args) {
	this.f = f;
	this.self = self;
	this.arg0 = args[0];
}

CallProxy1.prototype.call = function() {
	return this.f.call(this.self, this.arg0);
};

// Proxy implementation for length 2
function CallProxy2(f, self, args) {
	this.f = f;
	this.self = self;
	this.arg0 = args[0];
	this.arg1 = args[1];
}

CallProxy2.prototype.call = function() {
	return this.f.call(this.self, this.arg0, this.arg1);
};

// Proxy implementation for length 3
function CallProxy3(f, self, args) {
	this.f = f;
	this.self = self;
	this.arg0 = args[0];
	this.arg1 = args[1];
	this.arg2 = args[2];
}

CallProxy3.prototype.call = function() {
	return this.f.call(this.self, this.arg0, this.arg1, this.arg2);
};

// Proxy implementation for length 4
function CallProxy4(f, self, args) {
	this.f = f;
	this.self = self;
	this.arg0 = args[0];
	this.arg1 = args[1];
	this.arg2 = args[2];
	this.arg3 = args[3];
}

CallProxy4.prototype.call = function() {
	return this.f.call(this.self, this.arg0, this.arg1, this.arg2, this.arg3);
};

// Proxy implementation for length 5
function CallProxy5(f, self, args) {
	this.f = f;
	this.self = self;
	this.arg0 = args[0];
	this.arg1 = args[1];
	this.arg2 = args[2];
	this.arg3 = args[3];
	this.arg4 = args[4];
}

CallProxy5.prototype.call = function() {
	return this.f.call(this.self, this.arg0, this.arg1, this.arg2, this.arg3, this.arg4);
};

// Proxy implementation for length 6
function CallProxy6(f, self, args) {
	this.f = f;
	this.self = self;
	this.arg0 = args[0];
	this.arg1 = args[1];
	this.arg2 = args[2];
	this.arg3 = args[3];
	this.arg4 = args[4];
	this.arg5 = args[5];
}

CallProxy6.prototype.call = function() {
	return this.f.call(this.self, this.arg0, this.arg1, this.arg2, this.arg3, this.arg4, this.arg5);
};

// Proxy implementation for length 7
function CallProxy7(f, self, args) {
	this.f = f;
	this.self = self;
	this.arg0 = args[0];
	this.arg1 = args[1];
	this.arg2 = args[2];
	this.arg3 = args[3];
	this.arg4 = args[4];
	this.arg5 = args[5];
	this.arg6 = args[6];
}

CallProxy7.prototype.call = function() {
	return this.f.call(this.self, this.arg0, this.arg1, this.arg2, this.arg3, this.arg4, this.arg5, this.arg6);
};


// Different proxy constructors
var _proxies = [
	CallProxy0,
	CallProxy1,
	CallProxy2,
	CallProxy3,
	CallProxy4,
	CallProxy5,
	CallProxy6,
	CallProxy7
];

*/

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
