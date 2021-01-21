module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/*! exports provided: base_url, site_title, site_description, site_keywords, twitter_account, github_account, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"base_url\":\"https://wutali-nextjs-netlify-blog.netlify.app\",\"site_title\":\"Frontend Mentor Challenge \",\"site_description\":\"Loopstudios landing page\",\"site_keywords\":[{\"keyword\":\"Next.js\"},{\"keyword\":\"Netlify\"},{\"keyword\":\"React\"},{\"keyword\":\"Frontend Mentor\"}],\"twitter_account\":\"@_vinny92_\",\"github_account\":\"VincenzoMarcovecchio\"}");

/***/ }),

/***/ "./src/components/Burger.tsx":
/*!***********************************!*\
  !*** ./src/components/Burger.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Burger; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\loopstudios-landing-page-main\\nextjs-netlify-blog-template\\src\\components\\Burger.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Burger({
  active,
  onClick
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, active ? __jsx("img", {
    onClick: onClick,
    src: "./images/icon-hamburger.svg",
    className: "hamburger",
    alt: "challenge",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }) : __jsx("img", {
    onClick: onClick,
    src: "./images/icon-close.svg",
    className: "hamburger",
    alt: "challenge",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }));
}

/***/ }),

/***/ "./src/components/Copyright.tsx":
/*!**************************************!*\
  !*** ./src/components/Copyright.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Copyright; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\loopstudios-landing-page-main\\nextjs-netlify-blog-template\\src\\components\\Copyright.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function Copyright() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
    className: "jsx-2473924102" + " " + "copy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, "\xA9 2020 Loopstudios. All rights reserved"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2473924102",
    __self: this
  }, ".copy.jsx-2473924102{font-size:1rem;text-align:center;color:gray;margin:0 auto;}@media (min-width:769px){.copy.jsx-2473924102{position:absolute;right:10%;bottom:3.5rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTGVub3ZvXFxEZXNrdG9wXFxsb29wc3R1ZGlvcy1sYW5kaW5nLXBhZ2UtbWFpblxcbmV4dGpzLW5ldGxpZnktYmxvZy10ZW1wbGF0ZVxcc3JjXFxjb21wb25lbnRzXFxDb3B5cmlnaHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtTLEFBRzRCLEFBUUssZUFQRixHQVFOLFVBQ0ksS0FSTCxTQVNYLEVBUmMsY0FDaEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxMZW5vdm9cXERlc2t0b3BcXGxvb3BzdHVkaW9zLWxhbmRpbmctcGFnZS1tYWluXFxuZXh0anMtbmV0bGlmeS1ibG9nLXRlbXBsYXRlXFxzcmNcXGNvbXBvbmVudHNcXENvcHlyaWdodC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3B5cmlnaHQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvcHlcIj4mY29weTsgMjAyMCBMb29wc3R1ZGlvcy4gQWxsIHJpZ2h0cyByZXNlcnZlZDwvcD5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmNvcHkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xyXG4gICAgICAgICAgICAuY29weSB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAxMCU7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAzLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Lenovo\\\\Desktop\\\\loopstudios-landing-page-main\\\\nextjs-netlify-blog-template\\\\src\\\\components\\\\Copyright.tsx */"));
}

/***/ }),

/***/ "./src/components/Layout.tsx":
/*!***********************************!*\
  !*** ./src/components/Layout.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navigation */ "./src/components/Navigation.tsx");
