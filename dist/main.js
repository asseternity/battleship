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
      return "miss";
    } else if (this.board[coordinate1][coordinate2] === "miss" || this.board[coordinate1][coordinate2] === "hitShip") {
      throw new Error("Already attacked here!");
    } else {
      let hitShip = this.board[coordinate1][coordinate2];
      hitShip.isHit();
      this.board[coordinate1][coordinate2] = "hitShip";
      return "hit";
    }
  }
  receiveRandomAttack() {
    let coordinate1 = Math.floor(Math.random() * 10);
    let coordinate2 = Math.floor(Math.random() * 10);
    while (this.board[coordinate1][coordinate2] == "miss" || this.board[coordinate1][coordinate2] == "hitShip") {
      coordinate1 = Math.floor(Math.random() * 10);
      coordinate2 = Math.floor(Math.random() * 10);
    }
    return this.receiveAttack([coordinate1, coordinate2]);
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


let player1;
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
      playerArea.textContent = "Your Board";
    } else {
      playerArea.textContent = "Opponent's Board";
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
        let shipSelect = document.querySelector("#shipLength");
        if (!newPlayer.isHuman) {
          tile.addEventListener("click", () => {
            if (randomPressed || shipSelect.children.length == 0) {
              let playersTurn = newPlayer.gameboard.receiveAttack([i, j]);
              this.updateTiles(newPlayer);
              if (newPlayer.gameboard.allShipsSunk()) {
                alert("You win! Reload the page for another game.");
                document.body.removeChild(container);
              }
              if (playersTurn == "miss") {
                let computersTurn;
                while (computersTurn !== "miss") {
                  computersTurn = player1.gameboard.receiveRandomAttack();
                  this.updateTiles(player1);
                  if (player1.gameboard.allShipsSunk()) {
                    alert("You lose! Reload the page for another game.");
                    document.body.removeChild(container);
                  }
                }
              }
            } else {
              alert("Please place all your ships or hit 'Random' before attacking!");
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
        } else if (player.gameboard.board[i][j] == "miss") {
          let tile = div.querySelector(`#TileID_${i}${j}`);
          tile.textContent = "m";
        } else if (player.gameboard.board[i][j] == "hitShip") {
          let tile = div.querySelector(`#TileID_${i}${j}`);
          tile.textContent = "h";
        } else {
          let tile = div.querySelector(`#TileID_${i}${j}`);
          if (player.isHuman) {
            tile.textContent = "s";
          } else {
            tile.textContent = " ";
          }
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
player1 = game.createPlayer("player1", true);
game.placeRandomShips(player2);

// random ships for you
let randomPressed = false;
let randomButton = document.querySelector("#randomButton");
randomButton.addEventListener("click", () => {
  game.placeRandomShips(player1);
  randomPressed = true;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQzVCNEUsb0JBQW9CLENBQUNyRSxNQUFNLENBQUN1RSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzVDO01BQ0Y7SUFDRjtFQUNGO0FBQ0Y7O0FBRUE7QUFDQSxJQUFJSSxJQUFJLEdBQUcsSUFBSXhELGNBQWMsQ0FBQyxDQUFDO0FBQy9CRixPQUFPLEdBQUcwRCxJQUFJLENBQUN2RCxZQUFZLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQztBQUM1Q3VELElBQUksQ0FBQ1AsZ0JBQWdCLENBQUNsRCxPQUFPLENBQUM7O0FBRTlCO0FBQ0EsSUFBSXNCLGFBQWEsR0FBRyxLQUFLO0FBQ3pCLElBQUlvQyxZQUFZLEdBQUdwRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUM7QUFDMURtRCxZQUFZLENBQUNyQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtFQUMzQ29DLElBQUksQ0FBQ1AsZ0JBQWdCLENBQUNuRCxPQUFPLENBQUM7RUFDOUJ1QixhQUFhLEdBQUcsSUFBSTtBQUN0QixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1hcHAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3dlYi1hcHAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3dlYi1hcHAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly93ZWItYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2ViLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2ViLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYi1hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYi1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2ViLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYi1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYi1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYi1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2ViLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2ViLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5ib2FyZCA9IFtdO1xuICB9XG4gIGNyZWF0ZUdhbWVib2FyZCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaGVpZ2h0OyBpKyspIHtcbiAgICAgIGxldCByb3cgPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy53aWR0aDsgaisrKSB7XG4gICAgICAgIHJvdy5wdXNoKG51bGwpO1xuICAgICAgfVxuICAgICAgdGhpcy5ib2FyZC5wdXNoKHJvdyk7XG4gICAgfVxuICB9XG4gIHBsYWNlU2hpcChjb29yZGluYXRlcykge1xuICAgIC8vIGNyZWF0ZSBhIHNoaXAgaW5zdGFuY2UgYW5kIGFzc2lnbiBpdHMgbGVuZ3RoIGJhc2VkIG9uIGNvb3JkaW5hdGVzLmxlbmd0aFxuICAgIGxldCBzaGlwID0gbmV3IFNoaXAoY29vcmRpbmF0ZXMubGVuZ3RoKTtcbiAgICAvLyB3aGF0IGZvcm1hdCBzaG91bGQgdGhlIGNvb3JkaW5hdGVzIGJlIGluP1xuICAgIC8vIGNvb3JkaW5hdGVzID0gW1sxLCAyXSwgWzEsIDNdLCBbMSwgNF1dXG4gICAgLy8gaXRlcmF0ZSB0aHJvdWdoIHRoZSBjb29yZGluYXRlcyBhcnJheVxuICAgIC8vIGNvbmZpcm1pbmcgdGhhdCBldmVyeSBjZWxsIGlzIGZyZWVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY29vcmRpbmF0ZTEgPSBwYXJzZUludChjb29yZGluYXRlc1tpXVswXSk7XG4gICAgICBsZXQgY29vcmRpbmF0ZTIgPSBwYXJzZUludChjb29yZGluYXRlc1tpXVsxXSk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgY29vcmRpbmF0ZTEgPCAwIHx8XG4gICAgICAgIGNvb3JkaW5hdGUxID49IHRoaXMuYm9hcmQubGVuZ3RoIHx8XG4gICAgICAgIGNvb3JkaW5hdGUyIDwgMCB8fFxuICAgICAgICBjb29yZGluYXRlMSA+PSB0aGlzLmJvYXJkWzBdLmxlbmd0aFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJDb29yZGluYXRlcyBhcmUgb3V0IG9mIGJvdW5kcyFcIik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5ib2FyZFtjb29yZGluYXRlMV1bY29vcmRpbmF0ZTJdICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJUaGlzIGNlbGwgaXMgdGFrZW4hXCIpO1xuICAgICAgfVxuICAgICAgbGV0IG5laWdoYm9yQ2VsbDE7XG4gICAgICBsZXQgbmVpZ2hib3JDZWxsMjtcbiAgICAgIGxldCBuZWlnaGJvckNlbGwzO1xuICAgICAgbGV0IG5laWdoYm9yQ2VsbDQ7XG4gICAgICBpZiAoY29vcmRpbmF0ZTEgPT09IDApIHtcbiAgICAgICAgbmVpZ2hib3JDZWxsMiA9IFwidW5kZWZpbmVkXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZWlnaGJvckNlbGwyID0gdGhpcy5ib2FyZFtjb29yZGluYXRlMSAtIDFdW2Nvb3JkaW5hdGUyXTtcbiAgICAgIH1cbiAgICAgIGlmIChjb29yZGluYXRlMSA9PT0gOSkge1xuICAgICAgICBuZWlnaGJvckNlbGwxID0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5laWdoYm9yQ2VsbDEgPSB0aGlzLmJvYXJkW2Nvb3JkaW5hdGUxICsgMV1bY29vcmRpbmF0ZTJdO1xuICAgICAgfVxuICAgICAgaWYgKGNvb3JkaW5hdGUyID09PSAwKSB7XG4gICAgICAgIG5laWdoYm9yQ2VsbDQgPSBcInVuZGVmaW5lZFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmVpZ2hib3JDZWxsNCA9IHRoaXMuYm9hcmRbY29vcmRpbmF0ZTFdW2Nvb3JkaW5hdGUyIC0gMV07XG4gICAgICB9XG4gICAgICBpZiAoY29vcmRpbmF0ZTIgPT09IDkpIHtcbiAgICAgICAgbmVpZ2hib3JDZWxsMyA9IFwidW5kZWZpbmVkXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZWlnaGJvckNlbGwzID0gdGhpcy5ib2FyZFtjb29yZGluYXRlMV1bY29vcmRpbmF0ZTIgKyAxXTtcbiAgICAgIH1cbiAgICAgIGxldCBuZWlnaGJvckNlbGxzID0gW1xuICAgICAgICBuZWlnaGJvckNlbGwxLFxuICAgICAgICBuZWlnaGJvckNlbGwyLFxuICAgICAgICBuZWlnaGJvckNlbGwzLFxuICAgICAgICBuZWlnaGJvckNlbGw0LFxuICAgICAgXTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbmVpZ2hib3JDZWxscy5sZW5ndGg7IGsrKykge1xuICAgICAgICBpZiAobmVpZ2hib3JDZWxsc1trXSA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgbmVpZ2hib3JDZWxscy5zcGxpY2UoaywgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGwgPSAwOyBsIDwgbmVpZ2hib3JDZWxscy5sZW5ndGg7IGwrKykge1xuICAgICAgICBpZiAobmVpZ2hib3JDZWxsc1tsXSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJOZWlnaGJvcmluZyBjZWxscyBtdXN0IGJlIGVtcHR5IVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvb3JkaW5hdGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAvLyB3ZSBjb25maXJtZWQgdGhhdCB0aGUgcGxhY2UgaXMgdmFsaWRcbiAgICAgIC8vIG5vdyB3ZSBpdGVyYXRlIGFnYWluIGFuZCBjcmVhdGUgYSBzaGlwIGluIGV2ZXJ5IGNlbGxcbiAgICAgIGxldCBjb29yZGluYXRlMSA9IHBhcnNlSW50KGNvb3JkaW5hdGVzW2pdWzBdKTtcbiAgICAgIGxldCBjb29yZGluYXRlMiA9IHBhcnNlSW50KGNvb3JkaW5hdGVzW2pdWzFdKTtcbiAgICAgIHRoaXMuYm9hcmRbY29vcmRpbmF0ZTFdW2Nvb3JkaW5hdGUyXSA9IHNoaXA7XG4gICAgfVxuICAgIHJldHVybiBzaGlwO1xuICB9XG4gIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICBsZXQgY29vcmRpbmF0ZTEgPSBjb29yZGluYXRlc1swXTtcbiAgICBsZXQgY29vcmRpbmF0ZTIgPSBjb29yZGluYXRlc1sxXTtcbiAgICBpZiAodGhpcy5ib2FyZFtjb29yZGluYXRlMV1bY29vcmRpbmF0ZTJdID09PSBudWxsKSB7XG4gICAgICB0aGlzLmJvYXJkW2Nvb3JkaW5hdGUxXVtjb29yZGluYXRlMl0gPSBcIm1pc3NcIjtcbiAgICAgIHJldHVybiBcIm1pc3NcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpcy5ib2FyZFtjb29yZGluYXRlMV1bY29vcmRpbmF0ZTJdID09PSBcIm1pc3NcIiB8fFxuICAgICAgdGhpcy5ib2FyZFtjb29yZGluYXRlMV1bY29vcmRpbmF0ZTJdID09PSBcImhpdFNoaXBcIlxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWxyZWFkeSBhdHRhY2tlZCBoZXJlIVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGhpdFNoaXAgPSB0aGlzLmJvYXJkW2Nvb3JkaW5hdGUxXVtjb29yZGluYXRlMl07XG4gICAgICBoaXRTaGlwLmlzSGl0KCk7XG4gICAgICB0aGlzLmJvYXJkW2Nvb3JkaW5hdGUxXVtjb29yZGluYXRlMl0gPSBcImhpdFNoaXBcIjtcbiAgICAgIHJldHVybiBcImhpdFwiO1xuICAgIH1cbiAgfVxuICByZWNlaXZlUmFuZG9tQXR0YWNrKCkge1xuICAgIGxldCBjb29yZGluYXRlMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBsZXQgY29vcmRpbmF0ZTIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgd2hpbGUgKFxuICAgICAgdGhpcy5ib2FyZFtjb29yZGluYXRlMV1bY29vcmRpbmF0ZTJdID09IFwibWlzc1wiIHx8XG4gICAgICB0aGlzLmJvYXJkW2Nvb3JkaW5hdGUxXVtjb29yZGluYXRlMl0gPT0gXCJoaXRTaGlwXCJcbiAgICApIHtcbiAgICAgIGNvb3JkaW5hdGUxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgY29vcmRpbmF0ZTIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlY2VpdmVBdHRhY2soW2Nvb3JkaW5hdGUxLCBjb29yZGluYXRlMl0pO1xuICB9XG4gIGFsbFNoaXBzU3VuaygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaGVpZ2h0OyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy53aWR0aDsgaisrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdICE9PSBudWxsICYmXG4gICAgICAgICAgdGhpcy5ib2FyZFtpXVtqXSAhPT0gXCJtaXNzXCIgJiZcbiAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdICE9PSBcImhpdFNoaXBcIlxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGlzSHVtYW4pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaXNIdW1hbiA9IGlzSHVtYW47XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKDEwLCAxMCk7XG4gICAgdGhpcy5nYW1lYm9hcmQuY3JlYXRlR2FtZWJvYXJkKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICAodGhpcy5sZW5ndGggPSBsZW5ndGgpLCAodGhpcy5oaXRzU3VmZmVyZWQgPSAwKSwgKHRoaXMuc3VuayA9IGZhbHNlKTtcbiAgfVxuICBpc0hpdCgpIHtcbiAgICB0aGlzLmhpdHNTdWZmZXJlZCArPSAxO1xuICAgIHRoaXMuc3VuayA9IHRoaXMuaXNTdW5rKCk7XG4gIH1cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA+IHRoaXMuaGl0c1N1ZmZlcmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG5cbi5nYW1lYm9hcmREaXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcbn1cblxuLnRpbGUge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4jcmFuZG9tQnV0dG9uIHtcbiAgd2lkdGg6IDgwcHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkRGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XFxufVxcblxcbi50aWxlIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNyYW5kb21CdXR0b24ge1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxubGV0IHBsYXllcjE7XG5sZXQgcGxheWVyMjtcblxuY2xhc3MgRE9NTWFuaXB1bGF0b3Ige1xuICBjcmVhdGVQbGF5ZXIocGxheWVyTmFtZSwgaXNIdW1hbikge1xuICAgIGxldCBuZXdQbGF5ZXIgPSBuZXcgUGxheWVyKHBsYXllck5hbWUsIGlzSHVtYW4pO1xuXG4gICAgaWYgKG5ld1BsYXllci5pc0h1bWFuID09IHRydWUpIHtcbiAgICAgIHRoaXMucGxhY2VTaGlwKG5ld1BsYXllcik7XG4gICAgICBwbGF5ZXIyID0gdGhpcy5jcmVhdGVQbGF5ZXIoXCJwbGF5ZXIyXCIsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgbGV0IHBsYXllckFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlmIChuZXdQbGF5ZXIuaXNIdW1hbiA9PSB0cnVlKSB7XG4gICAgICBwbGF5ZXJBcmVhLnRleHRDb250ZW50ID0gXCJZb3VyIEJvYXJkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllckFyZWEudGV4dENvbnRlbnQgPSBcIk9wcG9uZW50J3MgQm9hcmRcIjtcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckFyZWEpO1xuICAgIGxldCBnYW1lYm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsYXllckFyZWEuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkRGl2KTtcbiAgICBwbGF5ZXJBcmVhLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXJBcmVhXCIpO1xuICAgIHBsYXllckFyZWEuaWQgPSBgJHtwbGF5ZXJOYW1lfWA7XG4gICAgZ2FtZWJvYXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJnYW1lYm9hcmREaXZcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdQbGF5ZXIuZ2FtZWJvYXJkLndpZHRoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmV3UGxheWVyLmdhbWVib2FyZC5oZWlnaHQ7IGorKykge1xuICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRpbGUuaWQgPSBgVGlsZUlEXyR7aX0ke2p9YDtcbiAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwidGlsZVwiKTtcbiAgICAgICAgdGlsZS5zdHlsZS5ncmlkQ29sdW1uID0gYCR7aSArIDF9YDtcbiAgICAgICAgdGlsZS5zdHlsZS5ncmlkUm93ID0gYCR7aiArIDF9YDtcbiAgICAgICAgZ2FtZWJvYXJkRGl2LmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICBsZXQgc2hpcFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hpcExlbmd0aFwiKTtcbiAgICAgICAgaWYgKCFuZXdQbGF5ZXIuaXNIdW1hbikge1xuICAgICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChyYW5kb21QcmVzc2VkIHx8IHNoaXBTZWxlY3QuY2hpbGRyZW4ubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgbGV0IHBsYXllcnNUdXJuID0gbmV3UGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtpLCBqXSk7XG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlVGlsZXMobmV3UGxheWVyKTtcbiAgICAgICAgICAgICAgaWYgKG5ld1BsYXllci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIllvdSB3aW4hIFJlbG9hZCB0aGUgcGFnZSBmb3IgYW5vdGhlciBnYW1lLlwiKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHBsYXllcnNUdXJuID09IFwibWlzc1wiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbXB1dGVyc1R1cm47XG4gICAgICAgICAgICAgICAgd2hpbGUgKGNvbXB1dGVyc1R1cm4gIT09IFwibWlzc1wiKSB7XG4gICAgICAgICAgICAgICAgICBjb21wdXRlcnNUdXJuID0gcGxheWVyMS5nYW1lYm9hcmQucmVjZWl2ZVJhbmRvbUF0dGFjaygpO1xuICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUaWxlcyhwbGF5ZXIxKTtcbiAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdSBsb3NlISBSZWxvYWQgdGhlIHBhZ2UgZm9yIGFub3RoZXIgZ2FtZS5cIik7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICAgIFwiUGxlYXNlIHBsYWNlIGFsbCB5b3VyIHNoaXBzIG9yIGhpdCAnUmFuZG9tJyBiZWZvcmUgYXR0YWNraW5nIVwiLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXdQbGF5ZXI7XG4gIH1cbiAgdXBkYXRlVGlsZXMocGxheWVyKSB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3BsYXllci5uYW1lfWApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyLmdhbWVib2FyZC5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW2ldW2pdID09IG51bGwpIHtcbiAgICAgICAgICBsZXQgdGlsZSA9IGRpdi5xdWVyeVNlbGVjdG9yKGAjVGlsZUlEXyR7aX0ke2p9YCk7XG4gICAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiIFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllci5nYW1lYm9hcmQuYm9hcmRbaV1bal0gPT0gXCJtaXNzXCIpIHtcbiAgICAgICAgICBsZXQgdGlsZSA9IGRpdi5xdWVyeVNlbGVjdG9yKGAjVGlsZUlEXyR7aX0ke2p9YCk7XG4gICAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwibVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllci5nYW1lYm9hcmQuYm9hcmRbaV1bal0gPT0gXCJoaXRTaGlwXCIpIHtcbiAgICAgICAgICBsZXQgdGlsZSA9IGRpdi5xdWVyeVNlbGVjdG9yKGAjVGlsZUlEXyR7aX0ke2p9YCk7XG4gICAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiaFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCB0aWxlID0gZGl2LnF1ZXJ5U2VsZWN0b3IoYCNUaWxlSURfJHtpfSR7an1gKTtcbiAgICAgICAgICBpZiAocGxheWVyLmlzSHVtYW4pIHtcbiAgICAgICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcInNcIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiIFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBwbGFjZVNoaXAocGxheWVyKSB7XG4gICAgbGV0IGZpZWxkX2Nvb3JkaW5hdGUxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb29yZGluYXRlMVwiKTtcbiAgICBsZXQgZmllbGRfY29vcmRpbmF0ZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nvb3JkaW5hdGUyXCIpO1xuICAgIGxldCBmaWVsZF9vcmllbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3JpZW50YXRpb25cIik7XG4gICAgbGV0IGZpZWxkX3NoaXBMZW5ndGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NoaXBMZW5ndGhcIik7XG4gICAgbGV0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKTtcblxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0IHN0YXJ0aW5nQ29vcmRpbmF0ZTEgPSBwYXJzZUludChmaWVsZF9jb29yZGluYXRlMS52YWx1ZSkgLSAxO1xuICAgICAgbGV0IHN0YXJ0aW5nQ29vcmRpbmF0ZTIgPSBwYXJzZUludChmaWVsZF9jb29yZGluYXRlMi52YWx1ZSkgLSAxO1xuICAgICAgbGV0IHNoaXA7XG4gICAgICBpZiAoZmllbGRfb3JpZW50YXRpb24udmFsdWUgPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzMSA9IFtcbiAgICAgICAgICBwYXJzZUludChzdGFydGluZ0Nvb3JkaW5hdGUxKSxcbiAgICAgICAgICBwYXJzZUludChzdGFydGluZ0Nvb3JkaW5hdGUyKSxcbiAgICAgICAgXTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzMiA9IFtcbiAgICAgICAgICBwYXJzZUludChzdGFydGluZ0Nvb3JkaW5hdGUxKSArIDEsXG4gICAgICAgICAgcGFyc2VJbnQoc3RhcnRpbmdDb29yZGluYXRlMiksXG4gICAgICAgIF07XG4gICAgICAgIGxldCBjb29yZGluYXRlczM7XG4gICAgICAgIGxldCBjb29yZGluYXRlczQ7XG4gICAgICAgIGxldCBjb29yZGluYXRlczU7XG4gICAgICAgIGlmIChmaWVsZF9zaGlwTGVuZ3RoLnZhbHVlID09IDIpIHtcbiAgICAgICAgICBzaGlwID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoW2Nvb3JkaW5hdGVzMSwgY29vcmRpbmF0ZXMyXSk7XG4gICAgICAgICAgdGhpcy51cGRhdGVUaWxlcyhwbGF5ZXIpO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkX3NoaXBMZW5ndGgudmFsdWUgPT0gMykge1xuICAgICAgICAgIGNvb3JkaW5hdGVzMyA9IFtcbiAgICAgICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ29vcmRpbmF0ZTEpICsgMixcbiAgICAgICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ29vcmRpbmF0ZTIpLFxuICAgICAgICAgIF07XG4gICAgICAgICAgc2hpcCA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMSxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMixcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMyxcbiAgICAgICAgICBdKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVRpbGVzKHBsYXllcik7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGRfc2hpcExlbmd0aC52YWx1ZSA9PSA0KSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXMzID0gW1xuICAgICAgICAgICAgcGFyc2VJbnQoc3RhcnRpbmdDb29yZGluYXRlMSkgKyAyLFxuICAgICAgICAgICAgcGFyc2VJbnQoc3RhcnRpbmdDb29yZGluYXRlMiksXG4gICAgICAgICAgXTtcbiAgICAgICAgICBjb29yZGluYXRlczQgPSBbXG4gICAgICAgICAgICBwYXJzZUludChzdGFydGluZ0Nvb3JkaW5hdGUxKSArIDMsXG4gICAgICAgICAgICBwYXJzZUludChzdGFydGluZ0Nvb3JkaW5hdGUyKSxcbiAgICAgICAgICBdO1xuICAgICAgICAgIHNoaXAgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChbXG4gICAgICAgICAgICBjb29yZGluYXRlczEsXG4gICAgICAgICAgICBjb29yZGluYXRlczIsXG4gICAgICAgICAgICBjb29yZGluYXRlczMsXG4gICAgICAgICAgICBjb29yZGluYXRlczQsXG4gICAgICAgICAgXSk7XG4gICAgICAgICAgdGhpcy51cGRhdGVUaWxlcyhwbGF5ZXIpO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkX3NoaXBMZW5ndGgudmFsdWUgPT0gNSkge1xuICAgICAgICAgIGNvb3JkaW5hdGVzMyA9IFtcbiAgICAgICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ29vcmRpbmF0ZTEpICsgMixcbiAgICAgICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ29vcmRpbmF0ZTIpLFxuICAgICAgICAgIF07XG4gICAgICAgICAgY29vcmRpbmF0ZXM0ID0gW1xuICAgICAgICAgICAgcGFyc2VJbnQoc3RhcnRpbmdDb29yZGluYXRlMSkgKyAzLFxuICAgICAgICAgICAgcGFyc2VJbnQoc3RhcnRpbmdDb29yZGluYXRlMiksXG4gICAgICAgICAgXTtcbiAgICAgICAgICBjb29yZGluYXRlczUgPSBbXG4gICAgICAgICAgICBwYXJzZUludChzdGFydGluZ0Nvb3JkaW5hdGUxKSArIDQsXG4gICAgICAgICAgICBwYXJzZUludChzdGFydGluZ0Nvb3JkaW5hdGUyKSxcbiAgICAgICAgICBdO1xuICAgICAgICAgIHNoaXAgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChbXG4gICAgICAgICAgICBjb29yZGluYXRlczEsXG4gICAgICAgICAgICBjb29yZGluYXRlczIsXG4gICAgICAgICAgICBjb29yZGluYXRlczMsXG4gICAgICAgICAgICBjb29yZGluYXRlczQsXG4gICAgICAgICAgICBjb29yZGluYXRlczUsXG4gICAgICAgICAgXSk7XG4gICAgICAgICAgdGhpcy51cGRhdGVUaWxlcyhwbGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygc2hpcCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGxldCBzZWxlY3RlZFZhbHVlID0gZmllbGRfc2hpcExlbmd0aC52YWx1ZTtcbiAgICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ29wdGlvblt2YWx1ZT1cIicgKyBzZWxlY3RlZFZhbHVlICsgJ1wiXScsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBmaWVsZF9zaGlwTGVuZ3RoLnJlbW92ZUNoaWxkKHNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlRoZSB0aWxlcyB5b3Ugc2VsZWN0ZWQgYXJlIG5vdCBlbXB0eSFcIik7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gKioqXG4gICAgICAvLyBzYW1lIGJ1dCB2ZXJ0aWNhbFxuICAgICAgLy8gKioqXG4gICAgICBlbHNlIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzMSA9IFtcbiAgICAgICAgICBwYXJzZUludChzdGFydGluZ0Nvb3JkaW5hdGUxKSxcbiAgICAgICAgICBwYXJzZUludChzdGFydGluZ0Nvb3JkaW5hdGUyKSxcbiAgICAgICAgXTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzMiA9IFtcbiAgICAgICAgICBwYXJzZUludChzdGFydGluZ0Nvb3JkaW5hdGUxKSxcbiAgICAgICAgICBwYXJzZUludChzdGFydGluZ0Nvb3JkaW5hdGUyKSArIDEsXG4gICAgICAgIF07XG4gICAgICAgIGxldCBjb29yZGluYXRlczM7XG4gICAgICAgIGxldCBjb29yZGluYXRlczQ7XG4gICAgICAgIGxldCBjb29yZGluYXRlczU7XG4gICAgICAgIGlmIChmaWVsZF9zaGlwTGVuZ3RoLnZhbHVlID09IDIpIHtcbiAgICAgICAgICBzaGlwID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoW2Nvb3JkaW5hdGVzMSwgY29vcmRpbmF0ZXMyXSk7XG4gICAgICAgICAgdGhpcy51cGRhdGVUaWxlcyhwbGF5ZXIpO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkX3NoaXBMZW5ndGgudmFsdWUgPT0gMykge1xuICAgICAgICAgIGNvb3JkaW5hdGVzMyA9IFtcbiAgICAgICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ29vcmRpbmF0ZTEpLFxuICAgICAgICAgICAgcGFyc2VJbnQoc3RhcnRpbmdDb29yZGluYXRlMikgKyAyLFxuICAgICAgICAgIF07XG4gICAgICAgICAgc2hpcCA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMSxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMixcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMyxcbiAgICAgICAgICBdKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVRpbGVzKHBsYXllcik7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGRfc2hpcExlbmd0aC52YWx1ZSA9PSA0KSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXMzID0gW1xuICAgICAgICAgICAgcGFyc2VJbnQoc3RhcnRpbmdDb29yZGluYXRlMSksXG4gICAgICAgICAgICBwYXJzZUludChzdGFydGluZ0Nvb3JkaW5hdGUyKSArIDIsXG4gICAgICAgICAgXTtcbiAgICAgICAgICBjb29yZGluYXRlczQgPSBbXG4gICAgICAgICAgICBwYXJzZUludChzdGFydGluZ0Nvb3JkaW5hdGUxKSxcbiAgICAgICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ29vcmRpbmF0ZTIpICsgMyxcbiAgICAgICAgICBdO1xuICAgICAgICAgIHNoaXAgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChbXG4gICAgICAgICAgICBjb29yZGluYXRlczEsXG4gICAgICAgICAgICBjb29yZGluYXRlczIsXG4gICAgICAgICAgICBjb29yZGluYXRlczMsXG4gICAgICAgICAgICBjb29yZGluYXRlczQsXG4gICAgICAgICAgXSk7XG4gICAgICAgICAgdGhpcy51cGRhdGVUaWxlcyhwbGF5ZXIpO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkX3NoaXBMZW5ndGgudmFsdWUgPT0gNSkge1xuICAgICAgICAgIGNvb3JkaW5hdGVzMyA9IFtcbiAgICAgICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ29vcmRpbmF0ZTEpLFxuICAgICAgICAgICAgcGFyc2VJbnQoc3RhcnRpbmdDb29yZGluYXRlMikgKyAyLFxuICAgICAgICAgIF07XG4gICAgICAgICAgY29vcmRpbmF0ZXM0ID0gW1xuICAgICAgICAgICAgcGFyc2VJbnQoc3RhcnRpbmdDb29yZGluYXRlMSksXG4gICAgICAgICAgICBwYXJzZUludChzdGFydGluZ0Nvb3JkaW5hdGUyKSArIDMsXG4gICAgICAgICAgXTtcbiAgICAgICAgICBjb29yZGluYXRlczUgPSBbXG4gICAgICAgICAgICBwYXJzZUludChzdGFydGluZ0Nvb3JkaW5hdGUxKSxcbiAgICAgICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ29vcmRpbmF0ZTIpICsgNCxcbiAgICAgICAgICBdO1xuICAgICAgICAgIHNoaXAgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChbXG4gICAgICAgICAgICBjb29yZGluYXRlczEsXG4gICAgICAgICAgICBjb29yZGluYXRlczIsXG4gICAgICAgICAgICBjb29yZGluYXRlczMsXG4gICAgICAgICAgICBjb29yZGluYXRlczQsXG4gICAgICAgICAgICBjb29yZGluYXRlczUsXG4gICAgICAgICAgXSk7XG4gICAgICAgICAgdGhpcy51cGRhdGVUaWxlcyhwbGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygc2hpcCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGxldCBzZWxlY3RlZFZhbHVlID0gZmllbGRfc2hpcExlbmd0aC52YWx1ZTtcbiAgICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ29wdGlvblt2YWx1ZT1cIicgKyBzZWxlY3RlZFZhbHVlICsgJ1wiXScsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBmaWVsZF9zaGlwTGVuZ3RoLnJlbW92ZUNoaWxkKHNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlRoZSB0aWxlcyB5b3Ugc2VsZWN0ZWQgYXJlIG5vdCBlbXB0eSFcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBjbGVhckdhbWVib2FyZChwbGF5ZXIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllci5nYW1lYm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyLmdhbWVib2FyZC5ib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5ib2FyZFtpXVtqXSAhPT0gbnVsbCkge1xuICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQuYm9hcmRbaV1bal0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudXBkYXRlVGlsZXMocGxheWVyKTtcbiAgfVxuICBwbGFjZVJhbmRvbVNoaXBzKHBsYXllcikge1xuICAgIGxldCBzaGlwTGVuZ3Roc1JlbWFpbmluZyA9IFs1LCA0LCA0LCAzLCAzLCAzLCAyLCAyXTtcbiAgICBsZXQgb3JpZW50YXRpb25zID0gW1wiaG9yaXpvbnRhbFwiLCBcInZlcnRpY2FsXCJdO1xuXG4gICAgdGhpcy5jbGVhckdhbWVib2FyZChwbGF5ZXIpO1xuXG4gICAgd2hpbGUgKHNoaXBMZW5ndGhzUmVtYWluaW5nLmxlbmd0aCAhPT0gMCkge1xuICAgICAgbGV0IHJhbmRvbTB0bzcgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTtcbiAgICAgIGxldCBjaG9zZW5MZW5ndGggPSBzaGlwTGVuZ3Roc1JlbWFpbmluZ1tyYW5kb20wdG83XTtcbiAgICAgIGxldCByYW5kb20wb3IxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICBsZXQgY2hvc2VuT3JpZW50YXRpb24gPSBvcmllbnRhdGlvbnNbcmFuZG9tMG9yMV07XG5cbiAgICAgIGxldCBjb29yZGluYXRlMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGxldCBjb29yZGluYXRlMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgICAgbGV0IHNoaXA7XG5cbiAgICAgIGlmIChjaG9zZW5PcmllbnRhdGlvbiA9PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMxID0gW2Nvb3JkaW5hdGUxLCBjb29yZGluYXRlMl07XG4gICAgICAgIGxldCBjb29yZGluYXRlczIgPSBbY29vcmRpbmF0ZTEgKyAxLCBjb29yZGluYXRlMl07XG4gICAgICAgIGxldCBjb29yZGluYXRlczM7XG4gICAgICAgIGxldCBjb29yZGluYXRlczQ7XG4gICAgICAgIGxldCBjb29yZGluYXRlczU7XG4gICAgICAgIGlmIChjaG9zZW5MZW5ndGggPT0gMikge1xuICAgICAgICAgIHNoaXAgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChbY29vcmRpbmF0ZXMxLCBjb29yZGluYXRlczJdKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVRpbGVzKHBsYXllcik7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hvc2VuTGVuZ3RoID09IDMpIHtcbiAgICAgICAgICBjb29yZGluYXRlczMgPSBbY29vcmRpbmF0ZTEgKyAyLCBjb29yZGluYXRlMl07XG4gICAgICAgICAgc2hpcCA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMSxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMixcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMyxcbiAgICAgICAgICBdKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVRpbGVzKHBsYXllcik7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hvc2VuTGVuZ3RoID09IDQpIHtcbiAgICAgICAgICBjb29yZGluYXRlczMgPSBbY29vcmRpbmF0ZTEgKyAyLCBjb29yZGluYXRlMl07XG4gICAgICAgICAgY29vcmRpbmF0ZXM0ID0gW2Nvb3JkaW5hdGUxICsgMywgY29vcmRpbmF0ZTJdO1xuICAgICAgICAgIHNoaXAgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChbXG4gICAgICAgICAgICBjb29yZGluYXRlczEsXG4gICAgICAgICAgICBjb29yZGluYXRlczIsXG4gICAgICAgICAgICBjb29yZGluYXRlczMsXG4gICAgICAgICAgICBjb29yZGluYXRlczQsXG4gICAgICAgICAgXSk7XG4gICAgICAgICAgdGhpcy51cGRhdGVUaWxlcyhwbGF5ZXIpO1xuICAgICAgICB9IGVsc2UgaWYgKGNob3Nlbkxlbmd0aCA9PSA1KSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXMzID0gW2Nvb3JkaW5hdGUxICsgMiwgY29vcmRpbmF0ZTJdO1xuICAgICAgICAgIGNvb3JkaW5hdGVzNCA9IFtjb29yZGluYXRlMSArIDMsIGNvb3JkaW5hdGUyXTtcbiAgICAgICAgICBjb29yZGluYXRlczUgPSBbY29vcmRpbmF0ZTEgKyA0LCBjb29yZGluYXRlMl07XG4gICAgICAgICAgc2hpcCA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMSxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMixcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzMyxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzNCxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzNSxcbiAgICAgICAgICBdKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVRpbGVzKHBsYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoc2hpcCBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNoaXBMZW5ndGhzUmVtYWluaW5nLnNwbGljZShyYW5kb20wdG83LCAxKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzMSA9IFtjb29yZGluYXRlMSwgY29vcmRpbmF0ZTJdO1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMyID0gW2Nvb3JkaW5hdGUxLCBjb29yZGluYXRlMiArIDFdO1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMzO1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXM0O1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXM1O1xuICAgICAgICBpZiAoY2hvc2VuTGVuZ3RoID09IDIpIHtcbiAgICAgICAgICBzaGlwID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoW2Nvb3JkaW5hdGVzMSwgY29vcmRpbmF0ZXMyXSk7XG4gICAgICAgICAgdGhpcy51cGRhdGVUaWxlcyhwbGF5ZXIpO1xuICAgICAgICB9IGVsc2UgaWYgKGNob3Nlbkxlbmd0aCA9PSAzKSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXMzID0gW2Nvb3JkaW5hdGUxLCBjb29yZGluYXRlMiArIDJdO1xuICAgICAgICAgIHNoaXAgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChbXG4gICAgICAgICAgICBjb29yZGluYXRlczEsXG4gICAgICAgICAgICBjb29yZGluYXRlczIsXG4gICAgICAgICAgICBjb29yZGluYXRlczMsXG4gICAgICAgICAgXSk7XG4gICAgICAgICAgdGhpcy51cGRhdGVUaWxlcyhwbGF5ZXIpO1xuICAgICAgICB9IGVsc2UgaWYgKGNob3Nlbkxlbmd0aCA9PSA0KSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXMzID0gW2Nvb3JkaW5hdGUxLCBjb29yZGluYXRlMiArIDJdO1xuICAgICAgICAgIGNvb3JkaW5hdGVzNCA9IFtjb29yZGluYXRlMSwgY29vcmRpbmF0ZTIgKyAzXTtcbiAgICAgICAgICBzaGlwID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoW1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMxLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXMyLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXMzLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXM0LFxuICAgICAgICAgIF0pO1xuICAgICAgICAgIHRoaXMudXBkYXRlVGlsZXMocGxheWVyKTtcbiAgICAgICAgfSBlbHNlIGlmIChjaG9zZW5MZW5ndGggPT0gNSkge1xuICAgICAgICAgIGNvb3JkaW5hdGVzMyA9IFtjb29yZGluYXRlMSwgY29vcmRpbmF0ZTIgKyAyXTtcbiAgICAgICAgICBjb29yZGluYXRlczQgPSBbY29vcmRpbmF0ZTEsIGNvb3JkaW5hdGUyICsgM107XG4gICAgICAgICAgY29vcmRpbmF0ZXM1ID0gW2Nvb3JkaW5hdGUxLCBjb29yZGluYXRlMiArIDRdO1xuICAgICAgICAgIHNoaXAgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChbXG4gICAgICAgICAgICBjb29yZGluYXRlczEsXG4gICAgICAgICAgICBjb29yZGluYXRlczIsXG4gICAgICAgICAgICBjb29yZGluYXRlczMsXG4gICAgICAgICAgICBjb29yZGluYXRlczQsXG4gICAgICAgICAgICBjb29yZGluYXRlczUsXG4gICAgICAgICAgXSk7XG4gICAgICAgICAgdGhpcy51cGRhdGVUaWxlcyhwbGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKHNoaXAgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzaGlwTGVuZ3Roc1JlbWFpbmluZy5zcGxpY2UocmFuZG9tMHRvNywgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gdGVzdGluZyB6b25lXG5sZXQgZ2FtZSA9IG5ldyBET01NYW5pcHVsYXRvcigpO1xucGxheWVyMSA9IGdhbWUuY3JlYXRlUGxheWVyKFwicGxheWVyMVwiLCB0cnVlKTtcbmdhbWUucGxhY2VSYW5kb21TaGlwcyhwbGF5ZXIyKTtcblxuLy8gcmFuZG9tIHNoaXBzIGZvciB5b3VcbmxldCByYW5kb21QcmVzc2VkID0gZmFsc2U7XG5sZXQgcmFuZG9tQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyYW5kb21CdXR0b25cIik7XG5yYW5kb21CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZ2FtZS5wbGFjZVJhbmRvbVNoaXBzKHBsYXllcjEpO1xuICByYW5kb21QcmVzc2VkID0gdHJ1ZTtcbn0pO1xuIl0sIm5hbWVzIjpbIlNoaXAiLCJHYW1lYm9hcmQiLCJjb25zdHJ1Y3RvciIsIndpZHRoIiwiaGVpZ2h0IiwiYm9hcmQiLCJjcmVhdGVHYW1lYm9hcmQiLCJpIiwicm93IiwiaiIsInB1c2giLCJwbGFjZVNoaXAiLCJjb29yZGluYXRlcyIsInNoaXAiLCJsZW5ndGgiLCJjb29yZGluYXRlMSIsInBhcnNlSW50IiwiY29vcmRpbmF0ZTIiLCJFcnJvciIsIm5laWdoYm9yQ2VsbDEiLCJuZWlnaGJvckNlbGwyIiwibmVpZ2hib3JDZWxsMyIsIm5laWdoYm9yQ2VsbDQiLCJuZWlnaGJvckNlbGxzIiwiayIsInNwbGljZSIsImwiLCJyZWNlaXZlQXR0YWNrIiwiaGl0U2hpcCIsImlzSGl0IiwicmVjZWl2ZVJhbmRvbUF0dGFjayIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImFsbFNoaXBzU3VuayIsIlBsYXllciIsIm5hbWUiLCJpc0h1bWFuIiwiZ2FtZWJvYXJkIiwiaGl0c1N1ZmZlcmVkIiwic3VuayIsImlzU3VuayIsInBsYXllcjEiLCJwbGF5ZXIyIiwiRE9NTWFuaXB1bGF0b3IiLCJjcmVhdGVQbGF5ZXIiLCJwbGF5ZXJOYW1lIiwibmV3UGxheWVyIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxheWVyQXJlYSIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwiZ2FtZWJvYXJkRGl2IiwiY2xhc3NMaXN0IiwiYWRkIiwiaWQiLCJ0aWxlIiwic3R5bGUiLCJncmlkQ29sdW1uIiwiZ3JpZFJvdyIsInNoaXBTZWxlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmFuZG9tUHJlc3NlZCIsImNoaWxkcmVuIiwicGxheWVyc1R1cm4iLCJ1cGRhdGVUaWxlcyIsImFsZXJ0IiwiYm9keSIsInJlbW92ZUNoaWxkIiwiY29tcHV0ZXJzVHVybiIsInBsYXllciIsImRpdiIsImZpZWxkX2Nvb3JkaW5hdGUxIiwiZmllbGRfY29vcmRpbmF0ZTIiLCJmaWVsZF9vcmllbnRhdGlvbiIsImZpZWxkX3NoaXBMZW5ndGgiLCJzdWJtaXRCdXR0b24iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RhcnRpbmdDb29yZGluYXRlMSIsInZhbHVlIiwic3RhcnRpbmdDb29yZGluYXRlMiIsImNvb3JkaW5hdGVzMSIsImNvb3JkaW5hdGVzMiIsImNvb3JkaW5hdGVzMyIsImNvb3JkaW5hdGVzNCIsImNvb3JkaW5hdGVzNSIsInNlbGVjdGVkVmFsdWUiLCJzZWxlY3RlZE9wdGlvbiIsImNsZWFyR2FtZWJvYXJkIiwicGxhY2VSYW5kb21TaGlwcyIsInNoaXBMZW5ndGhzUmVtYWluaW5nIiwib3JpZW50YXRpb25zIiwicmFuZG9tMHRvNyIsImNob3Nlbkxlbmd0aCIsInJhbmRvbTBvcjEiLCJjaG9zZW5PcmllbnRhdGlvbiIsImdhbWUiLCJyYW5kb21CdXR0b24iXSwic291cmNlUm9vdCI6IiJ9