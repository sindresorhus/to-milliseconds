import test from 'ava';
import toMilliseconds from './index.js';

test('convert an object to milliseconds', t => {
	t.deepEqual(
		toMilliseconds({
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 1,
			milliseconds: 400,
			microseconds: 0,
			nanoseconds: 0
		}),
		1000 + 400
	);

	t.deepEqual(
		toMilliseconds({
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 55,
			milliseconds: 0,
			microseconds: 0,
			nanoseconds: 0
		}),
		1000 * 55
	);

	t.deepEqual(
		toMilliseconds({
			days: 0,
			hours: 0,
			minutes: 1,
			seconds: 7,
			milliseconds: 0,
			microseconds: 0,
			nanoseconds: 0
		}),
		1000 * 67
	);

	t.deepEqual(
		toMilliseconds({
			days: 0,
			hours: 0,
			minutes: 5,
			seconds: 0,
			milliseconds: 0,
			microseconds: 0,
			nanoseconds: 0
		}),
		1000 * 60 * 5
	);

	t.deepEqual(
		toMilliseconds({
			days: 0,
			hours: 1,
			minutes: 7,
			seconds: 0,
			milliseconds: 0,
			microseconds: 0,
			nanoseconds: 0
		}),
		1000 * 60 * 67
	);

	t.deepEqual(
		toMilliseconds({
			days: 0,
			hours: 12,
			minutes: 0,
			seconds: 0,
			milliseconds: 0,
			microseconds: 0,
			nanoseconds: 0
		}),
		1000 * 60 * 60 * 12
	);

	t.deepEqual(
		toMilliseconds({
			days: 1,
			hours: 16,
			minutes: 0,
			seconds: 0,
			milliseconds: 0,
			microseconds: 0,
			nanoseconds: 0
		}),
		1000 * 60 * 60 * 40
	);

	t.deepEqual(
		toMilliseconds({
			days: 41,
			hours: 15,
			minutes: 0,
			seconds: 0,
			milliseconds: 0,
			microseconds: 0,
			nanoseconds: 0
		}),
		1000 * 60 * 60 * 999
	);

	t.deepEqual(
		toMilliseconds({
			days: 0,
			hours: 0,
			minutes: 1,
			seconds: 0,
			milliseconds: 500,
			microseconds: 345,
			nanoseconds: 678
		}),
		(1000 * 60) + 500 + 0.345678
	);

	t.is(
		toMilliseconds({
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0,
			microseconds: 0,
			nanoseconds: 543
		}),
		0.000543
	);
});

test('can leave out properties', t => {
	t.deepEqual(
		toMilliseconds({
			seconds: 1,
			milliseconds: 400
		}),
		1000 + 400
	);
});

test('handle negative values', t => {
	t.deepEqual(
		toMilliseconds({
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: -10,
			milliseconds: 400,
			microseconds: 0,
			nanoseconds: 0
		}),
		(-10 * 1000) + 400
	);
});

test('throws on unsupported key', t => {
	t.throws(() => {
		toMilliseconds({
			foo: 1,
			milliseconds: 400
		});
	}, {
		message: /Unsupported time key/
	});
});

test('throws on non-number value', t => {
	t.throws(() => {
		toMilliseconds({
			milliseconds: true
		});
	}, {
		message: /Expected a `number` for key `milliseconds`/
	});
});
