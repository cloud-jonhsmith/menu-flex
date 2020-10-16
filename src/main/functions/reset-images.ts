import { $sliderContainer } from "../variables/variables.js";

export const resetImages = (quantityImagesShow:number) => {
    if (quantityImagesShow===1) {
        $sliderContainer.removeChild($sliderContainer.children[0]);
    } else {
        $sliderContainer.removeChild($sliderContainer.children[2]);
        $sliderContainer.removeChild($sliderContainer.children[1]);
        $sliderContainer.removeChild($sliderContainer.children[0]);
    }
}