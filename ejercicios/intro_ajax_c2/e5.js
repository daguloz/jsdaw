/*
 * 
 * Autor: Daniel Gutiérrez
 * 30/09/2014
 *
 * Variables changing type
 * instanceof operator
 * operators === and !==
 */


// bool to string
var varBool = false;
var varBoolToString = varBool.toString();
console.log(varBool); // false
console.log(varBoolToString); // "false"
console.log(typeof varBoolToString);  // "string"

// number to string
console.log("\nnumber to string conversion");
var varNum = 27;
var varNumToString = varNum.toString();
console.log(varNum); // 27
console.log(varNumToString); // "27"
console.log(typeof varNumToString);  // "string"

// Operator == converts types
console.log(varNum == varNumToString) // true
// Operator === oesn't convert and compares types
console.log(varNum === varNumToString) // false

// string to number
console.log("\nbool to number conversion");
var varStringToNum = parseInt(varNumToString);
console.log(varStringToNum); // 27
console.log(typeof varStringToNum);  // number

// NOT version of == operator
console.log(varNum != varStringToNum) // false
// NOT version of === operator
console.log(varNum !== varStringToNum) // false

// Example of instanceof operator (returns true when an object is an instance of a class)
console.log("\ninstanceof operator");
var varString = "Hello world!";
var stringObject = new String("Hello world!");
var numberObject = new Number(27);
console.log(varString);  // "Hello world!"
console.log(stringObject);  // "Hello world!"
console.log(numberObject);  // 27

console.log(typeof varString);  // "string"
console.log(typeof stringObject);  // "object"
console.log(typeof numberObject);  // "object"

console.log(varString instanceof String)  // false
console.log(stringObject instanceof String)  // true
console.log(numberObject instanceof String)  // false

