import { $sliderContainer } from "../variables/variables";

export const initPosition = () => {
    $sliderContainer.firstElementChild.style.left = "-500px";
    $sliderContainer.lastElementChild.style.left = "500px";
}