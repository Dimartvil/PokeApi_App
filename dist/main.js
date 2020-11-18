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

/***/ "./src/pages/Alola.js":
/*!****************************!*\
  !*** ./src/pages/Alola.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _utils_pokeURLList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/pokeURLList */ \"./src/utils/pokeURLList.js\");\n/* harmony import */ var _utils_pokeList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/pokeList */ \"./src/utils/pokeList.js\");\n;\n\nconst urlKanto = '?limit=81&offset=721';\n\nconst Alola = async () => {\n  const URLS = await (0,_utils_pokeURLList__WEBPACK_IMPORTED_MODULE_0__.default)(urlKanto);\n  console.log(URLS);\n  const PokeInfo = await (0,_utils_pokeList__WEBPACK_IMPORTED_MODULE_1__.default)(URLS);\n  PokeInfo[0].map(poke => console.log(poke.name));\n  console.log(PokeInfo[0][1].types);\n  const view = `\n    <div class=\"characters\">   \n        ${PokeInfo[0].map(poke => `\n            <article class=\"character-item ${poke.types[0].type.name}\">\n                <a href=\"#/${poke.name}\">\n                    <img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png\" alt=\"${poke.name}\">\n                    <h2>${poke.name}</h2> \n                </a>\n                <div class=\"types\">\n                ${poke.types.map(typo => `\n                    <span>${typo.type.name}</span>\n                `).join('')}\n                </div>\n            </article>   \n            `).join('')}\n\n    </div>\n    `;\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alola);\n\n//# sourceURL=webpack://pokeapi_app/./src/pages/Alola.js?");

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

/***/ "./src/pages/Galar.js":
/*!****************************!*\
  !*** ./src/pages/Galar.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _utils_pokeURLList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/pokeURLList */ \"./src/utils/pokeURLList.js\");\n/* harmony import */ var _utils_pokeList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/pokeList */ \"./src/utils/pokeList.js\");\n;\n\nconst urlKanto = '?limit=84&offset=809';\n\nconst Galar = async () => {\n  const URLS = await (0,_utils_pokeURLList__WEBPACK_IMPORTED_MODULE_0__.default)(urlKanto);\n  console.log(URLS);\n  const PokeInfo = await (0,_utils_pokeList__WEBPACK_IMPORTED_MODULE_1__.default)(URLS);\n  PokeInfo[0].map(poke => console.log(poke.name));\n  console.log(PokeInfo[0][1].types);\n  const view = `\n    <div class=\"characters\">   \n        ${PokeInfo[0].map(poke => `\n            <article class=\"character-item ${poke.types[0].type.name}\">\n                <a href=\"#/${poke.name}\">\n                    <img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png\" alt=\"${poke.name}\">\n                    <h2>${poke.name}</h2> \n                </a>\n                <div class=\"types\">\n                ${poke.types.map(typo => `\n                    <span>${typo.type.name}</span>\n                `).join('')}\n                </div>\n            </article>   \n            `).join('')}\n\n    </div>\n    `;\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Galar);\n\n//# sourceURL=webpack://pokeapi_app/./src/pages/Galar.js?");

/***/ }),

