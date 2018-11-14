webpackHotUpdate(6,{

/***/ "./pages/dailydata.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__credentials__ = __webpack_require__("./pages/credentials.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
var _jsxFileName = "C:\\Users\\Luong\\Desktop\\React\\daily-tracker\\dailiesFrontend\\pages\\dailydata.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

 //import axios from 'axios';


 //DailyData: will contain the data for the user's dailies
//contains view that will load the information
//also a textbox, time in which the daily resets, and submit button
//TODO: eventually implement daylight savings
//TODO: switch statement per game since JSON's per game is case by case
//TODO: specific games would need their own class to display data in DailyDataBox

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
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
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
    _classCallCheck(this, AddDailyInformation);

    return _possibleConstructorReturn(this, (AddDailyInformation.__proto__ || Object.getPrototypeOf(AddDailyInformation)).apply(this, arguments));
  }

  _createClass(AddDailyInformation, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        type: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "Click to add daily");
    }
  }]);

  return AddDailyInformation;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

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
            lineNumber: 44
          }
        }));
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("table", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("thread", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "Title"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "Is completed"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
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
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DailyInformation, {
        data: DATA,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AddDailyInformation, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
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
/* harmony default export */ __webpack_exports__["a"] = (DailyDataBox); //if (typeof window !== 'undefined'){
//    ReactDOM.render(
//        <DailyInformation data={DATA} />,
//        document.getElementById('container')
//    );
//}
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/dailydata")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.1fe9da90d53d8dba3f30.hot-update.js.map