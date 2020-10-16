import { icono, cross, cajas, menu, alturaNav } from "../variables/variables.js";
//funcion que controla el icono hamburger
export const menuMovil:VoidFunction = () => {
    menu.style.left="0";
    icono.style.display="none";
    cross.style.display="flex";
    cross.style.alignSelf="flex-end";
    cajas.style.display="none";
    alturaNav.style.height="100vh";
};