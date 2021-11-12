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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\r\\n    margin:0;\\r\\n    padding:0;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\n:root{\\r\\n    --background-color:rgb(54,54,54);\\r\\n    --header-color:#eeebeb;\\r\\n    --shiptext-color: #d4d4d4;\\r\\n    --board-bg:#2c2c2c;\\r\\n}\\r\\n\\r\\nbody{\\r\\n    background-color: var(--background-color);\\r\\n    \\r\\n}\\r\\nheader{\\r\\n    text-align: center;\\r\\n    font-size: 1.5rem;\\r\\n    color:var(--header-color);\\r\\n    padding:4rem;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    gap:1rem;\\r\\n}\\r\\n\\r\\n.img-cropper {\\r\\n    position: relative;\\r\\n    overflow: hidden;\\r\\n    border-radius: 50%;\\r\\n    width:50px;\\r\\n    height: 50px;\\r\\n    box-shadow:1px 1px 4px #000;\\r\\n    transition:transform 1s;\\r\\n}\\r\\n\\r\\n.img-cropper:hover{\\r\\n    cursor: pointer;\\r\\n    transform: rotate(1turn);\\r\\n}\\r\\n\\r\\n.pics {\\r\\n    \\r\\n    transform: translateY(-1px) translateX(-2px); \\r\\n    height:55px;  \\r\\n    background-color:#38dae6;\\r\\n    box-shadow: 1px 1px 4px #000;\\r\\n  }\\r\\n\\r\\nmain{\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    gap:8rem;\\r\\n}\\r\\n\\r\\n\\r\\nmain h1{\\r\\n    text-align: center;\\r\\n    color:var(--shiptext-color);\\r\\n    margin-bottom:1.5rem;\\r\\n    font-weight: 900;\\r\\n}\\r\\n\\r\\n.board{\\r\\n    background-color: var(--board-bg); \\r\\n    padding: 0px;  \\r\\n    width: 450px;\\r\\n    height: 450px;    \\r\\n    display:grid;\\r\\n    grid-template-rows: repeat(var(--gridRow),1fr);\\r\\n    grid-template-columns: repeat(var(--gridCol),1fr);\\r\\n    box-shadow:5px 15px 35px rgb(0 0 0 / 25%);\\r\\n}\\r\\n\\r\\n.board *{\\r\\n    \\r\\n    border:1px #1f1f1f solid;\\r\\n}\\r\\n\\r\\n.cleanShip{\\r\\n    background-color: #f5f5f5;\\r\\n}\\r\\n\\r\\n.missed{\\r\\n    background-color: #38dae6;\\r\\n}\\r\\n.fired{\\r\\n    background-color: #d41515;\\r\\n}\\r\\n.compcell{\\r\\n    transition: all 0.08s;\\r\\n}\\r\\n.compcell:hover{\\r\\n    cursor: pointer;\\r\\n    background-color: #f5f5f5;\\r\\n    transform: scale(1.05);\\r\\n}\\r\\n\\r\\n.modal {\\r\\n    display: block; /* Hidden by default */\\r\\n    position: fixed; /* Stay in place */\\r\\n    z-index: 1; /* Sit on top */\\r\\n    left: 0;\\r\\n    top: 0;\\r\\n    width: 100%; /* Full width */\\r\\n    height: 100%; /* Full height */\\r\\n    overflow: auto; /* Enable scroll if needed */\\r\\n    background-color: rgb(0,0,0); /* Fallback color */\\r\\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\\r\\n  }\\r\\n  \\r\\n  /* Modal Content/Box */\\r\\n  .modal-content {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n    padding:3rem;\\r\\n    background-color: var(--board-bg);\\r\\n    margin: 15% auto; /* 15% from the top and centered */\\r\\n    color:#f5f5f5;\\r\\n    border: 1px solid #888;\\r\\n    border-radius: 10px;\\r\\n    width: 50%; /* Could be more or less, depending on screen size */\\r\\n    height: calc(50% - 4rem);\\r\\n  }\\r\\n  .btn{\\r\\n      font-size: 2rem;\\r\\n      padding:0.5rem 1rem;\\r\\n      border:none;\\r\\n      background-color:#eeebeb;\\r\\n      border-radius:4px;\\r\\n      outline:none;\\r\\n  }\\r\\n  .btn:hover{\\r\\n      cursor: pointer;\\r\\n  }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/displayDom.js":
/*!***************************!*\
  !*** ./src/displayDom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayDom\": () => (/* binding */ displayDom)\n/* harmony export */ });\n/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ \"./src/shipFactory.js\");\n/* harmony import */ var _gameBoardFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoardFactory */ \"./src/gameBoardFactory.js\");\n/* harmony import */ var _github_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./github.png */ \"./src/github.png\");\n\r\n\r\n\r\n\r\nconst displayDom=function(playerDeck,compDeck,clickEvent){\r\n    const playerBoard=document.querySelector(\".player-board\");\r\n    const compBoard=document.querySelector(\".comp-board\");\r\n    const board=document.querySelector(\".board\");\r\n    const img=document.querySelector(\".pics\");\r\n    img.src=_github_png__WEBPACK_IMPORTED_MODULE_2__;\r\n    \r\n    playerBoard.innerHTML='';\r\n    compBoard.innerHTML='';\r\n    playerBoard.style.setProperty('--gridRow',10);\r\n    compBoard.style.setProperty('--gridRow',10);\r\n    compBoard.style.setProperty('--gridCol',10);\r\n    playerBoard.style.setProperty('--gridCol',10);\r\n    \r\n    //comp board\r\n    for(let i=0;i<10;i++){\r\n        for(let j=0;j<10;j++){\r\n            let newDiv=document.createElement(\"div\"); \r\n            newDiv.addEventListener('click',clickEvent);\r\n            newDiv.classList.add(\"compcell\");\r\n            newDiv.setAttribute(\"data-X\",i);\r\n            newDiv.setAttribute(\"data-Y\",j);            \r\n            compBoard.appendChild(newDiv);                                                \r\n            if(compDeck.getBoard()[i][j]==='x'){\r\n                newDiv.classList.add('clicked')\r\n            }\r\n            \r\n        }\r\n        \r\n             \r\n    }; \r\n    //player board\r\n    for(let i=0;i<10;i++){\r\n        for(let j=0;j<10;j++){\r\n            let newDiv=document.createElement(\"div\");             \r\n            newDiv.setAttribute(\"data-X\",i);\r\n            newDiv.setAttribute(\"data-Y\",j);\r\n            playerBoard.appendChild(newDiv);\r\n            if(playerDeck.getBoard()[i][j]==='0'){\r\n                newDiv.classList.add(\"cleanShip\");\r\n            }\r\n        };\r\n             \r\n    }; \r\n\r\n\r\n};\n\n//# sourceURL=webpack://battleship/./src/displayDom.js?");

