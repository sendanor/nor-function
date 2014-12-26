/* Function Helpers */
"use strict";

var debug = require('nor-debug/src/core.js');

/** Constructor for our function object */
function NorFunction(f) {
	this.f = f;
}

/** */
NorFunction.prototype.bind = require('./bind.js');
NorFunction.prototype.abind = require('./abind.js');
NorFunction.prototype.curry = require('./curry.js');
NorFunction.prototype.acurry = require('./acurry.js');
NorFunction.prototype.apply = require('./apply.js');
NorFunction.prototype.curryApply = require('./curry-apply.js');
NorFunction.prototype.stringify = require('./stringify.js');
NorFunction.prototype.parseName = require('./parseName.js');

NorFunction.prototype.parse = function() {
	throw new TypeError("FUNCTION(f).parse() is obsolete, and logically incorrect.");
};

function FUNCTION(f) {
	return new NorFunction(f);
}

FUNCTION.parse = require('./parse.js');

FUNCTION.toFunction = function toFunction(s) {
	debug.warn("FUNCTION.toFunction(s) is obsolete, use FUNCTION.parse(s)");
	return FUNCTION.parse(s);
};

FUNCTION.stringify = function stringify(f) {
	debug.warn("FUNCTION.stringify(f) is obsolete, use FUNCTION(f).stringify()");
	return FUNCTION(f).stringify();
};

FUNCTION.toString = function toString(f) {
	debug.warn("FUNCTION.toString(f) is obsolete, use FUNCTION(f).stringify()");
	return FUNCTION(f).stringify();
};

FUNCTION.parseName = function parse_name(f) {
	debug.warn("FUNCTION.parseName(f) is obsolete, use FUNCTION(f).parseName()");
	return FUNCTION(f).parseName();
};

FUNCTION.bind = function() {
	throw new TypeError("FUNCTION.bind(f) is obsolete, use FUNCTION(f).bind()!");
};

FUNCTION.curry = function() {
	throw new TypeError("FUNCTION.curry(f) is obsolete, use FUNCTION(f).curry()!");
};

// Exports
module.exports = FUNCTION;

/* EOF */
