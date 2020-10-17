"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertSlider = void 0;
exports.insertSlider = function (imgNumber) {
    var node = document.createElement("img");
    node.setAttribute("src", "static/img" + imgNumber + ".png");
    node.classList.add("imagenes");
    return node;
};
