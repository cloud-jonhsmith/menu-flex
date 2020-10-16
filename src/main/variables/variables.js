"use strict";
/*-------------------------------------
                Variables
-------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayBoxes = exports.quantityImages = exports.$childrenSliderContainer = exports.$sliderContainer = exports.close = exports.modal = exports.arrowRight = exports.arrowLeft = exports.menu = exports.cross = exports.icono = exports.cajas = exports.alturaNav = void 0;
exports.alturaNav = document.getElementById("nav-container");
exports.cajas = document.getElementById("cajas");
//controla el icono hamburger y el cross del menu
exports.icono = document.getElementById("menu-movil");
exports.cross = document.getElementById("cross");
//controla los items (HOME,CONTACT,ABOUT)
exports.menu = document.getElementById("menu");
//variables para manipular la visibilidad de las flechas
exports.arrowLeft = document.getElementById('b-izq');
exports.arrowRight = document.getElementById('b-der');
//todas las imágenes se encuentran dentro de una etiqueda dialog(id=modal)
exports.modal = document.getElementById('modal');
//cross para cerrar las imagenes
exports.close = document.getElementById('close');
//variable para crear los nodos del slider
exports.$sliderContainer = document.querySelector(".slider-container");
//se obtienen los nodos hijos de $sliderContainer
exports.$childrenSliderContainer = document.getElementsByClassName("imagenes");
//variable para obtener el numero de la caja seleccionada
exports.quantityImages = 0;
var quantityBoxes = 5;
//se guardan los elementos de cada cuadrado dentro de un arreglo
exports.arrayBoxes = [];
for (var i = 0; i < quantityBoxes; i++) {
    exports.arrayBoxes[i] = document.getElementById("caja" + (i + 1));
}
