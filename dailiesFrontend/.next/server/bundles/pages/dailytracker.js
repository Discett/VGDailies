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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ ({

/***/ "./pages/credentials.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export credentials */
/* unused harmony export credentialsContext */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
 //this is going to save user's credentials

var credentials = {
  user: {
    username: '',
    token: ''
  }
};
var credentialsContext = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext(credentials.user);

/***/ }),

/***/ "./pages/dailydata.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__credentials__ = __webpack_require__("./pages/credentials.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_modal__ = __webpack_require__("react-modal");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_modal__);
var _jsxFileName = "C:\\Users\\Luong\\Desktop\\React\\daily-tracker\\dailiesFrontend\\pages\\dailydata.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

 //import axios from 'axios';



 //import dailydatastyles from './styles/dailydatastyles.css'
//DailyData: will contain the data for the user's dailies
//contains view that will load the information
//also a textbox, time in which the daily resets, and submit button
//TODO: eventually implement daylight savings
//TODO: switch statement per game since JSON's per game is case by case
//TODO: specific games would need their own class to display data in DailyDataBox
//TODO: what does setAppElement do?
//Modal.setAppElement('#root');

var customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

var DailyRow =
/*#__PURE__*/
function (_Component) {
  _inherits(DailyRow, _Component);

  function DailyRow() {
    _classCallCheck(this, DailyRow);

    return _possibleConstructorReturn(this, (DailyRow.__proto__ || Object.getPrototypeOf(DailyRow)).apply(this, arguments));
  }

  _createClass(DailyRow, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      var title = data.title;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, data.time_to_reset));
    }
  }]);

  return DailyRow;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var AddDailyInformation =
/*#__PURE__*/
function (_Component2) {
  _inherits(AddDailyInformation, _Component2);

  function AddDailyInformation() {
    var _this;

    _classCallCheck(this, AddDailyInformation);

    _this = _possibleConstructorReturn(this, (AddDailyInformation.__proto__ || Object.getPrototypeOf(AddDailyInformation)).call(this));
    _this.state = {
      modalIsOpen: false
    };
    _this.openModal = _this.openModal.bind(_assertThisInitialized(_this));
    _this.afterOpenModal = _this.afterOpenModal.bind(_assertThisInitialized(_this));
    _this.closeModal = _this.closeModal.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AddDailyInformation, [{
    key: "openModal",
    value: function openModal() {
      this.setState({
        modalIsOpen: true
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.setState({
        modalIsOpen: false
      });
    }
  }, {
    key: "afterOpenModal",
    value: function afterOpenModal() {
      this.subtitle.style.color = '#f00';
    } //TODO: Modal submit needs to add to games in backend

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var button;

      if (this.props.showAddButton) {
        button = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          type: "button",
          onClick: this.openModal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }, "Click to edit dailies");
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, button), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_modal___default.a, {
        isOpen: this.state.modalIsOpen,
        onAfterOpen: this.state.afterOpenModal,
        onRequestClose: this.closeModal,
        style: customStyles,
        contentLabel: "Modify daily menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        ref: function ref(subtitle) {
          return _this2.subtitle = subtitle;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, "Add Game Daily"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: this.closeModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "close"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "Please input daily name and time of reset"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "submit"))));
    }
  }]);

  return AddDailyInformation;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

AddDailyInformation.defaultProps = {
  showAddButton: true
};

var DailyInformation =
/*#__PURE__*/
function (_Component3) {
  _inherits(DailyInformation, _Component3);

  function DailyInformation() {
    _classCallCheck(this, DailyInformation);

    return _possibleConstructorReturn(this, (DailyInformation.__proto__ || Object.getPrototypeOf(DailyInformation)).apply(this, arguments));
  }

  _createClass(DailyInformation, [{
    key: "render",
    value: function render() {
      var rows = [];
      this.props.data.forEach(function (data) {
        rows.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DailyRow, {
          data: data,
          key: data.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }));
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("table", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("thread", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, "Title"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, "Is completed"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, rows));
    }
  }]);

  return DailyInformation;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var DailyDataBox =
/*#__PURE__*/
function (_Component4) {
  _inherits(DailyDataBox, _Component4);

  function DailyDataBox() {
    _classCallCheck(this, DailyDataBox);

    return _possibleConstructorReturn(this, (DailyDataBox.__proto__ || Object.getPrototypeOf(DailyDataBox)).apply(this, arguments));
  }

  _createClass(DailyDataBox, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DailyInformation, {
        data: DATA,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AddDailyInformation, {
        showAddButton: this.props.showAddButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }));
    }
  }]);

  return DailyDataBox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var DATA = [{
  title: 'Overwatch',
  date: new Date(),
  time_to_reset: 5,
  dailies_completed: false
}, {
  title: 'GW2',
  date: new Date(),
  time_to_reset: 5,
  dailies_completed: false
}, {
  title: 'TF2',
  date: new Date(),
  time_to_reset: 5,
  dailies_completed: false
}, {
  title: 'Dragalia',
  date: new Date(),
  time_to_reset: 5,
  dailies_completed: false
}, {
  title: 'Spooky\'s House',
  date: new Date(),
  time_to_reset: 5,
  dailies_completed: false
}];
/* harmony default export */ __webpack_exports__["a"] = (DailyDataBox);

/***/ }),

/***/ "./pages/dailytracker.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credentials__ = __webpack_require__("./pages/credentials.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dailydata__ = __webpack_require__("./pages/dailydata.js");
var _jsxFileName = "C:\\Users\\Luong\\Desktop\\React\\daily-tracker\\dailiesFrontend\\pages\\dailytracker.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var DailyTrackerMainPage =
/*#__PURE__*/
function (_Component) {
  _inherits(DailyTrackerMainPage, _Component);

  function DailyTrackerMainPage() {
    _classCallCheck(this, DailyTrackerMainPage);

    return _possibleConstructorReturn(this, (DailyTrackerMainPage.__proto__ || Object.getPrototypeOf(DailyTrackerMainPage)).apply(this, arguments));
  }

  _createClass(DailyTrackerMainPage, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, "This is the DailyTrackerMainPage"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__dailydata__["a" /* default */], {
        showAddButton: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }));
    }
  }]);

  return DailyTrackerMainPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DailyTrackerMainPage);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/dailytracker.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-modal":
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ })

/******/ });
//# sourceMappingURL=dailytracker.js.map