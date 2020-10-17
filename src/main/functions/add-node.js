"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNodeRight = exports.addNodeLeft = void 0;
var quantity_images_js_1 = require("./quantity-images.js");
var insert_slider_img_js_1 = require("./insert-slider-img.js");
function addNodeLeft(valorImg) {
    var quantityImagesShow = quantity_images_js_1.getQuantityImages();
    switch (quantityImagesShow) {
        case 1:
            break;
        case 2:
            insert_slider_img_js_1.insertBeforeSliderImg(valorImg);
            break;
        case 3:
            (valorImg === 3)
                ? insert_slider_img_js_1.insertBeforeSliderImg(1)
                : insert_slider_img_js_1.insertBeforeSliderImg(valorImg + 1);
            break;
        case 4:
            (valorImg === 4)
                ? insert_slider_img_js_1.insertBeforeSliderImg(2)
                : (valorImg === 3)
                    ? insert_slider_img_js_1.insertBeforeSliderImg(1)
                    : insert_slider_img_js_1.insertBeforeSliderImg(valorImg + 2);
            break;
        case 5:
            (valorImg === 5)
                ? insert_slider_img_js_1.insertBeforeSliderImg(3)
                : (valorImg === 4)
                    ? insert_slider_img_js_1.insertBeforeSliderImg(2)
                    : (valorImg === 3)
                        ? insert_slider_img_js_1.insertBeforeSliderImg(1)
                        : insert_slider_img_js_1.insertBeforeSliderImg(valorImg + 3);
            break;
        default:
            break;
    }
}
exports.addNodeLeft = addNodeLeft;
function addNodeRight(valorImg) {
    var quantityImagesShow = quantity_images_js_1.getQuantityImages();
    switch (quantityImagesShow) {
        case 1:
            break;
        case 2:
            insert_slider_img_js_1.insertAfterSliderImg(valorImg);
            break;
        case 3:
            (valorImg === 1)
                ? insert_slider_img_js_1.insertAfterSliderImg(3)
                : insert_slider_img_js_1.insertAfterSliderImg(valorImg - 1);
            break;
        case 4:
            (valorImg === 1)
                ? insert_slider_img_js_1.insertAfterSliderImg(3)
                : (valorImg === 2)
                    ? insert_slider_img_js_1.insertAfterSliderImg(4)
                    : insert_slider_img_js_1.insertAfterSliderImg(valorImg - 2);
            break;
        case 5:
            (valorImg === 1)
                ? insert_slider_img_js_1.insertAfterSliderImg(3)
                : (valorImg === 2)
                    ? insert_slider_img_js_1.insertAfterSliderImg(4)
                    : (valorImg === 3)
                        ? insert_slider_img_js_1.insertAfterSliderImg(5)
                        : insert_slider_img_js_1.insertAfterSliderImg(valorImg - 3);
            break;
        default:
            break;
    }
}
exports.addNodeRight = addNodeRight;