/***/ "./src/pages/Hoenn.js":
/*!****************************!*\
  !*** ./src/pages/Hoenn.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _utils_pokeURLList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/pokeURLList */ \"./src/utils/pokeURLList.js\");\n/* harmony import */ var _utils_pokeList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/pokeList */ \"./src/utils/pokeList.js\");\n;\n\nconst urlKanto = '?limit=135&offset=251';\n\nconst Hoenn = async () => {\n  const URLS = await (0,_utils_pokeURLList__WEBPACK_IMPORTED_MODULE_0__.default)(urlKanto);\n  console.log(URLS);\n  const PokeInfo = await (0,_utils_pokeList__WEBPACK_IMPORTED_MODULE_1__.default)(URLS);\n  PokeInfo[0].map(poke => console.log(poke.name));\n  console.log(PokeInfo[0][1].types);\n  const view = `\n    <div class=\"characters\">   \n        ${PokeInfo[0].map(poke => `\n            <article class=\"character-item ${poke.types[0].type.name}\">\n                <a href=\"#/${poke.name}\">\n                    <img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png\" alt=\"${poke.name}\">\n                    <h2>${poke.name}</h2> \n                </a>\n                <div class=\"types\">\n                ${poke.types.map(typo => `\n                    <span>${typo.type.name}</span>\n                `).join('')}\n                </div>\n            </article>   \n            `).join('')}\n\n    </div>\n    `;\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hoenn);\n\n//# sourceURL=webpack://pokeapi_app/./src/pages/Hoenn.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _utils_pokeURLList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/pokeURLList */ \"./src/utils/pokeURLList.js\");\n/* harmony import */ var _utils_pokeList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/pokeList */ \"./src/utils/pokeList.js\");\n;\n\n\nconst Home = async () => {\n  const URLS = await (0,_utils_pokeURLList__WEBPACK_IMPORTED_MODULE_0__.default)();\n  const PokeInfo = await (0,_utils_pokeList__WEBPACK_IMPORTED_MODULE_1__.default)(URLS);\n  const view = `\n    <div class=\"characters\">   \n        ${PokeInfo[0].map(poke => `\n            <article class=\"character-item ${poke.types[0].type.name}\">\n                <a href=\"#/${poke.name}\">\n                    <img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png\" alt=\"${poke.name}\">\n                    <h2>${poke.name}</h2> \n                </a>\n                <div class=\"types\">\n                ${poke.types.map(typo => `\n                    <span>${typo.type.name}</span>\n                `).join('')}\n                </div>\n            </article>   \n            `).join('')}\n\n    </div>\n    `;\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://pokeapi_app/./src/pages/Home.js?");

/***/ }),

/***/ "./src/pages/Johto.js":
/*!****************************!*\
  !*** ./src/pages/Johto.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _utils_pokeURLList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/pokeURLList */ \"./src/utils/pokeURLList.js\");\n/* harmony import */ var _utils_pokeList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/pokeList */ \"./src/utils/pokeList.js\");\n;\n\nconst urlKanto = '?limit=100&offset=151';\n\nconst Johto = async () => {\n  const URLS = await (0,_utils_pokeURLList__WEBPACK_IMPORTED_MODULE_0__.default)(urlKanto);\n  console.log(URLS);\n  const PokeInfo = await (0,_utils_pokeList__WEBPACK_IMPORTED_MODULE_1__.default)(URLS);\n  PokeInfo[0].map(poke => console.log(poke.name));\n  console.log(PokeInfo[0][1].types);\n  const view = `\n    <div class=\"characters\">   \n        ${PokeInfo[0].map(poke => `\n            <article class=\"character-item ${poke.types[0].type.name}\">\n                <a href=\"#/${poke.name}\">\n                    <img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png\" alt=\"${poke.name}\">\n                    <h2>${poke.name}</h2> \n                </a>\n                <div class=\"types\">\n                ${poke.types.map(typo => `\n                    <span>${typo.type.name}</span>\n                `).join('')}\n                </div>\n            </article>   \n            `).join('')}\n\n    </div>\n    `;\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Johto);\n\n//# sourceURL=webpack://pokeapi_app/./src/pages/Johto.js?");

/***/ }),

