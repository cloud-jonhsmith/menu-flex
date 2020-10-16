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

/***/ "./src/img/img1.png":
/*!**************************!*\
  !*** ./src/img/img1.png ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"static/img1.png\");\n\n//# sourceURL=webpack://menu-flex/./src/img/img1.png?");

/***/ }),

/***/ "./src/img/img2.png":
/*!**************************!*\
  !*** ./src/img/img2.png ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"static/img2.png\");\n\n//# sourceURL=webpack://menu-flex/./src/img/img2.png?");

/***/ }),

/***/ "./src/img/img3.png":
/*!**************************!*\
  !*** ./src/img/img3.png ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"static/img3.png\");\n\n//# sourceURL=webpack://menu-flex/./src/img/img3.png?");

/***/ }),

/***/ "./src/img/img4.png":
/*!**************************!*\
  !*** ./src/img/img4.png ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"static/img4.png\");\n\n//# sourceURL=webpack://menu-flex/./src/img/img4.png?");

/***/ }),

/***/ "./src/img/img5.png":
/*!**************************!*\
  !*** ./src/img/img5.png ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"static/img5.png\");\n\n//# sourceURL=webpack://menu-flex/./src/img/img5.png?");

/***/ }),

/***/ "./src/main/functions/add-node.js":
/*!****************************************!*\
  !*** ./src/main/functions/add-node.js ***!
  \****************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addNodeLeft [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addNodeRight [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.addNodeRight = exports.addNodeLeft = void 0;\r\nvar quantity_images_js_1 = __webpack_require__(/*! ./quantity-images.js */ \"./src/main/functions/quantity-images.js\");\r\nvar insert_slider_img_js_1 = __webpack_require__(/*! ./insert-slider-img.js */ \"./src/main/functions/insert-slider-img.js\");\r\n//n aumenta de 1 en 1 cada vez que se presionan las fechas de derecha o izquierda, esta funcion agrega un nodo al inicio, que se va a mostrar al deslizar hacia la derecha\r\nfunction addNodeLeft(n, detectImg) {\r\n    var quantityImagesShow = quantity_images_js_1.getQuantityImages();\r\n    switch (quantityImagesShow) {\r\n        case 1:\r\n            break;\r\n        case 2:\r\n            var $nodeTwoImages = document.createElement(\"img\");\r\n            (detectImg === 'static/img1.png')\r\n                ? insert_slider_img_js_1.insertBeforeSliderImg($nodeTwoImages, quantityImagesShow)\r\n                : insert_slider_img_js_1.insertBeforeSliderImg($nodeTwoImages, quantityImagesShow);\r\n            break;\r\n        case 3:\r\n            var $nodeThreeImages = document.createElement(\"img\");\r\n            (detectImg === 'static/img1.png')\r\n                ? insert_slider_img_js_1.insertBeforeSliderImg($nodeThreeImages, quantityImagesShow)\r\n                : (detectImg === 'static/img2.png')\r\n                    ? insert_slider_img_js_1.insertBeforeSliderImg($nodeThreeImages, quantityImagesShow)\r\n                    : insert_slider_img_js_1.insertBeforeSliderImg($nodeThreeImages, quantityImagesShow);\r\n            break;\r\n        case 4:\r\n            var $nodeFourImages = document.createElement(\"img\");\r\n            (detectImg === 'static/img1.png')\r\n                ? insert_slider_img_js_1.insertBeforeSliderImg($nodeFourImages, quantityImagesShow)\r\n                : (detectImg === 'static/img2.png')\r\n                    ? insert_slider_img_js_1.insertBeforeSliderImg($nodeFourImages, quantityImagesShow)\r\n                    : (detectImg === 'static/img3.png')\r\n                        ? insert_slider_img_js_1.insertBeforeSliderImg($nodeFourImages, quantityImagesShow)\r\n                        : insert_slider_img_js_1.insertBeforeSliderImg($nodeFourImages, quantityImagesShow);\r\n            break;\r\n        case 5:\r\n            var $nodeFiveImages = document.createElement(\"img\");\r\n            (detectImg === 'static/img1.png')\r\n                ? insert_slider_img_js_1.insertBeforeSliderImg($nodeFiveImages, quantityImagesShow)\r\n                : (detectImg === 'static/img2.png')\r\n                    ? insert_slider_img_js_1.insertBeforeSliderImg($nodeFiveImages, quantityImagesShow)\r\n                    : (detectImg === 'static/img3.png')\r\n                        ? insert_slider_img_js_1.insertBeforeSliderImg($nodeFiveImages, quantityImagesShow)\r\n                        : (detectImg === 'static/img4.png')\r\n                            ? insert_slider_img_js_1.insertBeforeSliderImg($nodeFiveImages, quantityImagesShow)\r\n                            : insert_slider_img_js_1.insertBeforeSliderImg($nodeFiveImages, quantityImagesShow);\r\n            break;\r\n        default:\r\n            break;\r\n    }\r\n}\r\nexports.addNodeLeft = addNodeLeft;\r\n//n aumenta de 1 en 1 cada vez que se presionan las fechas de derecha o izquierda, esta funcion agrega un nodo al final, que se va a mostrar al deslizar hacia la izquierda\r\nfunction addNodeRight(n, detectImg) {\r\n    var quantityImagesShow = quantity_images_js_1.getQuantityImages();\r\n    switch (quantityImagesShow) {\r\n        case 1:\r\n            break;\r\n        case 2:\r\n            var $nodeTwoImages = document.createElement(\"img\");\r\n            (detectImg === 'static/img1.png')\r\n                ? insert_slider_img_js_1.insertAfterSliderImg($nodeTwoImages, quantityImagesShow)\r\n                : insert_slider_img_js_1.insertAfterSliderImg($nodeTwoImages, quantityImagesShow);\r\n            break;\r\n        case 3:\r\n            var $nodeThreeImages = document.createElement(\"img\");\r\n            (detectImg === 'static/img1.png')\r\n                ? insert_slider_img_js_1.insertAfterSliderImg($nodeThreeImages, quantityImagesShow)\r\n                : (detectImg === 'static/img2.png')\r\n                    ? insert_slider_img_js_1.insertAfterSliderImg($nodeThreeImages, quantityImagesShow)\r\n                    : insert_slider_img_js_1.insertAfterSliderImg($nodeThreeImages, quantityImagesShow);\r\n            break;\r\n        case 4:\r\n            var $nodeFourImages = document.createElement(\"img\");\r\n            (detectImg === 'static/img1.png')\r\n                ? insert_slider_img_js_1.insertAfterSliderImg($nodeFourImages, quantityImagesShow)\r\n                : (detectImg === 'static/img2.png')\r\n                    ? insert_slider_img_js_1.insertAfterSliderImg($nodeFourImages, quantityImagesShow)\r\n                    : (detectImg === 'static/img3.png')\r\n                        ? insert_slider_img_js_1.insertAfterSliderImg($nodeFourImages, quantityImagesShow)\r\n                        : insert_slider_img_js_1.insertAfterSliderImg($nodeFourImages, quantityImagesShow);\r\n            break;\r\n        case 5:\r\n            var $nodeFiveImages = document.createElement(\"img\");\r\n            (detectImg === 'static/img1.png')\r\n                ? insert_slider_img_js_1.insertAfterSliderImg($nodeFiveImages, quantityImagesShow)\r\n                : (detectImg === 'static/img2.png')\r\n                    ? insert_slider_img_js_1.insertAfterSliderImg($nodeFiveImages, quantityImagesShow)\r\n                    : (detectImg === 'static/img3.png')\r\n                        ? insert_slider_img_js_1.insertAfterSliderImg($nodeFiveImages, quantityImagesShow)\r\n                        : (detectImg === 'static/img4.png')\r\n                            ? insert_slider_img_js_1.insertAfterSliderImg($nodeFiveImages, quantityImagesShow)\r\n                            : insert_slider_img_js_1.insertAfterSliderImg($nodeFiveImages, quantityImagesShow);\r\n            break;\r\n        default:\r\n            break;\r\n    }\r\n}\r\nexports.addNodeRight = addNodeRight;\r\n\n\n//# sourceURL=webpack://menu-flex/./src/main/functions/add-node.js?");

