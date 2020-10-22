import { moveImagesLeft, moveImagesRight } from "./move-images";
import { restartImages } from "./restart-images";
import { detectaImagen } from "./detecta-Imagen";

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