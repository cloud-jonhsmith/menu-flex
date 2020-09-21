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
function showArrows() {
    arrowLeft.style.display="block";
    arrowRight.style.display="block";
}

/* ----------------------------------------------
--------------- IMAGENES ------------------------
---------------------------------------------- */

// todas las imágenes se encuentran dentro de una etiqueda dialog(id=modal)
const modal = document.getElementById('modal');
// boton para cerrar las imagenes
const close = document.getElementById('close');
// las variables c1,c2,c3,c4,c5 se utilizaran para capturar el numero de imagenes que se mostraran, se guardaran en la variable "quantityImagesShow"
const c1 = document.getElementById('caja1');
const c2 = document.getElementById('caja2');
const c3 = document.getElementById('caja3');
const c4 = document.getElementById('caja4');
const c5 = document.getElementById('caja5');
// el valor de la variable "quantityImagesShow" varia segun el cuadrado elegido
var quantityImagesShow = 1;
var slideIndex = 1;

const $sliderContainer = document.querySelector(".slider-container"); //div slider-container, dentro estaran las imagenes
//obtiene los elementos de la clase imagenes
const $childrenSliderContainer = document.getElementsByClassName("imagenes");

// variables para manipular la visibilidad de las flechas
let arrowLeft = document.getElementById('b-izq');
let arrowRight = document.getElementById('b-der');


//inicializa el contenedor del slider con 3 imagenes (si presiona la caja3, agrega la imagen2 a la derecha y la imagen3 a la izquierda, si presiona la caja5, agrega la imagen 2 a la derecha y la imagen 5 a la izquierda)
function initImages(n) {
    switch (n) {
        case 1:
            
            const $nodeOneImage = document.createElement("img");
      
            $nodeOneImage.classList.add("imagenes");
            $nodeOneImage.setAttribute("src","img/img1.png");
            $sliderContainer.appendChild($nodeOneImage);            
            break;

        case 2:
            
            const $nodeTwoImages1 = document.createElement("img"),//ocupara el primer elemento del contenedor de imagenes ($sliderContainer)
            $nodeTwoImages2 = document.createElement("img"),//ocupara el segundo elemento del contenedor de imagenes ($sliderContainer)
            $nodeTwoImages3 = document.createElement("img");//ocupara el tercer elemento del contenedor de imagenes ($sliderContainer)
            
            $nodeTwoImages1.classList.add("imagenes");
            $nodeTwoImages1.setAttribute("src","img/img2.png");
            $sliderContainer.appendChild($nodeTwoImages1);
            loadSliderContainer($nodeTwoImages2,$nodeTwoImages3);
            //se agregan las posiciones del primer y ultimo elemento
            initPosition();                
            break;
                
        case 3:
            
            const $nodeThreeImages1 = document.createElement("img"),
            $nodeThreeImages2 = document.createElement("img"),
            $nodeThreeImages3 = document.createElement("img");
            
            $nodeThreeImages1.classList.add("imagenes");
            $nodeThreeImages1.setAttribute("src","img/img3.png");
            $sliderContainer.appendChild($nodeThreeImages1);
            loadSliderContainer($nodeThreeImages2,$nodeThreeImages3);
            initPosition();            
            break;
                    
        case 4:
            
            const $nodeFourImages1 = document.createElement("img"),
            $nodeFourImages2 = document.createElement("img"),
            $nodeFourImages3 = document.createElement("img");
            
            $nodeFourImages1.classList.add("imagenes");
            $nodeFourImages1.setAttribute("src","img/img4.png");
            $sliderContainer.appendChild($nodeFourImages1);
            loadSliderContainer($nodeFourImages2,$nodeFourImages3);        
            initPosition();            
            break;
                        
        case 5:
            
            const $nodeFiveImages1 = document.createElement("img"),
            $nodeFiveImages2 = document.createElement("img"),
            $nodeFiveImages3 = document.createElement("img");
            
            $nodeFiveImages1.classList.add("imagenes");
            $nodeFiveImages1.setAttribute("src","img/img5.png");
            $sliderContainer.appendChild($nodeFiveImages1);
            loadSliderContainer($nodeFiveImages2,$nodeFiveImages3);        
            initPosition();            
            break;
            
            default:
                break;
    }
}