/***/ }),

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

/***/ "./src/main/functions/click-box.js":
/*!*****************************************!*\
  !*** ./src/main/functions/click-box.js ***!
  \*****************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export clickBox [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.clickBox = void 0;\r\nvar quantity_images_js_1 = __webpack_require__(/*! ./quantity-images.js */ \"./src/main/functions/quantity-images.js\");\r\nvar open_modal_js_1 = __webpack_require__(/*! ./open-modal.js */ \"./src/main/functions/open-modal.js\");\r\nvar init_images_js_1 = __webpack_require__(/*! ./init-images.js */ \"./src/main/functions/init-images.js\");\r\nvar show_arrows_js_1 = __webpack_require__(/*! ./show-arrows.js */ \"./src/main/functions/show-arrows.js\");\r\nvar hide_arrows_js_1 = __webpack_require__(/*! ./hide-arrows.js */ \"./src/main/functions/hide-arrows.js\");\r\nfunction clickBox(valorBox) {\r\n    var quantityImagesShow = parseInt(valorBox.innerHTML);\r\n    quantity_images_js_1.setQuantityImages(quantityImagesShow);\r\n    if (quantityImagesShow === 1) {\r\n        hide_arrows_js_1.hideArrows();\r\n        open_modal_js_1.openModal();\r\n        init_images_js_1.initImages();\r\n    }\r\n    else {\r\n        show_arrows_js_1.showArrows();\r\n        open_modal_js_1.openModal();\r\n        init_images_js_1.initImages();\r\n    }\r\n}\r\nexports.clickBox = clickBox;\r\n\n\n//# sourceURL=webpack://menu-flex/./src/main/functions/click-box.js?");

