import { $sliderContainer } from "../variables/variables";

export const removeNodeLeft = () => {
    $sliderContainer.removeChild($sliderContainer.children[0]);
}
export const removeNodeRight = () => {
    $sliderContainer.removeChild($sliderContainer.children[2]);
}