webpackHotUpdate(6,{

/***/ "./pages/weblinks.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return weblinks; });
/* unused harmony export weblinksContext */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
 //this is going to save user's credentials

var weblinks = {
  link: {
    getDailies: 'http://127.0.0.1:8000/account/getUserDailies/',
    removeDailies: 'http://127.0.0.1:8000/account/removeUserDaily/',
    addDailies: 'http://127.0.0.1:8000/account/addUserDaily/',
    setDailyDate: 'http://127.0.0.1:8000/account/setDailyDate/'
  }
};
var weblinksContext = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext(weblinks.link);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/weblinks")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.1a8808227848f070caab.hot-update.js.map