"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initImages = void 0;
var init_position_js_1 = require("./init-position.js");
var quantity_images_js_1 = require("./quantity-images.js");
var create_element_slider_js_1 = require("./create-element-slider.js");
//inicializa el contenedor del slider con 3 imagenes (si presiona la caja3, agrega la imagen2 a la derecha y la imagen3 a la izquierda, si presiona la caja5, agrega la imagen 2 a la derecha y la imagen 5 a la izquierda)
function initImages() {
    //div slider-container, dentro estaran las imagenes
    var quantityImagesShow = quantity_images_js_1.getQuantityImages();
    switch (quantityImagesShow) {
        case 1:
            create_element_slider_js_1.createElementSliderContainer(quantityImagesShow);
            break;
        case 2:
            create_element_slider_js_1.createElementSliderContainer(quantityImagesShow);
            init_position_js_1.initPosition();
            break;
        case 3:
            create_element_slider_js_1.createElementSliderContainer(quantityImagesShow);
            init_position_js_1.initPosition();
            break;
        case 4:
            create_element_slider_js_1.createElementSliderContainer(quantityImagesShow);
            init_position_js_1.initPosition();
            break;
        case 5:
            create_element_slider_js_1.createElementSliderContainer(quantityImagesShow);
            init_position_js_1.initPosition();
            break;
        default:
            break;
    }
}
exports.initImages = initImages;
