import { getQuantityImages } from "./quantity-images.js";
import { insertBeforeSliderImg, insertAfterSliderImg } from "./insert-slider-img.js";
//n aumenta de 1 en 1 cada vez que se presionan las fechas de derecha o izquierda, esta funcion agrega un nodo al inicio, que se va a mostrar al deslizar hacia la derecha
export function addNodeLeft(n:number, detectImg:any) {
    let quantityImagesShow = getQuantityImages();
    switch (quantityImagesShow) {
        case 1:
            
            break;

        case 2:
            let $nodeTwoImages = document.createElement("img");
            (detectImg === 'static/img1.png')
                ? insertBeforeSliderImg($nodeTwoImages, quantityImagesShow)
                : insertBeforeSliderImg($nodeTwoImages, quantityImagesShow)
            break;

        case 3:
            let $nodeThreeImages = document.createElement("img");
            (detectImg === 'static/img1.png')
                ? insertBeforeSliderImg($nodeThreeImages, quantityImagesShow)
                : (detectImg === 'static/img2.png')
                    ? insertBeforeSliderImg($nodeThreeImages, quantityImagesShow)
                    : insertBeforeSliderImg($nodeThreeImages, quantityImagesShow)
            break;

        case 4:
            let $nodeFourImages = document.createElement("img");
            (detectImg === 'static/img1.png')
                ? insertBeforeSliderImg($nodeFourImages, quantityImagesShow)
                : (detectImg === 'static/img2.png')
                    ? insertBeforeSliderImg($nodeFourImages, quantityImagesShow)
                    : (detectImg === 'static/img3.png')
                        ? insertBeforeSliderImg($nodeFourImages, quantityImagesShow)
                        : insertBeforeSliderImg($nodeFourImages, quantityImagesShow)
            break;

        case 5:
            let $nodeFiveImages = document.createElement("img");
            (detectImg === 'static/img1.png')
                ? insertBeforeSliderImg($nodeFiveImages, quantityImagesShow)
                : (detectImg === 'static/img2.png')
                    ? insertBeforeSliderImg($nodeFiveImages, quantityImagesShow)
                    : (detectImg === 'static/img3.png')
                        ? insertBeforeSliderImg($nodeFiveImages, quantityImagesShow)
                        : (detectImg === 'static/img4.png')
                            ? insertBeforeSliderImg($nodeFiveImages, quantityImagesShow)
                            : insertBeforeSliderImg($nodeFiveImages, quantityImagesShow)
            break;
    
        default:
            break;
    }
}

//n aumenta de 1 en 1 cada vez que se presionan las fechas de derecha o izquierda, esta funcion agrega un nodo al final, que se va a mostrar al deslizar hacia la izquierda
export function addNodeRight(n:number, detectImg:any) {
    let quantityImagesShow = getQuantityImages();
    switch (quantityImagesShow) {
        case 1:
            
            break;

        case 2:
            let $nodeTwoImages = document.createElement("img");
            (detectImg === 'static/img1.png')
                ? insertAfterSliderImg($nodeTwoImages, quantityImagesShow)
                : insertAfterSliderImg($nodeTwoImages, quantityImagesShow)
            break;

        case 3:
            let $nodeThreeImages = document.createElement("img");
            (detectImg === 'static/img1.png')
                ? insertAfterSliderImg($nodeThreeImages, quantityImagesShow)
                : (detectImg === 'static/img2.png')
                    ? insertAfterSliderImg($nodeThreeImages, quantityImagesShow)
                    : insertAfterSliderImg($nodeThreeImages, quantityImagesShow)
            break;

        case 4:
            let $nodeFourImages = document.createElement("img");
            (detectImg === 'static/img1.png')
                ? insertAfterSliderImg($nodeFourImages, quantityImagesShow)
                : (detectImg === 'static/img2.png')
                    ? insertAfterSliderImg($nodeFourImages, quantityImagesShow)
                    : (detectImg === 'static/img3.png')
                        ? insertAfterSliderImg($nodeFourImages, quantityImagesShow)
                        : insertAfterSliderImg($nodeFourImages, quantityImagesShow)
            break;

        case 5:
            let $nodeFiveImages = document.createElement("img");
            (detectImg === 'static/img1.png')
                ? insertAfterSliderImg($nodeFiveImages, quantityImagesShow)
                : (detectImg === 'static/img2.png')
                    ? insertAfterSliderImg($nodeFiveImages, quantityImagesShow)
                    : (detectImg === 'static/img3.png')
                        ? insertAfterSliderImg($nodeFiveImages, quantityImagesShow)
                        : (detectImg === 'static/img4.png')
                            ? insertAfterSliderImg($nodeFiveImages, quantityImagesShow)
                            : insertAfterSliderImg($nodeFiveImages, quantityImagesShow)
            break;
    
        default:
            break;
    }
}