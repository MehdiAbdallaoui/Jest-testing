const Util = require('./math');
test('Test factoriel de 0 => 1', () => {
    expect(Util.factorial(0)).toBe(1);
});

test('Test factoriel de 2 => 2', () => {
    expect(Util.factorial(3)).toBe(6);
});

test('Test factoriel de 3 => 6', () => {
    expect(Util.factorial(3)).toBe(6);
});

test('Test factoriel de 3000', () => {
    expect(()=> {Util.factorial(3000)}).toThrow();
});

test('Test factoriel -10', () => {
    expect(()=> {Util.factorial(-10)}).toThrow(/negative/);
});


describe('isPrime', function () {

    test('Test prime de 1 => false', () => {
        expect(Util.isPrime(1)).toBe(false)
    });
    test('Test prime de 0 => false', () => {
        expect(Util.isPrime(0)).toBe(false)
    });
    test('Test prime < 0 => throw exception', () => {
        expect(() => { Util.isPrime(-10) }).toThrow('Unable to compute prime for n < 0');
    });

    test.each([
        [2, true],
        [5, true],
        [17, true],
        [18, false],
        [53, true],
        [55, false],
    ])(
        'isPrime %i equals to %i',
        (n, expected) => {
            expect(Util.isPrime(n)).toBe(expected);
        }
    );
});


describe('sumPrime', function () {

	test('Test sumPrime de 3 => 5', () => {
    		expect(Util.sumPrime(3)).toBe(5);
	});
	test('Test sumPrime de 6 => 10', () => {
    		expect(Util.sumPrime(6)).toBe(10);
	});
	test('Test sumPrime de 0 => throw exception', () => {
		expect(() => { Util.sumPrime(0) }).toThrow('0 is not a prime number!');
	});
	test('Test sumPrime de 1 => throw exception', () => {
		expect(() => { Util.sumPrime(1) }).toThrow('1 is not a prime number!');
	});
});


describe('fizzBuzz', function () {

	test('Test fizzBuzz de 3 => [1,2,"Fizz"]', () => {
    		expect(Util.fizzBuzz(3)).toStrictEqual([1,2,"Fizz"]);
	});

	test('Test fizzBuzz de 6 => [1,2,"Fizz",4,"Buzz","Fizz"]', () => {
    		expect(Util.fizzBuzz(6)).toStrictEqual([1,2,"Fizz",4,"Buzz","Fizz"]);
	});

	test('Test fizzBuzz de 15 => [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]', () => {
		expect(Util.fizzBuzz(15)).toStrictEqual([1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]);
	});

	test('Test fizzBuzz de 0 throw exception => exception', () => {
		expect(() => { Util.fizzBuzz(0) }).toThrow('n should be greater than or equal to 1');
	});
});

describe('cipher', function () {

	test('Test cipher de A => B', () => {
		expect(Util.cipher("A")).toEqual("B");
	});

	test('Test cipher de mehdi => nfiej', () => {
    		expect(Util.cipher("mehdi")).toEqual("nfiej");
	});

	test('Test cipher de Mehdi le meilleur => Nfiej mf nfjmmfvs', () => {
		expect(Util.cipher("Mehdi le meilleur")).toEqual("Nfiej mf nfjmmfvs");
	});
});
