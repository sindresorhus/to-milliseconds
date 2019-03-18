import {expectType} from 'tsd-check';
import toMilliseconds from '.';

expectType<number>(toMilliseconds({days: 15}));
expectType<number>(toMilliseconds({hours: 11}));
expectType<number>(toMilliseconds({minutes: 23}));
expectType<number>(toMilliseconds({seconds: 20}));
expectType<number>(toMilliseconds({milliseconds: 1}));
expectType<number>(toMilliseconds({microseconds: 1}));
expectType<number>(toMilliseconds({nanoseconds: 1}));
