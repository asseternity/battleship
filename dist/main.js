/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");

class Gameboard {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = [];
  }
  createGameboard() {
    for (let i = 0; i < this.height; i++) {
      let row = [];
      for (let j = 0; j < this.width; j++) {
        row.push(null);
      }
      this.board.push(row);
    }
  }
  placeShip(coordinates) {
    // create a ship instance and assign its length based on coordinates.length
    let ship = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](coordinates.length);
    // what format should the coordinates be in?
    // coordinates = [[1, 2], [1, 3], [1, 4]]
    // iterate through the coordinates array
    // confirming that every cell is free
    for (let i = 0; i < coordinates.length; i++) {
      let coordinate1 = parseInt(coordinates[i][0]);
      let coordinate2 = parseInt(coordinates[i][1]);
      if (coordinate1 < 0 || coordinate1 >= this.board.length || coordinate2 < 0 || coordinate1 >= this.board[0].length) {
        return new Error("Coordinates are out of bounds!");
      }
      if (this.board[coordinate1][coordinate2] !== null) {
        return new Error("This cell is taken!");
      }
      let neighborCell1;
      let neighborCell2;
      let neighborCell3;
      let neighborCell4;
      if (coordinate1 === 0) {
        neighborCell2 = "undefined";
      } else {
        neighborCell2 = this.board[coordinate1 - 1][coordinate2];
      }
      if (coordinate1 === 9) {
        neighborCell1 = "undefined";
      } else {
        neighborCell1 = this.board[coordinate1 + 1][coordinate2];
      }
      if (coordinate2 === 0) {
        neighborCell4 = "undefined";
      } else {
        neighborCell4 = this.board[coordinate1][coordinate2 - 1];
      }
      if (coordinate2 === 9) {
        neighborCell3 = "undefined";
      } else {
        neighborCell3 = this.board[coordinate1][coordinate2 + 1];
      }
      let neighborCells = [neighborCell1, neighborCell2, neighborCell3, neighborCell4];
      for (let k = 0; k < neighborCells.length; k++) {
        if (neighborCells[k] == "undefined") {
          neighborCells.splice(k, 1);
        }
      }
      for (let l = 0; l < neighborCells.length; l++) {
        if (neighborCells[l] !== null) {
          return new Error("Neighboring cells must be empty!");
        }
      }
    }
    for (let j = 0; j < coordinates.length; j++) {
      // we confirmed that the place is valid
      // now we iterate again and create a ship in every cell
      let coordinate1 = parseInt(coordinates[j][0]);
      let coordinate2 = parseInt(coordinates[j][1]);
      this.board[coordinate1][coordinate2] = ship;
    }
    return ship;
  }
  receiveAttack(coordinates) {
    let coordinate1 = coordinates[0];
    let coordinate2 = coordinates[1];
    if (this.board[coordinate1][coordinate2] === null) {
      this.board[coordinate1][coordinate2] = "miss";
    } else if (this.board[coordinate1][coordinate2] === "miss" || this.board[coordinate1][coordinate2] === "hitShip") {
      throw new Error("Already attacked here!");
    } else {
      let hitShip = this.board[coordinate1][coordinate2];
      hitShip.isHit();
      this.board[coordinate1][coordinate2] = "hitShip";
    }
  }
  receiveRandomAttack() {
    let coordinate1 = Math.floor(Math.random() * 10);
    let coordinate2 = Math.floor(Math.random() * 10);
    if (this.board[coordinate1][coordinate2] !== "miss" || this.board[coordinate1][coordinate2] !== "hitShip") {
      this.receiveAttack([coordinate1, coordinate2]);
    }
  }
  allShipsSunk() {
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (this.board[i][j] !== null && this.board[i][j] !== "miss" && this.board[i][j] !== "hitShip") {
          return false;
        }
      }
    }
    return true;
  }
}

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");

