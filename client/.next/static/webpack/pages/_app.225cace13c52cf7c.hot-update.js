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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"../node_modules/react-query/es/index.js\");\n/* harmony import */ var _components_layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts */ \"./components/layouts/index.tsx\");\n/* harmony import */ var _styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globalStyles */ \"./styles/globalStyles.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst CustomApp = (param)=>{\n    let { Component , pageProps  } = param;\n    _s();\n    const clientRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const getClient = ()=>{\n        if (!clientRef.current) clientRef.current = new react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient({\n            defaultOptions: {\n                queries: {\n                    //  refetchInterval : 10000,\n                    refetchOnWindowFocus: false\n                }\n            }\n        });\n        return clientRef.current;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {\n        client: getClient(),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__.GlobalStyle, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\태권\\\\OneDrive\\\\바탕 화면\\\\next-boilerplate\\\\client\\\\pages\\\\_app.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\태권\\\\OneDrive\\\\바탕 화면\\\\next-boilerplate\\\\client\\\\pages\\\\_app.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\태권\\\\OneDrive\\\\바탕 화면\\\\next-boilerplate\\\\client\\\\pages\\\\_app.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\태권\\\\OneDrive\\\\바탕 화면\\\\next-boilerplate\\\\client\\\\pages\\\\_app.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CustomApp, \"67t0qiuNMBMd6ZM7Z7JwZpgZZRM=\");\n_c = CustomApp;\nCustomApp.getInitialProps = async (param)=>{\n    let { ctx , Component  } = param;\n    var ref;\n    const pageProps = await ((ref = Component.getInitialProps) === null || ref === void 0 ? void 0 : ref.call(Component, ctx));\n    return {\n        pageProps\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomApp);\nvar _c;\n$RefreshReg$(_c, \"CustomApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFzQztBQUN5QjtBQUVwQjtBQUNVO0FBRXJELE1BQU1NLFlBQVksU0FBOEI7UUFBN0IsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUU7O0lBQ3pDLE1BQU1DLFlBQVlSLDZDQUFNQSxDQUFDLElBQUk7SUFDN0IsTUFBTVMsWUFBWSxJQUFNO1FBQ3RCLElBQUksQ0FBQ0QsVUFBVUUsT0FBTyxFQUNwQkYsVUFBVUUsT0FBTyxHQUFHLElBQUlULG9EQUFXQSxDQUFDO1lBQ2xDVSxnQkFBZ0I7Z0JBQ2RDLFNBQVM7b0JBQ1AsNEJBQTRCO29CQUM1QkMsc0JBQXNCLEtBQUs7Z0JBQzdCO1lBQ0Y7UUFDRjtRQUNGLE9BQU9MLFVBQVVFLE9BQU87SUFDMUI7SUFDQSxxQkFDRSw4REFBQ1IsNERBQW1CQTtRQUFDWSxRQUFRTDtrQkFDM0IsNEVBQUNOLDJEQUFNQTs7OEJBQ0wsOERBQUNDLDZEQUFXQTs7Ozs7OEJBQ1osOERBQUNFO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDO0dBdEJNRjtLQUFBQTtBQXdCTkEsVUFBVVUsZUFBZSxHQUFHLGVBQThCO1FBQXZCLEVBQUVDLElBQUcsRUFBRVYsVUFBUyxFQUFFO1FBQzNCQTtJQUF4QixNQUFNQyxZQUFZLE9BQU1ELENBQUFBLE1BQUFBLFVBQVVTLGVBQWUsY0FBekJULGlCQUFBQSxLQUFBQSxJQUFBQSxJQUFBQSxLQUFBQSxXQUE0QlU7SUFDcEQsT0FBTztRQUFFVDtJQUFVO0FBQ3JCO0FBRUEsK0RBQWVGLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XHJcbmltcG9ydCB7IEh5ZHJhdGUgfSBmcm9tIFwicmVhY3QtcXVlcnkvaHlkcmF0aW9uXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0c1wiO1xyXG5pbXBvcnQgeyBHbG9iYWxTdHlsZSB9IGZyb20gXCIuLi9zdHlsZXMvZ2xvYmFsU3R5bGVzXCI7XHJcblxyXG5jb25zdCBDdXN0b21BcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgY29uc3QgY2xpZW50UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGdldENsaWVudCA9ICgpID0+IHtcclxuICAgIGlmICghY2xpZW50UmVmLmN1cnJlbnQpXHJcbiAgICAgIGNsaWVudFJlZi5jdXJyZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KHtcclxuICAgICAgICBkZWZhdWx0T3B0aW9uczoge1xyXG4gICAgICAgICAgcXVlcmllczoge1xyXG4gICAgICAgICAgICAvLyAgcmVmZXRjaEludGVydmFsIDogMTAwMDAsXHJcbiAgICAgICAgICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICByZXR1cm4gY2xpZW50UmVmLmN1cnJlbnQ7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtnZXRDbGllbnQoKX0+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuQ3VzdG9tQXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCwgQ29tcG9uZW50IH0pID0+IHtcclxuICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzPy4oY3R4KTtcclxuICByZXR1cm4geyBwYWdlUHJvcHMgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUFwcDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiTGF5b3V0IiwiR2xvYmFsU3R5bGUiLCJDdXN0b21BcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnRSZWYiLCJnZXRDbGllbnQiLCJjdXJyZW50IiwiZGVmYXVsdE9wdGlvbnMiLCJxdWVyaWVzIiwicmVmZXRjaE9uV2luZG93Rm9jdXMiLCJjbGllbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});