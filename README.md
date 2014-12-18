nor-function
============

Function utilities for JavaScript and Node.js

Usage
-----

Install from NPM: `npm install -d nor-function`

### .curry() -- Faster bind() implementation without `this`

```
var FUNCTION = require("nor-function");

function sum(a, b) {
	return a + b;
}

var sum_10 = FUNCTION(sum).curry(10);

30 === sum(10, 20);
30 === sum_10(20);
```

### .bind() -- Faster bind() implementation with support for `this`

```
var FUNCTION = require("nor-function");

var obj = {
	'base': 100,
	'sum': function(a, b) {
		return this.base + a + b;
	}
};

var sum_10 = FUNCTION(obj.sum).bind(obj, 10);

130 === obj.sum(10, 20);
130 === sum_10(20);
```

### Serialize function to String

```
var FUNCTION = require("nor-function");
function foo(a, b) { return a + b; }
var str = FUNCTION(foo).stringify();
str === "function foo(a, b) { return a + b; }";
```

### Unserialize string to function

```
var FUNCTION = require("nor-function");
var str = "function foo(a, b) { return a + b; }";
var fun = FUNCTION.parse(str);
fun(10, 20) === 30;
```

License
-------

[MIT-style](LICENSE)
