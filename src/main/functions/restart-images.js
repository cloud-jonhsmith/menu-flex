"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restartImages = void 0;
var quantity_images_js_1 = require("./quantity-images.js");
var remove_node_js_1 = require("./remove-node.js");
var add_node_js_1 = require("./add-node.js");
function restartImages(n, valorN, detectaImagen) {
    var quantityImagesShow = quantity_images_js_1.getQuantityImages();
    switch (quantityImagesShow) {
        case 1:
            break;
        case 2:
            if (valorN > 0) {
                remove_node_js_1.removeNodeLeft();
                add_node_js_1.addNodeRight(n, detectaImagen);
            }
            else {
                remove_node_js_1.removeNodeRight();
                add_node_js_1.addNodeLeft(n, detectaImagen);
            }
            break;
        case 3:
            if (valorN > 0) {
                remove_node_js_1.removeNodeLeft();
                add_node_js_1.addNodeRight(n, detectaImagen);
            }
            else {
                remove_node_js_1.removeNodeRight();
                add_node_js_1.addNodeLeft(n, detectaImagen);
            }
            break;
        case 4:
            if (valorN > 0) {
                remove_node_js_1.removeNodeLeft();
                add_node_js_1.addNodeRight(n, detectaImagen);
            }
            else {
                remove_node_js_1.removeNodeRight();
                add_node_js_1.addNodeLeft(n, detectaImagen);
            }
            break;
        case 5:
            if (valorN > 0) {
                remove_node_js_1.removeNodeLeft();
                add_node_js_1.addNodeRight(n, detectaImagen);
            }
            else {
                remove_node_js_1.removeNodeRight();
                add_node_js_1.addNodeLeft(n, detectaImagen);
            }
            break;
        default:
            break;
    }
}
exports.restartImages = restartImages;
