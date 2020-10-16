"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clickBox = void 0;
var quantity_images_js_1 = require("./quantity-images.js");
var open_modal_js_1 = require("./open-modal.js");
var init_images_js_1 = require("./init-images.js");
var show_arrows_js_1 = require("./show-arrows.js");
var hide_arrows_js_1 = require("./hide-arrows.js");
function clickBox(valorBox) {
    var quantityImagesShow = parseInt(valorBox.innerHTML);
    quantity_images_js_1.setQuantityImages(quantityImagesShow);
    if (quantityImagesShow === 1) {
        hide_arrows_js_1.hideArrows();
        open_modal_js_1.openModal();
        init_images_js_1.initImages();
    }
    else {
        show_arrows_js_1.showArrows();
        open_modal_js_1.openModal();
        init_images_js_1.initImages();
    }
}
exports.clickBox = clickBox;
