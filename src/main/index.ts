import '../scss/app.scss';
import "../img/img1.png";
import "../img/img2.png";
import "../img/img3.png";
import "../img/img4.png";
import "../img/img5.png";

//import variables
import { icono, cross, cajas, menu, alturaNav, close, arrayBoxes, arrowLeft, arrowRight } from "./variables/variables.js";

//import funciones
import { menuMovil } from "./functions/btn-icono.js";
import { closeMenuMovil } from "./functions/btn-cross.js";
import { clickBox } from "./functions/click-box.js";
import { closeModal } from "./functions/close-modal.js";
import { plusDivs } from "./functions/plus-divs.js";

icono.addEventListener("click", menuMovil);
cross.addEventListener("click", closeMenuMovil);

arrowRight.addEventListener("click", () => plusDivs(1));
arrowLeft.addEventListener("click", () => plusDivs(-1));

//al momento de cerrar el slider, restaura el contenedor de imagenes, dejandolo sin ninguna imagen
close.addEventListener('click' , closeModal);

for (let i = 0; i < arrayBoxes.length; i++) {
    arrayBoxes[i].addEventListener('click', () => clickBox(arrayBoxes[i]));
}

window.addEventListener("resize", function(event) {
    var nuevoAncho = document.body.clientWidth;
    if (nuevoAncho>715) {
        icono.style.display="none"
        alturaNav.style.height="100px"
        cross.style.display="none"
    } else {
        if (icono.style.display==='none') {
            icono.style.display="flex"
            alturaNav.style.height="100px"
            cross.style.display="none"
            cajas.style.display="flex"
            menu.style.left="-160px"
        }
    }
})