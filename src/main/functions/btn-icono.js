"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuMovil = void 0;
var variables_js_1 = require("../variables/variables.js");
//funcion que controla el icono hamburger
exports.menuMovil = function () {
    variables_js_1.menu.style.left = "0";
    variables_js_1.icono.style.display = "none";
    variables_js_1.cross.style.display = "flex";
    variables_js_1.cross.style.alignSelf = "flex-end";
    variables_js_1.cajas.style.display = "none";
    variables_js_1.alturaNav.style.height = "100vh";
};