/***/ "./src/pages/Kalos.js":
/*!****************************!*\
  !*** ./src/pages/Kalos.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _utils_pokeURLList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/pokeURLList */ \"./src/utils/pokeURLList.js\");\n/* harmony import */ var _utils_pokeList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/pokeList */ \"./src/utils/pokeList.js\");\n;\n\nconst urlKanto = '?limit=72&offset=649';\n\nconst Kalos = async () => {\n  const URLS = await (0,_utils_pokeURLList__WEBPACK_IMPORTED_MODULE_0__.default)(urlKanto);\n  console.log(URLS);\n  const PokeInfo = await (0,_utils_pokeList__WEBPACK_IMPORTED_MODULE_1__.default)(URLS);\n  PokeInfo[0].map(poke => console.log(poke.name));\n  console.log(PokeInfo[0][1].types);\n  const view = `\n    <div class=\"characters\">   \n        ${PokeInfo[0].map(poke => `\n            <article class=\"character-item ${poke.types[0].type.name}\">\n                <a href=\"#/${poke.name}\">\n                    <img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png\" alt=\"${poke.name}\">\n                    <h2>${poke.name}</h2> \n                </a>\n                <div class=\"types\">\n                ${poke.types.map(typo => `\n                    <span>${typo.type.name}</span>\n                `).join('')}\n                </div>\n            </article>   \n            `).join('')}\n\n    </div>\n    `;\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Kalos);\n\n//# sourceURL=webpack://pokeapi_app/./src/pages/Kalos.js?");

/***/ }),

/***/ "./src/pages/Kanto.js":
/*!****************************!*\
  !*** ./src/pages/Kanto.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _utils_pokeURLList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/pokeURLList */ \"./src/utils/pokeURLList.js\");\n/* harmony import */ var _utils_pokeList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/pokeList */ \"./src/utils/pokeList.js\");\n;\n\nconst urlKanto = '?limit=151&offset=0';\n\nconst Kanto = async () => {\n  const URLS = await (0,_utils_pokeURLList__WEBPACK_IMPORTED_MODULE_0__.default)(urlKanto);\n  console.log(URLS);\n  const PokeInfo = await (0,_utils_pokeList__WEBPACK_IMPORTED_MODULE_1__.default)(URLS);\n  PokeInfo[0].map(poke => console.log(poke.name));\n  console.log(PokeInfo[0][1].types);\n  const view = `\n    <div class=\"characters\">   \n        ${PokeInfo[0].map(poke => `\n            <article class=\"character-item ${poke.types[0].type.name}\">\n                <a href=\"#/${poke.name}\">\n                    <img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png\" alt=\"${poke.name}\">\n                    <h2>${poke.name}</h2> \n                </a>\n                <div class=\"types\">\n                ${poke.types.map(typo => `\n                    <span>${typo.type.name}</span>\n                `).join('')}\n                </div>\n            </article>   \n            `).join('')}\n\n    </div>\n    `;\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Kanto);\n\n//# sourceURL=webpack://pokeapi_app/./src/pages/Kanto.js?");

/***/ }),

/***/ "./src/pages/Poke.js":
/*!***************************!*\
  !*** ./src/pages/Poke.js ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _utils_getHash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getHash */ \"./src/utils/getHash.js\");\n/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getData */ \"./src/utils/getData.js\");\n;\n\n\nconst Poke = async () => {\n  const poke = (0,_utils_getHash__WEBPACK_IMPORTED_MODULE_0__.default)();\n  const PokeInfo = await (0,_utils_getData__WEBPACK_IMPORTED_MODULE_1__.default)(poke);\n  console.log(PokeInfo);\n  const view = `\n    <div class=\"characters-self\">   \n            <article class=\"character-item-self\"> \n                    <img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${PokeInfo.id}.png\" alt=\"${PokeInfo.name}\">\n                    <h2>Pokemon #${PokeInfo.id}</h2> \n                    <h2>${PokeInfo.name}</h2> \n                <div class=\"types-self\">\n                     <h3>Types:</h3>\n                    ${PokeInfo.types.map(typo => `\n                      <span>${typo.type.name}</span>\n                      `).join('')}\n                </div>\n                <div class=\"pokemon-info\">\n                    <div class=\"abilities\">\n                    <h3>Abilities</h3>\n                        ${PokeInfo.abilities.map(abil => `\n                        <span class=\"hidden_${abil.is_hidden}\">${abil.ability.name} </span>\n                        `).join('')}\n                    </div>\n                        \n                </div>\n            </article>   \n    </div>\n    `;\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Poke);\n\n//# sourceURL=webpack://pokeapi_app/./src/pages/Poke.js?");

