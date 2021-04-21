export interface TimeDescriptor {
	readonly days?: number;
	readonly hours?: number;
	readonly minutes?: number;
	readonly seconds?: number;
	readonly milliseconds?: number;
	readonly microseconds?: number;
	readonly nanoseconds?: number;
}

/**
Convert an object of time properties to milliseconds: `{seconds: 2}` → `2000`.

@example
```
import toMilliseconds from '@sindresorhus/to-milliseconds';

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
*/
export default function toMilliseconds(timeDescriptor: TimeDescriptor): number;
