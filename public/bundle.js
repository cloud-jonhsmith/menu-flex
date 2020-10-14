/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main/functions/btn-cross.js":
/*!*****************************************!*\
  !*** ./src/main/functions/btn-cross.js ***!
  \*****************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export closeMenuMovil [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.closeMenuMovil = void 0;\r\nvar variables_js_1 = __webpack_require__(/*! ../variables/variables.js */ \"./src/main/variables/variables.js\");\r\n//funcion que controla el icono hamburger\r\nexports.closeMenuMovil = function () {\r\n    variables_js_1.cross.style.display = \"none\";\r\n    variables_js_1.menu.style.left = \"-160px\";\r\n    variables_js_1.icono.style.display = \"flex\";\r\n    variables_js_1.cajas.style.display = \"flex\";\r\n    variables_js_1.alturaNav.style.height = \"100px\";\r\n};\r\n\n\n//# sourceURL=webpack://menu-flex/./src/main/functions/btn-cross.js?");

/***/ }),

/***/ "./src/main/functions/btn-icono.js":
/*!*****************************************!*\
  !*** ./src/main/functions/btn-icono.js ***!
  \*****************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export menuMovil [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.menuMovil = void 0;\r\nvar variables_js_1 = __webpack_require__(/*! ../variables/variables.js */ \"./src/main/variables/variables.js\");\r\n//funcion que controla el icono hamburger\r\nexports.menuMovil = function () {\r\n    variables_js_1.menu.style.left = \"0\";\r\n    variables_js_1.icono.style.display = \"none\";\r\n    variables_js_1.cross.style.display = \"flex\";\r\n    variables_js_1.cross.style.alignSelf = \"flex-end\";\r\n    variables_js_1.cajas.style.display = \"none\";\r\n    variables_js_1.alturaNav.style.height = \"100vh\";\r\n};\r\n\n\n//# sourceURL=webpack://menu-flex/./src/main/functions/btn-icono.js?");

/***/ }),

/***/ "./src/main/functions/functions.js":
/*!*****************************************!*\
  !*** ./src/main/functions/functions.js ***!
  \*****************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export hola [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.hola = void 0;\r\nvar variables_js_1 = __webpack_require__(/*! ../variables/variables.js */ \"./src/main/variables/variables.js\");\r\nfunction hola(params) {\r\n    console.log(\"Hola \" + params);\r\n    console.log(\"Hola prev\");\r\n    console.log(variables_js_1.saludo10);\r\n}\r\nexports.hola = hola;\r\n\n\n//# sourceURL=webpack://menu-flex/./src/main/functions/functions.js?");

/***/ }),

/***/ "./src/main/index.ts":
/*!***************************!*\
  !*** ./src/main/index.ts ***!
  \***************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _variables_variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables/variables.js */ \"./src/main/variables/variables.js\");\n/* harmony import */ var _functions_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/functions.js */ \"./src/main/functions/functions.js\");\n/* harmony import */ var _functions_btn_icono_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/btn-icono.js */ \"./src/main/functions/btn-icono.js\");\n/* harmony import */ var _functions_btn_cross_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/btn-cross.js */ \"./src/main/functions/btn-cross.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconsole.log(_variables_variables_js__WEBPACK_IMPORTED_MODULE_0__.saludo);\r\nconsole.log(_variables_variables_js__WEBPACK_IMPORTED_MODULE_0__.saludo2);\r\nconsole.log(_variables_variables_js__WEBPACK_IMPORTED_MODULE_0__.saludo3);\r\nconsole.log(_variables_variables_js__WEBPACK_IMPORTED_MODULE_0__.saludo4);\r\n(0,_functions_functions_js__WEBPACK_IMPORTED_MODULE_1__.hola)(\"Thiago\");\r\n\r\nconsole.log(_variables_variables_js__WEBPACK_IMPORTED_MODULE_0__.icono);\r\n\r\nwindow.addEventListener(\"resize\", function(event) {\r\n    var nuevoAncho = document.body.clientWidth;\r\n    if (nuevoAncho>715) {\r\n        _variables_variables_js__WEBPACK_IMPORTED_MODULE_0__.icono.style.display=\"none\"\r\n        _variables_variables_js__WEBPACK_IMPORTED_MODULE_0__.alturaNav.style.height=\"100px\"\r\n        _variables_variables_js__WEBPACK_IMPORTED_MODULE_0__.cross.style.display=\"none\"\r\n    } else {\r\n        if (_variables_variables_js__WEBPACK_IMPORTED_MODULE_0__.icono.style.display==='none') {\r\n            _variables_variables_js__WEBPACK_IMPORTED_MODULE_0__.icono.style.display=\"flex\"\r\n            _variables_variables_js__WEBPACK_IMPORTED_MODULE_0__.alturaNav.style.height=\"100px\"\r\n            _variables_variables_js__WEBPACK_IMPORTED_MODULE_0__.cross.style.display=\"none\"\r\n            _variables_variables_js__WEBPACK_IMPORTED_MODULE_0__.cajas.style.display=\"flex\"\r\n            _variables_variables_js__WEBPACK_IMPORTED_MODULE_0__.menu.style.left=\"-160px\"\r\n        }\r\n    }\r\n})\r\n\r\n_variables_variables_js__WEBPACK_IMPORTED_MODULE_0__.icono.addEventListener(\"click\", _functions_btn_icono_js__WEBPACK_IMPORTED_MODULE_2__.menuMovil);\r\n_variables_variables_js__WEBPACK_IMPORTED_MODULE_0__.cross.addEventListener(\"click\", _functions_btn_cross_js__WEBPACK_IMPORTED_MODULE_3__.closeMenuMovil);\n\n//# sourceURL=webpack://menu-flex/./src/main/index.ts?");

/***/ }),

/***/ "./src/main/variables/variables.js":
/*!*****************************************!*\
  !*** ./src/main/variables/variables.js ***!
  \*****************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export alturaNav [provided] [no usage info] [missing usage info prevents renaming] */
/*! export cajas [provided] [no usage info] [missing usage info prevents renaming] */
/*! export cross [provided] [no usage info] [missing usage info prevents renaming] */
/*! export icono [provided] [no usage info] [missing usage info prevents renaming] */
/*! export menu [provided] [no usage info] [missing usage info prevents renaming] */
/*! export saludo [provided] [no usage info] [missing usage info prevents renaming] */
/*! export saludo10 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export saludo2 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export saludo3 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export saludo4 [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.cajas = exports.alturaNav = exports.cross = exports.menu = exports.icono = exports.saludo10 = exports.saludo4 = exports.saludo3 = exports.saludo2 = exports.saludo = void 0;\r\nexports.saludo = \"Hola\";\r\nexports.saludo2 = \"Hola2\";\r\nexports.saludo3 = \"Hola3\";\r\nexports.saludo4 = \"Hola4\";\r\nexports.saludo10 = \"Hola10\";\r\n/*-------------------------------------\r\n                Variables\r\n-------------------------------------*/\r\n//controla el icono hamburger\r\nexports.icono = document.getElementById(\"menu-movil\");\r\n//controla los items (HOME,CONTACT,ABOUT)\r\nexports.menu = document.getElementById(\"menu\");\r\n//controla el cross al cerrar el menú\r\nexports.cross = document.getElementById(\"cross\");\r\n//controlar la altura del nav\r\nexports.alturaNav = document.getElementById(\"nav-container\");\r\n//cuando se abre el menú movil, se oculta el contenido\r\nexports.cajas = document.getElementById(\"cajas\");\r\n\n\n//# sourceURL=webpack://menu-flex/./src/main/variables/variables.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;