/***/ }),

/***/ "./src/main/functions/close-modal.js":
/*!*******************************************!*\
  !*** ./src/main/functions/close-modal.js ***!
  \*******************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export closeModal [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.closeModal = void 0;\r\nvar variables_js_1 = __webpack_require__(/*! ../variables/variables.js */ \"./src/main/variables/variables.js\");\r\nvar quantity_images_js_1 = __webpack_require__(/*! ./quantity-images.js */ \"./src/main/functions/quantity-images.js\");\r\nvar reset_images_js_1 = __webpack_require__(/*! ./reset-images.js */ \"./src/main/functions/reset-images.js\");\r\nexports.closeModal = function () {\r\n    var quantityImagesShow = quantity_images_js_1.getQuantityImages();\r\n    variables_js_1.modal.removeAttribute('open');\r\n    reset_images_js_1.resetImages(quantityImagesShow);\r\n};\r\n\n\n//# sourceURL=webpack://menu-flex/./src/main/functions/close-modal.js?");

/***/ }),

/***/ "./src/main/functions/create-element-slider.js":
/*!*****************************************************!*\
  !*** ./src/main/functions/create-element-slider.js ***!
  \*****************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createElementSliderContainer [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.createElementSliderContainer = void 0;\r\nvar variables_js_1 = __webpack_require__(/*! ../variables/variables.js */ \"./src/main/variables/variables.js\");\r\nexports.createElementSliderContainer = function (valueBox) {\r\n    var createNode = document.createElement(\"img\");\r\n    createNode.classList.add(\"imagenes\");\r\n    createNode.setAttribute(\"src\", \"static/img\" + valueBox + \".png\");\r\n    variables_js_1.$sliderContainer.appendChild(createNode);\r\n    if (valueBox !== 1)\r\n        createAnotherElements();\r\n};\r\nvar createAnotherElements = function () {\r\n    for (var i = 1; i <= 2; i++) {\r\n        var createNode = document.createElement(\"img\");\r\n        createNode.classList.add(\"imagenes\");\r\n        createNode.setAttribute(\"src\", \"static/img\" + i + \".png\");\r\n        variables_js_1.$sliderContainer.appendChild(createNode);\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://menu-flex/./src/main/functions/create-element-slider.js?");

/***/ }),

/***/ "./src/main/functions/hide-arrows.js":
/*!*******************************************!*\
  !*** ./src/main/functions/hide-arrows.js ***!
  \*******************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export hideArrows [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.hideArrows = void 0;\r\nvar variables_js_1 = __webpack_require__(/*! ../variables/variables.js */ \"./src/main/variables/variables.js\");\r\nexports.hideArrows = function () {\r\n    variables_js_1.arrowLeft.style.display = \"none\";\r\n    variables_js_1.arrowRight.style.display = \"none\";\r\n};\r\n\n\n//# sourceURL=webpack://menu-flex/./src/main/functions/hide-arrows.js?");

/***/ }),

/***/ "./src/main/functions/init-images.js":
/*!*******************************************!*\
  !*** ./src/main/functions/init-images.js ***!
  \*******************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initImages [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.initImages = void 0;\r\nvar init_position_js_1 = __webpack_require__(/*! ./init-position.js */ \"./src/main/functions/init-position.js\");\r\nvar quantity_images_js_1 = __webpack_require__(/*! ./quantity-images.js */ \"./src/main/functions/quantity-images.js\");\r\nvar create_element_slider_js_1 = __webpack_require__(/*! ./create-element-slider.js */ \"./src/main/functions/create-element-slider.js\");\r\n//inicializa el contenedor del slider con 3 imagenes (si presiona la caja3, agrega la imagen2 a la derecha y la imagen3 a la izquierda, si presiona la caja5, agrega la imagen 2 a la derecha y la imagen 5 a la izquierda)\r\nfunction initImages() {\r\n    //div slider-container, dentro estaran las imagenes\r\n    var quantityImagesShow = quantity_images_js_1.getQuantityImages();\r\n    switch (quantityImagesShow) {\r\n        case 1:\r\n            create_element_slider_js_1.createElementSliderContainer(quantityImagesShow);\r\n            break;\r\n        case 2:\r\n            create_element_slider_js_1.createElementSliderContainer(quantityImagesShow);\r\n            init_position_js_1.initPosition();\r\n            break;\r\n        case 3:\r\n            create_element_slider_js_1.createElementSliderContainer(quantityImagesShow);\r\n            init_position_js_1.initPosition();\r\n            break;\r\n        case 4:\r\n            create_element_slider_js_1.createElementSliderContainer(quantityImagesShow);\r\n            init_position_js_1.initPosition();\r\n            break;\r\n        case 5:\r\n            create_element_slider_js_1.createElementSliderContainer(quantityImagesShow);\r\n            init_position_js_1.initPosition();\r\n            break;\r\n        default:\r\n            break;\r\n    }\r\n}\r\nexports.initImages = initImages;\r\n\n\n//# sourceURL=webpack://menu-flex/./src/main/functions/init-images.js?");

