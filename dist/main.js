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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::after,\\n*::before {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\n:root {\\n  --bg-color: rgb(40, 50, 80);\\n  --dark: hsl(229, 25%, 31%);\\n  --score: hsl(229, 64%, 46%);\\n  --outline: hsl(217, 16%, 45%);\\n}\\n\\nbody {\\n  background-color: var(--bg-color);\\n  font-family: \\\"Barlow Semi Condensed\\\", sans-serif;\\n  font-weight: 600;\\n  color: #fff;\\n  height: 98vh;\\n  position: relative;\\n  max-height: 92vh;\\n  display: grid;\\n  grid-template-rows: 0.5fr 1fr 0.5fr;\\n  place-items: center;\\n  overflow: hidden;\\n}\\n\\nheader {\\n  padding: 1em;\\n  margin: 1em;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  border: 0.2em solid var(--outline);\\n  border-radius: 10px;\\n  width: 80%;\\n}\\nheader > * {\\n  min-height: 2em;\\n  min-width: 2em;\\n}\\n\\nheader > div {\\n  font-size: 1.2em;\\n  height: 100%;\\n  padding: 1em 1.75em;\\n  background: #fff;\\n  color: var(--score);\\n  text-align: center;\\n  border-radius: 15px;\\n}\\n\\nheader > div > span {\\n  font-size: 2.5em;\\n  color: var(--dark);\\n}\\n\\nmain {\\n  position: relative;\\n  width: 400px;\\n  height: 55vh;\\n}\\n\\n#tg {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  z-index: -999;\\n}\\n\\nmain > div > img[alt=\\\"icons\\\"] {\\n  position: absolute;\\n  padding: 0.5em;\\n  cursor: pointer;\\n}\\n\\n.paper > img,\\nmain > div.paper::before {\\n  top: 12%;\\n  left: 15%;\\n}\\n\\n.scissors > img,\\nmain > div.scissors::before {\\n  top: 12%;\\n  left: 68%;\\n}\\n\\n.rock > img,\\nmain > div.rock::before {\\n  top: 70%;\\n  left: 42%;\\n}\\n\\nmain > div::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  height: 100px;\\n  width: 100px;\\n  border-radius: 50%;\\n  background-color: #fff;\\n  transform: translate(-15%, -15%);\\n}\\n\\ndiv.paper::before {\\n  box-shadow: inset 0px 5px 0 var(--outline), 0 0 0 1em #4865f4,\\n    0 3px 0 1em #2946d3;\\n}\\ndiv.rock::before {\\n  box-shadow: inset 0px 5px 0 var(--outline), 0 0 0 1em #dc2e4e,\\n    0 3px 0 1em #9f1c34;\\n}\\ndiv.scissors::before {\\n  box-shadow: inset 0px 5px 0 var(--outline), 0 0 0 1em #ec9e0e,\\n    0 3px 0 1em #b87d0e;\\n}\\n\\nsection {\\n  padding: 1em;\\n  margin: 1em;\\n  width: 80%;\\n  display: flex;\\n  justify-content: center;\\n}\\n\\nbutton {\\n  margin-bottom: 0.5em;\\n  padding: 0.5em 1.5em;\\n  border-radius: 15px;\\n  background: none;\\n  color: #fff;\\n  font-size: 1.5em;\\n  font-weight: 600;\\n  letter-spacing: 2px;\\n}\\n\\nsection.modal {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  display: flex;\\n  flex-direction: column;\\n  background: #fff;\\n  padding: 2em;\\n  border-radius: 15px;\\n  box-shadow: 0 0 8em 0.5em #000;\\n  transition: opacity 250ms ease-out;\\n  margin: 0;\\n}\\n\\n.hide {\\n  opacity: 0;\\n  pointer-events: none;\\n}\\n\\n.d-none {\\n  display: none !important;\\n}\\n\\nsection.modal > h1 {\\n  color: var(--bg-color);\\n}\\n\\nsection.modal > img:first-of-type {\\n  position: absolute;\\n  top: 5%;\\n  right: 5%;\\n  cursor: pointer;\\n}\\n\\nsection.modal > img:last-of-type {\\n  margin-top: 1.5em;\\n  pointer-events: none;\\n}\\n\\nsection.modal > img:first-of-type:hover {\\n  filter: brightness(0);\\n}\\nmain.play {\\n  display: flex;\\n  height: 55vh;\\n  justify-content: space-around;\\n  align-items: center;\\n}\\nmain.play > div {\\n  position: relative;\\n  margin: 0 0.5em;\\n}\\nmain.play > div > img {\\n  position: relative;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n}\\nmain.play > div::before {\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n}\\n\\nmain.play > div::after {\\n  height: 30vh;\\n  position: absolute;\\n  top: -100%;\\n  left: -100%;\\n  width: 8em;\\n  z-index: -800;\\n  font-size: 1.5em;\\n  text-align: center;\\n}\\n\\nmain.play > div:first-of-type::after {\\n  content: \\\"YOU PICKED\\\";\\n}\\nmain.play > div:last-of-type::after {\\n  content: \\\"THE HOUSE PICKED\\\";\\n}\\nmain.play > div > img{\\n  position: relative;\\n}\\nmain.play > aside.status {\\n  position: absolute;\\n  bottom: 0;\\n}\\nmain.play > aside.status> p{\\n  font-size: 3em;\\n  letter-spacing: 2px;\\n  text-align: center;\\n  margin-top: 0.5em;\\n}\\nmain.play > aside.status> button{\\n  font-size: 1.25em;\\n  background-color: #fff;\\n  color: var(--bg-color);\\n}\\n\\nsection {\\n  /* margin-top: 2.5rem; */\\n}\\n\\nsection>button{\\n  /* transform: translateY(100%); */\\n}\\nsection.modal > *:focus {\\n  text-decoration: none;\\n}\\n@media (min-width: 900px) {\\n  section {\\n    justify-content: flex-end;\\n  }\\n  section > button {\\n    margin-right: 0.2em;\\n  }\\n  section.modal {\\n    height: fit-content;\\n    width: 30%;\\n  }\\n  main.play {\\n    margin-top: 5em;\\n    width: 60%;\\n  }\\n  main.play > * {\\n    transform: scale(1.5);\\n  }\\n  section{\\n    margin-top: 1.5em;\\n  }\\n}\\n\\n@media (min-width: 450px) and (max-width: 900px){\\n  section.modal{\\n    height: 21.875em;\\n    width: 23.125em;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://rock-paper-scissors/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://rock-paper-scissors/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://rock-paper-scissors/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://rock-paper-scissors/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"spr\": () => (/* binding */ spr),\n/* harmony export */   \"src\": () => (/* binding */ src),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar spr = [\"scissors\", \"paper\", \"rock\"];\nvar src = spr.map(function (el) { return \"../src/images/icon-\" + el + \".svg\"; });\nvar Game = /** @class */ (function () {\n    function Game(playerName) {\n        var _a;\n        this.playerScore = 0;\n        this.computerScore = 0;\n        this.round = 0;\n        this.isPlayerTurn = false;\n        this.playerName = (_a = playerName === null || playerName === void 0 ? void 0 : playerName.toUpperCase()) !== null && _a !== void 0 ? _a : \"PLAYER\";\n        this.player = [];\n        this.computer = [];\n    }\n    Game.prototype.reset = function () {\n        this.player = [];\n        this.computer = [];\n    };\n    Game.prototype.getChoice = function (choice) {\n        return spr[choice];\n    };\n    Game.prototype.getRoundWinner = function () {\n        var computer = this.computer[this.round - 1];\n        var player = this.player[this.round - 1];\n        // console.log(computer, player);\n        var winner = '';\n        if (computer === 2 && player === 0) {\n            winner = \"LOSE\";\n        }\n        else if (player === 2 && computer === 0) {\n            this.playerScore++;\n            winner = \"WIN\";\n        }\n        else {\n            if (computer > player)\n                this.playerScore++;\n            winner = computer < player ? \"LOSE\" : computer === player ? 'TIE' : \"WIN\";\n        }\n        console.log(winner);\n        return winner;\n    };\n    Game.prototype.playerPlay = function (num) {\n        this.player.push(num);\n        console.log(this.player);\n        this.round++;\n    };\n    Game.prototype.computerPlay = function () {\n        this.computer.push(Math.floor(Math.random() * 3));\n        return this.computer[this.computer.length - 1];\n    };\n    Game.prototype.getPlayerScore = function () {\n        return this.playerScore;\n    };\n    return Game;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack://rock-paper-scissors/./src/Game.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\n\n\n//Game Helper Functions\n// const name = prompt('Enter Name');\nvar game = new _Game__WEBPACK_IMPORTED_MODULE_1__.default(undefined);\n//DOM Elements\nvar modal_close = document.querySelector(\"section.modal>img:first-of-type\");\nvar rules = document.querySelector(\"section>button\");\nvar icons = document.querySelectorAll(\"main.landing>div\");\nvar playScreen = document.querySelector(\"main.play\");\nvar playerTab = playScreen.querySelector(\"div:first-of-type\");\nvar compTab = playScreen.querySelector(\"div:last-of-type\");\nvar scoreBoard = document.querySelector(\"header > div > span\");\nvar playAgain = document.querySelector(\"main.play>aside>button\");\nvar rulesTab = modal_close.parentElement;\nvar pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;\n//Modal Drag Function\nfunction displace(e) {\n    e.preventDefault();\n    pos1 = pos3 - e.clientY;\n    pos2 = pos4 - e.clientX;\n    pos3 = e.clientY;\n    pos4 = e.clientX;\n    rulesTab.style.top = rulesTab.offsetTop - pos1 + \"px\";\n    rulesTab.style.left = rulesTab.offsetLeft - pos2 + \"px\";\n}\n//Rules Modal Hide\nfunction toggleRules(e) {\n    rulesTab.classList.toggle(\"hide\");\n}\n//Screen Toggle\nfunction toggleScreen() {\n    document.querySelector(\"main.landing\").classList.toggle(\"d-none\");\n    playScreen.classList.toggle(\"d-none\");\n}\n/*****************************Event Listeners****************************/\n//Show/Hide Rules\nmodal_close.addEventListener(\"click\", toggleRules);\nrules.addEventListener(\"click\", toggleRules);\n//Grabbing Rules Modal and Displace\nrulesTab.addEventListener(\"mousedown\", function (e) {\n    e.preventDefault();\n    pos3 = e.clientY;\n    pos4 = e.clientX;\n    rulesTab.addEventListener(\"mousemove\", displace);\n    rulesTab.style.cursor = \"grabbing\";\n});\n//Stop Grab and Stay\nrulesTab.addEventListener(\"mouseup\", function () {\n    rulesTab.style.cursor = \"grab\";\n    rulesTab.removeEventListener(\"mousemove\", displace);\n});\n//Player\nicons.forEach(function (el) {\n    return el.addEventListener(\"click\", function (e) {\n        var target = e.currentTarget;\n        toggleScreen();\n        var i = _Game__WEBPACK_IMPORTED_MODULE_1__.spr.indexOf(target.className);\n        playerTab.classList.replace(playerTab.classList[1], target.className);\n        playerTab.children[0].setAttribute(\"src\", _Game__WEBPACK_IMPORTED_MODULE_1__.src[i]);\n        game.playerPlay(i);\n        setTimeout(function () {\n            var compChoice = game.computerPlay();\n            compTab.classList.replace(compTab.classList[1], _Game__WEBPACK_IMPORTED_MODULE_1__.spr[compChoice]);\n            compTab.children[0].setAttribute(\"src\", _Game__WEBPACK_IMPORTED_MODULE_1__.src[compChoice]);\n            var status = document.querySelector(\"aside.status>p>span\");\n            var winner = game.getRoundWinner();\n            if (winner === \"WIN\")\n                scoreBoard.innerText = game.getPlayerScore().toString();\n            status.innerText = winner;\n        }, 50);\n    });\n});\n//Play Again\nplayAgain.addEventListener(\"click\", toggleScreen);\n\n\n//# sourceURL=webpack://rock-paper-scissors/./src/index.ts?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;