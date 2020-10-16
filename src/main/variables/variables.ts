/*-------------------------------------
                Variables
-------------------------------------*/

export let alturaNav = document.getElementById("nav-container")!;

export let cajas = document.getElementById("cajas")!;

//controla el icono hamburger y el cross del menu
export let icono = document.getElementById("menu-movil")!;
export let cross = document.getElementById("cross")!;

//controla los items (HOME,CONTACT,ABOUT)
export let menu = document.getElementById("menu")!;

//variables para manipular la visibilidad de las flechas
export let arrowLeft = document.getElementById('b-izq')!;
export let arrowRight = document.getElementById('b-der')!;

//todas las imágenes se encuentran dentro de una etiqueda dialog(id=modal)
export const modal = document.getElementById('modal')!;

//cross para cerrar las imagenes
export const close = document.getElementById('close')!;

//variable para crear los nodos del slider
export const $sliderContainer:any = document.querySelector(".slider-container")!;

//se obtienen los nodos hijos de $sliderContainer
export const $childrenSliderContainer:any = document.getElementsByClassName("imagenes")!;

//variable para obtener el numero de la caja seleccionada
export let quantityImages:number=0;

let quantityBoxes = 5;
//se guardan los elementos de cada cuadrado dentro de un arreglo
export const arrayBoxes:any = [];
for (let i = 0; i < quantityBoxes; i++) {
    arrayBoxes[i]= document.getElementById(`caja${i+1}`);
}