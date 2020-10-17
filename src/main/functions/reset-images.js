"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetImages = void 0;
var variables_js_1 = require("../variables/variables.js");
exports.resetImages = function (quantityImagesShow) {
    if (quantityImagesShow === 1) {
        variables_js_1.$sliderContainer.removeChild(variables_js_1.$sliderContainer.children[0]);
    }
    else {
        for (var i = 2; i >= 0; i--) {
            variables_js_1.$sliderContainer.removeChild(variables_js_1.$sliderContainer.children[i]);
        }
    }
};
