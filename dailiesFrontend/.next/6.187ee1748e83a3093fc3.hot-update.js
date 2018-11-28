webpackHotUpdate(6,{

/***/ "./pages/dailydata.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__credentials__ = __webpack_require__("./pages/credentials.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_modal__ = __webpack_require__("./node_modules/react-modal/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__weblinks__ = __webpack_require__("./pages/weblinks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
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

var customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '500px',
    overflow: 'auto'
  }
}; //Modal.setAppElement(el)
//needs to display that and handle delete button
//needs more css to move button to the right

var ModalRow =
/*#__PURE__*/
function (_Component) {
  _inherits(ModalRow, _Component);

  function ModalRow() {
    _classCallCheck(this, ModalRow);

    return _possibleConstructorReturn(this, (ModalRow.__proto__ || Object.getPrototypeOf(ModalRow)).apply(this, arguments));
  }

  _createClass(ModalRow, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      var title = data.title;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "remove"));
    }
  }]);

  return ModalRow;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]); //query database for info add to row and loop


var ModalContainer =
/*#__PURE__*/
function (_Component2) {
  _inherits(ModalContainer, _Component2);

  function ModalContainer() {
    var _this;

    _classCallCheck(this, ModalContainer);

    _this = _possibleConstructorReturn(this, (ModalContainer.__proto__ || Object.getPrototypeOf(ModalContainer)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        rows: []
      }
    });
    return _this;
  }

  _createClass(ModalContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        rows: this.props.data
      });
    }
  }, {
    key: "render",
    value: function render() {
      var display = [];
      this.state.rows.forEach(function (row) {
        display.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ModalRow, {
          data: row,
          key: row.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }));
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, display);
    }
  }]);

  return ModalContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var DailyRow =
/*#__PURE__*/
function (_Component3) {
  _inherits(DailyRow, _Component3);

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
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, data.time_to_reset));
    }
  }]);

  return DailyRow;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var AddDailyInformation =
/*#__PURE__*/
function (_Component4) {
  _inherits(AddDailyInformation, _Component4);

  function AddDailyInformation() {
    var _this2;

    _classCallCheck(this, AddDailyInformation);

    _this2 = _possibleConstructorReturn(this, (AddDailyInformation.__proto__ || Object.getPrototypeOf(AddDailyInformation)).call(this));
    _this2.state = {
      modalIsOpen: false
    };
    _this2.openModal = _this2.openModal.bind(_assertThisInitialized(_this2));
    _this2.afterOpenModal = _this2.afterOpenModal.bind(_assertThisInitialized(_this2));
    _this2.closeModal = _this2.closeModal.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(AddDailyInformation, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      __WEBPACK_IMPORTED_MODULE_3_react_modal___default.a.setAppElement('body');
    }
  }, {
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
      var _this3 = this;

      var button;

      if (this.props.showAddButton) {
        button = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          type: "button",
          onClick: this.openModal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        }, "Click to edit dailies");
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, button), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_modal___default.a, {
        isOpen: this.state.modalIsOpen,
        onAfterOpen: this.state.afterOpenModal,
        onRequestClose: this.closeModal,
        style: customStyles,
        contentLabel: "Modify daily menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        ref: function ref(subtitle) {
          return _this3.subtitle = subtitle;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, "Add Game Daily"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: this.closeModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, "close"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, "Please input daily name and time of reset"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, "submit")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ModalContainer, {
        data: this.props.data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }))));
    }
  }]);

  return AddDailyInformation;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

AddDailyInformation.defaultProps = {
  showAddButton: true
};

var DailyInformation =
/*#__PURE__*/
function (_Component5) {
  _inherits(DailyInformation, _Component5);

  function DailyInformation() {
    _classCallCheck(this, DailyInformation);

    return _possibleConstructorReturn(this, (DailyInformation.__proto__ || Object.getPrototypeOf(DailyInformation)).apply(this, arguments));
  }

  _createClass(DailyInformation, [{
    key: "render",
    value: function render() {
      var rows = [];
      console.log("dailyInformation"); //console.log(this.props.data);
      //TODO: fix response from database

      this.props.data.forEach(function (data) {
        rows.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DailyRow, {
          data: data.fields,
          key: data.fields.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          }
        }));
        console.log(data.fields.title);
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("table", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("thread", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, "Title"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, "Is completed"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, rows));
    }
  }]);

  return DailyInformation;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var DailyDataBox =
/*#__PURE__*/
function (_Component6) {
  _inherits(DailyDataBox, _Component6);

  function DailyDataBox() {
    var _ref;

    var _temp, _this4;

    _classCallCheck(this, DailyDataBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this4, (_temp = _this4 = _possibleConstructorReturn(this, (_ref = DailyDataBox.__proto__ || Object.getPrototypeOf(DailyDataBox)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this4), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        dailyData: []
      }
    }), _temp));
  }

  _createClass(DailyDataBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      __WEBPACK_IMPORTED_MODULE_5_axios___default()({
        method: 'post',
        url: __WEBPACK_IMPORTED_MODULE_4__weblinks__["a" /* weblinks */].link.getDailies,
        data: {
          username: __WEBPACK_IMPORTED_MODULE_1__credentials__["a" /* credentials */].user.username,
          token: __WEBPACK_IMPORTED_MODULE_1__credentials__["a" /* credentials */].user.token
        }
      }).then(function (response) {
        //okay reponse on accept and fail here
        //console.log(response);
        if (response.data != "incorrect username or password") {
          this.setState({
            dailyData: response.data
          });
        }
      }.bind(this)).catch(function (error) {
        //if error do just clear fields and display mismatch user or password
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log("token");
      console.log(__WEBPACK_IMPORTED_MODULE_1__credentials__["a" /* credentials */].user.token);
      console.log(this.state.dailyData);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DailyInformation, {
        data: this.state.dailyData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AddDailyInformation, {
        showAddButton: this.props.showAddButton,
        data: this.state.dailyData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }));
    }
  }]);

  return DailyDataBox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
/*
const DATA = [
    {title: 'Overwatch', date: new Date(), time_to_reset: 5, dailies_completed: false},
    {title: 'GW2', date: new Date(), time_to_reset: 5, dailies_completed: false},
    {title: 'TF2', date: new Date(), time_to_reset: 5, dailies_completed: false},
    {title: 'Dragalia', date: new Date(), time_to_reset: 5, dailies_completed: false},
    {title: 'Spooky\'s House', date: new Date(), time_to_reset: 5, dailies_completed: false}
];
*/


/* harmony default export */ __webpack_exports__["a"] = (DailyDataBox);
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
//# sourceMappingURL=6.187ee1748e83a3093fc3.hot-update.js.map