import { initPosition} from "./init-position.js";
import { getQuantityImages } from "./quantity-images.js";
import { createElementSliderContainer } from "./create-element-slider.js";

export function initImages() {
     //div slider-container, dentro estaran las imagenes
    let quantityImagesShow:number = getQuantityImages();

    createElementSliderContainer(quantityImagesShow);
    
    if (quantityImagesShow!==1) {
        initPosition();
    }
}