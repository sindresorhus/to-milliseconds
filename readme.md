# to-milliseconds [![Build Status](https://travis-ci.org/sindresorhus/to-milliseconds.svg?branch=master)](https://travis-ci.org/sindresorhus/to-milliseconds)

> Convert an object of time properties to milliseconds: `{seconds: 2}` → `2000`


## Install

```
$ npm install @sindresorhus/to-milliseconds
```


## Usage

```js
const toMilliseconds = require('@sindresorhus/to-milliseconds');

toMilliseconds({
	days: 15,
	hours: 11,
	minutes: 23,
	seconds: 20,
	milliseconds: 1
});
//=> 1337000001

setTimeout(() => {
	// …
}, toMilliseconds({minutes: 2}));
```


## API

### toMilliseconds(input)

#### input

Type: `Object`

Specify an object with any of the following properties:

- `days`
- `hours`
- `minutes`
- `seconds`
- `milliseconds`
- `microseconds`
- `nanoseconds`


## Related

- [parse-ms](https://github.com/sindresorhus/parse-ms) - The inverse of this module
- [pretty-ms](https://github.com/sindresorhus/pretty-ms) - Convert milliseconds to a human readable string


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
