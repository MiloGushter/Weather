/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  color: #232323;\n  height: 100vh;\n}\n\naside,\nmain {\n  height: 100vh;\n}\n\n.wrapper {\n  display: flex;\n}\n\n.aside {\n  width: 30%;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 3rem;\n}\n\n.main {\n  flex: 1;\n  overflow-y: auto;\n  background-color: rgba(239, 239, 239, 0.5);\n  padding: 3rem;\n}\n\n.aside-search {\n  display: flex;\n  align-items: center;\n}\n.aside-search :first-child {\n  margin-right: 0.5rem;\n}\n\n.aside-search-input {\n  border: none;\n  outline: none;\n}\n\n.aside-weather-info {\n  display: flex;\n  flex-direction: column;\n}\n\n.aside-weather-info-icon {\n  max-width: 120px;\n}\n\n.aside-weather-info-temeprature .temperature-number {\n  font-size: 6rem;\n}\n\n.aside-weather-info-temeprature .temeperature-degrees {\n  font-size: 3rem;\n  vertical-align: super;\n}\n\n.aside-weather-info-day {\n  font-size: 1.125rem;\n}\n.aside-weather-info-day span {\n  color: #979797;\n}\n\n.aside-city-info {\n  font-weight: 500;\n  font-size: 1.125rem;\n}\n\n.main-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n\n.main-header-paragraph {\n  font-size: 2rem;\n  font-weight: 800;\n}\n\n.main-day-info-paragraph {\n  font-size: 2rem;\n  font-weight: 800;\n  margin-bottom: 2rem;\n}\n\n.main-forecast-cards,\n.main-day-cards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-column-gap: 1rem;\n  grid-row-gap: 2rem;\n}\n\n.main-forecast-cards {\n  margin-bottom: 2rem;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem 0.5rem;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  border-radius: 0.75rem;\n}\n.card img {\n  max-width: 150px;\n}\n\n.max-temperature,\n.min-temperature {\n  vertical-align: top;\n}\n.max-temperature sup,\n.min-temperature sup {\n  vertical-align: top;\n}\n\n.min-temperature {\n  color: #979797;\n}\n\n.main-day-cards > .card {\n  padding: 1.5rem 1rem;\n  align-items: start;\n  margin-bottom: 2rem;\n}\n\n.day-header {\n  font-size: 1.25rem;\n  color: #979797;\n}\n\n.day-wind-value,\n.day-humidity-value,\n.day-visibility-value {\n  font-size: clamp(2rem, 5vw, 4rem);\n  margin: 2rem 0;\n}\n.day-wind-value .value-metric,\n.day-humidity-value .value-metric,\n.day-visibility-value .value-metric {\n  font-size: 1rem;\n}\n\n.day-wind-direction,\n.day-humidity-status,\n.day-visibility-status {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.day-wind-direction span,\n.day-humidity-status span,\n.day-visibility-status span {\n  margin-right: 0.5rem;\n}", "",{"version":3,"sources":["webpack://./src/sass/style.scss"],"names":[],"mappings":"AAOA;EACC,sBAAA;EACA,eAAA;AALD;;AAQA;;;EAGC,mBAAA;AALD;;AAQA;;;;;;;;;;EAUC,SAAA;EACA,UAAA;EACA,mBAAA;AALD;;AAQA;;EAEC,gBAAA;AALD;;AAQA;EACC,eAAA;EACA,YAAA;AALD;;AAQA;EACC,iCA1CM;EA2CN,cA1CO;EA2CP,aAAA;AALD;;AAQA;;EAEC,aAAA;AALD;;AAQA;EACC,aAAA;AALD;;AAQA;EACC,UAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,aAAA;AALD;;AAQA;EAGC,OAAA;EACA,gBAAA;EACA,0CAnEY;EAoEZ,aAAA;AAPD;;AAUA;EACC,aAAA;EACA,mBAAA;AAPD;AAQC;EACC,oBAAA;AANF;;AASA;EACC,YAAA;EACA,aAAA;AAND;;AAQA;EACC,aAAA;EACA,sBAAA;AALD;;AAQA;EACC,gBAAA;AALD;;AAQA;EACC,eAAA;AALD;;AAOA;EACC,eAAA;EACA,qBAAA;AAJD;;AAOA;EACC,mBAAA;AAJD;AAKC;EACC,cAvGK;AAoGP;;AAOA;EACC,gBAAA;EACA,mBAAA;AAJD;;AAOA;EACC,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,mBAAA;AAJD;;AAYA;EAJC,eAAA;EACA,gBAAA;AAJD;;AAUA;EAPC,eAAA;EACA,gBAAA;EAQA,mBAAA;AAND;;AASA;;EAEC,aAAA;EACA,qCAAA;EACA,qBAAA;EACA,kBAAA;AAND;;AASA;EACC,mBAAA;AAND;;AAQA;EACC,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,oBAAA;EACA,qDAAA;EACA,sBAAA;AALD;AAMC;EACC,gBAAA;AAJF;;AAQA;;EAEC,mBAAA;AALD;AAMC;;EACC,mBAAA;AAHF;;AAMA;EACC,cApKM;AAiKP;;AAKA;EACC,oBAAA;EACA,kBAAA;EACA,mBAAA;AAFD;;AAKA;EACC,kBAAA;EACA,cA9KM;AA4KP;;AAKA;;;EAGC,iCAAA;EAIA,cAAA;AALD;AAEC;;;EACC,eAAA;AAEF;;AAGA;;;EAMC,aAAA;EACA,mBAAA;EACA,uBAAA;AAHD;AAFC;;;EACC,oBAAA;AAMF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\");\n\n$font: \"Roboto\", sans-serif;\n$black: #232323;\n$grey: #979797;\n$grey-faded: rgba(239, 239, 239, 0.5);\n\nhtml {\n\tbox-sizing: border-box;\n\tfont-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n\tbox-sizing: inherit;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-weight: normal;\n}\n\nol,\nul {\n\tlist-style: none;\n}\n\nimg {\n\tmax-width: 100%;\n\theight: auto;\n}\n\nbody {\n\tfont-family: $font;\n\tcolor: $black;\n\theight: 100vh;\n}\n\naside,\nmain {\n\theight: 100vh;\n}\n\n.wrapper {\n\tdisplay: flex;\n}\n\n.aside {\n\twidth: 30%;\n\tmax-width: 400px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tpadding: 3rem;\n}\n\n.main {\n\t// Flex and overflow ensure that main is scrollable\n\t// and aside is fixed\n\tflex: 1;\n\toverflow-y: auto;\n\tbackground-color: $grey-faded;\n\tpadding: 3rem;\n}\n\n.aside-search {\n\tdisplay: flex;\n\talign-items: center;\n\t:first-child {\n\t\tmargin-right: 0.5rem;\n\t}\n}\n.aside-search-input {\n\tborder: none;\n\toutline: none;\n}\n.aside-weather-info {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.aside-weather-info-icon {\n\tmax-width: 120px;\n}\n\n.aside-weather-info-temeprature .temperature-number {\n\tfont-size: 6rem;\n}\n.aside-weather-info-temeprature .temeperature-degrees {\n\tfont-size: 3rem;\n\tvertical-align: super;\n}\n\n.aside-weather-info-day {\n\tfont-size: 1.125rem;\n\tspan {\n\t\tcolor: $grey;\n\t}\n}\n\n.aside-city-info {\n\tfont-weight: 500;\n\tfont-size: 1.125rem;\n}\n\n.main-header {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmargin-bottom: 2rem;\n}\n\n@mixin heading-paragraph {\n\tfont-size: 2rem;\n\tfont-weight: 800;\n}\n\n.main-header-paragraph {\n\t@include heading-paragraph();\n}\n.main-day-info-paragraph {\n\t@include heading-paragraph();\n\tmargin-bottom: 2rem;\n}\n\n.main-forecast-cards,\n.main-day-cards {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, 1fr);\n\tgrid-column-gap: 1rem;\n\tgrid-row-gap: 2rem;\n}\n\n.main-forecast-cards {\n\tmargin-bottom: 2rem;\n}\n.card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 2rem 0.5rem;\n\tbox-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n\tborder-radius: 0.75rem;\n\timg {\n\t\tmax-width: 150px;\n\t}\n}\n\n.max-temperature,\n.min-temperature {\n\tvertical-align: top;\n\tsup {\n\t\tvertical-align: top;\n\t}\n}\n.min-temperature {\n\tcolor: $grey;\n}\n.main-day-cards > .card {\n\tpadding: 1.5rem 1rem;\n\talign-items: start;\n\tmargin-bottom: 2rem;\n}\n\n.day-header {\n\tfont-size: 1.25rem;\n\tcolor: $grey;\n}\n\n.day-wind-value,\n.day-humidity-value,\n.day-visibility-value {\n\tfont-size: clamp(2rem, 5vw, 4rem);\n\t.value-metric {\n\t\tfont-size: 1rem;\n\t}\n\tmargin: 2rem 0;\n}\n\n.day-wind-direction,\n.day-humidity-status,\n.day-visibility-status {\n\tspan {\n\t\tmargin-right: 0.5rem;\n\t}\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/modules/getWeatherData.js":
/*!***************************************!*\
  !*** ./src/modules/getWeatherData.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeather": () => (/* binding */ getWeather)
