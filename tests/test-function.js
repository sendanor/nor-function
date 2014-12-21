"use strict";

//var _Q = require('q');
//_Q.longStackSupport = true;

//var crypto = require('crypto');
//var fs = require('nor-fs');
var is = require('nor-is');
var assert = require('assert');
var util = require('util');
var debug = require('nor-debug');
var FUNCTION = require('../src');

/** Run init() at start */
//before(function(done){
//});

/* */
describe('FUNCTION(...)', function(){

	it('FUNCTION is function', function(){
		debug.assert(FUNCTION).is('function');
	});

	it('.curry(10) with one argument function', function(){
		var f = FUNCTION(function(a) { return a; }).curry(10);
		debug.assert(f).is('function');
		debug.assert(f(10)).is('number').equals(10);
		debug.assert(f(10)).is('number').equals(10);
	});

	it('.curry(10) with two argument function', function(){
		var f = FUNCTION(function(a, b) { return a+b; }).curry(10);
		debug.assert(f).is('function');
		debug.assert(f(20)).is('number').equals(30);
		debug.assert(f(40)).is('number').equals(50);
	});

	it('.curry(10) with three argument function', function(){
		var f = FUNCTION(function(a, b, c) { return a+b+c; }).curry(10);
		debug.assert(f).is('function');
		debug.assert(f(20, 30)).is('number').equals(60);
		debug.assert(f(40, 50)).is('number').equals(100);
	});


	it('.curry(10) with four argument function', function(){
		var f = FUNCTION(function(a, b, c, d) { return a+b+c+d; }).curry(10);
		debug.assert(f).is('function');
		debug.assert(f(20, 30, 40)).is('number').equals( 10 + 20 + 30 + 40 );
		debug.assert(f(40, 50, 60)).is('number').equals( 10 + 40 + 50 + 60 );
	});

	it('.curry(10) with five argument function', function(){
		var f = FUNCTION(function(a, b, c, d, e) { return a+b+c+d+e; }).curry(10);
		debug.assert(f).is('function');
		debug.assert(f(20, 30, 40, 50)).is('number').equals( 10 + 20 + 30 + 40 + 50 );
		debug.assert(f(40, 50, 60, 70)).is('number').equals( 10 + 40 + 50 + 60 + 70 );
	});

	it('.curry(10, 20) with one argument function', function(){
		var f = FUNCTION(function(a) { return a; }).curry(10, 20);
		debug.assert(f).is('function');
		debug.assert(f()).is('number').equals(10);
		debug.assert(f()).is('number').equals(10);
		debug.assert(f(40)).is('number').equals(10);
		debug.assert(f(50)).is('number').equals(10);
		debug.assert(f(2, 3)).is('number').equals(10);
	});

	it('.curry(10, 20) with two argument function', function(){
		var f = FUNCTION(function(a, b) { return a + b; }).curry(10, 20);
		debug.assert(f).is('function');
		debug.assert(f()).is('number').equals(30);
		debug.assert(f()).is('number').equals(30);
		debug.assert(f(40)).is('number').equals(30);
		debug.assert(f(50)).is('number').equals(30);
		debug.assert(f(2, 3)).is('number').equals(30);
	});

	it('.curry(10, 20) with three argument function', function(){
		var f = FUNCTION(function(a, b, c) { return a + b + c; }).curry(10, 20);
		debug.assert(f).is('function');
		debug.assert(f()).is('nan');
		debug.assert(f()).is('nan');
		debug.assert(f(40)).is('number').equals(10 + 20 + 40);
		debug.assert(f(50)).is('number').equals(10 + 20 + 50);
		debug.assert(f(2, 3)).is('number').equals(10 + 20 + 2);
		debug.assert(f(30, 40, 50)).is('number').equals(10 + 20 + 30);
	});

	it('.curry(10, 20) with four argument function', function(){
		var f = FUNCTION(function(a, b, c, d) { return a + b + c + d; }).curry(10, 20);
		debug.assert(f).is('function');
		debug.assert(f()).is('nan');
		debug.assert(f()).is('nan');
		debug.assert(f(40)).is('nan');
		debug.assert(f(50)).is('nan');
		debug.assert(f(2, 3)).is('number').equals(10 + 20 + 2 + 3);
		debug.assert(f(30, 40, 50)).is('number').equals(10 + 20 + 30 + 40);
	});

	it('.curry(10, 20) with five argument function', function(){
		var f = FUNCTION(function(a, b, c, d, e) { return a + b + c + d + e; }).curry(10, 20);
		debug.assert(f).is('function');
		debug.assert(f()).is('nan');
		debug.assert(f()).is('nan');
		debug.assert(f(40)).is('nan');
		debug.assert(f(50)).is('nan');
		debug.assert(f(2, 3)).is('nan');
		debug.assert(f(30, 40, 50)).is('number').equals(10 + 20 + 30 + 40 + 50);
	});

	it('.curry(10, 20, 30) with one argument function', function(){
		var f = FUNCTION(function(a) { return a; }).curry(10, 20, 30);
		debug.assert(f).is('function');
		debug.assert(f()).is('number').equals(10);
		debug.assert(f(40)).is('number').equals(10);
		debug.assert(f(50)).is('number').equals(10);
		debug.assert(f(2, 3)).is('number').equals(10);
		debug.assert(f(2, 3, 4)).is('number').equals(10);
	});

	it('.curry(10, 20, 30) with two argument function', function(){
		var f = FUNCTION(function(a, b) { return a + b; }).curry(10, 20, 30);
		debug.assert(f).is('function');
		debug.assert(f()).is('number').equals(10+20);
		debug.assert(f(40)).is('number').equals(10+20);
		debug.assert(f(50)).is('number').equals(10+20);
		debug.assert(f(2, 3)).is('number').equals(10+20);
		debug.assert(f(2, 3, 4)).is('number').equals(10+20);
	});

	it('.curry(10, 20, 30) with three argument function', function(){
		var f = FUNCTION(function(a, b, c) { return a + b + c; }).curry(10, 20, 30);
		debug.assert(f).is('function');
		debug.assert(f()).is('number').equals(10+20+30);
		debug.assert(f(40)).is('number').equals(10+20+30);
		debug.assert(f(50)).is('number').equals(10+20+30);
		debug.assert(f(2, 3)).is('number').equals(10+20+30);
		debug.assert(f(2, 3, 4)).is('number').equals(10+20+30);
	});

	it('.curry(10, 20, 30) with four argument function', function(){
		var f = FUNCTION(function(a, b, c, d) { return a + b + c + d; }).curry(10, 20, 30);
		debug.assert(f).is('function');
		debug.assert(f()).is('nan');
		debug.assert(f(40)).is('number').equals(10+20+30+40);
		debug.assert(f(50)).is('number').equals(10+20+30+50);
		debug.assert(f(2, 3)).is('number').equals(10+20+30+2);
		debug.assert(f(2, 3, 4)).is('number').equals(10+20+30+2);
	});

	it('.curry(10, 20, 30) with five argument function', function(){
		var f = FUNCTION(function(a, b, c, d, e) { return a + b + c + d + e; }).curry(10, 20, 30);
		debug.assert(f).is('function');
		debug.assert(f()).is('nan');
		debug.assert(f(40)).is('nan');
		debug.assert(f(50)).is('nan');
		debug.assert(f(2, 3)).is('number').equals(10+20+30+2+3);
		debug.assert(f(2, 3, 4)).is('number').equals(10+20+30+2+3);
	});

	it('.curry(10, 20, 30, 40) with one argument function', function(){
		var f = FUNCTION(function(a) { return a; }).curry(10, 20, 30, 40);
		debug.assert(f).is('function');
		debug.assert(f()).is('number').equals(10);
		debug.assert(f(40)).is('number').equals(10);
		debug.assert(f(50)).is('number').equals(10);
		debug.assert(f(2, 3)).is('number').equals(10);
		debug.assert(f(2, 3, 4)).is('number').equals(10);
	});

	it('.curry(10, 20, 30, 40) with two argument function', function(){
		var f = FUNCTION(function(a, b) { return a + b; }).curry(10, 20, 30, 40);
		debug.assert(f).is('function');
		debug.assert(f()).is('number').equals(10+20);
		debug.assert(f(40)).is('number').equals(10+20);
		debug.assert(f(50)).is('number').equals(10+20);
		debug.assert(f(2, 3)).is('number').equals(10+20);
		debug.assert(f(2, 3, 4)).is('number').equals(10+20);
	});

	it('.curry(10, 20, 30, 40) with three argument function', function(){
		var f = FUNCTION(function(a, b, c) { return a + b + c; }).curry(10, 20, 30, 40);
		debug.assert(f).is('function');
		debug.assert(f()).is('number').equals(10+20+30);
		debug.assert(f(40)).is('number').equals(10+20+30);
		debug.assert(f(50)).is('number').equals(10+20+30);
		debug.assert(f(2, 3)).is('number').equals(10+20+30);
		debug.assert(f(2, 3, 4)).is('number').equals(10+20+30);
	});

	it('.curry(10, 20, 30, 40) with four argument function', function(){
		var f = FUNCTION(function(a, b, c, d) { return a + b + c + d; }).curry(10, 20, 30, 40);
		debug.assert(f).is('function');
		debug.assert(f()).is('number').equals(10+20+30+40);
		debug.assert(f(40)).is('number').equals(10+20+30+40);
		debug.assert(f(50)).is('number').equals(10+20+30+40);
		debug.assert(f(2, 3)).is('number').equals(10+20+30+40);
		debug.assert(f(2, 3, 4)).is('number').equals(10+20+30+40);
		debug.assert(f(2, 3, 4, 5)).is('number').equals(10+20+30+40);
	});


	it('.curry(10, 20, 30, 40) with five argument function', function(){
		var f = FUNCTION(function(a, b, c, d, e) { return a + b + c + d + e; }).curry(10, 20, 30, 40);
		debug.assert(f).is('function');
		debug.assert(f()).is('nan');
		debug.assert(f(40)).is('number').equals(10+20+30+40+40);
		debug.assert(f(50)).is('number').equals(10+20+30+40+50);
		debug.assert(f(2, 3)).is('number').equals(10+20+30+40+2);
		debug.assert(f(2, 3, 4)).is('number').equals(10+20+30+40+2);
		debug.assert(f(2, 3, 4, 5)).is('number').equals(10+20+30+40+2);
	});

	it('.curry(10, 20, 30, 40, 50) with one argument function', function(){
		var f = FUNCTION(function(a) { return a; }).curry(10, 20, 30, 40, 50);
		debug.assert(f).is('function');
		debug.assert(f()).is('number').equals(10);
		debug.assert(f(40)).is('number').equals(10);
		debug.assert(f(50)).is('number').equals(10);
		debug.assert(f(2, 3)).is('number').equals(10);
		debug.assert(f(2, 3, 4)).is('number').equals(10);
		debug.assert(f(2, 3, 4, 5)).is('number').equals(10);
		debug.assert(f(2, 3, 4, 5, 6)).is('number').equals(10);
	});

	it('.curry(10, 20, 30, 40, 50) with six argument function', function(){
		var f = FUNCTION(function(a, b, c, d, e, f) { return a+b+c+d+e+f; }).curry(10, 20, 30, 40, 50);
		debug.assert(f).is('function');
		debug.assert(f()).is('nan');
		debug.assert(f(40)).is('number').equals(10+20+30+40+50+40);
		debug.assert(f(50)).is('number').equals(10+20+30+40+50+50);
		debug.assert(f(2, 3)).is('number').equals(10+20+30+40+50+2);
		debug.assert(f(2, 3, 4)).is('number').equals(10+20+30+40+50+2);
		debug.assert(f(2, 3, 4, 5)).is('number').equals(10+20+30+40+50+2);
		debug.assert(f(2, 3, 4, 5, 6)).is('number').equals(10+20+30+40+50+2);
	});

	it('.bind(obj)', function(){

		var obj = {
			'x': 0,
			'y': 10,
			'getX': function() {
				return this.x;
			},
			'getY': function() {
				return this.y;
			}
		};

		var get_x = FUNCTION(obj.getX).bind(obj);
		debug.assert(get_x).is('function');
		debug.assert(get_x()).is('number').equals(0);

	});

});

/* EOF */
