// class NumberArray {
//   constructor(numbers) {
//     this.numbers = numbers;
//   }

//   getPositiveSum() {
//     let sum = 0;
//     for (let number of this.numbers) {
//       if (number > 0) {
//         sum += number;
//       }
//     }
//     return sum;
//   }
// }

class NumberArray {  
  constructor(numbers) {
    this.numbers = numbers
  }

  getPositiveSum() {
    const positiveNumbers = this.numbers.filter(number => number > 0)  //const is added in ES6 to hold values that won't be reassigned
     //i used map and .filter to make a new array with only posative numbers instead of if 
    const positiveSum = positiveNumbers.reduce((sum, number) => sum + number, 0) 

    //Used reduce instead of a for loop to iterate over the positive array and add it's numbers
   
    return positiveSum
  }
  
}


const numbers = [2, -4, 6, -8, 10, -12];
const numberArray = new NumberArray(numbers);
const positiveSum = numberArray.getPositiveSum();

// Input: [2, -4, 6, -8, 10, -12]
// Output: 18
console.log(numberArray)
console.log(positiveSum)