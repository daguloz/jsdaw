/*
 * 
 * Autor: Daniel Gutiérrez Lozano
 * 30/09/2014
 *
 * typeof operator
 * undefined/null/Infinity/-Infinity
 *
 */




var var1 = 27;
console.log(typeof var1);  // "number"

var var2 = "sup";
console.log(typeof var2);  // "string"

var var3 = true;
console.log(typeof var3);  // "boolean"

var obj1 = {};
console.log(typeof obj1);  // "object"

var obj2 = [];
console.log(typeof obj2);  // "object"

var var4;
console.log(typeof var4);  // "undefined"

// typeof doesn't check if the variable has been declared
console.log(typeof var5);  // "undefined"


var num1 = 5/0;
console.log(num1);  // "Infinity"
console.log(num1 * -1);  // "-Infinity"