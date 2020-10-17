"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectaImagen = void 0;
var variables_js_1 = require("../variables/variables.js");
exports.detectaImagen = function () {
    var detectaImagen = variables_js_1.$childrenSliderContainer[1].getAttribute("src");
    var valorImagen = 0;
    valorImagen = parseInt(detectaImagen.substring(10, 11));
    return valorImagen;
};
