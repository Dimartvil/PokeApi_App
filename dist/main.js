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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routes_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/router */ \"./src/routes/router.js\");\n;\nwindow.addEventListener('load', _routes_router__WEBPACK_IMPORTED_MODULE_0__.default);\nwindow.addEventListener('hashchange', _routes_router__WEBPACK_IMPORTED_MODULE_0__.default);\n\n//# sourceURL=webpack://pokeapi_app/./src/index.js?");

/***/ }),

/***/ "./src/pages/Error404.js":
/*!*******************************!*\
  !*** ./src/pages/Error404.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst Error404 = () => {\n  const view = `\n    <div class=\"Error404\">\n        <h1>Error 404</h1>\n        <span>Not Found</span>\n    </div>\n    `;\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error404);\n\n//# sourceURL=webpack://pokeapi_app/./src/pages/Error404.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst Home = () => {\n  const view = `\n    <div class=\"characters\">\n        <article class=\"character-item\">\n            <a href=\"#/id\">\n                <img src=\"\" alt=\"pokemon-name\">\n                <h2>pokemon-name</h2>\n                <span>pokemon-type 1</span>\n                <span>pokemon-type 2</span>\n            </a>\n        </article>\n    </div>\n    `;\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://pokeapi_app/./src/pages/Home.js?");

/***/ }),

/***/ "./src/routes/router.js":
/*!******************************!*\
  !*** ./src/routes/router.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/Home */ \"./src/pages/Home.js\");\n/* harmony import */ var _templates_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/Header */ \"./src/templates/Header.js\");\n/* harmony import */ var _templates_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/Footer */ \"./src/templates/Footer.js\");\n/* harmony import */ var _pages_Error404__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Error404 */ \"./src/pages/Error404.js\");\n/* harmony import */ var _utils_getHash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getHash */ \"./src/utils/getHash.js\");\n/* harmony import */ var _utils_resolveRoutes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/resolveRoutes */ \"./src/utils/resolveRoutes.js\");\n;\n\n\n\n\n\nconst routes = {\n  '/': _pages_Home__WEBPACK_IMPORTED_MODULE_0__.default\n};\n\nconst router = () => {\n  const header =  false || document.getElementById('header');\n  const content =  false || document.getElementById('content');\n  const footer =  false || document.getElementById('footer');\n  header.innerHTML = (0,_templates_Header__WEBPACK_IMPORTED_MODULE_1__.default)();\n  footer.innerHTML = (0,_templates_Footer__WEBPACK_IMPORTED_MODULE_2__.default)();\n  let hash = (0,_utils_getHash__WEBPACK_IMPORTED_MODULE_4__.default)();\n  let route = (0,_utils_resolveRoutes__WEBPACK_IMPORTED_MODULE_5__.default)(hash);\n  console.log(route);\n  debugger;\n  let render = routes[route] ? routes[route] : _pages_Error404__WEBPACK_IMPORTED_MODULE_3__.default;\n  debugger;\n  content.innerHTML = render();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://pokeapi_app/./src/routes/router.js?");

/***/ }),

/***/ "./src/templates/Footer.js":
/*!*********************************!*\
  !*** ./src/templates/Footer.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _utils_resolveRoutes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/resolveRoutes */ \"./src/utils/resolveRoutes.js\");\n;\n\nconst Footer = () => {\n  const view = `\n    <ul>\n        <li><a href=\"mailto:dimartvil@hotmail.com\" type=\"email\">dimartvil@hotmail.com</a></li>\n        <li>Developed by <strong>dimartvil</strong></li>\n    </ul>\n    `;\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\n//# sourceURL=webpack://pokeapi_app/./src/templates/Footer.js?");

/***/ }),

/***/ "./src/templates/Header.js":
/*!*********************************!*\
  !*** ./src/templates/Header.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst Header = () => {\n  const view = `\n    <nav>\n        <ul>\n            <li><a href=\"/\">Home</a></li>\n            <li> <a href=\"#/Show\"> Show</a>\n                <ul class=\"options\">\n                    <li><a href=\"\">All</a></li>\n                    <li><a href=\"\">Kanto</a></li>\n                    <li><a href=\"\">Johto</a></li>\n                    <li><a href=\"\">Hoen</a></li>\n                    <li><a href=\"\">Sinoh</a></li>\n                    <li><a href=\"\">Unova</a></li>\n                    <li><a href=\"\">Kalos</a></li>\n                    <li><a href=\"\">Alola</a></li>\n                    <li><a href=\"\">Galar</a></li>\n                </ul>\n            </li>\n            <li><a href=\"#/Contact\">Contact</a></li>\n            <li><a href=\"#/About\">About</a></li>\n        </ul>\n    </nav>\n    `;\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://pokeapi_app/./src/templates/Header.js?");

/***/ }),

/***/ "./src/utils/getHash.js":
/*!******************************!*\
  !*** ./src/utils/getHash.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getHash);\n\n//# sourceURL=webpack://pokeapi_app/./src/utils/getHash.js?");

/***/ }),

/***/ "./src/utils/resolveRoutes.js":
/*!************************************!*\
  !*** ./src/utils/resolveRoutes.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst resolveRoutes = route => {\n  let validRoute;\n\n  switch (route) {\n    case '/':\n      validRoute = route;\n      break;\n\n    case 'contact':\n    case 'about':\n      validRoute = `/${route}`;\n      break;\n\n    default:\n      validRoute = '/poke';\n  }\n\n  return validRoute;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveRoutes);\n\n//# sourceURL=webpack://pokeapi_app/./src/utils/resolveRoutes.js?");

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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;