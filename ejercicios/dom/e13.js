/*
 * 
 * Autor: Daniel Gutiérrez
 * 04/10/2014
 *
 * Completar el código JavaScript proporcionado para que se añadan nuevos
 * elementos a la lista cada vez que se pulsa sobre el botón. Utilizar las
 * funciones DOM para crear nuevos nodos y añadirlos a la lista existente. Al
 * igual que sucede en el ejercicio anterior, la acción de pinchar sobre un
 * botón forma parte de los "Eventos" de JavaScript que se ven en el siguiente
 * capítulo. En este ejercicio, sólo se debe saber que al pinchar sobre el
 * botón, se ejecuta la función llamada anade().
 * 
 */

function anade() {

	var newContent = ["Lorem ipsum dolor sit amet",
		"Consectetuer adipiscing elit",
		"Sed mattis enim vitae orci",
		"Phasellus libero",
		"Maecenas nisl arcu"
	];

	// Get a random number (0-5)
	var random = Math.round(Math.random() * 4);

	// Create a new text node
	var contentNode = document.createTextNode(newContent[random]);

	// Create a new li element
	var newListElement = document.createElement("li")

	// Get the list element
	var list = document.getElementById('lista');

	// Append text to li, and li to list
	newListElement.appendChild(contentNode);
	list.appendChild(newListElement);

}