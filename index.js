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

// const numbers = [2, -4, 6, -8, 10, -12];
// const numberArray = new NumberArray(numbers);
// const positiveSum = numberArray.getPositiveSum();

// Input: [2, -4, 6, -8, 10, -12]
// Output: 18

getPositiveSum = () => {
  let sum = 0;
  for (let number of numbers) {
    if (number > 0) {
      sum += number;
    }
  }
  return sum;
}
module.exports = getPositiveSum;
const numbers = [2, -4, 6, -8, 10, -12];
console.log(getPositiveSum(numbers));


// //Functions do specific things, classes are specific things.
// Classes often have methods, which are functions that are associated with
// a particular class, and do things associated with the thing that the class is -
// but if all you want is to do something, a function is all you need.
