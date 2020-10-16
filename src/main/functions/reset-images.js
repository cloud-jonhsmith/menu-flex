"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetImages = void 0;
var variables_js_1 = require("../variables/variables.js");
exports.resetImages = function (quantityImagesShow) {
    if (quantityImagesShow === 1) {
        variables_js_1.$sliderContainer.removeChild(variables_js_1.$sliderContainer.children[0]);
    }
    else {
        variables_js_1.$sliderContainer.removeChild(variables_js_1.$sliderContainer.children[2]);
        variables_js_1.$sliderContainer.removeChild(variables_js_1.$sliderContainer.children[1]);
        variables_js_1.$sliderContainer.removeChild(variables_js_1.$sliderContainer.children[0]);
    }
};
