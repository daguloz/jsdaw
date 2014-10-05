/*
 * 
 * Autor: Daniel Gutiérrez
 * 04/10/2014
 *
 * Completar el código JavaScript proporcionado para que cuando se pinche sobre
 * el enlace se muestre completo el contenido de texto. Además, el enlace debe
 * dejar de mostrarse después de pulsarlo por primera vez. La acción de pinchar
 * sobre un enlace forma parte de los "Eventos" de JavaScript que se ven en el
 * siguiente capítulo. En este ejercicio, sólo se debe saber que al pinchar
 * sobre el enlace, se ejecuta la función llamada muestra().
 * 
 */

 function muestra() {

 	// Get the elements
 	var hidden = document.getElementById('adicional');
 	var link = document.getElementById('enlace');

 	// Changes the elements' classes
 	hidden.className = 'visible';
 	link.className = 'oculto';


}