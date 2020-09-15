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

/* var x = document.getElementsByClassName('imagenes');
console.log(x); */
const $sliderContainer = document.querySelector(".slider-container"); //div slider-container, dentro estaran las imagenes
console.log($sliderContainer);

// variables para manipular la visibilidad de las flechas
let izq = document.getElementById('b-izq');
let der = document.getElementById('b-der');
// el valor de la variable cantidad varia segun el cuadrado elegido
var cantidad = 1;

//inicializa el contenedor del slider con 3 imagenes (si presiona la caja3, agrega la imagen2 a la derecha y la imagen3 a la izquierda, si presiona la caja5, agrega la imagen 2 a la derecha y la imagen 5 a la izquierda)
function initImages(n) {
    switch (n) {
        case 1:
        
            const $img1_1 = document.createElement("img");
      
        $img1_1.classList.add("imagenes");
        $img1_1.setAttribute("src","img/img1.png");
        $sliderContainer.appendChild($img1_1);

            break;

        case 2:

            const $img1_2 = document.createElement("img"),//ocupara el primer elemento del contenedor de imagenes ($sliderContainer)
                  $img2_2 = document.createElement("img"),//ocupara el segundo elemento del contenedor de imagenes ($sliderContainer)
                  $img3_2 = document.createElement("img");//ocupara el tercer elemento del contenedor de imagenes ($sliderContainer)
      
        //se agregan los atributos de los nodos
        $img1_2.classList.add("imagenes");
        $img1_2.setAttribute("src","img/img2.png");
        $sliderContainer.appendChild($img1_2)
        $img2_2.classList.add("imagenes");
        $img2_2.setAttribute("src","img/img1.png");
        $sliderContainer.appendChild($img2_2)
        $img3_2.classList.add("imagenes");
        $img3_2.setAttribute("src","img/img2.png");
        $sliderContainer.appendChild($img3_2)
        
        //se agregan las posiciones del primer y ultimo elemento
        $sliderContainer.firstElementChild.style.left = "-500px";
        $sliderContainer.lastElementChild.style.left = "500px";

            break;

        case 3:
        
            const $img1_3 = document.createElement("img"),
                  $img2_3 = document.createElement("img"),
                  $img3_3 = document.createElement("img");
      
        $img1_3.classList.add("imagenes");
        $img1_3.setAttribute("src","img/img3.png");
        $sliderContainer.appendChild($img1_3)
        $img2_3.classList.add("imagenes");
        $img2_3.setAttribute("src","img/img1.png");
        $sliderContainer.appendChild($img2_3)
        $img3_3.classList.add("imagenes");
        $img3_3.setAttribute("src","img/img2.png");
        $sliderContainer.appendChild($img3_3)

        $sliderContainer.firstElementChild.style.left = "-500px";
        $sliderContainer.lastElementChild.style.left = "500px";

            break;

        case 4:
        
            const $img1_4 = document.createElement("img"),
                  $img2_4 = document.createElement("img"),
                  $img3_4 = document.createElement("img");
      
        $img1_4.classList.add("imagenes");
        $img1_4.setAttribute("src","img/img4.png");
        $sliderContainer.appendChild($img1_4)
        $img2_4.classList.add("imagenes");
        $img2_4.setAttribute("src","img/img1.png");
        $sliderContainer.appendChild($img2_4)
        $img3_4.classList.add("imagenes");
        $img3_4.setAttribute("src","img/img2.png");
        $sliderContainer.appendChild($img3_4)

        $sliderContainer.firstElementChild.style.left = "-500px";
        $sliderContainer.lastElementChild.style.left = "500px";

            break;

        case 5:
        
            const $img1_5 = document.createElement("img"),
                  $img2_5 = document.createElement("img"),
                  $img3_5 = document.createElement("img");
      
        $img1_5.classList.add("imagenes");
        $img1_5.setAttribute("src","img/img5.png");
        $sliderContainer.appendChild($img1_5)
        $img2_5.classList.add("imagenes");
        $img2_5.setAttribute("src","img/img1.png");
        $sliderContainer.appendChild($img2_5)
        $img3_5.classList.add("imagenes");
        $img3_5.setAttribute("src","img/img2.png");
        $sliderContainer.appendChild($img3_5)
        
        $sliderContainer.firstElementChild.style.left = "-500px";
        $sliderContainer.lastElementChild.style.left = "500px";

            break;
    
        default:
            break;
    }
}