/* harmony export */ });
async function getWeather(city) {
	const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`;
	const optinos = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "3023115176msh2132cd6864b1f0fp147486jsnaf3c6aa5c30c",
			"X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
		},
	};

	return await (await fetch(url, optinos)).json();
}


/***/ }),

/***/ "./src/modules/populateContent.js":
/*!****************************************!*\
  !*** ./src/modules/populateContent.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateContent": () => (/* binding */ populateContent),
/* harmony export */   "populateOnLoad": () => (/* binding */ populateOnLoad)
/* harmony export */ });
/* harmony import */ var _getWeatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeatherData */ "./src/modules/getWeatherData.js");


function getDayFromDate(date) {
	return new Date(date).toLocaleString("en-us", {
		weekday: "long",
	});
}

function populateAside(location, current) {
	const cityInfo = document.querySelector(".aside-city-info");
	cityInfo.textContent = `${location.name}, ${location.country}`;
	const temperature = document.querySelector(".temperature-number");
	const degrees = document.createElement("sup");
	degrees.textContent = "°C";
	degrees.classList.add("temeperature-degrees");
	temperature.textContent = `${current.temp_c}`;
	temperature.append(degrees);
	const weekdayInfo = document.querySelector(".aside-weather-info-day");
	const weekdayTime = document.createElement("span");
	const time = location.localtime.split(" ")[1];
	const weekday = getDayFromDate(location.localtime.split(" ")[0]);
	weekdayInfo.textContent = `${weekday}, `;
	weekdayTime.textContent = `${time}`;
	weekdayInfo.appendChild(weekdayTime);
	const icon = document.querySelector(".aside-weather-info-icon");
	icon.src = current.condition.icon;
}

function populateMainForecast(forecast) {
	const forecastDays = forecast.forecastday;
	const forecastCards = document.querySelectorAll(".main-forecast");
	for (let i = 0; i < forecastCards.length; i++) {
		const cardContent = forecastCards[i].children;
		cardContent[0].textContent = getDayFromDate(forecastDays[i].date);
		cardContent[1].src = forecastDays[i].day.condition.icon;
		const degrees = document.createElement("sup");
		degrees.textContent = "°C";
		let temperatures = cardContent[2].children;
		temperatures[0].textContent = Math.round(forecastDays[i].day.maxtemp_c);
		temperatures[0].appendChild(degrees.cloneNode(true));
		temperatures[1].textContent = Math.round(forecastDays[i].day.mintemp_c);
		temperatures[1].appendChild(degrees.cloneNode(true));
	}
}

function setDayInfoHeading(heading, forecast) {
	heading.textContent = `${getDayFromDate(forecast.date)}'s info`;
}

