nor-function
============

Function utilities for JavaScript and Node.js

Usage
-----

Install from NPM: `npm install -d nor-function`

### .curry() -- Faster bind() implementation without `this`

```javascript
var FUNCTION = require("nor-function");

function sum(a, b) {
	return a + b;
}

var sum_10 = FUNCTION(sum).curry(10);

30 === sum(10, 20);
30 === sum_10(20);
```

### .bind() -- Faster bind() implementation with support for `this`

```javascript
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

See [our benchmarks](https://github.com/sendanor/jslabs): 

```
mapping-with-bind x 142,370 ops/sec ±2.04% (83 runs sampled)
mapping-with-custom-bind-2-ifelse x 617,267 ops/sec ±2.88% (77 runs sampled)
mapping-with-custom-bind-2 x 588,005 ops/sec ±2.91% (78 runs sampled)
mapping-with-custom-bind-3 x 635,116 ops/sec ±2.10% (82 runs sampled)
mapping-with-custom-bind-predefined x 608,043 ops/sec ±2.47% (78 runs sampled)
mapping-with-custom-bind x 509,248 ops/sec ±2.75% (84 runs sampled)
mapping-with-function x 592,160 ops/sec ±2.81% (80 runs sampled)
mapping-with-inline-functions x 486,078 ops/sec ±5.05% (82 runs sampled)
mapping-with-nor-function x 590,456 ops/sec ±2.03% (82 runs sampled)
mapping-with-predefined-bind x 198,182 ops/sec ±3.46% (86 runs sampled)
mapping-with-predefined-function x 635,431 ops/sec ±5.07% (76 runs sampled)
Fastest is mapping-with-custom-bind-3,mapping-with-predefined-function,mapping-with-custom-bind-2-ifelse
```

### Serialize function to String

```javascript
var FUNCTION = require("nor-function");
function foo(a, b) { return a + b; }
var str = FUNCTION(foo).stringify();
str === "function foo(a, b) { return a + b; }";
```

### Unserialize string to function

```javascript
var FUNCTION = require("nor-function");
var str = "function foo(a, b) { return a + b; }";
var fun = FUNCTION.parse(str);
fun(10, 20) === 30;
```

License
-------

[MIT-style](LICENSE)