class Player {
  constructor(name, isHuman) {
    this.name = name;
    this.isHuman = isHuman;
    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](10, 10);
    this.gameboard.createGameboard();
  }
}

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length) {
    this.length = length, this.hitsSuffered = 0, this.sunk = false;
  }
  isHit() {
    this.hitsSuffered += 1;
    this.sunk = this.isSunk();
  }
  isSunk() {
    if (this.length > this.hitsSuffered) {
      return false;
    } else {
      return true;
    }
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.gameboardDiv {
  display: grid;
  grid-template-columns: repeat(10, 30px);
  grid-template-rows: repeat(10, 30px);
}

.tile {
  width: 30px;
  height: 30px;
  color: black;
  border: 1px solid black;
}

#randomButton {
  width: 80px;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;AACtC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,WAAW;AACb","sourcesContent":[".container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.gameboardDiv {\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n  grid-template-rows: repeat(10, 30px);\n}\n\n.tile {\n  width: 30px;\n  height: 30px;\n  color: black;\n  border: 1px solid black;\n}\n\n#randomButton {\n  width: 80px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


let player2;
class DOMManipulator {
  createPlayer(playerName, isHuman) {
    let newPlayer = new _player__WEBPACK_IMPORTED_MODULE_0__["default"](playerName, isHuman);
    if (newPlayer.isHuman == true) {
      this.placeShip(newPlayer);
      player2 = this.createPlayer("player2", false);
    }
    let container = document.querySelector(".container");
    let playerArea = document.createElement("div");
    if (newPlayer.isHuman == true) {
      playerArea.textContent = "Opponent's Board";
    } else {
      playerArea.textContent = "Your Board";
    }
    container.appendChild(playerArea);
    let gameboardDiv = document.createElement("div");
    playerArea.appendChild(gameboardDiv);
    playerArea.classList.add("playerArea");
    playerArea.id = `${playerName}`;
    gameboardDiv.classList.add("gameboardDiv");
    for (let i = 0; i < newPlayer.gameboard.width; i++) {
      for (let j = 0; j < newPlayer.gameboard.height; j++) {
        let tile = document.createElement("div");
        tile.id = `TileID_${i}${j}`;
        tile.classList.add("tile");
        tile.style.gridColumn = `${i + 1}`;
        tile.style.gridRow = `${j + 1}`;
        gameboardDiv.appendChild(tile);
        if (newPlayer.isHuman == true) {
          tile.addEventListener("click", () => {
            newPlayer.gameboard.receiveAttack([i, j]);
            this.updateTiles(newPlayer);
            if (newPlayer.gameboard.allShipsSunk()) {
              alert("You win! Reload the page for another game.");
              document.body.removeChild(container);
            }
            player2.gameboard.receiveRandomAttack();
            this.updateTiles(player2);
            if (player2.gameboard.allShipsSunk()) {
              alert("You lose! Reload the page for another game.");
              document.body.removeChild(container);
            }
          });
        }
      }
    }
    return newPlayer;
  }
  updateTiles(player) {
    let div = document.querySelector(`#${player.name}`);
    for (let i = 0; i < player.gameboard.board.length; i++) {
      for (let j = 0; j < player.gameboard.board[i].length; j++) {
        if (player.gameboard.board[i][j] == null) {
          let tile = div.querySelector(`#TileID_${i}${j}`);
          tile.textContent = " ";
        } else if (player.gameboard.board[i][j] == "miss" || player.gameboard.board[i][j] == "hitShip") {
          let tile = div.querySelector(`#TileID_${i}${j}`);
          tile.textContent = "x";
        } else {
          let tile = div.querySelector(`#TileID_${i}${j}`);
          tile.textContent = "o";
        }
      }
    }
  }
  placeShip(player) {
    let field_coordinate1 = document.querySelector("#coordinate1");
    let field_coordinate2 = document.querySelector("#coordinate2");
    let field_orientation = document.querySelector("#orientation");
    let field_shipLength = document.querySelector("#shipLength");
    let submitButton = document.querySelector('input[type="submit"]');
    submitButton.addEventListener("click", event => {
      event.preventDefault();
      let startingCoordinate1 = parseInt(field_coordinate1.value) - 1;
      let startingCoordinate2 = parseInt(field_coordinate2.value) - 1;
      let ship;
      if (field_orientation.value == "horizontal") {
        let coordinates1 = [parseInt(startingCoordinate1), parseInt(startingCoordinate2)];
        let coordinates2 = [parseInt(startingCoordinate1) + 1, parseInt(startingCoordinate2)];
        let coordinates3;
        let coordinates4;
        let coordinates5;
        if (field_shipLength.value == 2) {
          ship = player.gameboard.placeShip([coordinates1, coordinates2]);
          this.updateTiles(player);
        } else if (field_shipLength.value == 3) {
          coordinates3 = [parseInt(startingCoordinate1) + 2, parseInt(startingCoordinate2)];
          ship = player.gameboard.placeShip([coordinates1, coordinates2, coordinates3]);
          this.updateTiles(player);
        } else if (field_shipLength.value == 4) {
          coordinates3 = [parseInt(startingCoordinate1) + 2, parseInt(startingCoordinate2)];
          coordinates4 = [parseInt(startingCoordinate1) + 3, parseInt(startingCoordinate2)];
          ship = player.gameboard.placeShip([coordinates1, coordinates2, coordinates3, coordinates4]);
          this.updateTiles(player);
        } else if (field_shipLength.value == 5) {
          coordinates3 = [parseInt(startingCoordinate1) + 2, parseInt(startingCoordinate2)];
          coordinates4 = [parseInt(startingCoordinate1) + 3, parseInt(startingCoordinate2)];
          coordinates5 = [parseInt(startingCoordinate1) + 4, parseInt(startingCoordinate2)];
          ship = player.gameboard.placeShip([coordinates1, coordinates2, coordinates3, coordinates4, coordinates5]);
          this.updateTiles(player);
        }
        if (typeof ship === "object") {
          let selectedValue = field_shipLength.value;
          let selectedOption = document.querySelector('option[value="' + selectedValue + '"]');
          field_shipLength.removeChild(selectedOption);
        } else {
          alert("The tiles you selected are not empty!");
        }
      } // ***
      // same but vertical
      // ***
      else {
        let coordinates1 = [parseInt(startingCoordinate1), parseInt(startingCoordinate2)];
        let coordinates2 = [parseInt(startingCoordinate1), parseInt(startingCoordinate2) + 1];
        let coordinates3;
        let coordinates4;
        let coordinates5;
        if (field_shipLength.value == 2) {
          ship = player.gameboard.placeShip([coordinates1, coordinates2]);
          this.updateTiles(player);
        } else if (field_shipLength.value == 3) {
          coordinates3 = [parseInt(startingCoordinate1), parseInt(startingCoordinate2) + 2];
          ship = player.gameboard.placeShip([coordinates1, coordinates2, coordinates3]);
          this.updateTiles(player);
        } else if (field_shipLength.value == 4) {
          coordinates3 = [parseInt(startingCoordinate1), parseInt(startingCoordinate2) + 2];
          coordinates4 = [parseInt(startingCoordinate1), parseInt(startingCoordinate2) + 3];
          ship = player.gameboard.placeShip([coordinates1, coordinates2, coordinates3, coordinates4]);
          this.updateTiles(player);
        } else if (field_shipLength.value == 5) {
          coordinates3 = [parseInt(startingCoordinate1), parseInt(startingCoordinate2) + 2];
          coordinates4 = [parseInt(startingCoordinate1), parseInt(startingCoordinate2) + 3];
          coordinates5 = [parseInt(startingCoordinate1), parseInt(startingCoordinate2) + 4];
          ship = player.gameboard.placeShip([coordinates1, coordinates2, coordinates3, coordinates4, coordinates5]);
          this.updateTiles(player);
        }
        if (typeof ship === "object") {
          let selectedValue = field_shipLength.value;
          let selectedOption = document.querySelector('option[value="' + selectedValue + '"]');
          field_shipLength.removeChild(selectedOption);
        } else {
          alert("The tiles you selected are not empty!");
        }
      }
    });
  }
  clearGameboard(player) {
    for (let i = 0; i < player.gameboard.board.length; i++) {
      for (let j = 0; j < player.gameboard.board[i].length; j++) {
        if (player.gameboard.board[i][j] !== null) {
          player.gameboard.board[i][j] = null;
        }
      }
    }
    this.updateTiles(player);
  }
  placeRandomShips(player) {
    let shipLengthsRemaining = [5, 4, 4, 3, 3, 3, 2, 2];
    let orientations = ["horizontal", "vertical"];
    this.clearGameboard(player);
    while (shipLengthsRemaining.length !== 0) {
      let random0to7 = Math.floor(Math.random() * 8);
      let chosenLength = shipLengthsRemaining[random0to7];
      let random0or1 = Math.floor(Math.random() * 2);
      let chosenOrientation = orientations[random0or1];
      let coordinate1 = Math.floor(Math.random() * 10);
      let coordinate2 = Math.floor(Math.random() * 10);
      let ship;
      if (chosenOrientation == "horizontal") {
        let coordinates1 = [coordinate1, coordinate2];
        let coordinates2 = [coordinate1 + 1, coordinate2];
        let coordinates3;
        let coordinates4;
        let coordinates5;
        if (chosenLength == 2) {
          ship = player.gameboard.placeShip([coordinates1, coordinates2]);
          this.updateTiles(player);
        } else if (chosenLength == 3) {
          coordinates3 = [coordinate1 + 2, coordinate2];
          ship = player.gameboard.placeShip([coordinates1, coordinates2, coordinates3]);
          this.updateTiles(player);
        } else if (chosenLength == 4) {
          coordinates3 = [coordinate1 + 2, coordinate2];
          coordinates4 = [coordinate1 + 3, coordinate2];
          ship = player.gameboard.placeShip([coordinates1, coordinates2, coordinates3, coordinates4]);
          this.updateTiles(player);
        } else if (chosenLength == 5) {
          coordinates3 = [coordinate1 + 2, coordinate2];
          coordinates4 = [coordinate1 + 3, coordinate2];
          coordinates5 = [coordinate1 + 4, coordinate2];
          ship = player.gameboard.placeShip([coordinates1, coordinates2, coordinates3, coordinates4, coordinates5]);
          this.updateTiles(player);
        }
        if (!(ship instanceof Error)) {
          shipLengthsRemaining.splice(random0to7, 1);
        }
      } else {
        let coordinates1 = [coordinate1, coordinate2];
        let coordinates2 = [coordinate1, coordinate2 + 1];
        let coordinates3;
        let coordinates4;
        let coordinates5;
        if (chosenLength == 2) {
          ship = player.gameboard.placeShip([coordinates1, coordinates2]);
          this.updateTiles(player);
        } else if (chosenLength == 3) {
          coordinates3 = [coordinate1, coordinate2 + 2];
          ship = player.gameboard.placeShip([coordinates1, coordinates2, coordinates3]);
          this.updateTiles(player);
        } else if (chosenLength == 4) {
          coordinates3 = [coordinate1, coordinate2 + 2];
          coordinates4 = [coordinate1, coordinate2 + 3];
          ship = player.gameboard.placeShip([coordinates1, coordinates2, coordinates3, coordinates4]);
          this.updateTiles(player);
        } else if (chosenLength == 5) {
          coordinates3 = [coordinate1, coordinate2 + 2];
          coordinates4 = [coordinate1, coordinate2 + 3];
          coordinates5 = [coordinate1, coordinate2 + 4];
          ship = player.gameboard.placeShip([coordinates1, coordinates2, coordinates3, coordinates4, coordinates5]);
          this.updateTiles(player);
        }
        if (!(ship instanceof Error)) {
          shipLengthsRemaining.splice(random0to7, 1);
        }
      }
    }
  }
}

// testing zone
let game = new DOMManipulator();
let player1 = game.createPlayer("player1", true);
game.placeRandomShips(player2);

// random ships for you
let randomButton = document.querySelector("#randomButton");
randomButton.addEventListener("click", () => {
  game.placeRandomShips(player1);
});

// to do:
// 2) you and your opponent attack your own boards! fix "your board vs opponent's board"
// 3) hide opponent's ships from you
// 4) you only go once all the ships are placed! (check if the children.length of select === 0)
// 5) you go again if you hit
// 6) opponent goes again if it hits
// 7) delay between opponent's turns
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixTQUFTLENBQUMsQ0FDaENvRSxZQUFZLEVBQ1pDLFlBQVksRUFDWkMsWUFBWSxFQUNaQyxZQUFZLEVBQ1pDLFlBQVksQ0FDYixDQUFDO1VBQ0YsSUFBSSxDQUFDcEIsV0FBVyxDQUFDSSxNQUFNLENBQUM7UUFDMUI7UUFDQSxJQUFJLEVBQUV0RCxJQUFJLFlBQVlLLEtBQUssQ0FBQyxFQUFFO1VBQzVCc0Usb0JBQW9CLENBQUMvRCxNQUFNLENBQUNpRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzVDO01BQ0Y7SUFDRjtFQUNGO0FBQ0Y7O0FBRUE7QUFDQSxJQUFJSSxJQUFJLEdBQUcsSUFBSW5ELGNBQWMsQ0FBQyxDQUFDO0FBQy9CLElBQUlvRCxPQUFPLEdBQUdELElBQUksQ0FBQ2xELFlBQVksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO0FBQ2hEa0QsSUFBSSxDQUFDUCxnQkFBZ0IsQ0FBQzdDLE9BQU8sQ0FBQzs7QUFFOUI7QUFDQSxJQUFJc0QsWUFBWSxHQUFHaEQsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0FBQzFEK0MsWUFBWSxDQUFDbEMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07RUFDM0NnQyxJQUFJLENBQUNQLGdCQUFnQixDQUFDUSxPQUFPLENBQUM7QUFDaEMsQ0FBQyxDQUFDOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWFwcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vd2ViLWFwcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vd2ViLWFwcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL3dlYi1hcHAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2ViLWFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2ViLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYi1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2ViLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYi1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYi1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2ViLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2ViLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYi1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLmJvYXJkID0gW107XG4gIH1cbiAgY3JlYXRlR2FtZWJvYXJkKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5oZWlnaHQ7IGkrKykge1xuICAgICAgbGV0IHJvdyA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLndpZHRoOyBqKyspIHtcbiAgICAgICAgcm93LnB1c2gobnVsbCk7XG4gICAgICB9XG4gICAgICB0aGlzLmJvYXJkLnB1c2gocm93KTtcbiAgICB9XG4gIH1cbiAgcGxhY2VTaGlwKGNvb3JkaW5hdGVzKSB7XG4gICAgLy8gY3JlYXRlIGEgc2hpcCBpbnN0YW5jZSBhbmQgYXNzaWduIGl0cyBsZW5ndGggYmFzZWQgb24gY29vcmRpbmF0ZXMubGVuZ3RoXG4gICAgbGV0IHNoaXAgPSBuZXcgU2hpcChjb29yZGluYXRlcy5sZW5ndGgpO1xuICAgIC8vIHdoYXQgZm9ybWF0IHNob3VsZCB0aGUgY29vcmRpbmF0ZXMgYmUgaW4/XG4gICAgLy8gY29vcmRpbmF0ZXMgPSBbWzEsIDJdLCBbMSwgM10sIFsxLCA0XV1cbiAgICAvLyBpdGVyYXRlIHRocm91Z2ggdGhlIGNvb3JkaW5hdGVzIGFycmF5XG4gICAgLy8gY29uZmlybWluZyB0aGF0IGV2ZXJ5IGNlbGwgaXMgZnJlZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjb29yZGluYXRlMSA9IHBhcnNlSW50KGNvb3JkaW5hdGVzW2ldWzBdKTtcbiAgICAgIGxldCBjb29yZGluYXRlMiA9IHBhcnNlSW50KGNvb3JkaW5hdGVzW2ldWzFdKTtcblxuICAgICAgaWYgKFxuICAgICAgICBjb29yZGluYXRlMSA8IDAgfHxcbiAgICAgICAgY29vcmRpbmF0ZTEgPj0gdGhpcy5ib2FyZC5sZW5ndGggfHxcbiAgICAgICAgY29vcmRpbmF0ZTIgPCAwIHx8XG4gICAgICAgIGNvb3JkaW5hdGUxID49IHRoaXMuYm9hcmRbMF0ubGVuZ3RoXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIkNvb3JkaW5hdGVzIGFyZSBvdXQgb2YgYm91bmRzIVwiKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmJvYXJkW2Nvb3JkaW5hdGUxXVtjb29yZGluYXRlMl0gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIlRoaXMgY2VsbCBpcyB0YWtlbiFcIik7XG4gICAgICB9XG4gICAgICBsZXQgbmVpZ2hib3JDZWxsMTtcbiAgICAgIGxldCBuZWlnaGJvckNlbGwyO1xuICAgICAgbGV0IG5laWdoYm9yQ2VsbDM7XG4gICAgICBsZXQgbmVpZ2hib3JDZWxsNDtcbiAgICAgIGlmIChjb29yZGluYXRlMSA9PT0gMCkge1xuICAgICAgICBuZWlnaGJvckNlbGwyID0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5laWdoYm9yQ2VsbDIgPSB0aGlzLmJvYXJkW2Nvb3JkaW5hdGUxIC0gMV1bY29vcmRpbmF0ZTJdO1xuICAgICAgfVxuICAgICAgaWYgKGNvb3JkaW5hdGUxID09PSA5KSB7XG4gICAgICAgIG5laWdoYm9yQ2VsbDEgPSBcInVuZGVmaW5lZFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmVpZ2hib3JDZWxsMSA9IHRoaXMuYm9hcmRbY29vcmRpbmF0ZTEgKyAxXVtjb29yZGluYXRlMl07XG4gICAgICB9XG4gICAgICBpZiAoY29vcmRpbmF0ZTIgPT09IDApIHtcbiAgICAgICAgbmVpZ2hib3JDZWxsNCA9IFwidW5kZWZpbmVkXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZWlnaGJvckNlbGw0ID0gdGhpcy5ib2FyZFtjb29yZGluYXRlMV1bY29vcmRpbmF0ZTIgLSAxXTtcbiAgICAgIH1cbiAgICAgIGlmIChjb29yZGluYXRlMiA9PT0gOSkge1xuICAgICAgICBuZWlnaGJvckNlbGwzID0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5laWdoYm9yQ2VsbDMgPSB0aGlzLmJvYXJkW2Nvb3JkaW5hdGUxXVtjb29yZGluYXRlMiArIDFdO1xuICAgICAgfVxuICAgICAgbGV0IG5laWdoYm9yQ2VsbHMgPSBbXG4gICAgICAgIG5laWdoYm9yQ2VsbDEsXG4gICAgICAgIG5laWdoYm9yQ2VsbDIsXG4gICAgICAgIG5laWdoYm9yQ2VsbDMsXG4gICAgICAgIG5laWdoYm9yQ2VsbDQsXG4gICAgICBdO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBuZWlnaGJvckNlbGxzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIGlmIChuZWlnaGJvckNlbGxzW2tdID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBuZWlnaGJvckNlbGxzLnNwbGljZShrLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChsZXQgbCA9IDA7IGwgPCBuZWlnaGJvckNlbGxzLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgIGlmIChuZWlnaGJvckNlbGxzW2xdICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIk5laWdoYm9yaW5nIGNlbGxzIG11c3QgYmUgZW1wdHkhXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29vcmRpbmF0ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vIHdlIGNvbmZpcm1lZCB0aGF0IHRoZSBwbGFjZSBpcyB2YWxpZFxuICAgICAgLy8gbm93IHdlIGl0ZXJhdGUgYWdhaW4gYW5kIGNyZWF0ZSBhIHNoaXAgaW4gZXZlcnkgY2VsbFxuICAgICAgbGV0IGNvb3JkaW5hdGUxID0gcGFyc2VJbnQoY29vcmRpbmF0ZXNbal1bMF0pO1xuICAgICAgbGV0IGNvb3JkaW5hdGUyID0gcGFyc2VJbnQoY29vcmRpbmF0ZXNbal1bMV0pO1xuICAgICAgdGhpcy5ib2FyZFtjb29yZGluYXRlMV1bY29vcmRpbmF0ZTJdID0gc2hpcDtcbiAgICB9XG4gICAgcmV0dXJuIHNoaXA7XG4gIH1cbiAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xuICAgIGxldCBjb29yZGluYXRlMSA9IGNvb3JkaW5hdGVzWzBdO1xuICAgIGxldCBjb29yZGluYXRlMiA9IGNvb3JkaW5hdGVzWzFdO1xuICAgIGlmICh0aGlzLmJvYXJkW2Nvb3JkaW5hdGUxXVtjb29yZGluYXRlMl0gPT09IG51bGwpIHtcbiAgICAgIHRoaXMuYm9hcmRbY29vcmRpbmF0ZTFdW2Nvb3JkaW5hdGUyXSA9IFwibWlzc1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzLmJvYXJkW2Nvb3JkaW5hdGUxXVtjb29yZGluYXRlMl0gPT09IFwibWlzc1wiIHx8XG4gICAgICB0aGlzLmJvYXJkW2Nvb3JkaW5hdGUxXVtjb29yZGluYXRlMl0gPT09IFwiaGl0U2hpcFwiXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbHJlYWR5IGF0dGFja2VkIGhlcmUhXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgaGl0U2hpcCA9IHRoaXMuYm9hcmRbY29vcmRpbmF0ZTFdW2Nvb3JkaW5hdGUyXTtcbiAgICAgIGhpdFNoaXAuaXNIaXQoKTtcbiAgICAgIHRoaXMuYm9hcmRbY29vcmRpbmF0ZTFdW2Nvb3JkaW5hdGUyXSA9IFwiaGl0U2hpcFwiO1xuICAgIH1cbiAgfVxuICByZWNlaXZlUmFuZG9tQXR0YWNrKCkge1xuICAgIGxldCBjb29yZGluYXRlMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBsZXQgY29vcmRpbmF0ZTIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgaWYgKFxuICAgICAgdGhpcy5ib2FyZFtjb29yZGluYXRlMV1bY29vcmRpbmF0ZTJdICE9PSBcIm1pc3NcIiB8fFxuICAgICAgdGhpcy5ib2FyZFtjb29yZGluYXRlMV1bY29vcmRpbmF0ZTJdICE9PSBcImhpdFNoaXBcIlxuICAgICkge1xuICAgICAgdGhpcy5yZWNlaXZlQXR0YWNrKFtjb29yZGluYXRlMSwgY29vcmRpbmF0ZTJdKTtcbiAgICB9XG4gIH1cbiAgYWxsU2hpcHNTdW5rKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5oZWlnaHQ7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLndpZHRoOyBqKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuYm9hcmRbaV1bal0gIT09IG51bGwgJiZcbiAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdICE9PSBcIm1pc3NcIiAmJlxuICAgICAgICAgIHRoaXMuYm9hcmRbaV1bal0gIT09IFwiaGl0U2hpcFwiXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgaXNIdW1hbikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pc0h1bWFuID0gaXNIdW1hbjtcbiAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoMTAsIDEwKTtcbiAgICB0aGlzLmdhbWVib2FyZC5jcmVhdGVHYW1lYm9hcmQoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgICh0aGlzLmxlbmd0aCA9IGxlbmd0aCksICh0aGlzLmhpdHNTdWZmZXJlZCA9IDApLCAodGhpcy5zdW5rID0gZmFsc2UpO1xuICB9XG4gIGlzSGl0KCkge1xuICAgIHRoaXMuaGl0c1N1ZmZlcmVkICs9IDE7XG4gICAgdGhpcy5zdW5rID0gdGhpcy5pc1N1bmsoKTtcbiAgfVxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID4gdGhpcy5oaXRzU3VmZmVyZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cblxuLmdhbWVib2FyZERpdiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xufVxuXG4udGlsZSB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbiNyYW5kb21CdXR0b24ge1xuICB3aWR0aDogODBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5nYW1lYm9hcmREaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcXG59XFxuXFxuLnRpbGUge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3JhbmRvbUJ1dHRvbiB7XFxuICB3aWR0aDogODBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5sZXQgcGxheWVyMjtcblxuY2xhc3MgRE9NTWFuaXB1bGF0b3Ige1xuICBjcmVhdGVQbGF5ZXIocGxheWVyTmFtZSwgaXNIdW1hbikge1xuICAgIGxldCBuZXdQbGF5ZXIgPSBuZXcgUGxheWVyKHBsYXllck5hbWUsIGlzSHVtYW4pO1xuXG4gICAgaWYgKG5ld1BsYXllci5pc0h1bWFuID09IHRydWUpIHtcbiAgICAgIHRoaXMucGxhY2VTaGlwKG5ld1BsYXllcik7XG4gICAgICBwbGF5ZXIyID0gdGhpcy5jcmVhdGVQbGF5ZXIoXCJwbGF5ZXIyXCIsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgbGV0IHBsYXllckFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlmIChuZXdQbGF5ZXIuaXNIdW1hbiA9PSB0cnVlKSB7XG4gICAgICBwbGF5ZXJBcmVhLnRleHRDb250ZW50ID0gXCJPcHBvbmVudCdzIEJvYXJkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllckFyZWEudGV4dENvbnRlbnQgPSBcIllvdXIgQm9hcmRcIjtcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckFyZWEpO1xuICAgIGxldCBnYW1lYm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsYXllckFyZWEuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkRGl2KTtcbiAgICBwbGF5ZXJBcmVhLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXJBcmVhXCIpO1xuICAgIHBsYXllckFyZWEuaWQgPSBgJHtwbGF5ZXJOYW1lfWA7XG4gICAgZ2FtZWJvYXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJnYW1lYm9hcmREaXZcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdQbGF5ZXIuZ2FtZWJvYXJkLndpZHRoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmV3UGxheWVyLmdhbWVib2FyZC5oZWlnaHQ7IGorKykge1xuICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRpbGUuaWQgPSBgVGlsZUlEXyR7aX0ke2p9YDtcbiAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwidGlsZVwiKTtcbiAgICAgICAgdGlsZS5zdHlsZS5ncmlkQ29sdW1uID0gYCR7aSArIDF9YDtcbiAgICAgICAgdGlsZS5zdHlsZS5ncmlkUm93ID0gYCR7aiArIDF9YDtcbiAgICAgICAgZ2FtZWJvYXJkRGl2LmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICBpZiAobmV3UGxheWVyLmlzSHVtYW4gPT0gdHJ1ZSkge1xuICAgICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIG5ld1BsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbaSwgal0pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUaWxlcyhuZXdQbGF5ZXIpO1xuICAgICAgICAgICAgaWYgKG5ld1BsYXllci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgYWxlcnQoXCJZb3Ugd2luISBSZWxvYWQgdGhlIHBhZ2UgZm9yIGFub3RoZXIgZ2FtZS5cIik7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBsYXllcjIuZ2FtZWJvYXJkLnJlY2VpdmVSYW5kb21BdHRhY2soKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGlsZXMocGxheWVyMik7XG4gICAgICAgICAgICBpZiAocGxheWVyMi5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgYWxlcnQoXCJZb3UgbG9zZSEgUmVsb2FkIHRoZSBwYWdlIGZvciBhbm90aGVyIGdhbWUuXCIpO1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld1BsYXllcjtcbiAgfVxuICB1cGRhdGVUaWxlcyhwbGF5ZXIpIHtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cGxheWVyLm5hbWV9YCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBsYXllci5nYW1lYm9hcmQuYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQuYm9hcmRbaV1bal0gPT0gbnVsbCkge1xuICAgICAgICAgIGxldCB0aWxlID0gZGl2LnF1ZXJ5U2VsZWN0b3IoYCNUaWxlSURfJHtpfSR7an1gKTtcbiAgICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCIgXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5ib2FyZFtpXVtqXSA9PSBcIm1pc3NcIiB8fFxuICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQuYm9hcmRbaV1bal0gPT0gXCJoaXRTaGlwXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgbGV0IHRpbGUgPSBkaXYucXVlcnlTZWxlY3RvcihgI1RpbGVJRF8ke2l9JHtqfWApO1xuICAgICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcInhcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgdGlsZSA9IGRpdi5xdWVyeVNlbGVjdG9yKGAjVGlsZUlEXyR7aX0ke2p9YCk7XG4gICAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwib1wiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHBsYWNlU2hpcChwbGF5ZXIpIHtcbiAgICBsZXQgZmllbGRfY29vcmRpbmF0ZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nvb3JkaW5hdGUxXCIpO1xuICAgIGxldCBmaWVsZF9jb29yZGluYXRlMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29vcmRpbmF0ZTJcIik7XG4gICAgbGV0IGZpZWxkX29yaWVudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcmllbnRhdGlvblwiKTtcbiAgICBsZXQgZmllbGRfc2hpcExlbmd0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hpcExlbmd0aFwiKTtcbiAgICBsZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpO1xuXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgc3RhcnRpbmdDb29yZGluYXRlMSA9IHBhcnNlSW50KGZpZWxkX2Nvb3JkaW5hdGUxLnZhbHVlKSAtIDE7XG4gICAgICBsZXQgc3RhcnRpbmdDb29yZGluYXRlMiA9IHBhcnNlSW50KGZpZWxkX2Nvb3JkaW5hdGUyLnZhbHVlKSAtIDE7XG4gICAgICBsZXQgc2hpcDtcbiAgICAgIGlmIChmaWVsZF9vcmllbnRhdGlvbi52YWx1ZSA9PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMxID0gW1xuICAgICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ29vcmRpbmF0ZTEpLFxuICAgICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ29vcmRpbmF0ZTIpLFxuICAgICAgICBdO1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMyID0gW1xuICAgICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ29vcmRpbmF0ZTEpICsgMSxcbiAgICAgICAgICBwYXJzZUludChzdGFydGluZ0Nvb3JkaW5hdGUyKSxcbiAgICAgICAgXTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzMztcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzNDtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzNTtcbiAgICAgICAgaWYgKGZpZWxkX3NoaXBMZW5ndGgudmFsdWUgPT0gMikge1xuICAgICAgICAgIHNoaXAgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChbY29vcmRpbmF0ZXMxLCBjb29yZGluYXRlczJdKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVRpbGVzKHBsYXllcik7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGRfc2hpcExlbmd0aC52YWx1ZSA9PSAzKSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXMzID0gW1xuICAgICAgICAgICAgcGFyc2VJbnQoc3RhcnRpbmdDb29yZGluYXRlMSkgKyAyLFxuICAgICAgICAgICAgcGFyc2VJbnQoc3RhcnRpbmdDb29yZGluYXRlMiksXG4gICAgICAgICAgXTtcbiAgICAgICAgICBzaGlwID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoW1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMxLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXMyLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXMzLFxuICAgICAgICAgIF0pO1xuICAgICAgICAgIHRoaXMudXBkYXRlVGlsZXMocGxheWVyKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZF9zaGlwTGVuZ3RoLnZhbHVlID09IDQpIHtcbiAgICAgICAgICBjb29yZGluYXRlczMgPSBbXG4gICAgICAgICAgICBwYXJzZUludChzdGFydGluZ0Nvb3JkaW5hdGUxKSArIDIsXG4gICAgICAgICAgICBwYXJzZUludChzdGFydGluZ0Nvb3JkaW5hdGUyKSxcbiAgICAgICAgICBdO1xuICAgICAgICAgIGNvb3JkaW5hdGVzNCA9IFtcbiAgICAgICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ29vcmRpbmF0ZTEpICsgMyxcbiAgICAgICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ29vcmRpbmF0ZTIpLFxuICAgICAgICAgIF07XG4gICAgICAgICAgc2hpcCA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMSxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMixcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMyxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzNCxcbiAgICAgICAgICBdKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVRpbGVzKHBsYXllcik7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGRfc2hpcExlbmd0aC52YWx1ZSA9PSA1KSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXMzID0gW1xuICAgICAgICAgICAgcGFyc2VJbnQoc3RhcnRpbmdDb29yZGluYXRlMSkgKyAyLFxuICAgICAgICAgICAgcGFyc2VJbnQoc3RhcnRpbmdDb29yZGluYXRlMiksXG4gICAgICAgICAgXTtcbiAgICAgICAgICBjb29yZGluYXRlczQgPSBbXG4gICAgICAgICAgICBwYXJzZUludChzdGFydGluZ0Nvb3JkaW5hdGUxKSArIDMsXG4gICAgICAgICAgICBwYXJzZUludChzdGFydGluZ0Nvb3JkaW5hdGUyKSxcbiAgICAgICAgICBdO1xuICAgICAgICAgIGNvb3JkaW5hdGVzNSA9IFtcbiAgICAgICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ29vcmRpbmF0ZTEpICsgNCxcbiAgICAgICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ29vcmRpbmF0ZTIpLFxuICAgICAgICAgIF07XG4gICAgICAgICAgc2hpcCA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMSxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMixcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMyxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzNCxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzNSxcbiAgICAgICAgICBdKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVRpbGVzKHBsYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBzaGlwID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgbGV0IHNlbGVjdGVkVmFsdWUgPSBmaWVsZF9zaGlwTGVuZ3RoLnZhbHVlO1xuICAgICAgICAgIGxldCBzZWxlY3RlZE9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnb3B0aW9uW3ZhbHVlPVwiJyArIHNlbGVjdGVkVmFsdWUgKyAnXCJdJyxcbiAgICAgICAgICApO1xuICAgICAgICAgIGZpZWxkX3NoaXBMZW5ndGgucmVtb3ZlQ2hpbGQoc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiVGhlIHRpbGVzIHlvdSBzZWxlY3RlZCBhcmUgbm90IGVtcHR5IVwiKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyAqKipcbiAgICAgIC8vIHNhbWUgYnV0IHZlcnRpY2FsXG4gICAgICAvLyAqKipcbiAgICAgIGVsc2Uge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMxID0gW1xuICAgICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ29vcmRpbmF0ZTEpLFxuICAgICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ29vcmRpbmF0ZTIpLFxuICAgICAgICBdO1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMyID0gW1xuICAgICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ29vcmRpbmF0ZTEpLFxuICAgICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ29vcmRpbmF0ZTIpICsgMSxcbiAgICAgICAgXTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzMztcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzNDtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzNTtcbiAgICAgICAgaWYgKGZpZWxkX3NoaXBMZW5ndGgudmFsdWUgPT0gMikge1xuICAgICAgICAgIHNoaXAgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChbY29vcmRpbmF0ZXMxLCBjb29yZGluYXRlczJdKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVRpbGVzKHBsYXllcik7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGRfc2hpcExlbmd0aC52YWx1ZSA9PSAzKSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXMzID0gW1xuICAgICAgICAgICAgcGFyc2VJbnQoc3RhcnRpbmdDb29yZGluYXRlMSksXG4gICAgICAgICAgICBwYXJzZUludChzdGFydGluZ0Nvb3JkaW5hdGUyKSArIDIsXG4gICAgICAgICAgXTtcbiAgICAgICAgICBzaGlwID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoW1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMxLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXMyLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXMzLFxuICAgICAgICAgIF0pO1xuICAgICAgICAgIHRoaXMudXBkYXRlVGlsZXMocGxheWVyKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZF9zaGlwTGVuZ3RoLnZhbHVlID09IDQpIHtcbiAgICAgICAgICBjb29yZGluYXRlczMgPSBbXG4gICAgICAgICAgICBwYXJzZUludChzdGFydGluZ0Nvb3JkaW5hdGUxKSxcbiAgICAgICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ29vcmRpbmF0ZTIpICsgMixcbiAgICAgICAgICBdO1xuICAgICAgICAgIGNvb3JkaW5hdGVzNCA9IFtcbiAgICAgICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ29vcmRpbmF0ZTEpLFxuICAgICAgICAgICAgcGFyc2VJbnQoc3RhcnRpbmdDb29yZGluYXRlMikgKyAzLFxuICAgICAgICAgIF07XG4gICAgICAgICAgc2hpcCA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMSxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMixcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMyxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzNCxcbiAgICAgICAgICBdKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVRpbGVzKHBsYXllcik7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGRfc2hpcExlbmd0aC52YWx1ZSA9PSA1KSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXMzID0gW1xuICAgICAgICAgICAgcGFyc2VJbnQoc3RhcnRpbmdDb29yZGluYXRlMSksXG4gICAgICAgICAgICBwYXJzZUludChzdGFydGluZ0Nvb3JkaW5hdGUyKSArIDIsXG4gICAgICAgICAgXTtcbiAgICAgICAgICBjb29yZGluYXRlczQgPSBbXG4gICAgICAgICAgICBwYXJzZUludChzdGFydGluZ0Nvb3JkaW5hdGUxKSxcbiAgICAgICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ29vcmRpbmF0ZTIpICsgMyxcbiAgICAgICAgICBdO1xuICAgICAgICAgIGNvb3JkaW5hdGVzNSA9IFtcbiAgICAgICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ29vcmRpbmF0ZTEpLFxuICAgICAgICAgICAgcGFyc2VJbnQoc3RhcnRpbmdDb29yZGluYXRlMikgKyA0LFxuICAgICAgICAgIF07XG4gICAgICAgICAgc2hpcCA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMSxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMixcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMyxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzNCxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzNSxcbiAgICAgICAgICBdKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVRpbGVzKHBsYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBzaGlwID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgbGV0IHNlbGVjdGVkVmFsdWUgPSBmaWVsZF9zaGlwTGVuZ3RoLnZhbHVlO1xuICAgICAgICAgIGxldCBzZWxlY3RlZE9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnb3B0aW9uW3ZhbHVlPVwiJyArIHNlbGVjdGVkVmFsdWUgKyAnXCJdJyxcbiAgICAgICAgICApO1xuICAgICAgICAgIGZpZWxkX3NoaXBMZW5ndGgucmVtb3ZlQ2hpbGQoc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiVGhlIHRpbGVzIHlvdSBzZWxlY3RlZCBhcmUgbm90IGVtcHR5IVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNsZWFyR2FtZWJvYXJkKHBsYXllcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyLmdhbWVib2FyZC5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW2ldW2pdICE9PSBudWxsKSB7XG4gICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5ib2FyZFtpXVtqXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy51cGRhdGVUaWxlcyhwbGF5ZXIpO1xuICB9XG4gIHBsYWNlUmFuZG9tU2hpcHMocGxheWVyKSB7XG4gICAgbGV0IHNoaXBMZW5ndGhzUmVtYWluaW5nID0gWzUsIDQsIDQsIDMsIDMsIDMsIDIsIDJdO1xuICAgIGxldCBvcmllbnRhdGlvbnMgPSBbXCJob3Jpem9udGFsXCIsIFwidmVydGljYWxcIl07XG5cbiAgICB0aGlzLmNsZWFyR2FtZWJvYXJkKHBsYXllcik7XG5cbiAgICB3aGlsZSAoc2hpcExlbmd0aHNSZW1haW5pbmcubGVuZ3RoICE9PSAwKSB7XG4gICAgICBsZXQgcmFuZG9tMHRvNyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpO1xuICAgICAgbGV0IGNob3Nlbkxlbmd0aCA9IHNoaXBMZW5ndGhzUmVtYWluaW5nW3JhbmRvbTB0bzddO1xuICAgICAgbGV0IHJhbmRvbTBvcjEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAgIGxldCBjaG9zZW5PcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uc1tyYW5kb20wb3IxXTtcblxuICAgICAgbGV0IGNvb3JkaW5hdGUxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgbGV0IGNvb3JkaW5hdGUyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gICAgICBsZXQgc2hpcDtcblxuICAgICAgaWYgKGNob3Nlbk9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIGxldCBjb29yZGluYXRlczEgPSBbY29vcmRpbmF0ZTEsIGNvb3JkaW5hdGUyXTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzMiA9IFtjb29yZGluYXRlMSArIDEsIGNvb3JkaW5hdGUyXTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzMztcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzNDtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzNTtcbiAgICAgICAgaWYgKGNob3Nlbkxlbmd0aCA9PSAyKSB7XG4gICAgICAgICAgc2hpcCA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFtjb29yZGluYXRlczEsIGNvb3JkaW5hdGVzMl0pO1xuICAgICAgICAgIHRoaXMudXBkYXRlVGlsZXMocGxheWVyKTtcbiAgICAgICAgfSBlbHNlIGlmIChjaG9zZW5MZW5ndGggPT0gMykge1xuICAgICAgICAgIGNvb3JkaW5hdGVzMyA9IFtjb29yZGluYXRlMSArIDIsIGNvb3JkaW5hdGUyXTtcbiAgICAgICAgICBzaGlwID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoW1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMxLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXMyLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXMzLFxuICAgICAgICAgIF0pO1xuICAgICAgICAgIHRoaXMudXBkYXRlVGlsZXMocGxheWVyKTtcbiAgICAgICAgfSBlbHNlIGlmIChjaG9zZW5MZW5ndGggPT0gNCkge1xuICAgICAgICAgIGNvb3JkaW5hdGVzMyA9IFtjb29yZGluYXRlMSArIDIsIGNvb3JkaW5hdGUyXTtcbiAgICAgICAgICBjb29yZGluYXRlczQgPSBbY29vcmRpbmF0ZTEgKyAzLCBjb29yZGluYXRlMl07XG4gICAgICAgICAgc2hpcCA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMSxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMixcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMyxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzNCxcbiAgICAgICAgICBdKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVRpbGVzKHBsYXllcik7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hvc2VuTGVuZ3RoID09IDUpIHtcbiAgICAgICAgICBjb29yZGluYXRlczMgPSBbY29vcmRpbmF0ZTEgKyAyLCBjb29yZGluYXRlMl07XG4gICAgICAgICAgY29vcmRpbmF0ZXM0ID0gW2Nvb3JkaW5hdGUxICsgMywgY29vcmRpbmF0ZTJdO1xuICAgICAgICAgIGNvb3JkaW5hdGVzNSA9IFtjb29yZGluYXRlMSArIDQsIGNvb3JkaW5hdGUyXTtcbiAgICAgICAgICBzaGlwID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoW1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMxLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXMyLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXMzLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXM0LFxuICAgICAgICAgICAgY29vcmRpbmF0ZXM1LFxuICAgICAgICAgIF0pO1xuICAgICAgICAgIHRoaXMudXBkYXRlVGlsZXMocGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShzaGlwIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2hpcExlbmd0aHNSZW1haW5pbmcuc3BsaWNlKHJhbmRvbTB0bzcsIDEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMxID0gW2Nvb3JkaW5hdGUxLCBjb29yZGluYXRlMl07XG4gICAgICAgIGxldCBjb29yZGluYXRlczIgPSBbY29vcmRpbmF0ZTEsIGNvb3JkaW5hdGUyICsgMV07XG4gICAgICAgIGxldCBjb29yZGluYXRlczM7XG4gICAgICAgIGxldCBjb29yZGluYXRlczQ7XG4gICAgICAgIGxldCBjb29yZGluYXRlczU7XG4gICAgICAgIGlmIChjaG9zZW5MZW5ndGggPT0gMikge1xuICAgICAgICAgIHNoaXAgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChbY29vcmRpbmF0ZXMxLCBjb29yZGluYXRlczJdKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVRpbGVzKHBsYXllcik7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hvc2VuTGVuZ3RoID09IDMpIHtcbiAgICAgICAgICBjb29yZGluYXRlczMgPSBbY29vcmRpbmF0ZTEsIGNvb3JkaW5hdGUyICsgMl07XG4gICAgICAgICAgc2hpcCA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMSxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMixcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMyxcbiAgICAgICAgICBdKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVRpbGVzKHBsYXllcik7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hvc2VuTGVuZ3RoID09IDQpIHtcbiAgICAgICAgICBjb29yZGluYXRlczMgPSBbY29vcmRpbmF0ZTEsIGNvb3JkaW5hdGUyICsgMl07XG4gICAgICAgICAgY29vcmRpbmF0ZXM0ID0gW2Nvb3JkaW5hdGUxLCBjb29yZGluYXRlMiArIDNdO1xuICAgICAgICAgIHNoaXAgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChbXG4gICAgICAgICAgICBjb29yZGluYXRlczEsXG4gICAgICAgICAgICBjb29yZGluYXRlczIsXG4gICAgICAgICAgICBjb29yZGluYXRlczMsXG4gICAgICAgICAgICBjb29yZGluYXRlczQsXG4gICAgICAgICAgXSk7XG4gICAgICAgICAgdGhpcy51cGRhdGVUaWxlcyhwbGF5ZXIpO1xuICAgICAgICB9IGVsc2UgaWYgKGNob3Nlbkxlbmd0aCA9PSA1KSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXMzID0gW2Nvb3JkaW5hdGUxLCBjb29yZGluYXRlMiArIDJdO1xuICAgICAgICAgIGNvb3JkaW5hdGVzNCA9IFtjb29yZGluYXRlMSwgY29vcmRpbmF0ZTIgKyAzXTtcbiAgICAgICAgICBjb29yZGluYXRlczUgPSBbY29vcmRpbmF0ZTEsIGNvb3JkaW5hdGUyICsgNF07XG4gICAgICAgICAgc2hpcCA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMSxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMixcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMyxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzNCxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzNSxcbiAgICAgICAgICBdKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVRpbGVzKHBsYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoc2hpcCBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNoaXBMZW5ndGhzUmVtYWluaW5nLnNwbGljZShyYW5kb20wdG83LCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyB0ZXN0aW5nIHpvbmVcbmxldCBnYW1lID0gbmV3IERPTU1hbmlwdWxhdG9yKCk7XG5sZXQgcGxheWVyMSA9IGdhbWUuY3JlYXRlUGxheWVyKFwicGxheWVyMVwiLCB0cnVlKTtcbmdhbWUucGxhY2VSYW5kb21TaGlwcyhwbGF5ZXIyKTtcblxuLy8gcmFuZG9tIHNoaXBzIGZvciB5b3VcbmxldCByYW5kb21CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JhbmRvbUJ1dHRvblwiKTtcbnJhbmRvbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBnYW1lLnBsYWNlUmFuZG9tU2hpcHMocGxheWVyMSk7XG59KTtcblxuLy8gdG8gZG86XG4vLyAyKSB5b3UgYW5kIHlvdXIgb3Bwb25lbnQgYXR0YWNrIHlvdXIgb3duIGJvYXJkcyEgZml4IFwieW91ciBib2FyZCB2cyBvcHBvbmVudCdzIGJvYXJkXCJcbi8vIDMpIGhpZGUgb3Bwb25lbnQncyBzaGlwcyBmcm9tIHlvdVxuLy8gNCkgeW91IG9ubHkgZ28gb25jZSBhbGwgdGhlIHNoaXBzIGFyZSBwbGFjZWQhIChjaGVjayBpZiB0aGUgY2hpbGRyZW4ubGVuZ3RoIG9mIHNlbGVjdCA9PT0gMClcbi8vIDUpIHlvdSBnbyBhZ2FpbiBpZiB5b3UgaGl0XG4vLyA2KSBvcHBvbmVudCBnb2VzIGFnYWluIGlmIGl0IGhpdHNcbi8vIDcpIGRlbGF5IGJldHdlZW4gb3Bwb25lbnQncyB0dXJuc1xuIl0sIm5hbWVzIjpbIlNoaXAiLCJHYW1lYm9hcmQiLCJjb25zdHJ1Y3RvciIsIndpZHRoIiwiaGVpZ2h0IiwiYm9hcmQiLCJjcmVhdGVHYW1lYm9hcmQiLCJpIiwicm93IiwiaiIsInB1c2giLCJwbGFjZVNoaXAiLCJjb29yZGluYXRlcyIsInNoaXAiLCJsZW5ndGgiLCJjb29yZGluYXRlMSIsInBhcnNlSW50IiwiY29vcmRpbmF0ZTIiLCJFcnJvciIsIm5laWdoYm9yQ2VsbDEiLCJuZWlnaGJvckNlbGwyIiwibmVpZ2hib3JDZWxsMyIsIm5laWdoYm9yQ2VsbDQiLCJuZWlnaGJvckNlbGxzIiwiayIsInNwbGljZSIsImwiLCJyZWNlaXZlQXR0YWNrIiwiaGl0U2hpcCIsImlzSGl0IiwicmVjZWl2ZVJhbmRvbUF0dGFjayIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImFsbFNoaXBzU3VuayIsIlBsYXllciIsIm5hbWUiLCJpc0h1bWFuIiwiZ2FtZWJvYXJkIiwiaGl0c1N1ZmZlcmVkIiwic3VuayIsImlzU3VuayIsInBsYXllcjIiLCJET01NYW5pcHVsYXRvciIsImNyZWF0ZVBsYXllciIsInBsYXllck5hbWUiLCJuZXdQbGF5ZXIiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwbGF5ZXJBcmVhIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJnYW1lYm9hcmREaXYiLCJjbGFzc0xpc3QiLCJhZGQiLCJpZCIsInRpbGUiLCJzdHlsZSIsImdyaWRDb2x1bW4iLCJncmlkUm93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInVwZGF0ZVRpbGVzIiwiYWxlcnQiLCJib2R5IiwicmVtb3ZlQ2hpbGQiLCJwbGF5ZXIiLCJkaXYiLCJmaWVsZF9jb29yZGluYXRlMSIsImZpZWxkX2Nvb3JkaW5hdGUyIiwiZmllbGRfb3JpZW50YXRpb24iLCJmaWVsZF9zaGlwTGVuZ3RoIiwic3VibWl0QnV0dG9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0YXJ0aW5nQ29vcmRpbmF0ZTEiLCJ2YWx1ZSIsInN0YXJ0aW5nQ29vcmRpbmF0ZTIiLCJjb29yZGluYXRlczEiLCJjb29yZGluYXRlczIiLCJjb29yZGluYXRlczMiLCJjb29yZGluYXRlczQiLCJjb29yZGluYXRlczUiLCJzZWxlY3RlZFZhbHVlIiwic2VsZWN0ZWRPcHRpb24iLCJjbGVhckdhbWVib2FyZCIsInBsYWNlUmFuZG9tU2hpcHMiLCJzaGlwTGVuZ3Roc1JlbWFpbmluZyIsIm9yaWVudGF0aW9ucyIsInJhbmRvbTB0bzciLCJjaG9zZW5MZW5ndGgiLCJyYW5kb20wb3IxIiwiY2hvc2VuT3JpZW50YXRpb24iLCJnYW1lIiwicGxheWVyMSIsInJhbmRvbUJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=