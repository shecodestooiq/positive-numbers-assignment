function getPositiveSum(numbers) {
  let sum = 0;
  for (let number of numbers) {
    if (number > 0) {
      sum += number;
    }
  }
  return sum;
}

const numbers = [2, -4, 6, -8, 10, -12];
const positiveSum = getPositiveSum(numbers);
console.log(positiveSum);

// Input: [2, -4, 6, -8, 10, -12]
// Output: 18