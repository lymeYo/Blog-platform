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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ \"./node_modules/immer/dist/immer.esm.mjs\");\n/* harmony import */ var _loginCreators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginCreators */ \"./redux/reducers/login/loginCreators.ts\");\n\n\nvar initialState = {\n    isAuth: false,\n    name: \"\",\n    avatarSrc: \"\",\n    id: null,\n    email: null\n};\nvar loginReducer = (0,immer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(draft, action) {\n    switch(action.type){\n        case _loginCreators__WEBPACK_IMPORTED_MODULE_0__.loginOperations.SET_LOGIN_DATA:\n            console.log(action);\n            draft.isAuth = true;\n            draft.name = action.username;\n            draft.id = action.id;\n            draft.email = action.email;\n    }\n    return draft;\n}, initialState);\n/* harmony default export */ __webpack_exports__[\"default\"] = (loginReducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy9sb2dpbi9sb2dpblJlZHVjZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXNDO0FBRVc7QUFXakQsSUFBSUUsWUFBWSxHQUEwQjtJQUN4Q0MsTUFBTSxFQUFFLEtBQUs7SUFDYkMsSUFBSSxFQUFFLEVBQUU7SUFDUkMsU0FBUyxFQUFFLEVBQUU7SUFDYkMsRUFBRSxFQUFFLElBQUk7SUFDUkMsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQUdELElBQU1DLFlBQVksR0FBR1IsaURBQU8sQ0FBQyxTQUFDUyxLQUFtQyxFQUFFQyxNQUF1QixFQUFLO0lBQzdGLE9BQVFBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNqQixLQUFLViwwRUFBOEI7WUFDakNZLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixNQUFNLENBQUMsQ0FBQztZQUVwQkQsS0FBSyxDQUFDTixNQUFNLEdBQUcsSUFBSTtZQUNuQk0sS0FBSyxDQUFDTCxJQUFJLEdBQUdNLE1BQU0sQ0FBQ0ssUUFBUTtZQUM1Qk4sS0FBSyxDQUFDSCxFQUFFLEdBQUdJLE1BQU0sQ0FBQ0osRUFBRTtZQUNwQkcsS0FBSyxDQUFDRixLQUFLLEdBQUdHLE1BQU0sQ0FBQ0gsS0FBSztLQUM3QjtJQUVELE9BQU9FLEtBQUs7Q0FDYixFQUFFUCxZQUFZLENBQUM7QUFHaEIsK0RBQWVNLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvbG9naW4vbG9naW5SZWR1Y2VyLnRzP2VlZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UsIHsgRHJhZnQgfSBmcm9tICdpbW1lcidcbmltcG9ydCB7IGFjdGlvbkludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbnN0YW50cydcbmltcG9ydCB7IGxvZ2luT3BlcmF0aW9ucyB9IGZyb20gJy4vbG9naW5DcmVhdG9ycydcblxuXG5pbnRlcmZhY2UgaW5pdGlhbFN0YXRlSW50ZXJmYWNlIHtcbiAgaXNBdXRoOiBib29sZWFuXG4gIG5hbWU6IHN0cmluZ1xuICBhdmF0YXJTcmM6IHN0cmluZ1xuICBpZDogbnVtYmVyIHwgbnVsbFxuICBlbWFpbDogc3RyaW5nIHwgbnVsbFxufVxuXG5sZXQgaW5pdGlhbFN0YXRlOiBpbml0aWFsU3RhdGVJbnRlcmZhY2UgPSB7XG4gIGlzQXV0aDogZmFsc2UsXG4gIG5hbWU6ICcnLFxuICBhdmF0YXJTcmM6ICcnLFxuICBpZDogbnVsbCxcbiAgZW1haWw6IG51bGxcbn1cblxuXG5jb25zdCBsb2dpblJlZHVjZXIgPSBwcm9kdWNlKChkcmFmdDogRHJhZnQ8aW5pdGlhbFN0YXRlSW50ZXJmYWNlPiwgYWN0aW9uOiBhY3Rpb25JbnRlcmZhY2UpID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgbG9naW5PcGVyYXRpb25zLlNFVF9MT0dJTl9EQVRBOlxuICAgICAgY29uc29sZS5sb2coYWN0aW9uKTtcbiAgICAgIFxuICAgICAgZHJhZnQuaXNBdXRoID0gdHJ1ZVxuICAgICAgZHJhZnQubmFtZSA9IGFjdGlvbi51c2VybmFtZVxuICAgICAgZHJhZnQuaWQgPSBhY3Rpb24uaWRcbiAgICAgIGRyYWZ0LmVtYWlsID0gYWN0aW9uLmVtYWlsXG4gIH1cblxuICByZXR1cm4gZHJhZnRcbn0sIGluaXRpYWxTdGF0ZSlcblxuXG5leHBvcnQgZGVmYXVsdCBsb2dpblJlZHVjZXIiXSwibmFtZXMiOlsicHJvZHVjZSIsImxvZ2luT3BlcmF0aW9ucyIsImluaXRpYWxTdGF0ZSIsImlzQXV0aCIsIm5hbWUiLCJhdmF0YXJTcmMiLCJpZCIsImVtYWlsIiwibG9naW5SZWR1Y2VyIiwiZHJhZnQiLCJhY3Rpb24iLCJ0eXBlIiwiU0VUX0xPR0lOX0RBVEEiLCJjb25zb2xlIiwibG9nIiwidXNlcm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/reducers/login/loginReducer.ts\n");

/***/ })

});