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
