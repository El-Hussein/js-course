console.log("conditions");

let number1, number2;
let operation;
let result;

number1 = 10;
operation = "/";
number2 = 0;

if (operation == "+") {
  result = number1 + number2;
} else if (operation == "-") {
  result = number1 - number2;
} else if (operation == "*") {
  result = number1 * number2;
} else if (operation == "/") {
  // nested if
  if (number2 != 0) {
    result = number1 / number2;
  } else {
    result = 0;
    console.log("Oh can not divide by zero");
  }
}
console.log("result of ", number1, operation, number2, "is:", result);

/* 
    let smoker = false;
    if (smoker) {
    console.log("ooh BAD, :(");
    } else {
    console.log("yeeah GOOD, :)");
    } 
*/

// problem https://www.urionlinejudge.com.br/judge/en/problems/view/1038

let code, quantity;
let totalPrice;
let price;
code = 2;
quantity = 3;
if (code == 1) {
  price = 4;
} else if (code == 2) {
  price = 4.5;
} else if (code == 3) {
  price = 5;
} else if (code == 4) {
  price = 2;
} else if (code == 5) {
  price = 1.5;
}

totalPrice = price * quantity;

console.log("Total: R$", totalPrice);

/**
 * if(l is odd and c is even or l is even and c is odd) then result is black
 * otherwise result is white
 */

let l, c;

l = 6;
c = 9;

let result;
if ((l % 2 == 0 && c % 2 != 0) || (l % 2 != 0 && c % 2 == 0)) {
  result = "black";
} else {
  result = "white";
}

console.log("result", result);

/**
 * 2 - 3 => black
 * 4 - 5 => black
 * 9 - 6 => black
 * 4 - 4 => white
 * 9 - 5 => white
 * 7 - 5 => white
 */