/* harmony import */ var _components_Copyright__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Copyright */ "./src/components/Copyright.tsx");
/* harmony import */ var _components_SocialList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SocialList */ "./src/components/SocialList.tsx");
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\loopstudios-landing-page-main\\nextjs-netlify-blog-template\\src\\components\\Layout.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Layout({
  children
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2590656772",
    __self: this
  }, "nav.jsx-2590656772{position:absolute;top:0;left:0;height:8rem;z-index:3;padding:2rem 5%;}main.jsx-2590656772,nav.jsx-2590656772{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;margin:0 auto;}@media (min-width:769px){main.jsx-2590656772,nav.jsx-2590656772{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 10%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTGVub3ZvXFxEZXNrdG9wXFxsb29wc3R1ZGlvcy1sYW5kaW5nLXBhZ2UtbWFpblxcbmV4dGpzLW5ldGxpZnktYmxvZy10ZW1wbGF0ZVxcc3JjXFxjb21wb25lbnRzXFxMYXlvdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdTLEFBRytCLEFBU0wsQUFTRSxrQkFqQlQsTUFDQyxPQUNLLFlBQ0YsVUFDTSxnQkFDbEIsS0FJd0IsQUFTRSw4RUFSYixBQVNLLFdBUkYsR0FTZCxXQVJGIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTGVub3ZvXFxEZXNrdG9wXFxsb29wc3R1ZGlvcy1sYW5kaW5nLXBhZ2UtbWFpblxcbmV4dGpzLW5ldGxpZnktYmxvZy10ZW1wbGF0ZVxcc3JjXFxjb21wb25lbnRzXFxMYXlvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uJztcclxuaW1wb3J0IENvcHlyaWdodCBmcm9tICcuLi9jb21wb25lbnRzL0NvcHlyaWdodCc7XHJcbmltcG9ydCB7IFNvY2lhbExpc3QgfSBmcm9tICcuLi9jb21wb25lbnRzL1NvY2lhbExpc3QnO1xyXG50eXBlIFByb3BzID0ge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH06IFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIG5hdiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDhyZW07XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gNSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBtYWluLFxyXG4gICAgICAgICAgbmF2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xyXG4gICAgICAgICAgICBtYWluLFxyXG4gICAgICAgICAgICBuYXYge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvc2l0ZS53ZWJtYW5pZmVzdFwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIGhyZWY9XCIvaWNvbi5wbmdcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjZmZmXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bmF2PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICA8Zm9vdGVyPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvbG9nby5zdmdcIiBhbHQ9XCJsb29wc3R1ZGlvc1wiIC8+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpbmtzLWZvb3RlclwiPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJub29wZW5lciBub3JlZmVycmVyIFwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgQ2FycmVyc1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJub29wZW5lciBub3JlZmVycmVyIFwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgIEV2ZW50c1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJub29wZW5lciBub3JlZmVycmVyIFwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgIFByb2R1Y3RzXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgU3VwcG9ydFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPFNvY2lhbExpc3QgLz5cclxuICAgICAgICA8Q29weXJpZ2h0IC8+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Lenovo\\\\Desktop\\\\loopstudios-landing-page-main\\\\nextjs-netlify-blog-template\\\\src\\\\components\\\\Layout.tsx */"), __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
      lineNumber: 79,
      columnNumber: 9
    }
  }), __jsx(_components_Copyright__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./src/components/Navigation.tsx":
/*!***************************************!*\
  !*** ./src/components/Navigation.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Burger */ "./src/components/Burger.tsx");
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\loopstudios-landing-page-main\\nextjs-netlify-blog-template\\src\\components\\Navigation.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Navigation() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: active ? 'active navbar__container' : 'navbar__container',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "./images/logo.svg",
    alt: "loopstudios",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), ' ', __jsx(_Burger__WEBPACK_IMPORTED_MODULE_2__["default"], {
    active: active,
    onClick: () => setActive(!active),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx("a", {
    rel: "noopener noreferrer ",
    target: "_blank",
    className: router.pathname === '/' ? 'active' : null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "About")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx("a", {
    rel: "noopener noreferrer ",
    target: "_blank",
    className: router.pathname.startsWith('/carrers') ? 'active' : null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "Carrers")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("a", {
    rel: "noopener noreferrer ",
    target: "_blank",
    className: router.pathname.startsWith('/events') ? 'active' : null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "Events")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("a", {
    rel: "noopener noreferrer ",
    target: "_blank",
    className: router.pathname.startsWith('/products') ? 'active' : null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "Products")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx("a", {
    rel: "noopener noreferrer ",
    target: "_blank",
    className: router.pathname.startsWith('/support') ? 'active' : null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Support")))));
}

/***/ }),

/***/ "./src/components/SocialList.tsx":
/*!***************************************!*\
  !*** ./src/components/SocialList.tsx ***!
  \***************************************/
/*! exports provided: SocialList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialList", function() { return SocialList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\loopstudios-landing-page-main\\nextjs-netlify-blog-template\\src\\components\\SocialList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function SocialList() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("ul", {
    className: "social-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "./images/icon-facebook.svg",
    alt: "social",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  })), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "./images/icon-twitter.svg",
    alt: "social",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  })), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "./images/icon-pinterest.svg",
    alt: "social",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  })), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "./images/icon-instagram.svg",
    alt: "social",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./src/components/meta/BasicMeta.tsx":
/*!*******************************************!*\
  !*** ./src/components/meta/BasicMeta.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BasicMeta; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/config */ "./src/lib/config.ts");
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\loopstudios-landing-page-main\\nextjs-netlify-blog-template\\src\\components\\meta\\BasicMeta.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function BasicMeta({
  title,
  description,
  keywords,
  author,
  url
}) {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, title ? [title, _lib_config__WEBPACK_IMPORTED_MODULE_2__["default"].site_title].join(" | ") : _lib_config__WEBPACK_IMPORTED_MODULE_2__["default"].site_title), __jsx("meta", {
    name: "description",
    content: description ? description : _lib_config__WEBPACK_IMPORTED_MODULE_2__["default"].site_description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "keywords",
    content: keywords ? keywords.join(",") : _lib_config__WEBPACK_IMPORTED_MODULE_2__["default"].site_keywords.map(it => it.keyword).join(","),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), author ? __jsx("meta", {
    name: "author",
    content: author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }) : null, __jsx("link", {
    rel: "canonical",
    href: _lib_config__WEBPACK_IMPORTED_MODULE_2__["default"].base_url + url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/meta/JsonLdMeta.tsx":
/*!********************************************!*\
  !*** ./src/components/meta/JsonLdMeta.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JsonLdMeta; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_schemaorg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-schemaorg */ "react-schemaorg");
/* harmony import */ var react_schemaorg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_schemaorg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/config */ "./src/lib/config.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\loopstudios-landing-page-main\\nextjs-netlify-blog-template\\src\\components\\meta\\JsonLdMeta.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function JsonLdMeta({
  url,
  title,
  keywords,
  date,
  author,
  image,
  description
}) {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("script", _extends({}, Object(react_schemaorg__WEBPACK_IMPORTED_MODULE_1__["jsonLdScriptProps"])({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: _lib_config__WEBPACK_IMPORTED_MODULE_2__["default"].base_url + url,
    headline: title,
    keywords: keywords ? undefined : keywords.join(','),
    datePublished: '21/01/2021',
    author: author,
    image: image,
    description: description
  }), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  })));
}

/***/ }),

