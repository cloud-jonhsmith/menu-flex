"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showDivs = void 0;
var move_images_js_1 = require("./move-images.js");
var restart_images_js_1 = require("./restart-images.js");
var detecta_Imagen_js_1 = require("./detecta-Imagen.js");
exports.showDivs = function (directionArrow) {
    var valorImg = detecta_Imagen_js_1.detectaImagen();
    if (directionArrow > 0) {
        move_images_js_1.moveImagesLeft();
        restart_images_js_1.restartImages(directionArrow, valorImg);
    }
    else {
        move_images_js_1.moveImagesRight();
        restart_images_js_1.restartImages(directionArrow, valorImg);
    }
};
