"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./core/nav.js":
/*!*********************!*\
  !*** ./core/nav.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_appContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/appContext */ \"./context/appContext.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar btnNav = [\n    \"navBtn\"\n].join(\" \");\n// const colorValue = { color: \"#7936de\" };\nvar activeClassName = \"active\";\nvar activeColor = function(menuRef) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var isHome = router.asPath === \"/\" && menuRef === \"/\";\n    var match = menuRef !== \"/\" && router.pathname.indexOf(menuRef) !== -1 && !isHome;\n    if (isHome) return activeClassName;\n    return match ? activeClassName : \"\";\n};\n_s(activeColor, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\nvar Nav = function() {\n    var _this1 = _this;\n    _s1();\n    var isMobile = (0,_context_appContext__WEBPACK_IMPORTED_MODULE_5__.useReactAppContext)().isMobile;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(isMobile), show = ref[0], setShow = ref[1];\n    var handleOpenCloseNav = function() {\n        setShow(!show);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: [\n                \"\".concat(show ? \"hide\" : \"show\")\n            ].join(\" \"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: [\n                    \"pageNav\",\n                    \"column\"\n                ].join(\" \"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"column\",\n                    children: _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].menus.map(function(menu) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            prefetch: true,\n                            href: menu.href,\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"navBtn \".concat(activeColor(menu.href)),\n                                children: menu.name\n                            }, void 0, false, {\n                                fileName: \"/Users/dpresume/deven/dpgit/next-ui-challenge-paulo/core/nav.js\",\n                                lineNumber: 42,\n                                columnNumber: 19\n                            }, _this1)\n                        }, \"id\" + menu.name, false, {\n                            fileName: \"/Users/dpresume/deven/dpgit/next-ui-challenge-paulo/core/nav.js\",\n                            lineNumber: 36,\n                            columnNumber: 17\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/dpresume/deven/dpgit/next-ui-challenge-paulo/core/nav.js\",\n                    lineNumber: 33,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/dpresume/deven/dpgit/next-ui-challenge-paulo/core/nav.js\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/dpresume/deven/dpgit/next-ui-challenge-paulo/core/nav.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/dpresume/deven/dpgit/next-ui-challenge-paulo/core/nav.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\n_s1(Nav, \"Q900lEWvWe+K1RSyiw25QvG9SB4=\", false, function() {\n    return [\n        _context_appContext__WEBPACK_IMPORTED_MODULE_5__.useReactAppContext\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb3JlL25hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFrRDtBQUNWO0FBQ1Q7QUFDRjtBQUM4Qjs7QUFFM0QsSUFBTU8sTUFBTSxHQUFHO0lBQUMsUUFBUTtDQUFDLENBQUNDLElBQUksQ0FBQyxHQUFHLENBQUM7QUFFbkMsMkNBQTJDO0FBQzNDLElBQU1DLGVBQWUsR0FBRyxRQUFRO0FBRWhDLElBQU1DLFdBQVcsR0FBRyxTQUFDQyxPQUFPLEVBQUs7O0lBQy9CLElBQU1DLE1BQU0sR0FBR1Qsc0RBQVMsRUFBRTtJQUMxQixJQUFJVSxNQUFNLEdBQUdELE1BQU0sQ0FBQ0UsTUFBTSxLQUFLLEdBQUcsSUFBSUgsT0FBTyxLQUFLLEdBQUc7SUFDckQsSUFBSUksS0FBSyxHQUNQSixPQUFPLEtBQUssR0FBRyxJQUFJQyxNQUFNLENBQUNJLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDTixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDRSxNQUFNO0lBQ3ZFLElBQUlBLE1BQU0sRUFBRSxPQUFPSixlQUFlLENBQUM7SUFDbkMsT0FBT00sS0FBSyxHQUFHTixlQUFlLEdBQUcsRUFBRSxDQUFDO0NBQ3JDO0dBUEtDLFdBQVc7O1FBQ0FQLGtEQUFTOzs7QUFRMUIsSUFBTWUsR0FBRyxHQUFHLFdBQU07OztJQUNoQixJQUFNLFFBQVUsR0FBS1osdUVBQWtCLEVBQUUsQ0FBakNhLFFBQVE7SUFDaEIsSUFBd0JqQixHQUFrQixHQUFsQkEsK0NBQVEsQ0FBQ2lCLFFBQVEsQ0FBQyxFQXRCNUMsSUFzQmEsR0FBYWpCLEdBQWtCLEdBQS9CLEVBdEJiLE9Bc0JzQixHQUFJQSxHQUFrQixHQUF0QjtJQUVwQixJQUFNb0Isa0JBQWtCLEdBQUcsV0FBTTtRQUMvQkQsT0FBTyxDQUFDLENBQUNELElBQUksQ0FBQyxDQUFDO0tBQ2hCO0lBRUQscUJBQ0UsOERBQUNuQiwyQ0FBUTtrQkFDUCw0RUFBQ3NCLEtBQUc7WUFBQ0MsU0FBUyxFQUFFO2dCQUFFLEdBQXlCLE9BQXZCSixJQUFJLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBRTthQUFDLENBQUNaLElBQUksQ0FBQyxHQUFHLENBQUM7c0JBQ3JELDRFQUFDZSxLQUFHO2dCQUFDQyxTQUFTLEVBQUU7b0JBQUMsU0FBUztvQkFBRSxRQUFRO2lCQUFDLENBQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDOzBCQUM3Qyw0RUFBQ2UsS0FBRztvQkFBQ0MsU0FBUyxFQUFFLFFBQVE7OEJBQ3JCcEIseURBQWdCLENBQUMsU0FBQ3VCLElBQUksRUFBSzt3QkFDMUIscUJBQ0UsOERBQUN0QixrREFBSTs0QkFDSHVCLFFBQVEsRUFBRSxJQUFJOzRCQUVkQyxJQUFJLEVBQUVGLElBQUksQ0FBQ0UsSUFBSTs0QkFDZkMsUUFBUTtzQ0FFUiw0RUFBQ0MsTUFBSTtnQ0FBQ1AsU0FBUyxFQUFFLFNBQVEsQ0FBeUIsT0FBdkJkLFdBQVcsQ0FBQ2lCLElBQUksQ0FBQ0UsSUFBSSxDQUFDLENBQUU7MENBQ2hERixJQUFJLENBQUNLLElBQUk7Ozs7O3NDQUNMOzJCQU5GLElBQUksR0FBR0wsSUFBSSxDQUFDSyxJQUFJOzs7O2tDQU9oQixDQUNQO3FCQUNILENBQUM7Ozs7O3lCQUNFOzs7OztxQkFDRjs7Ozs7aUJBQ0Y7Ozs7O2FBQ0csQ0FDWDtDQUNIO0lBaENLZCxHQUFHOztRQUNjWixtRUFBa0I7OztBQURuQ1ksS0FBQUEsR0FBRztBQWtDVCwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvcmUvbmF2LmpzPzc4ODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJlYWN0QXBwQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2FwcENvbnRleHRcIjtcblxuY29uc3QgYnRuTmF2ID0gW1wibmF2QnRuXCJdLmpvaW4oXCIgXCIpO1xuXG4vLyBjb25zdCBjb2xvclZhbHVlID0geyBjb2xvcjogXCIjNzkzNmRlXCIgfTtcbmNvbnN0IGFjdGl2ZUNsYXNzTmFtZSA9IFwiYWN0aXZlXCI7XG5cbmNvbnN0IGFjdGl2ZUNvbG9yID0gKG1lbnVSZWYpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGxldCBpc0hvbWUgPSByb3V0ZXIuYXNQYXRoID09PSBcIi9cIiAmJiBtZW51UmVmID09PSBcIi9cIjtcbiAgbGV0IG1hdGNoID1cbiAgICBtZW51UmVmICE9PSBcIi9cIiAmJiByb3V0ZXIucGF0aG5hbWUuaW5kZXhPZihtZW51UmVmKSAhPT0gLTEgJiYgIWlzSG9tZTtcbiAgaWYgKGlzSG9tZSkgcmV0dXJuIGFjdGl2ZUNsYXNzTmFtZTtcbiAgcmV0dXJuIG1hdGNoID8gYWN0aXZlQ2xhc3NOYW1lIDogXCJcIjtcbn07XG5cbmNvbnN0IE5hdiA9ICgpID0+IHtcbiAgY29uc3QgeyBpc01vYmlsZSB9ID0gdXNlUmVhY3RBcHBDb250ZXh0KCk7XG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGlzTW9iaWxlKTtcblxuICBjb25zdCBoYW5kbGVPcGVuQ2xvc2VOYXYgPSAoKSA9PiB7XG4gICAgc2V0U2hvdyghc2hvdyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17W2Ake3Nob3cgPyBcImhpZGVcIiA6IFwic2hvd1wifWBdLmpvaW4oXCIgXCIpfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tcInBhZ2VOYXZcIiwgXCJjb2x1bW5cIl0uam9pbihcIiBcIil9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNvbHVtblwifT5cbiAgICAgICAgICAgIHtjb25maWcubWVudXMubWFwKChtZW51KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIHByZWZldGNoPXt0cnVlfVxuICAgICAgICAgICAgICAgICAga2V5PXtcImlkXCIgKyBtZW51Lm5hbWV9XG4gICAgICAgICAgICAgICAgICBocmVmPXttZW51LmhyZWZ9XG4gICAgICAgICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YG5hdkJ0biAke2FjdGl2ZUNvbG9yKG1lbnUuaHJlZil9YH0+XG4gICAgICAgICAgICAgICAgICAgIHttZW51Lm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZyYWdtZW50IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJjb25maWciLCJMaW5rIiwidXNlUmVhY3RBcHBDb250ZXh0IiwiYnRuTmF2Iiwiam9pbiIsImFjdGl2ZUNsYXNzTmFtZSIsImFjdGl2ZUNvbG9yIiwibWVudVJlZiIsInJvdXRlciIsImlzSG9tZSIsImFzUGF0aCIsIm1hdGNoIiwicGF0aG5hbWUiLCJpbmRleE9mIiwiTmF2IiwiaXNNb2JpbGUiLCJzaG93Iiwic2V0U2hvdyIsImhhbmRsZU9wZW5DbG9zZU5hdiIsImRpdiIsImNsYXNzTmFtZSIsIm1lbnVzIiwibWFwIiwibWVudSIsInByZWZldGNoIiwiaHJlZiIsInBhc3NIcmVmIiwic3BhbiIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./core/nav.js\n");

/***/ })

});