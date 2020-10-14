"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../scss/app.scss");
var variables_js_1 = require("./variables/variables.js");
var variables_js_2 = require("./variables/variables.js");
var variables_js_3 = require("./variables/variables.js");
var variables_js_4 = require("./variables/variables.js");
var functions_js_1 = require("./functions/functions.js");
var variables_js_5 = require("./variables/variables.js");
var btn_icono_js_1 = require("./functions/btn-icono.js");
var btn_cross_js_1 = require("./functions/btn-cross.js");
console.log(variables_js_1.saludo);
console.log(variables_js_2.saludo2);
console.log(variables_js_3.saludo3);
console.log(variables_js_4.saludo4);
functions_js_1.hola("Thiago");
console.log(variables_js_5.icono);
window.addEventListener("resize", function (event) {
    var nuevoAncho = document.body.clientWidth;
    if (nuevoAncho > 715) {
        variables_js_5.icono.style.display = "none";
        variables_js_5.alturaNav.style.height = "100px";
        variables_js_5.cross.style.display = "none";
    }
    else {
        if (variables_js_5.icono.style.display === 'none') {
            variables_js_5.icono.style.display = "flex";
            variables_js_5.alturaNav.style.height = "100px";
            variables_js_5.cross.style.display = "none";
            variables_js_5.cajas.style.display = "flex";
            variables_js_5.menu.style.left = "-160px";
        }
    }
});
variables_js_5.icono.addEventListener("click", btn_icono_js_1.menuMovil);
variables_js_5.cross.addEventListener("click", btn_cross_js_1.closeMenuMovil);