//valorN sera '1'(presiona el boton derecha) o '-1'(presiona el boton izquierda)
function restartImages(n, valorN, detectaImagen) {
    
    switch (quantityImagesShow) {
        case 1:
        
            break;
        
        case 2:            
            if (valorN > 0) {
                removeNodeLeft();
                addNodeRight(n, detectaImagen);
            } else {
                removeNodeRight();
                addNodeLeft(n, detectaImagen);
            }
            break;
        
        case 3:
            if (valorN > 0) {
                removeNodeLeft();
                addNodeRight(n, detectaImagen);
            } else {
                removeNodeRight();
                addNodeLeft(n, detectaImagen);
            }
            break;
        
        case 4:
            if (valorN > 0) {
                removeNodeLeft();
                addNodeRight(n, detectaImagen);
            } else {
                removeNodeRight();
                addNodeLeft(n, detectaImagen);
            }
            break;
                
        case 5:
            if (valorN > 0) {
                removeNodeLeft();
                addNodeRight(n, detectaImagen);
            } else {
                removeNodeRight();
                addNodeLeft(n, detectaImagen);
            }
            break;
            
        default:
            break;
    }
}
        
const removeNodeLeft = () => {$sliderContainer.removeChild($sliderContainer.children[0]);}
const removeNodeRight = () => {$sliderContainer.removeChild($sliderContainer.children[2]);}

//n aumenta de 1 en 1 cada vez que se presionan las fechas de derecha o izquierda, esta funcion agrega un nodo al inicio, que se va a mostrar al deslizar hacia la derecha
function addNodeLeft(n, detectImg) {
    switch (quantityImagesShow) {
        case 1:
            
            break;

        case 2:
            let $nodeTwoImages = document.createElement("img");
            (detectImg === 'img/img1.png')
                ? insertBeforeSliderImg1($nodeTwoImages)
                : insertBeforeSliderImg2($nodeTwoImages)
            break;

        case 3:
            let $nodeThreeImages = document.createElement("img");
            (detectImg === 'img/img1.png')
                ? insertBeforeSliderImg2($nodeThreeImages)
                : (detectImg === 'img/img2.png')
                    ? insertBeforeSliderImg3($nodeThreeImages)
                    : insertBeforeSliderImg1($nodeThreeImages)
            break;

        case 4:
            let $nodeFourImages = document.createElement("img");
            (detectImg === 'img/img1.png')
                ? insertBeforeSliderImg3($nodeFourImages)
                : (detectImg === 'img/img2.png')
                    ? insertBeforeSliderImg4($nodeFourImages)
                    : (detectImg === 'img/img3.png')
                        ? insertBeforeSliderImg1($nodeFourImages)
                        : insertBeforeSliderImg2($nodeFourImages)
            break;

        case 5:
            let $nodeFiveImages = document.createElement("img");
            (detectImg === 'img/img1.png')
                ? insertBeforeSliderImg4($nodeFiveImages)
                : (detectImg === 'img/img2.png')
                    ? insertBeforeSliderImg5($nodeFiveImages)
                    : (detectImg === 'img/img3.png')
                        ? insertBeforeSliderImg1($nodeFiveImages)
                        : (detectImg === 'img/img4.png')
                            ? insertBeforeSliderImg2($nodeFiveImages)
                            : insertBeforeSliderImg3($nodeFiveImages)
            break;
    
        default:
            break;
    }
}

