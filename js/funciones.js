//Funciones para el menú desplegable

const menu = document.querySelector("header nav"); //Guardo la navegación del header en una constante
const botones = document.querySelectorAll(".abrir,.cerrar"); //Guardo los botones de abrir (botón hamburguesa) y cerrar (botón "X") en una constante

//Función que añade/quita "desplegado" a la lista de clases del menú. Esta clase hace visible el listado con los enlaces a las páginas de la web
function gestionMenu(evento){
	evento.preventDefault(); //Previene el comportamiento por defecto del navegador
	menu.classList.toggle("desplegado");
}
//Añado un forEach para que se ejecute la función anterior al hacer click en los botones. Cuando clico en el botón de hamburguesa se añade la clase "desplegado" en el nav del header y cuando clico en el botón "X" se quita
botones.forEach(function(boton){
	boton.addEventListener("click",gestionMenu);
});

//Fin menú desplegable