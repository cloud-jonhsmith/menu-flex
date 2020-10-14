"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hola = void 0;
var variables_js_1 = require("../variables/variables.js");
function hola(params) {
    console.log("Hola " + params);
    console.log("Hola prev");
    console.log(variables_js_1.saludo10);
}
exports.hola = hola;
