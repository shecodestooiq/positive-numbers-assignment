class NumberArray {
  constructor(numbers) {
    this.numbers = numbers;
  }

  getPositiveSum = () => {
    return this.numbers.reduce((sum, number) => { //return of the function is the return of the reduce function 
      if (number > 0) {
        return sum + number; //this return is that of the if statement which return the value to the reduce function to go again
      }
      return sum; //this is the return of the reduce function that feeds into the getPositiveSum's return 
    }, 0);
  }

  // getPositiveSum() {
  //   let sum = 0;
  //   for (let number of this.numbers) {
  //     if (number > 0) {
  //       sum += number;
  //     }
  //   }
  //   return sum;
  // }
}

const numbers = [2, -4, 6, -8, 10, -12];
const numberArray = new NumberArray(numbers);
const positiveSum = numberArray.getPositiveSum();

// Input: [2, -4, 6, -8, 10, -12]
// Output: 18

console.log(positiveSum);