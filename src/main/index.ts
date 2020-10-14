import '../scss/app.scss';
import { saludo } from "./variables/variables.js";
import { saludo2 } from "./variables/variables.js";
import { saludo3 } from "./variables/variables.js";
import { saludo4 } from "./variables/variables.js";
import { hola } from "./functions/functions.js";
import { icono, cross, alturaNav, cajas, menu } from "./variables/variables.js";
import { menuMovil } from "./functions/btn-icono.js";
import { closeMenuMovil } from "./functions/btn-cross.js";

console.log(saludo);
console.log(saludo2);
console.log(saludo3);
console.log(saludo4);
hola("Thiago");

console.log(icono);

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

icono.addEventListener("click", menuMovil);
cross.addEventListener("click", closeMenuMovil);