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

/***/ "./redux/reducers/login/loginReducer.ts":
/*!**********************************************!*\
  !*** ./redux/reducers/login/loginReducer.ts ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ \"./node_modules/immer/dist/immer.esm.mjs\");\n/* harmony import */ var _loginCreators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginCreators */ \"./redux/reducers/login/loginCreators.ts\");\n\n\nvar initialState = {\n    userId: null,\n    isAuth: false,\n    name: \"\",\n    avatarSrc: \"\",\n    id: null,\n    email: null\n};\nvar loginReducer = (0,immer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(draft, action) {\n    switch(action.type){\n        case _loginCreators__WEBPACK_IMPORTED_MODULE_0__.loginOperations.SET_LOGIN_DATA:\n            draft.isAuth = true;\n            draft.name = action.username;\n            draft.id = action.id;\n            draft.email = action.email;\n    }\n    return draft;\n}, initialState);\n/* harmony default export */ __webpack_exports__[\"default\"] = (loginReducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy9sb2dpbi9sb2dpblJlZHVjZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXNDO0FBRVc7QUFZakQsSUFBSUUsWUFBWSxHQUEwQjtJQUN4Q0MsTUFBTSxFQUFFLElBQUk7SUFDWkMsTUFBTSxFQUFFLEtBQUs7SUFDYkMsSUFBSSxFQUFFLEVBQUU7SUFDUkMsU0FBUyxFQUFFLEVBQUU7SUFDYkMsRUFBRSxFQUFFLElBQUk7SUFDUkMsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQUdELElBQU1DLFlBQVksR0FBR1QsaURBQU8sQ0FBQyxTQUFDVSxLQUFtQyxFQUFFQyxNQUF1QixFQUFLO0lBQzdGLE9BQVFBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNqQixLQUFLWCwwRUFBOEI7WUFDakNTLEtBQUssQ0FBQ04sTUFBTSxHQUFHLElBQUk7WUFDbkJNLEtBQUssQ0FBQ0wsSUFBSSxHQUFHTSxNQUFNLENBQUNHLFFBQVE7WUFDNUJKLEtBQUssQ0FBQ0gsRUFBRSxHQUFHSSxNQUFNLENBQUNKLEVBQUU7WUFDcEJHLEtBQUssQ0FBQ0YsS0FBSyxHQUFHRyxNQUFNLENBQUNILEtBQUs7S0FDN0I7SUFFRCxPQUFPRSxLQUFLO0NBQ2IsRUFBRVIsWUFBWSxDQUFDO0FBR2hCLCtEQUFlTyxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L3JlZHVjZXJzL2xvZ2luL2xvZ2luUmVkdWNlci50cz9lZWYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlLCB7IERyYWZ0IH0gZnJvbSAnaW1tZXInXG5pbXBvcnQgeyBhY3Rpb25JbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jb25zdGFudHMnXG5pbXBvcnQgeyBsb2dpbk9wZXJhdGlvbnMgfSBmcm9tICcuL2xvZ2luQ3JlYXRvcnMnXG5cblxuaW50ZXJmYWNlIGluaXRpYWxTdGF0ZUludGVyZmFjZSB7XG4gIHVzZXJJZDogc3RyaW5nIHwgbnVsbFxuICBpc0F1dGg6IGJvb2xlYW5cbiAgbmFtZTogc3RyaW5nXG4gIGF2YXRhclNyYzogc3RyaW5nXG4gIGlkOiBudW1iZXIgfCBudWxsXG4gIGVtYWlsOiBzdHJpbmcgfCBudWxsXG59XG5cbmxldCBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZUludGVyZmFjZSA9IHtcbiAgdXNlcklkOiBudWxsLFxuICBpc0F1dGg6IGZhbHNlLFxuICBuYW1lOiAnJyxcbiAgYXZhdGFyU3JjOiAnJyxcbiAgaWQ6IG51bGwsXG4gIGVtYWlsOiBudWxsXG59XG5cblxuY29uc3QgbG9naW5SZWR1Y2VyID0gcHJvZHVjZSgoZHJhZnQ6IERyYWZ0PGluaXRpYWxTdGF0ZUludGVyZmFjZT4sIGFjdGlvbjogYWN0aW9uSW50ZXJmYWNlKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGxvZ2luT3BlcmF0aW9ucy5TRVRfTE9HSU5fREFUQTpcbiAgICAgIGRyYWZ0LmlzQXV0aCA9IHRydWVcbiAgICAgIGRyYWZ0Lm5hbWUgPSBhY3Rpb24udXNlcm5hbWVcbiAgICAgIGRyYWZ0LmlkID0gYWN0aW9uLmlkXG4gICAgICBkcmFmdC5lbWFpbCA9IGFjdGlvbi5lbWFpbFxuICB9XG5cbiAgcmV0dXJuIGRyYWZ0XG59LCBpbml0aWFsU3RhdGUpXG5cblxuZXhwb3J0IGRlZmF1bHQgbG9naW5SZWR1Y2VyIl0sIm5hbWVzIjpbInByb2R1Y2UiLCJsb2dpbk9wZXJhdGlvbnMiLCJpbml0aWFsU3RhdGUiLCJ1c2VySWQiLCJpc0F1dGgiLCJuYW1lIiwiYXZhdGFyU3JjIiwiaWQiLCJlbWFpbCIsImxvZ2luUmVkdWNlciIsImRyYWZ0IiwiYWN0aW9uIiwidHlwZSIsIlNFVF9MT0dJTl9EQVRBIiwidXNlcm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/reducers/login/loginReducer.ts\n");

/***/ })

});