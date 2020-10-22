import { initPosition} from "./init-position";
import { getQuantityImages } from "./quantity-images";
import { createElementSliderContainer } from "./create-element-slider";

export function initImages() {
     //div slider-container, dentro estaran las imagenes
    let quantityImagesShow:number = getQuantityImages();

    createElementSliderContainer(quantityImagesShow);
    
    if (quantityImagesShow!==1) {
        initPosition();
    }
}