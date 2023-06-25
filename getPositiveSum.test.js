const getPositiveSum = require('./getPositiveSum');

describe('getPositiveSum', () => {
  it('should return the correct sum of positive numbers', () => {
    const numbers = [2, -4, 6, -8, 10, -12];
    const positiveSum = getPositiveSum(numbers);
    expect(positiveSum).toBe(18);
  });
});
