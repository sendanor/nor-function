/* Function Helpers */
"use strict";

/**
 *
 * @param file
 * @param defaultValue
 * @returns {*}
 */
function safe_require (file, defaultValue) {
	try {
		return require(file);
	} catch (err) {
		return defaultValue;
	}
}

var debug = safe_require('nor-debug/src/core.js');

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

/**
 * FUNCTION.toFunction(s) is obsolete, use FUNCTION.parse(s)
 *
 * @param s
 * @returns {Function}
 * @obsolete
 */
FUNCTION.toFunction = function toFunction(s) {
	if (debug) debug.warn("FUNCTION.toFunction(s) is obsolete, use FUNCTION.parse(s)");
	return FUNCTION.parse(s);
};

/**
 * FUNCTION.stringify(f) is obsolete, use FUNCTION(f).stringify()
 *
 * @param f
 * @returns {string|s}
 * @obsolete
 */
FUNCTION.stringify = function stringify(f) {
	if (debug) debug.warn("FUNCTION.stringify(f) is obsolete, use FUNCTION(f).stringify()");
	return FUNCTION(f).stringify();
};

/**
 * FUNCTION.toString(f) is obsolete, use FUNCTION(f).stringify()
 *
 * @param f
 * @returns {string|s}
 * @obsolete
 */
FUNCTION.toString = function toString(f) {
	if (debug) debug.warn("FUNCTION.toString(f) is obsolete, use FUNCTION(f).stringify()");
	return FUNCTION(f).stringify();
};

/**
 * FUNCTION.parseName(f) is obsolete, use FUNCTION(f).parseName()
 *
 * @param f
 * @returns {*|ret}
 * @obsolete
 */
FUNCTION.parseName = function parse_name(f) {
	if (debug) debug.warn("FUNCTION.parseName(f) is obsolete, use FUNCTION(f).parseName()");
	return FUNCTION(f).parseName();
};

/**
 * FUNCTION.bind(f) is obsolete, use FUNCTION(f).bind()
 * @obsolete
 */
FUNCTION.bind = function() {
	throw new TypeError("FUNCTION.bind(f) is obsolete, use FUNCTION(f).bind()!");
};

/**
 * FUNCTION.curry(f) is obsolete, use FUNCTION(f).curry()
 * @obsolete
 */
FUNCTION.curry = function() {
	throw new TypeError("FUNCTION.curry(f) is obsolete, use FUNCTION(f).curry()!");
};

// Exports
module.exports = FUNCTION;

/* EOF */
