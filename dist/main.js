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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  color: #232323;\n  height: 100vh;\n}\n\naside,\nmain {\n  height: 100vh;\n}\n\n.wrapper {\n  display: flex;\n}\n\n.aside {\n  width: 30%;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 3rem;\n}\n\n.main {\n  flex: 1;\n  overflow-y: auto;\n  background-color: rgba(239, 239, 239, 0.5);\n  padding: 3rem;\n}\n\n.aside-search {\n  display: flex;\n  align-items: center;\n}\n.aside-search :first-child {\n  margin-right: 0.5rem;\n}\n\n.aside-search-input {\n  border: none;\n  outline: none;\n}\n\n.aside-weather-info {\n  display: flex;\n  flex-direction: column;\n}\n\n.aside-weather-info-icon {\n  max-width: 120px;\n}\n\n.aside-weather-info-value {\n  font-size: 6rem;\n}\n\n.aside-weather-info-temeprature .temeperature-degrees {\n  font-size: 3rem;\n  vertical-align: super;\n}\n\n.aside-weather-info-day {\n  font-size: 1.125rem;\n}\n.aside-weather-info-day span {\n  color: #979797;\n}\n\n.aside-city-info {\n  font-weight: 500;\n  font-size: 1.125rem;\n}\n\n.main-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n\n.toggle {\n  --width: 80px;\n  --height: calc(var(--width) / 3);\n  position: relative;\n  display: inline-block;\n  width: var(--width);\n  height: var(--height);\n  border-radius: var(--height);\n  cursor: pointer;\n}\n\n.toggle input {\n  display: none;\n}\n\n.toggle .slider {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: var(--height);\n  border: 2px solid #969696;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle .slider::before {\n  content: \"\";\n  position: absolute;\n  top: 2.5px;\n  left: 2px;\n  width: calc(var(--height) * 0.6);\n  height: calc(var(--height) * 0.6);\n  border-radius: calc(var(--height) / 2);\n  border: 3px solid #969696;\n  background-color: #dbdbdb;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle input:checked + .slider {\n  border-color: #969696;\n  color: #575757;\n}\n\n.toggle input:checked + .slider::before {\n  border-color: #969696;\n  background-color: #dbdbdb;\n  transform: translateX(calc(var(--width) - var(--height)));\n}\n\n.toggle .labels {\n  position: absolute;\n  top: 8px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  color: #575757;\n  font-size: 12px;\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle .labels::after {\n  content: attr(data-off);\n  position: absolute;\n  right: 10px;\n  top: -2px;\n  opacity: 1;\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle .labels::before {\n  content: attr(data-on);\n  position: absolute;\n  left: 10px;\n  top: -2px;\n  opacity: 0;\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle input:checked ~ .labels::after {\n  opacity: 0;\n}\n\n.toggle input:checked ~ .labels::before {\n  opacity: 1;\n}\n\n.main-header-paragraph {\n  font-size: 2rem;\n  font-weight: 800;\n}\n\n.main-day-info-paragraph {\n  font-size: 2rem;\n  font-weight: 800;\n  margin-bottom: 2rem;\n}\n\n.main-forecast-cards,\n.main-day-cards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-column-gap: 1rem;\n  grid-row-gap: 2rem;\n}\n\n.main-forecast-cards {\n  margin-bottom: 2rem;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem 0.5rem;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  border-radius: 0.75rem;\n}\n.card img {\n  max-width: 150px;\n}\n\n.max-temperature,\n.min-temperature {\n  vertical-align: top;\n}\n.max-temperature sup,\n.min-temperature sup {\n  vertical-align: top;\n  font-size: 0.675rem;\n}\n\n.min-temperature {\n  color: #979797;\n}\n\n.main-day-cards > .card {\n  padding: 1.5rem 1rem;\n  align-items: start;\n  margin-bottom: 2rem;\n}\n\n.day-header {\n  font-size: 1.25rem;\n  color: #979797;\n}\n\n.day-wind-value,\n.day-humidity-value,\n.day-visibility-value {\n  font-size: clamp(2rem, 5vw, 4rem);\n  margin: 2rem 0;\n}\n.day-wind-value .value-metric,\n.day-humidity-value .value-metric,\n.day-visibility-value .value-metric {\n  font-size: 1.125rem;\n  margin-left: 0.25rem;\n}\n\n.day-wind-direction,\n.day-humidity-status,\n.day-visibility-status {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.day-wind-direction span,\n.day-humidity-status span,\n.day-visibility-status span {\n  margin-right: 0.5rem;\n}", "",{"version":3,"sources":["webpack://./src/sass/style.scss"],"names":[],"mappings":"AAOA;EACC,sBAAA;EACA,eAAA;AALD;;AAQA;;;EAGC,mBAAA;AALD;;AAQA;;;;;;;;;;EAUC,SAAA;EACA,UAAA;EACA,mBAAA;AALD;;AAQA;;EAEC,gBAAA;AALD;;AAQA;EACC,eAAA;EACA,YAAA;AALD;;AAQA;EACC,iCA1CM;EA2CN,cA1CO;EA2CP,aAAA;AALD;;AAQA;;EAEC,aAAA;AALD;;AAQA;EACC,aAAA;AALD;;AAQA;EACC,UAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,aAAA;AALD;;AAQA;EAGC,OAAA;EACA,gBAAA;EACA,0CAnEY;EAoEZ,aAAA;AAPD;;AAUA;EACC,aAAA;EACA,mBAAA;AAPD;AAQC;EACC,oBAAA;AANF;;AASA;EACC,YAAA;EACA,aAAA;AAND;;AAQA;EACC,aAAA;EACA,sBAAA;AALD;;AAQA;EACC,gBAAA;AALD;;AAQA;EACC,eAAA;AALD;;AAOA;EACC,eAAA;EACA,qBAAA;AAJD;;AAOA;EACC,mBAAA;AAJD;AAKC;EACC,cAvGK;AAoGP;;AAOA;EACC,gBAAA;EACA,mBAAA;AAJD;;AAOA;EACC,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,mBAAA;AAJD;;AAOA;EACC,aAAA;EACA,gCAAA;EACA,kBAAA;EACA,qBAAA;EACA,mBAAA;EACA,qBAAA;EACA,4BAAA;EACA,eAAA;AAJD;;AAOA;EACC,aAAA;AAJD;;AAOA;EACC,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,4BAAA;EACA,yBAAA;EACA,0CAAA;EACA,gCAAA;AAJD;;AAOA;EACC,WAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,gCAAA;EACA,iCAAA;EACA,sCAAA;EACA,yBAAA;EACA,yBAAA;EACA,0CAAA;EACA,gCAAA;AAJD;;AAOA;EACC,qBAAA;EACA,cAAA;AAJD;;AAOA;EACC,qBAAA;EACA,yBAAA;EACA,yDAAA;AAJD;;AAOA;EACC,kBAAA;EACA,QAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,eAAA;EACA,gCAAA;AAJD;;AAOA;EACC,uBAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,UAAA;EACA,gCAAA;AAJD;;AAOA;EACC,sBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,UAAA;EACA,gCAAA;AAJD;;AAOA;EACC,UAAA;AAJD;;AAOA;EACC,UAAA;AAJD;;AAYA;EAJC,eAAA;EACA,gBAAA;AAJD;;AAUA;EAPC,eAAA;EACA,gBAAA;EAQA,mBAAA;AAND;;AASA;;EAEC,aAAA;EACA,qCAAA;EACA,qBAAA;EACA,kBAAA;AAND;;AASA;EACC,mBAAA;AAND;;AAQA;EACC,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,oBAAA;EACA,qDAAA;EACA,sBAAA;AALD;AAMC;EACC,gBAAA;AAJF;;AAQA;;EAEC,mBAAA;AALD;AAMC;;EACC,mBAAA;EACA,mBAAA;AAHF;;AAMA;EACC,cA9PM;AA2PP;;AAKA;EACC,oBAAA;EACA,kBAAA;EACA,mBAAA;AAFD;;AAKA;EACC,kBAAA;EACA,cAxQM;AAsQP;;AAKA;;;EAGC,iCAAA;EAKA,cAAA;AAND;AAEC;;;EACC,mBAAA;EACA,oBAAA;AAEF;;AAGA;;;EAMC,aAAA;EACA,mBAAA;EACA,uBAAA;AAHD;AAFC;;;EACC,oBAAA;AAMF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\");\n\n$font: \"Roboto\", sans-serif;\n$black: #232323;\n$grey: #979797;\n$grey-faded: rgba(239, 239, 239, 0.5);\n\nhtml {\n\tbox-sizing: border-box;\n\tfont-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n\tbox-sizing: inherit;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-weight: normal;\n}\n\nol,\nul {\n\tlist-style: none;\n}\n\nimg {\n\tmax-width: 100%;\n\theight: auto;\n}\n\nbody {\n\tfont-family: $font;\n\tcolor: $black;\n\theight: 100vh;\n}\n\naside,\nmain {\n\theight: 100vh;\n}\n\n.wrapper {\n\tdisplay: flex;\n}\n\n.aside {\n\twidth: 30%;\n\tmax-width: 400px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tpadding: 3rem;\n}\n\n.main {\n\t// Flex and overflow ensure that main is scrollable\n\t// and aside is fixed\n\tflex: 1;\n\toverflow-y: auto;\n\tbackground-color: $grey-faded;\n\tpadding: 3rem;\n}\n\n.aside-search {\n\tdisplay: flex;\n\talign-items: center;\n\t:first-child {\n\t\tmargin-right: 0.5rem;\n\t}\n}\n.aside-search-input {\n\tborder: none;\n\toutline: none;\n}\n.aside-weather-info {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.aside-weather-info-icon {\n\tmax-width: 120px;\n}\n\n.aside-weather-info-value {\n\tfont-size: 6rem;\n}\n.aside-weather-info-temeprature .temeperature-degrees {\n\tfont-size: 3rem;\n\tvertical-align: super;\n}\n\n.aside-weather-info-day {\n\tfont-size: 1.125rem;\n\tspan {\n\t\tcolor: $grey;\n\t}\n}\n\n.aside-city-info {\n\tfont-weight: 500;\n\tfont-size: 1.125rem;\n}\n\n.main-header {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmargin-bottom: 2rem;\n}\n\n.toggle {\n\t--width: 80px;\n\t--height: calc(var(--width) / 3);\n\tposition: relative;\n\tdisplay: inline-block;\n\twidth: var(--width);\n\theight: var(--height);\n\tborder-radius: var(--height);\n\tcursor: pointer;\n}\n\n.toggle input {\n\tdisplay: none;\n}\n\n.toggle .slider {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: var(--height);\n\tborder: 2px solid #969696;\n\tbox-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n\ttransition: all 0.4s ease-in-out;\n}\n\n.toggle .slider::before {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: 2.5px;\n\tleft: 2px;\n\twidth: calc(var(--height) * 0.6);\n\theight: calc(var(--height) * 0.6);\n\tborder-radius: calc(var(--height) / 2);\n\tborder: 3px solid #969696;\n\tbackground-color: #dbdbdb;\n\tbox-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);\n\ttransition: all 0.4s ease-in-out;\n}\n\n.toggle input:checked + .slider {\n\tborder-color: #969696;\n\tcolor: #575757;\n}\n\n.toggle input:checked + .slider::before {\n\tborder-color: #969696;\n\tbackground-color: #dbdbdb;\n\ttransform: translateX(calc(var(--width) - var(--height)));\n}\n\n.toggle .labels {\n\tposition: absolute;\n\ttop: 8px;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tcolor: #575757;\n\tfont-size: 12px;\n\ttransition: all 0.4s ease-in-out;\n}\n\n.toggle .labels::after {\n\tcontent: attr(data-off);\n\tposition: absolute;\n\tright: 10px;\n\ttop: -2px;\n\topacity: 1;\n\ttransition: all 0.4s ease-in-out;\n}\n\n.toggle .labels::before {\n\tcontent: attr(data-on);\n\tposition: absolute;\n\tleft: 10px;\n\ttop: -2px;\n\topacity: 0;\n\ttransition: all 0.4s ease-in-out;\n}\n\n.toggle input:checked ~ .labels::after {\n\topacity: 0;\n}\n\n.toggle input:checked ~ .labels::before {\n\topacity: 1;\n}\n\n@mixin heading-paragraph {\n\tfont-size: 2rem;\n\tfont-weight: 800;\n}\n\n.main-header-paragraph {\n\t@include heading-paragraph();\n}\n.main-day-info-paragraph {\n\t@include heading-paragraph();\n\tmargin-bottom: 2rem;\n}\n\n.main-forecast-cards,\n.main-day-cards {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, 1fr);\n\tgrid-column-gap: 1rem;\n\tgrid-row-gap: 2rem;\n}\n\n.main-forecast-cards {\n\tmargin-bottom: 2rem;\n}\n.card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 2rem 0.5rem;\n\tbox-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n\tborder-radius: 0.75rem;\n\timg {\n\t\tmax-width: 150px;\n\t}\n}\n\n.max-temperature,\n.min-temperature {\n\tvertical-align: top;\n\tsup {\n\t\tvertical-align: top;\n\t\tfont-size: 0.675rem;\n\t}\n}\n.min-temperature {\n\tcolor: $grey;\n}\n.main-day-cards > .card {\n\tpadding: 1.5rem 1rem;\n\talign-items: start;\n\tmargin-bottom: 2rem;\n}\n\n.day-header {\n\tfont-size: 1.25rem;\n\tcolor: $grey;\n}\n\n.day-wind-value,\n.day-humidity-value,\n.day-visibility-value {\n\tfont-size: clamp(2rem, 5vw, 4rem);\n\t.value-metric {\n\t\tfont-size: 1.125rem;\n\t\tmargin-left: 0.25rem;\n\t}\n\tmargin: 2rem 0;\n}\n\n.day-wind-direction,\n.day-humidity-status,\n.day-visibility-status {\n\tspan {\n\t\tmargin-right: 0.5rem;\n\t}\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "changeTemperatureMetric": () => (/* binding */ changeTemperatureMetric),
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
	const temperature = document.querySelector(".aside-weather-info-value");
	const degrees = document.createElement("sup");
	const temperatureMetric = document.querySelector(".toggle input").checked;
	if (temperatureMetric) {
		degrees.textContent = "°F";
		degrees.classList.add("temeperature-degrees");
		temperature.textContent = `${parseInt(current.temp_f)}`;
		temperature.append(degrees);
	} else {
		degrees.textContent = "°C";
		degrees.classList.add("temeperature-degrees");
		temperature.textContent = `${current.temp_c}`;
		temperature.append(degrees);
	}
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
		const temperatureMetric = document.querySelector(".toggle input").checked;
		let temperatures = cardContent[2].children;
		degrees.textContent = "°C";
		if (temperatureMetric) {
			degrees.textContent = "°F";
			temperatures[0].textContent = Math.round(forecastDays[i].day.maxtemp_f);
			temperatures[0].appendChild(degrees.cloneNode(true));
			temperatures[1].textContent = Math.round(forecastDays[i].day.mintemp_f);
			temperatures[1].appendChild(degrees.cloneNode(true));
		} else {
			degrees.textContent = "°C";
			temperatures[0].textContent = Math.round(forecastDays[i].day.maxtemp_c);
			temperatures[0].appendChild(degrees.cloneNode(true));
			temperatures[1].textContent = Math.round(forecastDays[i].day.mintemp_c);
			temperatures[1].appendChild(degrees.cloneNode(true));
		}
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
	windValueHolder.textContent = windSpeed;
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
	humidityValueHolder.textContent = humidityPercentage;
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
	const visibilityDistance = forecast.day.avgvis_km;
	visibilityMetric.textContent = "km";
	visibilityMetric.classList.add("value-metric");
	visibilityValueHolder.textContent = visibilityDistance;
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
				sessionStorage.clear();
				locationInfo = response.location;
				currentInfo = response.current;
				forecastInfo = response.forecast;
				sessionStorage.setItem("current_temp_c", currentInfo.temp_c);
				sessionStorage.setItem("current_temp_f", currentInfo.temp_f);
				for (let i in forecastInfo.forecastday) {
					let day = forecastInfo.forecastday[i].day;
					sessionStorage.setItem(`maxtemp${i}_c`, day.maxtemp_c);
					sessionStorage.setItem(`mintemp${i}_c`, day.mintemp_c);
					sessionStorage.setItem(`maxtemp${i}_f`, parseInt(day.maxtemp_f));
					sessionStorage.setItem(`mintemp${i}_f`, parseInt(day.mintemp_f));
				}
				populateAside(locationInfo, currentInfo);
				populateMainForecast(forecastInfo);
				populateMainForecastInfo(forecastInfo);
			});
		}
	});
}

