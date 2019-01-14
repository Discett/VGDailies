webpackHotUpdate(5,{

/***/ "./pages/login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credentials__ = __webpack_require__("./pages/credentials.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__weblinks__ = __webpack_require__("./pages/weblinks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core__ = __webpack_require__("./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dailyAppBar__ = __webpack_require__("./pages/dailyAppBar.js");
var _jsxFileName = "C:\\Users\\Luong\\Desktop\\React\\daily-tracker\\dailiesFrontend\\pages\\login.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var styles = {
  root: {
    backgroundImage: "url('/static/wavesBackground.jpg')",
    backgroundColor: 'gray',
    margin: 0,
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    padding: 0,
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    position: 'absolute'
  },
  paperBackground: {
    backgroundColor: 'white',
    opacity: '0.8',
    padding: 50
  }
  /*
  const loginStyle = {
      WebkitTransition: 'all',
      msTransition: 'all',
      height: '100%',
      width: '100%',
      margin: -8,
      position: 'absolute',
      backgroundColor: 'Gray',
  };
  
  const formStyle = {
      WebkitTransition: 'all',
      msTransition: 'all',
      //top: '50%',
      display: 'block',
      //left:'50%',
      //margin: '-70px 0 0 -170px',
      margin: '50px auto',
      position: 'absolute',
      backgroundColor: 'White',
  };
  */

};
var strings = {
  EnterUserName: 'Username:',
  EnterPassword: 'Password:',
  LoginHeader: 'Login Page',
  Submit: 'Submit'
};

var Login =
/*#__PURE__*/
function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    var _this;

    _classCallCheck(this, Login);

    _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));
    _this.state = {
      userSubmittedUsername: '',
      userSubmittedPassword: ''
    };
    _this.handleChangeUser = _this.handleChangeUser.bind(_assertThisInitialized(_this));
    _this.handleChangePassword = _this.handleChangePassword.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  } //Listener, whenever username is changed update the state


  _createClass(Login, [{
    key: "handleChangeUser",
    value: function handleChangeUser(e) {
      this.setState({
        userSubmittedUsername: e.target.value
      });
    } //Listener, whenever password is changed update the state

  }, {
    key: "handleChangePassword",
    value: function handleChangePassword(e) {
      this.setState({
        userSubmittedPassword: e.target.value
      });
    } //Is called when form is submitted

  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      //required to prevent default behavior required for CORS
      e.preventDefault();
      console.log(this.url); //set the username, token is only set if successfully logged in

      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("credentialsContext", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_2__credentials__["a" /* credentials */].user.username = this.state.userSubmittedUsername); //query database recieves a response of token or incorrect username/password

      __WEBPACK_IMPORTED_MODULE_1_axios___default()({
        method: 'post',
        url: __WEBPACK_IMPORTED_MODULE_5__weblinks__["a" /* weblinks */].link.loginUrl,
        data: {
          userSubmittedUsername: this.state.userSubmittedUsername,
          userSubmittedPassword: this.state.userSubmittedPassword
        },
        headers: {
          'Accept': 'token'
        }
      }).then(function (response) {
        //okay reponse on accept and fail here
        console.log(response);

        if (response.data != "incorrect username or password") {
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("credentialsContext", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106
            }
          }, __WEBPACK_IMPORTED_MODULE_2__credentials__["a" /* credentials */].user.token = response.data);
          __WEBPACK_IMPORTED_MODULE_4_next_router___default.a.push('/dailytracker');
        }
      }).catch(function (error) {
        //if error do just clear fields and display mismatch user or password
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core__["c" /* Grid */], {
        container: true,
        className: this.props.classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core__["c" /* Grid */], {
        container: true,
        direction: "column",
        alignItems: "flex-start",
        justify: "space-between",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__dailyAppBar__["a" /* default */], {
        name: strings.LoginHeader,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core__["c" /* Grid */], {
        container: true,
        justify: "center",
        alignItems: "center",
        direction: "column",
        position: "static",
        style: {
          minHeight: '99vh'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core__["e" /* Paper */], {
        className: this.props.classes.paperBackground,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core__["h" /* Typography */], {
        color: "textSecondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, strings.EnterUserName), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core__["f" /* TextField */], {
        name: "username",
        onChange: this.handleChangeUser,
        label: strings.Username,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core__["h" /* Typography */], {
        color: "textSecondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, strings.EnterPassword), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core__["f" /* TextField */], {
        name: "password",
        type: "password",
        onChange: this.handleChangePassword,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core__["b" /* Button */], {
        type: "submit",
        color: "primary",
        variant: "text",
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, strings.Submit)))));
    }
  }]);

  return Login;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_styles__["withStyles"])(styles)(Login));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/login")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.732b60d5e6dc2ceafa0f.hot-update.js.map