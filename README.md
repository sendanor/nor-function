nor-function
============

Function utilities for JavaScript and Node.js

Usage
-----

Install from NPM: `npm install -d nor-function`

### Serialize function to String

```
var FUNCTION = require("nor-function");
function foo(a, b) { return a + b; }
var str = FUNCTION.toString(foo);
str === "function foo(a, b) { return a + b; }";
```

### Unserialize string to function

```
var FUNCTION = require("nor-function");
var str = "function foo(a, b) { return a + b; }";
var fun = FUNCTION.toFunction(str);
fun(10, 20) === 30;
```

License
-------

[MIT-style](LICENSE)
