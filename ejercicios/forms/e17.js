/*
 * 
 * Autor: Daniel Gutiérrez
 * 07/10/2014
 *
 * Mejorar el ejemplo anterior indicando en todo momento al usuario el número de
 * caracteres que aún puede escribir. Además, se debe permitir pulsar las teclas
 * Backspace, Supr. y las flechas horizontales cuando se haya llegado al máximo
 * número de caracteres.
 *
 */

// Store the maximum characters for the textarea element
var maxChars;

// Limits the textarea element when a the maximum length is reached
function limit(textMaxChars) {
	var text = document.getElementById('text');
	var info = document.getElementById('info');
	maxChars = textMaxChars;

	// Trying to press a key when the limit is reached
	if (text.value.length >= maxChars ) {
		if (
			// Allow some keys to be pressed
			( (event.keyCode >= 35) && (event.keyCode <= 40) ) || // Home, end, arrows
			(event.keyCode == 8) || // Backspace
			(event.keyCode == 46) // Delete
			) {
			return true;
		}
		else {
			// Deny all other keys
			return false;
		}
	}


	else {
		return true;
	}
}

// Updates the remaining characters string
function showRemaining(event) {
	var info = document.getElementById('info');
	var text = document.getElementById('text');

	console.log('caracteres actuales: ' + text.value.length);
	if (typeof maxChars != 'undefined'){
		info.innerHTML = ('Caracteres restantes: ' + (maxChars - text.value.length));
	}
}

window.onload = function() {
    var text = document.getElementById('text');
    document.onkeyup = showRemaining;
}