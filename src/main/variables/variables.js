"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cajas = exports.alturaNav = exports.cross = exports.menu = exports.icono = exports.saludo10 = exports.saludo4 = exports.saludo3 = exports.saludo2 = exports.saludo = void 0;
exports.saludo = "Hola";
exports.saludo2 = "Hola2";
exports.saludo3 = "Hola3";
exports.saludo4 = "Hola4";
exports.saludo10 = "Hola10";
/*-------------------------------------
                Variables
-------------------------------------*/
//controla el icono hamburger
exports.icono = document.getElementById("menu-movil");
//controla los items (HOME,CONTACT,ABOUT)
exports.menu = document.getElementById("menu");
//controla el cross al cerrar el menú
exports.cross = document.getElementById("cross");
//controlar la altura del nav
exports.alturaNav = document.getElementById("nav-container");
//cuando se abre el menú movil, se oculta el contenido
exports.cajas = document.getElementById("cajas");
