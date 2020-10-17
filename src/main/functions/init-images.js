"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initImages = void 0;
var init_position_js_1 = require("./init-position.js");
var quantity_images_js_1 = require("./quantity-images.js");
var create_element_slider_js_1 = require("./create-element-slider.js");
function initImages() {
    //div slider-container, dentro estaran las imagenes
    var quantityImagesShow = quantity_images_js_1.getQuantityImages();
    create_element_slider_js_1.createElementSliderContainer(quantityImagesShow);
    if (quantityImagesShow !== 1) {
        init_position_js_1.initPosition();
    }
}
exports.initImages = initImages;
