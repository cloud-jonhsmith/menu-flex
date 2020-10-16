import { initPosition} from "./init-position.js";
import { getQuantityImages } from "./quantity-images.js";
import { createElementSliderContainer } from "./create-element-slider.js";

//inicializa el contenedor del slider con 3 imagenes (si presiona la caja3, agrega la imagen2 a la derecha y la imagen3 a la izquierda, si presiona la caja5, agrega la imagen 2 a la derecha y la imagen 5 a la izquierda)
export function initImages() {
     //div slider-container, dentro estaran las imagenes
    let quantityImagesShow = getQuantityImages();
    switch (quantityImagesShow) {
        case 1:
            createElementSliderContainer(quantityImagesShow);
            break;

        case 2:
            createElementSliderContainer(quantityImagesShow);
            initPosition();
            break;
                
        case 3:
            createElementSliderContainer(quantityImagesShow);
            initPosition();
            break;
                    
        case 4:
            createElementSliderContainer(quantityImagesShow);
            initPosition();
            break;
                        
        case 5:
            createElementSliderContainer(quantityImagesShow);
            initPosition();
            break;
            
        default:
            break;
    }
}