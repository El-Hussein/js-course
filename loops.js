// loops
console.log("loops");

/**
 * for => condition, start, step, iterator
 * for(initialize ; condition ; step){
 *      body
 * }
 *
 * we can break the loop at any time depending on a condition using the keyword " break "
 */
/**
 *
 **
 ***
 ****
 *****
 */
let numberOfRows = 10;
for (let row = 1; row <= numberOfRows; row++) {
  for (let col = 1; col <= row; col++) {
    document.write(" * ");
  }
  document.write("<br/>");
}

// logs all even number between 1 and 100 inclusive
for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}

let number = 23;
let check = true;

for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    check = false;
    break; // finish loop and exit the for
  }
}

if (check) {
  console.log("prime");
} else {
  console.log("not prime");
}


/**
 * assignments
 * 
 * assignment1:
 * draw the following pattern
 * 

0 0 0 1 0 0 0
0 0 1 1 1 0 0
0 1 1 1 1 1 0
1 1 1 1 1 1 1

 * given a number x print all Fibonacci to this number
 * example given 16
 * 1, 2, 3, 5, 8, 13
 * 
 * example given 45
 * 1, 2, 3, 5, 8, 13, 21, 34

 */