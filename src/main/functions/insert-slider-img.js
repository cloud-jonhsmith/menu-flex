"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertAfterSliderImg = exports.insertBeforeSliderImg = void 0;
var insert_slider_js_1 = require("./insert-slider.js");
var variables_js_1 = require("../variables/variables.js");
exports.insertBeforeSliderImg = function (imgNumber) {
    var node = insert_slider_js_1.insertSlider(imgNumber);
    variables_js_1.$sliderContainer.insertBefore(node, variables_js_1.$sliderContainer.firstChild);
    variables_js_1.$sliderContainer.firstElementChild.style.left = "-500px";
};
exports.insertAfterSliderImg = function (imgNumber) {
    var node = insert_slider_js_1.insertSlider(imgNumber);
    variables_js_1.$sliderContainer.appendChild(node);
    variables_js_1.$sliderContainer.lastElementChild.style.left = "500px";
};
