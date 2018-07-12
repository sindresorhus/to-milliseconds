'use strict'

const unity = {
	days: val => (val * 864e5),
	hours: val => (val * 36e5),
	minutes: val => (val * 6e4),
	seconds: val => (val * 1e3),
	milliseconds: val => (val),
	microseconds: val => (val / 1e3),
	nanoseconds: val => (val / 1e6)
}

module.exports = object => {
	for (const [key, value] of Object.entries(object)) {
		if (typeof value !== 'number') {
			throw new TypeError(`Expected a \`number\` for key \`${key}\`, got \`${value}\` (${typeof value})`)
		}

		return unity[key](value)
	}
}