/***/ }),

/***/ "./src/main/functions/init-position.js":
/*!*********************************************!*\
  !*** ./src/main/functions/init-position.js ***!
  \*********************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initPosition [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.initPosition = void 0;\r\nvar variables_js_1 = __webpack_require__(/*! ../variables/variables.js */ \"./src/main/variables/variables.js\");\r\nexports.initPosition = function () {\r\n    variables_js_1.$sliderContainer.firstElementChild.style.left = \"-500px\";\r\n    variables_js_1.$sliderContainer.lastElementChild.style.left = \"500px\";\r\n};\r\n\n\n//# sourceURL=webpack://menu-flex/./src/main/functions/init-position.js?");

/***/ }),

/***/ "./src/main/functions/insert-slider-img.js":
/*!*************************************************!*\
  !*** ./src/main/functions/insert-slider-img.js ***!
  \*************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export insertAfterSliderImg [provided] [no usage info] [missing usage info prevents renaming] */
/*! export insertBeforeSliderImg [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.insertAfterSliderImg = exports.insertBeforeSliderImg = void 0;\r\nvar insert_slider_js_1 = __webpack_require__(/*! ./insert-slider.js */ \"./src/main/functions/insert-slider.js\");\r\nexports.insertBeforeSliderImg = function (node, imgNumber) {\r\n    node.setAttribute(\"src\", \"static/img\" + imgNumber + \".png\");\r\n    insert_slider_js_1.insertSliderLeft(node);\r\n};\r\nexports.insertAfterSliderImg = function (node, imgNumber) {\r\n    node.setAttribute(\"src\", \"static/img\" + imgNumber + \".png\");\r\n    insert_slider_js_1.insertSliderRight(node);\r\n};\r\n\n\n//# sourceURL=webpack://menu-flex/./src/main/functions/insert-slider-img.js?");

/***/ }),

/***/ "./src/main/functions/insert-slider.js":
/*!*********************************************!*\
  !*** ./src/main/functions/insert-slider.js ***!
  \*********************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export insertSliderLeft [provided] [no usage info] [missing usage info prevents renaming] */
/*! export insertSliderRight [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.insertSliderRight = exports.insertSliderLeft = void 0;\r\nvar variables_js_1 = __webpack_require__(/*! ../variables/variables.js */ \"./src/main/variables/variables.js\");\r\nexports.insertSliderLeft = function ($node) {\r\n    $node.classList.add(\"imagenes\");\r\n    variables_js_1.$sliderContainer.insertBefore($node, variables_js_1.$sliderContainer.firstChild);\r\n    variables_js_1.$sliderContainer.firstElementChild.style.left = \"-500px\";\r\n};\r\nexports.insertSliderRight = function ($node) {\r\n    $node.classList.add(\"imagenes\");\r\n    variables_js_1.$sliderContainer.appendChild($node);\r\n    variables_js_1.$sliderContainer.lastElementChild.style.left = \"500px\";\r\n};\r\n\n\n//# sourceURL=webpack://menu-flex/./src/main/functions/insert-slider.js?");

/***/ }),

/***/ "./src/main/functions/move-images.js":
/*!*******************************************!*\
  !*** ./src/main/functions/move-images.js ***!
  \*******************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export moveImagesLeft [provided] [no usage info] [missing usage info prevents renaming] */
/*! export moveImagesRight [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.moveImagesRight = exports.moveImagesLeft = void 0;\r\nvar variables_js_1 = __webpack_require__(/*! ../variables/variables.js */ \"./src/main/variables/variables.js\");\r\nvar variables_js_2 = __webpack_require__(/*! ../variables/variables.js */ \"./src/main/variables/variables.js\");\r\nexports.moveImagesLeft = function () {\r\n    console.log(variables_js_1.$childrenSliderContainer);\r\n    console.log(variables_js_2.$sliderContainer);\r\n    variables_js_1.$childrenSliderContainer[0].style.left = \"-1000px\";\r\n    variables_js_1.$childrenSliderContainer[1].style.left = \"-500px\";\r\n    variables_js_1.$childrenSliderContainer[2].style.left = \"0\";\r\n};\r\nexports.moveImagesRight = function () {\r\n    console.log(variables_js_1.$childrenSliderContainer);\r\n    console.log(variables_js_2.$sliderContainer);\r\n    variables_js_1.$childrenSliderContainer[0].style.left = \"0\";\r\n    variables_js_1.$childrenSliderContainer[1].style.left = \"500px\";\r\n    variables_js_1.$childrenSliderContainer[2].style.left = \"1000px\";\r\n};\r\n\n\n//# sourceURL=webpack://menu-flex/./src/main/functions/move-images.js?");