//n aumenta de 1 en 1 cada vez que se presionan las fechas de derecha o izquierda, esta funcion agrega un nodo al inicio, que se va a mostrar al deslizar hacia la derecha
function addNodeLeft(n) {
    if (n%2===0) {
        let $nodo = document.createElement("img");

        $nodo.classList.add("imagenes");
        $nodo.setAttribute("src","img/img1.png");
        $sliderContainer.appendChild($nodo);
        $sliderContainer.lastElementChild.style.left = "500px";
    } else {
        let $nodo = document.createElement("img");

        $nodo.classList.add("imagenes");
        $nodo.setAttribute("src","img/img2.png");
        $sliderContainer.appendChild($nodo);
        $sliderContainer.lastElementChild.style.left = "500px";
    }
}

//n aumenta de 1 en 1 cada vez que se presionan las fechas de derecha o izquierda, esta funcion agrega un nodo al final, que se va a mostrar al deslizar hacia la izquierda
function addNodeRight(n) {
    if (n%2===0) {
        let $nodo = document.createElement("img");

        $nodo.classList.add("imagenes");
        $nodo.setAttribute("src","img/img1.png");
        $sliderContainer.insertBefore($nodo, $sliderContainer.firstChild);
        $sliderContainer.firstElementChild.style.left = "-500px";
    } else {
        let $nodo = document.createElement("img");

        $nodo.classList.add("imagenes");
        $nodo.setAttribute("src","img/img2.png");
        $sliderContainer.insertBefore($nodo, $sliderContainer.firstChild);
        $sliderContainer.firstElementChild.style.left = "-500px";
    }
}

//esta funcion elimina los elementos hijos del contenedor de imagenes dejandolo vacio
function resetImages() {
    //cantidad es el valor que se obtiene al presionar alguna de las 5 cajas, si es 1, el $sliderContainer solo tiene un elemento
    if (cantidad===1) {
        $sliderContainer.removeChild($sliderContainer.children[0]);
    } else {
        $sliderContainer.removeChild($sliderContainer.children[2]);
        $sliderContainer.removeChild($sliderContainer.children[1]);
        $sliderContainer.removeChild($sliderContainer.children[0]);
    }    
}

//valorN sera '1'(presiona el boton derecha) o '-1'(presiona el boton izquierda)
function restartImages(n, valorN) {

    if (valorN > 0) {
        $sliderContainer.removeChild($sliderContainer.children[0]);

        addNodeLeft(n);
    } else {
        $sliderContainer.removeChild($sliderContainer.children[2]);

        addNodeRight(n);
    }
    
}

//al momento de cerrar el slider, restaura el contenedor de imagenes, dejandolo sin ninguna imagen
close.addEventListener('click' , () => {
    modal.removeAttribute('open')
    resetImages();
})

c1.addEventListener('click' , function(){
    izq.style.display="none";
    der.style.display="none";
    modal.setAttribute('open','true');

    cantidad = parseInt(c1.innerHTML);//se obtiene el valor 1
    initImages(cantidad);
});

c2.addEventListener('click' , function(){
    mostrarFlechas();
    modal.setAttribute('open','true');

    cantidad = parseInt(c2.innerHTML);//se obtiene el valor 2
    initImages(cantidad);
});
c3.addEventListener('click' , function(){
    mostrarFlechas();
    modal.setAttribute('open','true');

    cantidad = parseInt(c3.innerHTML);//se obtiene el valor 3
    initImages(cantidad);
});
c4.addEventListener('click' , function(){
    mostrarFlechas();
    modal.setAttribute('open','true');

    cantidad = parseInt(c4.innerHTML);//se obtiene el valor 4
    initImages(cantidad);
});
c5.addEventListener('click' , function(){
    mostrarFlechas();
    modal.setAttribute('open','true');

    cantidad = parseInt(c5.innerHTML);//se obtiene el valor 5
    initImages(cantidad);
});

//slider
var slideIndex = 1;

showDivs(slideIndex,0);

//se activa al pulsar una de las flechas y obtiene valor '1'(boton derecho) o '-1'(boton izquierdo)
function plusDivs(n) {
    showDivs(slideIndex += n, n);
}

function showDivs(n, valorN) {
    //var i;
    //obtiene los elementos de la clase imagenes
    let x = document.getElementsByClassName("imagenes");
    //el numero de imagenes mostradas seran con respecto al valor de cantidad, obtenidos al dar click en cualquiera de los cuadrados
    switch (cantidad) {
        case 1:
            
            break;
        case 2:
        //valorN sera positivo si se presiona la flecha derecha
        if (valorN > 0) {
            x[0].style.left = "-1000px";
            x[1].style.left = "-500px";
            x[2].style.left = "0";
            
            restartImages(n, valorN);
        } else {
            x[0].style.left = "0";
            x[1].style.left = "500px";
            x[2].style.left = "1000px";

            restartImages(n, valorN);
        }   

            break;
        case 3:
            
            
            break;
        case 4:
            
            
            break;
        case 5:
            
            
            break;
    
        default:alert("Error desconocido")
            break;
    }
}