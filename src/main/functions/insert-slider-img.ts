import { insertSlider } from "./insert-slider";
import { $sliderContainer } from "../variables/variables";

export const insertBeforeSliderImg = (imgNumber:number) => {
    let node:any = insertSlider(imgNumber);

    $sliderContainer.insertBefore(node, $sliderContainer.firstChild);
    $sliderContainer.firstElementChild.style.left = "-500px";
}
export const insertAfterSliderImg = (imgNumber:number) => {
    let node:any = insertSlider(imgNumber);

    $sliderContainer.appendChild(node);
    $sliderContainer.lastElementChild.style.left = "500px";
}