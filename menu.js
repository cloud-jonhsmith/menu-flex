/*-------------------------------------
                Variables
-------------------------------------*/

//controla el icono hamburger
var icono = document.getElementById("menu-movil")
//controla los items (HOME,CONTACT,ABOUT)
var menu = document.getElementById("menu")
//controla el cross al cerrar el menú
var cross = document.getElementById("cross")
//controlar la altura del nav
var alturaNav = document.getElementById("nav-container")
//cuando se abre el menú movil, se oculta el contenido
var cajas = document.getElementById("cajas")

/* -------------------------------------- 
                Funciones
---------------------------------------*/
//funcion que controla el icono hamburger
icono.addEventListener("click", function(){
    menu.style.left="0"
    icono.style.display="none"
    cross.style.display="flex"
    cross.style.alignSelf="flex-end"
    menu.style.left="0"
    cajas.style.display="none"
    alturaNav.style.height="100vh"
})

//función que controla el icono cross
cross.addEventListener("click", function(){
    cross.style.display="none"
    menu.style.left="-10em"
    icono.style.display="flex"
    cajas.style.display="flex"
    alturaNav.style.height="var(--alturaNav)"
})

//funcion que captura el resize de la pantalla y controla la vista del menu, los iconos, altura del nav, vista de las cajas
window.addEventListener("resize", function(event) {
    var nuevoAncho = document.body.clientWidth;
    if (nuevoAncho>715) {
        icono.style.display="none"
        alturaNav.style.height="var(--alturaNav)"
        cross.style.display="none"
    } else {
        if (icono.style.display==='none') {
            icono.style.display="flex"
            alturaNav.style.height="var(--alturaNav)"
            cross.style.display="none"
            cajas.style.display="flex"
            menu.style.left="-10em"
        }
    }
})
//muestra las flechas de izquiera y derecha ocultadas al activar el bloque Nº1
function mostrarFlechas() {
    izq.style.display="block";
    der.style.display="block";
}

/* ----------------------------------------------
--------------- IMAGENES ------------------------
---------------------------------------------- */

// todas las imágenes se encuentran dentro de una etiqueda dialog(id=modal)
const modal = document.getElementById('modal');
// boton para cerrar las imagenes
const close = document.getElementById('close');
// las variables c1,c2,...,c5 se utilizaran para capturar el numero de imagenes que se mostraran
const c1 = document.getElementById('caja1');
const c2 = document.getElementById('caja2');
const c3 = document.getElementById('caja3');
const c4 = document.getElementById('caja4');
const c5 = document.getElementById('caja5');
//id de las imagenes
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let img5 = document.getElementById('img5');
// variables para manipular la visibilidad de las flechas
let izq = document.getElementById('b-izq');
let der = document.getElementById('b-der');
// el valor de la variable cantidad varia segun el cuadrado elegido
var cantidad = 1;

c1.addEventListener('click' , function(){
    izq.style.display="none";
    der.style.display="none";
    modal.setAttribute('open','true');
    cantidad = parseInt(c1.innerHTML);//se obtiene el valor 1
});

c2.addEventListener('click' , function(){
    mostrarFlechas();
    modal.setAttribute('open','true');
    cantidad = parseInt(c2.innerHTML);//se obtiene el valor 2
});
c3.addEventListener('click' , function(){
    mostrarFlechas();
    modal.setAttribute('open','true');
    cantidad = parseInt(c3.innerHTML);//se obtiene el valor 3
});
c4.addEventListener('click' , function(){
    mostrarFlechas();
    modal.setAttribute('open','true');
    cantidad = parseInt(c4.innerHTML);//se obtiene el valor 4
});
c5.addEventListener('click' , function(){
    mostrarFlechas();
    modal.setAttribute('open','true');
    cantidad = parseInt(c5.innerHTML);//se obtiene el valor 5
});

//slider
var slideIndex = 1;

showDivs(slideIndex);

//se activa al pulsar una de las flechas y obtiene valor '1'(boton derecho) o '-1'(boton izquierdo)
function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    //obtiene los elementos de la clase imagenes
    var x = document.getElementsByClassName("imagenes");
    //el numero de imagenes mostradas seran con respecto al valor de cantidad, obtenidos al dar click en cualquiera de los cuadrados
    switch (cantidad) {
        case 1:
            if (n > 1) {slideIndex = 1}
            if (n < 1) {slideIndex = 1}
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            x[slideIndex-1].style.display = "block";
            
            //al cerrar el modal oculta todas la imagen mostrada actualmente y muestra la primera, luego restarura el valor del slideIndex en 1
            close.addEventListener('click' , () => {
                modal.removeAttribute('open')
                x[slideIndex-1].style.display = "none";
                x[0].style.display = "block";
                slideIndex = 1
            })
            break;
        case 2:
            if (n > 2) {slideIndex = 1}
            if (n < 1) {slideIndex = 2}
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            x[slideIndex-1].style.display = "block";
            close.addEventListener('click' , () => {
                modal.removeAttribute('open')
                x[slideIndex-1].style.display = "none";
                x[0].style.display = "block";
                slideIndex = 1
            })
            break;
        case 3:
            if (n > 3) {slideIndex = 1}
            if (n < 1) {slideIndex = 3}
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            x[slideIndex-1].style.display = "block";
            close.addEventListener('click' , () => {
                modal.removeAttribute('open')
                x[slideIndex-1].style.display = "none";
                x[0].style.display = "block";
                slideIndex = 1
            })
            break;
        case 4:
            if (n > 4) {slideIndex = 1}
            if (n < 1) {slideIndex = 4}
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            x[slideIndex-1].style.display = "block";
            close.addEventListener('click' , () => {
                modal.removeAttribute('open')
                x[slideIndex-1].style.display = "none";
                x[0].style.display = "block";
                slideIndex = 1
            })
            break;
        case 5:
            if (n > 5) {slideIndex = 1}
            if (n < 1) {slideIndex = 5}
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            x[slideIndex-1].style.display = "block";
            close.addEventListener('click' , () => {
                modal.removeAttribute('open')
                x[slideIndex-1].style.display = "none";
                x[0].style.display = "block";
                slideIndex = 1
            })
            break;
    
        default:alert("Error desconocido")
            break;
    }
}