"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeMenuMovil = void 0;
var variables_js_1 = require("../variables/variables.js");
//funcion que controla el icono hamburger
exports.closeMenuMovil = function () {
    variables_js_1.cross.style.display = "none";
    variables_js_1.menu.style.left = "-160px";
    variables_js_1.icono.style.display = "flex";
    variables_js_1.cajas.style.display = "flex";
    variables_js_1.alturaNav.style.height = "100px";
};