/***/ }),

/***/ "./src/main/functions/open-modal.js":
/*!******************************************!*\
  !*** ./src/main/functions/open-modal.js ***!
  \******************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export openModal [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.openModal = void 0;\r\nvar variables_js_1 = __webpack_require__(/*! ../variables/variables.js */ \"./src/main/variables/variables.js\");\r\nexports.openModal = function () {\r\n    variables_js_1.modal.setAttribute('open', 'true');\r\n};\r\n\n\n//# sourceURL=webpack://menu-flex/./src/main/functions/open-modal.js?");

/***/ }),

/***/ "./src/main/functions/plus-divs.js":
/*!*****************************************!*\
  !*** ./src/main/functions/plus-divs.js ***!
  \*****************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export plusDivs [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.plusDivs = void 0;\r\nvar show_divs_js_1 = __webpack_require__(/*! ./show-divs.js */ \"./src/main/functions/show-divs.js\");\r\nvar slideIndex = 1;\r\nexports.plusDivs = function (n) { return show_divs_js_1.showDivs(slideIndex += n, n); };\r\n\n\n//# sourceURL=webpack://menu-flex/./src/main/functions/plus-divs.js?");

/***/ }),

/***/ "./src/main/functions/quantity-images.js":
/*!***********************************************!*\
  !*** ./src/main/functions/quantity-images.js ***!
  \***********************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getQuantityImages [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setQuantityImages [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getQuantityImages = exports.setQuantityImages = void 0;\r\nvar quantityImages = 0;\r\nexports.setQuantityImages = function (quantityImagesShow) {\r\n    quantityImages = quantityImagesShow;\r\n};\r\nexports.getQuantityImages = function () { return quantityImages; };\r\n\n\n//# sourceURL=webpack://menu-flex/./src/main/functions/quantity-images.js?");

/***/ }),

/***/ "./src/main/functions/remove-node.js":
/*!*******************************************!*\
  !*** ./src/main/functions/remove-node.js ***!
  \*******************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export removeNodeLeft [provided] [no usage info] [missing usage info prevents renaming] */
/*! export removeNodeRight [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.removeNodeRight = exports.removeNodeLeft = void 0;\r\nvar variables_js_1 = __webpack_require__(/*! ../variables/variables.js */ \"./src/main/variables/variables.js\");\r\nexports.removeNodeLeft = function () { variables_js_1.$sliderContainer.removeChild(variables_js_1.$sliderContainer.children[0]); };\r\nexports.removeNodeRight = function () { variables_js_1.$sliderContainer.removeChild(variables_js_1.$sliderContainer.children[2]); };\r\n\n\n//# sourceURL=webpack://menu-flex/./src/main/functions/remove-node.js?");

/***/ }),

/***/ "./src/main/functions/reset-images.js":
/*!********************************************!*\
  !*** ./src/main/functions/reset-images.js ***!
  \********************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export resetImages [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.resetImages = void 0;\r\nvar variables_js_1 = __webpack_require__(/*! ../variables/variables.js */ \"./src/main/variables/variables.js\");\r\nexports.resetImages = function (quantityImagesShow) {\r\n    if (quantityImagesShow === 1) {\r\n        variables_js_1.$sliderContainer.removeChild(variables_js_1.$sliderContainer.children[0]);\r\n    }\r\n    else {\r\n        variables_js_1.$sliderContainer.removeChild(variables_js_1.$sliderContainer.children[2]);\r\n        variables_js_1.$sliderContainer.removeChild(variables_js_1.$sliderContainer.children[1]);\r\n        variables_js_1.$sliderContainer.removeChild(variables_js_1.$sliderContainer.children[0]);\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://menu-flex/./src/main/functions/reset-images.js?");

/***/ }),

