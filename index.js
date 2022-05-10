/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --font-color: #252525;\r\n  --color-bgrnd: #043e57;\r\n  --button-static-bgrnd: rgba(255,255,255,0.2);\r\n  --button-active-bgrnd: rgba(255,255,255,0.12);\r\n  --button-dark-bgrnd: rgba(0,0,0,0.25);\r\n  --button-color: #fff;\r\n  --subtitle-color: rgba(255,255,255,0.5);\r\n  --element-static-color: rgba(0,0,0,0.4);\r\n  --element-active-color: #06f7e4;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  max-width: 1400px;\r\n  margin: 0 auto;\r\n  padding: 20px;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  font-size: 18px;\r\n  color: var(--font-color);\r\n}\r\n\r\nh1 {\r\n  color: var(--color-bgrnd);\r\n}\r\n\r\nkbd {\r\n  color: var(--color-bgrnd);\r\n  font-size: 22px;\r\n  font-weight: 700;\r\n  letter-spacing: -1.5px;\r\n}\r\n\r\n.img {\r\n  width: auto;\r\n  height: 20px;\r\n}\r\n\r\n.textarea {\r\n  width: 100%;\r\n  height: 100px;\r\n  margin: 30px 0;\r\n  padding: 10px;\r\n}\r\n\r\n.keyboard {\r\n  width: 100%;\r\n  padding: 15px 25px;\r\n  background-color: var(--color-bgrnd);\r\n  user-select: none;\r\n  transition: 0.3s;\r\n  -webkit-transition: 0.3s;\r\n  -moz-transition: 0.3s;\r\n  -ms-transition: 0.3s;\r\n  -o-transition: 0.3s;\r\n}\r\n\r\n.keyboard-row {\r\n  display: grid;\r\n  margin: 10px 0;\r\n  height: 50px;\r\n  gap: 10px;\r\n}\r\n\r\n.keyboard-keys {\r\n  text-align: center;\r\n}\r\n\r\n.keyboard-key {\r\n  display: inline-flex;\r\n  position: relative;\r\n  align-items: center;\r\n  justify-content: center;\r\n  vertical-align: top;\r\n  border-radius: 4px;\r\n  font-size: 14px;\r\n  -webkit-border-radius: 4px;\r\n  -moz-border-radius: 4px;\r\n  -ms-border-radius: 4px;\r\n  -o-border-radius: 4px;\r\n  border: 0;\r\n  color: var( --button-color);\r\n  background-color: var(--button-static-bgrnd);\r\n  outline: none;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n  -webkit-transition: 0.3s;\r\n  -moz-transition: 0.3s;\r\n  -ms-transition: 0.3s;\r\n  -o-transition: 0.3s;\r\n}\r\n\r\n.keyboard-key-wide {\r\n  width: 80px;\r\n}\r\n\r\n.keyboard-key-middle-wide {\r\n  width: 120px;\r\n}\r\n\r\n.keyboard-key-shift-wide {\r\n  width: 172px;\r\n}\r\n\r\n.keyboard-key-extra-wide {\r\n  width: 588px;\r\n}\r\n\r\n.keyboard-key-dark {\r\n  background-color: var(--button-dark-bgrnd);\r\n}\r\n\r\n.subtitle {\r\n  position: absolute;\r\n  top: 5px;\r\n  left: 5px;\r\n  font-size: 12px;\r\n  color: var(--subtitle-color);\r\n  transition: 0.3s;\r\n  -webkit-transition: 0.3s;\r\n  -moz-transition: 0.3s;\r\n  -ms-transition: 0.3s;\r\n  -o-transition: 0.3s;\r\n}\r\n\r\n.keyboard-key-activatable::after {\r\n  content: '';\r\n  top: 5px;\r\n  right: 5px;\r\n  position: absolute;\r\n  width: 8px;\r\n  height: 8px;\r\n  border-radius: 50%;\r\n  -webkit-border-radius: 50%;\r\n  -moz-border-radius: 50%;\r\n  -ms-border-radius: 50%;\r\n  -o-border-radius: 50%;\r\n  background-color: var(--element-static-color);\r\n}\r\n\r\n.keyboard-key:active {\r\n  background-color: var(--element-active-color);\r\n  border-radius: 10px;\r\n  -webkit-border-radius: 10px;\r\n  -moz-border-radius: 10px;\r\n  -ms-border-radius: 10px;\r\n  -o-border-radius: 10px;\r\n}\r\n\r\n.keyboard-key-active::after {\r\n  background-color: var(--element-active-color);\r\n}\r\n\r\n.keyboard-btn-active {\r\n  background-color: var(--element-active-color);\r\n  border-radius: 10px;\r\n  -webkit-border-radius: 10px;\r\n  -moz-border-radius: 10px;\r\n  -ms-border-radius: 10px;\r\n  -o-border-radius: 10px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,4CAA4C;EAC5C,6CAA6C;EAC7C,qCAAqC;EACrC,oBAAoB;EACpB,uCAAuC;EACvC,uCAAuC;EACvC,+BAA+B;AACjC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,aAAa;EACb,gDAAgD;EAChD,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,aAAa;EACb,cAAc;EACd,aAAa;AACf;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,oCAAoC;EACpC,iBAAiB;EACjB,gBAAgB;EAChB,wBAAwB;EACxB,qBAAqB;EACrB,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,0BAA0B;EAC1B,uBAAuB;EACvB,sBAAsB;EACtB,qBAAqB;EACrB,SAAS;EACT,2BAA2B;EAC3B,4CAA4C;EAC5C,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,wBAAwB;EACxB,qBAAqB;EACrB,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,eAAe;EACf,4BAA4B;EAC5B,gBAAgB;EAChB,wBAAwB;EACxB,qBAAqB;EACrB,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,QAAQ;EACR,UAAU;EACV,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,0BAA0B;EAC1B,uBAAuB;EACvB,sBAAsB;EACtB,qBAAqB;EACrB,6CAA6C;AAC/C;;AAEA;EACE,6CAA6C;EAC7C,mBAAmB;EACnB,2BAA2B;EAC3B,wBAAwB;EACxB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,6CAA6C;EAC7C,mBAAmB;EACnB,2BAA2B;EAC3B,wBAAwB;EACxB,uBAAuB;EACvB,sBAAsB;AACxB","sourcesContent":[":root {\r\n  --font-color: #252525;\r\n  --color-bgrnd: #043e57;\r\n  --button-static-bgrnd: rgba(255,255,255,0.2);\r\n  --button-active-bgrnd: rgba(255,255,255,0.12);\r\n  --button-dark-bgrnd: rgba(0,0,0,0.25);\r\n  --button-color: #fff;\r\n  --subtitle-color: rgba(255,255,255,0.5);\r\n  --element-static-color: rgba(0,0,0,0.4);\r\n  --element-active-color: #06f7e4;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  max-width: 1400px;\r\n  margin: 0 auto;\r\n  padding: 20px;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  font-size: 18px;\r\n  color: var(--font-color);\r\n}\r\n\r\nh1 {\r\n  color: var(--color-bgrnd);\r\n}\r\n\r\nkbd {\r\n  color: var(--color-bgrnd);\r\n  font-size: 22px;\r\n  font-weight: 700;\r\n  letter-spacing: -1.5px;\r\n}\r\n\r\n.img {\r\n  width: auto;\r\n  height: 20px;\r\n}\r\n\r\n.textarea {\r\n  width: 100%;\r\n  height: 100px;\r\n  margin: 30px 0;\r\n  padding: 10px;\r\n}\r\n\r\n.keyboard {\r\n  width: 100%;\r\n  padding: 15px 25px;\r\n  background-color: var(--color-bgrnd);\r\n  user-select: none;\r\n  transition: 0.3s;\r\n  -webkit-transition: 0.3s;\r\n  -moz-transition: 0.3s;\r\n  -ms-transition: 0.3s;\r\n  -o-transition: 0.3s;\r\n}\r\n\r\n.keyboard-row {\r\n  display: grid;\r\n  margin: 10px 0;\r\n  height: 50px;\r\n  gap: 10px;\r\n}\r\n\r\n.keyboard-keys {\r\n  text-align: center;\r\n}\r\n\r\n.keyboard-key {\r\n  display: inline-flex;\r\n  position: relative;\r\n  align-items: center;\r\n  justify-content: center;\r\n  vertical-align: top;\r\n  border-radius: 4px;\r\n  font-size: 14px;\r\n  -webkit-border-radius: 4px;\r\n  -moz-border-radius: 4px;\r\n  -ms-border-radius: 4px;\r\n  -o-border-radius: 4px;\r\n  border: 0;\r\n  color: var( --button-color);\r\n  background-color: var(--button-static-bgrnd);\r\n  outline: none;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n  -webkit-transition: 0.3s;\r\n  -moz-transition: 0.3s;\r\n  -ms-transition: 0.3s;\r\n  -o-transition: 0.3s;\r\n}\r\n\r\n.keyboard-key-wide {\r\n  width: 80px;\r\n}\r\n\r\n.keyboard-key-middle-wide {\r\n  width: 120px;\r\n}\r\n\r\n.keyboard-key-shift-wide {\r\n  width: 172px;\r\n}\r\n\r\n.keyboard-key-extra-wide {\r\n  width: 588px;\r\n}\r\n\r\n.keyboard-key-dark {\r\n  background-color: var(--button-dark-bgrnd);\r\n}\r\n\r\n.subtitle {\r\n  position: absolute;\r\n  top: 5px;\r\n  left: 5px;\r\n  font-size: 12px;\r\n  color: var(--subtitle-color);\r\n  transition: 0.3s;\r\n  -webkit-transition: 0.3s;\r\n  -moz-transition: 0.3s;\r\n  -ms-transition: 0.3s;\r\n  -o-transition: 0.3s;\r\n}\r\n\r\n.keyboard-key-activatable::after {\r\n  content: '';\r\n  top: 5px;\r\n  right: 5px;\r\n  position: absolute;\r\n  width: 8px;\r\n  height: 8px;\r\n  border-radius: 50%;\r\n  -webkit-border-radius: 50%;\r\n  -moz-border-radius: 50%;\r\n  -ms-border-radius: 50%;\r\n  -o-border-radius: 50%;\r\n  background-color: var(--element-static-color);\r\n}\r\n\r\n.keyboard-key:active {\r\n  background-color: var(--element-active-color);\r\n  border-radius: 10px;\r\n  -webkit-border-radius: 10px;\r\n  -moz-border-radius: 10px;\r\n  -ms-border-radius: 10px;\r\n  -o-border-radius: 10px;\r\n}\r\n\r\n.keyboard-key-active::after {\r\n  background-color: var(--element-active-color);\r\n}\r\n\r\n.keyboard-btn-active {\r\n  background-color: var(--element-active-color);\r\n  border-radius: 10px;\r\n  -webkit-border-radius: 10px;\r\n  -moz-border-radius: 10px;\r\n  -ms-border-radius: 10px;\r\n  -o-border-radius: 10px;\r\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ }),

