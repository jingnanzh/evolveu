
import math from "./math";

test('Test the math functions', () => {
	console.log('test sum');
	expect(math.sum(1,2)).toBe(3);
	expect(math.sum(4,2)).toBe(6);
});


test('Test the math functions', () => {
	console.log('test difference');
	expect(math.difference(1,2)).toBe(-1);
	expect(math.difference(4,2)).toBe(2);
});

test('Test the math functions', () => {
	console.log('test difference');
	expect(math.multiply(1,-2)).toBe(-2);
	expect(math.multiply(4,2)).toBe(8);
});

test('Test the math functions', () => {
	console.log('test difference');
	expect(math.divide(1,2)).toBe(1/2);
	expect(math.divide(4,2)).toBe(2);
});