function changeTemperatureMetric() {
	const temperatureMetric = document.querySelector(".toggle input");
	const asideTemperature = document.querySelector(".aside-weather-info-value");
	const asideDegrees = document.createElement("sup");
	const forecastCards = document.querySelectorAll(".main-forecast");
	temperatureMetric.addEventListener("change", () => {
		if (temperatureMetric.checked) {
			// Side
			asideDegrees.textContent = "°F";
			asideDegrees.classList.add("temeperature-degrees");
			asideTemperature.textContent = `${parseInt(
				sessionStorage.getItem("current_temp_f")
			)}`;
			asideTemperature.append(asideDegrees);
			// Forecast
			for (let i = 0; i < forecastCards.length; i++) {
				const cardContent = forecastCards[i].children;
				const degreesCard = document.createElement("sup");
				let temperatures = cardContent[2].children;
				degreesCard.textContent = "°F";
				temperatures[0].textContent = sessionStorage.getItem(`maxtemp${i}_f`);
				temperatures[0].appendChild(degreesCard.cloneNode(true));
				temperatures[1].textContent = sessionStorage.getItem(`mintemp${i}_f`);
				temperatures[1].appendChild(degreesCard.cloneNode(true));
			}
		} else {
			// Side
			asideDegrees.textContent = "°C";
			asideDegrees.classList.add("temeperature-degrees");
			asideTemperature.textContent = `${sessionStorage.getItem("current_temp_c")}`;
			asideTemperature.append(asideDegrees);
			// Forecast
			for (let i = 0; i < forecastCards.length; i++) {
				const cardContent = forecastCards[i].children;
				const degreesCard = document.createElement("sup");
				let temperatures = cardContent[2].children;
				degreesCard.textContent = "°C";
				temperatures[0].textContent = parseInt(
					sessionStorage.getItem(`maxtemp${i}_c`)
				);
				temperatures[0].appendChild(degreesCard.cloneNode(true));
				temperatures[1].textContent = parseInt(
					sessionStorage.getItem(`mintemp${i}_c`)
				);
				temperatures[1].appendChild(degreesCard.cloneNode(true));
			}
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
(0,_modules_populateContent__WEBPACK_IMPORTED_MODULE_1__.changeTemperatureMetric)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtHQUErRyxJQUFJLGtCQUFrQjtBQUNySTtBQUNBLGdEQUFnRCwyQkFBMkIsb0JBQW9CLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLHNEQUFzRCxjQUFjLGVBQWUsd0JBQXdCLEdBQUcsYUFBYSxxQkFBcUIsR0FBRyxTQUFTLG9CQUFvQixpQkFBaUIsR0FBRyxVQUFVLHdDQUF3QyxtQkFBbUIsa0JBQWtCLEdBQUcsa0JBQWtCLGtCQUFrQixHQUFHLGNBQWMsa0JBQWtCLEdBQUcsWUFBWSxlQUFlLHFCQUFxQixrQkFBa0IsMkJBQTJCLG1DQUFtQyxrQkFBa0IsR0FBRyxXQUFXLFlBQVkscUJBQXFCLCtDQUErQyxrQkFBa0IsR0FBRyxtQkFBbUIsa0JBQWtCLHdCQUF3QixHQUFHLDhCQUE4Qix5QkFBeUIsR0FBRyx5QkFBeUIsaUJBQWlCLGtCQUFrQixHQUFHLHlCQUF5QixrQkFBa0IsMkJBQTJCLEdBQUcsOEJBQThCLHFCQUFxQixHQUFHLCtCQUErQixvQkFBb0IsR0FBRywyREFBMkQsb0JBQW9CLDBCQUEwQixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRyxnQ0FBZ0MsbUJBQW1CLEdBQUcsc0JBQXNCLHFCQUFxQix3QkFBd0IsR0FBRyxrQkFBa0Isa0JBQWtCLG1DQUFtQyx3QkFBd0Isd0JBQXdCLEdBQUcsYUFBYSxrQkFBa0IscUNBQXFDLHVCQUF1QiwwQkFBMEIsd0JBQXdCLDBCQUEwQixpQ0FBaUMsb0JBQW9CLEdBQUcsbUJBQW1CLGtCQUFrQixHQUFHLHFCQUFxQix1QkFBdUIsV0FBVyxZQUFZLGdCQUFnQixpQkFBaUIsaUNBQWlDLDhCQUE4QiwrQ0FBK0MscUNBQXFDLEdBQUcsNkJBQTZCLGtCQUFrQix1QkFBdUIsZUFBZSxjQUFjLHFDQUFxQyxzQ0FBc0MsMkNBQTJDLDhCQUE4Qiw4QkFBOEIsK0NBQStDLHFDQUFxQyxHQUFHLHFDQUFxQywwQkFBMEIsbUJBQW1CLEdBQUcsNkNBQTZDLDBCQUEwQiw4QkFBOEIsOERBQThELEdBQUcscUJBQXFCLHVCQUF1QixhQUFhLFlBQVksZ0JBQWdCLGlCQUFpQixtQkFBbUIsb0JBQW9CLHFDQUFxQyxHQUFHLDRCQUE0Qiw0QkFBNEIsdUJBQXVCLGdCQUFnQixjQUFjLGVBQWUscUNBQXFDLEdBQUcsNkJBQTZCLDJCQUEyQix1QkFBdUIsZUFBZSxjQUFjLGVBQWUscUNBQXFDLEdBQUcsNENBQTRDLGVBQWUsR0FBRyw2Q0FBNkMsZUFBZSxHQUFHLDRCQUE0QixvQkFBb0IscUJBQXFCLEdBQUcsOEJBQThCLG9CQUFvQixxQkFBcUIsd0JBQXdCLEdBQUcsNENBQTRDLGtCQUFrQiwwQ0FBMEMsMEJBQTBCLHVCQUF1QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyxXQUFXLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3Qix5QkFBeUIsMERBQTBELDJCQUEyQixHQUFHLGFBQWEscUJBQXFCLEdBQUcseUNBQXlDLHdCQUF3QixHQUFHLCtDQUErQyx3QkFBd0Isd0JBQXdCLEdBQUcsc0JBQXNCLG1CQUFtQixHQUFHLDZCQUE2Qix5QkFBeUIsdUJBQXVCLHdCQUF3QixHQUFHLGlCQUFpQix1QkFBdUIsbUJBQW1CLEdBQUcsbUVBQW1FLHNDQUFzQyxtQkFBbUIsR0FBRywyR0FBMkcsd0JBQXdCLHlCQUF5QixHQUFHLHlFQUF5RSxrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLHNGQUFzRix5QkFBeUIsR0FBRyxPQUFPLHNGQUFzRixXQUFXLFVBQVUsTUFBTSxPQUFPLFdBQVcsTUFBTSxjQUFjLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE9BQU8sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLEtBQUssT0FBTyxXQUFXLFdBQVcsTUFB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QUNBLEVBQUU7QUFDRjs7Ozs7OztVQ3pPQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0EyQjtBQUtROztBQUVuQyx3RUFBYztBQUNkLHlFQUFlO0FBQ2YsaUZBQXVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zYXNzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc2Fzcy9zdHlsZS5zY3NzPzRkMzciLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21vZHVsZXMvZ2V0V2VhdGhlckRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tb2R1bGVzL3BvcHVsYXRlQ29udGVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbm9sLFxcbnVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMjMyMzIzO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYXNpZGUsXFxubWFpbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYXNpZGUge1xcbiAgd2lkdGg6IDMwJTtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDNyZW07XFxufVxcblxcbi5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzksIDIzOSwgMjM5LCAwLjUpO1xcbiAgcGFkZGluZzogM3JlbTtcXG59XFxuXFxuLmFzaWRlLXNlYXJjaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmFzaWRlLXNlYXJjaCA6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi5hc2lkZS1zZWFyY2gtaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmFzaWRlLXdlYXRoZXItaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFzaWRlLXdlYXRoZXItaW5mby1pY29uIHtcXG4gIG1heC13aWR0aDogMTIwcHg7XFxufVxcblxcbi5hc2lkZS13ZWF0aGVyLWluZm8tdmFsdWUge1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbn1cXG5cXG4uYXNpZGUtd2VhdGhlci1pbmZvLXRlbWVwcmF0dXJlIC50ZW1lcGVyYXR1cmUtZGVncmVlcyB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XFxufVxcblxcbi5hc2lkZS13ZWF0aGVyLWluZm8tZGF5IHtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxufVxcbi5hc2lkZS13ZWF0aGVyLWluZm8tZGF5IHNwYW4ge1xcbiAgY29sb3I6ICM5Nzk3OTc7XFxufVxcblxcbi5hc2lkZS1jaXR5LWluZm8ge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxufVxcblxcbi5tYWluLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi50b2dnbGUge1xcbiAgLS13aWR0aDogODBweDtcXG4gIC0taGVpZ2h0OiBjYWxjKHZhcigtLXdpZHRoKSAvIDMpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IHZhcigtLXdpZHRoKTtcXG4gIGhlaWdodDogdmFyKC0taGVpZ2h0KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhlaWdodCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2dnbGUgaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZ2dsZSAuc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhlaWdodCk7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjOTY5Njk2O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50b2dnbGUgLnNsaWRlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyLjVweDtcXG4gIGxlZnQ6IDJweDtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWhlaWdodCkgKiAwLjYpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWhlaWdodCkgKiAwLjYpO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1oZWlnaHQpIC8gMik7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjOTY5Njk2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9nZ2xlIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJvcmRlci1jb2xvcjogIzk2OTY5NjtcXG4gIGNvbG9yOiAjNTc1NzU3O1xcbn1cXG5cXG4udG9nZ2xlIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOjpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjOTY5Njk2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKHZhcigtLXdpZHRoKSAtIHZhcigtLWhlaWdodCkpKTtcXG59XFxuXFxuLnRvZ2dsZSAubGFiZWxzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogOHB4O1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6ICM1NzU3NTc7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRvZ2dsZSAubGFiZWxzOjphZnRlciB7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtb2ZmKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgdG9wOiAtMnB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9nZ2xlIC5sYWJlbHM6OmJlZm9yZSB7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtb24pO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTBweDtcXG4gIHRvcDogLTJweDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gLmxhYmVsczo6YWZ0ZXIge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gLmxhYmVsczo6YmVmb3JlIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5tYWluLWhlYWRlci1wYXJhZ3JhcGgge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLm1haW4tZGF5LWluZm8tcGFyYWdyYXBoIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ubWFpbi1mb3JlY2FzdC1jYXJkcyxcXG4ubWFpbi1kYXktY2FyZHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBncmlkLWNvbHVtbi1nYXA6IDFyZW07XFxuICBncmlkLXJvdy1nYXA6IDJyZW07XFxufVxcblxcbi5tYWluLWZvcmVjYXN0LWNhcmRzIHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMnJlbSAwLjVyZW07XFxuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XFxufVxcbi5jYXJkIGltZyB7XFxuICBtYXgtd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4ubWF4LXRlbXBlcmF0dXJlLFxcbi5taW4tdGVtcGVyYXR1cmUge1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLm1heC10ZW1wZXJhdHVyZSBzdXAsXFxuLm1pbi10ZW1wZXJhdHVyZSBzdXAge1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIGZvbnQtc2l6ZTogMC42NzVyZW07XFxufVxcblxcbi5taW4tdGVtcGVyYXR1cmUge1xcbiAgY29sb3I6ICM5Nzk3OTc7XFxufVxcblxcbi5tYWluLWRheS1jYXJkcyA+IC5jYXJkIHtcXG4gIHBhZGRpbmc6IDEuNXJlbSAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmRheS1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgY29sb3I6ICM5Nzk3OTc7XFxufVxcblxcbi5kYXktd2luZC12YWx1ZSxcXG4uZGF5LWh1bWlkaXR5LXZhbHVlLFxcbi5kYXktdmlzaWJpbGl0eS12YWx1ZSB7XFxuICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDV2dywgNHJlbSk7XFxuICBtYXJnaW46IDJyZW0gMDtcXG59XFxuLmRheS13aW5kLXZhbHVlIC52YWx1ZS1tZXRyaWMsXFxuLmRheS1odW1pZGl0eS12YWx1ZSAudmFsdWUtbWV0cmljLFxcbi5kYXktdmlzaWJpbGl0eS12YWx1ZSAudmFsdWUtbWV0cmljIHtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcXG59XFxuXFxuLmRheS13aW5kLWRpcmVjdGlvbixcXG4uZGF5LWh1bWlkaXR5LXN0YXR1cyxcXG4uZGF5LXZpc2liaWxpdHktc3RhdHVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5kYXktd2luZC1kaXJlY3Rpb24gc3BhbixcXG4uZGF5LWh1bWlkaXR5LXN0YXR1cyBzcGFuLFxcbi5kYXktdmlzaWJpbGl0eS1zdGF0dXMgc3BhbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFPQTtFQUNDLHNCQUFBO0VBQ0EsZUFBQTtBQUxEOztBQVFBOzs7RUFHQyxtQkFBQTtBQUxEOztBQVFBOzs7Ozs7Ozs7O0VBVUMsU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUxEOztBQVFBOztFQUVDLGdCQUFBO0FBTEQ7O0FBUUE7RUFDQyxlQUFBO0VBQ0EsWUFBQTtBQUxEOztBQVFBO0VBQ0MsaUNBMUNNO0VBMkNOLGNBMUNPO0VBMkNQLGFBQUE7QUFMRDs7QUFRQTs7RUFFQyxhQUFBO0FBTEQ7O0FBUUE7RUFDQyxhQUFBO0FBTEQ7O0FBUUE7RUFDQyxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUFMRDs7QUFRQTtFQUdDLE9BQUE7RUFDQSxnQkFBQTtFQUNBLDBDQW5FWTtFQW9FWixhQUFBO0FBUEQ7O0FBVUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7QUFQRDtBQVFDO0VBQ0Msb0JBQUE7QUFORjs7QUFTQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0FBTkQ7O0FBUUE7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7QUFMRDs7QUFRQTtFQUNDLGdCQUFBO0FBTEQ7O0FBUUE7RUFDQyxlQUFBO0FBTEQ7O0FBT0E7RUFDQyxlQUFBO0VBQ0EscUJBQUE7QUFKRDs7QUFPQTtFQUNDLG1CQUFBO0FBSkQ7QUFLQztFQUNDLGNBdkdLO0FBb0dQOztBQU9BO0VBQ0MsZ0JBQUE7RUFDQSxtQkFBQTtBQUpEOztBQU9BO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUpEOztBQU9BO0VBQ0MsYUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7QUFKRDs7QUFPQTtFQUNDLGFBQUE7QUFKRDs7QUFPQTtFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdDQUFBO0FBSkQ7O0FBT0E7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdDQUFBO0FBSkQ7O0FBT0E7RUFDQyxxQkFBQTtFQUNBLGNBQUE7QUFKRDs7QUFPQTtFQUNDLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSx5REFBQTtBQUpEOztBQU9BO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQUpEOztBQU9BO0VBQ0MsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0FBSkQ7O0FBT0E7RUFDQyxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7QUFKRDs7QUFPQTtFQUNDLFVBQUE7QUFKRDs7QUFPQTtFQUNDLFVBQUE7QUFKRDs7QUFZQTtFQUpDLGVBQUE7RUFDQSxnQkFBQTtBQUpEOztBQVVBO0VBUEMsZUFBQTtFQUNBLGdCQUFBO0VBUUEsbUJBQUE7QUFORDs7QUFTQTs7RUFFQyxhQUFBO0VBQ0EscUNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBTkQ7O0FBU0E7RUFDQyxtQkFBQTtBQU5EOztBQVFBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EscURBQUE7RUFDQSxzQkFBQTtBQUxEO0FBTUM7RUFDQyxnQkFBQTtBQUpGOztBQVFBOztFQUVDLG1CQUFBO0FBTEQ7QUFNQzs7RUFDQyxtQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDQyxjQTlQTTtBQTJQUDs7QUFLQTtFQUNDLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUZEOztBQUtBO0VBQ0Msa0JBQUE7RUFDQSxjQXhRTTtBQXNRUDs7QUFLQTs7O0VBR0MsaUNBQUE7RUFLQSxjQUFBO0FBTkQ7QUFFQzs7O0VBQ0MsbUJBQUE7RUFDQSxvQkFBQTtBQUVGOztBQUdBOzs7RUFNQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUhEO0FBRkM7OztFQUNDLG9CQUFBO0FBTUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuJGZvbnQ6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiRibGFjazogIzIzMjMyMztcXG4kZ3JleTogIzk3OTc5NztcXG4kZ3JleS1mYWRlZDogcmdiYSgyMzksIDIzOSwgMjM5LCAwLjUpO1xcblxcbmh0bWwge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcblxcdGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5vbCxcXG51bCB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxub2wsXFxudWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmltZyB7XFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuYm9keSB7XFxuXFx0Zm9udC1mYW1pbHk6ICRmb250O1xcblxcdGNvbG9yOiAkYmxhY2s7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYXNpZGUsXFxubWFpbiB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLndyYXBwZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5hc2lkZSB7XFxuXFx0d2lkdGg6IDMwJTtcXG5cXHRtYXgtd2lkdGg6IDQwMHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0cGFkZGluZzogM3JlbTtcXG59XFxuXFxuLm1haW4ge1xcblxcdC8vIEZsZXggYW5kIG92ZXJmbG93IGVuc3VyZSB0aGF0IG1haW4gaXMgc2Nyb2xsYWJsZVxcblxcdC8vIGFuZCBhc2lkZSBpcyBmaXhlZFxcblxcdGZsZXg6IDE7XFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleS1mYWRlZDtcXG5cXHRwYWRkaW5nOiAzcmVtO1xcbn1cXG5cXG4uYXNpZGUtc2VhcmNoIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0OmZpcnN0LWNoaWxkIHtcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG5cXHR9XFxufVxcbi5hc2lkZS1zZWFyY2gtaW5wdXQge1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG4uYXNpZGUtd2VhdGhlci1pbmZvIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hc2lkZS13ZWF0aGVyLWluZm8taWNvbiB7XFxuXFx0bWF4LXdpZHRoOiAxMjBweDtcXG59XFxuXFxuLmFzaWRlLXdlYXRoZXItaW5mby12YWx1ZSB7XFxuXFx0Zm9udC1zaXplOiA2cmVtO1xcbn1cXG4uYXNpZGUtd2VhdGhlci1pbmZvLXRlbWVwcmF0dXJlIC50ZW1lcGVyYXR1cmUtZGVncmVlcyB7XFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcblxcdHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcXG59XFxuXFxuLmFzaWRlLXdlYXRoZXItaW5mby1kYXkge1xcblxcdGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuXFx0c3BhbiB7XFxuXFx0XFx0Y29sb3I6ICRncmV5O1xcblxcdH1cXG59XFxuXFxuLmFzaWRlLWNpdHktaW5mbyB7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRmb250LXNpemU6IDEuMTI1cmVtO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0bWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLnRvZ2dsZSB7XFxuXFx0LS13aWR0aDogODBweDtcXG5cXHQtLWhlaWdodDogY2FsYyh2YXIoLS13aWR0aCkgLyAzKTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiB2YXIoLS13aWR0aCk7XFxuXFx0aGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xcblxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWhlaWdodCk7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9nZ2xlIGlucHV0IHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9nZ2xlIC5zbGlkZXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Ym9yZGVyLXJhZGl1czogdmFyKC0taGVpZ2h0KTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjOTY5Njk2O1xcblxcdGJveC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRvZ2dsZSAuc2xpZGVyOjpiZWZvcmUge1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDIuNXB4O1xcblxcdGxlZnQ6IDJweDtcXG5cXHR3aWR0aDogY2FsYyh2YXIoLS1oZWlnaHQpICogMC42KTtcXG5cXHRoZWlnaHQ6IGNhbGModmFyKC0taGVpZ2h0KSAqIDAuNik7XFxuXFx0Ym9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1oZWlnaHQpIC8gMik7XFxuXFx0Ym9yZGVyOiAzcHggc29saWQgIzk2OTY5NjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmRiO1xcblxcdGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRvZ2dsZSBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuXFx0Ym9yZGVyLWNvbG9yOiAjOTY5Njk2O1xcblxcdGNvbG9yOiAjNTc1NzU3O1xcbn1cXG5cXG4udG9nZ2xlIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOjpiZWZvcmUge1xcblxcdGJvcmRlci1jb2xvcjogIzk2OTY5NjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmRiO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKHZhcigtLXdpZHRoKSAtIHZhcigtLWhlaWdodCkpKTtcXG59XFxuXFxuLnRvZ2dsZSAubGFiZWxzIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA4cHg7XFxuXFx0bGVmdDogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Y29sb3I6ICM1NzU3NTc7XFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9nZ2xlIC5sYWJlbHM6OmFmdGVyIHtcXG5cXHRjb250ZW50OiBhdHRyKGRhdGEtb2ZmKTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDEwcHg7XFxuXFx0dG9wOiAtMnB4O1xcblxcdG9wYWNpdHk6IDE7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50b2dnbGUgLmxhYmVsczo6YmVmb3JlIHtcXG5cXHRjb250ZW50OiBhdHRyKGRhdGEtb24pO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiAxMHB4O1xcblxcdHRvcDogLTJweDtcXG5cXHRvcGFjaXR5OiAwO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9nZ2xlIGlucHV0OmNoZWNrZWQgfiAubGFiZWxzOjphZnRlciB7XFxuXFx0b3BhY2l0eTogMDtcXG59XFxuXFxuLnRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gLmxhYmVsczo6YmVmb3JlIHtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG5cXG5AbWl4aW4gaGVhZGluZy1wYXJhZ3JhcGgge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXItcGFyYWdyYXBoIHtcXG5cXHRAaW5jbHVkZSBoZWFkaW5nLXBhcmFncmFwaCgpO1xcbn1cXG4ubWFpbi1kYXktaW5mby1wYXJhZ3JhcGgge1xcblxcdEBpbmNsdWRlIGhlYWRpbmctcGFyYWdyYXBoKCk7XFxuXFx0bWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLm1haW4tZm9yZWNhc3QtY2FyZHMsXFxuLm1haW4tZGF5LWNhcmRzIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuXFx0Z3JpZC1jb2x1bW4tZ2FwOiAxcmVtO1xcblxcdGdyaWQtcm93LWdhcDogMnJlbTtcXG59XFxuXFxuLm1haW4tZm9yZWNhc3QtY2FyZHMge1xcblxcdG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcbi5jYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAycmVtIDAuNXJlbTtcXG5cXHRib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xcblxcdGltZyB7XFxuXFx0XFx0bWF4LXdpZHRoOiAxNTBweDtcXG5cXHR9XFxufVxcblxcbi5tYXgtdGVtcGVyYXR1cmUsXFxuLm1pbi10ZW1wZXJhdHVyZSB7XFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXG5cXHRzdXAge1xcblxcdFxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuXFx0XFx0Zm9udC1zaXplOiAwLjY3NXJlbTtcXG5cXHR9XFxufVxcbi5taW4tdGVtcGVyYXR1cmUge1xcblxcdGNvbG9yOiAkZ3JleTtcXG59XFxuLm1haW4tZGF5LWNhcmRzID4gLmNhcmQge1xcblxcdHBhZGRpbmc6IDEuNXJlbSAxcmVtO1xcblxcdGFsaWduLWl0ZW1zOiBzdGFydDtcXG5cXHRtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uZGF5LWhlYWRlciB7XFxuXFx0Zm9udC1zaXplOiAxLjI1cmVtO1xcblxcdGNvbG9yOiAkZ3JleTtcXG59XFxuXFxuLmRheS13aW5kLXZhbHVlLFxcbi5kYXktaHVtaWRpdHktdmFsdWUsXFxuLmRheS12aXNpYmlsaXR5LXZhbHVlIHtcXG5cXHRmb250LXNpemU6IGNsYW1wKDJyZW0sIDV2dywgNHJlbSk7XFxuXFx0LnZhbHVlLW1ldHJpYyB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjEyNXJlbTtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMC4yNXJlbTtcXG5cXHR9XFxuXFx0bWFyZ2luOiAycmVtIDA7XFxufVxcblxcbi5kYXktd2luZC1kaXJlY3Rpb24sXFxuLmRheS1odW1pZGl0eS1zdGF0dXMsXFxuLmRheS12aXNpYmlsaXR5LXN0YXR1cyB7XFxuXFx0c3BhbiB7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuXFx0fVxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpIHtcblx0Y29uc3QgdXJsID0gYGh0dHBzOi8vd2VhdGhlcmFwaS1jb20ucC5yYXBpZGFwaS5jb20vZm9yZWNhc3QuanNvbj9xPSR7Y2l0eX0mZGF5cz0zYDtcblx0Y29uc3Qgb3B0aW5vcyA9IHtcblx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0aGVhZGVyczoge1xuXHRcdFx0XCJYLVJhcGlkQVBJLUtleVwiOiBcIjMwMjMxMTUxNzZtc2gyMTMyY2Q2ODY0YjFmMGZwMTQ3NDg2anNuYWYzYzZhYTVjMzBjXCIsXG5cdFx0XHRcIlgtUmFwaWRBUEktSG9zdFwiOiBcIndlYXRoZXJhcGktY29tLnAucmFwaWRhcGkuY29tXCIsXG5cdFx0fSxcblx0fTtcblxuXHRyZXR1cm4gYXdhaXQgKGF3YWl0IGZldGNoKHVybCwgb3B0aW5vcykpLmpzb24oKTtcbn1cbiIsImltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tIFwiLi9nZXRXZWF0aGVyRGF0YVwiO1xuXG5mdW5jdGlvbiBnZXREYXlGcm9tRGF0ZShkYXRlKSB7XG5cdHJldHVybiBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZVN0cmluZyhcImVuLXVzXCIsIHtcblx0XHR3ZWVrZGF5OiBcImxvbmdcIixcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlQXNpZGUobG9jYXRpb24sIGN1cnJlbnQpIHtcblx0Y29uc3QgY2l0eUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFzaWRlLWNpdHktaW5mb1wiKTtcblx0Y2l0eUluZm8udGV4dENvbnRlbnQgPSBgJHtsb2NhdGlvbi5uYW1lfSwgJHtsb2NhdGlvbi5jb3VudHJ5fWA7XG5cdGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hc2lkZS13ZWF0aGVyLWluZm8tdmFsdWVcIik7XG5cdGNvbnN0IGRlZ3JlZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3VwXCIpO1xuXHRjb25zdCB0ZW1wZXJhdHVyZU1ldHJpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9nZ2xlIGlucHV0XCIpLmNoZWNrZWQ7XG5cdGlmICh0ZW1wZXJhdHVyZU1ldHJpYykge1xuXHRcdGRlZ3JlZXMudGV4dENvbnRlbnQgPSBcIsKwRlwiO1xuXHRcdGRlZ3JlZXMuY2xhc3NMaXN0LmFkZChcInRlbWVwZXJhdHVyZS1kZWdyZWVzXCIpO1xuXHRcdHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7cGFyc2VJbnQoY3VycmVudC50ZW1wX2YpfWA7XG5cdFx0dGVtcGVyYXR1cmUuYXBwZW5kKGRlZ3JlZXMpO1xuXHR9IGVsc2Uge1xuXHRcdGRlZ3JlZXMudGV4dENvbnRlbnQgPSBcIsKwQ1wiO1xuXHRcdGRlZ3JlZXMuY2xhc3NMaXN0LmFkZChcInRlbWVwZXJhdHVyZS1kZWdyZWVzXCIpO1xuXHRcdHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7Y3VycmVudC50ZW1wX2N9YDtcblx0XHR0ZW1wZXJhdHVyZS5hcHBlbmQoZGVncmVlcyk7XG5cdH1cblx0Y29uc3Qgd2Vla2RheUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFzaWRlLXdlYXRoZXItaW5mby1kYXlcIik7XG5cdGNvbnN0IHdlZWtkYXlUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdGNvbnN0IHRpbWUgPSBsb2NhdGlvbi5sb2NhbHRpbWUuc3BsaXQoXCIgXCIpWzFdO1xuXHRjb25zdCB3ZWVrZGF5ID0gZ2V0RGF5RnJvbURhdGUobG9jYXRpb24ubG9jYWx0aW1lLnNwbGl0KFwiIFwiKVswXSk7XG5cdHdlZWtkYXlJbmZvLnRleHRDb250ZW50ID0gYCR7d2Vla2RheX0sIGA7XG5cdHdlZWtkYXlUaW1lLnRleHRDb250ZW50ID0gYCR7dGltZX1gO1xuXHR3ZWVrZGF5SW5mby5hcHBlbmRDaGlsZCh3ZWVrZGF5VGltZSk7XG5cdGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFzaWRlLXdlYXRoZXItaW5mby1pY29uXCIpO1xuXHRpY29uLnNyYyA9IGN1cnJlbnQuY29uZGl0aW9uLmljb247XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlTWFpbkZvcmVjYXN0KGZvcmVjYXN0KSB7XG5cdGNvbnN0IGZvcmVjYXN0RGF5cyA9IGZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xuXHRjb25zdCBmb3JlY2FzdENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYWluLWZvcmVjYXN0XCIpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGZvcmVjYXN0Q2FyZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBjYXJkQ29udGVudCA9IGZvcmVjYXN0Q2FyZHNbaV0uY2hpbGRyZW47XG5cdFx0Y2FyZENvbnRlbnRbMF0udGV4dENvbnRlbnQgPSBnZXREYXlGcm9tRGF0ZShmb3JlY2FzdERheXNbaV0uZGF0ZSk7XG5cdFx0Y2FyZENvbnRlbnRbMV0uc3JjID0gZm9yZWNhc3REYXlzW2ldLmRheS5jb25kaXRpb24uaWNvbjtcblx0XHRjb25zdCBkZWdyZWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN1cFwiKTtcblx0XHRjb25zdCB0ZW1wZXJhdHVyZU1ldHJpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9nZ2xlIGlucHV0XCIpLmNoZWNrZWQ7XG5cdFx0bGV0IHRlbXBlcmF0dXJlcyA9IGNhcmRDb250ZW50WzJdLmNoaWxkcmVuO1xuXHRcdGRlZ3JlZXMudGV4dENvbnRlbnQgPSBcIsKwQ1wiO1xuXHRcdGlmICh0ZW1wZXJhdHVyZU1ldHJpYykge1xuXHRcdFx0ZGVncmVlcy50ZXh0Q29udGVudCA9IFwiwrBGXCI7XG5cdFx0XHR0ZW1wZXJhdHVyZXNbMF0udGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGZvcmVjYXN0RGF5c1tpXS5kYXkubWF4dGVtcF9mKTtcblx0XHRcdHRlbXBlcmF0dXJlc1swXS5hcHBlbmRDaGlsZChkZWdyZWVzLmNsb25lTm9kZSh0cnVlKSk7XG5cdFx0XHR0ZW1wZXJhdHVyZXNbMV0udGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGZvcmVjYXN0RGF5c1tpXS5kYXkubWludGVtcF9mKTtcblx0XHRcdHRlbXBlcmF0dXJlc1sxXS5hcHBlbmRDaGlsZChkZWdyZWVzLmNsb25lTm9kZSh0cnVlKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRlZ3JlZXMudGV4dENvbnRlbnQgPSBcIsKwQ1wiO1xuXHRcdFx0dGVtcGVyYXR1cmVzWzBdLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChmb3JlY2FzdERheXNbaV0uZGF5Lm1heHRlbXBfYyk7XG5cdFx0XHR0ZW1wZXJhdHVyZXNbMF0uYXBwZW5kQ2hpbGQoZGVncmVlcy5jbG9uZU5vZGUodHJ1ZSkpO1xuXHRcdFx0dGVtcGVyYXR1cmVzWzFdLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChmb3JlY2FzdERheXNbaV0uZGF5Lm1pbnRlbXBfYyk7XG5cdFx0XHR0ZW1wZXJhdHVyZXNbMV0uYXBwZW5kQ2hpbGQoZGVncmVlcy5jbG9uZU5vZGUodHJ1ZSkpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBzZXREYXlJbmZvSGVhZGluZyhoZWFkaW5nLCBmb3JlY2FzdCkge1xuXHRoZWFkaW5nLnRleHRDb250ZW50ID0gYCR7Z2V0RGF5RnJvbURhdGUoZm9yZWNhc3QuZGF0ZSl9J3MgaW5mb2A7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRleHRBZnRlckljb24ocGFyZW50KSB7XG5cdGNvbnN0IG5vZGVzID0gcGFyZW50LmNoaWxkTm9kZXM7XG5cdGNvbnN0IGxhc3ROb2RlID0gbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV07XG5cdHBhcmVudC5yZW1vdmVDaGlsZChsYXN0Tm9kZSk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlV2luZENhcmQoY2FyZCwgZm9yZWNhc3QpIHtcblx0Y29uc3Qgd2luZFZhbHVlSG9sZGVyID0gY2FyZFswXS5jaGlsZHJlblsxXTtcblx0Y29uc3Qgd2luZE1ldHJpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRjb25zdCB3aW5kU3BlZWQgPSBmb3JlY2FzdC5kYXkubWF4d2luZF9rcGg7XG5cdHdpbmRNZXRyaWMudGV4dENvbnRlbnQgPSBcImttL2hcIjtcblx0d2luZE1ldHJpYy5jbGFzc0xpc3QuYWRkKFwidmFsdWUtbWV0cmljXCIpO1xuXHR3aW5kVmFsdWVIb2xkZXIudGV4dENvbnRlbnQgPSB3aW5kU3BlZWQ7XG5cdHdpbmRWYWx1ZUhvbGRlci5hcHBlbmRDaGlsZCh3aW5kTWV0cmljKTtcblx0Y29uc3Qgd2luZFN0cmVuZ3RoID0gd2luZFZhbHVlSG9sZGVyLm5leHRFbGVtZW50U2libGluZztcblx0Y2hhbmdlVGV4dEFmdGVySWNvbih3aW5kU3RyZW5ndGgpO1xuXHRpZiAod2luZFNwZWVkIDwgMS42KSB3aW5kU3RyZW5ndGgudGV4dENvbnRlbnQgPSBcIkNhbG1cIjtcblx0ZWxzZSBpZiAod2luZFNwZWVkIDwgMjkpXG5cdFx0d2luZFN0cmVuZ3RoLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTGlnaHQgd2luZFwiKSk7XG5cdGVsc2UgaWYgKHdpbmRTcGVlZCA8IDM1KVxuXHRcdHdpbmRTdHJlbmd0aC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIk1vZGVyYXRlIHdpbmRcIikpO1xuXHRlbHNlIGlmICh3aW5kU3BlZWQgPCA4Nylcblx0XHR3aW5kU3RyZW5ndGguYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJTdHJvbmcgd2luZFwiKSk7XG5cdGVsc2UgaWYgKHdpbmRTcGVlZCA8IDk3KVxuXHRcdHdpbmRTdHJlbmd0aC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkdhbGUgd2luZFwiKSk7XG5cdGVsc2UgaWYgKHdpbmRTcGVlZCA+IDExNilcblx0XHR3aW5kU3RyZW5ndGguYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJTdG9ybSB3aW5kXCIpKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVIdW1pZGl0eUNhcmQoY2FyZCwgZm9yZWNhc3QpIHtcblx0Y29uc3QgaHVtaWRpdHlWYWx1ZUhvbGRlciA9IGNhcmRbMV0uY2hpbGRyZW5bMV07XG5cdGNvbnN0IGh1bWlkaXR5TWV0cmljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdGNvbnN0IGh1bWlkaXR5UGVyY2VudGFnZSA9IGZvcmVjYXN0LmRheS5hdmdodW1pZGl0eTtcblx0aHVtaWRpdHlNZXRyaWMudGV4dENvbnRlbnQgPSBcIiVcIjtcblx0aHVtaWRpdHlNZXRyaWMuY2xhc3NMaXN0LmFkZChcInZhbHVlLW1ldHJpY1wiKTtcblx0aHVtaWRpdHlWYWx1ZUhvbGRlci50ZXh0Q29udGVudCA9IGh1bWlkaXR5UGVyY2VudGFnZTtcblx0aHVtaWRpdHlWYWx1ZUhvbGRlci5hcHBlbmRDaGlsZChodW1pZGl0eU1ldHJpYyk7XG5cdGNvbnN0IGh1bWlkaXR5U3RhdHVzID0gaHVtaWRpdHlWYWx1ZUhvbGRlci5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdGNoYW5nZVRleHRBZnRlckljb24oaHVtaWRpdHlTdGF0dXMpO1xuXHRpZiAoaHVtaWRpdHlQZXJjZW50YWdlIDwgMjUpXG5cdFx0aHVtaWRpdHlTdGF0dXMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJMb3dcIikpO1xuXHRlbHNlIGlmIChodW1pZGl0eVBlcmNlbnRhZ2UgPCAzMClcblx0XHRodW1pZGl0eVN0YXR1cy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNsaWdodGx5IGxvd1wiKSk7XG5cdGVsc2UgaWYgKGh1bWlkaXR5UGVyY2VudGFnZSA8IDYwKVxuXHRcdGh1bWlkaXR5U3RhdHVzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiR29vZFwiKSk7XG5cdGVsc2UgaWYgKGh1bWlkaXR5UGVyY2VudGFnZSA8IDcwKVxuXHRcdGh1bWlkaXR5U3RhdHVzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiU2xpZ2h0bHkgaGlnaFwiKSk7XG5cdGVsc2UgaHVtaWRpdHlTdGF0dXMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJIaWdoXCIpKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVWaXNpYmlsaXR5Q2FyZChjYXJkLCBmb3JlY2FzdCkge1xuXHRjb25zdCB2aXNpYmlsaXR5VmFsdWVIb2xkZXIgPSBjYXJkWzJdLmNoaWxkcmVuWzFdO1xuXHRjb25zdCB2aXNpYmlsaXR5TWV0cmljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdGNvbnN0IHZpc2liaWxpdHlEaXN0YW5jZSA9IGZvcmVjYXN0LmRheS5hdmd2aXNfa207XG5cdHZpc2liaWxpdHlNZXRyaWMudGV4dENvbnRlbnQgPSBcImttXCI7XG5cdHZpc2liaWxpdHlNZXRyaWMuY2xhc3NMaXN0LmFkZChcInZhbHVlLW1ldHJpY1wiKTtcblx0dmlzaWJpbGl0eVZhbHVlSG9sZGVyLnRleHRDb250ZW50ID0gdmlzaWJpbGl0eURpc3RhbmNlO1xuXHR2aXNpYmlsaXR5VmFsdWVIb2xkZXIuYXBwZW5kQ2hpbGQodmlzaWJpbGl0eU1ldHJpYyk7XG5cdGNvbnN0IHZpc2liaWxpdHlTdGF0dXMgPSB2aXNpYmlsaXR5VmFsdWVIb2xkZXIubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHRjaGFuZ2VUZXh0QWZ0ZXJJY29uKHZpc2liaWxpdHlTdGF0dXMpO1xuXHRpZiAodmlzaWJpbGl0eURpc3RhbmNlIDwgMilcblx0XHR2aXNpYmlsaXR5U3RhdHVzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTG93XCIpKTtcblx0ZWxzZSBpZiAodmlzaWJpbGl0eURpc3RhbmNlIDwgNSlcblx0XHR2aXNpYmlsaXR5U3RhdHVzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTWVkaXVtXCIpKTtcblx0ZWxzZSB2aXNpYmlsaXR5U3RhdHVzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiR29vZFwiKSk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlTWFpbkZvcmVjYXN0SW5mbyhmb3JlY2FzdCkge1xuXHRjb25zdCBmb3JlY2FzdERheXMgPSBmb3JlY2FzdC5mb3JlY2FzdGRheTtcblx0Y29uc3QgZm9yZWNhc3RJbmZvQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW4tZGF5LWNhcmRzXCIpO1xuXHRjb25zdCBkYXlzSW5mb0hlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW4tZGF5LWluZm8tcGFyYWdyYXBoXCIpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGZvcmVjYXN0SW5mb0NhcmRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgaW5mb0NhcmRzID0gZm9yZWNhc3RJbmZvQ2FyZHNbaV0uY2hpbGRyZW47XG5cdFx0c2V0RGF5SW5mb0hlYWRpbmcoZGF5c0luZm9IZWFkaW5nW2ldLCBmb3JlY2FzdERheXNbaV0pO1xuXHRcdHBvcHVsYXRlV2luZENhcmQoaW5mb0NhcmRzLCBmb3JlY2FzdERheXNbaV0pO1xuXHRcdHBvcHVsYXRlSHVtaWRpdHlDYXJkKGluZm9DYXJkcywgZm9yZWNhc3REYXlzW2ldKTtcblx0XHRwb3B1bGF0ZVZpc2liaWxpdHlDYXJkKGluZm9DYXJkcywgZm9yZWNhc3REYXlzW2ldKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVPbkxvYWQoKSB7XG5cdGdldFdlYXRoZXIoXCJMb25kb25cIikudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRjb25zdCBsb2NhdGlvbkluZm8gPSByZXNwb25zZS5sb2NhdGlvbjtcblx0XHRjb25zdCBjdXJyZW50SW5mbyA9IHJlc3BvbnNlLmN1cnJlbnQ7XG5cdFx0Y29uc3QgZm9yZWNhc3RJbmZvID0gcmVzcG9uc2UuZm9yZWNhc3Q7XG5cdFx0cG9wdWxhdGVBc2lkZShsb2NhdGlvbkluZm8sIGN1cnJlbnRJbmZvKTtcblx0XHRwb3B1bGF0ZU1haW5Gb3JlY2FzdChmb3JlY2FzdEluZm8pO1xuXHRcdHBvcHVsYXRlTWFpbkZvcmVjYXN0SW5mbyhmb3JlY2FzdEluZm8pO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlQ29udGVudCgpIHtcblx0Y29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuXHRzZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4ge1xuXHRcdGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuXHRcdFx0bGV0IGxvY2F0aW9uSW5mbywgY3VycmVudEluZm8sIGZvcmVjYXN0SW5mbztcblx0XHRcdGdldFdlYXRoZXIoc2VhcmNoLnZhbHVlKS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xuXHRcdFx0XHRsb2NhdGlvbkluZm8gPSByZXNwb25zZS5sb2NhdGlvbjtcblx0XHRcdFx0Y3VycmVudEluZm8gPSByZXNwb25zZS5jdXJyZW50O1xuXHRcdFx0XHRmb3JlY2FzdEluZm8gPSByZXNwb25zZS5mb3JlY2FzdDtcblx0XHRcdFx0c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRfdGVtcF9jXCIsIGN1cnJlbnRJbmZvLnRlbXBfYyk7XG5cdFx0XHRcdHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50X3RlbXBfZlwiLCBjdXJyZW50SW5mby50ZW1wX2YpO1xuXHRcdFx0XHRmb3IgKGxldCBpIGluIGZvcmVjYXN0SW5mby5mb3JlY2FzdGRheSkge1xuXHRcdFx0XHRcdGxldCBkYXkgPSBmb3JlY2FzdEluZm8uZm9yZWNhc3RkYXlbaV0uZGF5O1xuXHRcdFx0XHRcdHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oYG1heHRlbXAke2l9X2NgLCBkYXkubWF4dGVtcF9jKTtcblx0XHRcdFx0XHRzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGBtaW50ZW1wJHtpfV9jYCwgZGF5Lm1pbnRlbXBfYyk7XG5cdFx0XHRcdFx0c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShgbWF4dGVtcCR7aX1fZmAsIHBhcnNlSW50KGRheS5tYXh0ZW1wX2YpKTtcblx0XHRcdFx0XHRzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGBtaW50ZW1wJHtpfV9mYCwgcGFyc2VJbnQoZGF5Lm1pbnRlbXBfZikpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBvcHVsYXRlQXNpZGUobG9jYXRpb25JbmZvLCBjdXJyZW50SW5mbyk7XG5cdFx0XHRcdHBvcHVsYXRlTWFpbkZvcmVjYXN0KGZvcmVjYXN0SW5mbyk7XG5cdFx0XHRcdHBvcHVsYXRlTWFpbkZvcmVjYXN0SW5mbyhmb3JlY2FzdEluZm8pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRlbXBlcmF0dXJlTWV0cmljKCkge1xuXHRjb25zdCB0ZW1wZXJhdHVyZU1ldHJpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9nZ2xlIGlucHV0XCIpO1xuXHRjb25zdCBhc2lkZVRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hc2lkZS13ZWF0aGVyLWluZm8tdmFsdWVcIik7XG5cdGNvbnN0IGFzaWRlRGVncmVlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdXBcIik7XG5cdGNvbnN0IGZvcmVjYXN0Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW4tZm9yZWNhc3RcIik7XG5cdHRlbXBlcmF0dXJlTWV0cmljLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuXHRcdGlmICh0ZW1wZXJhdHVyZU1ldHJpYy5jaGVja2VkKSB7XG5cdFx0XHQvLyBTaWRlXG5cdFx0XHRhc2lkZURlZ3JlZXMudGV4dENvbnRlbnQgPSBcIsKwRlwiO1xuXHRcdFx0YXNpZGVEZWdyZWVzLmNsYXNzTGlzdC5hZGQoXCJ0ZW1lcGVyYXR1cmUtZGVncmVlc1wiKTtcblx0XHRcdGFzaWRlVGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtwYXJzZUludChcblx0XHRcdFx0c2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRfdGVtcF9mXCIpXG5cdFx0XHQpfWA7XG5cdFx0XHRhc2lkZVRlbXBlcmF0dXJlLmFwcGVuZChhc2lkZURlZ3JlZXMpO1xuXHRcdFx0Ly8gRm9yZWNhc3Rcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZm9yZWNhc3RDYXJkcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBjYXJkQ29udGVudCA9IGZvcmVjYXN0Q2FyZHNbaV0uY2hpbGRyZW47XG5cdFx0XHRcdGNvbnN0IGRlZ3JlZXNDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN1cFwiKTtcblx0XHRcdFx0bGV0IHRlbXBlcmF0dXJlcyA9IGNhcmRDb250ZW50WzJdLmNoaWxkcmVuO1xuXHRcdFx0XHRkZWdyZWVzQ2FyZC50ZXh0Q29udGVudCA9IFwiwrBGXCI7XG5cdFx0XHRcdHRlbXBlcmF0dXJlc1swXS50ZXh0Q29udGVudCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oYG1heHRlbXAke2l9X2ZgKTtcblx0XHRcdFx0dGVtcGVyYXR1cmVzWzBdLmFwcGVuZENoaWxkKGRlZ3JlZXNDYXJkLmNsb25lTm9kZSh0cnVlKSk7XG5cdFx0XHRcdHRlbXBlcmF0dXJlc1sxXS50ZXh0Q29udGVudCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oYG1pbnRlbXAke2l9X2ZgKTtcblx0XHRcdFx0dGVtcGVyYXR1cmVzWzFdLmFwcGVuZENoaWxkKGRlZ3JlZXNDYXJkLmNsb25lTm9kZSh0cnVlKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFNpZGVcblx0XHRcdGFzaWRlRGVncmVlcy50ZXh0Q29udGVudCA9IFwiwrBDXCI7XG5cdFx0XHRhc2lkZURlZ3JlZXMuY2xhc3NMaXN0LmFkZChcInRlbWVwZXJhdHVyZS1kZWdyZWVzXCIpO1xuXHRcdFx0YXNpZGVUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke3Nlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50X3RlbXBfY1wiKX1gO1xuXHRcdFx0YXNpZGVUZW1wZXJhdHVyZS5hcHBlbmQoYXNpZGVEZWdyZWVzKTtcblx0XHRcdC8vIEZvcmVjYXN0XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGZvcmVjYXN0Q2FyZHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgY2FyZENvbnRlbnQgPSBmb3JlY2FzdENhcmRzW2ldLmNoaWxkcmVuO1xuXHRcdFx0XHRjb25zdCBkZWdyZWVzQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdXBcIik7XG5cdFx0XHRcdGxldCB0ZW1wZXJhdHVyZXMgPSBjYXJkQ29udGVudFsyXS5jaGlsZHJlbjtcblx0XHRcdFx0ZGVncmVlc0NhcmQudGV4dENvbnRlbnQgPSBcIsKwQ1wiO1xuXHRcdFx0XHR0ZW1wZXJhdHVyZXNbMF0udGV4dENvbnRlbnQgPSBwYXJzZUludChcblx0XHRcdFx0XHRzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGBtYXh0ZW1wJHtpfV9jYClcblx0XHRcdFx0KTtcblx0XHRcdFx0dGVtcGVyYXR1cmVzWzBdLmFwcGVuZENoaWxkKGRlZ3JlZXNDYXJkLmNsb25lTm9kZSh0cnVlKSk7XG5cdFx0XHRcdHRlbXBlcmF0dXJlc1sxXS50ZXh0Q29udGVudCA9IHBhcnNlSW50KFxuXHRcdFx0XHRcdHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oYG1pbnRlbXAke2l9X2NgKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHR0ZW1wZXJhdHVyZXNbMV0uYXBwZW5kQ2hpbGQoZGVncmVlc0NhcmQuY2xvbmVOb2RlKHRydWUpKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zYXNzL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB7XG5cdHBvcHVsYXRlT25Mb2FkLFxuXHRwb3B1bGF0ZUNvbnRlbnQsXG5cdGNoYW5nZVRlbXBlcmF0dXJlTWV0cmljLFxufSBmcm9tIFwiLi9tb2R1bGVzL3BvcHVsYXRlQ29udGVudFwiO1xuXG5wb3B1bGF0ZU9uTG9hZCgpO1xucG9wdWxhdGVDb250ZW50KCk7XG5jaGFuZ2VUZW1wZXJhdHVyZU1ldHJpYygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9