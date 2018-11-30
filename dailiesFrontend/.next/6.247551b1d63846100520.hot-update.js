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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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

  function ModalRow(props) {
    var _this;

    _classCallCheck(this, ModalRow);

    _this = _possibleConstructorReturn(this, (ModalRow.__proto__ || Object.getPrototypeOf(ModalRow)).call(this, props));
    _this.handleRemove = _this.handleRemove.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ModalRow, [{
    key: "handleRemove",
    value: function handleRemove(e) {
      console.log('Remove');
      __WEBPACK_IMPORTED_MODULE_5_axios___default()({
        method: 'post',
        url: __WEBPACK_IMPORTED_MODULE_4__weblinks__["a" /* weblinks */].link.removeDailies,
        data: {
          username: __WEBPACK_IMPORTED_MODULE_1__credentials__["a" /* credentials */].user.username,
          token: __WEBPACK_IMPORTED_MODULE_1__credentials__["a" /* credentials */].user.token,
          title: this.props.data.title
        }
      }).then(function (response) {
        //update UI
        //forceupdate component
        this.props.updateRemove(this.props.data.title);
        console.log(response);
      }.bind(this)).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.props.data;
      var title = data.title;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: this.handleRemove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
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
    var _ref;

    var _temp, _this2;

    _classCallCheck(this, ModalContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this2, (_temp = _this2 = _possibleConstructorReturn(this, (_ref = ModalContainer.__proto__ || Object.getPrototypeOf(ModalContainer)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this2), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        rows: [] //this is before render

      }
    }), _temp));
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
      var _this3 = this;

      var display = [];
      this.state.rows.forEach(function (row) {
        display.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ModalRow, {
          data: row.fields,
          key: row.fields.title,
          updateRemove: _this3.props.updateRemove,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }));
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
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
          lineNumber: 103
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
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
    var _this4;

    _classCallCheck(this, AddDailyInformation);

    _this4 = _possibleConstructorReturn(this, (AddDailyInformation.__proto__ || Object.getPrototypeOf(AddDailyInformation)).call(this));
    _this4.state = {
      modalIsOpen: false,
      title: '',
      time: ''
    };
    _this4.openModal = _this4.openModal.bind(_assertThisInitialized(_this4));
    _this4.afterOpenModal = _this4.afterOpenModal.bind(_assertThisInitialized(_this4));
    _this4.closeModal = _this4.closeModal.bind(_assertThisInitialized(_this4));
    _this4.handleSubmit = _this4.handleSubmit.bind(_assertThisInitialized(_this4));
    _this4.handleTimeChange = _this4.handleTimeChange.bind(_assertThisInitialized(_this4));
    _this4.handleTitleChange = _this4.handleTitleChange.bind(_assertThisInitialized(_this4));
    return _this4;
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
    }
  }, {
    key: "handleTimeChange",
    value: function handleTimeChange(e) {
      this.setState({
        time: e.target.value
      });
    }
  }, {
    key: "handleTitleChange",
    value: function handleTitleChange(e) {
      this.setState({
        title: e.target.value
      });
      console.log(this.state.title);
    } //TODO: bug when time isn't properly put in upon opening modal
    //TODO: fix bug with remove being improper

  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      console.log("info submitted");
      console.log(this.state.title);
      console.log(this.state.time);
      __WEBPACK_IMPORTED_MODULE_5_axios___default()({
        method: 'post',
        url: __WEBPACK_IMPORTED_MODULE_4__weblinks__["a" /* weblinks */].link.addDailies,
        data: {
          username: __WEBPACK_IMPORTED_MODULE_1__credentials__["a" /* credentials */].user.username,
          token: __WEBPACK_IMPORTED_MODULE_1__credentials__["a" /* credentials */].user.token,
          title: this.state.title,
          resetTime: this.state.time
        }
      }).then(function (response) {
        console.log('success');
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      }); //TODO: needs to reference time and data to backend

      this.closeModal();
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var button;

      if (this.props.showAddButton) {
        button = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          type: "button",
          onClick: this.openModal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          }
        }, "Click to edit dailies");
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, button), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_modal___default.a, {
        isOpen: this.state.modalIsOpen,
        onAfterOpen: this.state.afterOpenModal,
        onRequestClose: this.closeModal,
        style: customStyles,
        contentLabel: "Modify daily menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        ref: function ref(subtitle) {
          return _this5.subtitle = subtitle;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, "Add Game Daily"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: this.closeModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, "close"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, "Please input daily name and time of reset"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        name: "title",
        onChange: this.handleTitleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "time",
        name: "time",
        onChange: this.handleTimeChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "submit",
        value: "submit",
        onClick: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ModalContainer, {
        data: this.props.data,
        updateRemove: this.props.updateRemove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
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

      this.props.data.forEach(function (data) {
        rows.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DailyRow, {
          data: data.fields,
          key: data.fields.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          }
        }));
        console.log(data.fields.title);
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("table", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("thread", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, "Title"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, "Is completed"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
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

  function DailyDataBox(props) {
    var _this6;

    _classCallCheck(this, DailyDataBox);

    _this6 = _possibleConstructorReturn(this, (DailyDataBox.__proto__ || Object.getPrototypeOf(DailyDataBox)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this6), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        dailyData: []
      }
    });
    _this6.updateRemove = _this6.updateRemove.bind(_assertThisInitialized(_this6));
    return _this6;
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
    } //TODO: a bug with update remove when clicked too fast it sometimes doesn't register

  }, {
    key: "updateRemove",
    value: function updateRemove(removed) {
      for (var i = 0; i < this.state.dailyData.length; i++) {
        console.log(this.state.dailyData[i].fields.title);

        if (removed == this.state.dailyData[i].fields.title) {
          delete this.state.dailyData[i];
          this.setState({
            dailyData: this.state.dailyData
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      //console.log("token");
      //console.log(credentials.user.token);
      //console.log(this.state.dailyData);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DailyInformation, {
        data: this.state.dailyData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AddDailyInformation, {
        showAddButton: this.props.showAddButton,
        data: this.state.dailyData,
        updateRemove: this.updateRemove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        }
      }));
    }
  }]);

  return DailyDataBox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

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
//# sourceMappingURL=6.247551b1d63846100520.hot-update.js.map