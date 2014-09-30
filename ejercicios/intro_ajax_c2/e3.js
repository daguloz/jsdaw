/*
 * 
 * Autor: Daniel Gutiérrez
 * 30/09/2014
 *
 * Variables locales/globales
 * Ámbito de variables
 * 
 */


/* Local and global variables, and scope */

// Global variables
var global = 'Global';
global2 = "Global 2";

function func() {
	var local = 'Local';
	global3 = 'Global 3';

	console.log('Inside a function');
	console.log('local (var local declared inside the function): ' + local);
	console.log('global (var global declared outside the function): ' + global);
	console.log('global (global2 declared outside the function): ' + global2);
	console.log('global (global3 declared inside the function): ' + global3);
}

func();

console.log("\nOutside the function");
console.log('global (var global declared outside the function): ' + global);
console.log('global (global2 declared outside the function): ' + global2);
console.log('global (global3 declared inside the function): ' + global3);

// Gives an error (ReferenceError: local is not defined)
// console.log('local (var local declared inside the function): ' + local);