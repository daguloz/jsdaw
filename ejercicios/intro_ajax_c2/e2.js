/*
 * 
 * Autor: Daniel Gutiérrez Lozano
 * 30/09/2014
 *
 * Uninitialized variables values
 * 
 */

var example;

// This will print "Value of a declared but uninitialized variable: undefined"
console.log('Value of "example", a declared but uninitialized variable: ' + example);

if (example === undefined) {
	console.log('Condition (example === undefined) evaluates as true');
}

// This gives an error (ReferenceError: example2 is not defined)
// console.log("Value of a undeclared variable: " + example2);