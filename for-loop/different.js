for (let i = 1; i <= 20; i += 2) {
  //   console.log(i);
}

// give me the list numbers between 1 to 30 divisible by 5
for (let i = 1; i <= 30; i++) {
  if (i % 5 === 0) {
    // console.log(i);
  }
}

// give me the list numbers between 1 to 30 divisible by 5 or 3
for (let i = 1; i <= 30; i++) {
  if (i % 5 === 0 || i % 3 === 0) {
    // console.log(i);
  }
}

// give me the list numbers between 1 to 30 divisible by 5 AND 3
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    // console.log(i);
  }
}


// give me the sum of numbers from 1 to 20 that are divisible by 3
let sum = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    sum += i;
    console.log(i);
  }
}

console.log(`sum: ${sum}`);
