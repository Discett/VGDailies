webpackHotUpdate(5,{

/***/ "./pages/test.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credentials__ = __webpack_require__("./pages/credentials.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
var _jsxFileName = "C:\\Users\\Luong\\Desktop\\React\\daily-tracker\\dailiesFrontend\\pages\\test.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var GW2DAILYURL = "https://api.guildwars2.com/v2/achievements/daily";
var GW2ACHIEVEMENTURL = "https://api.guildwars2.com/v2/achievements?ids=";

var GWFractalRow =
/*#__PURE__*/
function (_Component) {
  _inherits(GWFractalRow, _Component);

  function GWFractalRow() {
    _classCallCheck(this, GWFractalRow);

    return _possibleConstructorReturn(this, (GWFractalRow.__proto__ || Object.getPrototypeOf(GWFractalRow)).apply(this, arguments));
  }

  _createClass(GWFractalRow, [{
    key: "render",
    value: function render() {
      var title = data.name;
      var data = this.props.data;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, title);
    }
  }]);

  return GWFractalRow;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var GWFractals =
/*#__PURE__*/
function (_Component2) {
  _inherits(GWFractals, _Component2);

  function GWFractals() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, GWFractals);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = GWFractals.__proto__ || Object.getPrototypeOf(GWFractals)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        stringID: "",
        rows: []
      }
    }), _temp));
  }

  _createClass(GWFractals, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (this.props.data !== prevProps.data) {
        var rows = [];
        this.props.data.forEach(function (data) {
          _this2.state.stringID += data.id + ',';
        });
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(GW2ACHIEVEMENTURL + this.state.stringID).then(function (res) {
          res.data.forEach(function (data) {
            //TODO: find out why it isn't pushing proper props into row
            _this2.state.rows.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(GWFractalRow, {
              data: data,
              key: data.name,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            }));
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, this.state.rows);
    }
  }]);

  return GWFractals;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var JStest =
/*#__PURE__*/
function (_Component3) {
  _inherits(JStest, _Component3);

  function JStest() {
    var _ref2;

    var _temp2, _this3;

    _classCallCheck(this, JStest);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _possibleConstructorReturn(_this3, (_temp2 = _this3 = _possibleConstructorReturn(this, (_ref2 = JStest.__proto__ || Object.getPrototypeOf(JStest)).call.apply(_ref2, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this3), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        fractalData: []
      }
    }), _temp2));
  }

  _createClass(JStest, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(GW2DAILYURL).then(function (res) {
        var fractalData = res.data.fractals;

        _this4.setState({
          fractalData: fractalData
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, "This is a test"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(GWFractals, {
        data: this.state.fractalData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }));
    }
  }]);

  return JStest;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (JStest);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/test")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.00d15a8cfc06bdef70f1.hot-update.js.map