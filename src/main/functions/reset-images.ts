import { $sliderContainer } from "../variables/variables";

export const resetImages = (quantityImagesShow:number) => {
    if (quantityImagesShow===1) {
        $sliderContainer.removeChild($sliderContainer.children[0]);
    } else {
        for (let i = 2; i >= 0; i--) {
            $sliderContainer.removeChild($sliderContainer.children[i]);            
        }
    }
}