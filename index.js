const unity = {
  days: val => (val * 864e5),
  hours: val => (val * 36e5),
  minutes: val => (val * 6e4),
  seconds: val => (val * 1e3),
  milliseconds: val => (val),
  microseconds: val => (val / 1e3),
  nanoseconds: val => (val / 1e6)
}

const isNum = val => (typeof val === 'number')

const toMiliseconds = (object) => {
  for (const [key, value] of Object.entries(object)) {
    if (isNum(value)) {
      return unity[key](value)
    }
	  
    throw new TypeError(`Expected a \`number\` for key \`${key}\`, got \`${value}\` (${typeof value})`)
  }
}

module.exports = toMiliseconds
