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
/* funcion que controla el icono hamburger */
icono.addEventListener("click", function(){
    menu.style.left="0"
    icono.style.display="none"
    cross.style.display="flex"
    cross.style.alignSelf="flex-end"
    menu.style.left="0"
    cajas.style.display="none"
    alturaNav.style.height="100vh"
})

/* función que controla el icono cross */
cross.addEventListener("click", function(){
    cross.style.display="none"
    menu.style.left="-10em"
    icono.style.display="flex"
    cajas.style.display="flex"
    alturaNav.style.height="var(--alturaNav)"
})

/* funcion que captura el resize de la pantalla 
y controla la vista del menu, los iconos, altura del nav,
vista de las cajas */
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
/* ----------------------------------------------
--------------- MODAL ---------------------------
---------------------------------------------- */
const modal = document.getElementById('modal');
const close = document.getElementById('close');
/* const button = document.getElementById('button'); */
const c2 = document.getElementById('caja2');
const c3 = document.getElementById('caja3');
const c4 = document.getElementById('caja4');
const c5 = document.getElementById('caja5');
/* button.addEventListener('click' , () => {modal.setAttribute('open','true')
}) */
close.addEventListener('click' , () => {modal.removeAttribute('open')
})

c2.addEventListener('click' , () => {modal.setAttribute('open','true')
var cantidad2 = parseInt(c2.innerHTML);
})
c3.addEventListener('click' , function(){
    modal.setAttribute('open','true');
    var cantidad3 = parseInt(c3.innerHTML);
});
c4.addEventListener('click' , function(){
    modal.setAttribute('open','true');
    var cantidad4 = parseInt(c4.innerHTML);
});
c5.addEventListener('click' , function(){
    modal.setAttribute('open','true');
    var cantidad5 = parseInt(c5.innerHTML);
});

/* slider */

var slideIndex = 1;
        showDivs(slideIndex);
        
function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("imagenes");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";  
}