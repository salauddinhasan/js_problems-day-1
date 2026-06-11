// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.

// first solution
// let a = 5;
// let b = 10;
// b = b - a;
// a = b + a;
// console.log(a, b);

// // // seconde solution
// let p = 2;
// let c = 5;

// [p, c] = [c, p];
// console.log(p, c);

// Problem 2: Check Even or Odd  [Easy]
// Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
// Example:
// Input: 4  → Output: trueInput: 7  → Output: false
// Hint: Use the modulus (%) operator.

// first solution
// function number(num) {
//   if (num % 2 === 0) {
//     console.log("Even");
//   } else {
//     console.log("odd");
//   }
// }
// let result = number(8);

// // second solution
// function isEven(n) {
//   if (n % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let result = isEven(8);
// console.log(result);

// Problem 3: Find the Largest of Three Numbers  [Easy]
// Description: Write a function largest(a, b, c) that returns the largest of three numbers.
// Example:
// Input: 3, 7, 5  → Output: 7
// Hint: Use Math.max() or if-else conditions.

// first solution
// function LargestNumber(a, b, c) {
//   if (a > b && a > c) {
//     return a;
//   } else if (b > a && b > c) {
//     return b;
//   } else {
//     return c;
//   }
// }

// let largest = LargestNumber(3, 7, 5);
// console.log(largest);

// // second solution
// function largestNum(a, b, c) {
//   return Math.max(a, b, c);
// }
// let largest = largestNum(7, 8, 3);
// console.log(largest);

// Problem 4: Celsius to Fahrenheit  [Easy]
// Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.
// Example:
// Input: 0   → Output: 32Input: 100 → Output: 212
// Hint: Formula: (C × 9/5) + 32

// fist solution
// function toFahrenheit(celsius) {
//   let Fahrenheit = (celsius * 9) / 5 + 32;
//   console.log(Fahrenheit);
// }
// let result = toFahrenheit(100);

// // second solution
// function toFahrenheit(celsius) {
//   return (celsius * 9) / 5 + 32;
// }

// let result = toFahrenheit(100);
// console.log(result);

// Problem 5: Check Positive, Negative or Zero  [Easy]
// Description: Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of n.
// Example:
// Input: -5  → Output: 'negative'Input: 0   → Output: 'zero'
// Hint: Use if-else if-else statements.

function checkSign(n) {
  if (n > 0) {
    return "positive";
  } else if (n < 0) {
    return "negative";
  } else {
    return "zero";
  }
}
let result = checkSign(0);
console.log(result);
