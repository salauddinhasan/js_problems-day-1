// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.

// first solution
let a = 5;
let b = 10;
b = b - a;
a = b + a;
console.log(a, b);

// // seconde solution
let p = 2;
let c = 5;

[p, c] = [c, p];
console.log(p, c);

// Problem 2: Check Even or Odd  [Easy]
// Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
// Example:
// Input: 4  → Output: trueInput: 7  → Output: false
// Hint: Use the modulus (%) operator.

// first solution
function number(num) {
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("odd");
  }
}
let result = number(8);

// second solution
function isEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
let result = isEven(8);
console.log(result);