/***/ "./src/main/functions/restart-images.js":
/*!**********************************************!*\
  !*** ./src/main/functions/restart-images.js ***!
  \**********************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export restartImages [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.restartImages = void 0;\r\nvar quantity_images_js_1 = __webpack_require__(/*! ./quantity-images.js */ \"./src/main/functions/quantity-images.js\");\r\nvar remove_node_js_1 = __webpack_require__(/*! ./remove-node.js */ \"./src/main/functions/remove-node.js\");\r\nvar add_node_js_1 = __webpack_require__(/*! ./add-node.js */ \"./src/main/functions/add-node.js\");\r\nfunction restartImages(n, valorN, detectaImagen) {\r\n    var quantityImagesShow = quantity_images_js_1.getQuantityImages();\r\n    switch (quantityImagesShow) {\r\n        case 1:\r\n            break;\r\n        case 2:\r\n            if (valorN > 0) {\r\n                remove_node_js_1.removeNodeLeft();\r\n                add_node_js_1.addNodeRight(n, detectaImagen);\r\n            }\r\n            else {\r\n                remove_node_js_1.removeNodeRight();\r\n                add_node_js_1.addNodeLeft(n, detectaImagen);\r\n            }\r\n            break;\r\n        case 3:\r\n            if (valorN > 0) {\r\n                remove_node_js_1.removeNodeLeft();\r\n                add_node_js_1.addNodeRight(n, detectaImagen);\r\n            }\r\n            else {\r\n                remove_node_js_1.removeNodeRight();\r\n                add_node_js_1.addNodeLeft(n, detectaImagen);\r\n            }\r\n            break;\r\n        case 4:\r\n            if (valorN > 0) {\r\n                remove_node_js_1.removeNodeLeft();\r\n                add_node_js_1.addNodeRight(n, detectaImagen);\r\n            }\r\n            else {\r\n                remove_node_js_1.removeNodeRight();\r\n                add_node_js_1.addNodeLeft(n, detectaImagen);\r\n            }\r\n            break;\r\n        case 5:\r\n            if (valorN > 0) {\r\n                remove_node_js_1.removeNodeLeft();\r\n                add_node_js_1.addNodeRight(n, detectaImagen);\r\n            }\r\n            else {\r\n                remove_node_js_1.removeNodeRight();\r\n                add_node_js_1.addNodeLeft(n, detectaImagen);\r\n            }\r\n            break;\r\n        default:\r\n            break;\r\n    }\r\n}\r\nexports.restartImages = restartImages;\r\n\n\n//# sourceURL=webpack://menu-flex/./src/main/functions/restart-images.js?");

/***/ }),

/***/ "./src/main/functions/show-arrows.js":
/*!*******************************************!*\
  !*** ./src/main/functions/show-arrows.js ***!
  \*******************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export showArrows [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.showArrows = void 0;\r\nvar variables_js_1 = __webpack_require__(/*! ../variables/variables.js */ \"./src/main/variables/variables.js\");\r\nexports.showArrows = function () {\r\n    variables_js_1.arrowLeft.style.display = \"block\";\r\n    variables_js_1.arrowRight.style.display = \"block\";\r\n};\r\n\n\n//# sourceURL=webpack://menu-flex/./src/main/functions/show-arrows.js?");

/***/ }),

/***/ "./src/main/functions/show-divs.js":
/*!*****************************************!*\
  !*** ./src/main/functions/show-divs.js ***!
  \*****************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export showDivs [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.showDivs = void 0;\r\nvar quantity_images_js_1 = __webpack_require__(/*! ./quantity-images.js */ \"./src/main/functions/quantity-images.js\");\r\nvar variables_js_1 = __webpack_require__(/*! ../variables/variables.js */ \"./src/main/variables/variables.js\");\r\nvar move_images_js_1 = __webpack_require__(/*! ./move-images.js */ \"./src/main/functions/move-images.js\");\r\nvar restart_images_js_1 = __webpack_require__(/*! ./restart-images.js */ \"./src/main/functions/restart-images.js\");\r\nexports.showDivs = function (n, valorN) {\r\n    var quantityImagesShow = quantity_images_js_1.getQuantityImages();\r\n    //el numero de imagenes mostradas seran con respecto al valor de cantidad, obtenidos al dar click en cualquiera de los cuadrados\r\n    switch (quantityImagesShow) {\r\n        case 1:\r\n            break;\r\n        case 2:\r\n            var detectaImagen_2 = \"\";\r\n            detectaImagen_2 = variables_js_1.$childrenSliderContainer[1].getAttribute(\"src\");\r\n            //valorN sera positivo si se presiona la flecha derecha\r\n            if (valorN > 0) {\r\n                move_images_js_1.moveImagesLeft();\r\n                restart_images_js_1.restartImages(n, valorN, detectaImagen_2);\r\n            }\r\n            else {\r\n                move_images_js_1.moveImagesRight();\r\n                restart_images_js_1.restartImages(n, valorN, detectaImagen_2);\r\n            }\r\n            break;\r\n        case 3:\r\n            var detectaImagen_3 = \"\";\r\n            detectaImagen_3 = variables_js_1.$childrenSliderContainer[1].getAttribute(\"src\");\r\n            if (valorN > 0) {\r\n                move_images_js_1.moveImagesLeft();\r\n                restart_images_js_1.restartImages(n, valorN, detectaImagen_3);\r\n            }\r\n            else {\r\n                move_images_js_1.moveImagesRight();\r\n                restart_images_js_1.restartImages(n, valorN, detectaImagen_3);\r\n            }\r\n            break;\r\n        case 4:\r\n            var detectaImagen_4 = \"\";\r\n            detectaImagen_4 = variables_js_1.$childrenSliderContainer[1].getAttribute(\"src\");\r\n            if (valorN > 0) {\r\n                move_images_js_1.moveImagesLeft();\r\n                restart_images_js_1.restartImages(n, valorN, detectaImagen_4);\r\n            }\r\n            else {\r\n                move_images_js_1.moveImagesRight();\r\n                restart_images_js_1.restartImages(n, valorN, detectaImagen_4);\r\n            }\r\n            break;\r\n        case 5:\r\n            var detectaImagen_5 = \"\";\r\n            detectaImagen_5 = variables_js_1.$childrenSliderContainer[1].getAttribute(\"src\");\r\n            if (valorN > 0) {\r\n                move_images_js_1.moveImagesLeft();\r\n                restart_images_js_1.restartImages(n, valorN, detectaImagen_5);\r\n            }\r\n            else {\r\n                move_images_js_1.moveImagesRight();\r\n                restart_images_js_1.restartImages(n, valorN, detectaImagen_5);\r\n            }\r\n            break;\r\n        default:\r\n            alert(\"Error desconocido\");\r\n            break;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://menu-flex/./src/main/functions/show-divs.js?");

