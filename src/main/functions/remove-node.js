"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNodeRight = exports.removeNodeLeft = void 0;
var variables_js_1 = require("../variables/variables.js");
exports.removeNodeLeft = function () { variables_js_1.$sliderContainer.removeChild(variables_js_1.$sliderContainer.children[0]); };
exports.removeNodeRight = function () { variables_js_1.$sliderContainer.removeChild(variables_js_1.$sliderContainer.children[2]); };
