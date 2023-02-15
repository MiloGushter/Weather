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
	const windValue = card[0].children[1];
	const windMetric = document.createElement("span");
	const windSpeed = forecast.day.maxwind_kph;
	windMetric.textContent = "km/h";
	windMetric.classList.add("value-metric");
	windValue.textContent = `${windSpeed} `;
	windValue.appendChild(windMetric);
	const windStrength = windValue.nextElementSibling;
	changeTextAfterIcon(windStrength);
	if (windValue < 1.6) windStrength.textContent = "Calm";
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
	const humidityValue = card[1].children[1];
	const humidityMetric = document.createElement("span");
	const humidityPercentage = forecast.day.avghumidity;
	humidityMetric.textContent = "%";
	humidityMetric.classList.add("value-metric");
	humidityValue.textContent = `${humidityPercentage} `;
	humidityValue.appendChild(humidityMetric);
	const amountOfHumidity = humidityValue.nextElementSibling;
	changeTextAfterIcon(amountOfHumidity);
	if (humidityPercentage < 25)
		amountOfHumidity.appendChild(document.createTextNode("Low"));
	else if (humidityPercentage <= 30)
		amountOfHumidity.appendChild(document.createTextNode("Slightly low"));
	else if (humidityPercentage < 60)
		amountOfHumidity.appendChild(document.createTextNode("Good"));
	else if (humidityPercentage < 70)
		amountOfHumidity.appendChild(document.createTextNode("Slightly high"));
	else amountOfHumidity.appendChild(document.createTextNode("High"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQTJCO0FBQ2lEOztBQUU1RSx3RUFBYztBQUNkLHlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zYXNzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc2Fzcy9zdHlsZS5zY3NzPzRkMzciLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21vZHVsZXMvZ2V0V2VhdGhlckRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tb2R1bGVzL3BvcHVsYXRlQ29udGVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbm9sLFxcbnVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMjMyMzIzO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYXNpZGUsXFxubWFpbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYXNpZGUge1xcbiAgd2lkdGg6IDMwJTtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDNyZW07XFxufVxcblxcbi5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzksIDIzOSwgMjM5LCAwLjUpO1xcbiAgcGFkZGluZzogM3JlbTtcXG59XFxuXFxuLmFzaWRlLXNlYXJjaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmFzaWRlLXNlYXJjaCA6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi5hc2lkZS1zZWFyY2gtaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmFzaWRlLXdlYXRoZXItaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFzaWRlLXdlYXRoZXItaW5mby1pY29uIHtcXG4gIG1heC13aWR0aDogMTIwcHg7XFxufVxcblxcbi5hc2lkZS13ZWF0aGVyLWluZm8tdGVtZXByYXR1cmUgLnRlbXBlcmF0dXJlLW51bWJlciB7XFxuICBmb250LXNpemU6IDZyZW07XFxufVxcblxcbi5hc2lkZS13ZWF0aGVyLWluZm8tdGVtZXByYXR1cmUgLnRlbWVwZXJhdHVyZS1kZWdyZWVzIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcXG59XFxuXFxuLmFzaWRlLXdlYXRoZXItaW5mby1kYXkge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuLmFzaWRlLXdlYXRoZXItaW5mby1kYXkgc3BhbiB7XFxuICBjb2xvcjogIzk3OTc5NztcXG59XFxuXFxuLmFzaWRlLWNpdHktaW5mbyB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuXFxuLm1haW4taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLm1haW4taGVhZGVyLXBhcmFncmFwaCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4ubWFpbi1kYXktaW5mby1wYXJhZ3JhcGgge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5tYWluLWZvcmVjYXN0LWNhcmRzLFxcbi5tYWluLWRheS1jYXJkcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGdyaWQtY29sdW1uLWdhcDogMXJlbTtcXG4gIGdyaWQtcm93LWdhcDogMnJlbTtcXG59XFxuXFxuLm1haW4tZm9yZWNhc3QtY2FyZHMge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAycmVtIDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDI5cHggMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcXG59XFxuLmNhcmQgaW1nIHtcXG4gIG1heC13aWR0aDogMTUwcHg7XFxufVxcblxcbi5tYXgtdGVtcGVyYXR1cmUsXFxuLm1pbi10ZW1wZXJhdHVyZSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4ubWF4LXRlbXBlcmF0dXJlIHN1cCxcXG4ubWluLXRlbXBlcmF0dXJlIHN1cCB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5cXG4ubWluLXRlbXBlcmF0dXJlIHtcXG4gIGNvbG9yOiAjOTc5Nzk3O1xcbn1cXG5cXG4ubWFpbi1kYXktY2FyZHMgPiAuY2FyZCB7XFxuICBwYWRkaW5nOiAxLjVyZW0gMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5kYXktaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGNvbG9yOiAjOTc5Nzk3O1xcbn1cXG5cXG4uZGF5LXdpbmQtdmFsdWUsXFxuLmRheS1odW1pZGl0eS12YWx1ZSxcXG4uZGF5LXZpc2liaWxpdHktdmFsdWUge1xcbiAgZm9udC1zaXplOiBjbGFtcCgycmVtLCA1dncsIDRyZW0pO1xcbiAgbWFyZ2luOiAycmVtIDA7XFxufVxcbi5kYXktd2luZC12YWx1ZSAudmFsdWUtbWV0cmljLFxcbi5kYXktaHVtaWRpdHktdmFsdWUgLnZhbHVlLW1ldHJpYyxcXG4uZGF5LXZpc2liaWxpdHktdmFsdWUgLnZhbHVlLW1ldHJpYyB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5kYXktd2luZC1kaXJlY3Rpb24sXFxuLmRheS1odW1pZGl0eS1zdGF0dXMsXFxuLmRheS12aXNpYmlsaXR5LXN0YXR1cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZGF5LXdpbmQtZGlyZWN0aW9uIHNwYW4sXFxuLmRheS1odW1pZGl0eS1zdGF0dXMgc3BhbixcXG4uZGF5LXZpc2liaWxpdHktc3RhdHVzIHNwYW4ge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBT0E7RUFDQyxzQkFBQTtFQUNBLGVBQUE7QUFMRDs7QUFRQTs7O0VBR0MsbUJBQUE7QUFMRDs7QUFRQTs7Ozs7Ozs7OztFQVVDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFMRDs7QUFRQTs7RUFFQyxnQkFBQTtBQUxEOztBQVFBO0VBQ0MsZUFBQTtFQUNBLFlBQUE7QUFMRDs7QUFRQTtFQUNDLGlDQTFDTTtFQTJDTixjQTFDTztFQTJDUCxhQUFBO0FBTEQ7O0FBUUE7O0VBRUMsYUFBQTtBQUxEOztBQVFBO0VBQ0MsYUFBQTtBQUxEOztBQVFBO0VBQ0MsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBTEQ7O0FBUUE7RUFHQyxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FuRVk7RUFvRVosYUFBQTtBQVBEOztBQVVBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FBUEQ7QUFRQztFQUNDLG9CQUFBO0FBTkY7O0FBU0E7RUFDQyxZQUFBO0VBQ0EsYUFBQTtBQU5EOztBQVFBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0FBTEQ7O0FBUUE7RUFDQyxnQkFBQTtBQUxEOztBQVFBO0VBQ0MsZUFBQTtBQUxEOztBQU9BO0VBQ0MsZUFBQTtFQUNBLHFCQUFBO0FBSkQ7O0FBT0E7RUFDQyxtQkFBQTtBQUpEO0FBS0M7RUFDQyxjQXZHSztBQW9HUDs7QUFPQTtFQUNDLGdCQUFBO0VBQ0EsbUJBQUE7QUFKRDs7QUFPQTtFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFKRDs7QUFZQTtFQUpDLGVBQUE7RUFDQSxnQkFBQTtBQUpEOztBQVVBO0VBUEMsZUFBQTtFQUNBLGdCQUFBO0VBUUEsbUJBQUE7QUFORDs7QUFTQTs7RUFFQyxhQUFBO0VBQ0EscUNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBTkQ7O0FBU0E7RUFDQyxtQkFBQTtBQU5EOztBQVFBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EscURBQUE7RUFDQSxzQkFBQTtBQUxEO0FBTUM7RUFDQyxnQkFBQTtBQUpGOztBQVFBOztFQUVDLG1CQUFBO0FBTEQ7QUFNQzs7RUFDQyxtQkFBQTtBQUhGOztBQU1BO0VBQ0MsY0FwS007QUFpS1A7O0FBS0E7RUFDQyxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFGRDs7QUFLQTtFQUNDLGtCQUFBO0VBQ0EsY0E5S007QUE0S1A7O0FBS0E7OztFQUdDLGlDQUFBO0VBSUEsY0FBQTtBQUxEO0FBRUM7OztFQUNDLGVBQUE7QUFFRjs7QUFHQTs7O0VBTUMsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFIRDtBQUZDOzs7RUFDQyxvQkFBQTtBQU1GXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbiRmb250OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4kYmxhY2s6ICMyMzIzMjM7XFxuJGdyZXk6ICM5Nzk3OTc7XFxuJGdyZXktZmFkZWQ6IHJnYmEoMjM5LCAyMzksIDIzOSwgMC41KTtcXG5cXG5odG1sIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG5cXHRib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxub2wsXFxudWwge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbm9sLFxcbnVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5pbWcge1xcblxcdG1heC13aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbmJvZHkge1xcblxcdGZvbnQtZmFtaWx5OiAkZm9udDtcXG5cXHRjb2xvcjogJGJsYWNrO1xcblxcdGhlaWdodDogMTAwdmg7XFxufVxcblxcbmFzaWRlLFxcbm1haW4ge1xcblxcdGhlaWdodDogMTAwdmg7XFxufVxcblxcbi53cmFwcGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYXNpZGUge1xcblxcdHdpZHRoOiAzMCU7XFxuXFx0bWF4LXdpZHRoOiA0MDBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdHBhZGRpbmc6IDNyZW07XFxufVxcblxcbi5tYWluIHtcXG5cXHQvLyBGbGV4IGFuZCBvdmVyZmxvdyBlbnN1cmUgdGhhdCBtYWluIGlzIHNjcm9sbGFibGVcXG5cXHQvLyBhbmQgYXNpZGUgaXMgZml4ZWRcXG5cXHRmbGV4OiAxO1xcblxcdG92ZXJmbG93LXk6IGF1dG87XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGdyZXktZmFkZWQ7XFxuXFx0cGFkZGluZzogM3JlbTtcXG59XFxuXFxuLmFzaWRlLXNlYXJjaCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdDpmaXJzdC1jaGlsZCB7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuXFx0fVxcbn1cXG4uYXNpZGUtc2VhcmNoLWlucHV0IHtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0b3V0bGluZTogbm9uZTtcXG59XFxuLmFzaWRlLXdlYXRoZXItaW5mbyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYXNpZGUtd2VhdGhlci1pbmZvLWljb24ge1xcblxcdG1heC13aWR0aDogMTIwcHg7XFxufVxcblxcbi5hc2lkZS13ZWF0aGVyLWluZm8tdGVtZXByYXR1cmUgLnRlbXBlcmF0dXJlLW51bWJlciB7XFxuXFx0Zm9udC1zaXplOiA2cmVtO1xcbn1cXG4uYXNpZGUtd2VhdGhlci1pbmZvLXRlbWVwcmF0dXJlIC50ZW1lcGVyYXR1cmUtZGVncmVlcyB7XFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcblxcdHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcXG59XFxuXFxuLmFzaWRlLXdlYXRoZXItaW5mby1kYXkge1xcblxcdGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuXFx0c3BhbiB7XFxuXFx0XFx0Y29sb3I6ICRncmV5O1xcblxcdH1cXG59XFxuXFxuLmFzaWRlLWNpdHktaW5mbyB7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRmb250LXNpemU6IDEuMTI1cmVtO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0bWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuQG1peGluIGhlYWRpbmctcGFyYWdyYXBoIHtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLm1haW4taGVhZGVyLXBhcmFncmFwaCB7XFxuXFx0QGluY2x1ZGUgaGVhZGluZy1wYXJhZ3JhcGgoKTtcXG59XFxuLm1haW4tZGF5LWluZm8tcGFyYWdyYXBoIHtcXG5cXHRAaW5jbHVkZSBoZWFkaW5nLXBhcmFncmFwaCgpO1xcblxcdG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5tYWluLWZvcmVjYXN0LWNhcmRzLFxcbi5tYWluLWRheS1jYXJkcyB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcblxcdGdyaWQtY29sdW1uLWdhcDogMXJlbTtcXG5cXHRncmlkLXJvdy1nYXA6IDJyZW07XFxufVxcblxcbi5tYWluLWZvcmVjYXN0LWNhcmRzIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG4uY2FyZCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMnJlbSAwLjVyZW07XFxuXFx0Ym94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDBweCA3cHggMjlweCAwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC43NXJlbTtcXG5cXHRpbWcge1xcblxcdFxcdG1heC13aWR0aDogMTUwcHg7XFxuXFx0fVxcbn1cXG5cXG4ubWF4LXRlbXBlcmF0dXJlLFxcbi5taW4tdGVtcGVyYXR1cmUge1xcblxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuXFx0c3VwIHtcXG5cXHRcXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcblxcdH1cXG59XFxuLm1pbi10ZW1wZXJhdHVyZSB7XFxuXFx0Y29sb3I6ICRncmV5O1xcbn1cXG4ubWFpbi1kYXktY2FyZHMgPiAuY2FyZCB7XFxuXFx0cGFkZGluZzogMS41cmVtIDFyZW07XFxuXFx0YWxpZ24taXRlbXM6IHN0YXJ0O1xcblxcdG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5kYXktaGVhZGVyIHtcXG5cXHRmb250LXNpemU6IDEuMjVyZW07XFxuXFx0Y29sb3I6ICRncmV5O1xcbn1cXG5cXG4uZGF5LXdpbmQtdmFsdWUsXFxuLmRheS1odW1pZGl0eS12YWx1ZSxcXG4uZGF5LXZpc2liaWxpdHktdmFsdWUge1xcblxcdGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgNXZ3LCA0cmVtKTtcXG5cXHQudmFsdWUtbWV0cmljIHtcXG5cXHRcXHRmb250LXNpemU6IDFyZW07XFxuXFx0fVxcblxcdG1hcmdpbjogMnJlbSAwO1xcbn1cXG5cXG4uZGF5LXdpbmQtZGlyZWN0aW9uLFxcbi5kYXktaHVtaWRpdHktc3RhdHVzLFxcbi5kYXktdmlzaWJpbGl0eS1zdGF0dXMge1xcblxcdHNwYW4ge1xcblxcdFxcdG1hcmdpbi1yaWdodDogMC41cmVtO1xcblxcdH1cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5KSB7XG5cdGNvbnN0IHVybCA9IGBodHRwczovL3dlYXRoZXJhcGktY29tLnAucmFwaWRhcGkuY29tL2ZvcmVjYXN0Lmpzb24/cT0ke2NpdHl9JmRheXM9M2A7XG5cdGNvbnN0IG9wdGlub3MgPSB7XG5cdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdFwiWC1SYXBpZEFQSS1LZXlcIjogXCIzMDIzMTE1MTc2bXNoMjEzMmNkNjg2NGIxZjBmcDE0NzQ4NmpzbmFmM2M2YWE1YzMwY1wiLFxuXHRcdFx0XCJYLVJhcGlkQVBJLUhvc3RcIjogXCJ3ZWF0aGVyYXBpLWNvbS5wLnJhcGlkYXBpLmNvbVwiLFxuXHRcdH0sXG5cdH07XG5cblx0cmV0dXJuIGF3YWl0IChhd2FpdCBmZXRjaCh1cmwsIG9wdGlub3MpKS5qc29uKCk7XG59XG4iLCJpbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSBcIi4vZ2V0V2VhdGhlckRhdGFcIjtcblxuZnVuY3Rpb24gZ2V0RGF5RnJvbURhdGUoZGF0ZSkge1xuXHRyZXR1cm4gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVTdHJpbmcoXCJlbi11c1wiLCB7XG5cdFx0d2Vla2RheTogXCJsb25nXCIsXG5cdH0pO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUFzaWRlKGxvY2F0aW9uLCBjdXJyZW50KSB7XG5cdGNvbnN0IGNpdHlJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hc2lkZS1jaXR5LWluZm9cIik7XG5cdGNpdHlJbmZvLnRleHRDb250ZW50ID0gYCR7bG9jYXRpb24ubmFtZX0sICR7bG9jYXRpb24uY291bnRyeX1gO1xuXHRjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcGVyYXR1cmUtbnVtYmVyXCIpO1xuXHRjb25zdCBkZWdyZWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN1cFwiKTtcblx0ZGVncmVlcy50ZXh0Q29udGVudCA9IFwiwrBDXCI7XG5cdGRlZ3JlZXMuY2xhc3NMaXN0LmFkZChcInRlbWVwZXJhdHVyZS1kZWdyZWVzXCIpO1xuXHR0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnQudGVtcF9jfWA7XG5cdHRlbXBlcmF0dXJlLmFwcGVuZChkZWdyZWVzKTtcblx0Y29uc3Qgd2Vla2RheUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFzaWRlLXdlYXRoZXItaW5mby1kYXlcIik7XG5cdGNvbnN0IHdlZWtkYXlUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdGNvbnN0IHRpbWUgPSBsb2NhdGlvbi5sb2NhbHRpbWUuc3BsaXQoXCIgXCIpWzFdO1xuXHRjb25zdCB3ZWVrZGF5ID0gZ2V0RGF5RnJvbURhdGUobG9jYXRpb24ubG9jYWx0aW1lLnNwbGl0KFwiIFwiKVswXSk7XG5cdHdlZWtkYXlJbmZvLnRleHRDb250ZW50ID0gYCR7d2Vla2RheX0sIGA7XG5cdHdlZWtkYXlUaW1lLnRleHRDb250ZW50ID0gYCR7dGltZX1gO1xuXHR3ZWVrZGF5SW5mby5hcHBlbmRDaGlsZCh3ZWVrZGF5VGltZSk7XG5cdGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFzaWRlLXdlYXRoZXItaW5mby1pY29uXCIpO1xuXHRpY29uLnNyYyA9IGN1cnJlbnQuY29uZGl0aW9uLmljb247XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlTWFpbkZvcmVjYXN0KGZvcmVjYXN0KSB7XG5cdGNvbnN0IGZvcmVjYXN0RGF5cyA9IGZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xuXHRjb25zdCBmb3JlY2FzdENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYWluLWZvcmVjYXN0XCIpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGZvcmVjYXN0Q2FyZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBjYXJkQ29udGVudCA9IGZvcmVjYXN0Q2FyZHNbaV0uY2hpbGRyZW47XG5cdFx0Y2FyZENvbnRlbnRbMF0udGV4dENvbnRlbnQgPSBnZXREYXlGcm9tRGF0ZShmb3JlY2FzdERheXNbaV0uZGF0ZSk7XG5cdFx0Y2FyZENvbnRlbnRbMV0uc3JjID0gZm9yZWNhc3REYXlzW2ldLmRheS5jb25kaXRpb24uaWNvbjtcblx0XHRjb25zdCBkZWdyZWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN1cFwiKTtcblx0XHRkZWdyZWVzLnRleHRDb250ZW50ID0gXCLCsENcIjtcblx0XHRsZXQgdGVtcGVyYXR1cmVzID0gY2FyZENvbnRlbnRbMl0uY2hpbGRyZW47XG5cdFx0dGVtcGVyYXR1cmVzWzBdLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChmb3JlY2FzdERheXNbaV0uZGF5Lm1heHRlbXBfYyk7XG5cdFx0dGVtcGVyYXR1cmVzWzBdLmFwcGVuZENoaWxkKGRlZ3JlZXMuY2xvbmVOb2RlKHRydWUpKTtcblx0XHR0ZW1wZXJhdHVyZXNbMV0udGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGZvcmVjYXN0RGF5c1tpXS5kYXkubWludGVtcF9jKTtcblx0XHR0ZW1wZXJhdHVyZXNbMV0uYXBwZW5kQ2hpbGQoZGVncmVlcy5jbG9uZU5vZGUodHJ1ZSkpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNldERheUluZm9IZWFkaW5nKGhlYWRpbmcsIGZvcmVjYXN0KSB7XG5cdGhlYWRpbmcudGV4dENvbnRlbnQgPSBgJHtnZXREYXlGcm9tRGF0ZShmb3JlY2FzdC5kYXRlKX0ncyBpbmZvYDtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGV4dEFmdGVySWNvbihwYXJlbnQpIHtcblx0Y29uc3Qgbm9kZXMgPSBwYXJlbnQuY2hpbGROb2Rlcztcblx0Y29uc3QgbGFzdE5vZGUgPSBub2Rlc1tub2Rlcy5sZW5ndGggLSAxXTtcblx0cGFyZW50LnJlbW92ZUNoaWxkKGxhc3ROb2RlKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVXaW5kQ2FyZChjYXJkLCBmb3JlY2FzdCkge1xuXHRjb25zdCB3aW5kVmFsdWUgPSBjYXJkWzBdLmNoaWxkcmVuWzFdO1xuXHRjb25zdCB3aW5kTWV0cmljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdGNvbnN0IHdpbmRTcGVlZCA9IGZvcmVjYXN0LmRheS5tYXh3aW5kX2twaDtcblx0d2luZE1ldHJpYy50ZXh0Q29udGVudCA9IFwia20vaFwiO1xuXHR3aW5kTWV0cmljLmNsYXNzTGlzdC5hZGQoXCJ2YWx1ZS1tZXRyaWNcIik7XG5cdHdpbmRWYWx1ZS50ZXh0Q29udGVudCA9IGAke3dpbmRTcGVlZH0gYDtcblx0d2luZFZhbHVlLmFwcGVuZENoaWxkKHdpbmRNZXRyaWMpO1xuXHRjb25zdCB3aW5kU3RyZW5ndGggPSB3aW5kVmFsdWUubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHRjaGFuZ2VUZXh0QWZ0ZXJJY29uKHdpbmRTdHJlbmd0aCk7XG5cdGlmICh3aW5kVmFsdWUgPCAxLjYpIHdpbmRTdHJlbmd0aC50ZXh0Q29udGVudCA9IFwiQ2FsbVwiO1xuXHRlbHNlIGlmICh3aW5kU3BlZWQgPCAyOSlcblx0XHR3aW5kU3RyZW5ndGguYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJMaWdodCB3aW5kXCIpKTtcblx0ZWxzZSBpZiAod2luZFNwZWVkIDwgMzUpXG5cdFx0d2luZFN0cmVuZ3RoLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTW9kZXJhdGUgd2luZFwiKSk7XG5cdGVsc2UgaWYgKHdpbmRTcGVlZCA8IDg3KVxuXHRcdHdpbmRTdHJlbmd0aC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlN0cm9uZyB3aW5kXCIpKTtcblx0ZWxzZSBpZiAod2luZFNwZWVkIDwgOTcpXG5cdFx0d2luZFN0cmVuZ3RoLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiR2FsZSB3aW5kXCIpKTtcblx0ZWxzZSBpZiAod2luZFNwZWVkID4gMTE2KVxuXHRcdHdpbmRTdHJlbmd0aC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlN0b3JtIHdpbmRcIikpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUh1bWlkaXR5Q2FyZChjYXJkLCBmb3JlY2FzdCkge1xuXHRjb25zdCBodW1pZGl0eVZhbHVlID0gY2FyZFsxXS5jaGlsZHJlblsxXTtcblx0Y29uc3QgaHVtaWRpdHlNZXRyaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0Y29uc3QgaHVtaWRpdHlQZXJjZW50YWdlID0gZm9yZWNhc3QuZGF5LmF2Z2h1bWlkaXR5O1xuXHRodW1pZGl0eU1ldHJpYy50ZXh0Q29udGVudCA9IFwiJVwiO1xuXHRodW1pZGl0eU1ldHJpYy5jbGFzc0xpc3QuYWRkKFwidmFsdWUtbWV0cmljXCIpO1xuXHRodW1pZGl0eVZhbHVlLnRleHRDb250ZW50ID0gYCR7aHVtaWRpdHlQZXJjZW50YWdlfSBgO1xuXHRodW1pZGl0eVZhbHVlLmFwcGVuZENoaWxkKGh1bWlkaXR5TWV0cmljKTtcblx0Y29uc3QgYW1vdW50T2ZIdW1pZGl0eSA9IGh1bWlkaXR5VmFsdWUubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHRjaGFuZ2VUZXh0QWZ0ZXJJY29uKGFtb3VudE9mSHVtaWRpdHkpO1xuXHRpZiAoaHVtaWRpdHlQZXJjZW50YWdlIDwgMjUpXG5cdFx0YW1vdW50T2ZIdW1pZGl0eS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkxvd1wiKSk7XG5cdGVsc2UgaWYgKGh1bWlkaXR5UGVyY2VudGFnZSA8PSAzMClcblx0XHRhbW91bnRPZkh1bWlkaXR5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiU2xpZ2h0bHkgbG93XCIpKTtcblx0ZWxzZSBpZiAoaHVtaWRpdHlQZXJjZW50YWdlIDwgNjApXG5cdFx0YW1vdW50T2ZIdW1pZGl0eS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkdvb2RcIikpO1xuXHRlbHNlIGlmIChodW1pZGl0eVBlcmNlbnRhZ2UgPCA3MClcblx0XHRhbW91bnRPZkh1bWlkaXR5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiU2xpZ2h0bHkgaGlnaFwiKSk7XG5cdGVsc2UgYW1vdW50T2ZIdW1pZGl0eS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkhpZ2hcIikpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZU1haW5Gb3JlY2FzdEluZm8oZm9yZWNhc3QpIHtcblx0Y29uc3QgZm9yZWNhc3REYXlzID0gZm9yZWNhc3QuZm9yZWNhc3RkYXk7XG5cdGNvbnN0IGZvcmVjYXN0SW5mb0NhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYWluLWRheS1jYXJkc1wiKTtcblx0Y29uc3QgZGF5c0luZm9IZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYWluLWRheS1pbmZvLXBhcmFncmFwaFwiKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBmb3JlY2FzdEluZm9DYXJkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGluZm9DYXJkcyA9IGZvcmVjYXN0SW5mb0NhcmRzW2ldLmNoaWxkcmVuO1xuXHRcdHNldERheUluZm9IZWFkaW5nKGRheXNJbmZvSGVhZGluZ1tpXSwgZm9yZWNhc3REYXlzW2ldKTtcblx0XHRwb3B1bGF0ZVdpbmRDYXJkKGluZm9DYXJkcywgZm9yZWNhc3REYXlzW2ldKTtcblx0XHRwb3B1bGF0ZUh1bWlkaXR5Q2FyZChpbmZvQ2FyZHMsIGZvcmVjYXN0RGF5c1tpXSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlT25Mb2FkKCkge1xuXHRnZXRXZWF0aGVyKFwiTG9uZG9uXCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0Y29uc3QgbG9jYXRpb25JbmZvID0gcmVzcG9uc2UubG9jYXRpb247XG5cdFx0Y29uc3QgY3VycmVudEluZm8gPSByZXNwb25zZS5jdXJyZW50O1xuXHRcdGNvbnN0IGZvcmVjYXN0SW5mbyA9IHJlc3BvbnNlLmZvcmVjYXN0O1xuXHRcdHBvcHVsYXRlQXNpZGUobG9jYXRpb25JbmZvLCBjdXJyZW50SW5mbyk7XG5cdFx0cG9wdWxhdGVNYWluRm9yZWNhc3QoZm9yZWNhc3RJbmZvKTtcblx0XHRwb3B1bGF0ZU1haW5Gb3JlY2FzdEluZm8oZm9yZWNhc3RJbmZvKTtcblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZUNvbnRlbnQoKSB7XG5cdGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcblx0c2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQpID0+IHtcblx0XHRpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcblx0XHRcdGxldCBsb2NhdGlvbkluZm8sIGN1cnJlbnRJbmZvLCBmb3JlY2FzdEluZm87XG5cdFx0XHRnZXRXZWF0aGVyKHNlYXJjaC52YWx1ZSkudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0bG9jYXRpb25JbmZvID0gcmVzcG9uc2UubG9jYXRpb247XG5cdFx0XHRcdGN1cnJlbnRJbmZvID0gcmVzcG9uc2UuY3VycmVudDtcblx0XHRcdFx0Zm9yZWNhc3RJbmZvID0gcmVzcG9uc2UuZm9yZWNhc3Q7XG5cdFx0XHRcdHBvcHVsYXRlQXNpZGUobG9jYXRpb25JbmZvLCBjdXJyZW50SW5mbyk7XG5cdFx0XHRcdHBvcHVsYXRlTWFpbkZvcmVjYXN0KGZvcmVjYXN0SW5mbyk7XG5cdFx0XHRcdHBvcHVsYXRlTWFpbkZvcmVjYXN0SW5mbyhmb3JlY2FzdEluZm8pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc2Fzcy9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgeyBwb3B1bGF0ZU9uTG9hZCwgcG9wdWxhdGVDb250ZW50IH0gZnJvbSBcIi4vbW9kdWxlcy9wb3B1bGF0ZUNvbnRlbnRcIjtcblxucG9wdWxhdGVPbkxvYWQoKTtcbnBvcHVsYXRlQ29udGVudCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9