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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/credentials.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return credentials; });
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

/***/ "./pages/dailyAppBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_ui_core__ = __webpack_require__("@material-ui/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_ui_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__material_ui_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("next/router");
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
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__material_ui_core__["AppBar"], {
        position: "static",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__material_ui_core__["Toolbar"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__material_ui_core__["IconButton"], {
        className: classes.menuButton,
        color: "inherit",
        "aria-label": "Menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__material_ui_core__["Typography"], {
        variant: "h6",
        color: "inherit",
        className: classes.grow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, this.props.name), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__material_ui_core__["Button"], {
        color: "inherit",
        onClick: this.goHome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Home"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__material_ui_core__["Button"], {
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

/***/ }),

/***/ "./pages/login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credentials__ = __webpack_require__("./pages/credentials.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__weblinks__ = __webpack_require__("./pages/weblinks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core__ = __webpack_require__("@material-ui/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core__["Grid"], {
        container: true,
        className: this.props.classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core__["Grid"], {
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
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core__["Grid"], {
        container: true,
        justify: "center",
        alignItems: "center",
        direction: "column",
        position: "static",
        style: {
          minHeight: '90vh'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core__["Paper"], {
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
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core__["Typography"], {
        color: "textSecondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, strings.EnterUserName), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core__["TextField"], {
        name: "username",
        onChange: this.handleChangeUser,
        label: strings.Username,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core__["Typography"], {
        color: "textSecondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, strings.EnterPassword), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core__["TextField"], {
        name: "password",
        type: "password",
        onChange: this.handleChangePassword,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core__["Button"], {
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

/***/ }),

/***/ "./pages/weblinks.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return weblinks; });
/* unused harmony export weblinksContext */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
 //this is going to save user's credentials

var weblinks = {
  link: {
    loginUrl: 'http://127.0.0.1:8000/account/login/',
    getDailies: 'http://127.0.0.1:8000/account/getUserDailies/',
    removeDailies: 'http://127.0.0.1:8000/account/removeUserDaily/',
    addDailies: 'http://127.0.0.1:8000/account/addUserDaily/',
    setDailyDate: 'http://127.0.0.1:8000/account/setDailyDate/'
  }
};
var weblinksContext = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext(weblinks.link);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/login.js");


/***/ }),

/***/ "@material-ui/core":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=login.js.map