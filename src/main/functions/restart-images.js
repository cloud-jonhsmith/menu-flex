"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restartImages = void 0;
var remove_node_js_1 = require("./remove-node.js");
var add_node_js_1 = require("./add-node.js");
function restartImages(directionArrow, valorImg) {
    if (directionArrow > 0) {
        remove_node_js_1.removeNodeLeft();
        add_node_js_1.addNodeRight(valorImg);
    }
    else {
        remove_node_js_1.removeNodeRight();
        add_node_js_1.addNodeLeft(valorImg);
    }
}
exports.restartImages = restartImages;
