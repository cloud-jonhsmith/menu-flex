"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createElementSliderContainer = void 0;
var variables_js_1 = require("../variables/variables.js");
exports.createElementSliderContainer = function (valueBox) {
    createElement(valueBox);
    if (valueBox !== 1) {
        for (var i = 1; i <= 2; i++) {
            createElement(i);
        }
    }
};
var createElement = function (value) {
    var createNode = document.createElement("img");
    createNode.classList.add("imagenes");
    createNode.setAttribute("src", "static/img" + value + ".png");
    variables_js_1.$sliderContainer.appendChild(createNode);
};