/***/ }),

/***/ "./src/pages/Sinnoh.js":
/*!*****************************!*\
  !*** ./src/pages/Sinnoh.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _utils_pokeURLList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/pokeURLList */ \"./src/utils/pokeURLList.js\");\n/* harmony import */ var _utils_pokeList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/pokeList */ \"./src/utils/pokeList.js\");\n;\n\nconst urlKanto = '?limit=107&offset=386';\n\nconst Sinnoh = async () => {\n  const URLS = await (0,_utils_pokeURLList__WEBPACK_IMPORTED_MODULE_0__.default)(urlKanto);\n  console.log(URLS);\n  const PokeInfo = await (0,_utils_pokeList__WEBPACK_IMPORTED_MODULE_1__.default)(URLS);\n  PokeInfo[0].map(poke => console.log(poke.name));\n  console.log(PokeInfo[0][1].types);\n  const view = `\n    <div class=\"characters\">   \n        ${PokeInfo[0].map(poke => `\n            <article class=\"character-item ${poke.types[0].type.name}\">\n                <a href=\"#/${poke.name}\">\n                    <img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png\" alt=\"${poke.name}\">\n                    <h2>${poke.name}</h2> \n                </a>\n                <div class=\"types\">\n                ${poke.types.map(typo => `\n                    <span>${typo.type.name}</span>\n                `).join('')}\n                </div>\n            </article>   \n            `).join('')}\n\n    </div>\n    `;\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sinnoh);\n\n//# sourceURL=webpack://pokeapi_app/./src/pages/Sinnoh.js?");

/***/ }),

