import { $childrenSliderContainer } from "../variables/variables.js";
import { $sliderContainer } from "../variables/variables.js";

export const moveImagesLeft = () => {
    console.log($childrenSliderContainer);
    console.log($sliderContainer);
    $childrenSliderContainer[0].style.left = "-1000px";
    $childrenSliderContainer[1].style.left = "-500px";
    $childrenSliderContainer[2].style.left = "0";
}
export const moveImagesRight = () => {
    console.log($childrenSliderContainer);
    console.log($sliderContainer);
    $childrenSliderContainer[0].style.left = "0";
    $childrenSliderContainer[1].style.left = "500px";
    $childrenSliderContainer[2].style.left = "1000px";
}