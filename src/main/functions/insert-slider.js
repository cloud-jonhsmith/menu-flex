"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertSliderRight = exports.insertSliderLeft = void 0;
var variables_js_1 = require("../variables/variables.js");
exports.insertSliderLeft = function ($node) {
    $node.classList.add("imagenes");
    variables_js_1.$sliderContainer.insertBefore($node, variables_js_1.$sliderContainer.firstChild);
    variables_js_1.$sliderContainer.firstElementChild.style.left = "-500px";
};
exports.insertSliderRight = function ($node) {
    $node.classList.add("imagenes");
    variables_js_1.$sliderContainer.appendChild($node);
    variables_js_1.$sliderContainer.lastElementChild.style.left = "500px";
};
