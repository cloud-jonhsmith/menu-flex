"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plusDivs = void 0;
var show_divs_js_1 = require("./show-divs.js");
var slideIndex = 1;
exports.plusDivs = function (n) { return show_divs_js_1.showDivs(slideIndex += n, n); };
