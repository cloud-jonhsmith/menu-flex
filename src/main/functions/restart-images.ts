import { getQuantityImages } from "./quantity-images.js";
import { removeNodeLeft, removeNodeRight } from "./remove-node.js";
import { addNodeLeft, addNodeRight } from "./add-node.js";

export function restartImages(n:number, valorN:number, detectaImagen:any) {
    let quantityImagesShow = getQuantityImages();    
    switch (quantityImagesShow) {
        case 1:
        
            break;
        
        case 2:            
            if (valorN > 0) {
                removeNodeLeft();
                addNodeRight(n, detectaImagen);
            } else {
                removeNodeRight();
                addNodeLeft(n, detectaImagen);
            }
            break;
        
        case 3:
            if (valorN > 0) {
                removeNodeLeft();
                addNodeRight(n, detectaImagen);
            } else {
                removeNodeRight();
                addNodeLeft(n, detectaImagen);
            }
            break;
        
        case 4:
            if (valorN > 0) {
                removeNodeLeft();
                addNodeRight(n, detectaImagen);
            } else {
                removeNodeRight();
                addNodeLeft(n, detectaImagen);
            }
            break;
                
        case 5:
            if (valorN > 0) {
                removeNodeLeft();
                addNodeRight(n, detectaImagen);
            } else {
                removeNodeRight();
                addNodeLeft(n, detectaImagen);
            }
            break;
            
        default:
            break;
    }
}