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

describe('union', function() {

	test('Test union de [85;87] et [90;93]', () => {
		var interval_1 = new Interval(85, 87);
		var interval_2 = new Interval(90, 93);
		expect(interval_1.union(interval_2)).toStrictEqual([85,86,87,90,91,92,93]);
	});


	test('Test union de [85;87] et [86;89]', () => {
		var interval_1 = new Interval(85, 87);
		var interval_2 = new Interval(86, 89);
		expect(interval_1.union(interval_2)).toStrictEqual([85,86,87,88,89]);
	});
});

describe('intersection', function() {

	test('Test intersection de [85;87] et [86;90]', () => {
		var intersec_1 = new Interval(85, 87);
		var intersec_2 = new Interval(86, 90);
		expect(intersec_1.intersection(intersec_2)).toStrictEqual([86,87]);
	});

	test('Test intersection de [85;90] et [86;90]', () => {
		var intersec_1 = new Interval(85, 90);
		var intersec_2 = new Interval(86, 90);
		expect(intersec_1.intersection(intersec_2)).toStrictEqual([86,87,88,89,90]);
	});

	test('Test intersection de [85;90] et [86;89]', () => {
		var intersec_1 = new Interval(85, 90);
		var intersec_2 = new Interval(86, 89);
		expect(intersec_1.intersection(intersec_2)).toStrictEqual([86,87,88,89]);
	});

	test('Test intersection de [85;87] et [88;90]', () => {
		var intersec_1 = new Interval(85, 87);
		var intersec_2 = new Interval(88, 90);
		expect(intersec_1.intersection(intersec_2)).toStrictEqual([]);
	});
});


describe('exclusion', function() {

	test('Test exclusion de [1;4] et [2;6]', () => {
		var exclusion_1 = new Interval(1,4);
		var exclusion_2 = new Interval(2,6);
		expect(exclusion_1.exclusion(exclusion_2)).toStrictEqual([1,5,6]);
	});

	test('Test exclusion de [1;3] et [7;9]', () => {
		var exclusion_1 = new Interval(1,3);
		var exclusion_2 = new Interval(7,9);
		expect(exclusion_1.exclusion(exclusion_2)).toStrictEqual([1,2,3,7,8,9]);
	});
});