function changeTextAfterIcon(parent) {
	const nodes = parent.childNodes;
	const lastNode = nodes[nodes.length - 1];
	parent.removeChild(lastNode);
}

function populateWindCard(card, forecast) {
	const windValueHolder = card[0].children[1];
	const windMetric = document.createElement("span");
	const windSpeed = forecast.day.maxwind_kph;
	windMetric.textContent = "km/h";
	windMetric.classList.add("value-metric");
	windValueHolder.textContent = `${windSpeed} `;
	windValueHolder.appendChild(windMetric);
	const windStrength = windValueHolder.nextElementSibling;
	changeTextAfterIcon(windStrength);
	if (windSpeed < 1.6) windStrength.textContent = "Calm";
	else if (windSpeed < 29)
		windStrength.appendChild(document.createTextNode("Light wind"));
	else if (windSpeed < 35)
		windStrength.appendChild(document.createTextNode("Moderate wind"));
	else if (windSpeed < 87)
		windStrength.appendChild(document.createTextNode("Strong wind"));
	else if (windSpeed < 97)
		windStrength.appendChild(document.createTextNode("Gale wind"));
	else if (windSpeed > 116)
		windStrength.appendChild(document.createTextNode("Storm wind"));
}

function populateHumidityCard(card, forecast) {
	const humidityValueHolder = card[1].children[1];
	const humidityMetric = document.createElement("span");
	const humidityPercentage = forecast.day.avghumidity;
	humidityMetric.textContent = "%";
	humidityMetric.classList.add("value-metric");
	humidityValueHolder.textContent = `${humidityPercentage} `;
	humidityValueHolder.appendChild(humidityMetric);
	const humidityStatus = humidityValueHolder.nextElementSibling;
	changeTextAfterIcon(humidityStatus);
	if (humidityPercentage < 25)
		humidityStatus.appendChild(document.createTextNode("Low"));
	else if (humidityPercentage < 30)
		humidityStatus.appendChild(document.createTextNode("Slightly low"));
	else if (humidityPercentage < 60)
		humidityStatus.appendChild(document.createTextNode("Good"));
	else if (humidityPercentage < 70)
		humidityStatus.appendChild(document.createTextNode("Slightly high"));
	else humidityStatus.appendChild(document.createTextNode("High"));
}

function populateVisibilityCard(card, forecast) {
	const visibilityValueHolder = card[2].children[1];
	const visibilityMetric = document.createElement("span");
	const visibilityDistance = forecast.day.maxwind_kph;
	visibilityMetric.textContent = "km";
	visibilityMetric.classList.add("value-metric");
	visibilityValueHolder.textContent = `${visibilityDistance}`;
	visibilityValueHolder.appendChild(visibilityMetric);
	const visibilityStatus = visibilityValueHolder.nextElementSibling;
	changeTextAfterIcon(visibilityStatus);
	if (visibilityDistance < 2)
		visibilityStatus.appendChild(document.createTextNode("Low"));
	else if (visibilityDistance < 5)
		visibilityStatus.appendChild(document.createTextNode("Medium"));
	else visibilityStatus.appendChild(document.createTextNode("Good"));
}

function populateMainForecastInfo(forecast) {
	const forecastDays = forecast.forecastday;
	const forecastInfoCards = document.querySelectorAll(".main-day-cards");
	const daysInfoHeading = document.querySelectorAll(".main-day-info-paragraph");
	for (let i = 0; i < forecastInfoCards.length; i++) {
		const infoCards = forecastInfoCards[i].children;
		setDayInfoHeading(daysInfoHeading[i], forecastDays[i]);
		populateWindCard(infoCards, forecastDays[i]);
		populateHumidityCard(infoCards, forecastDays[i]);
		populateVisibilityCard(infoCards, forecastDays[i]);
	}
}

function populateOnLoad() {
	(0,_getWeatherData__WEBPACK_IMPORTED_MODULE_0__.getWeather)("London").then((response) => {
		const locationInfo = response.location;
		const currentInfo = response.current;
		const forecastInfo = response.forecast;
		populateAside(locationInfo, currentInfo);
		populateMainForecast(forecastInfo);
		populateMainForecastInfo(forecastInfo);
	});
}

function populateContent() {
	const search = document.querySelector("input");
	search.addEventListener("keyup", (event) => {
		if (event.key === "Enter") {
			let locationInfo, currentInfo, forecastInfo;
			(0,_getWeatherData__WEBPACK_IMPORTED_MODULE_0__.getWeather)(search.value).then((response) => {
				locationInfo = response.location;
				currentInfo = response.current;
				forecastInfo = response.forecast;
				populateAside(locationInfo, currentInfo);
				populateMainForecast(forecastInfo);
				populateMainForecastInfo(forecastInfo);
			});
		}
	});
}


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
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _modules_populateContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/populateContent */ "./src/modules/populateContent.js");



