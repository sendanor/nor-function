/* Function Helpers */
"use strict";

var bind = require('./bind.js');
var curry = require('./curry.js');
var stringify = require('./stringify.js');
var parse = require('./parse.js');

function FUNCTION(f) {
	return {
		"bind": bind(f),
		"curry": curry(f),
		"stringify": function() {
			return stringify(f);
		},
		"parse": function() {
			return parse(f);
		}
	};
}

//var debug = require('nor-debug');
FUNCTION.toString = stringify;
FUNCTION.stringify = stringify;

FUNCTION.toFunction = parse;
FUNCTION.parse = parse;

FUNCTION.bind = bind;
FUNCTION.curry = curry;

// Exports
module.exports = FUNCTION;

/* EOF */
