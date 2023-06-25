const numbers = [2, -4, 6, -8, 10, -12];

const getPositiveSum = (numbers) => {
  const positiveNumbers = numbers.filter(number => number > 0);
  const sum = positiveNumbers.reduce((acc, curr) => acc + curr, 0);
  return sum;
};

const positiveSum = getPositiveSum(numbers);
console.log(positiveSum); // Output: 18