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

/***/ "./components/header/login_area/LoginField.tsx":
/*!*****************************************************!*\
  !*** ./components/header/login_area/LoginField.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_lyme_Documents_Projects_Blog_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lyme_Documents_Projects_Blog_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lyme_Documents_Projects_Blog_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/api */ \"./utils/api/index.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DefaultFormController(props) {\n    var errors = props.errors, control = props.control, name = props.name, dataErrorMessage = props.dataErrorMessage, required = props.required;\n    console.log(errors);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"input-field\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_6__.Controller, {\n            name: name,\n            control: control,\n            rules: {\n                required: props.required ? \"\\u041F\\u043E\\u043B\\u0435 \\u0434\\u043E\\u043B\\u0436\\u043D\\u043E \\u0431\\u044B\\u0442\\u044C \\u0437\\u0430\\u043F\\u043E\\u043B\\u043D\\u0435\\u043D\\u043D\\u044B\\u043C\" : false,\n                minLength: {\n                    value: 6,\n                    message: \"\\u041C\\u0438\\u043D\\u0438\\u043C\\u0430\\u043B\\u044C\\u043D\\u0430\\u044F \\u0434\\u043B\\u0438\\u043D\\u0430 \\u043F\\u043E\\u043B\\u044F - 6 \\u0441\\u0438\\u043C\\u0432\\u043E\\u043B\\u0430\"\n                },\n                maxLength: {\n                    value: 20,\n                    message: \"\\u041C\\u0430\\u043A\\u0441\\u0438\\u043C\\u0430\\u043B\\u044C\\u043D\\u0430\\u044F \\u0434\\u043B\\u0438\\u043D\\u0430 \\u043F\\u043E\\u043B\\u044F - 20 \\u0441\\u0438\\u043C\\u0432\\u043E\\u043B\\u043E\\u0432\"\n                }\n            },\n            render: function(param) {\n                var field = param.field;\n                var ref;\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, _objectSpread({}, field, {\n                    error: dataErrorMessage || Boolean(errors === null || errors === void 0 ? void 0 : errors[name]),\n                    label: name,\n                    helperText: dataErrorMessage || (errors === null || errors === void 0 ? void 0 : (ref = errors[name]) === null || ref === void 0 ? void 0 : ref.message),\n                    fullWidth: true\n                }), void 0, false, void 0, void 0);\n            }\n        }, void 0, false, {\n            fileName: \"/home/lyme/Documents/Projects/Blog/frontend/components/header/login_area/LoginField.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/lyme/Documents/Projects/Blog/frontend/components/header/login_area/LoginField.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = DefaultFormController;\nfunction LoginField(props) {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    var ref5 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)(), register = ref5.register, reset = ref5.reset, control = ref5.control, _formState = ref5.formState, errors = _formState.errors, isSubmitting = _formState.isSubmitting, externalHandleSubmit = ref5.handleSubmit;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), dataErrorMessage = ref1[0], setDataErrorMessage = ref1[1];\n    var reduxFilling = function(res) {\n        console.log(res);\n    // dispatch(setLoginData(res))\n    };\n    var localHandleSubmit = function() {\n        var _ref = _asyncToGenerator(_home_lyme_Documents_Projects_Blog_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(fieldsData) {\n            var data, res, ref, ref2, ref3, ref4;\n            return _home_lyme_Documents_Projects_Blog_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        reset({\n                            username: \"\",\n                            password: \"\",\n                            email: \"\"\n                        });\n                        data = {\n                            username: fieldsData.username,\n                            password: fieldsData.password\n                        };\n                        if (fieldsData.email) data.email = fieldsData.email;\n                        _ctx.next = 6;\n                        return props.type == \"registration\" ? _utils_api__WEBPACK_IMPORTED_MODULE_5__.UserAPI.registration(data) : _utils_api__WEBPACK_IMPORTED_MODULE_5__.UserAPI.login(data);\n                    case 6:\n                        res = _ctx.sent;\n                        (0,nookies__WEBPACK_IMPORTED_MODULE_2__.setCookie)(null, \"token\", res.access_token, {\n                            maxAge: 30 * 24 * 60 * 60,\n                            path: \"/\"\n                        });\n                        setDataErrorMessage(\"\");\n                        if (props.type == \"registration\") props.changeTabTo(\"login\");\n                        if (props.type == \"login\") props.modalClose();\n                        reduxFilling(res);\n                        _ctx.next = 19;\n                        break;\n                    case 14:\n                        _ctx.prev = 14;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        ;\n                        console.warn(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u043F\\u0440\\u0438 \\u0430\\u0432\\u0442\\u043E\\u0440\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438\", (ref = _ctx.t0.response) === null || ref === void 0 ? void 0 : (ref2 = ref.data) === null || ref2 === void 0 ? void 0 : ref2.message);\n                        setDataErrorMessage(((ref3 = _ctx.t0.response) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.data) === null || ref4 === void 0 ? void 0 : ref4.message) || \"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u043F\\u0440\\u0438 \\u0430\\u0432\\u0442\\u043E\\u0440\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438\");\n                    case 19:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    14\n                ]\n            ]);\n        }));\n        return function localHandleSubmit(fieldsData) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"login-field\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n            onSubmit: externalHandleSubmit(localHandleSubmit),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(DefaultFormController, {\n                    dataErrorMessage: dataErrorMessage,\n                    errors: errors,\n                    control: control,\n                    name: \"username\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/home/lyme/Documents/Projects/Blog/frontend/components/header/login_area/LoginField.tsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(DefaultFormController, {\n                    dataErrorMessage: dataErrorMessage,\n                    errors: errors,\n                    control: control,\n                    name: \"password\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/home/lyme/Documents/Projects/Blog/frontend/components/header/login_area/LoginField.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, this),\n                props.type == \"registration\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(DefaultFormController, {\n                    dataErrorMessage: dataErrorMessage,\n                    errors: errors,\n                    control: control,\n                    name: \"email\",\n                    required: false\n                }, void 0, false, {\n                    fileName: \"/home/lyme/Documents/Projects/Blog/frontend/components/header/login_area/LoginField.tsx\",\n                    lineNumber: 118,\n                    columnNumber: 11\n                }, this) : \"\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                    disabled: isSubmitting,\n                    type: \"submit\",\n                    variant: \"outlined\",\n                    children: \"\\u041E\\u0442\\u043F\\u0440\\u0430\\u0432\\u0438\\u0442\\u044C\"\n                }, void 0, false, {\n                    fileName: \"/home/lyme/Documents/Projects/Blog/frontend/components/header/login_area/LoginField.tsx\",\n                    lineNumber: 129,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/lyme/Documents/Projects/Blog/frontend/components/header/login_area/LoginField.tsx\",\n            lineNumber: 102,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/lyme/Documents/Projects/Blog/frontend/components/header/login_area/LoginField.tsx\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginField, \"r/kvaGVNtpM+YMlZEI9xsu6tRjA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm\n    ];\n});\n_c1 = LoginField;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginField);\nvar _c, _c1;\n$RefreshReg$(_c, \"DefaultFormController\");\n$RefreshReg$(_c1, \"LoginField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci9sb2dpbl9hcmVhL0xvZ2luRmllbGQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDZDtBQUNJO0FBQ2M7QUFDWjtBQUVHOztBQUk1QyxTQUFTUyxxQkFBcUIsQ0FBQ0MsS0FBVSxFQUFFO0lBQ3pDLElBQVFDLE1BQU0sR0FBZ0RELEtBQUssQ0FBM0RDLE1BQU0sRUFBRUMsT0FBTyxHQUF1Q0YsS0FBSyxDQUFuREUsT0FBTyxFQUFFQyxJQUFJLEdBQWlDSCxLQUFLLENBQTFDRyxJQUFJLEVBQUVDLGdCQUFnQixHQUFlSixLQUFLLENBQXBDSSxnQkFBZ0IsRUFBRUMsUUFBUSxHQUFLTCxLQUFLLENBQWxCSyxRQUFRO0lBRXpEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sTUFBTSxDQUFDO0lBRW5CLHFCQUNFLDhEQUFDTyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxhQUFhO2tCQUMxQiw0RUFBQ2QsdURBQVU7WUFDVFEsSUFBSSxFQUFFQSxJQUFJO1lBQ1ZELE9BQU8sRUFBRUEsT0FBTztZQUNoQlEsS0FBSyxFQUFFO2dCQUNMTCxRQUFRLEVBQUVMLEtBQUssQ0FBQ0ssUUFBUSxHQUFHLDJKQUE4QixHQUE0QixLQUFLO2dCQUNqRU0sU0FBaEIsRUFBRTtvQkFDVEMsS0FBSyxFQUFFLENBQUM7b0JBQ1JDLE9BQU8sRUFBRSwyS0FBb0M7aUJBQ25CO2dCQUM1QkMsU0FBUyxFQUFFO29CQUNURixLQUFLLEVBQUUsRUFBRTtvQkFDVEMsT0FBTyxFQUFFLHdMQUF1QztpQkFDcEI7YUFDL0I7WUFDREUsTUFBTSxFQUFFO29CQUFHQyxLQUFLLFNBQUxBLEtBQUs7b0JBS29CZixHQUFjOzhCQUpoRCxxRUFBQ1Ysb0RBQVMsb0JBQ0p5QixLQUFLO29CQUNUQyxLQUFLLEVBQUViLGdCQUFnQixJQUFJYyxPQUFP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O29CQUNiRSxRQUFRLEVBQUUsS0FBSzs7Ozs7d0JBQ2YsR0FFRixFQUFFOzhCQUdKLDhEQUFDZixpREFBTTtvQkFBQzhELFFBQVEsRUFBRXpCLFlBQVk7b0JBQUVhLElBQUksRUFBQyxRQUFRO29CQUFDYSxPQUFPLEVBQUMsVUFBVTs4QkFBQyx3REFFakU7Ozs7O3dCQUFTOzs7Ozs7Z0JBQ0o7Ozs7O1lBQ0gsQ0FDUDtDQUNGO0dBekZRL0IsVUFBVTs7UUFDQXpCLG9EQUFXO1FBT3hCRCxvREFBTzs7O0FBUkowQixNQUFBQSxVQUFVO0FBMkZuQiwrREFBZUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci9sb2dpbl9hcmVhL0xvZ2luRmllbGQudHN4PzlkNDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBUZXh0RmllbGQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiXG5pbXBvcnQgeyBzZXRDb29raWUgfSBmcm9tIFwibm9va2llc1wiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgQ29udHJvbGxlciwgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIlxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IHsgc2V0TG9naW5EYXRhIH0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL2xvZ2luL2xvZ2luQ3JlYXRvcnNcIlxuaW1wb3J0IHsgVXNlckFQSSB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9hcGlcIlxuaW1wb3J0IHsgVEF1dGhSZXNEYXRhIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2FwaS90eXBlc1wiXG5cblxuZnVuY3Rpb24gRGVmYXVsdEZvcm1Db250cm9sbGVyKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgeyBlcnJvcnMsIGNvbnRyb2wsIG5hbWUsIGRhdGFFcnJvck1lc3NhZ2UsIHJlcXVpcmVkIH0gPSBwcm9wc1xuXG4gIGNvbnNvbGUubG9nKGVycm9ycylcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgcnVsZXM9e3tcbiAgICAgICAgICByZXF1aXJlZDogcHJvcHMucmVxdWlyZWQgPyBcItCf0L7Qu9C1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQt9Cw0L/QvtC70L3QtdC90L3Ri9C8XCIgOiBmYWxzZSxcbiAgICAgICAgICBtaW5MZW5ndGg6IHtcbiAgICAgICAgICAgIHZhbHVlOiA2LFxuICAgICAgICAgICAgbWVzc2FnZTogXCLQnNC40L3QuNC80LDQu9GM0L3QsNGPINC00LvQuNC90LAg0L/QvtC70Y8gLSA2INGB0LjQvNCy0L7Qu9CwXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtYXhMZW5ndGg6IHtcbiAgICAgICAgICAgIHZhbHVlOiAyMCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwi0JzQsNC60YHQuNC80LDQu9GM0L3QsNGPINC00LvQuNC90LAg0L/QvtC70Y8gLSAyMCDRgdC40LzQstC+0LvQvtCyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgZXJyb3I9e2RhdGFFcnJvck1lc3NhZ2UgfHwgQm9vbGVhbihlcnJvcnM/LltuYW1lXSl9XG4gICAgICAgICAgICBsYWJlbD17bmFtZX1cbiAgICAgICAgICAgIGhlbHBlclRleHQ9e2RhdGFFcnJvck1lc3NhZ2UgfHwgZXJyb3JzPy5bbmFtZV0/Lm1lc3NhZ2V9XG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBMb2dpbkZpZWxkKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gIGNvbnN0IHtcbiAgICByZWdpc3RlcixcbiAgICByZXNldCxcbiAgICBjb250cm9sLFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMsIGlzU3VibWl0dGluZyB9LFxuICAgIGhhbmRsZVN1Ym1pdDogZXh0ZXJuYWxIYW5kbGVTdWJtaXQsXG4gIH0gPSB1c2VGb3JtKClcblxuICBjb25zdCBbZGF0YUVycm9yTWVzc2FnZSwgc2V0RGF0YUVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCByZWR1eEZpbGxpbmcgPSAocmVzOiBUQXV0aFJlc0RhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIFxuICAgIC8vIGRpc3BhdGNoKHNldExvZ2luRGF0YShyZXMpKVxuICB9XG5cbiAgY29uc3QgbG9jYWxIYW5kbGVTdWJtaXQgPSBhc3luYyAoZmllbGRzRGF0YSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXNldCh7XG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgICAgZW1haWw6IFwiXCJcbiAgICAgIH0pXG4gICAgICBcbiAgICAgIGxldCBkYXRhOiBhbnkgPSB7XG4gICAgICAgIHVzZXJuYW1lOiBmaWVsZHNEYXRhLnVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZDogZmllbGRzRGF0YS5wYXNzd29yZFxuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoZmllbGRzRGF0YS5lbWFpbCkgZGF0YS5lbWFpbCA9IGZpZWxkc0RhdGEuZW1haWxcbiAgICAgIFxuICAgICAgY29uc3QgcmVzOiBUQXV0aFJlc0RhdGEgPSBhd2FpdChcbiAgICAgICAgcHJvcHMudHlwZSA9PSBcInJlZ2lzdHJhdGlvblwiXG4gICAgICAgICAgPyBVc2VyQVBJLnJlZ2lzdHJhdGlvbihkYXRhKVxuICAgICAgICAgIDogVXNlckFQSS5sb2dpbihkYXRhKVxuICAgICAgKVxuXG4gICAgICBzZXRDb29raWUobnVsbCwgJ3Rva2VuJywgcmVzLmFjY2Vzc190b2tlbiwge1xuICAgICAgICBtYXhBZ2U6IDMwKiAyNCAqIDYwICogNjAsXG4gICAgICAgIHBhdGg6ICcvJ1xuICAgICAgfSlcbiAgICAgIHNldERhdGFFcnJvck1lc3NhZ2UoJycpXG4gICAgICBpZiAocHJvcHMudHlwZSA9PSBcInJlZ2lzdHJhdGlvblwiKSBwcm9wcy5jaGFuZ2VUYWJUbyhcImxvZ2luXCIpXG4gICAgICBpZiAocHJvcHMudHlwZSA9PSBcImxvZ2luXCIpIHByb3BzLm1vZGFsQ2xvc2UoKVxuICAgICAgXG4gICAgICByZWR1eEZpbGxpbmcocmVzKVxuICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCLQntGI0LjQsdC60LAg0L/RgNC4INCw0LLRgtC+0YDQuNC30LDRhtC40LhcIiwgZXJyLnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlKVxuICAgICAgc2V0RGF0YUVycm9yTWVzc2FnZShlcnIucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UgfHwgXCLQntGI0LjQsdC60LAg0L/RgNC4INCw0LLRgtC+0YDQuNC30LDRhtC40LhcIilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZmllbGRcIj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtleHRlcm5hbEhhbmRsZVN1Ym1pdChsb2NhbEhhbmRsZVN1Ym1pdCl9PlxuICAgICAgICA8RGVmYXVsdEZvcm1Db250cm9sbGVyXG4gICAgICAgICAgZGF0YUVycm9yTWVzc2FnZT17ZGF0YUVycm9yTWVzc2FnZX1cbiAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgIG5hbWU9e1widXNlcm5hbWVcIn1cbiAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgLz5cbiAgICAgICAgPERlZmF1bHRGb3JtQ29udHJvbGxlclxuICAgICAgICAgIGRhdGFFcnJvck1lc3NhZ2U9e2RhdGFFcnJvck1lc3NhZ2V9XG4gICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICBuYW1lPXtcInBhc3N3b3JkXCJ9XG4gICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgIC8+XG4gICAgICAgIHtwcm9wcy50eXBlID09IFwicmVnaXN0cmF0aW9uXCIgPyAoXG4gICAgICAgICAgPERlZmF1bHRGb3JtQ29udHJvbGxlclxuICAgICAgICAgICAgZGF0YUVycm9yTWVzc2FnZT17ZGF0YUVycm9yTWVzc2FnZX1cbiAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgIG5hbWU9e1wiZW1haWxcIn1cbiAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIFwiXCJcbiAgICAgICAgKX1cblxuICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9IHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwib3V0bGluZWRcIj5cbiAgICAgICAgICDQntGC0L/RgNCw0LLQuNGC0YxcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5GaWVsZCJdLCJuYW1lcyI6WyJCdXR0b24iLCJUZXh0RmllbGQiLCJzZXRDb29raWUiLCJSZWFjdCIsInVzZVN0YXRlIiwiQ29udHJvbGxlciIsInVzZUZvcm0iLCJ1c2VEaXNwYXRjaCIsIlVzZXJBUEkiLCJEZWZhdWx0Rm9ybUNvbnRyb2xsZXIiLCJwcm9wcyIsImVycm9ycyIsImNvbnRyb2wiLCJuYW1lIiwiZGF0YUVycm9yTWVzc2FnZSIsInJlcXVpcmVkIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInJ1bGVzIiwibWluTGVuZ3RoIiwidmFsdWUiLCJtZXNzYWdlIiwibWF4TGVuZ3RoIiwicmVuZGVyIiwiZmllbGQiLCJlcnJvciIsIkJvb2xlYW4iLCJsYWJlbCIsImhlbHBlclRleHQiLCJmdWxsV2lkdGgiLCJMb2dpbkZpZWxkIiwiZGlzcGF0Y2giLCJyZWdpc3RlciIsInJlc2V0IiwiZm9ybVN0YXRlIiwiaXNTdWJtaXR0aW5nIiwiaGFuZGxlU3VibWl0IiwiZXh0ZXJuYWxIYW5kbGVTdWJtaXQiLCJzZXREYXRhRXJyb3JNZXNzYWdlIiwicmVkdXhGaWxsaW5nIiwicmVzIiwibG9jYWxIYW5kbGVTdWJtaXQiLCJmaWVsZHNEYXRhIiwiZGF0YSIsImVyciIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJlbWFpbCIsInR5cGUiLCJyZWdpc3RyYXRpb24iLCJsb2dpbiIsImFjY2Vzc190b2tlbiIsIm1heEFnZSIsInBhdGgiLCJjaGFuZ2VUYWJUbyIsIm1vZGFsQ2xvc2UiLCJ3YXJuIiwicmVzcG9uc2UiLCJmb3JtIiwib25TdWJtaXQiLCJkaXNhYmxlZCIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header/login_area/LoginField.tsx\n");

/***/ })

});