/***/ "./src/modules/Key.js":
/*!****************************!*\
  !*** ./src/modules/Key.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_icon_enter_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/icon-enter.png */ "./src/img/icon-enter.png");
/* harmony import */ var _img_icon_top_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/icon-top.png */ "./src/img/icon-top.png");
/* harmony import */ var _img_icon_bottom_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/icon-bottom.png */ "./src/img/icon-bottom.png");
/* harmony import */ var _img_icon_left_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/icon-left.png */ "./src/img/icon-left.png");
/* harmony import */ var _img_icon_right_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/icon-right.png */ "./src/img/icon-right.png");






class Key {
  // на основании конструктора создаются все объекты-кнопки
  // массив кнопок передается в Keyboard - там генерируются кнопки
  constructor(options) {
    this.small = options.small;
    this.shift = options.shift;
    this.code = options.code;
    this.keycode = options.keycode;
  }

  createButton() {
    const keyElement = document.createElement('button');
    keyElement.setAttribute('type', 'button');
    keyElement.classList.add('keyboard-key');

    // если shift существует (верхнее левое значение) и оно содержит символы
    if (this.shift && this.shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/g)) {
      const shiftSymbol = document.createElement('div');
      shiftSymbol.classList.add('subtitle');
      shiftSymbol.textContent = this.shift;
      keyElement.appendChild(shiftSymbol);
    }

