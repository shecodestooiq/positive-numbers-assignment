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

const numbers = [2, -4, 6, -8, 10, -12];
const numberArray = new NumberArray(numbers);
const positiveSum = numberArray.getPositiveSum();

// Input: [2, -4, 6, -8, 10, -12]
// Output: 18


/* Functional  version*/
function getPositiveSum(arr) {
    let sum = 0;
    for (let number of arr) {
      if (number > 0) {
        sum += number;
      }
    }
    return sum;
}
console.log(getPositiveSum(numbers))


/* Es6  version*/
const arr = [...numbers]
const getPositiveSumEs6 = (arr) => {
    if(arr.length === 0) {
      return 0;
    }
    let sum = 0;
    for (let number of arr) {
      if (number > 0) {
        sum += number;
      }
    }
    return sum
}

console.log(getPositiveSumEs6(arr))


module.exports = {getPositiveSumEs6}

