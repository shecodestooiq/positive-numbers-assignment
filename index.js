class NumberArray {
  constructor(numbers) {
    this.numbers = numbers;
  }

  getPositiveSum() {
    let sum = 0;
    for (let number of this.numbers) {
      if (number > 0) {
        sum += number;
      }
    }
    return sum;
  }
}

console.log("test")

const numbers = [2, -4, 6, -8, 10, -12];
const numberArray = new NumberArray(numbers);
const positiveSum = numberArray.getPositiveSum();

// Input: [2, -4, 6, -8, 10, -12]
// Output: 18