    // если значение кнопки существует (основное)
    if (this.small) {
      keyElement.dataset.value = this.small;
      keyElement.dataset.code = this.code;
      keyElement.dataset.shift = this.shift;
      const mainSymbol = document.createElement('div');
      mainSymbol.classList.add('text');
      mainSymbol.textContent = this.small;
      keyElement.appendChild(mainSymbol);
    }

    const createImg = (url, container) => {
      const img = document.createElement('img');
      img.className = 'img';
      img.src = url;
      container.appendChild(img);
    };

    switch (this.code) {
      case 'Backspace':
        keyElement.classList.add('keyboard-key-wide');
        break;
      case 'Tab':
        keyElement.classList.add('keyboard-key-wide');
        break;
      case 'CapsLock':
        keyElement.classList.add('keyboard-key-middle-wide', 'keyboard-key-activatable');
        break;
      case 'Enter':
        keyElement.classList.add('keyboard-key-middle-wide');
        keyElement.textContent = '';
        createImg(_img_icon_enter_png__WEBPACK_IMPORTED_MODULE_0__, keyElement);
        break;
      case 'ShiftLeft':
        keyElement.classList.add('keyboard-key-wide', 'keyboard-key-dark');
        break;
      case 'ShiftRight':
        keyElement.classList.add('keyboard-key-shift-wide', 'keyboard-key-dark');
        break;
      case 'ControlLeft':
        keyElement.classList.add('keyboard-key-wide', 'keyboard-key-dark');
        break;
      case 'ControlRight':
        keyElement.classList.add('keyboard-key-wide', 'keyboard-key-dark');
        break;
      case 'ArrowLeft':
        keyElement.textContent = '';
        createImg(_img_icon_left_png__WEBPACK_IMPORTED_MODULE_3__, keyElement);
        break;
      case 'ArrowRight':
        keyElement.textContent = '';
        createImg(_img_icon_right_png__WEBPACK_IMPORTED_MODULE_4__, keyElement);
        break;
      case 'ArrowUp':
        keyElement.textContent = '';
        createImg(_img_icon_top_png__WEBPACK_IMPORTED_MODULE_1__, keyElement);
        break;
      case 'ArrowDown':
        keyElement.textContent = '';
        createImg(_img_icon_bottom_png__WEBPACK_IMPORTED_MODULE_2__, keyElement);
        break;
      case 'MetaLeft':
        keyElement.classList.add('keyboard-key-wide', 'keyboard-key-dark');
        break;
      case 'AltLeft':
        keyElement.classList.add('keyboard-key-wide', 'keyboard-key-dark');
        break;
      case 'AltRight':
        keyElement.classList.add('keyboard-key-wide', 'keyboard-key-dark');
        break;
      case 'Space':
        keyElement.classList.add('keyboard-key-extra-wide');
        keyElement.textContent = ' ';
        break;
      default:
      // do nothing
    }

    return keyElement;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Key);


/***/ }),

/***/ "./src/modules/createKeyboard.js":
/*!***************************************!*\
  !*** ./src/modules/createKeyboard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language */ "./src/modules/language.js");
/* harmony import */ var _Key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Key */ "./src/modules/Key.js");



const createMainText = () => {
  const mainText = document.createElement('div');

  const mainHeadling = document.createElement('h1');
  mainHeadling.textContent = 'RSS Virtual Keyboard';

  const p = document.createElement('p');
  p.innerHTML = `Virtual keyboard has been made under Window.<br>
  Use <kbd>CtrlLeft</kbd> + <kbd>AltLeft</kbd> to switch language`;

  const textareaOutput = document.createElement('textarea');
  textareaOutput.classList.add('textarea');
  textareaOutput.setAttribute('placeholder', 'Write something...');
  textareaOutput.setAttribute('autocorrect', 'off');
  textareaOutput.setAttribute('spellcheck', false);

  mainText.append(mainHeadling, p, textareaOutput);
  return mainText;
};

class Keyboard {
  constructor(buttons) {
    this.buttons = buttons;
    this.isCapsLock = 'off';
    this.isShiftLeft = false;
    this.isCtrl = false;
  }

  init(lang) {
    localStorage.setItem('pageLang', lang);
    this.keyBase = _language__WEBPACK_IMPORTED_MODULE_0__["default"][lang];

    this.main = document.createElement('div');
    this.keysContainer = document.createElement('div');

    this.main.classList.add('keyboard');
    this.keysContainer.classList.add('keyboard-keys');
    this.keysContainer.dataset.language = lang;
    this.keysContainer.appendChild(this.generateButtons());

    this.mainTextDescription = createMainText();
    document.body.prepend(this.mainTextDescription);
    this.main.appendChild(this.keysContainer);
    document.body.append(this.main);

    this.textareaInput = this.mainTextDescription.querySelector('.textarea');
    this.getPushButton();
    this.clickListener();
  }

  switchCapsLock() {
    const keys = this.keysContainer.querySelectorAll('.keyboard-key');
    const capsButton = this.keysContainer.querySelector('[data-code="CapsLock"]');

    if (this.isCapsLock === 'on') {
      capsButton.classList.add('keyboard-key-active');

      keys.forEach((btn) => {
        if (btn.dataset.value.match(/[a-zA-Zа-яА-ЯёЁ]/)
          && btn.dataset.value.length === 1) {
          const buttonValue = btn.querySelector('.text');
          buttonValue.textContent = buttonValue.textContent.toUpperCase();
        }
      });
    }

    if (this.isCapsLock === 'off') {
      capsButton.classList.remove('keyboard-key-active');

      keys.forEach((btn) => {
        if (btn.dataset.value.match(/[a-zA-Zа-яА-ЯёЁ]/)
          && btn.dataset.value.length === 1) {
          const buttonValue = btn.querySelector('.text');
          buttonValue.textContent = buttonValue.textContent.toLowerCase();
        }
      });
    }
  }

