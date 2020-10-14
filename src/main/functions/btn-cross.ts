import { menu, icono, cross, cajas, alturaNav } from "../variables/variables.js";
//funcion que controla el icono hamburger
export const closeMenuMovil:VoidFunction = () => {
    cross.style.display="none";
    menu.style.left="-160px";
    icono.style.display="flex";
    cajas.style.display="flex";
    alturaNav.style.height="100px";
};