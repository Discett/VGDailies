webpackHotUpdate(6,{

/***/ "./pages/dailyAppBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_ui_core__ = __webpack_require__("./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
var _jsxFileName = "C:\\Users\\Luong\\Desktop\\React\\daily-tracker\\dailiesFrontend\\pages\\dailyAppBar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




 //Whatever is passed in from the header check and provide links as followed

var styles = {
  root: {
    width: '100%',
    position: 'fixed'
  },
  grow: {
    flexGrow: 1
  },
  header: {
    padding: 0,
    margin: 0,
    color: 'white'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

var dailyAppBar =
/*#__PURE__*/
function (_Component) {
  _inherits(dailyAppBar, _Component);

  function dailyAppBar(props) {
    var _this;

    _classCallCheck(this, dailyAppBar);

    _this = _possibleConstructorReturn(this, (dailyAppBar.__proto__ || Object.getPrototypeOf(dailyAppBar)).call(this, props));
    _this.goHome = _this.goHome.bind(_assertThisInitialized(_this));
    _this.goAbout = _this.goAbout.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(dailyAppBar, [{
    key: "goHome",
    value: function goHome() {
      __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push('/');
    }
  }, {
    key: "goAbout",
    value: function goAbout() {
      __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push('/about');
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__material_ui_core__["a" /* AppBar */], {
        position: "static",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__material_ui_core__["g" /* Toolbar */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__material_ui_core__["d" /* IconButton */], {
        className: classes.menuButton,
        color: "inherit",
        "aria-label": "Menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__material_ui_core__["h" /* Typography */], {
        variant: "h6",
        color: "inherit",
        className: classes.grow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, this.props.name), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__material_ui_core__["b" /* Button */], {
        color: "inherit",
        onClick: this.goHome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Home"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__material_ui_core__["b" /* Button */], {
        color: "inherit",
        onClick: this.goAbout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "About"))));
    }
  }]);

  return dailyAppBar;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__["withStyles"])(styles)(dailyAppBar));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/dailyAppBar")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.273ea125e3eb7b3816f9.hot-update.js.map