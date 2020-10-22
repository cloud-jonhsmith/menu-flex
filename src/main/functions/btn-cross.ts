import { icono, cross, cajas, menu, alturaNav } from "../variables/variables";
//funcion que controla el icono hamburger
export const closeMenuMovil:VoidFunction = () => {
    cross.style.display="none";
    menu.style.left="-160px";
    icono.style.display="flex";
    cajas.style.display="flex";
    alturaNav.style.height="100px";
};