"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuantityImages = exports.setQuantityImages = void 0;
var quantityImages = 0;
exports.setQuantityImages = function (quantityImagesShow) {
    quantityImages = quantityImagesShow;
};
exports.getQuantityImages = function () { return quantityImages; };
