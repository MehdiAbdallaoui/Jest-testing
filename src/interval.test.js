const Interval = require('./interval.js');

describe('overlaps', function () {

	test('Test overlaps de [1;5] et [2;7]', () => {
		var interval_1 =  new Interval(2, 7);
		var interval_2 =  new Interval(1, 5);
    		expect(interval_1.overlaps(interval_2)).toBe(true);
	});

	test('Test overlaps de [5;10] et [3;11]', () => {
		var interval_1 =  new Interval(5, 10);
		var interval_2 =  new Interval(3, 11);
    		expect(interval_1.overlaps(interval_2)).toBe(true);
	});

	test('Test overlaps de [15;17] et [3;6]', () => {
		var interval_1 =  new Interval(15, 17);
		var interval_2 =  new Interval(3, 6);
    		expect(interval_1.overlaps(interval_2)).toBe(false);
	});
});

describe('includes', function () {

	test('Test includes de [2;7] et [3;5]', () => {
		var interval_1 =  new Interval(2, 7);
		var interval_2 =  new Interval(3, 5);
    		expect(interval_1.includes(interval_2)).toBe(true);
	});

	test('Test includes de [100;200] et [100;200]', () => {
		var interval_1 =  new Interval(100, 200);
		var interval_2 =  new Interval(100, 200);
    		expect(interval_1.includes(interval_2)).toBe(false);
	});

	test('Test includes de [60;320] et [61;320]', () => {
		var interval_1 =  new Interval(60, 320);
		var interval_2 =  new Interval(61, 320);
    		expect(interval_1.includes(interval_2)).toBe(false);
	});
});


