/*
 * 
 * Autor: Daniel Gutiérrez
 * 04/10/2014
 *
 * Utilizando las funciones DOM, mostrar por pantalla la siguiente información:
 * 
 * Número de enlaces de la página
 * Dirección a la que enlaza el penúltimo enlace
 * Numero de enlaces que enlazan a http://prueba/
 * Número de enlaces del tercer párrafo
 * 
 */

window.onload = function() {

	// Get all <a> elements
	var links = document.getElementsByTagName("a");

	// Get all <p> elements
	var paragraphs = document.getElementsByTagName("p");

	// From the third <p> element, get child <a> elements
	var linksThirdParagraph = paragraphs[2].getElementsByTagName("a");

	var count = 0;
	var newContent;

	// Count how many of the <a> elements have an href attribute pointing to 'http://prueba/'
	for (var i = 0; i < links.length; i++) {
		if (links[i].href == 'http://prueba/')
			count++
	};

	// Store content to add to the document later
	newContent = ["Número de enlaces: " + links.length,
					"Dirección del penúltimo enlace: " + links[links.length -2].href,
					"Número de enlaces a http://prueba/: " + count,
					"Número de enlaces del tercer párrafo: " + linksThirdParagraph.length
					]

	// Add nodes with the new content to the document
	document.body.appendChild(document.createElement("br"));
	for (var i = 0; i < newContent.length; i++) {
		var newStrong = document.createElement("strong");
		var newParagraph = document.createElement("p");
		var contentNode = document.createTextNode(newContent[i]);

		newStrong.appendChild(contentNode);
		newParagraph.appendChild(newStrong);
		document.body.appendChild(newParagraph);
	}

}