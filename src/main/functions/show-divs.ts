import { getQuantityImages } from "./quantity-images.js";
import { moveImagesLeft, moveImagesRight } from "./move-images.js";
import { restartImages } from "./restart-images.js";
import { detectaImagen } from "./detecta-Imagen.js";

export const showDivs:any = (directionArrow:number) => {

    let valorImg:number = detectaImagen();
    
    if (directionArrow > 0) {
        moveImagesLeft();                
        restartImages(directionArrow, valorImg);
    } else {
        moveImagesRight();
        restartImages(directionArrow, valorImg);
    }
}