/***/ }),

/***/ "./src/main/index.ts":
/*!***************************!*\
  !*** ./src/main/index.ts ***!
  \***************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_img1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/img1.png */ \"./src/img/img1.png\");\n/* harmony import */ var _img_img2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/img2.png */ \"./src/img/img2.png\");\n/* harmony import */ var _img_img3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/img3.png */ \"./src/img/img3.png\");\n/* harmony import */ var _img_img4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/img4.png */ \"./src/img/img4.png\");\n/* harmony import */ var _img_img5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/img5.png */ \"./src/img/img5.png\");\n/* harmony import */ var _variables_variables_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./variables/variables.js */ \"./src/main/variables/variables.js\");\n/* harmony import */ var _functions_btn_icono_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/btn-icono.js */ \"./src/main/functions/btn-icono.js\");\n/* harmony import */ var _functions_btn_cross_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functions/btn-cross.js */ \"./src/main/functions/btn-cross.js\");\n/* harmony import */ var _functions_click_box_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functions/click-box.js */ \"./src/main/functions/click-box.js\");\n/* harmony import */ var _functions_close_modal_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./functions/close-modal.js */ \"./src/main/functions/close-modal.js\");\n/* harmony import */ var _functions_plus_divs_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./functions/plus-divs.js */ \"./src/main/functions/plus-divs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//import variables\r\n\r\n\r\n//import funciones\r\n\r\n\r\n\r\n\r\n\r\n\r\n_variables_variables_js__WEBPACK_IMPORTED_MODULE_5__.icono.addEventListener(\"click\", _functions_btn_icono_js__WEBPACK_IMPORTED_MODULE_6__.menuMovil);\r\n_variables_variables_js__WEBPACK_IMPORTED_MODULE_5__.cross.addEventListener(\"click\", _functions_btn_cross_js__WEBPACK_IMPORTED_MODULE_7__.closeMenuMovil);\r\n\r\n_variables_variables_js__WEBPACK_IMPORTED_MODULE_5__.arrowRight.addEventListener(\"click\", () => (0,_functions_plus_divs_js__WEBPACK_IMPORTED_MODULE_10__.plusDivs)(1));\r\n_variables_variables_js__WEBPACK_IMPORTED_MODULE_5__.arrowLeft.addEventListener(\"click\", () => (0,_functions_plus_divs_js__WEBPACK_IMPORTED_MODULE_10__.plusDivs)(-1));\r\n\r\n//al momento de cerrar el slider, restaura el contenedor de imagenes, dejandolo sin ninguna imagen\r\n_variables_variables_js__WEBPACK_IMPORTED_MODULE_5__.close.addEventListener('click' , _functions_close_modal_js__WEBPACK_IMPORTED_MODULE_9__.closeModal);\r\n\r\nfor (let i = 0; i < _variables_variables_js__WEBPACK_IMPORTED_MODULE_5__.arrayBoxes.length; i++) {\r\n    _variables_variables_js__WEBPACK_IMPORTED_MODULE_5__.arrayBoxes[i].addEventListener('click', () => (0,_functions_click_box_js__WEBPACK_IMPORTED_MODULE_8__.clickBox)(_variables_variables_js__WEBPACK_IMPORTED_MODULE_5__.arrayBoxes[i]));\r\n}\r\n\r\n\r\n\r\nwindow.addEventListener(\"resize\", function(event) {\r\n    var nuevoAncho = document.body.clientWidth;\r\n    if (nuevoAncho>715) {\r\n        _variables_variables_js__WEBPACK_IMPORTED_MODULE_5__.icono.style.display=\"none\"\r\n        _variables_variables_js__WEBPACK_IMPORTED_MODULE_5__.alturaNav.style.height=\"100px\"\r\n        _variables_variables_js__WEBPACK_IMPORTED_MODULE_5__.cross.style.display=\"none\"\r\n    } else {\r\n        if (_variables_variables_js__WEBPACK_IMPORTED_MODULE_5__.icono.style.display==='none') {\r\n            _variables_variables_js__WEBPACK_IMPORTED_MODULE_5__.icono.style.display=\"flex\"\r\n            _variables_variables_js__WEBPACK_IMPORTED_MODULE_5__.alturaNav.style.height=\"100px\"\r\n            _variables_variables_js__WEBPACK_IMPORTED_MODULE_5__.cross.style.display=\"none\"\r\n            _variables_variables_js__WEBPACK_IMPORTED_MODULE_5__.cajas.style.display=\"flex\"\r\n            _variables_variables_js__WEBPACK_IMPORTED_MODULE_5__.menu.style.left=\"-160px\"\r\n        }\r\n    }\r\n})\n\n//# sourceURL=webpack://menu-flex/./src/main/index.ts?");

