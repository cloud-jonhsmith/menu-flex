import { getQuantityImages } from "./quantity-images";
import { insertBeforeSliderImg, insertAfterSliderImg } from "./insert-slider-img";

export function addNodeLeft(valorImg:number) {
    let quantityImagesShow:number = getQuantityImages();
    switch (quantityImagesShow) {
        case 1:
            
            break;

        case 2:
            insertBeforeSliderImg(valorImg);
            break;

        case 3:
            (valorImg===3)
                ? insertBeforeSliderImg(1)
                : insertBeforeSliderImg(valorImg+1)
            break;

        case 4:
            (valorImg===4)
                ? insertBeforeSliderImg(2)
                : (valorImg===3)
                    ? insertBeforeSliderImg(1)
                    : insertBeforeSliderImg(valorImg+2)
            break;

        case 5:
            (valorImg===5)
                ? insertBeforeSliderImg(3)
                : (valorImg===4)
                    ? insertBeforeSliderImg(2)
                    : (valorImg===3)
                        ? insertBeforeSliderImg(1)
                        : insertBeforeSliderImg(valorImg+3)
            break;
    
        default:
            break;
    }
}

export function addNodeRight(valorImg:number) {
    let quantityImagesShow = getQuantityImages();
    switch (quantityImagesShow) {
        case 1:
            
            break;

        case 2:
            insertAfterSliderImg(valorImg);
            break;

        case 3:
            (valorImg===1)
                ? insertAfterSliderImg(3)
                : insertAfterSliderImg(valorImg-1)
            break;

        case 4:
            (valorImg===1)
                ? insertAfterSliderImg(3)
                : (valorImg===2)
                    ? insertAfterSliderImg(4)
                    : insertAfterSliderImg(valorImg-2)
            break;

        case 5:
            (valorImg===1)
                ? insertAfterSliderImg(3)
                : (valorImg===2)
                    ? insertAfterSliderImg(4)
                    : (valorImg===3)
                        ? insertAfterSliderImg(5)
                        : insertAfterSliderImg(valorImg-3)
            break;
    
        default:
            break;
    }
}