/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/menu.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/menu.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Oswald:wght@700&family=Roboto&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n    --primary-color: #684711;\r\n    --dark-font: #0c0c0f;\r\n    --white-font: #f5f5fa;\r\n}\r\n\r\nhtml {\r\n    scroll-behavior: smooth;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nnav {\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    background: var(--dark-font);\r\n    position: sticky;\r\n    top: 0;\r\n}\r\n\r\nnav ul {\r\n    display: flex;\r\n    list-style-type: none;\r\n    color: var(--white-font);\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10vw;\r\n}\r\n\r\nnav ul li#onlineOrder {\r\n    margin-left: auto;\r\n}\r\n\r\nnav ul li button {\r\n    padding: 10px 20px;\r\n    color: var(--white-font);\r\n    background-color: var(--primary-color);\r\n    border: none;\r\n    border-radius: 30px;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: clamp(8px, 7.5vw, 25px);\r\n    font-weight: 700;\r\n    width: fit-content;\r\n    transition: all 0.25s;\r\n}\r\n\r\nnav ul li button:hover {\r\n    background-color: var(--white-font);\r\n    color: var(--dark-font);\r\n    cursor: pointer;\r\n}\r\n\r\nnav ul li#logo img {\r\n    height: 80px;\r\n    border-radius: 50%;\r\n}\r\n\r\nnav ul li#logo {\r\n    margin-right: auto;\r\n}\r\n\r\nnav ul li a {\r\n    color: var(--white-font);\r\n    text-decoration: none;\r\n    font-family: 'Oswald', sans-serif;\r\n    font-size: clamp(8px, 7.5vw, 25px);\r\n    color: var(--white-font);\r\n    position: relative;\r\n}\r\n\r\nnav ul li:nth-child(n+2):nth-child(-n+4) a::after{\r\n    content: '';\r\n    position: absolute;\r\n    width: 100%;\r\n    transform: scaleX(0);\r\n    height: 4px;\r\n    bottom: -10px;\r\n    left: 0;\r\n    background-color: var(--primary-color);\r\n    transition: transform 0.2s ease-out;\r\n}\r\n\r\nnav ul li:nth-child(n+2):nth-child(-n+4) a:hover::after{\r\n    transform: scaleX(1);\r\n}\r\n\r\n.section:nth-child(odd) {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    grid-template-areas: \r\n    \"menu-img menu-card ....\";\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n#soups_salads .menu-img,\r\n#pizza .menu-img {\r\n    justify-self: end;\r\n}\r\n\r\n#appetizers .menu-img,\r\n#pasta .menu-img {\r\n    justify-self: start;\r\n}\r\n\r\n.section:nth-child(even) {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    grid-template-areas: \r\n    \".... menu-card menu-img\";\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n.section:not(:first-child) {\r\n    margin-top: 100px;\r\n}\r\n\r\n.menu-img {\r\n    grid-area: menu-img;\r\n}\r\n\r\n.menu-card {\r\n    grid-area: menu-card;\r\n}\r\n\r\n#blank {\r\n    grid-area: blank;\r\n}\r\n\r\n.menu-img {\r\n    width: fit-content;  \r\n    align-self: start;\r\n}\r\n\r\n.menu-img img {\r\n    width: 30vw;\r\n    height: auto;\r\n}\r\n\r\n.menu-card h1 {\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-family: 'Oswald', sans-serif;\r\n    font-size: 40px;\r\n}\r\n\r\n.menu-illus{\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 20px;\r\n}\r\n\r\n.menu-illus img {\r\n    width: 150px;\r\n}\r\n\r\n.food-card {\r\n    padding: 35px 0;\r\n    border-top: solid 2px var(--primary-color);\r\n\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    width: 100%;\r\n}\r\n\r\n.price {\r\n    margin-left: auto;\r\n    align-self: center;\r\n    font-family: 'Cormorant Garamond', sans-serif;\r\n    font-weight: 700; \r\n    font-size: 35px;\r\n}\r\n\r\n.food-card:last-child {\r\n    border-bottom: solid 2px var(--primary-color);\r\n}\r\n\r\n.food h2 {\r\n    font-family: 'Oswald', sans-serif;\r\n    font-size: 30px;\r\n}\r\n\r\n.food p {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 25px;\r\n    text-align: justify;\r\n}\r\n\r\n.pizza-card:last-child {\r\n    border-bottom: none;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://kaffycina-top/./src/css/menu.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/homepage.jpg */ \"./src/images/homepage.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Roboto&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n    --primary-color: #684711;\r\n    --dark-font: #0c0c0f;\r\n    --white-font: #f5f5fa;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    /* outline: solid 1px black; */\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat fixed center/cover;\r\n}\r\n\r\n#homepage-header {\r\n    padding-left: 1vw;\r\n    padding-right: 1vw;\r\n    padding-top: 10px;\r\n}\r\n\r\nnav {\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    background: var(--dark-font);\r\n    position: sticky;\r\n    top: 0;\r\n}\r\n\r\nnav ul {\r\n    display: flex;\r\n    list-style-type: none;\r\n    color: var(--white-font);\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10vw;\r\n}\r\n\r\nnav ul li#onlineOrder {\r\n    margin-left: auto;\r\n}\r\n\r\nnav ul li button {\r\n    padding: 10px 20px;\r\n    color: var(--white-font);\r\n    background-color: var(--primary-color);\r\n    border: none;\r\n    border-radius: 30px;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: clamp(8px, 7.5vw, 25px);\r\n    font-weight: 700;\r\n    width: fit-content;\r\n    transition: all 0.25s;\r\n}\r\n\r\nnav ul li button:hover {\r\n    background-color: var(--white-font);\r\n    color: var(--dark-font);\r\n    cursor: pointer;\r\n}\r\n\r\nnav ul li#logo img {\r\n    height: 80px;\r\n    border-radius: 50%;\r\n}\r\n\r\nnav ul li#logo {\r\n    margin-right: auto;\r\n}\r\n\r\nnav ul li a {\r\n    color: var(--white-font);\r\n    text-decoration: none;\r\n    font-family: 'Oswald', sans-serif;\r\n    font-size: clamp(8px, 7.5vw, 25px);\r\n    color: var(--white-font);\r\n    position: relative;\r\n}\r\n\r\nnav ul li:nth-child(n+2):nth-child(-n+4) a::after{\r\n    content: '';\r\n    position: absolute;\r\n    width: 100%;\r\n    transform: scaleX(0);\r\n    height: 4px;\r\n    bottom: -10px;\r\n    left: 0;\r\n    background-color: var(--primary-color);\r\n    transition: transform 0.2s ease-out;\r\n}\r\n\r\nnav ul li:nth-child(n+2):nth-child(-n+4) a:hover::after{\r\n    transform: scaleX(1);\r\n}\r\n\r\n.container-welcome {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 50vw;\r\n    margin-top: 10%;\r\n    position: relative;\r\n\r\n    /* From https://css.glass */\r\n    background: rgba(72, 68, 68, 0.19);\r\n    border-radius: 16px;\r\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\r\n    backdrop-filter: blur(7.3px);\r\n    -webkit-backdrop-filter: blur(7.3px);\r\n}\r\n\r\n.container-welcome h1 {\r\n    font-size: clamp(50px, 15vw, 180px);\r\n    font-family: 'Oswald', sans-serif;\r\n    color: var(--primary-color);\r\n    padding-left: 10px;\r\n    position: relative;\r\n    bottom: 20px;\r\n}\r\n\r\n.container-welcome .intro {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: clamp(8px, 7.5vw, 20px);\r\n    color: var(--white-font);\r\n    text-align: justify;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    position: relative;\r\n    bottom: 40px;\r\n}\r\n\r\nbutton#bookTable {\r\n    margin-top: 2vw;\r\n    padding: 15px 60px;\r\n    color: var(--white-font);\r\n    background-color: var(--primary-color);\r\n    border: none;\r\n    border-radius: 30px;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 30px;\r\n    font-weight: 700;\r\n    width: fit-content;\r\n    transition: all 0.25s;\r\n}\r\n\r\nbutton#bookTable:hover {\r\n    background-color: var(--white-font);\r\n    color: var(--dark-font);\r\n    cursor: pointer;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://kaffycina-top/./src/css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://kaffycina-top/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://kaffycina-top/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://kaffycina-top/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/menu.css":
/*!**************************!*\
  !*** ./src/css/menu.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/menu.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://kaffycina-top/./src/css/menu.css?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://kaffycina-top/./src/css/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://kaffycina-top/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://kaffycina-top/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://kaffycina-top/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://kaffycina-top/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://kaffycina-top/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://kaffycina-top/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appendToParent: () => (/* binding */ appendToParent),\n/* harmony export */   createElem: () => (/* binding */ createElem),\n/* harmony export */   generateHomepage: () => (/* binding */ generateHomepage)\n/* harmony export */ });\nconst createElem = (type, attributes ={}) => {\r\n    const elem = document.createElement(type);\r\n\r\n    for (const attr in attributes) {\r\n        if (attributes.hasOwnProperty(attr)) {\r\n            elem.setAttribute(attr, attributes[attr]);\r\n        }\r\n    }\r\n    return elem;\r\n};\r\n\r\nconst appendToParent = (parent, child) => {\r\n    parent.appendChild(child);\r\n}\r\n\r\nconst content = document.getElementById('content');\r\n\r\nconst homepage = () => {\r\n    const introcontent = \"Indulge in a symphony of flavors at our one-of-a-kind restaurant, where every bite is a delightful journey. At Kaffycina, we are passionate about crafting exquisite dishes that tantalize your taste buds and leave you craving for more. Whether you're a fan of Pasta, Chicken, Salad, or Desserts, we have something special waiting just for you.\";\r\n    const resName = \"KAFFYCINA\";\r\n\r\n    const home = createElem('div', {\r\n        id: \"home-container\"\r\n    })\r\n\r\n    const header = createElem('div', {\r\n        id: 'homepage-header'\r\n    });\r\n\r\n    const welcome = createElem('div', {\r\n        class: 'container-welcome'\r\n    });\r\n\r\n    const title = createElem('h1', {});\r\n    title.textContent = resName;\r\n\r\n    const intro = createElem('p', {\r\n        class: 'intro'\r\n    });\r\n    intro.textContent = introcontent;\r\n\r\n    const bookBtn = createElem('button', {\r\n        id: 'bookTable'\r\n    });\r\n    bookBtn.textContent = 'Book A Table';\r\n\r\n    appendToParent(welcome, title);\r\n    appendToParent(welcome, intro);\r\n\r\n    appendToParent(header, welcome)\r\n    appendToParent(header, bookBtn)\r\n\r\n    appendToParent(home, header)\r\n\r\n    appendToParent(content, home)\r\n}\r\n\r\nconst generateHomepage = () => {\r\n    content.textContent = \"\";\r\n    homepage();\r\n}\n\n//# sourceURL=webpack://kaffycina-top/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _css_menu_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/menu.css */ \"./src/css/menu.css\");\n/* harmony import */ var _images_homepage_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/homepage.jpg */ \"./src/images/homepage.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst home = document.getElementById(\"home\");\r\nconst menu =  document.getElementById(\"menu\");\r\nconst body = document.body;\r\nconst backgroundSrc = _images_homepage_jpg__WEBPACK_IMPORTED_MODULE_4__;\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", _home_js__WEBPACK_IMPORTED_MODULE_0__.generateHomepage);\r\n\r\nhome.addEventListener(\"click\", () => {\r\n    body.style.background = `url(${backgroundSrc}) no-repeat fixed center/cover`;\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.generateHomepage)();\r\n})\r\n\r\nmenu.addEventListener(\"click\", () => {\r\n    body.style.background = \"none\";\r\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.generateMenu)();\r\n});\n\n//# sourceURL=webpack://kaffycina-top/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateMenu: () => (/* binding */ generateMenu)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\r\n\r\nconst sections = [\r\n    {\r\n        id: \"appetizers\",\r\n        name: \"Appetizers\",\r\n        sideImg: \"../src/images/bruschetta.jpg\",\r\n        headingImg: \"../src/images/breads.png\",\r\n        items: [\r\n            {\r\n                class: \"appe-card\",\r\n                name: \"Bruschetta\",\r\n                desc: \"Toasted garlic with diced tomatoes, balsamic vinegar, basil and cheese.\",\r\n                price: \"$8.25\"\r\n            },\r\n            {\r\n                class: \"appe-card\",\r\n                name: \"Fried Mozarella\",\r\n                desc: \"Homemade fried cheese served with marinara sauce.\",\r\n                price: \"$8.00\"\r\n            },\r\n            {\r\n                class: \"appe-card\",\r\n                name: \"Antipasto Originale\",\r\n                desc: \"Original Italian cuts, salami, prosciutto, ham, fresh mozzarella, tomatoes, artichokes and garlic oil eggplant.\",\r\n                price: \"$17.25\"\r\n            },\r\n            {\r\n                class: \"appe-card\",\r\n                name: \"Shrimp Scampi\",\r\n                desc: \"Small shrimp sauteed with garlic white wine and heavy cream served over toasted bread.\",\r\n                price: \"$10.50\"\r\n            },\r\n            {\r\n                class: \"appe-card\",\r\n                name: \"Melanzane Caprese\",\r\n                desc: \"Fried eggplant with mozzarella, tomato and basil, lightly baked in the oven.\",\r\n                price: \"$10.50\"\r\n            }\r\n        ],\r\n    },\r\n    {\r\n        id: \"soups_salads\",\r\n        name: \"Appetizers\",\r\n        sideImg: \"../src/images/sousa.jpg\",\r\n        headingImg: \"../src/images/salad.png\",\r\n        items: [\r\n            {\r\n                class: \"sousa-card\",\r\n                name: \"Tuscany\",\r\n                desc: \"Baby spinach, dried cranberries, almonds & blue cheese crumbs in a citrus vinegar dressing.\",\r\n                price: \"$9.45\"\r\n            },\r\n            {\r\n                class: \"sousa-card\",\r\n                name: \"Soup of the Day\",\r\n                desc: \"Homemade soup. Ask your server.\",\r\n                price: \"$6.99\"\r\n            },\r\n            {\r\n                class: \"sousa-card\",\r\n                name: \"Caprese\",\r\n                desc: \"Sliced fresh mozzarella, fresh tomatoes with basil and balsamic vinaigrette.\",\r\n                price: \"$10.50\"\r\n            },\r\n            {\r\n                class: \"sousa-card\",\r\n                name: \"Cesare\",\r\n                desc: \"Romaine, croutons, parmesan cheese, ceasar dressing.\",\r\n                price: \"$8.45\"\r\n            },\r\n            {\r\n                class: \"sousa-card\",\r\n                name: \"Della Casa\",\r\n                desc: \"Mix greens, onions, tomatoes, cucumbers, Kalamata olives and white beans.\",\r\n                price: \"$8.99\"\r\n            }\r\n        ],\r\n    },\r\n    {\r\n        id: \"pasta\",\r\n        name: \"Pasta\",\r\n        sideImg: \"../src/images/pasta.jpg\",\r\n        headingImg: \"../src/images/spaghetti.png\",\r\n        items: [\r\n            {\r\n                class: \"pasta-card\",\r\n                name: \"Bolognese\",\r\n                desc: \"Homemade meat sauce.\",\r\n                price: \"$14.25\"\r\n            },\r\n            {\r\n                class: \"pasta-card\",\r\n                name: \"Carbonara\",\r\n                desc: \"Creamy sauce with onions, pancetta and egg yolk.\",\r\n                price: \"$14.50\"\r\n            },\r\n            {\r\n                class: \"pasta-card\",\r\n                name: \"Patriota\",\r\n                desc: \"Tomatoes, basil, garlic and fresh mozzarella in white wine sauce.\",\r\n                price: \"$15.25\"\r\n            },\r\n            {\r\n                class: \"pasta-card\",\r\n                name: \"Aglio E Olio\",\r\n                desc: \"Garlic oil & crushed red pepper in a white wine sauce.\",\r\n                price: \"$12.25\"\r\n            },\r\n            {\r\n                class: \"pasta-card\",\r\n                name: \"Fra Diavolo\",\r\n                desc: \"Choice of pasta with garlic spicy plum tomato sauce.\",\r\n                price: \"$15.25\"\r\n            },\r\n        ],\r\n    },\r\n    {\r\n        id: \"pizza\",\r\n        name: \"Pizza\",\r\n        sideImg: \"../src/images/pizza.jpg\",\r\n        headingImg: \"../src/images/pizza.png\",\r\n        items: [\r\n            {\r\n                class: \"pizza-card\",\r\n                name: \"Pepperoni  & Basil\",\r\n                desc: \"Ezzo's pepperoni, burrata, basil, red sauce.\",\r\n                price: \"$17.25\"\r\n            },\r\n            {\r\n                class: \"pizza-card\",\r\n                name: \"Sausage\",\r\n                desc: \"Sausage, giardiniera, mozzarella basil, red sauce.\",\r\n                price: \"$15.50\"\r\n            },\r\n            {\r\n                class: \"pizza-card\",\r\n                name: \"Miso Mushroom\",\r\n                desc: \"Shiitake mushrooms, black garlic, miso, onions, green onions, mozzarella.\",\r\n                price: \"$15.25\"\r\n            },\r\n            {\r\n                class: \"pizza-card\",\r\n                name: \"Cheese\",\r\n                desc: \"Classic cheese pizza with burrata, parmesan, basil, red sauce (vegetarian).\",\r\n                price: \"$12.25\"\r\n            },\r\n            {\r\n                class: \"pizza-card\",\r\n                name: \"Fig & Pig\",\r\n                desc: \"Caramelized onions, figs, confit pork, good balsamic.\",\r\n                price: \"$15.25\"\r\n            }\r\n        ]\r\n    }\r\n];\r\n\r\nconst generateFoodCards = (foodArray) => {\r\n    const foodCards = [];\r\n\r\n    for (const food of foodArray) {\r\n        const foodCardElem = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createElem)('div', {\r\n            class: `food-card ${food.class}`\r\n        });\r\n\r\n        const foodElem = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createElem)('div', {\r\n            class: \"food\"\r\n        });\r\n\r\n        const nameElem = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createElem)('h2', {\r\n            class: \"name\"\r\n        });\r\n        nameElem.textContent = food.name;\r\n\r\n        const descElem = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createElem)('p', {\r\n            class: \"desc\"\r\n        });\r\n        descElem.textContent = food.desc;\r\n\r\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.appendToParent)(foodElem, nameElem);\r\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.appendToParent)(foodElem, descElem);\r\n\r\n        const priceElem = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createElem)('p', {\r\n            class: \"price\"\r\n        });\r\n\r\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.appendToParent)(foodCardElem, foodElem);\r\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.appendToParent)(foodCardElem, priceElem);\r\n\r\n        foodCards.push(foodCardElem);\r\n    }\r\n\r\n    return foodCards;\r\n};\r\n\r\nconst content = document.getElementById(\"content\");\r\nconst menu = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createElem)('div', {\r\n    id: \"menu-container\"\r\n});\r\n\r\nsections.forEach((section) => {\r\n    const sectionElem = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createElem)('div', {\r\n        id:section.id,\r\n        class: \"section\"\r\n    });\r\n\r\n    const menuSideImgDiv = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createElem)('div', {\r\n        id: `${section.id}-img`,\r\n        class: \"menu-img\"\r\n    });\r\n\r\n    const menuSideImg = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createElem)('img', {\r\n        src: section.sideImg,\r\n        alt: section.name,\r\n        loading: \"lazy\"\r\n    });\r\n\r\n    const menuCard = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createElem)('div', {\r\n        id: `${section.id}-menu`,\r\n        class: \"menu-card\"\r\n    });\r\n\r\n    const menuHeading = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createElem)('div', {\r\n        id: `${section.id}-heading`\r\n    });\r\n\r\n    const menuIllus = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createElem)('div', {\r\n        class: \"menu-illus\"\r\n    });\r\n\r\n    const menuImg = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createElem)('div', {\r\n        src: section.headingImg,\r\n        alt: `${section.name} Illustration`,\r\n        loading: \"lazy\"\r\n    });\r\n\r\n    const menuH1 = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createElem)('h1', {});\r\n    menuH1.textContent = section.name;\r\n\r\n    const foodArray = generateFoodCards(section.items);\r\n\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.appendToParent)(menuIllus, menuImg);\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.appendToParent)(menuHeading, menuIllus);\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.appendToParent)(menuHeading, menuH1);\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.appendToParent)(menuCard, menuHeading);\r\n\r\n    foodArray.forEach((food) => {\r\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.appendToParent)(menuCard, food);\r\n    });\r\n\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.appendToParent)(menuSideImgDiv, menuSideImg);\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.appendToParent)(sectionElem, menuSideImgDiv);\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.appendToParent)(sectionElem, menuCard);\r\n\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.appendToParent)(menu, sectionElem)\r\n})\r\n\r\nconst generateMenu = () => {\r\n    content.textContent = \"\";\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.appendToParent)(content, menu);\r\n}\n\n//# sourceURL=webpack://kaffycina-top/./src/menu.js?");

/***/ }),

/***/ "./src/images/homepage.jpg":
/*!*********************************!*\
  !*** ./src/images/homepage.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1da20d3c77e6ff82310b.jpg\";\n\n//# sourceURL=webpack://kaffycina-top/./src/images/homepage.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;