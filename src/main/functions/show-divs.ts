import { getQuantityImages } from "./quantity-images.js";
import { $childrenSliderContainer } from "../variables/variables.js";
import { moveImagesLeft, moveImagesRight } from "./move-images.js";
import { restartImages } from "./restart-images.js";

export const showDivs:any = (n:number, valorN:number) => {
    let quantityImagesShow = getQuantityImages();
    //el numero de imagenes mostradas seran con respecto al valor de cantidad, obtenidos al dar click en cualquiera de los cuadrados
    switch (quantityImagesShow) {
        case 1:
            
            break;
        case 2:
            let detectaImagen_2:any = "";
            detectaImagen_2 = $childrenSliderContainer[1].getAttribute("src");
            //valorN sera positivo si se presiona la flecha derecha
            if (valorN > 0) {
                moveImagesLeft();                
                restartImages(n, valorN, detectaImagen_2);
            } else {
                moveImagesRight();
                restartImages(n, valorN, detectaImagen_2);
            }   

            break;
        case 3:
            let detectaImagen_3:any = "";
            detectaImagen_3 = $childrenSliderContainer[1].getAttribute("src");

            if (valorN > 0) {
                moveImagesLeft();                    
                restartImages(n, valorN, detectaImagen_3);
            } else {
                moveImagesRight();        
                restartImages(n, valorN, detectaImagen_3);
            } 
            
            break;
        case 4:
            let detectaImagen_4:any = "";
            detectaImagen_4 = $childrenSliderContainer[1].getAttribute("src");
    
            if (valorN > 0) {
                moveImagesLeft();                    
                restartImages(n, valorN, detectaImagen_4);
            } else {
                moveImagesRight();        
                restartImages(n, valorN, detectaImagen_4);
            }
            
            break;
        case 5:
            let detectaImagen_5:any = "";
            detectaImagen_5 = $childrenSliderContainer[1].getAttribute("src");
    
            if (valorN > 0) {
                moveImagesLeft();                    
                restartImages(n, valorN, detectaImagen_5);
            } else {
                moveImagesRight();        
                restartImages(n, valorN, detectaImagen_5);
            }
            
            break;
    
        default:alert("Error desconocido")
            break;
    }
}