/***/ }),

/***/ "./src/gameBoardFactory.js":
/*!*********************************!*\
  !*** ./src/gameBoardFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameBoard\": () => (/* binding */ gameBoard)\n/* harmony export */ });\n/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ \"./src/shipFactory.js\");\n\r\n\r\n\r\nconst gameBoard=(ships)=>{\r\n    let board=[];\r\n    for(let i=0;i<10;i++){\r\n        board[i]=[];\r\n        for(let j=0;j<10;j++){\r\n            board[i][j]='';\r\n        }\r\n    }\r\n    let missed=[];\r\n    let allSunk=false;\r\n    let alreadyHit=[];\r\n    \r\n    function placeHorizontal(ship){\r\n        let clean;\r\n        do{\r\n            clean=true;\r\n            let rnd=Math.floor(Math.random()*10);\r\n            let rnd2;\r\n            do{\r\n                rnd2=Math.floor(Math.random()*10);\r\n            }while(rnd2+ship.getLength()>9)\r\n            for(let i=rnd2;i<rnd2+ship.getLength();i++){\r\n                if(board[rnd][i]!=''){\r\n                    clean=false;\r\n                    break;\r\n                }\r\n            }\r\n            if(clean){\r\n                let shipArr=ship.getHitPoints();\r\n                let j=0;\r\n                for(let i=rnd2;i<rnd2+ship.getLength();i++){\r\n                    board[rnd][i]=shipArr[j];\r\n                    ship.setCord(rnd,i,j);\r\n                    j++;\r\n                }\r\n            }\r\n        }while(!clean)\r\n    };\r\n    function placeVertical(ship){\r\n        let clean;\r\n        do{\r\n            clean=true;\r\n            let rnd=Math.floor(Math.random()*10);\r\n            let rnd2;\r\n            do{\r\n                rnd2=Math.floor(Math.random()*10);\r\n            }while(rnd2+ship.getLength()>9)\r\n            for(let i=rnd2;i<rnd2+ship.getLength();i++){\r\n                if(board[i][rnd]!=''){\r\n                    clean=false;\r\n                    break;\r\n                }\r\n            }\r\n            if(clean){\r\n                let shipArr=ship.getHitPoints();\r\n                let j=0;\r\n                for(let i=rnd2;i<rnd2+ship.getLength();i++){\r\n                    board[i][rnd]=shipArr[j];\r\n                    ship.setCord(i,rnd,j);\r\n                    j++;\r\n                }\r\n            }\r\n        }while(!clean)\r\n    }\r\n    for(let i=0;i<ships.length;i++){\r\n        let rnd=Math.floor(Math.random()*2);\r\n        \r\n        if(rnd===1){\r\n            placeHorizontal(ships[i]);\r\n        }else{\r\n            placeVertical(ships[i]);\r\n        }\r\n\r\n    }\r\n\r\n    const receieveAttack=(x,y)=>{\r\n        \r\n        allSunk=true;\r\n        for(let i=0;i<ships.length;i++){\r\n            let ship=ships[i];\r\n            let hitPoints=ship.getHitPoints();\r\n            let coord=ship.getCord();\r\n            coord.map(arr=>{\r\n                if((arr[0]===x && arr[1]===y) && (hitPoints[arr[2]]==='0' ) ){\r\n                    board[x][y]='x';                                      \r\n                    alreadyHit.push([x,y]);\r\n                    ships[i].hit(arr[2]); \r\n                }else{\r\n                    if(missed.length===0){\r\n                        missed.push([x,y]);\r\n                    }else{\r\n                        let missEqual=true;\r\n                        missed.map(arr=>{\r\n                                if((arr[0]===x) && (arr[1]===y)){\r\n                                    missEqual=false;\r\n                                }\r\n                        });\r\n                        if(missEqual){\r\n                            missed.push([x,y]);\r\n                        }\r\n                    }\r\n                                   \r\n                }\r\n            });\r\n            \r\n            if(!ships[i].isSunk()){\r\n                allSunk=false;\r\n            }\r\n\r\n        };\r\n      \r\n\r\n\r\n    }\r\n    const getAlreadyHit=()=>alreadyHit;\r\n    const getAllSunk=()=>allSunk;\r\n    const getMissed=()=>missed;\r\n    const getBoard=()=>board;\r\n    const getShips=()=>ships;\r\n\r\n    return{getBoard,getMissed,receieveAttack,getAllSunk,getAlreadyHit,getShips};\r\n}\n\n//# sourceURL=webpack://battleship/./src/gameBoardFactory.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayDom */ \"./src/displayDom.js\");\n/* harmony import */ var _gameBoardFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoardFactory */ \"./src/gameBoardFactory.js\");\n/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipFactory */ \"./src/shipFactory.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _github_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./github.png */ \"./src/github.png\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst modal = document.querySelector(\".modal\");\r\nconst checkWinner = (winner, gamePlay) => {\r\n  const winnerText = document.querySelector(\".winner\");\r\n  const button = document.querySelector(\".btn\");\r\n  if (winner.length != 0) {\r\n    winnerText.textContent = `The Winner Is ${winner} !`;\r\n    modal.style.display = \"block\";\r\n  }\r\n  button.addEventListener(\"click\", gamePlay);\r\n};\r\nconst gamePlay = () => {\r\n  modal.style.display = \"none\";\r\n  let winner = \"\";\r\n  const playerShips = [\r\n    (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.makeShip)(5),\r\n    (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.makeShip)(4),\r\n    (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.makeShip)(3),\r\n    (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.makeShip)(2),\r\n    (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.makeShip)(1),\r\n  ];\r\n  const compShips = [\r\n    (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.makeShip)(5),\r\n    (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.makeShip)(4),\r\n    (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.makeShip)(3),\r\n    (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.makeShip)(2),\r\n    (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.makeShip)(1),\r\n  ];\r\n  const playerDeck = (0,_gameBoardFactory__WEBPACK_IMPORTED_MODULE_1__.gameBoard)(playerShips);\r\n  const compDeck = (0,_gameBoardFactory__WEBPACK_IMPORTED_MODULE_1__.gameBoard)(compShips);\r\n  const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_3__.player)();\r\n  const computer = (0,_player__WEBPACK_IMPORTED_MODULE_3__.player)();\r\n  computer.setTurn(false);\r\n  const compGuess = () => {\r\n    if (!playerDeck.getAllSunk() && computer.getTurn()) {\r\n      let [x, y] = computer.guessShip(playerDeck);\r\n\r\n      playerDeck.receieveAttack(x, y);\r\n\r\n      let div = document.querySelector(`[data-x=\"${x}\"][data-y=\"${y}\"]`);\r\n      if (playerDeck.getBoard()[x][y] === \"x\") {\r\n        div.classList.add(\"fired\");\r\n      } else if (playerDeck.getBoard()[x][y] === \"\") {\r\n        div.classList.add(\"missed\");\r\n      }\r\n      if (playerDeck.getAllSunk()) {\r\n        winner = \"The Computer\";\r\n        checkWinner(winner, gamePlay);\r\n      }\r\n      player1.setTurn(true);\r\n      computer.setTurn(false);\r\n    }\r\n  };\r\n  const clickAttack = (e) => {\r\n    if (!compDeck.getAllSunk() && player1.getTurn()) {\r\n      let x = +e.target.dataset.x;\r\n      let y = +e.target.dataset.y;\r\n      if (player1.playerClick(compDeck, x, y)) {\r\n        compDeck.receieveAttack(x, y);\r\n        if (compDeck.getBoard()[x][y] === \"x\") {\r\n          e.target.classList.add(\"fired\");\r\n        } else if (compDeck.getBoard()[x][y] === \"\") {\r\n          e.target.classList.add(\"missed\");\r\n        }\r\n        if (compDeck.getAllSunk()) {\r\n          winner = \"You\";\r\n          checkWinner(winner, gamePlay);         \r\n        }\r\n        player1.setTurn(false);\r\n        computer.setTurn(true);\r\n        compGuess();\r\n      }\r\n    }\r\n  };\r\n  if (winner) {\r\n    console.log(winner);\r\n  }\r\n\r\n  (0,_displayDom__WEBPACK_IMPORTED_MODULE_0__.displayDom)(playerDeck, compDeck, clickAttack);\r\n};\r\ngamePlay();\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"player\": () => (/* binding */ player)\n/* harmony export */ });\n\r\nconst player=()=>{\r\n    \r\n    let turn=true;\r\n    let rndX,rndY;\r\n    let lastHit=[];\r\n    let check=false;\r\n    \r\n    \r\n    const guessShip=(board)=>{        \r\n        let alreadyHit=board.getAlreadyHit();\r\n        let missed=board.getMissed();\r\n        let ok;\r\n        \r\n        if(lastHit.length!=0 && board.getBoard()[lastHit[0]][lastHit[1]]==='x'){\r\n            check=true;            \r\n            let rnd=Math.floor(Math.random()*4);\r\n            if(!rnd){\r\n                rndX=++lastHit[0];\r\n                rndY=lastHit[1];\r\n            }else if(rnd===1){\r\n                rndX=--lastHit[0];\r\n                rndY=lastHit[1];\r\n            }else if(rnd===2){\r\n                rndX=lastHit[0];\r\n                rndY=++lastHit[1];\r\n            }else{\r\n                rndX=lastHit[0];\r\n                rndY=--lastHit[1];\r\n            }\r\n        }\r\n        if(check){\r\n            if(rndX>9 || rndX<0 || rndY>9 || rndY<0){\r\n                check=false;\r\n            }\r\n        }\r\n            do {\r\n                ok = true;\r\n                if(!check){\r\n                    rndX = Math.floor(Math.random() * 9);\r\n                    rndY = Math.floor(Math.random() * 9);\r\n                }\r\n                \r\n                \r\n                alreadyHit.map((arr) => {\r\n                  if (arr[0] === rndX && arr[1] === rndY) {                    \r\n                    ok= false;\r\n                    check=false;\r\n                  }\r\n                });\r\n      \r\n                missed.map((arr) => {\r\n                  if (arr[0] === rndX && arr[1] === rndY) {                    \r\n                   ok= false;\r\n                   check=false;\r\n                  }\r\n                });\r\n               \r\n              } while (ok === false);\r\n       check=false;\r\n       lastHit=[rndX,rndY];       \r\n       \r\n       return [rndX,rndY];\r\n\r\n    }   \r\n\r\n    const playerClick=(board,x,y)=>{\r\n        let alreadyHit=board.getAlreadyHit();\r\n        let missed=board.getMissed();\r\n        let ok = true;       \r\n        alreadyHit.map((arr) => {\r\n          if ((arr[0] === x) && (arr[1] === y)) {\r\n           ok=false;\r\n          }\r\n        });\r\n        missed.map((arr) => {\r\n          if ((arr[0] === x) && (arr[1] === y)) {\r\n            ok= false;\r\n          }\r\n        });   \r\n        \r\n        return ok;\r\n         \r\n    }\r\n\r\n    const setTurn=value=>{\r\n        turn=value;\r\n    }\r\n    const getTurn=()=>turn;\r\n\r\n    return {setTurn,getTurn,guessShip,playerClick};\r\n}\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeShip\": () => (/* binding */ makeShip)\n/* harmony export */ });\nconst makeShip=(length)=>{\r\n\r\n    let hitPoints=[];\r\n    let coordinates=[];\r\n    for(let i=0;i<length;i++){\r\n        hitPoints[i]=\"0\";\r\n    }\r\n    const hit=(pos)=>{\r\n        if((pos<0 || pos>length-1) || (hitPoints[pos]==='x')){\r\n            throw new TypeError('Can\\'t hit this position');\r\n        }else{\r\n            hitPoints[pos]=\"x\";\r\n        }        \r\n        \r\n    }\r\n    const setCord=(x,y,j)=>{\r\n        coordinates.push([x,y,j]);\r\n    };\r\n    const getCord=()=>coordinates;\r\n    const getLength=()=>length;\r\n    const getHitPoints=()=>hitPoints;\r\n    const isSunk=()=>{\r\n        let sunk=true;\r\n        for(let i=0;i<length;i++){\r\n            if(hitPoints[i]!=\"x\"){\r\n                sunk=false;\r\n                break;\r\n            }\r\n        }\r\n        return sunk;\r\n    }\r\n    return {hit,isSunk,getHitPoints,getLength,setCord,getCord}\r\n}\n\n//# sourceURL=webpack://battleship/./src/shipFactory.js?");

/***/ }),

/***/ "./src/github.png":
/*!************************!*\
  !*** ./src/github.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"31ae5af2eb8f5a195706.png\";\n\n//# sourceURL=webpack://battleship/./src/github.png?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;