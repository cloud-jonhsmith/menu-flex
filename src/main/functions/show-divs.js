"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showDivs = void 0;
var quantity_images_js_1 = require("./quantity-images.js");
var variables_js_1 = require("../variables/variables.js");
var move_images_js_1 = require("./move-images.js");
var restart_images_js_1 = require("./restart-images.js");
exports.showDivs = function (n, valorN) {
    var quantityImagesShow = quantity_images_js_1.getQuantityImages();
    //el numero de imagenes mostradas seran con respecto al valor de cantidad, obtenidos al dar click en cualquiera de los cuadrados
    switch (quantityImagesShow) {
        case 1:
            break;
        case 2:
            var detectaImagen_2 = "";
            detectaImagen_2 = variables_js_1.$childrenSliderContainer[1].getAttribute("src");
            //valorN sera positivo si se presiona la flecha derecha
            if (valorN > 0) {
                move_images_js_1.moveImagesLeft();
                restart_images_js_1.restartImages(n, valorN, detectaImagen_2);
            }
            else {
                move_images_js_1.moveImagesRight();
                restart_images_js_1.restartImages(n, valorN, detectaImagen_2);
            }
            break;
        case 3:
            var detectaImagen_3 = "";
            detectaImagen_3 = variables_js_1.$childrenSliderContainer[1].getAttribute("src");
            if (valorN > 0) {
                move_images_js_1.moveImagesLeft();
                restart_images_js_1.restartImages(n, valorN, detectaImagen_3);
            }
            else {
                move_images_js_1.moveImagesRight();
                restart_images_js_1.restartImages(n, valorN, detectaImagen_3);
            }
            break;
        case 4:
            var detectaImagen_4 = "";
            detectaImagen_4 = variables_js_1.$childrenSliderContainer[1].getAttribute("src");
            if (valorN > 0) {
                move_images_js_1.moveImagesLeft();
                restart_images_js_1.restartImages(n, valorN, detectaImagen_4);
            }
            else {
                move_images_js_1.moveImagesRight();
                restart_images_js_1.restartImages(n, valorN, detectaImagen_4);
            }
            break;
        case 5:
            var detectaImagen_5 = "";
            detectaImagen_5 = variables_js_1.$childrenSliderContainer[1].getAttribute("src");
            if (valorN > 0) {
                move_images_js_1.moveImagesLeft();
                restart_images_js_1.restartImages(n, valorN, detectaImagen_5);
            }
            else {
                move_images_js_1.moveImagesRight();
                restart_images_js_1.restartImages(n, valorN, detectaImagen_5);
            }
            break;
        default:
            alert("Error desconocido");
            break;
    }
};
