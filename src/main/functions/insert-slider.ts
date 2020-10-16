import { $sliderContainer } from "../variables/variables.js";

export const insertSliderLeft = ($node:any) => {
    $node.classList.add("imagenes");
    $sliderContainer.insertBefore($node, $sliderContainer.firstChild);
    $sliderContainer.firstElementChild.style.left = "-500px";
}
export const insertSliderRight = ($node:any) => {
    $node.classList.add("imagenes");
    $sliderContainer.appendChild($node);
    $sliderContainer.lastElementChild.style.left = "500px";
}