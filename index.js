// Functional approach to calculate the sum of positive numbers in an array

/**
 * Function to calculate the sum of positive numbers in an array.
 * @param {Array} numbers - The array of numbers.
 * @returns {number} - The sum of positive numbers.
 */
function getPositiveSum(numbers) {
  // Initialize the sum
  let sum = 0;

  // Loop through each number in the array
  for (let number of numbers) {
    // Check if the number is positive
    if (number > 0) {
      // Add the positive number to the sum
      sum += number;
    }
  }

  // Return the sum of positive numbers
  return sum;
}

// Test the function with example input
const numbers = [2, -4, 6, -8, 10, -12];
const positiveSum = getPositiveSum(numbers);

// Print the input and output
console.log(`Input: [${numbers.join(', ')}]`);
console.log(`Output: ${positiveSum}`);