  generateButtons(langValue) {
    this.keyBase = langValue || this.keyBase;

    const fragment = document.createDocumentFragment();
    this.keyButtons = [];

    if (!this.buttons.length) throw Error('Ooops, check input buttons!');

    this.buttons.forEach((row) => {
      const rowElement = document.createElement('div');
      rowElement.classList.add('keyboard-row');
      rowElement.style.gridTemplateColumns = `repeat(${row.length}, 1fr)`;

      row.forEach((code) => {
        const keyObj = this.keyBase.find((key) => key.code === code);

        if (keyObj) {
          const keyButton = new _Key__WEBPACK_IMPORTED_MODULE_1__["default"](keyObj).createButton();
          rowElement.appendChild(keyButton);
        }
      });

      fragment.appendChild(rowElement);
    });
    return fragment;
  }

  changeLanguage() {
    this.keysContainer.textContent = '';

    if (this.keysContainer.dataset.language === 'ru') {
      this.keysContainer.dataset.language = 'en';
      this.keysContainer.appendChild(this.generateButtons(_language__WEBPACK_IMPORTED_MODULE_0__["default"][this.keysContainer.dataset.language]));
      localStorage.setItem('pageLang', this.keysContainer.dataset.language);
      this.switchCapsLock();
      this.clickListener();
    } else if (this.keysContainer.dataset.language === 'en') {
      this.keysContainer.dataset.language = 'ru';
      this.keysContainer.appendChild(this.generateButtons(_language__WEBPACK_IMPORTED_MODULE_0__["default"][this.keysContainer.dataset.language]));
      localStorage.setItem('pageLang', this.keysContainer.dataset.language);
      this.switchCapsLock();
      this.clickListener();
    }

    this.getPushButton();
  }