/***/ "./src/pages/Unova.js":
/*!****************************!*\
  !*** ./src/pages/Unova.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _utils_pokeURLList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/pokeURLList */ \"./src/utils/pokeURLList.js\");\n/* harmony import */ var _utils_pokeList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/pokeList */ \"./src/utils/pokeList.js\");\n;\n\nconst urlKanto = '?limit=156&offset=493';\n\nconst Unova = async () => {\n  const URLS = await (0,_utils_pokeURLList__WEBPACK_IMPORTED_MODULE_0__.default)(urlKanto);\n  console.log(URLS);\n  const PokeInfo = await (0,_utils_pokeList__WEBPACK_IMPORTED_MODULE_1__.default)(URLS);\n  PokeInfo[0].map(poke => console.log(poke.name));\n  console.log(PokeInfo[0][1].types);\n  const view = `\n    <div class=\"characters\">   \n        ${PokeInfo[0].map(poke => `\n            <article class=\"character-item ${poke.types[0].type.name}\">\n                <a href=\"#/${poke.name}\">\n                    <img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png\" alt=\"${poke.name}\">\n                    <h2>${poke.name}</h2> \n                </a>\n                <div class=\"types\">\n                ${poke.types.map(typo => `\n                    <span>${typo.type.name}</span>\n                `).join('')}\n                </div>\n            </article>   \n            `).join('')}\n\n    </div>\n    `;\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Unova);\n\n//# sourceURL=webpack://pokeapi_app/./src/pages/Unova.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/Home */ \"./src/pages/Home.js\");\n/* harmony import */ var _templates_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/Header */ \"./src/templates/Header.js\");\n/* harmony import */ var _templates_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/Footer */ \"./src/templates/Footer.js\");\n/* harmony import */ var _pages_Poke__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Poke */ \"./src/pages/Poke.js\");\n/* harmony import */ var _pages_Error404__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Error404 */ \"./src/pages/Error404.js\");\n/* harmony import */ var _utils_getHash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getHash */ \"./src/utils/getHash.js\");\n/* harmony import */ var _utils_resolveRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/resolveRoutes */ \"./src/utils/resolveRoutes.js\");\n/* harmony import */ var _pages_Kanto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/Kanto */ \"./src/pages/Kanto.js\");\n/* harmony import */ var _pages_Johto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/Johto */ \"./src/pages/Johto.js\");\n/* harmony import */ var _pages_Hoenn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/Hoenn */ \"./src/pages/Hoenn.js\");\n/* harmony import */ var _pages_Sinnoh__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/Sinnoh */ \"./src/pages/Sinnoh.js\");\n/* harmony import */ var _pages_Unova__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/Unova */ \"./src/pages/Unova.js\");\n/* harmony import */ var _pages_Kalos__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/Kalos */ \"./src/pages/Kalos.js\");\n/* harmony import */ var _pages_Alola__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/Alola */ \"./src/pages/Alola.js\");\n/* harmony import */ var _pages_Galar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pages/Galar */ \"./src/pages/Galar.js\");\n/* harmony import */ var _utils_toggleMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/toggleMenu */ \"./src/utils/toggleMenu.js\");\n/* harmony import */ var _utils_addTypes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/addTypes */ \"./src/utils/addTypes.js\");\n;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst routes = {\n  '/': _pages_Home__WEBPACK_IMPORTED_MODULE_0__.default,\n  '/poke': _pages_Poke__WEBPACK_IMPORTED_MODULE_3__.default,\n  '/kanto': _pages_Kanto__WEBPACK_IMPORTED_MODULE_7__.default,\n  '/johto': _pages_Johto__WEBPACK_IMPORTED_MODULE_8__.default,\n  '/hoenn': _pages_Hoenn__WEBPACK_IMPORTED_MODULE_9__.default,\n  '/sinnoh': _pages_Sinnoh__WEBPACK_IMPORTED_MODULE_10__.default,\n  '/unova': _pages_Unova__WEBPACK_IMPORTED_MODULE_11__.default,\n  '/kalos': _pages_Kalos__WEBPACK_IMPORTED_MODULE_12__.default,\n  '/alola': _pages_Alola__WEBPACK_IMPORTED_MODULE_13__.default,\n  '/galar': _pages_Galar__WEBPACK_IMPORTED_MODULE_14__.default\n};\n\nconst router = async () => {\n  const header =  false || document.getElementById('header');\n  const content =  false || document.getElementById('content');\n  const footer =  false || document.getElementById('footer');\n  header.innerHTML = (0,_templates_Header__WEBPACK_IMPORTED_MODULE_1__.default)();\n  footer.innerHTML = (0,_templates_Footer__WEBPACK_IMPORTED_MODULE_2__.default)();\n  let hash = (0,_utils_getHash__WEBPACK_IMPORTED_MODULE_5__.default)();\n  console.log(hash);\n  let route = (0,_utils_resolveRoutes__WEBPACK_IMPORTED_MODULE_6__.default)(hash);\n  console.log(route);\n  let render = routes[route] ? routes[route] : _pages_Error404__WEBPACK_IMPORTED_MODULE_4__.default;\n  content.innerHTML = await render();\n  (0,_utils_toggleMenu__WEBPACK_IMPORTED_MODULE_15__.default)();\n  (0,_utils_addTypes__WEBPACK_IMPORTED_MODULE_16__.default)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://pokeapi_app/./src/routes/router.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst Header = () => {\n  const view = `\n    <nav>\n        <span class=\"menu-button\">Menu</span>\n        <ul class=\"menu\"> \n            <li><a href=\"/\">Home</a></li>\n            <li><a href=\"#/Kanto\">Kanto</a></li>\n            <li><a href=\"#/Johto\">Johto</a></li>\n            <li><a href=\"#/Hoenn\">Hoenn</a></li>\n            <li><a href=\"#/Sinnoh\">Sinnoh</a></li>\n            <li><a href=\"#/Unova\">Unova</a></li>\n            <li><a href=\"#/Kalos\">Kalos</a></li>\n            <li><a href=\"#/Alola\">Alola</a></li>\n            <li><a href=\"#/Galar\">Galar</a></li>\n        </ul>\n    </nav>\n    `;\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://pokeapi_app/./src/templates/Header.js?");

