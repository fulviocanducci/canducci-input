module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InputFilter(_ref) {
  var value = _ref.value,
      eventValueChange = _ref.eventValueChange,
      eventButtonClick = _ref.eventButtonClick,
      labelButton = _ref.labelButton;

  return _react2.default.createElement(
    "div",
    { className: "input-group mb-3" },
    _react2.default.createElement("input", {
      className: "form-control",
      type: "text",
      value: value,
      onChange: eventValueChange
    }),
    _react2.default.createElement(
      "div",
      { className: "input-group-append" },
      _react2.default.createElement(
        "button",
        {
          onClick: eventButtonClick,
          className: "btn btn-outline-secondary",
          type: "button",
          id: "button-addon2"
        },
        labelButton || "..."
      )
    )
  );
}

exports.default = InputFilter;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InputRange(_ref) {
  var description = _ref.description,
      value = _ref.value,
      min = _ref.min,
      max = _ref.max,
      step = _ref.step,
      eventValueChange = _ref.eventValueChange;

  return _react2.default.createElement(
    "div",
    { className: "input-group mb-3" },
    _react2.default.createElement(
      "label",
      { "for": "formControlRange" },
      description
    ),
    _react2.default.createElement("input", {
      type: "range",
      min: min || 0,
      max: max || 100,
      step: step || 1,
      value: value || 0,
      "class": "form-control-range",
      id: "formControlRange",
      onChange: eventValueChange
    })
  );
}

exports.default = InputRange;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputRanger = exports.InputFilter = undefined;

var _inputFilter = __webpack_require__(1);

var _inputFilter2 = _interopRequireDefault(_inputFilter);

var _inputRange = __webpack_require__(2);

var _inputRange2 = _interopRequireDefault(_inputRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.InputFilter = _inputFilter2.default;
exports.InputRanger = _inputRange2.default;

/***/ })
/******/ ]);