"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNodeRight = exports.addNodeLeft = void 0;
var quantity_images_js_1 = require("./quantity-images.js");
var insert_slider_img_js_1 = require("./insert-slider-img.js");
//n aumenta de 1 en 1 cada vez que se presionan las fechas de derecha o izquierda, esta funcion agrega un nodo al inicio, que se va a mostrar al deslizar hacia la derecha
function addNodeLeft(n, detectImg) {
    var quantityImagesShow = quantity_images_js_1.getQuantityImages();
    switch (quantityImagesShow) {
        case 1:
            break;
        case 2:
            var $nodeTwoImages = document.createElement("img");
            (detectImg === 'static/img1.png')
                ? insert_slider_img_js_1.insertBeforeSliderImg($nodeTwoImages, quantityImagesShow)
                : insert_slider_img_js_1.insertBeforeSliderImg($nodeTwoImages, quantityImagesShow);
            break;
        case 3:
            var $nodeThreeImages = document.createElement("img");
            (detectImg === 'static/img1.png')
                ? insert_slider_img_js_1.insertBeforeSliderImg($nodeThreeImages, quantityImagesShow)
                : (detectImg === 'static/img2.png')
                    ? insert_slider_img_js_1.insertBeforeSliderImg($nodeThreeImages, quantityImagesShow)
                    : insert_slider_img_js_1.insertBeforeSliderImg($nodeThreeImages, quantityImagesShow);
            break;
        case 4:
            var $nodeFourImages = document.createElement("img");
            (detectImg === 'static/img1.png')
                ? insert_slider_img_js_1.insertBeforeSliderImg($nodeFourImages, quantityImagesShow)
                : (detectImg === 'static/img2.png')
                    ? insert_slider_img_js_1.insertBeforeSliderImg($nodeFourImages, quantityImagesShow)
                    : (detectImg === 'static/img3.png')
                        ? insert_slider_img_js_1.insertBeforeSliderImg($nodeFourImages, quantityImagesShow)
                        : insert_slider_img_js_1.insertBeforeSliderImg($nodeFourImages, quantityImagesShow);
            break;
        case 5:
            var $nodeFiveImages = document.createElement("img");
            (detectImg === 'static/img1.png')
                ? insert_slider_img_js_1.insertBeforeSliderImg($nodeFiveImages, quantityImagesShow)
                : (detectImg === 'static/img2.png')
                    ? insert_slider_img_js_1.insertBeforeSliderImg($nodeFiveImages, quantityImagesShow)
                    : (detectImg === 'static/img3.png')
                        ? insert_slider_img_js_1.insertBeforeSliderImg($nodeFiveImages, quantityImagesShow)
                        : (detectImg === 'static/img4.png')
                            ? insert_slider_img_js_1.insertBeforeSliderImg($nodeFiveImages, quantityImagesShow)
                            : insert_slider_img_js_1.insertBeforeSliderImg($nodeFiveImages, quantityImagesShow);
            break;
        default:
            break;
    }
}
exports.addNodeLeft = addNodeLeft;
//n aumenta de 1 en 1 cada vez que se presionan las fechas de derecha o izquierda, esta funcion agrega un nodo al final, que se va a mostrar al deslizar hacia la izquierda
function addNodeRight(n, detectImg) {
    var quantityImagesShow = quantity_images_js_1.getQuantityImages();
    switch (quantityImagesShow) {
        case 1:
            break;
        case 2:
            var $nodeTwoImages = document.createElement("img");
            (detectImg === 'static/img1.png')
                ? insert_slider_img_js_1.insertAfterSliderImg($nodeTwoImages, quantityImagesShow)
                : insert_slider_img_js_1.insertAfterSliderImg($nodeTwoImages, quantityImagesShow);
            break;
        case 3:
            var $nodeThreeImages = document.createElement("img");
            (detectImg === 'static/img1.png')
                ? insert_slider_img_js_1.insertAfterSliderImg($nodeThreeImages, quantityImagesShow)
                : (detectImg === 'static/img2.png')
                    ? insert_slider_img_js_1.insertAfterSliderImg($nodeThreeImages, quantityImagesShow)
                    : insert_slider_img_js_1.insertAfterSliderImg($nodeThreeImages, quantityImagesShow);
            break;
        case 4:
            var $nodeFourImages = document.createElement("img");
            (detectImg === 'static/img1.png')
                ? insert_slider_img_js_1.insertAfterSliderImg($nodeFourImages, quantityImagesShow)
                : (detectImg === 'static/img2.png')
                    ? insert_slider_img_js_1.insertAfterSliderImg($nodeFourImages, quantityImagesShow)
                    : (detectImg === 'static/img3.png')
                        ? insert_slider_img_js_1.insertAfterSliderImg($nodeFourImages, quantityImagesShow)
                        : insert_slider_img_js_1.insertAfterSliderImg($nodeFourImages, quantityImagesShow);
            break;
        case 5:
            var $nodeFiveImages = document.createElement("img");
            (detectImg === 'static/img1.png')
                ? insert_slider_img_js_1.insertAfterSliderImg($nodeFiveImages, quantityImagesShow)
                : (detectImg === 'static/img2.png')
                    ? insert_slider_img_js_1.insertAfterSliderImg($nodeFiveImages, quantityImagesShow)
                    : (detectImg === 'static/img3.png')
                        ? insert_slider_img_js_1.insertAfterSliderImg($nodeFiveImages, quantityImagesShow)
                        : (detectImg === 'static/img4.png')
                            ? insert_slider_img_js_1.insertAfterSliderImg($nodeFiveImages, quantityImagesShow)
                            : insert_slider_img_js_1.insertAfterSliderImg($nodeFiveImages, quantityImagesShow);
            break;
        default:
            break;
    }
}
exports.addNodeRight = addNodeRight;
