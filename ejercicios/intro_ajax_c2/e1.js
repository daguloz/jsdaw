/*
 * 
 * Autor: Daniel Gutiérrez
 * 30/09/2014
 *
 * This file shows valid variable identifiers in JavaScript
 * 
 */

// First character must be a letter, dollar ($) or an underscore (_).
var varNormal;
var $varDollar;
var _varUnderscore;

// The remaining characters can be any of the previous, and also digits.
var varDigits123;

/* Examples of invalid identifiers */

// Digit as first character
// var 5varDigit;

// Invalid character
// var ten%;

// Any of the reserved words can't be used as variable (or function) identifiers.
var reservedUsed = 'break, else, new, var, case, finally, return, void, catch, '
				 + 'for, switch, while, continue, function, this, with, default, '
				 + 'if, throw, delete, in, try, do, instanceof, typeof';

// These reserved words aren't used yet, but still unavailable as identifiers.
var reservedFuture = 'abstract, enum, int, short, boolean, export, interface, '
				   + 'static, byte, extends, long, super, char, final, native, '
				   + 'synchronized, class, float, package, throws, const, goto, '
				   + 'private, transient, debugger, implements, protected, '
				   + 'volatile, double, import, public';