/***/ "./src/components/meta/OpenGraphMeta.tsx":
/*!***********************************************!*\
  !*** ./src/components/meta/OpenGraphMeta.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenGraphMeta; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/config */ "./src/lib/config.ts");
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\loopstudios-landing-page-main\\nextjs-netlify-blog-template\\src\\components\\meta\\OpenGraphMeta.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function OpenGraphMeta({
  url,
  title,
  description,
  image
}) {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("meta", {
    property: "og:site_name",
    content: _lib_config__WEBPACK_IMPORTED_MODULE_2__["default"].site_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:url",
    content: _lib_config__WEBPACK_IMPORTED_MODULE_2__["default"].base_url + url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:title",
    content: title ? [title, _lib_config__WEBPACK_IMPORTED_MODULE_2__["default"].site_title].join(" | ") : "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:description",
    content: description ? description : _lib_config__WEBPACK_IMPORTED_MODULE_2__["default"].site_description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:image",
    content: image ? image : _lib_config__WEBPACK_IMPORTED_MODULE_2__["default"].base_url + "/og_image.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "article",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/meta/TwitterCardMeta.tsx":
/*!*************************************************!*\
  !*** ./src/components/meta/TwitterCardMeta.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TwitterCardMeta; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/config */ "./src/lib/config.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\loopstudios-landing-page-main\\nextjs-netlify-blog-template\\src\\components\\meta\\TwitterCardMeta.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function TwitterCardMeta({
  url,
  title,
  description
}) {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("meta", {
    property: "twitter:card",
    content: "summary_large_image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "twitter:site",
    content: _lib_config__WEBPACK_IMPORTED_MODULE_1__["default"].twitter_account,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "twitter:url",
    content: _lib_config__WEBPACK_IMPORTED_MODULE_1__["default"].base_url + url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "twitter:title",
    content: title ? [title, _lib_config__WEBPACK_IMPORTED_MODULE_1__["default"].site_title].join(" | ") : "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "twitter:description",
    content: description ? description : _lib_config__WEBPACK_IMPORTED_MODULE_1__["default"].site_description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/lib/config.ts":
/*!***************************!*\
  !*** ./src/lib/config.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.json */ "./config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../config.json */ "./config.json", 1);

/* harmony default export */ __webpack_exports__["default"] = (_config_json__WEBPACK_IMPORTED_MODULE_0__);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.tsx");
/* harmony import */ var _components_meta_BasicMeta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meta/BasicMeta */ "./src/components/meta/BasicMeta.tsx");
/* harmony import */ var _components_meta_JsonLdMeta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meta/JsonLdMeta */ "./src/components/meta/JsonLdMeta.tsx");
/* harmony import */ var _components_meta_OpenGraphMeta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/meta/OpenGraphMeta */ "./src/components/meta/OpenGraphMeta.tsx");
/* harmony import */ var _components_meta_TwitterCardMeta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/meta/TwitterCardMeta */ "./src/components/meta/TwitterCardMeta.tsx");
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\loopstudios-landing-page-main\\nextjs-netlify-blog-template\\src\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Index() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(_components_meta_BasicMeta__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: `/`,
    title: 'Frontend web development',
    keywords: ['keywords', 'frontend', 'challenge'],
    description: 'A frontendmentor challenge completed by Vincenzo Marcovecchio',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx(_components_meta_TwitterCardMeta__WEBPACK_IMPORTED_MODULE_5__["default"], {
    url: `/`,
    title: 'Frontend web development',
    description: 'A frontendmentor challenge completed by Vincenzo Marcovecchio',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(_components_meta_OpenGraphMeta__WEBPACK_IMPORTED_MODULE_4__["default"], {
    url: `/`,
    title: 'Frontend web development',
    description: 'A frontendmentor challenge completed by Vincenzo Marcovecchio',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx(_components_meta_JsonLdMeta__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: `/`,
    title: 'Frontend web development',
    date: new Date(Date.now()),
    keywords: ['web', 'development'],
    author: 'Vincenzo Marcovecchio',
    description: 'A frontendmentor challenge completed by Vincenzo Marcovecchio',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("picture", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("source", {
    srcSet: `./images/desktop/image-hero.jpg`,
    media: "(min-width: 769px)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }), __jsx("img", {
    alt: "the challenge",
    width: "100% ",
    height: "100%",
    className: "hero-image",
    src: `./images/mobile/image-hero.jpg`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  })), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, " Immersive experiences that deliver")), __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx("picture", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("source", {
    srcSet: `./images/desktop/image-interactive.jpg`,
    media: "(min-width: 769px)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }), __jsx("img", {
    width: "100%",
    height: "100%",
    alt: "the challenge",
    className: "interactive-image",
    src: `./images/mobile/image-interactive.jpg`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "text-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, " The leader in interactive VR"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, "Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand."))), __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, " our creations"), __jsx("div", {
    className: "grid-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx("picture", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx("source", {
    srcSet: `./images/desktop/image-deep-earth.jpg`,
    media: "(min-width: 769px)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }), __jsx("img", {
    width: "100%",
    height: "100%",
    alt: "the challenge",
    className: "grid-image",
    src: `./images/mobile/image-deep-earth.jpg`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  })), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, "deep earth")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, __jsx("picture", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, __jsx("source", {
    srcSet: `./images/desktop/image-night-arcade.jpg`,
    media: "(min-width: 769px)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }), __jsx("img", {
    width: "100%",
    height: "100%",
    alt: "the challenge",
    className: "grid-image",
    src: `./images/mobile/image-night-arcade.jpg`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  })), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, "night arcade")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx("picture", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, __jsx("source", {
    srcSet: `./images/desktop/image-soccer-team.jpg`,
    media: "(min-width: 769px)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }), __jsx("img", {
    width: "100%",
    height: "100%",
    alt: "the challenge",
    className: "grid-image",
    src: `./images/mobile/image-soccer-team.jpg`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  })), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, "soccer team vr ")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, __jsx("picture", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, __jsx("source", {
    srcSet: `./images/desktop/image-grid.jpg`,
    media: "(min-width: 769px)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }), __jsx("img", {
    width: "100%",
    height: "100%",
    alt: "the challenge",
    className: "grid-image",
    src: `./images/mobile/image-grid.jpg`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 15
    }
  })), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, "the grid ")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }, __jsx("picture", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }, __jsx("source", {
    srcSet: `./images/desktop/image-from-above.jpg`,
    media: "(min-width: 769px)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 15
    }
  }), __jsx("img", {
    width: "100%",
    height: "100%",
    alt: "the challenge",
    className: "grid-image",
    src: `./images/mobile/image-from-above.jpg`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  })), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }, "from up above vr ")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }, __jsx("picture", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }, __jsx("source", {
    srcSet: `./images/desktop/image-pocket-borealis.jpg`,
    media: "(min-width: 769px)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 15
    }
  }), __jsx("img", {
    width: "100%",
    height: "100%",
    alt: "the challenge",
    className: "grid-image",
    src: `./images/mobile/image-pocket-borealis.jpg`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 15
    }
  })), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  }, "pocket borealis ")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }, __jsx("picture", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }
  }, __jsx("source", {
    srcSet: `./images/desktop/image-curiosity.jpg`,
    media: "(min-width: 769px)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 15
    }
  }), __jsx("img", {
    width: "100%",
    height: "100%",
    alt: "the challenge",
    className: "grid-image",
    src: `./images/mobile/image-curiosity.jpg`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 15
    }
  })), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }
  }, "the curiosity ")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 11
    }
  }, __jsx("picture", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }
  }, __jsx("source", {
    srcSet: `./images/desktop/image-fisheye.jpg`,
    media: "(min-width: 769px)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 15
    }
  }), __jsx("img", {
    width: "100%",
    height: "100%",
    alt: "the challenge",
    className: "grid-image",
    src: `./images/mobile/image-fisheye.jpg`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 15
    }
  })), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 13
    }
  }, "make it fisheye "))), __jsx("button", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 9
    }
  }, "see all")));
}

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-schemaorg":
/*!**********************************!*\
  !*** external "react-schemaorg" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-schemaorg");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnVyZ2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3B5cmlnaHQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU29jaWFsTGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWV0YS9CYXNpY01ldGEudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21ldGEvSnNvbkxkTWV0YS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWV0YS9PcGVuR3JhcGhNZXRhLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tZXRhL1R3aXR0ZXJDYXJkTWV0YS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2NoZW1hb3JnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkJ1cmdlciIsImFjdGl2ZSIsIm9uQ2xpY2siLCJDb3B5cmlnaHQiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIk5hdmlnYXRpb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzZXRBY3RpdmUiLCJ1c2VTdGF0ZSIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsIlNvY2lhbExpc3QiLCJCYXNpY01ldGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJhdXRob3IiLCJ1cmwiLCJjb25maWciLCJzaXRlX3RpdGxlIiwiam9pbiIsInNpdGVfZGVzY3JpcHRpb24iLCJzaXRlX2tleXdvcmRzIiwibWFwIiwiaXQiLCJrZXl3b3JkIiwiYmFzZV91cmwiLCJKc29uTGRNZXRhIiwiZGF0ZSIsImltYWdlIiwianNvbkxkU2NyaXB0UHJvcHMiLCJtYWluRW50aXR5T2ZQYWdlIiwiaGVhZGxpbmUiLCJ1bmRlZmluZWQiLCJkYXRlUHVibGlzaGVkIiwiT3BlbkdyYXBoTWV0YSIsIlR3aXR0ZXJDYXJkTWV0YSIsInR3aXR0ZXJfYWNjb3VudCIsIkluZGV4IiwiRGF0ZSIsIm5vdyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGZSxT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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcElGLENBMUVGLENBREY7QUFtTkQsQzs7Ozs7Ozs7Ozs7QUMzTkQsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJ0eXBlIFByb3BzID0ge1xyXG4gIGFjdGl2ZTogYm9vbGVhbjtcclxuICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXJnZXIoeyBhY3RpdmUsIG9uQ2xpY2sgfTogUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2FjdGl2ZSA/IChcclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgICAgc3JjPVwiLi9pbWFnZXMvaWNvbi1oYW1idXJnZXIuc3ZnXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImhhbWJ1cmdlclwiXHJcbiAgICAgICAgICBhbHQ9XCJjaGFsbGVuZ2VcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICAgIHNyYz1cIi4vaW1hZ2VzL2ljb24tY2xvc2Uuc3ZnXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImhhbWJ1cmdlclwiXHJcbiAgICAgICAgICBhbHQ9XCJjaGFsbGVuZ2VcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvcHlyaWdodCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29weVwiPiZjb3B5OyAyMDIwIExvb3BzdHVkaW9zLiBBbGwgcmlnaHRzIHJlc2VydmVkPC9wPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuY29weSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSB7XHJcbiAgICAgICAgICAgIC5jb3B5IHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDEwJTtcclxuICAgICAgICAgICAgICBib3R0b206IDMuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vTmF2aWdhdGlvbic7XHJcbmltcG9ydCBDb3B5cmlnaHQgZnJvbSAnLi4vY29tcG9uZW50cy9Db3B5cmlnaHQnO1xyXG5pbXBvcnQgeyBTb2NpYWxMaXN0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Tb2NpYWxMaXN0JztcclxudHlwZSBQcm9wcyA9IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9OiBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBuYXYge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4cmVtO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtIDUlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbWFpbixcclxuICAgICAgICAgIG5hdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcclxuICAgICAgICAgICAgbWFpbixcclxuICAgICAgICAgICAgbmF2IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL3NpdGUud2VibWFuaWZlc3RcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBocmVmPVwiL2ljb24ucG5nXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiI2ZmZlwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPG5hdj5cclxuICAgICAgICA8TmF2aWdhdGlvbiAvPlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cclxuICAgICAgPGZvb3Rlcj5cclxuICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL2xvZ28uc3ZnXCIgYWx0PVwibG9vcHN0dWRpb3NcIiAvPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaW5rcy1mb290ZXJcIj5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlciBcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJub29wZW5lciBub3JlZmVycmVyIFwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgIENhcnJlcnNcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlciBcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICBFdmVudHNcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlciBcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICBQcm9kdWN0c1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJub29wZW5lciBub3JlZmVycmVyIFwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgIFN1cHBvcnRcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxTb2NpYWxMaXN0IC8+XHJcbiAgICAgICAgPENvcHlyaWdodCAvPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQnVyZ2VyIGZyb20gJy4vQnVyZ2VyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZSA/ICdhY3RpdmUgbmF2YmFyX19jb250YWluZXInIDogJ25hdmJhcl9fY29udGFpbmVyJ31cclxuICAgICAgPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvbG9nby5zdmdcIiBhbHQ9XCJsb29wc3R1ZGlvc1wiIC8+eycgJ31cclxuICAgICAgICA8QnVyZ2VyIGFjdGl2ZT17YWN0aXZlfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoIWFjdGl2ZSl9IC8+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgXCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSAnLycgPyAnYWN0aXZlJyA6IG51bGx9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgXCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NhcnJlcnMnKSA/ICdhY3RpdmUnIDogbnVsbFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENhcnJlcnNcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyIFwiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9ldmVudHMnKSA/ICdhY3RpdmUnIDogbnVsbFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEV2ZW50c1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgXCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUuc3RhcnRzV2l0aCgnL3Byb2R1Y3RzJykgPyAnYWN0aXZlJyA6IG51bGxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBQcm9kdWN0c1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgXCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUuc3RhcnRzV2l0aCgnL3N1cHBvcnQnKSA/ICdhY3RpdmUnIDogbnVsbFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFN1cHBvcnRcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTb2NpYWxMaXN0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwic29jaWFsLXVsXCI+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9pY29uLWZhY2Vib29rLnN2Z1wiIGFsdD1cInNvY2lhbFwiIC8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL2ljb24tdHdpdHRlci5zdmdcIiBhbHQ9XCJzb2NpYWxcIiAvPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9pY29uLXBpbnRlcmVzdC5zdmdcIiBhbHQ9XCJzb2NpYWxcIiAvPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9pY29uLWluc3RhZ3JhbS5zdmdcIiBhbHQ9XCJzb2NpYWxcIiAvPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vbGliL2NvbmZpZ1wiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICB0aXRsZT86IHN0cmluZztcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZztcclxuICBrZXl3b3Jkcz86IHN0cmluZ1tdO1xyXG4gIGF1dGhvcj86IHN0cmluZztcclxuICB1cmw6IHN0cmluZztcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFzaWNNZXRhKHtcclxuICB0aXRsZSxcclxuICBkZXNjcmlwdGlvbixcclxuICBrZXl3b3JkcyxcclxuICBhdXRob3IsXHJcbiAgdXJsLFxyXG59OiBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPlxyXG4gICAgICAgIHt0aXRsZSA/IFt0aXRsZSwgY29uZmlnLnNpdGVfdGl0bGVdLmpvaW4oXCIgfCBcIikgOiBjb25maWcuc2l0ZV90aXRsZX1cclxuICAgICAgPC90aXRsZT5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNvbnRlbnQ9e2Rlc2NyaXB0aW9uID8gZGVzY3JpcHRpb24gOiBjb25maWcuc2l0ZV9kZXNjcmlwdGlvbn1cclxuICAgICAgLz5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBuYW1lPVwia2V5d29yZHNcIlxyXG4gICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAga2V5d29yZHNcclxuICAgICAgICAgICAgPyBrZXl3b3Jkcy5qb2luKFwiLFwiKVxyXG4gICAgICAgICAgICA6IGNvbmZpZy5zaXRlX2tleXdvcmRzLm1hcCgoaXQpID0+IGl0LmtleXdvcmQpLmpvaW4oXCIsXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgICB7YXV0aG9yID8gPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9e2F1dGhvcn0gLz4gOiBudWxsfVxyXG4gICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXtjb25maWcuYmFzZV91cmwgKyB1cmx9IC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBCbG9nUG9zdGluZyB9IGZyb20gJ3NjaGVtYS1kdHMnO1xyXG5pbXBvcnQgeyBqc29uTGRTY3JpcHRQcm9wcyB9IGZyb20gJ3JlYWN0LXNjaGVtYW9yZyc7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vbGliL2NvbmZpZyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAga2V5d29yZHM/OiBzdHJpbmdbXTtcclxuICBkYXRlPzogRGF0ZTtcclxuICBhdXRob3I/OiBzdHJpbmc7XHJcbiAgaW1hZ2U/OiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEpzb25MZE1ldGEoe1xyXG4gIHVybCxcclxuICB0aXRsZSxcclxuICBrZXl3b3JkcyxcclxuICBkYXRlLFxyXG4gIGF1dGhvcixcclxuICBpbWFnZSxcclxuICBkZXNjcmlwdGlvbixcclxufTogUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDxzY3JpcHRcclxuICAgICAgICB7Li4uanNvbkxkU2NyaXB0UHJvcHM8QmxvZ1Bvc3Rpbmc+KHtcclxuICAgICAgICAgICdAY29udGV4dCc6ICdodHRwczovL3NjaGVtYS5vcmcnLFxyXG4gICAgICAgICAgJ0B0eXBlJzogJ0Jsb2dQb3N0aW5nJyxcclxuICAgICAgICAgIG1haW5FbnRpdHlPZlBhZ2U6IGNvbmZpZy5iYXNlX3VybCArIHVybCxcclxuICAgICAgICAgIGhlYWRsaW5lOiB0aXRsZSxcclxuICAgICAgICAgIGtleXdvcmRzOiBrZXl3b3JkcyA/IHVuZGVmaW5lZCA6IGtleXdvcmRzLmpvaW4oJywnKSxcclxuICAgICAgICAgIGRhdGVQdWJsaXNoZWQ6ICcyMS8wMS8yMDIxJyxcclxuICAgICAgICAgIGF1dGhvcjogYXV0aG9yLFxyXG4gICAgICAgICAgaW1hZ2U6IGltYWdlLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi9saWIvY29uZmlnXCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gIGltYWdlPzogc3RyaW5nO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcGVuR3JhcGhNZXRhKHtcclxuICB1cmwsXHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgaW1hZ2UsXHJcbn06IFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e2NvbmZpZy5zaXRlX3RpdGxlfSAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e2NvbmZpZy5iYXNlX3VybCArIHVybH0gLz5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBwcm9wZXJ0eT1cIm9nOnRpdGxlXCJcclxuICAgICAgICBjb250ZW50PXt0aXRsZSA/IFt0aXRsZSwgY29uZmlnLnNpdGVfdGl0bGVdLmpvaW4oXCIgfCBcIikgOiBcIlwifVxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNvbnRlbnQ9e2Rlc2NyaXB0aW9uID8gZGVzY3JpcHRpb24gOiBjb25maWcuc2l0ZV9kZXNjcmlwdGlvbn1cclxuICAgICAgLz5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcclxuICAgICAgICBjb250ZW50PXtpbWFnZSA/IGltYWdlIDogY29uZmlnLmJhc2VfdXJsICsgXCIvb2dfaW1hZ2UucG5nXCJ9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJhcnRpY2xlXCIgLz5cclxuICAgIDwvSGVhZD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uL2xpYi9jb25maWdcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICB1cmw6IHN0cmluZztcclxuICB0aXRsZT86IHN0cmluZztcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZztcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHdpdHRlckNhcmRNZXRhKHsgdXJsLCB0aXRsZSwgZGVzY3JpcHRpb24gfTogUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9e2NvbmZpZy50d2l0dGVyX2FjY291bnR9IC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjp1cmxcIiBjb250ZW50PXtjb25maWcuYmFzZV91cmwgKyB1cmx9IC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgcHJvcGVydHk9XCJ0d2l0dGVyOnRpdGxlXCJcclxuICAgICAgICBjb250ZW50PXt0aXRsZSA/IFt0aXRsZSwgY29uZmlnLnNpdGVfdGl0bGVdLmpvaW4oXCIgfCBcIikgOiBcIlwifVxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIHByb3BlcnR5PVwidHdpdHRlcjpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgY29udGVudD17ZGVzY3JpcHRpb24gPyBkZXNjcmlwdGlvbiA6IGNvbmZpZy5zaXRlX2Rlc2NyaXB0aW9ufVxyXG4gICAgICAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlnLmpzb25cIjtcclxuXHJcbnR5cGUgQ29uZmlnID0ge1xyXG4gIHJlYWRvbmx5IGJhc2VfdXJsOiBzdHJpbmc7XHJcbiAgcmVhZG9ubHkgc2l0ZV90aXRsZTogc3RyaW5nO1xyXG4gIHJlYWRvbmx5IHNpdGVfZGVzY3JpcHRpb246IHN0cmluZztcclxuICByZWFkb25seSBzaXRlX2tleXdvcmRzOiB7IGtleXdvcmQ6IHN0cmluZyB9W107XHJcbiAgcmVhZG9ubHkgcG9zdHNfcGVyX3BhZ2U6IG51bWJlcjtcclxuICByZWFkb25seSB0d2l0dGVyX2FjY291bnQ6IHN0cmluZztcclxuICByZWFkb25seSBnaXRodWJfYWNjb3VudDogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnIGFzIENvbmZpZztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBCYXNpY01ldGEgZnJvbSAnLi4vY29tcG9uZW50cy9tZXRhL0Jhc2ljTWV0YSc7XHJcbmltcG9ydCBKc29uTGRNZXRhIGZyb20gJy4uL2NvbXBvbmVudHMvbWV0YS9Kc29uTGRNZXRhJztcclxuaW1wb3J0IE9wZW5HcmFwaE1ldGEgZnJvbSAnLi4vY29tcG9uZW50cy9tZXRhL09wZW5HcmFwaE1ldGEnO1xyXG5pbXBvcnQgVHdpdHRlckNhcmRNZXRhIGZyb20gJy4uL2NvbXBvbmVudHMvbWV0YS9Ud2l0dGVyQ2FyZE1ldGEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxCYXNpY01ldGFcclxuICAgICAgICB1cmw9e2AvYH1cclxuICAgICAgICB0aXRsZT17J0Zyb250ZW5kIHdlYiBkZXZlbG9wbWVudCd9XHJcbiAgICAgICAga2V5d29yZHM9e1sna2V5d29yZHMnLCAnZnJvbnRlbmQnLCAnY2hhbGxlbmdlJ119XHJcbiAgICAgICAgZGVzY3JpcHRpb249e1xyXG4gICAgICAgICAgJ0EgZnJvbnRlbmRtZW50b3IgY2hhbGxlbmdlIGNvbXBsZXRlZCBieSBWaW5jZW56byBNYXJjb3ZlY2NoaW8nXHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgICA8VHdpdHRlckNhcmRNZXRhXHJcbiAgICAgICAgdXJsPXtgL2B9XHJcbiAgICAgICAgdGl0bGU9eydGcm9udGVuZCB3ZWIgZGV2ZWxvcG1lbnQnfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtcclxuICAgICAgICAgICdBIGZyb250ZW5kbWVudG9yIGNoYWxsZW5nZSBjb21wbGV0ZWQgYnkgVmluY2Vuem8gTWFyY292ZWNjaGlvJ1xyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuICAgICAgPE9wZW5HcmFwaE1ldGFcclxuICAgICAgICB1cmw9e2AvYH1cclxuICAgICAgICB0aXRsZT17J0Zyb250ZW5kIHdlYiBkZXZlbG9wbWVudCd9XHJcbiAgICAgICAgZGVzY3JpcHRpb249e1xyXG4gICAgICAgICAgJ0EgZnJvbnRlbmRtZW50b3IgY2hhbGxlbmdlIGNvbXBsZXRlZCBieSBWaW5jZW56byBNYXJjb3ZlY2NoaW8nXHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgICA8SnNvbkxkTWV0YVxyXG4gICAgICAgIHVybD17YC9gfVxyXG4gICAgICAgIHRpdGxlPXsnRnJvbnRlbmQgd2ViIGRldmVsb3BtZW50J31cclxuICAgICAgICBkYXRlPXtuZXcgRGF0ZShEYXRlLm5vdygpKX1cclxuICAgICAgICBrZXl3b3Jkcz17Wyd3ZWInLCAnZGV2ZWxvcG1lbnQnXX1cclxuICAgICAgICBhdXRob3I9eydWaW5jZW56byBNYXJjb3ZlY2NoaW8nfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtcclxuICAgICAgICAgICdBIGZyb250ZW5kbWVudG9yIGNoYWxsZW5nZSBjb21wbGV0ZWQgYnkgVmluY2Vuem8gTWFyY292ZWNjaGlvJ1xyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxwaWN0dXJlPlxyXG4gICAgICAgICAgPHNvdXJjZVxyXG4gICAgICAgICAgICBzcmNTZXQ9e2AuL2ltYWdlcy9kZXNrdG9wL2ltYWdlLWhlcm8uanBnYH1cclxuICAgICAgICAgICAgbWVkaWE9XCIobWluLXdpZHRoOiA3NjlweClcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgYWx0PVwidGhlIGNoYWxsZW5nZVwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJSBcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVyby1pbWFnZVwiXHJcbiAgICAgICAgICAgIHNyYz17YC4vaW1hZ2VzL21vYmlsZS9pbWFnZS1oZXJvLmpwZ2B9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvcGljdHVyZT5cclxuICAgICAgICA8aDE+IEltbWVyc2l2ZSBleHBlcmllbmNlcyB0aGF0IGRlbGl2ZXI8L2gxPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxwaWN0dXJlPlxyXG4gICAgICAgICAgPHNvdXJjZVxyXG4gICAgICAgICAgICBzcmNTZXQ9e2AuL2ltYWdlcy9kZXNrdG9wL2ltYWdlLWludGVyYWN0aXZlLmpwZ2B9XHJcbiAgICAgICAgICAgIG1lZGlhPVwiKG1pbi13aWR0aDogNzY5cHgpXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgICBhbHQ9XCJ0aGUgY2hhbGxlbmdlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW50ZXJhY3RpdmUtaW1hZ2VcIlxyXG4gICAgICAgICAgICBzcmM9e2AuL2ltYWdlcy9tb2JpbGUvaW1hZ2UtaW50ZXJhY3RpdmUuanBnYH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9waWN0dXJlPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxoMj4gVGhlIGxlYWRlciBpbiBpbnRlcmFjdGl2ZSBWUjwvaDI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgRm91bmRlZCBpbiAyMDExLCBMb29wc3R1ZGlvcyBoYXMgYmVlbiBwcm9kdWNpbmcgd29ybGQtY2xhc3MgdmlydHVhbFxyXG4gICAgICAgICAgICByZWFsaXR5IHByb2plY3RzIGZvciBzb21lIG9mIHRoZSBiZXN0IGNvbXBhbmllcyBhcm91bmQgdGhlIGdsb2JlLlxyXG4gICAgICAgICAgICBPdXIgYXdhcmQtd2lubmluZyBjcmVhdGlvbnMgaGF2ZSB0cmFuc2Zvcm1lZCBidXNpbmVzc2VzIHRocm91Z2hcclxuICAgICAgICAgICAgZGlnaXRhbCBleHBlcmllbmNlcyB0aGF0IGJpbmQgdG8gdGhlaXIgYnJhbmQuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPGgyPiBvdXIgY3JlYXRpb25zPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cGljdHVyZT5cclxuICAgICAgICAgICAgICA8c291cmNlXHJcbiAgICAgICAgICAgICAgICBzcmNTZXQ9e2AuL2ltYWdlcy9kZXNrdG9wL2ltYWdlLWRlZXAtZWFydGguanBnYH1cclxuICAgICAgICAgICAgICAgIG1lZGlhPVwiKG1pbi13aWR0aDogNzY5cHgpXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cInRoZSBjaGFsbGVuZ2VcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2AuL2ltYWdlcy9tb2JpbGUvaW1hZ2UtZGVlcC1lYXJ0aC5qcGdgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvcGljdHVyZT5cclxuICAgICAgICAgICAgPHNwYW4+ZGVlcCBlYXJ0aDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHBpY3R1cmU+XHJcbiAgICAgICAgICAgICAgPHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgc3JjU2V0PXtgLi9pbWFnZXMvZGVza3RvcC9pbWFnZS1uaWdodC1hcmNhZGUuanBnYH1cclxuICAgICAgICAgICAgICAgIG1lZGlhPVwiKG1pbi13aWR0aDogNzY5cHgpXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cInRoZSBjaGFsbGVuZ2VcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2AuL2ltYWdlcy9tb2JpbGUvaW1hZ2UtbmlnaHQtYXJjYWRlLmpwZ2B9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9waWN0dXJlPlxyXG4gICAgICAgICAgICA8c3Bhbj5uaWdodCBhcmNhZGU8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwaWN0dXJlPlxyXG4gICAgICAgICAgICAgIDxzb3VyY2VcclxuICAgICAgICAgICAgICAgIHNyY1NldD17YC4vaW1hZ2VzL2Rlc2t0b3AvaW1hZ2Utc29jY2VyLXRlYW0uanBnYH1cclxuICAgICAgICAgICAgICAgIG1lZGlhPVwiKG1pbi13aWR0aDogNzY5cHgpXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cInRoZSBjaGFsbGVuZ2VcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2AuL2ltYWdlcy9tb2JpbGUvaW1hZ2Utc29jY2VyLXRlYW0uanBnYH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3BpY3R1cmU+XHJcbiAgICAgICAgICAgIDxzcGFuPnNvY2NlciB0ZWFtIHZyIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHBpY3R1cmU+XHJcbiAgICAgICAgICAgICAgPHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgc3JjU2V0PXtgLi9pbWFnZXMvZGVza3RvcC9pbWFnZS1ncmlkLmpwZ2B9XHJcbiAgICAgICAgICAgICAgICBtZWRpYT1cIihtaW4td2lkdGg6IDc2OXB4KVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJ0aGUgY2hhbGxlbmdlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtgLi9pbWFnZXMvbW9iaWxlL2ltYWdlLWdyaWQuanBnYH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3BpY3R1cmU+XHJcbiAgICAgICAgICAgIDxzcGFuPnRoZSBncmlkIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHBpY3R1cmU+XHJcbiAgICAgICAgICAgICAgPHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgc3JjU2V0PXtgLi9pbWFnZXMvZGVza3RvcC9pbWFnZS1mcm9tLWFib3ZlLmpwZ2B9XHJcbiAgICAgICAgICAgICAgICBtZWRpYT1cIihtaW4td2lkdGg6IDc2OXB4KVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJ0aGUgY2hhbGxlbmdlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtgLi9pbWFnZXMvbW9iaWxlL2ltYWdlLWZyb20tYWJvdmUuanBnYH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3BpY3R1cmU+XHJcbiAgICAgICAgICAgIDxzcGFuPmZyb20gdXAgYWJvdmUgdnIgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cGljdHVyZT5cclxuICAgICAgICAgICAgICA8c291cmNlXHJcbiAgICAgICAgICAgICAgICBzcmNTZXQ9e2AuL2ltYWdlcy9kZXNrdG9wL2ltYWdlLXBvY2tldC1ib3JlYWxpcy5qcGdgfVxyXG4gICAgICAgICAgICAgICAgbWVkaWE9XCIobWluLXdpZHRoOiA3NjlweClcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwidGhlIGNoYWxsZW5nZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWltYWdlXCJcclxuICAgICAgICAgICAgICAgIHNyYz17YC4vaW1hZ2VzL21vYmlsZS9pbWFnZS1wb2NrZXQtYm9yZWFsaXMuanBnYH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3BpY3R1cmU+XHJcbiAgICAgICAgICAgIDxzcGFuPnBvY2tldCBib3JlYWxpcyA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwaWN0dXJlPlxyXG4gICAgICAgICAgICAgIDxzb3VyY2VcclxuICAgICAgICAgICAgICAgIHNyY1NldD17YC4vaW1hZ2VzL2Rlc2t0b3AvaW1hZ2UtY3VyaW9zaXR5LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICBtZWRpYT1cIihtaW4td2lkdGg6IDc2OXB4KVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJ0aGUgY2hhbGxlbmdlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtgLi9pbWFnZXMvbW9iaWxlL2ltYWdlLWN1cmlvc2l0eS5qcGdgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvcGljdHVyZT5cclxuICAgICAgICAgICAgPHNwYW4+dGhlIGN1cmlvc2l0eSA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwaWN0dXJlPlxyXG4gICAgICAgICAgICAgIDxzb3VyY2VcclxuICAgICAgICAgICAgICAgIHNyY1NldD17YC4vaW1hZ2VzL2Rlc2t0b3AvaW1hZ2UtZmlzaGV5ZS5qcGdgfVxyXG4gICAgICAgICAgICAgICAgbWVkaWE9XCIobWluLXdpZHRoOiA3NjlweClcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwidGhlIGNoYWxsZW5nZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWltYWdlXCJcclxuICAgICAgICAgICAgICAgIHNyYz17YC4vaW1hZ2VzL21vYmlsZS9pbWFnZS1maXNoZXllLmpwZ2B9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9waWN0dXJlPlxyXG4gICAgICAgICAgICA8c3Bhbj5tYWtlIGl0IGZpc2hleWUgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbj5zZWUgYWxsPC9idXR0b24+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNjaGVtYW9yZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=