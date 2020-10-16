"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveImagesRight = exports.moveImagesLeft = void 0;
var variables_js_1 = require("../variables/variables.js");
var variables_js_2 = require("../variables/variables.js");
exports.moveImagesLeft = function () {
    console.log(variables_js_1.$childrenSliderContainer);
    console.log(variables_js_2.$sliderContainer);
    variables_js_1.$childrenSliderContainer[0].style.left = "-1000px";
    variables_js_1.$childrenSliderContainer[1].style.left = "-500px";
    variables_js_1.$childrenSliderContainer[2].style.left = "0";
};
exports.moveImagesRight = function () {
    console.log(variables_js_1.$childrenSliderContainer);
    console.log(variables_js_2.$sliderContainer);
    variables_js_1.$childrenSliderContainer[0].style.left = "0";
    variables_js_1.$childrenSliderContainer[1].style.left = "500px";
    variables_js_1.$childrenSliderContainer[2].style.left = "1000px";
};
