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

/***/ "./redux/reducers/login/loginCreators.ts":
/*!***********************************************!*\
  !*** ./redux/reducers/login/loginCreators.ts ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginOperations\": function() { return /* binding */ loginOperations; },\n/* harmony export */   \"setLoginData\": function() { return /* binding */ setLoginData; }\n/* harmony export */ });\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar loginOperations;\n(function(loginOperations) {\n    loginOperations[\"SET_LOGIN_DATA\"] = \"/login/SET_LOGIN_DATA\";\n})(loginOperations || (loginOperations = {}));\n//creators\nvar setLoginData = function(data) {\n    return _objectSpread({\n        type: loginOperations.SET_LOGIN_DATA\n    }, data);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy9sb2dpbi9sb2dpbkNyZWF0b3JzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTyxlQUVOO1VBRldBLGVBQWU7SUFBZkEsZUFBZSxDQUN6QkMsZ0JBQWMsSUFBRyx1QkFBdUI7R0FEOUJELGVBQWUsS0FBZkEsZUFBZTtBQVczQixVQUFVO0FBRUgsSUFBTUUsWUFBWSxHQUFHLFNBQUNDLElBQWU7V0FBTTtRQUNoREMsSUFBSSxFQUFFSixlQUFlLENBQUNDLGNBQWM7T0FDakNFLElBQUksQ0FDUjtDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L3JlZHVjZXJzL2xvZ2luL2xvZ2luQ3JlYXRvcnMudHM/NGEyYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbnN0YW50c1xuZXhwb3J0IGVudW0gbG9naW5PcGVyYXRpb25zIHtcbiAgU0VUX0xPR0lOX0RBVEEgPSAnL2xvZ2luL1NFVF9MT0dJTl9EQVRBJ1xufVxuXG5leHBvcnQgdHlwZSBsb2dpbkRhdGEgPSB7XG4gIHVzZXJuYW1lOiBzdHJpbmcsXG4gIGlkOiBudW1iZXIsXG4gIGVtYWlsOiBzdHJpbmcgfCAnbnVsbCdcbn1cblxuXG4vL2NyZWF0b3JzXG5cbmV4cG9ydCBjb25zdCBzZXRMb2dpbkRhdGEgPSAoZGF0YTogbG9naW5EYXRhKSA9PiAoe1xuICB0eXBlOiBsb2dpbk9wZXJhdGlvbnMuU0VUX0xPR0lOX0RBVEEsXG4gIC4uLmRhdGEsXG59KVxuIl0sIm5hbWVzIjpbImxvZ2luT3BlcmF0aW9ucyIsIlNFVF9MT0dJTl9EQVRBIiwic2V0TG9naW5EYXRhIiwiZGF0YSIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/reducers/login/loginCreators.ts\n");

/***/ })

});