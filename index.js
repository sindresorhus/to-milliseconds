'use strict'

module.exports = object => {
	let ms = 0

	for (const [key, value] of Object.entries(object)) {
		if (typeof value !== 'number') {
			throw new TypeError(`Expected a \`number\` for key \`${key}\`, got \`${value}\` (${typeof value})`)
		}

		switch (key) {
			case 'days':
				ms += value * 864e5
				break
			case 'hours':
				ms += value * 36e5
				break
			case 'minutes':
				ms += value * 6e4
				break
			case 'seconds':
				ms += value * 1e3
				break
			case 'milliseconds':
				ms += value
				break
			case 'microseconds':
				ms += value / 1e3
				break
			case 'nanoseconds':
				ms += value / 1e6
				break
			default:
				throw new Error('Unsupported time key')
		}
	}

	return ms
}
