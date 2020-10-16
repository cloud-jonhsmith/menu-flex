"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeModal = void 0;
var variables_js_1 = require("../variables/variables.js");
var quantity_images_js_1 = require("./quantity-images.js");
var reset_images_js_1 = require("./reset-images.js");
exports.closeModal = function () {
    var quantityImagesShow = quantity_images_js_1.getQuantityImages();
    variables_js_1.modal.removeAttribute('open');
    reset_images_js_1.resetImages(quantityImagesShow);
};
