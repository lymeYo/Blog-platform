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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_lyme_Documents_Projects_Blog_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lyme_Documents_Projects_Blog_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lyme_Documents_Projects_Blog_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/api */ \"./utils/api/index.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DefaultFormController(props) {\n    var errors = props.errors, control = props.control, name = props.name, dataErrorMessage = props.dataErrorMessage, required = props.required;\n    console.log(errors);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"input-field\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_6__.Controller, {\n            name: name,\n            control: control,\n            rules: {\n                required: props.required ? \"\\u041F\\u043E\\u043B\\u0435 \\u0434\\u043E\\u043B\\u0436\\u043D\\u043E \\u0431\\u044B\\u0442\\u044C \\u0437\\u0430\\u043F\\u043E\\u043B\\u043D\\u0435\\u043D\\u043D\\u044B\\u043C\" : false,\n                minLength: {\n                    value: 6,\n                    message: \"\\u041C\\u0438\\u043D\\u0438\\u043C\\u0430\\u043B\\u044C\\u043D\\u0430\\u044F \\u0434\\u043B\\u0438\\u043D\\u0430 \\u043F\\u043E\\u043B\\u044F - 6 \\u0441\\u0438\\u043C\\u0432\\u043E\\u043B\\u0430\"\n                },\n                maxLength: {\n                    value: 20,\n                    message: \"\\u041C\\u0430\\u043A\\u0441\\u0438\\u043C\\u0430\\u043B\\u044C\\u043D\\u0430\\u044F \\u0434\\u043B\\u0438\\u043D\\u0430 \\u043F\\u043E\\u043B\\u044F - 20 \\u0441\\u0438\\u043C\\u0432\\u043E\\u043B\\u043E\\u0432\"\n                }\n            },\n            render: function(param) {\n                var field = param.field;\n                var ref;\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, _objectSpread({}, field, {\n                    error: dataErrorMessage || Boolean(errors === null || errors === void 0 ? void 0 : errors[name]),\n                    label: name,\n                    helperText: dataErrorMessage || (errors === null || errors === void 0 ? void 0 : (ref = errors[name]) === null || ref === void 0 ? void 0 : ref.message),\n                    fullWidth: true\n                }), void 0, false, void 0, void 0);\n            }\n        }, void 0, false, {\n            fileName: \"/home/lyme/Documents/Projects/Blog/frontend/components/header/login_area/LoginField.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/lyme/Documents/Projects/Blog/frontend/components/header/login_area/LoginField.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = DefaultFormController;\nfunction LoginField(props) {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    var ref5 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)(), register = ref5.register, reset = ref5.reset, control = ref5.control, _formState = ref5.formState, errors = _formState.errors, isSubmitting = _formState.isSubmitting, externalHandleSubmit = ref5.handleSubmit;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), dataErrorMessage = ref1[0], setDataErrorMessage = ref1[1];\n    var reduxFilling = function(res) {\n    // dispatch(setLoginData(res))\n    };\n    var localHandleSubmit = function() {\n        var _ref = _asyncToGenerator(_home_lyme_Documents_Projects_Blog_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(fieldsData) {\n            var data, res, ref, ref2, ref3, ref4;\n            return _home_lyme_Documents_Projects_Blog_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        reset({\n                            username: \"\",\n                            password: \"\",\n                            email: \"\"\n                        });\n                        data = {\n                            username: fieldsData.username,\n                            password: fieldsData.password\n                        };\n                        if (fieldsData.email) data.email = fieldsData.email;\n                        _ctx.next = 6;\n                        return props.type == \"registration\" ? _utils_api__WEBPACK_IMPORTED_MODULE_5__.UserAPI.registration(data) : _utils_api__WEBPACK_IMPORTED_MODULE_5__.UserAPI.login(data);\n                    case 6:\n                        res = _ctx.sent;\n                        (0,nookies__WEBPACK_IMPORTED_MODULE_2__.setCookie)(null, \"token\", res.access_token, {\n                            maxAge: 30 * 24 * 60 * 60,\n                            path: \"/\"\n                        });\n                        setDataErrorMessage(\"\");\n                        if (props.type == \"registration\") props.changeTabTo(\"login\");\n                        if (props.type == \"login\") props.modalClose();\n                        reduxFilling(res);\n                        _ctx.next = 19;\n                        break;\n                    case 14:\n                        _ctx.prev = 14;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        ;\n                        console.warn(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u043F\\u0440\\u0438 \\u0430\\u0432\\u0442\\u043E\\u0440\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438\", (ref = _ctx.t0.response) === null || ref === void 0 ? void 0 : (ref2 = ref.data) === null || ref2 === void 0 ? void 0 : ref2.message);\n                        setDataErrorMessage(((ref3 = _ctx.t0.response) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.data) === null || ref4 === void 0 ? void 0 : ref4.message) || \"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u043F\\u0440\\u0438 \\u0430\\u0432\\u0442\\u043E\\u0440\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438\");\n                    case 19:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    14\n                ]\n            ]);\n        }));\n        return function localHandleSubmit(fieldsData) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"login-field\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n            onSubmit: externalHandleSubmit(localHandleSubmit),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(DefaultFormController, {\n                    dataErrorMessage: dataErrorMessage,\n                    errors: errors,\n                    control: control,\n                    name: \"username\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/home/lyme/Documents/Projects/Blog/frontend/components/header/login_area/LoginField.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(DefaultFormController, {\n                    dataErrorMessage: dataErrorMessage,\n                    errors: errors,\n                    control: control,\n                    name: \"password\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/home/lyme/Documents/Projects/Blog/frontend/components/header/login_area/LoginField.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, this),\n                props.type == \"registration\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(DefaultFormController, {\n                    dataErrorMessage: dataErrorMessage,\n                    errors: errors,\n                    control: control,\n                    name: \"email\",\n                    required: false\n                }, void 0, false, {\n                    fileName: \"/home/lyme/Documents/Projects/Blog/frontend/components/header/login_area/LoginField.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 11\n                }, this) : \"\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                    disabled: isSubmitting,\n                    type: \"submit\",\n                    variant: \"outlined\",\n                    children: \"\\u041E\\u0442\\u043F\\u0440\\u0430\\u0432\\u0438\\u0442\\u044C\"\n                }, void 0, false, {\n                    fileName: \"/home/lyme/Documents/Projects/Blog/frontend/components/header/login_area/LoginField.tsx\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/lyme/Documents/Projects/Blog/frontend/components/header/login_area/LoginField.tsx\",\n            lineNumber: 100,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/lyme/Documents/Projects/Blog/frontend/components/header/login_area/LoginField.tsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginField, \"r/kvaGVNtpM+YMlZEI9xsu6tRjA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm\n    ];\n});\n_c1 = LoginField;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginField);\nvar _c, _c1;\n$RefreshReg$(_c, \"DefaultFormController\");\n$RefreshReg$(_c1, \"LoginField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci9sb2dpbl9hcmVhL0xvZ2luRmllbGQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDZDtBQUNJO0FBQ2M7QUFDWjtBQUVHOztBQUk1QyxTQUFTUyxxQkFBcUIsQ0FBQ0MsS0FBVSxFQUFFO0lBQ3pDLElBQVFDLE1BQU0sR0FBZ0RELEtBQUssQ0FBM0RDLE1BQU0sRUFBRUMsT0FBTyxHQUF1Q0YsS0FBSyxDQUFuREUsT0FBTyxFQUFFQyxJQUFJLEdBQWlDSCxLQUFLLENBQTFDRyxJQUFJLEVBQUVDLGdCQUFnQixHQUFlSixLQUFLLENBQXBDSSxnQkFBZ0IsRUFBRUMsUUFBUSxHQUFLTCxLQUFLLENBQWxCSyxRQUFRO0lBRXpEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sTUFBTSxDQUFDO0lBRW5CLHFCQUNFLDhEQUFDTyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxhQUFhO2tCQUMxQiw0RUFBQ2QsdURBQVU7WUFDVFEsSUFBSSxFQUFFQSxJQUFJO1lBQ1ZELE9BQU8sRUFBRUEsT0FBTztZQUNoQlEsS0FBSyxFQUFFO2dCQUNMTCxRQUFRLEVBQUVMLEtBQUssQ0FBQ0ssUUFBUSxHQUFHLDJKQUE4QixHQUE0QixLQUFLO2dCQUNqRU0sU0FBaEIsRUFBRTtvQkFDVEMsS0FBSyxFQUFFLENBQUM7b0JBQ1JDLE9BQU8sRUFBRSwyS0FBb0M7aUJBQ25CO2dCQUM1QkMsU0FBUyxFQUFFO29CQUNURixLQUFLLEVBQUUsRUFBRTtvQkFDVEMsT0FBTyxFQUFFLHdMQUF1QztpQkFDcEI7YUFDL0I7WUFDREUsTUFBTSxFQUFFO29CQUFHQyxLQUFLLFNBQUxBLEtBQUs7b0JBS29CZixHQUFjOzhCQUpoRCxxRUFBQ1Ysb0RBQVMsb0JBQ0p5QixLQUFLO29CQUNUQyxLQUFLLEVBQUViLGdCQUFnQixJQUFJYyxPQUFP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Siw4REFBQ2YsaURBQU07b0JBQUM4RCxRQUFRLEVBQUV6QixZQUFZO29CQUFFYSxJQUFJLEVBQUMsUUFBUTtvQkFBQ2EsT0FBTyxFQUFDLFVBQVU7OEJBQUMsd0RBRWpFOzs7Ozt3QkFBUzs7Ozs7O2dCQUNKOzs7OztZQUNILENBQ1A7Q0FDRjtHQXZGUS9CLFVBQVU7O1FBQ0F6QixvREFBVztRQU94QkQsb0RBQU87OztBQVJKMEIsTUFBQUEsVUFBVTtBQXlGbkIsK0RBQWVBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvbG9naW5fYXJlYS9Mb2dpbkZpZWxkLnRzeD85ZDQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgVGV4dEZpZWxkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIlxuaW1wb3J0IHsgc2V0Q29va2llIH0gZnJvbSBcIm5vb2tpZXNcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IENvbnRyb2xsZXIsIHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCB7IHNldExvZ2luRGF0YSB9IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy9sb2dpbi9sb2dpbkNyZWF0b3JzXCJcbmltcG9ydCB7IFVzZXJBUEkgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvYXBpXCJcbmltcG9ydCB7IFRBdXRoUmVzRGF0YSB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9hcGkvdHlwZXNcIlxuXG5cbmZ1bmN0aW9uIERlZmF1bHRGb3JtQ29udHJvbGxlcihwcm9wczogYW55KSB7XG4gIGNvbnN0IHsgZXJyb3JzLCBjb250cm9sLCBuYW1lLCBkYXRhRXJyb3JNZXNzYWdlLCByZXF1aXJlZCB9ID0gcHJvcHNcblxuICBjb25zb2xlLmxvZyhlcnJvcnMpXG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgIDxDb250cm9sbGVyXG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgIHJ1bGVzPXt7XG4gICAgICAgICAgcmVxdWlyZWQ6IHByb3BzLnJlcXVpcmVkID8gXCLQn9C+0LvQtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LfQsNC/0L7Qu9C90LXQvdC90YvQvFwiIDogZmFsc2UsXG4gICAgICAgICAgbWluTGVuZ3RoOiB7XG4gICAgICAgICAgICB2YWx1ZTogNixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwi0JzQuNC90LjQvNCw0LvRjNC90LDRjyDQtNC70LjQvdCwINC/0L7Qu9GPIC0gNiDRgdC40LzQstC+0LvQsFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWF4TGVuZ3RoOiB7XG4gICAgICAgICAgICB2YWx1ZTogMjAsXG4gICAgICAgICAgICBtZXNzYWdlOiBcItCc0LDQutGB0LjQvNCw0LvRjNC90LDRjyDQtNC70LjQvdCwINC/0L7Qu9GPIC0gMjAg0YHQuNC80LLQvtC70L7QslwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgIGVycm9yPXtkYXRhRXJyb3JNZXNzYWdlIHx8IEJvb2xlYW4oZXJyb3JzPy5bbmFtZV0pfVxuICAgICAgICAgICAgbGFiZWw9e25hbWV9XG4gICAgICAgICAgICBoZWxwZXJUZXh0PXtkYXRhRXJyb3JNZXNzYWdlIHx8IGVycm9ycz8uW25hbWVdPy5tZXNzYWdlfVxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gTG9naW5GaWVsZChwcm9wczogYW55KSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICBjb25zdCB7XG4gICAgcmVnaXN0ZXIsXG4gICAgcmVzZXQsXG4gICAgY29udHJvbCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzLCBpc1N1Ym1pdHRpbmcgfSxcbiAgICBoYW5kbGVTdWJtaXQ6IGV4dGVybmFsSGFuZGxlU3VibWl0LFxuICB9ID0gdXNlRm9ybSgpXG5cbiAgY29uc3QgW2RhdGFFcnJvck1lc3NhZ2UsIHNldERhdGFFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3QgcmVkdXhGaWxsaW5nID0gKHJlczogVEF1dGhSZXNEYXRhKSA9PiB7XG4gICAgXG4gICAgLy8gZGlzcGF0Y2goc2V0TG9naW5EYXRhKHJlcykpXG4gIH1cblxuICBjb25zdCBsb2NhbEhhbmRsZVN1Ym1pdCA9IGFzeW5jIChmaWVsZHNEYXRhKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc2V0KHtcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgICBlbWFpbDogXCJcIlxuICAgICAgfSlcbiAgICAgIFxuICAgICAgbGV0IGRhdGE6IGFueSA9IHtcbiAgICAgICAgdXNlcm5hbWU6IGZpZWxkc0RhdGEudXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiBmaWVsZHNEYXRhLnBhc3N3b3JkXG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChmaWVsZHNEYXRhLmVtYWlsKSBkYXRhLmVtYWlsID0gZmllbGRzRGF0YS5lbWFpbFxuICAgICAgXG4gICAgICBjb25zdCByZXM6IFRBdXRoUmVzRGF0YSA9IGF3YWl0KFxuICAgICAgICBwcm9wcy50eXBlID09IFwicmVnaXN0cmF0aW9uXCJcbiAgICAgICAgICA/IFVzZXJBUEkucmVnaXN0cmF0aW9uKGRhdGEpXG4gICAgICAgICAgOiBVc2VyQVBJLmxvZ2luKGRhdGEpXG4gICAgICApXG5cbiAgICAgIHNldENvb2tpZShudWxsLCAndG9rZW4nLCByZXMuYWNjZXNzX3Rva2VuLCB7XG4gICAgICAgIG1heEFnZTogMzAqIDI0ICogNjAgKiA2MCxcbiAgICAgICAgcGF0aDogJy8nXG4gICAgICB9KVxuICAgICAgc2V0RGF0YUVycm9yTWVzc2FnZSgnJylcbiAgICAgIGlmIChwcm9wcy50eXBlID09IFwicmVnaXN0cmF0aW9uXCIpIHByb3BzLmNoYW5nZVRhYlRvKFwibG9naW5cIilcbiAgICAgIGlmIChwcm9wcy50eXBlID09IFwibG9naW5cIikgcHJvcHMubW9kYWxDbG9zZSgpXG4gICAgICByZWR1eEZpbGxpbmcocmVzKVxuICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCLQntGI0LjQsdC60LAg0L/RgNC4INCw0LLRgtC+0YDQuNC30LDRhtC40LhcIiwgZXJyLnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlKVxuICAgICAgc2V0RGF0YUVycm9yTWVzc2FnZShlcnIucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UgfHwgXCLQntGI0LjQsdC60LAg0L/RgNC4INCw0LLRgtC+0YDQuNC30LDRhtC40LhcIilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZmllbGRcIj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtleHRlcm5hbEhhbmRsZVN1Ym1pdChsb2NhbEhhbmRsZVN1Ym1pdCl9PlxuICAgICAgICA8RGVmYXVsdEZvcm1Db250cm9sbGVyXG4gICAgICAgICAgZGF0YUVycm9yTWVzc2FnZT17ZGF0YUVycm9yTWVzc2FnZX1cbiAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgIG5hbWU9e1widXNlcm5hbWVcIn1cbiAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgLz5cbiAgICAgICAgPERlZmF1bHRGb3JtQ29udHJvbGxlclxuICAgICAgICAgIGRhdGFFcnJvck1lc3NhZ2U9e2RhdGFFcnJvck1lc3NhZ2V9XG4gICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICBuYW1lPXtcInBhc3N3b3JkXCJ9XG4gICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgIC8+XG4gICAgICAgIHtwcm9wcy50eXBlID09IFwicmVnaXN0cmF0aW9uXCIgPyAoXG4gICAgICAgICAgPERlZmF1bHRGb3JtQ29udHJvbGxlclxuICAgICAgICAgICAgZGF0YUVycm9yTWVzc2FnZT17ZGF0YUVycm9yTWVzc2FnZX1cbiAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgIG5hbWU9e1wiZW1haWxcIn1cbiAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIFwiXCJcbiAgICAgICAgKX1cblxuICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9IHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwib3V0bGluZWRcIj5cbiAgICAgICAgICDQntGC0L/RgNCw0LLQuNGC0YxcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5GaWVsZCJdLCJuYW1lcyI6WyJCdXR0b24iLCJUZXh0RmllbGQiLCJzZXRDb29raWUiLCJSZWFjdCIsInVzZVN0YXRlIiwiQ29udHJvbGxlciIsInVzZUZvcm0iLCJ1c2VEaXNwYXRjaCIsIlVzZXJBUEkiLCJEZWZhdWx0Rm9ybUNvbnRyb2xsZXIiLCJwcm9wcyIsImVycm9ycyIsImNvbnRyb2wiLCJuYW1lIiwiZGF0YUVycm9yTWVzc2FnZSIsInJlcXVpcmVkIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInJ1bGVzIiwibWluTGVuZ3RoIiwidmFsdWUiLCJtZXNzYWdlIiwibWF4TGVuZ3RoIiwicmVuZGVyIiwiZmllbGQiLCJlcnJvciIsIkJvb2xlYW4iLCJsYWJlbCIsImhlbHBlclRleHQiLCJmdWxsV2lkdGgiLCJMb2dpbkZpZWxkIiwiZGlzcGF0Y2giLCJyZWdpc3RlciIsInJlc2V0IiwiZm9ybVN0YXRlIiwiaXNTdWJtaXR0aW5nIiwiaGFuZGxlU3VibWl0IiwiZXh0ZXJuYWxIYW5kbGVTdWJtaXQiLCJzZXREYXRhRXJyb3JNZXNzYWdlIiwicmVkdXhGaWxsaW5nIiwicmVzIiwibG9jYWxIYW5kbGVTdWJtaXQiLCJmaWVsZHNEYXRhIiwiZGF0YSIsImVyciIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJlbWFpbCIsInR5cGUiLCJyZWdpc3RyYXRpb24iLCJsb2dpbiIsImFjY2Vzc190b2tlbiIsIm1heEFnZSIsInBhdGgiLCJjaGFuZ2VUYWJUbyIsIm1vZGFsQ2xvc2UiLCJ3YXJuIiwicmVzcG9uc2UiLCJmb3JtIiwib25TdWJtaXQiLCJkaXNhYmxlZCIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header/login_area/LoginField.tsx\n");

/***/ })

});