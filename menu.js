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









/* //controla el hamburger al hacer click
var menu = document.getElementById("menu-movil")

//controla el cross al cerrar el menú movil
var cross = document.getElementById("cross")

//para activar o desactivar la vista de los items del menú movil
var items = document.getElementById("nav-menu")

//controla los items del menú de navegación
var item1 = document.getElementById("item1")
var item2 = document.getElementById("item2")
var item3 = document.getElementById("item3")

//cuando se abre el menú movil, se oculta el contenido
var cajas = document.getElementById("cajas")

//se usará para variar el height y abarcar toda la pantalla del movil
var container = document.getElementById("container")

//abarcará el 100% del container
var nav = document.getElementById("nav-container")

icono.addEventListener("click", function(){
    menu.style.left="0"
    icono.style.display="none"
    cross.style.display="flex"
    cross.style.alignSelf="flex-end"
    menu.style.left="0"   
})

menu.addEventListener("click", function(){
    menu.style.display="none"
    cross.style.display="block"
    cross.style.alignSelf="flex-end"

    items.style.display="flex"

    item1.style.display="block"
    item2.style.display="block"
    item3.style.display="block"

    cajas.style.display="none"

    container.style.height="1080px"
    nav.style.height="100%"
})

cross.addEventListener("click", function(){
    cross.style.display="none"
    menu.style.display="block"

    item1.style.display="none"
    item2.style.display="none"
    item3.style.display="none"
    location.reload()
})
 */