/***/ }),

/***/ "./src/main/variables/variables.js":
/*!*****************************************!*\
  !*** ./src/main/variables/variables.js ***!
  \*****************************************/
/*! flagged exports */
/*! export $childrenSliderContainer [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $sliderContainer [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export alturaNav [provided] [no usage info] [missing usage info prevents renaming] */
/*! export arrayBoxes [provided] [no usage info] [missing usage info prevents renaming] */
/*! export arrowLeft [provided] [no usage info] [missing usage info prevents renaming] */
/*! export arrowRight [provided] [no usage info] [missing usage info prevents renaming] */
/*! export cajas [provided] [no usage info] [missing usage info prevents renaming] */
/*! export close [provided] [no usage info] [missing usage info prevents renaming] */
/*! export cross [provided] [no usage info] [missing usage info prevents renaming] */
/*! export icono [provided] [no usage info] [missing usage info prevents renaming] */
/*! export menu [provided] [no usage info] [missing usage info prevents renaming] */
/*! export modal [provided] [no usage info] [missing usage info prevents renaming] */
/*! export quantityImages [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\r\n/*-------------------------------------\r\n                Variables\r\n-------------------------------------*/\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.arrayBoxes = exports.quantityImages = exports.$childrenSliderContainer = exports.$sliderContainer = exports.close = exports.modal = exports.arrowRight = exports.arrowLeft = exports.menu = exports.cross = exports.icono = exports.cajas = exports.alturaNav = void 0;\r\nexports.alturaNav = document.getElementById(\"nav-container\");\r\nexports.cajas = document.getElementById(\"cajas\");\r\n//controla el icono hamburger y el cross del menu\r\nexports.icono = document.getElementById(\"menu-movil\");\r\nexports.cross = document.getElementById(\"cross\");\r\n//controla los items (HOME,CONTACT,ABOUT)\r\nexports.menu = document.getElementById(\"menu\");\r\n//variables para manipular la visibilidad de las flechas\r\nexports.arrowLeft = document.getElementById('b-izq');\r\nexports.arrowRight = document.getElementById('b-der');\r\n//todas las imágenes se encuentran dentro de una etiqueda dialog(id=modal)\r\nexports.modal = document.getElementById('modal');\r\n//cross para cerrar las imagenes\r\nexports.close = document.getElementById('close');\r\n//variable para crear los nodos del slider\r\nexports.$sliderContainer = document.querySelector(\".slider-container\");\r\n//se obtienen los nodos hijos de $sliderContainer\r\nexports.$childrenSliderContainer = document.getElementsByClassName(\"imagenes\");\r\n//variable para obtener el numero de la caja seleccionada\r\nexports.quantityImages = 0;\r\nvar quantityBoxes = 5;\r\n//se guardan los elementos de cada cuadrado dentro de un arreglo\r\nexports.arrayBoxes = [];\r\nfor (var i = 0; i < quantityBoxes; i++) {\r\n    exports.arrayBoxes[i] = document.getElementById(\"caja\" + (i + 1));\r\n}\r\n\n\n//# sourceURL=webpack://menu-flex/./src/main/variables/variables.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;