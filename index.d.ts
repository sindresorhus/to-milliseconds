export interface TimeSpec {
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
*/
export default function toMilliseconds(input: TimeSpec): number;