(0,_modules_populateContent__WEBPACK_IMPORTED_MODULE_1__.populateOnLoad)();
(0,_modules_populateContent__WEBPACK_IMPORTED_MODULE_1__.populateContent)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBMkI7QUFDaUQ7O0FBRTVFLHdFQUFjO0FBQ2QseUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3Nhc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zYXNzL3N0eWxlLnNjc3M/NGQzNyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbW9kdWxlcy9nZXRXZWF0aGVyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21vZHVsZXMvcG9wdWxhdGVDb250ZW50LmpzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxub2wsXFxudWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMyMzIzMjM7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5hc2lkZSxcXG5tYWluIHtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5hc2lkZSB7XFxuICB3aWR0aDogMzAlO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogM3JlbTtcXG59XFxuXFxuLm1haW4ge1xcbiAgZmxleDogMTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOSwgMjM5LCAyMzksIDAuNSk7XFxuICBwYWRkaW5nOiAzcmVtO1xcbn1cXG5cXG4uYXNpZGUtc2VhcmNoIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYXNpZGUtc2VhcmNoIDpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLmFzaWRlLXNlYXJjaC1pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYXNpZGUtd2VhdGhlci1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYXNpZGUtd2VhdGhlci1pbmZvLWljb24ge1xcbiAgbWF4LXdpZHRoOiAxMjBweDtcXG59XFxuXFxuLmFzaWRlLXdlYXRoZXItaW5mby10ZW1lcHJhdHVyZSAudGVtcGVyYXR1cmUtbnVtYmVyIHtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG59XFxuXFxuLmFzaWRlLXdlYXRoZXItaW5mby10ZW1lcHJhdHVyZSAudGVtZXBlcmF0dXJlLWRlZ3JlZXMge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xcbn1cXG5cXG4uYXNpZGUtd2VhdGhlci1pbmZvLWRheSB7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbn1cXG4uYXNpZGUtd2VhdGhlci1pbmZvLWRheSBzcGFuIHtcXG4gIGNvbG9yOiAjOTc5Nzk3O1xcbn1cXG5cXG4uYXNpZGUtY2l0eS1pbmZvIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXItcGFyYWdyYXBoIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5tYWluLWRheS1pbmZvLXBhcmFncmFwaCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLm1haW4tZm9yZWNhc3QtY2FyZHMsXFxuLm1haW4tZGF5LWNhcmRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxcmVtO1xcbiAgZ3JpZC1yb3ctZ2FwOiAycmVtO1xcbn1cXG5cXG4ubWFpbi1mb3JlY2FzdC1jYXJkcyB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW0gMC41cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDBweCA3cHggMjlweCAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xcbn1cXG4uY2FyZCBpbWcge1xcbiAgbWF4LXdpZHRoOiAxNTBweDtcXG59XFxuXFxuLm1heC10ZW1wZXJhdHVyZSxcXG4ubWluLXRlbXBlcmF0dXJlIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5tYXgtdGVtcGVyYXR1cmUgc3VwLFxcbi5taW4tdGVtcGVyYXR1cmUgc3VwIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcblxcbi5taW4tdGVtcGVyYXR1cmUge1xcbiAgY29sb3I6ICM5Nzk3OTc7XFxufVxcblxcbi5tYWluLWRheS1jYXJkcyA+IC5jYXJkIHtcXG4gIHBhZGRpbmc6IDEuNXJlbSAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmRheS1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgY29sb3I6ICM5Nzk3OTc7XFxufVxcblxcbi5kYXktd2luZC12YWx1ZSxcXG4uZGF5LWh1bWlkaXR5LXZhbHVlLFxcbi5kYXktdmlzaWJpbGl0eS12YWx1ZSB7XFxuICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDV2dywgNHJlbSk7XFxuICBtYXJnaW46IDJyZW0gMDtcXG59XFxuLmRheS13aW5kLXZhbHVlIC52YWx1ZS1tZXRyaWMsXFxuLmRheS1odW1pZGl0eS12YWx1ZSAudmFsdWUtbWV0cmljLFxcbi5kYXktdmlzaWJpbGl0eS12YWx1ZSAudmFsdWUtbWV0cmljIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmRheS13aW5kLWRpcmVjdGlvbixcXG4uZGF5LWh1bWlkaXR5LXN0YXR1cyxcXG4uZGF5LXZpc2liaWxpdHktc3RhdHVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5kYXktd2luZC1kaXJlY3Rpb24gc3BhbixcXG4uZGF5LWh1bWlkaXR5LXN0YXR1cyBzcGFuLFxcbi5kYXktdmlzaWJpbGl0eS1zdGF0dXMgc3BhbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFPQTtFQUNDLHNCQUFBO0VBQ0EsZUFBQTtBQUxEOztBQVFBOzs7RUFHQyxtQkFBQTtBQUxEOztBQVFBOzs7Ozs7Ozs7O0VBVUMsU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUxEOztBQVFBOztFQUVDLGdCQUFBO0FBTEQ7O0FBUUE7RUFDQyxlQUFBO0VBQ0EsWUFBQTtBQUxEOztBQVFBO0VBQ0MsaUNBMUNNO0VBMkNOLGNBMUNPO0VBMkNQLGFBQUE7QUFMRDs7QUFRQTs7RUFFQyxhQUFBO0FBTEQ7O0FBUUE7RUFDQyxhQUFBO0FBTEQ7O0FBUUE7RUFDQyxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUFMRDs7QUFRQTtFQUdDLE9BQUE7RUFDQSxnQkFBQTtFQUNBLDBDQW5FWTtFQW9FWixhQUFBO0FBUEQ7O0FBVUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7QUFQRDtBQVFDO0VBQ0Msb0JBQUE7QUFORjs7QUFTQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0FBTkQ7O0FBUUE7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7QUFMRDs7QUFRQTtFQUNDLGdCQUFBO0FBTEQ7O0FBUUE7RUFDQyxlQUFBO0FBTEQ7O0FBT0E7RUFDQyxlQUFBO0VBQ0EscUJBQUE7QUFKRDs7QUFPQTtFQUNDLG1CQUFBO0FBSkQ7QUFLQztFQUNDLGNBdkdLO0FBb0dQOztBQU9BO0VBQ0MsZ0JBQUE7RUFDQSxtQkFBQTtBQUpEOztBQU9BO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUpEOztBQVlBO0VBSkMsZUFBQTtFQUNBLGdCQUFBO0FBSkQ7O0FBVUE7RUFQQyxlQUFBO0VBQ0EsZ0JBQUE7RUFRQSxtQkFBQTtBQU5EOztBQVNBOztFQUVDLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFORDs7QUFTQTtFQUNDLG1CQUFBO0FBTkQ7O0FBUUE7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxREFBQTtFQUNBLHNCQUFBO0FBTEQ7QUFNQztFQUNDLGdCQUFBO0FBSkY7O0FBUUE7O0VBRUMsbUJBQUE7QUFMRDtBQU1DOztFQUNDLG1CQUFBO0FBSEY7O0FBTUE7RUFDQyxjQXBLTTtBQWlLUDs7QUFLQTtFQUNDLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUZEOztBQUtBO0VBQ0Msa0JBQUE7RUFDQSxjQTlLTTtBQTRLUDs7QUFLQTs7O0VBR0MsaUNBQUE7RUFJQSxjQUFBO0FBTEQ7QUFFQzs7O0VBQ0MsZUFBQTtBQUVGOztBQUdBOzs7RUFNQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUhEO0FBRkM7OztFQUNDLG9CQUFBO0FBTUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuJGZvbnQ6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiRibGFjazogIzIzMjMyMztcXG4kZ3JleTogIzk3OTc5NztcXG4kZ3JleS1mYWRlZDogcmdiYSgyMzksIDIzOSwgMjM5LCAwLjUpO1xcblxcbmh0bWwge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcblxcdGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5vbCxcXG51bCB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxub2wsXFxudWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmltZyB7XFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuYm9keSB7XFxuXFx0Zm9udC1mYW1pbHk6ICRmb250O1xcblxcdGNvbG9yOiAkYmxhY2s7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYXNpZGUsXFxubWFpbiB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLndyYXBwZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5hc2lkZSB7XFxuXFx0d2lkdGg6IDMwJTtcXG5cXHRtYXgtd2lkdGg6IDQwMHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0cGFkZGluZzogM3JlbTtcXG59XFxuXFxuLm1haW4ge1xcblxcdC8vIEZsZXggYW5kIG92ZXJmbG93IGVuc3VyZSB0aGF0IG1haW4gaXMgc2Nyb2xsYWJsZVxcblxcdC8vIGFuZCBhc2lkZSBpcyBmaXhlZFxcblxcdGZsZXg6IDE7XFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleS1mYWRlZDtcXG5cXHRwYWRkaW5nOiAzcmVtO1xcbn1cXG5cXG4uYXNpZGUtc2VhcmNoIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0OmZpcnN0LWNoaWxkIHtcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG5cXHR9XFxufVxcbi5hc2lkZS1zZWFyY2gtaW5wdXQge1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG4uYXNpZGUtd2VhdGhlci1pbmZvIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hc2lkZS13ZWF0aGVyLWluZm8taWNvbiB7XFxuXFx0bWF4LXdpZHRoOiAxMjBweDtcXG59XFxuXFxuLmFzaWRlLXdlYXRoZXItaW5mby10ZW1lcHJhdHVyZSAudGVtcGVyYXR1cmUtbnVtYmVyIHtcXG5cXHRmb250LXNpemU6IDZyZW07XFxufVxcbi5hc2lkZS13ZWF0aGVyLWluZm8tdGVtZXByYXR1cmUgLnRlbWVwZXJhdHVyZS1kZWdyZWVzIHtcXG5cXHRmb250LXNpemU6IDNyZW07XFxuXFx0dmVydGljYWwtYWxpZ246IHN1cGVyO1xcbn1cXG5cXG4uYXNpZGUtd2VhdGhlci1pbmZvLWRheSB7XFxuXFx0Zm9udC1zaXplOiAxLjEyNXJlbTtcXG5cXHRzcGFuIHtcXG5cXHRcXHRjb2xvcjogJGdyZXk7XFxuXFx0fVxcbn1cXG5cXG4uYXNpZGUtY2l0eS1pbmZvIHtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGZvbnQtc2l6ZTogMS4xMjVyZW07XFxufVxcblxcbi5tYWluLWhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG5AbWl4aW4gaGVhZGluZy1wYXJhZ3JhcGgge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXItcGFyYWdyYXBoIHtcXG5cXHRAaW5jbHVkZSBoZWFkaW5nLXBhcmFncmFwaCgpO1xcbn1cXG4ubWFpbi1kYXktaW5mby1wYXJhZ3JhcGgge1xcblxcdEBpbmNsdWRlIGhlYWRpbmctcGFyYWdyYXBoKCk7XFxuXFx0bWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLm1haW4tZm9yZWNhc3QtY2FyZHMsXFxuLm1haW4tZGF5LWNhcmRzIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuXFx0Z3JpZC1jb2x1bW4tZ2FwOiAxcmVtO1xcblxcdGdyaWQtcm93LWdhcDogMnJlbTtcXG59XFxuXFxuLm1haW4tZm9yZWNhc3QtY2FyZHMge1xcblxcdG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcbi5jYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAycmVtIDAuNXJlbTtcXG5cXHRib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xcblxcdGltZyB7XFxuXFx0XFx0bWF4LXdpZHRoOiAxNTBweDtcXG5cXHR9XFxufVxcblxcbi5tYXgtdGVtcGVyYXR1cmUsXFxuLm1pbi10ZW1wZXJhdHVyZSB7XFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXG5cXHRzdXAge1xcblxcdFxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuXFx0fVxcbn1cXG4ubWluLXRlbXBlcmF0dXJlIHtcXG5cXHRjb2xvcjogJGdyZXk7XFxufVxcbi5tYWluLWRheS1jYXJkcyA+IC5jYXJkIHtcXG5cXHRwYWRkaW5nOiAxLjVyZW0gMXJlbTtcXG5cXHRhbGlnbi1pdGVtczogc3RhcnQ7XFxuXFx0bWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmRheS1oZWFkZXIge1xcblxcdGZvbnQtc2l6ZTogMS4yNXJlbTtcXG5cXHRjb2xvcjogJGdyZXk7XFxufVxcblxcbi5kYXktd2luZC12YWx1ZSxcXG4uZGF5LWh1bWlkaXR5LXZhbHVlLFxcbi5kYXktdmlzaWJpbGl0eS12YWx1ZSB7XFxuXFx0Zm9udC1zaXplOiBjbGFtcCgycmVtLCA1dncsIDRyZW0pO1xcblxcdC52YWx1ZS1tZXRyaWMge1xcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHR9XFxuXFx0bWFyZ2luOiAycmVtIDA7XFxufVxcblxcbi5kYXktd2luZC1kaXJlY3Rpb24sXFxuLmRheS1odW1pZGl0eS1zdGF0dXMsXFxuLmRheS12aXNpYmlsaXR5LXN0YXR1cyB7XFxuXFx0c3BhbiB7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuXFx0fVxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpIHtcblx0Y29uc3QgdXJsID0gYGh0dHBzOi8vd2VhdGhlcmFwaS1jb20ucC5yYXBpZGFwaS5jb20vZm9yZWNhc3QuanNvbj9xPSR7Y2l0eX0mZGF5cz0zYDtcblx0Y29uc3Qgb3B0aW5vcyA9IHtcblx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0aGVhZGVyczoge1xuXHRcdFx0XCJYLVJhcGlkQVBJLUtleVwiOiBcIjMwMjMxMTUxNzZtc2gyMTMyY2Q2ODY0YjFmMGZwMTQ3NDg2anNuYWYzYzZhYTVjMzBjXCIsXG5cdFx0XHRcIlgtUmFwaWRBUEktSG9zdFwiOiBcIndlYXRoZXJhcGktY29tLnAucmFwaWRhcGkuY29tXCIsXG5cdFx0fSxcblx0fTtcblxuXHRyZXR1cm4gYXdhaXQgKGF3YWl0IGZldGNoKHVybCwgb3B0aW5vcykpLmpzb24oKTtcbn1cbiIsImltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tIFwiLi9nZXRXZWF0aGVyRGF0YVwiO1xuXG5mdW5jdGlvbiBnZXREYXlGcm9tRGF0ZShkYXRlKSB7XG5cdHJldHVybiBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZVN0cmluZyhcImVuLXVzXCIsIHtcblx0XHR3ZWVrZGF5OiBcImxvbmdcIixcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlQXNpZGUobG9jYXRpb24sIGN1cnJlbnQpIHtcblx0Y29uc3QgY2l0eUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFzaWRlLWNpdHktaW5mb1wiKTtcblx0Y2l0eUluZm8udGV4dENvbnRlbnQgPSBgJHtsb2NhdGlvbi5uYW1lfSwgJHtsb2NhdGlvbi5jb3VudHJ5fWA7XG5cdGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wZXJhdHVyZS1udW1iZXJcIik7XG5cdGNvbnN0IGRlZ3JlZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3VwXCIpO1xuXHRkZWdyZWVzLnRleHRDb250ZW50ID0gXCLCsENcIjtcblx0ZGVncmVlcy5jbGFzc0xpc3QuYWRkKFwidGVtZXBlcmF0dXJlLWRlZ3JlZXNcIik7XG5cdHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7Y3VycmVudC50ZW1wX2N9YDtcblx0dGVtcGVyYXR1cmUuYXBwZW5kKGRlZ3JlZXMpO1xuXHRjb25zdCB3ZWVrZGF5SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXNpZGUtd2VhdGhlci1pbmZvLWRheVwiKTtcblx0Y29uc3Qgd2Vla2RheVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0Y29uc3QgdGltZSA9IGxvY2F0aW9uLmxvY2FsdGltZS5zcGxpdChcIiBcIilbMV07XG5cdGNvbnN0IHdlZWtkYXkgPSBnZXREYXlGcm9tRGF0ZShsb2NhdGlvbi5sb2NhbHRpbWUuc3BsaXQoXCIgXCIpWzBdKTtcblx0d2Vla2RheUluZm8udGV4dENvbnRlbnQgPSBgJHt3ZWVrZGF5fSwgYDtcblx0d2Vla2RheVRpbWUudGV4dENvbnRlbnQgPSBgJHt0aW1lfWA7XG5cdHdlZWtkYXlJbmZvLmFwcGVuZENoaWxkKHdlZWtkYXlUaW1lKTtcblx0Y29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXNpZGUtd2VhdGhlci1pbmZvLWljb25cIik7XG5cdGljb24uc3JjID0gY3VycmVudC5jb25kaXRpb24uaWNvbjtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVNYWluRm9yZWNhc3QoZm9yZWNhc3QpIHtcblx0Y29uc3QgZm9yZWNhc3REYXlzID0gZm9yZWNhc3QuZm9yZWNhc3RkYXk7XG5cdGNvbnN0IGZvcmVjYXN0Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW4tZm9yZWNhc3RcIik7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZm9yZWNhc3RDYXJkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGNhcmRDb250ZW50ID0gZm9yZWNhc3RDYXJkc1tpXS5jaGlsZHJlbjtcblx0XHRjYXJkQ29udGVudFswXS50ZXh0Q29udGVudCA9IGdldERheUZyb21EYXRlKGZvcmVjYXN0RGF5c1tpXS5kYXRlKTtcblx0XHRjYXJkQ29udGVudFsxXS5zcmMgPSBmb3JlY2FzdERheXNbaV0uZGF5LmNvbmRpdGlvbi5pY29uO1xuXHRcdGNvbnN0IGRlZ3JlZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3VwXCIpO1xuXHRcdGRlZ3JlZXMudGV4dENvbnRlbnQgPSBcIsKwQ1wiO1xuXHRcdGxldCB0ZW1wZXJhdHVyZXMgPSBjYXJkQ29udGVudFsyXS5jaGlsZHJlbjtcblx0XHR0ZW1wZXJhdHVyZXNbMF0udGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGZvcmVjYXN0RGF5c1tpXS5kYXkubWF4dGVtcF9jKTtcblx0XHR0ZW1wZXJhdHVyZXNbMF0uYXBwZW5kQ2hpbGQoZGVncmVlcy5jbG9uZU5vZGUodHJ1ZSkpO1xuXHRcdHRlbXBlcmF0dXJlc1sxXS50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoZm9yZWNhc3REYXlzW2ldLmRheS5taW50ZW1wX2MpO1xuXHRcdHRlbXBlcmF0dXJlc1sxXS5hcHBlbmRDaGlsZChkZWdyZWVzLmNsb25lTm9kZSh0cnVlKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2V0RGF5SW5mb0hlYWRpbmcoaGVhZGluZywgZm9yZWNhc3QpIHtcblx0aGVhZGluZy50ZXh0Q29udGVudCA9IGAke2dldERheUZyb21EYXRlKGZvcmVjYXN0LmRhdGUpfSdzIGluZm9gO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUZXh0QWZ0ZXJJY29uKHBhcmVudCkge1xuXHRjb25zdCBub2RlcyA9IHBhcmVudC5jaGlsZE5vZGVzO1xuXHRjb25zdCBsYXN0Tm9kZSA9IG5vZGVzW25vZGVzLmxlbmd0aCAtIDFdO1xuXHRwYXJlbnQucmVtb3ZlQ2hpbGQobGFzdE5vZGUpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVdpbmRDYXJkKGNhcmQsIGZvcmVjYXN0KSB7XG5cdGNvbnN0IHdpbmRWYWx1ZUhvbGRlciA9IGNhcmRbMF0uY2hpbGRyZW5bMV07XG5cdGNvbnN0IHdpbmRNZXRyaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0Y29uc3Qgd2luZFNwZWVkID0gZm9yZWNhc3QuZGF5Lm1heHdpbmRfa3BoO1xuXHR3aW5kTWV0cmljLnRleHRDb250ZW50ID0gXCJrbS9oXCI7XG5cdHdpbmRNZXRyaWMuY2xhc3NMaXN0LmFkZChcInZhbHVlLW1ldHJpY1wiKTtcblx0d2luZFZhbHVlSG9sZGVyLnRleHRDb250ZW50ID0gYCR7d2luZFNwZWVkfSBgO1xuXHR3aW5kVmFsdWVIb2xkZXIuYXBwZW5kQ2hpbGQod2luZE1ldHJpYyk7XG5cdGNvbnN0IHdpbmRTdHJlbmd0aCA9IHdpbmRWYWx1ZUhvbGRlci5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdGNoYW5nZVRleHRBZnRlckljb24od2luZFN0cmVuZ3RoKTtcblx0aWYgKHdpbmRTcGVlZCA8IDEuNikgd2luZFN0cmVuZ3RoLnRleHRDb250ZW50ID0gXCJDYWxtXCI7XG5cdGVsc2UgaWYgKHdpbmRTcGVlZCA8IDI5KVxuXHRcdHdpbmRTdHJlbmd0aC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkxpZ2h0IHdpbmRcIikpO1xuXHRlbHNlIGlmICh3aW5kU3BlZWQgPCAzNSlcblx0XHR3aW5kU3RyZW5ndGguYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJNb2RlcmF0ZSB3aW5kXCIpKTtcblx0ZWxzZSBpZiAod2luZFNwZWVkIDwgODcpXG5cdFx0d2luZFN0cmVuZ3RoLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiU3Ryb25nIHdpbmRcIikpO1xuXHRlbHNlIGlmICh3aW5kU3BlZWQgPCA5Nylcblx0XHR3aW5kU3RyZW5ndGguYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJHYWxlIHdpbmRcIikpO1xuXHRlbHNlIGlmICh3aW5kU3BlZWQgPiAxMTYpXG5cdFx0d2luZFN0cmVuZ3RoLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiU3Rvcm0gd2luZFwiKSk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlSHVtaWRpdHlDYXJkKGNhcmQsIGZvcmVjYXN0KSB7XG5cdGNvbnN0IGh1bWlkaXR5VmFsdWVIb2xkZXIgPSBjYXJkWzFdLmNoaWxkcmVuWzFdO1xuXHRjb25zdCBodW1pZGl0eU1ldHJpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRjb25zdCBodW1pZGl0eVBlcmNlbnRhZ2UgPSBmb3JlY2FzdC5kYXkuYXZnaHVtaWRpdHk7XG5cdGh1bWlkaXR5TWV0cmljLnRleHRDb250ZW50ID0gXCIlXCI7XG5cdGh1bWlkaXR5TWV0cmljLmNsYXNzTGlzdC5hZGQoXCJ2YWx1ZS1tZXRyaWNcIik7XG5cdGh1bWlkaXR5VmFsdWVIb2xkZXIudGV4dENvbnRlbnQgPSBgJHtodW1pZGl0eVBlcmNlbnRhZ2V9IGA7XG5cdGh1bWlkaXR5VmFsdWVIb2xkZXIuYXBwZW5kQ2hpbGQoaHVtaWRpdHlNZXRyaWMpO1xuXHRjb25zdCBodW1pZGl0eVN0YXR1cyA9IGh1bWlkaXR5VmFsdWVIb2xkZXIubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHRjaGFuZ2VUZXh0QWZ0ZXJJY29uKGh1bWlkaXR5U3RhdHVzKTtcblx0aWYgKGh1bWlkaXR5UGVyY2VudGFnZSA8IDI1KVxuXHRcdGh1bWlkaXR5U3RhdHVzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTG93XCIpKTtcblx0ZWxzZSBpZiAoaHVtaWRpdHlQZXJjZW50YWdlIDwgMzApXG5cdFx0aHVtaWRpdHlTdGF0dXMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJTbGlnaHRseSBsb3dcIikpO1xuXHRlbHNlIGlmIChodW1pZGl0eVBlcmNlbnRhZ2UgPCA2MClcblx0XHRodW1pZGl0eVN0YXR1cy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkdvb2RcIikpO1xuXHRlbHNlIGlmIChodW1pZGl0eVBlcmNlbnRhZ2UgPCA3MClcblx0XHRodW1pZGl0eVN0YXR1cy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNsaWdodGx5IGhpZ2hcIikpO1xuXHRlbHNlIGh1bWlkaXR5U3RhdHVzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSGlnaFwiKSk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlVmlzaWJpbGl0eUNhcmQoY2FyZCwgZm9yZWNhc3QpIHtcblx0Y29uc3QgdmlzaWJpbGl0eVZhbHVlSG9sZGVyID0gY2FyZFsyXS5jaGlsZHJlblsxXTtcblx0Y29uc3QgdmlzaWJpbGl0eU1ldHJpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRjb25zdCB2aXNpYmlsaXR5RGlzdGFuY2UgPSBmb3JlY2FzdC5kYXkubWF4d2luZF9rcGg7XG5cdHZpc2liaWxpdHlNZXRyaWMudGV4dENvbnRlbnQgPSBcImttXCI7XG5cdHZpc2liaWxpdHlNZXRyaWMuY2xhc3NMaXN0LmFkZChcInZhbHVlLW1ldHJpY1wiKTtcblx0dmlzaWJpbGl0eVZhbHVlSG9sZGVyLnRleHRDb250ZW50ID0gYCR7dmlzaWJpbGl0eURpc3RhbmNlfWA7XG5cdHZpc2liaWxpdHlWYWx1ZUhvbGRlci5hcHBlbmRDaGlsZCh2aXNpYmlsaXR5TWV0cmljKTtcblx0Y29uc3QgdmlzaWJpbGl0eVN0YXR1cyA9IHZpc2liaWxpdHlWYWx1ZUhvbGRlci5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdGNoYW5nZVRleHRBZnRlckljb24odmlzaWJpbGl0eVN0YXR1cyk7XG5cdGlmICh2aXNpYmlsaXR5RGlzdGFuY2UgPCAyKVxuXHRcdHZpc2liaWxpdHlTdGF0dXMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJMb3dcIikpO1xuXHRlbHNlIGlmICh2aXNpYmlsaXR5RGlzdGFuY2UgPCA1KVxuXHRcdHZpc2liaWxpdHlTdGF0dXMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJNZWRpdW1cIikpO1xuXHRlbHNlIHZpc2liaWxpdHlTdGF0dXMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJHb29kXCIpKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVNYWluRm9yZWNhc3RJbmZvKGZvcmVjYXN0KSB7XG5cdGNvbnN0IGZvcmVjYXN0RGF5cyA9IGZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xuXHRjb25zdCBmb3JlY2FzdEluZm9DYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbi1kYXktY2FyZHNcIik7XG5cdGNvbnN0IGRheXNJbmZvSGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbi1kYXktaW5mby1wYXJhZ3JhcGhcIik7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZm9yZWNhc3RJbmZvQ2FyZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBpbmZvQ2FyZHMgPSBmb3JlY2FzdEluZm9DYXJkc1tpXS5jaGlsZHJlbjtcblx0XHRzZXREYXlJbmZvSGVhZGluZyhkYXlzSW5mb0hlYWRpbmdbaV0sIGZvcmVjYXN0RGF5c1tpXSk7XG5cdFx0cG9wdWxhdGVXaW5kQ2FyZChpbmZvQ2FyZHMsIGZvcmVjYXN0RGF5c1tpXSk7XG5cdFx0cG9wdWxhdGVIdW1pZGl0eUNhcmQoaW5mb0NhcmRzLCBmb3JlY2FzdERheXNbaV0pO1xuXHRcdHBvcHVsYXRlVmlzaWJpbGl0eUNhcmQoaW5mb0NhcmRzLCBmb3JlY2FzdERheXNbaV0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZU9uTG9hZCgpIHtcblx0Z2V0V2VhdGhlcihcIkxvbmRvblwiKS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdGNvbnN0IGxvY2F0aW9uSW5mbyA9IHJlc3BvbnNlLmxvY2F0aW9uO1xuXHRcdGNvbnN0IGN1cnJlbnRJbmZvID0gcmVzcG9uc2UuY3VycmVudDtcblx0XHRjb25zdCBmb3JlY2FzdEluZm8gPSByZXNwb25zZS5mb3JlY2FzdDtcblx0XHRwb3B1bGF0ZUFzaWRlKGxvY2F0aW9uSW5mbywgY3VycmVudEluZm8pO1xuXHRcdHBvcHVsYXRlTWFpbkZvcmVjYXN0KGZvcmVjYXN0SW5mbyk7XG5cdFx0cG9wdWxhdGVNYWluRm9yZWNhc3RJbmZvKGZvcmVjYXN0SW5mbyk7XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVDb250ZW50KCkge1xuXHRjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG5cdHNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGV2ZW50KSA9PiB7XG5cdFx0aWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG5cdFx0XHRsZXQgbG9jYXRpb25JbmZvLCBjdXJyZW50SW5mbywgZm9yZWNhc3RJbmZvO1xuXHRcdFx0Z2V0V2VhdGhlcihzZWFyY2gudmFsdWUpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdGxvY2F0aW9uSW5mbyA9IHJlc3BvbnNlLmxvY2F0aW9uO1xuXHRcdFx0XHRjdXJyZW50SW5mbyA9IHJlc3BvbnNlLmN1cnJlbnQ7XG5cdFx0XHRcdGZvcmVjYXN0SW5mbyA9IHJlc3BvbnNlLmZvcmVjYXN0O1xuXHRcdFx0XHRwb3B1bGF0ZUFzaWRlKGxvY2F0aW9uSW5mbywgY3VycmVudEluZm8pO1xuXHRcdFx0XHRwb3B1bGF0ZU1haW5Gb3JlY2FzdChmb3JlY2FzdEluZm8pO1xuXHRcdFx0XHRwb3B1bGF0ZU1haW5Gb3JlY2FzdEluZm8oZm9yZWNhc3RJbmZvKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3Nhc3Mvc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHsgcG9wdWxhdGVPbkxvYWQsIHBvcHVsYXRlQ29udGVudCB9IGZyb20gXCIuL21vZHVsZXMvcG9wdWxhdGVDb250ZW50XCI7XG5cbnBvcHVsYXRlT25Mb2FkKCk7XG5wb3B1bGF0ZUNvbnRlbnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==