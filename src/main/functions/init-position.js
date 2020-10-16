"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initPosition = void 0;
var variables_js_1 = require("../variables/variables.js");
exports.initPosition = function () {
    variables_js_1.$sliderContainer.firstElementChild.style.left = "-500px";
    variables_js_1.$sliderContainer.lastElementChild.style.left = "500px";
};