//n aumenta de 1 en 1 cada vez que se presionan las fechas de derecha o izquierda, esta funcion agrega un nodo al final, que se va a mostrar al deslizar hacia la izquierda
function addNodeRight(n, detectImg) {
    switch (quantityImagesShow) {
        case 1:
            
            break;

        case 2:
            let $nodeTwoImages = document.createElement("img");
            (detectImg === 'img/img1.png')
                ? insertAfterSliderImg1($nodeTwoImages)
                : insertAfterSliderImg2($nodeTwoImages)
            break;

        case 3:
            let $nodeThreeImages = document.createElement("img");
            (detectImg === 'img/img1.png')
                ? insertAfterSliderImg3($nodeThreeImages)
                : (detectImg === 'img/img2.png')
                    ? insertAfterSliderImg1($nodeThreeImages)
                    : insertAfterSliderImg2($nodeThreeImages)
            break;

        case 4:
            let $nodeFourImages = document.createElement("img");
            (detectImg === 'img/img1.png')
                ? insertAfterSliderImg3($nodeFourImages)
                : (detectImg === 'img/img2.png')
                    ? insertAfterSliderImg4($nodeFourImages)
                    : (detectImg === 'img/img3.png')
                        ? insertAfterSliderImg1($nodeFourImages)
                        : insertAfterSliderImg2($nodeFourImages)
            break;

        case 5:
            let $nodeFiveImages = document.createElement("img");
            (detectImg === 'img/img1.png')
                ? insertAfterSliderImg3($nodeFiveImages)
                : (detectImg === 'img/img2.png')
                    ? insertAfterSliderImg4($nodeFiveImages)
                    : (detectImg === 'img/img3.png')
                        ? insertAfterSliderImg5($nodeFiveImages)
                        : (detectImg === 'img/img4.png')
                            ? insertAfterSliderImg1($nodeFiveImages)
                            : insertAfterSliderImg2($nodeFiveImages)
            break;
    
        default:
            break;
    }
}

const initPosition = () => {
    $sliderContainer.firstElementChild.style.left = "-500px";
    $sliderContainer.lastElementChild.style.left = "500px";
}
const loadSliderContainer = ($node2,$node3) => {
    $node2.classList.add("imagenes");
    $node2.setAttribute("src","img/img1.png");
    $sliderContainer.appendChild($node2)
    $node3.classList.add("imagenes");
    $node3.setAttribute("src","img/img2.png");
    $sliderContainer.appendChild($node3);
}
const insertBeforeSliderImg1 = ($node) => {$node.setAttribute("src","img/img1.png");insertSliderLeft($node);}
const insertBeforeSliderImg2 = ($node) => {$node.setAttribute("src","img/img2.png");insertSliderLeft($node);}
const insertBeforeSliderImg3 = ($node) => {$node.setAttribute("src","img/img3.png");insertSliderLeft($node);}
const insertBeforeSliderImg4 = ($node) => {$node.setAttribute("src","img/img4.png");insertSliderLeft($node);}
const insertBeforeSliderImg5 = ($node) => {$node.setAttribute("src","img/img5.png");insertSliderLeft($node);}
const insertAfterSliderImg1 = ($node) => {$node.setAttribute("src","img/img1.png");insertSliderRight($node);}
const insertAfterSliderImg2 = ($node) => {$node.setAttribute("src","img/img2.png");insertSliderRight($node);}
const insertAfterSliderImg3 = ($node) => {$node.setAttribute("src","img/img3.png");insertSliderRight($node);}
const insertAfterSliderImg4 = ($node) => {$node.setAttribute("src","img/img4.png");insertSliderRight($node);}
const insertAfterSliderImg5 = ($node) => {$node.setAttribute("src","img/img5.png");insertSliderRight($node);}

const insertSliderLeft = ($node) => {
    $node.classList.add("imagenes");
    $sliderContainer.insertBefore($node, $sliderContainer.firstChild);
    $sliderContainer.firstElementChild.style.left = "-500px";
}
const insertSliderRight = ($node) => {
    $node.classList.add("imagenes");
    $sliderContainer.appendChild($node);
    $sliderContainer.lastElementChild.style.left = "500px";
}
//esta funcion elimina los elementos hijos del contenedor de imagenes dejandolo vacio
function resetImages() {
    //cantidad es el valor que se obtiene al presionar alguna de las 5 cajas, si es 1, el $sliderContainer solo tiene un elemento
    if (quantityImagesShow===1) {
        $sliderContainer.removeChild($sliderContainer.children[0]);
    } else {
        $sliderContainer.removeChild($sliderContainer.children[2]);
        $sliderContainer.removeChild($sliderContainer.children[1]);
        $sliderContainer.removeChild($sliderContainer.children[0]);
    }
}
//al momento de cerrar el slider, restaura el contenedor de imagenes, dejandolo sin ninguna imagen
close.addEventListener('click' , () => {modal.removeAttribute('open');resetImages();})

