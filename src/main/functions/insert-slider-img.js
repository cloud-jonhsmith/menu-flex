"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertAfterSliderImg = exports.insertBeforeSliderImg = void 0;
var insert_slider_js_1 = require("./insert-slider.js");
exports.insertBeforeSliderImg = function (node, imgNumber) {
    node.setAttribute("src", "static/img" + imgNumber + ".png");
    insert_slider_js_1.insertSliderLeft(node);
};
exports.insertAfterSliderImg = function (node, imgNumber) {
    node.setAttribute("src", "static/img" + imgNumber + ".png");
    insert_slider_js_1.insertSliderRight(node);
};
