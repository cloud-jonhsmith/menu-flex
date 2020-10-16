"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../scss/app.scss");
require("../img/img1.png");
require("../img/img2.png");
require("../img/img3.png");
require("../img/img4.png");
require("../img/img5.png");
//import variables
var variables_js_1 = require("./variables/variables.js");
//import funciones
var btn_icono_js_1 = require("./functions/btn-icono.js");
var btn_cross_js_1 = require("./functions/btn-cross.js");
var click_box_js_1 = require("./functions/click-box.js");
var close_modal_js_1 = require("./functions/close-modal.js");
var plus_divs_js_1 = require("./functions/plus-divs.js");
variables_js_1.icono.addEventListener("click", btn_icono_js_1.menuMovil);
variables_js_1.cross.addEventListener("click", btn_cross_js_1.closeMenuMovil);
variables_js_1.arrowRight.addEventListener("click", function () { return plus_divs_js_1.plusDivs(1); });
variables_js_1.arrowLeft.addEventListener("click", function () { return plus_divs_js_1.plusDivs(-1); });
//al momento de cerrar el slider, restaura el contenedor de imagenes, dejandolo sin ninguna imagen
variables_js_1.close.addEventListener('click', close_modal_js_1.closeModal);
var _loop_1 = function (i) {
    variables_js_1.arrayBoxes[i].addEventListener('click', function () { return click_box_js_1.clickBox(variables_js_1.arrayBoxes[i]); });
};
for (var i = 0; i < variables_js_1.arrayBoxes.length; i++) {
    _loop_1(i);
}
window.addEventListener("resize", function (event) {
    var nuevoAncho = document.body.clientWidth;
    if (nuevoAncho > 715) {
        variables_js_1.icono.style.display = "none";
        variables_js_1.alturaNav.style.height = "100px";
        variables_js_1.cross.style.display = "none";
    }
    else {
        if (variables_js_1.icono.style.display === 'none') {
            variables_js_1.icono.style.display = "flex";
            variables_js_1.alturaNav.style.height = "100px";
            variables_js_1.cross.style.display = "none";
            variables_js_1.cajas.style.display = "flex";
            variables_js_1.menu.style.left = "-160px";
        }
    }
});