const openModal = () => {
    modal.setAttribute('open','true');
}

c1.addEventListener('click' , function(){
    arrowLeft.style.display="none";
    arrowRight.style.display="none";
    openModal();
    quantityImagesShow = parseInt(c1.innerHTML);//se obtiene el valor 1
    initImages(quantityImagesShow);
});
c2.addEventListener('click' , function(){
    showArrows();
    openModal();
    quantityImagesShow = parseInt(c2.innerHTML);//se obtiene el valor 2
    initImages(quantityImagesShow);
});
c3.addEventListener('click' , function(){
    showArrows();
    openModal();
    quantityImagesShow = parseInt(c3.innerHTML);//se obtiene el valor 3
    initImages(quantityImagesShow);
});
c4.addEventListener('click' , function(){
    showArrows();
    openModal();
    quantityImagesShow = parseInt(c4.innerHTML);//se obtiene el valor 4
    initImages(quantityImagesShow);
});
c5.addEventListener('click' , function(){
    showArrows();
    openModal();
    quantityImagesShow = parseInt(c5.innerHTML);//se obtiene el valor 5
    initImages(quantityImagesShow);
});

const plusDivs = (n) => showDivs(slideIndex += n, n);
//se activa al pulsar una de las flechas y obtiene valor '1'(boton derecho) o '-1'(boton izquierdo)
function showDivs(n, valorN) {
    //el numero de imagenes mostradas seran con respecto al valor de cantidad, obtenidos al dar click en cualquiera de los cuadrados
    switch (quantityImagesShow) {
        case 1:
            
            break;
        case 2:
            let detectaImagen_2 = "";
            detectaImagen_2 = $childrenSliderContainer[1].getAttribute("src");
            //valorN sera positivo si se presiona la flecha derecha
            if (valorN > 0) {
                moveImagesLeft();                
                restartImages(n, valorN, detectaImagen_2);
            } else {
                moveImagesRight();
                restartImages(n, valorN, detectaImagen_2);
            }   

            break;
        case 3:
            let detectaImagen_3 = "";
            detectaImagen_3 = $childrenSliderContainer[1].getAttribute("src");

            if (valorN > 0) {
                moveImagesLeft();                    
                restartImages(n, valorN, detectaImagen_3);
            } else {
                moveImagesRight();        
                restartImages(n, valorN, detectaImagen_3);
            } 
            
            break;
        case 4:
            let detectaImagen_4 = "";
            detectaImagen_4 = $childrenSliderContainer[1].getAttribute("src");
    
            if (valorN > 0) {
                moveImagesLeft();                    
                restartImages(n, valorN, detectaImagen_4);
            } else {
                moveImagesRight();        
                restartImages(n, valorN, detectaImagen_4);
            }
            
            break;
        case 5:
            let detectaImagen_5 = "";
            detectaImagen_5 = $childrenSliderContainer[1].getAttribute("src");
    
            if (valorN > 0) {
                moveImagesLeft();                    
                restartImages(n, valorN, detectaImagen_5);
            } else {
                moveImagesRight();        
                restartImages(n, valorN, detectaImagen_5);
            }
            
            break;
    
        default:alert("Error desconocido")
            break;
    }
}
const moveImagesLeft = () => {
    $childrenSliderContainer[0].style.left = "-1000px";
    $childrenSliderContainer[1].style.left = "-500px";
    $childrenSliderContainer[2].style.left = "0";
}
const moveImagesRight = () => {
    $childrenSliderContainer[0].style.left = "0";
    $childrenSliderContainer[1].style.left = "500px";
    $childrenSliderContainer[2].style.left = "1000px";
}