  clickListener() {
    this.keysContainer.addEventListener('click', (e) => {
      e.stopImmediatePropagation();

      const target = e.target.closest('.keyboard-key');
      if (!target) return;
      const { dataset: { value } } = e.target.closest('.keyboard-key');

      if (target) {
        let cursorPos = this.textareaInput.selectionStart;

        if ((value.match(/[0-9a-zA-Zа-яА-ЯёЁ]/) || value.match(/[- + `' < = \\ . , ; /]/) || value === ']' || value === '[') && value.length === 1) {
          const left = this.textareaInput.value.slice(0, cursorPos);
          const right = this.textareaInput.value.slice(cursorPos);

          if (this.isCapsLock === 'on' && this.isShiftLeft === true) {
            this.textareaInput.value = `${left}${target.dataset.shift}${right}`;
          } else if (this.isCapsLock === 'on' && this.isShiftLeft === false) {
            this.textareaInput.value = `${left}${value.toUpperCase()}${right}`;
          } else if (this.isCapsLock === 'off' && this.isShiftLeft === true) {
            this.textareaInput.value = `${left}${target.dataset.shift}${right}`;
          } else if (this.isCapsLock === 'off' && this.isShiftLeft === false) {
            this.textareaInput.value = `${left}${value.toLowerCase()}${right}`;
          }

          cursorPos += 1;
          this.textareaInput.selectionEnd = cursorPos;
          this.textareaInput.selectionStart = this.textareaInput.selectionEnd;
          this.textareaInput.focus();
        }

        if (value === 'CapsLock') {
          if (this.isCapsLock === 'on') {
            this.isCapsLock = 'off';
          } else if (this.isCapsLock === 'off') {
            this.isCapsLock = 'on';
          }

          this.switchCapsLock();
        }

        if (value === 'Delete') {
          const left = this.textareaInput.value.slice(0, cursorPos);
          const right = this.textareaInput.value.slice(cursorPos + 1);
          this.textareaInput.value = `${left}${right}`;
          this.textareaInput.selectionEnd = cursorPos;
          this.textareaInput.selectionStart = this.textareaInput.selectionEnd;
          this.textareaInput.focus();
          cursorPos += 1;
        }

        if (value === 'Backspace') {
          const left = this.textareaInput.value.slice(0, cursorPos - 1);
          const right = this.textareaInput.value.slice(cursorPos);
          this.textareaInput.value = `${left}${right}`;
          cursorPos -= 1;
          this.textareaInput.selectionEnd = cursorPos;
          this.textareaInput.selectionStart = this.textareaInput.selectionEnd;
          this.textareaInput.focus();
        }

        if (value === 'Space') {
          const left = this.textareaInput.value.slice(0, cursorPos);
          const right = this.textareaInput.value.slice(cursorPos);
          this.textareaInput.value = `${left} ${right}`;
          cursorPos += 1;
          this.textareaInput.selectionEnd = cursorPos;
          this.textareaInput.selectionStart = this.textareaInput.selectionEnd;
          this.textareaInput.focus();
        }

        if (value === 'Enter') {
          const left = this.textareaInput.value.slice(0, cursorPos);
          const right = this.textareaInput.value.slice(cursorPos);
          this.textareaInput.value = `${left}\n${right}`;
          cursorPos += 1;
          this.textareaInput.selectionEnd = cursorPos;
          this.textareaInput.selectionStart = this.textareaInput.selectionEnd;
          this.textareaInput.focus();
        }

        if (value === 'Tab') {
          const left = this.textareaInput.value.slice(0, cursorPos);
          const right = this.textareaInput.value.slice(cursorPos);
          this.textareaInput.value = `${left}\t${right}`;
          cursorPos += 1;
          this.textareaInput.selectionEnd = cursorPos;
          this.textareaInput.selectionStart = this.textareaInput.selectionEnd;
          this.textareaInput.focus();
        }

        if (value === 'ArrowLeft') {
          cursorPos = (cursorPos - 1 >= 0) ? cursorPos - 1 : 0;
          this.textareaInput.selectionEnd = cursorPos;
          this.textareaInput.selectionStart = this.textareaInput.selectionEnd;
          this.textareaInput.focus();
        }

        if (value === 'ArrowRight') {
          cursorPos += 1;
          this.textareaInput.selectionEnd = cursorPos;
          this.textareaInput.selectionStart = this.textareaInput.selectionEnd;
          this.textareaInput.focus();
        }

        if (value === 'ArrowUp') {
          const left = this.textareaInput.value.slice(0, cursorPos);

          if (left.match(/(\n).*$(?!\1)/g)) {
            const strFromLeft = left.match(/(\n).*$(?!\1)/g);
            cursorPos -= strFromLeft[0].length;
          }

          this.textareaInput.selectionEnd = cursorPos;
          this.textareaInput.selectionStart = this.textareaInput.selectionEnd;
          this.textareaInput.focus();
        }

        if (value === 'ArrowDown') {
          const right = this.textareaInput.value.slice(cursorPos);

          if (right.match(/(\n).*$(?!\1)/g)) {
            const strFromRight = right.match(/^.*(\n).*(?!\1)/);
            cursorPos += strFromRight[0].length + 1;
          }

          this.textareaInput.selectionEnd = cursorPos;
          this.textareaInput.selectionStart = this.textareaInput.selectionEnd;
          this.textareaInput.focus();
        }
      }
    });
  }

  getPushButton() {
    const buttons = this.keysContainer.querySelectorAll('.keyboard-key');

    const deleteActiveClass = () => {
      buttons.forEach((btn) => {
        btn.classList.remove('keyboard-btn-active');
      });
    };

    const listenerKeyDown = (e) => {
      this.textareaInput.focus();

      buttons.forEach((btn) => {
        e.preventDefault();
        const codeVirtBtn = btn.dataset.code;

        if (codeVirtBtn === e.code) {
          btn.classList.add('keyboard-btn-active');
          setTimeout(deleteActiveClass, 400);

          let cursorPos = this.textareaInput.selectionStart;

          if (btn.dataset.value.length === 1) {
            const left = this.textareaInput.value.slice(0, cursorPos);
            const right = this.textareaInput.value.slice(cursorPos);

            if (this.isCapsLock === 'on' && this.isShiftLeft === true) {
              this.textareaInput.value = `${left}${btn.dataset.shift}${right}`;
            } else if (this.isCapsLock === 'on' && this.isShiftLeft === false) {
              this.textareaInput.value = `${left}${btn.dataset.value.toUpperCase()}${right}`;
            } else if (this.isCapsLock === 'off' && this.isShiftLeft === true) {
              this.textareaInput.value = `${left}${btn.dataset.shift}${right}`;
            } else if (this.isCapsLock === 'off' && this.isShiftLeft === false) {
              this.textareaInput.value = `${left}${btn.dataset.value.toLowerCase()}${right}`;
            }

            cursorPos += 1;
            this.textareaInput.selectionEnd = cursorPos;
            this.textareaInput.selectionStart = this.textareaInput.selectionEnd;
            this.textareaInput.focus();
          }

          if (e.code === 'Delete') {
            const left = this.textareaInput.value.slice(0, cursorPos);
            const right = this.textareaInput.value.slice(cursorPos + 1);
            this.textareaInput.value = `${left}${right}`;
            this.textareaInput.selectionEnd = cursorPos;
            this.textareaInput.selectionStart = this.textareaInput.selectionEnd;
            this.textareaInput.focus();
            cursorPos += 1;
          }

          if (e.code === 'Backspace') {
            const left = this.textareaInput.value.slice(0, cursorPos - 1);
            const right = this.textareaInput.value.slice(cursorPos);
            this.textareaInput.value = `${left}${right}`;
            cursorPos -= 1;
            this.textareaInput.selectionEnd = cursorPos;
            this.textareaInput.selectionStart = this.textareaInput.selectionEnd;
            this.textareaInput.focus();
          }

          if (e.code === 'Enter') {
            const left = this.textareaInput.value.slice(0, cursorPos);
            const right = this.textareaInput.value.slice(cursorPos);
            this.textareaInput.value = `${left}\n${right}`;
            cursorPos += 1;
            this.textareaInput.selectionEnd = cursorPos;
            this.textareaInput.selectionStart = this.textareaInput.selectionEnd;
            this.textareaInput.focus();
          }

          if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
            this.isShiftLeft = true;

            buttons.forEach((elem) => {
              const childSubtitle = elem.querySelector('.subtitle');

              if (childSubtitle) {
                childSubtitle.style.fontSize = '18px';
                childSubtitle.style.fontWeight = '700';
                childSubtitle.style.color = '#06f7e4';
              }
            });

            const changeStatus = () => {
              this.isShiftLeft = false;

              buttons.forEach((elem) => {
                const childSubtitle = elem.querySelector('.subtitle');

                if (childSubtitle) {
                  childSubtitle.style.fontSize = '12px';
                  childSubtitle.style.fontWeight = '400';
                  childSubtitle.style.color = 'rgba(255,255,255,0.5)';
                }
              });
            };

            setTimeout(changeStatus, 1000);
          }

          if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
            this.isCtrl = true;
          }

          if (e.code === 'AltLeft' && this.isCtrl) {
            document.removeEventListener('keydown', listenerKeyDown);
            this.changeLanguage();
            this.isCtrl = false;
          }

          if (e.code === 'ArrowLeft') {
            cursorPos = (cursorPos - 1 >= 0) ? cursorPos - 1 : 0;
            this.textareaInput.selectionEnd = cursorPos;
            this.textareaInput.selectionStart = this.textareaInput.selectionEnd;
            this.textareaInput.focus();
          }

          if (e.code === 'ArrowRight') {
            cursorPos += 1;
            this.textareaInput.selectionEnd = cursorPos;
            this.textareaInput.selectionStart = this.textareaInput.selectionEnd;
            this.textareaInput.focus();
          }

          if (e.code === 'ArrowUp') {
            const left = this.textareaInput.value.slice(0, cursorPos);

            if (left.match(/(\n).*$(?!\1)/g)) {
              const strFromLeft = left.match(/(\n).*$(?!\1)/g);
              cursorPos -= strFromLeft[0].length;
            }

            this.textareaInput.selectionEnd = cursorPos;
            this.textareaInput.selectionStart = this.textareaInput.selectionEnd;
            this.textareaInput.focus();
          }

          if (e.code === 'ArrowDown') {
            const right = this.textareaInput.value.slice(cursorPos);

            if (right.match(/(\n).*$(?!\1)/g)) {
              const strFromRight = right.match(/^.*(\n).*(?!\1)/);
              cursorPos += strFromRight[0].length + 1;
            }

            this.textareaInput.selectionEnd = cursorPos;
            this.textareaInput.selectionStart = this.textareaInput.selectionEnd;
            this.textareaInput.focus();
          }

          if (e.code === 'Tab') {
            const left = this.textareaInput.value.slice(0, cursorPos);
            const right = this.textareaInput.value.slice(cursorPos);
            this.textareaInput.value = `${left}\t${right}`;
            cursorPos += 1;
            this.textareaInput.selectionEnd = cursorPos;
            this.textareaInput.selectionStart = this.textareaInput.selectionEnd;
            this.textareaInput.focus();
          }

          if (e.code === 'CapsLock') {
            if (this.isCapsLock === 'on') {
              this.isCapsLock = 'off';
            } else if (this.isCapsLock === 'off') {
              this.isCapsLock = 'on';
            }

            this.switchCapsLock();
          }

          if (e.code === 'Space') {
            const left = this.textareaInput.value.slice(0, cursorPos);
            const right = this.textareaInput.value.slice(cursorPos);
            this.textareaInput.value = `${left} ${right}`;
            cursorPos += 1;
            this.textareaInput.selectionEnd = cursorPos;
            this.textareaInput.selectionStart = this.textareaInput.selectionEnd;
            this.textareaInput.focus();
          }
        }
      });
    };

    document.addEventListener('keydown', listenerKeyDown);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keyboard);


/***/ }),

/***/ "./src/modules/engSymbols.js":
/*!***********************************!*\
  !*** ./src/modules/engSymbols.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const en = [
  {
    small: '`',
    shift: '~',
    code: 'Backquote',
    keycode: '192',
  },
  {
    small: '1',
    shift: '!',
    code: 'Digit1',
    keycode: '49',
  },
  {
    small: '2',
    shift: '@',
    code: 'Digit2',
    keycode: '50',
  },
  {
    small: '3',
    shift: '#',
    code: 'Digit3',
    keycode: '51',
  },
  {
    small: '4',
    shift: '$',
    code: 'Digit4',
    keycode: '52',
  },
  {
    small: '5',
    shift: '%',
    code: 'Digit5',
    keycode: '53',
  },
  {
    small: '6',
    shift: '^',
    code: 'Digit6',
    keycode: '54',
  },
  {
    small: '7',
    shift: '&',
    code: 'Digit7',
    keycode: '55',
  },
  {
    small: '8',
    shift: '*',
    code: 'Digit8',
    keycode: '56',
  },
  {
    small: '9',
    shift: '(',
    code: 'Digit9',
    keycode: '57',
  },
  {
    small: '0',
    shift: ')',
    code: 'Digit0',
    keycode: '48',
  },
  {
    small: '-',
    shift: '_',
    code: 'Minus',
    keycode: '189',
  },
  {
    small: '=',
    shift: '+',
    code: 'Equal',
    keycode: '187',
  },
  {
    small: 'Backspace',
    shift: null,
    code: 'Backspace',
    keycode: '8',
  },
  {
    small: 'Delete',
    shift: null,
    code: 'Delete',
    keycode: '46',
  },
  {
    small: 'Tab',
    shift: null,
    code: 'Tab',
    keycode: '9',
  },
  {
    small: 'q',
    shift: 'Q',
    code: 'KeyQ',
    keycode: '81',
  },
  {
    small: 'w',
    shift: 'W',
    code: 'KeyW',
    keycode: '87',
  },
  {
    small: 'e',
    shift: 'E',
    code: 'KeyE',
    keycode: '69',
  },
  {
    small: 'r',
    shift: 'R',
    code: 'KeyR',
    keycode: '82',
  },
  {
    small: 't',
    shift: 'T',
    code: 'KeyT',
    keycode: '84',
  },
  {
    small: 'y',
    shift: 'Y',
    code: 'KeyY',
    keycode: '89',
  },
  {
    small: 'u',
    shift: 'U',
    code: 'KeyU',
    keycode: '85',
  },
  {
    small: 'i',
    shift: 'I',
    code: 'KeyI',
    keycode: '73',
  },
  {
    small: 'o',
    shift: 'O',
    code: 'KeyO',
    keycode: '79',
  },
  {
    small: 'p',
    shift: 'P',
    code: 'KeyP',
    keycode: '80',
  },
  {
    small: '[',
    shift: '{',
    code: 'BracketLeft',
    keycode: '219',
  },
  {
    small: ']',
    shift: '}',
    code: 'BracketRight',
    keycode: '221',
  },
  {
    small: 'Enter',
    shift: null,
    code: 'Enter',
    keycode: '13',
  },
  {
    small: 'CapsLock',
    shift: null,
    code: 'CapsLock',
    keycode: '0',
  },
  {
    small: 'a',
    shift: 'A',
    code: 'KeyA',
    keycode: '65',
  },
  {
    small: 's',
    shift: 'S',
    code: 'KeyS',
    keycode: '83',
  },
  {
    small: 'd',
    shift: 'D',
    code: 'KeyD',
    keycode: '68',
  },
  {
    small: 'f',
    shift: 'F',
    code: 'KeyF',
    keycode: '70',
  },
  {
    small: 'g',
    shift: 'G',
    code: 'KeyG',
    keycode: '71',
  },
  {
    small: 'h',
    shift: 'H',
    code: 'KeyH',
    keycode: '72',
  },
  {
    small: 'j',
    shift: 'J',
    code: 'KeyJ',
    keycode: '74',
  },
  {
    small: 'k',
    shift: 'K',
    code: 'KeyK',
    keycode: '75',
  },
  {
    small: 'l',
    shift: 'L',
    code: 'KeyL',
    keycode: '76',
  },
  {
    small: ';',
    shift: ':',
    code: 'Semicolon',
    keycode: '186',
  },
  {
    small: "'",
    shift: '"',
    code: 'Quote',
    keycode: '222',
  },
  {
    small: '\\',
    shift: '|',
    code: 'Backslash',
    keycode: '220',
  },
  {
    small: 'Shift',
    shift: null,
    code: 'ShiftLeft',
    keycode: '16',
  },
  {
    small: '<',
    shift: '>',
    code: 'IntlBackslash',
    keycode: '220',
  },
  {
    small: 'z',
    shift: 'Z',
    code: 'KeyZ',
    keycode: '90',
  },
  {
    small: 'x',
    shift: 'X',
    code: 'KeyX',
    keycode: '88',
  },
  {
    small: 'c',
    shift: 'C',
    code: 'KeyC',
    keycode: '67',
  },
  {
    small: 'v',
    shift: 'V',
    code: 'KeyV',
    keycode: '86',
  },
  {
    small: 'b',
    shift: 'B',
    code: 'KeyB',
    keycode: '66',
  },
  {
    small: 'n',
    shift: 'N',
    code: 'KeyN',
    keycode: '78',
  },
  {
    small: 'm',
    shift: 'M',
    code: 'KeyM',
    keycode: '77',
  },
  {
    small: ',',
    shift: '<',
    code: 'Comma',
    keycode: '188',
  },
  {
    small: '.',
    shift: '>',
    code: 'Period',
    keycode: '190',
  },
  {
    small: '/',
    shift: '?',
    code: 'Slash',
    keycode: '191',
  },
  {
    small: 'Shift',
    shift: null,
    code: 'ShiftRight',
    keycode: '16',
  },
  {
    small: 'Ctrl',
    shift: null,
    code: 'ControlLeft',
    keycode: '17',
  },
  {
    small: 'Ctrl',
    shift: null,
    code: 'ControlRight',
    keycode: '17',
  },
  {
    small: 'Alt',
    shift: null,
    code: 'AltLeft',
    keycode: '18',
  },
  {
    small: 'Space',
    shift: null,
    code: 'Space',
    keycode: '32',
  },
  {
    small: 'Alt',
    shift: null,
    code: 'AltRight',
    keycode: '225',
  },
  {
    small: 'ArrowLeft',
    shift: null,
    code: 'ArrowLeft',
    keycode: '37',
  },
  {
    small: 'ArrowUp',
    shift: null,
    code: 'ArrowUp',
    keycode: '38',
  },
  {
    small: 'ArrowDown',
    shift: null,
    code: 'ArrowDown',
    keycode: '40',
  },
  {
    small: 'ArrowRight',
    shift: null,
    code: 'ArrowRight',
    keycode: '39',
  },
  {
    small: 'Win',
    shift: null,
    code: 'MetaLeft',
    keycode: '1000',
  },
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (en);


/***/ }),

/***/ "./src/modules/language.js":
/*!*********************************!*\
  !*** ./src/modules/language.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rusSymbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rusSymbols */ "./src/modules/rusSymbols.js");
/* harmony import */ var _engSymbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engSymbols */ "./src/modules/engSymbols.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ ru: _rusSymbols__WEBPACK_IMPORTED_MODULE_0__["default"], en: _engSymbols__WEBPACK_IMPORTED_MODULE_1__["default"] });


/***/ }),

/***/ "./src/modules/rusSymbols.js":
/*!***********************************!*\
  !*** ./src/modules/rusSymbols.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ru = [
  {
    small: 'CapsLock',
    shift: null,
    code: 'CapsLock',
    keycode: '0',
  },
  {
    small: 'ё',
    shift: 'Ё',
    code: 'Backquote',
    keycode: '192',
  },
  {
    small: '1',
    shift: '!',
    code: 'Digit1',
    keycode: '49',
  },
  {
    small: '2',
    shift: '"',
    code: 'Digit2',
    keycode: '50',
  },
  {
    small: '3',
    shift: '№',
    code: 'Digit3',
    keycode: '51',
  },
  {
    small: '4',
    shift: ';',
    code: 'Digit4',
    keycode: '52',
  },
  {
    small: '5',
    shift: '%',
    code: 'Digit5',
    keycode: '53',
  },
  {
    small: '6',
    shift: ':',
    code: 'Digit6',
    keycode: '54',
  },
  {
    small: '7',
    shift: '?',
    code: 'Digit7',
    keycode: '55',
  },
  {
    small: '8',
    shift: '*',
    code: 'Digit8',
    keycode: '56',
  },
  {
    small: '9',
    shift: '(',
    code: 'Digit9',
    keycode: '57',
  },
  {
    small: '0',
    shift: ')',
    code: 'Digit0',
    keycode: '48',
  },
  {
    small: '-',
    shift: '_',
    code: 'Minus',
    keycode: '189',
  },
  {
    small: '=',
    shift: '+',
    code: 'Equal',
    keycode: '187',
  },
  {
    small: 'Backspace',
    shift: null,
    code: 'Backspace',
    keycode: '8',
  },
  {
    small: 'Delete',
    shift: null,
    code: 'Delete',
    keycode: '46',
  },
  {
    small: 'Tab',
    shift: null,
    code: 'Tab',
    keycode: '9',
  },
  {
    small: 'й',
    shift: 'Й',
    code: 'KeyQ',
    keycode: '81',
  },
  {
    small: 'ц',
    shift: 'Ц',
    code: 'KeyW',
    keycode: '87',
  },
  {
    small: 'у',
    shift: 'У',
    code: 'KeyE',
    keycode: '69',
  },
  {
    small: 'к',
    shift: 'К',
    code: 'KeyR',
    keycode: '82',
  },
  {
    small: 'е',
    shift: 'Е',
    code: 'KeyT',
    keycode: '84',
  },
  {
    small: 'н',
    shift: 'Н',
    code: 'KeyY',
    keycode: '89',
  },
  {
    small: 'г',
    shift: 'Г',
    code: 'KeyU',
    keycode: '85',
  },
  {
    small: 'ш',
    shift: 'Ш',
    code: 'KeyI',
    keycode: '73',
  },
  {
    small: 'щ',
    shift: 'Щ',
    code: 'KeyO',
    keycode: '79',
  },
  {
    small: 'з',
    shift: 'З',
    code: 'KeyP',
    keycode: '80',
  },
  {
    small: 'х',
    shift: 'Х',
    code: 'BracketLeft',
    keycode: '219',
  },
  {
    small: 'ъ',
    shift: 'Ъ',
    code: 'BracketRight',
    keycode: '221',
  },
  {
    small: 'Enter',
    shift: null,
    code: 'Enter',
    keycode: '13',
  },
  {
    small: 'ф',
    shift: 'Ф',
    code: 'KeyA',
    keycode: '65',
  },
  {
    small: 'ы',
    shift: 'Ы',
    code: 'KeyS',
    keycode: '83',
  },
  {
    small: 'в',
    shift: 'В',
    code: 'KeyD',
    keycode: '68',
  },
  {
    small: 'а',
    shift: 'А',
    code: 'KeyF',
    keycode: '70',
  },
  {
    small: 'п',
    shift: 'П',
    code: 'KeyG',
    keycode: '71',
  },
  {
    small: 'р',
    shift: 'Р',
    code: 'KeyH',
    keycode: '72',
  },
  {
    small: 'о',
    shift: 'О',
    code: 'KeyJ',
    keycode: '74',
  },
  {
    small: 'л',
    shift: 'Л',
    code: 'KeyK',
    keycode: '75',
  },
  {
    small: 'д',
    shift: 'Д',
    code: 'KeyL',
    keycode: '76',
  },
  {
    small: 'ж',
    shift: 'Ж',
    code: 'Semicolon',
    keycode: '186',
  },
  {
    small: 'э',
    shift: 'Э',
    code: 'Quote',
    keycode: '222',
  },
  {
    small: '\\',
    shift: '/',
    code: 'Backslash',
    keycode: '220',
  },
  {
    small: 'Shift',
    shift: null,
    code: 'ShiftLeft',
    keycode: '16',
  },
  {
    small: '/',
    shift: '|',
    code: 'IntlBackslash',
    keycode: '191',
  },
  {
    small: 'я',
    shift: 'Я',
    code: 'KeyZ',
    keycode: '90',
  },
  {
    small: 'ч',
    shift: 'Ч',
    code: 'KeyX',
    keycode: '88',
  },
  {
    small: 'с',
    shift: 'С',
    code: 'KeyC',
    keycode: '67',
  },
  {
    small: 'м',
    shift: 'М',
    code: 'KeyV',
    keycode: '86',
  },
  {
    small: 'и',
    shift: 'И',
    code: 'KeyB',
    keycode: '66',
  },
  {
    small: 'т',
    shift: 'Т',
    code: 'KeyN',
    keycode: '78',
  },
  {
    small: 'ь',
    shift: 'Ь',
    code: 'KeyM',
    keycode: '77',
  },
  {
    small: 'б',
    shift: 'Б',
    code: 'Comma',
    keycode: '188',
  },
  {
    small: 'ю',
    shift: 'Ю',
    code: 'Period',
    keycode: '190',
  },
  {
    small: '.',
    shift: ',',
    code: 'Slash',
    keycode: '191',
  },
  {
    small: 'Shift',
    shift: null,
    code: 'ShiftRight',
    keycode: '16',
  },
  {
    small: 'Ctrl',
    shift: null,
    code: 'ControlLeft',
    keycode: '17',
  },
  {
    small: 'Ctrl',
    shift: null,
    code: 'ControlRight',
    keycode: '17',
  },
  {
    small: 'Alt',
    shift: null,
    code: 'AltLeft',
    keycode: '18',
  },
  {
    small: 'Space',
    shift: null,
    code: 'Space',
    keycode: '32',
  },
  {
    small: 'Alt',
    shift: null,
    code: 'AltRight',
    keycode: '225',
  },
  {
    small: 'ArrowLeft',
    shift: null,
    code: 'ArrowLeft',
    keycode: '37',
  },
  {
    small: 'ArrowUp',
    shift: null,
    code: 'ArrowUp',
    keycode: '38',
  },
  {
    small: 'ArrowDown',
    shift: null,
    code: 'ArrowDown',
    keycode: '40',
  },
  {
    small: 'ArrowRight',
    shift: null,
    code: 'ArrowRight',
    keycode: '39',
  },
  {
    small: 'Win',
    shift: null,
    code: 'MetaLeft',
    keycode: '1000',
  },
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ru);


/***/ }),

/***/ "./src/img/icon-bottom.png":
/*!*********************************!*\
  !*** ./src/img/icon-bottom.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cac4702bc182bd2c11a8.png";

/***/ }),

/***/ "./src/img/icon-enter.png":
/*!********************************!*\
  !*** ./src/img/icon-enter.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "edb3b02e6e22e340f3c8.png";

/***/ }),

/***/ "./src/img/icon-left.png":
/*!*******************************!*\
  !*** ./src/img/icon-left.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7dec641d51790749ff4c.png";

/***/ }),

/***/ "./src/img/icon-right.png":
/*!********************************!*\
  !*** ./src/img/icon-right.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21751f16730f28a87efb.png";

/***/ }),

/***/ "./src/img/icon-top.png":
/*!******************************!*\
  !*** ./src/img/icon-top.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dbafab17ba91e4649420.png";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_createKeyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createKeyboard */ "./src/modules/createKeyboard.js");



const buttons = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Delete'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backspace'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter'],
  ['ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
];

const lang = localStorage.getItem('pageLang') ? localStorage.getItem('pageLang') : 'ru';

const keyboard = new _modules_createKeyboard__WEBPACK_IMPORTED_MODULE_1__["default"](buttons);
keyboard.init(lang);

})();

/******/ })()
;
//# sourceMappingURL=index.js.map