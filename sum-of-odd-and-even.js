// Task 1
/* Display sum of all the odd numbers from 81 to 131. */
let num1 = 81; // loop variable
let sumOfOddNumbers = 0;
while (num1 <= 131) {
  if (num1 % 2 === 1) {
    sumOfOddNumbers += num1;
    console.log(`odd num: ${num1}`);
  }

  num1++;
}

console.log(`sumOfOddNumbers: ${sumOfOddNumbers}`); // sumOfOddNumbers: 2756

// Task 2
/* Display sum of all the even numbers from 206 to 311. */

let num2 = 206; // loop variable
let sumOfEvenNumbers = 0;
while (num2 <= 311) {
  if (num2 % 2 === 0) {
    console.log(`Even Num: ${num2}`);
    sumOfEvenNumbers += num2;
  }

  num2++;
}

console.log(`sumOfEvenNumbers: ${sumOfEvenNumbers}`); // sumOfEvenNumbers: 13674
