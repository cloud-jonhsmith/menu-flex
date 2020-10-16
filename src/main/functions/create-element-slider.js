"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createElementSliderContainer = void 0;
var variables_js_1 = require("../variables/variables.js");
exports.createElementSliderContainer = function (valueBox) {
    var createNode = document.createElement("img");
    createNode.classList.add("imagenes");
    createNode.setAttribute("src", "static/img" + valueBox + ".png");
    variables_js_1.$sliderContainer.appendChild(createNode);
    if (valueBox !== 1)
        createAnotherElements();
};
var createAnotherElements = function () {
    for (var i = 1; i <= 2; i++) {
        var createNode = document.createElement("img");
        createNode.classList.add("imagenes");
        createNode.setAttribute("src", "static/img" + i + ".png");
        variables_js_1.$sliderContainer.appendChild(createNode);
    }
};
