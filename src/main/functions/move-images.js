"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveImagesRight = exports.moveImagesLeft = void 0;
var variables_js_1 = require("../variables/variables.js");
exports.moveImagesLeft = function () {
    var valorStyleLeft = -1000;
    for (var i = 0; i <= 2; i++) {
        variables_js_1.$childrenSliderContainer[i].style.left = valorStyleLeft + "px";
        valorStyleLeft += 500;
    }
};
exports.moveImagesRight = function () {
    var valorStyleLeft = 0;
    for (var i = 0; i <= 2; i++) {
        variables_js_1.$childrenSliderContainer[i].style.left = valorStyleLeft + "px";
        valorStyleLeft += 500;
    }
};
