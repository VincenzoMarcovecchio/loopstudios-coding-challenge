webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Copyright.tsx":
/*!**************************************!*\
  !*** ./src/components/Copyright.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/Layout.tsx":
/*!***********************************!*\
  !*** ./src/components/Layout.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navigation */ "./src/components/Navigation.tsx");
/* harmony import */ var _components_Copyright__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Copyright */ "./src/components/Copyright.tsx");
/* harmony import */ var _components_Copyright__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_Copyright__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_SocialList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SocialList */ "./src/components/SocialList.tsx");
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\loopstudios-landing-page-main\\nextjs-netlify-blog-template\\src\\components\\Layout.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Layout(_ref) {
  var children = _ref.children;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2590656772",
    __self: this
  }, "nav.jsx-2590656772{position:absolute;top:0;left:0;height:8rem;z-index:3;padding:2rem 5%;}main.jsx-2590656772,nav.jsx-2590656772{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;margin:0 auto;}@media (min-width:769px){main.jsx-2590656772,nav.jsx-2590656772{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 10%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTGVub3ZvXFxEZXNrdG9wXFxsb29wc3R1ZGlvcy1sYW5kaW5nLXBhZ2UtbWFpblxcbmV4dGpzLW5ldGxpZnktYmxvZy10ZW1wbGF0ZVxcc3JjXFxjb21wb25lbnRzXFxMYXlvdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdTLEFBRytCLEFBU0wsQUFTRSxrQkFqQlQsTUFDQyxPQUNLLFlBQ0YsVUFDTSxnQkFDbEIsS0FJd0IsQUFTRSw4RUFSYixBQVNLLFdBUkYsR0FTZCxXQVJGIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTGVub3ZvXFxEZXNrdG9wXFxsb29wc3R1ZGlvcy1sYW5kaW5nLXBhZ2UtbWFpblxcbmV4dGpzLW5ldGxpZnktYmxvZy10ZW1wbGF0ZVxcc3JjXFxjb21wb25lbnRzXFxMYXlvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uJztcclxuaW1wb3J0IENvcHlyaWdodCBmcm9tICcuLi9jb21wb25lbnRzL0NvcHlyaWdodCc7XHJcbmltcG9ydCB7IFNvY2lhbExpc3QgfSBmcm9tICcuLi9jb21wb25lbnRzL1NvY2lhbExpc3QnO1xyXG50eXBlIFByb3BzID0ge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH06IFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIG5hdiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDhyZW07XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gNSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBtYWluLFxyXG4gICAgICAgICAgbmF2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xyXG4gICAgICAgICAgICBtYWluLFxyXG4gICAgICAgICAgICBuYXYge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvc2l0ZS53ZWJtYW5pZmVzdFwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIGhyZWY9XCIvaWNvbi5wbmdcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjZmZmXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bmF2PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICA8Zm9vdGVyPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvbG9nby5zdmdcIiBhbHQ9XCJsb29wc3R1ZGlvc1wiIC8+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpbmtzLWZvb3RlclwiPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJub29wZW5lciBub3JlZmVycmVyIFwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgQ2FycmVyc1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJub29wZW5lciBub3JlZmVycmVyIFwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgIEV2ZW50c1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJub29wZW5lciBub3JlZmVycmVyIFwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgIFByb2R1Y3RzXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgU3VwcG9ydFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgIDxTb2NpYWxMaXN0IC8+XHJcbiAgICAgICAgPENvcHlyaWdodCAvPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Lenovo\\\\Desktop\\\\loopstudios-landing-page-main\\\\nextjs-netlify-blog-template\\\\src\\\\components\\\\Layout.tsx */"), __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    className: "jsx-2590656772",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-2590656772",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "manifest",
    href: "/site.webmanifest",
    className: "jsx-2590656772",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    href: "/icon.png",
    className: "jsx-2590656772",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "theme-color",
    content: "#fff",
    className: "jsx-2590656772",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })), __jsx("nav", {
    className: "jsx-2590656772",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  })), __jsx("main", {
    className: "jsx-2590656772",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, children), __jsx("footer", {
    className: "jsx-2590656772",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "./images/logo.svg",
    alt: "loopstudios",
    className: "jsx-2590656772",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx("ul", {
    className: "jsx-2590656772" + " " + "links-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "jsx-2590656772",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("a", {
    rel: "noopener noreferrer ",
    target: "_blank",
    className: "jsx-2590656772",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "About")), __jsx("li", {
    className: "jsx-2590656772",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx("a", {
    rel: "noopener noreferrer ",
    target: "_blank",
    className: "jsx-2590656772",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Carrers")), __jsx("li", {
    className: "jsx-2590656772",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("a", {
    rel: "noopener noreferrer ",
    target: "_blank",
    className: "jsx-2590656772",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Events")), __jsx("li", {
    className: "jsx-2590656772",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx("a", {
    rel: "noopener noreferrer ",
    target: "_blank",
    className: "jsx-2590656772",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "Products")), __jsx("li", {
    className: "jsx-2590656772",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx("a", {
    rel: "noopener noreferrer ",
    target: "_blank",
    className: "jsx-2590656772",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, "Support"))), __jsx(_components_SocialList__WEBPACK_IMPORTED_MODULE_5__["SocialList"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }), __jsx(_components_Copyright__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  })));
}
_c = Layout;

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeCJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSWUsU0FBU0EsTUFBVCxPQUFxQztBQUFBLE1BQW5CQyxRQUFtQixRQUFuQkEsUUFBbUI7QUFDbEQsU0FDRTtBQUFBO0FBQUE7QUFBQSxnN0lBNkJFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sV0FBTyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFdBQU8sRUFBQyxxQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFNLE9BQUcsRUFBQyxVQUFWO0FBQXFCLFFBQUksRUFBQyxtQkFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRTtBQUFNLE9BQUcsRUFBQyxrQkFBVjtBQUE2QixRQUFJLEVBQUMsV0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRTtBQUFNLFFBQUksRUFBQyxhQUFYO0FBQXlCLFdBQU8sRUFBQyxNQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQTdCRixFQW9DRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXBDRixFQXVDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0EsUUFBUCxDQXZDRixFQXdDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxtQkFBVDtBQUE2QixPQUFHLEVBQUMsYUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBLHdDQUFjLGNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsT0FBRyxFQUFDLHNCQUFQO0FBQThCLFVBQU0sRUFBQyxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixDQURGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxPQUFHLEVBQUMsc0JBQVA7QUFBOEIsVUFBTSxFQUFDLFFBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBTkYsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLE9BQUcsRUFBQyxzQkFBUDtBQUE4QixVQUFNLEVBQUMsUUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FYRixFQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLE9BQUcsRUFBQyxzQkFBUDtBQUE4QixVQUFNLEVBQUMsUUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBaEJGLEVBcUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsT0FBRyxFQUFDLHNCQUFQO0FBQThCLFVBQU0sRUFBQyxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQXJCRixDQUZGLEVBOEJFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlCRixFQStCRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvQkYsQ0F4Q0YsQ0FERjtBQTRFRDtLQTdFdUJELE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGY0NDI1YWQyNGYyMmM1MmU5NDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vTmF2aWdhdGlvbic7XHJcbmltcG9ydCBDb3B5cmlnaHQgZnJvbSAnLi4vY29tcG9uZW50cy9Db3B5cmlnaHQnO1xyXG5pbXBvcnQgeyBTb2NpYWxMaXN0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Tb2NpYWxMaXN0JztcclxudHlwZSBQcm9wcyA9IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9OiBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBuYXYge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4cmVtO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtIDUlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbWFpbixcclxuICAgICAgICAgIG5hdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcclxuICAgICAgICAgICAgbWFpbixcclxuICAgICAgICAgICAgbmF2IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL3NpdGUud2VibWFuaWZlc3RcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBocmVmPVwiL2ljb24ucG5nXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiI2ZmZlwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPG5hdj5cclxuICAgICAgICA8TmF2aWdhdGlvbiAvPlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cclxuICAgICAgPGZvb3Rlcj5cclxuICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL2xvZ28uc3ZnXCIgYWx0PVwibG9vcHN0dWRpb3NcIiAvPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaW5rcy1mb290ZXJcIj5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlciBcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJub29wZW5lciBub3JlZmVycmVyIFwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgIENhcnJlcnNcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlciBcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICBFdmVudHNcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlciBcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICBQcm9kdWN0c1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJub29wZW5lciBub3JlZmVycmVyIFwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgIFN1cHBvcnRcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICA8U29jaWFsTGlzdCAvPlxyXG4gICAgICAgIDxDb3B5cmlnaHQgLz5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=