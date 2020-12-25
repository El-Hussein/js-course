/*
 * variables
 * conditions
 * loops
 * functions
 * ...
 */

// line comment

/*
    block comment
*/

// 0 - 9 -> 1 byte
// 1G => 1024M => 1024KB => 1024B

// value integer, character, string, boolean, array, object
// variable should start with character a-z | A-Z | _
let number1, number2; // define variable

number1 = 10;
number2 = 5;

// operators
// arithmetic operators +,-,*,/,**,%
// output number
let sum = number1 + number2;
let sub = number1 - number2;
let mul = number1 * number2;
let div = number1 / number2;
let power = number1 ** number2;
let mod = number1 % number2;
console.log("arithmetic operators +,-,*,/,**,%");
console.log("numbers are", number1, number2);
console.log("output from sum is =", sum);
console.log("output from sub is =", sub);
console.log("output from mul is =", mul);
console.log("output from div is =", div);
console.log("output from power is =", power);
console.log("output from mod is =", mod);
/**
 * mod examples
 * 12%10 => 2
 * 36%10 => 6
 * 40%8 => 0
 * 23%7 => 2
 */

// Relational operators ==, >, <, >=, <=, !=
// boolean
let equalOp = number1 == number2; // equality
let greaterOp = number1 > number2; // greater
let lessOp = number1 < number2; // less
let greaterOrEqualOp = number1 >= number2; // greater or equal
let lessOrEqualOp = number1 <= number2; // less or equal
let notEqualOp = number1 != number2; // not equal

console.log("Relational operators ==, >, <, >=, <=, !=");
console.log("numbers are", number1, number2);
console.log("output from equalOp is =", equalOp);
console.log("output from greaterOp is =", greaterOp);
console.log("output from lessOp is =", lessOp);
console.log("output from greaterOrEqualOp is =", greaterOrEqualOp);
console.log("output from lessOrEqualOp is =", lessOrEqualOp);
console.log("output from notEqualOp is =", notEqualOp);

// logic operators &, &&, |, ||, !
let andOp = number1 & number2;

let name = "Hamed";
let personAge = 28;
let gender = "male";
let smoker = true;

/**
 * 1) age between 15 - 40
 * 2) gender male
 * 3) smoker
 */

/**
 * && & AND
 * true , true => true
 * true , false => false
 * false, true => false
 * false, false => false
 */

/**
 * || OR
 * true , true => true
 * true , false => true
 * false, true => true
 * false, false => false
 */

/**
 * ! NOT
 * true => false
 * false => true
 */

let isGreaterThanFifteen = personAge >= 15;
let isLessThanForty = personAge <= 40;
let isMale = gender == "male";
let isFemale = gender == "female";


// assignment 1

// make a calculator with operators +, -, /, *

// calculate the area of square, triangle, circle

// girls in grade 3 with 3 to 8 subjects assigned to with score more than 3 given this main data
/**
 * grade = 1 to 6
 * numberOfSubjects = 1 to 8
 * score = 1 to 5
 * gender = female or male
 */

// boys in grade 5 who plays basket and swimming with score less than 3 given this main data
/**
 * grade = 1 to 6
 * availableSports = basket, football, swimming, boxing
 * score = 1 to 5
 * gender = female or male
 */