/***/ }),

/***/ "./src/utils/addTypes.js":
/*!*******************************!*\
  !*** ./src/utils/addTypes.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _utils_getHash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getHash */ \"./src/utils/getHash.js\");\n/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getData */ \"./src/utils/getData.js\");\n;\n\n\nconst addTypes = async () => {\n  const poke = (0,_utils_getHash__WEBPACK_IMPORTED_MODULE_0__.default)();\n  const PokeInfo = await (0,_utils_getData__WEBPACK_IMPORTED_MODULE_1__.default)(poke);\n  const $POKE = document.querySelector('.character-item-self');\n  $POKE.classList.add(`${PokeInfo.types[0].type.name}`);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTypes);\n\n//# sourceURL=webpack://pokeapi_app/./src/utils/addTypes.js?");

/***/ }),

/***/ "./src/utils/getData.js":
/*!******************************!*\
  !*** ./src/utils/getData.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst API = 'https://pokeapi.co/api/v2/pokemon/';\n\nconst getData = async poke => {\n  const URL = poke ? `${API}${poke}` : API;\n\n  try {\n    const response = await fetch(URL);\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.log('Fetch error', error);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://pokeapi_app/./src/utils/getData.js?");

/***/ }),

/***/ "./src/utils/getDataURL.js":
/*!*********************************!*\
  !*** ./src/utils/getDataURL.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst getDataURL = async URL => {\n  try {\n    const response = await fetch(URL);\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.log('Fetch error', error);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDataURL);\n\n//# sourceURL=webpack://pokeapi_app/./src/utils/getDataURL.js?");

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

/***/ "./src/utils/pokeList.js":
/*!*******************************!*\
  !*** ./src/utils/pokeList.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _getDataURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDataURL */ \"./src/utils/getDataURL.js\");\n;\n\nconst pokeList = async URLS => {\n  const pokeInfo = [];\n  const PROMISES = URLS.map(url => (0,_getDataURL__WEBPACK_IMPORTED_MODULE_0__.default)(url));\n  await Promise.all(PROMISES).then(result => pokeInfo.push(result));\n  return pokeInfo;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pokeList);\n\n//# sourceURL=webpack://pokeapi_app/./src/utils/pokeList.js?");

/***/ }),

/***/ "./src/utils/pokeURLList.js":
/*!**********************************!*\
  !*** ./src/utils/pokeURLList.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/utils/getData.js\");\n;\n\nconst pokeURLList = async url => {\n  const pokes = await (0,_getData__WEBPACK_IMPORTED_MODULE_0__.default)(url);\n  const pokesURLS = pokes.results.map(poke => poke.url);\n  return pokesURLS;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pokeURLList);\n\n//# sourceURL=webpack://pokeapi_app/./src/utils/pokeURLList.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst resolveRoutes = route => {\n  let validRoute;\n\n  switch (route) {\n    case '/':\n      validRoute = route;\n      break;\n\n    case 'contact':\n    case 'show':\n    case 'about':\n    case 'kanto':\n    case 'johto':\n    case 'hoenn':\n    case 'sinnoh':\n    case 'unova':\n    case 'kalos':\n    case 'alola':\n    case 'galar':\n      validRoute = `/${route}`;\n      break;\n\n    default:\n      validRoute = '/poke';\n  }\n\n  return validRoute;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveRoutes);\n\n//# sourceURL=webpack://pokeapi_app/./src/utils/resolveRoutes.js?");

/***/ }),

/***/ "./src/utils/toggleMenu.js":
/*!*********************************!*\
  !*** ./src/utils/toggleMenu.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst toggleMenu = () => {\n  const $MENUBUTTON = document.querySelector(\".menu-button\");\n  const $MENU = document.querySelector(\".menu\");\n  $MENUBUTTON.addEventListener('click', () => {\n    $MENU.classList.toggle('active');\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://pokeapi_app/./src/utils/toggleMenu.js?");

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