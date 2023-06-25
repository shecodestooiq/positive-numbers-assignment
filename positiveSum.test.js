
const { getPositiveSum } = require("/index");


test('returns the sum of positive numbers in the array', () => {
    const arr = [-2, 3, -5, 7, 1, -9, 10];
    const result = getPositiveSum(arr);
    expect(result).toBe(21); // The sum of positive numbers in the array is 3 + 7 + 1 + 10 = 21
});

test('returns 0 if there are no positive numbers in the array', () => {
    const arr = [-2, -5, -9];
    const result = getPositiveSum(arr);
    expect(result).toBe(0); // There are no positive numbers in the array, so the sum should be 0
});

test('returns 0 for an empty array', () => {
    const arr = [];
    const result = getPositiveSum(arr);
    expect(result).toBe(0); // The sum of an empty array should be 0
});

