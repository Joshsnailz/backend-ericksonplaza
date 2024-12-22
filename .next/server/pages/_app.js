"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _toolpad_core_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @toolpad/core/nextjs */ \"@toolpad/core/nextjs\");\n/* harmony import */ var _toolpad_core_nextjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_toolpad_core_nextjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _toolpad_core_DashboardLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @toolpad/core/DashboardLayout */ \"@toolpad/core/DashboardLayout\");\n/* harmony import */ var _toolpad_core_DashboardLayout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_toolpad_core_DashboardLayout__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _toolpad_core_PageContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @toolpad/core/PageContainer */ \"@toolpad/core/PageContainer\");\n/* harmony import */ var _toolpad_core_PageContainer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_toolpad_core_PageContainer__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_nextjs_v14_pagesRouter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material-nextjs/v14-pagesRouter */ \"@mui/material-nextjs/v14-pagesRouter\");\n/* harmony import */ var _mui_material_nextjs_v14_pagesRouter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_nextjs_v14_pagesRouter__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Dashboard */ \"./node_modules/@mui/icons-material/esm/Dashboard.js\");\n/* harmony import */ var _mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/ShoppingCart */ \"./node_modules/@mui/icons-material/esm/ShoppingCart.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react.js\");\n/* harmony import */ var _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/LinearProgress */ \"./node_modules/@mui/material/node/LinearProgress/index.js\");\n/* harmony import */ var _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../theme */ \"./theme.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_auth_react__WEBPACK_IMPORTED_MODULE_7__]);\nnext_auth_react__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\n\n\nconst NAVIGATION = [\n    {\n        kind: \"header\",\n        title: \"Main items\"\n    },\n    {\n        segment: \"\",\n        title: \"Dashboard\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/joshsnailz/code/react/admin-ericksonplaza/pages/_app.tsx\",\n            lineNumber: 34,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        segment: \"orders\",\n        title: \"Orders\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/joshsnailz/code/react/admin-ericksonplaza/pages/_app.tsx\",\n            lineNumber: 39,\n            columnNumber: 11\n        }, undefined)\n    }\n];\nconst BRANDING = {\n    title: \"EricksonPlaza \"\n};\nconst AUTHENTICATION = {\n    signIn: next_auth_react__WEBPACK_IMPORTED_MODULE_7__.signIn,\n    signOut: next_auth_react__WEBPACK_IMPORTED_MODULE_7__.signOut\n};\nfunction RequireAuth({ children }) {\n    const { status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession)();\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_11___default()), {}, void 0, false, {\n            fileName: \"/Users/joshsnailz/code/react/admin-ericksonplaza/pages/_app.tsx\",\n            lineNumber: 56,\n            columnNumber: 12\n        }, this);\n    }\n    return children;\n}\nfunction getDefaultLayout(page) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_toolpad_core_DashboardLayout__WEBPACK_IMPORTED_MODULE_3__.DashboardLayout, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_toolpad_core_PageContainer__WEBPACK_IMPORTED_MODULE_4__.PageContainer, {\n            children: page\n        }, void 0, false, {\n            fileName: \"/Users/joshsnailz/code/react/admin-ericksonplaza/pages/_app.tsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/joshsnailz/code/react/admin-ericksonplaza/pages/_app.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\nfunction AppLayout({ children }) {\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"viewport\",\n                    content: \"initial-scale=1, width=device-width\"\n                }, void 0, false, {\n                    fileName: \"/Users/joshsnailz/code/react/admin-ericksonplaza/pages/_app.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/joshsnailz/code/react/admin-ericksonplaza/pages/_app.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_toolpad_core_nextjs__WEBPACK_IMPORTED_MODULE_2__.AppProvider, {\n                navigation: NAVIGATION,\n                branding: BRANDING,\n                session: session,\n                authentication: AUTHENTICATION,\n                theme: _theme__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/joshsnailz/code/react/admin-ericksonplaza/pages/_app.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshsnailz/code/react/admin-ericksonplaza/pages/_app.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\nfunction App(props) {\n    const { Component, pageProps: { session, ...pageProps } } = props;\n    const getLayout = Component.getLayout ?? getDefaultLayout;\n    const requireAuth = Component.requireAuth ?? true;\n    let pageContent = getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/joshsnailz/code/react/admin-ericksonplaza/pages/_app.tsx\",\n        lineNumber: 99,\n        columnNumber: 31\n    }, this));\n    if (requireAuth) {\n        pageContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RequireAuth, {\n            children: pageContent\n        }, void 0, false, {\n            fileName: \"/Users/joshsnailz/code/react/admin-ericksonplaza/pages/_app.tsx\",\n            lineNumber: 101,\n            columnNumber: 19\n        }, this);\n    }\n    pageContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppLayout, {\n        children: pageContent\n    }, void 0, false, {\n        fileName: \"/Users/joshsnailz/code/react/admin-ericksonplaza/pages/_app.tsx\",\n        lineNumber: 103,\n        columnNumber: 17\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_nextjs_v14_pagesRouter__WEBPACK_IMPORTED_MODULE_6__.AppCacheProvider, {\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_7__.SessionProvider, {\n            session: session,\n            children: pageContent\n        }, void 0, false, {\n            fileName: \"/Users/joshsnailz/code/react/admin-ericksonplaza/pages/_app.tsx\",\n            lineNumber: 107,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/joshsnailz/code/react/admin-ericksonplaza/pages/_app.tsx\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ29CO0FBQ2E7QUFDSjtBQUMvQjtBQUMyQztBQUNkO0FBQ007QUFJZTtBQUNyQjtBQUU3QjtBQVc3QixNQUFNYyxhQUF5QjtJQUM3QjtRQUNFQyxNQUFNO1FBQ05DLE9BQU87SUFDVDtJQUNBO1FBQ0VDLFNBQVM7UUFDVEQsT0FBTztRQUNQRSxvQkFBTSw4REFBQ1oscUVBQWFBOzs7OztJQUN0QjtJQUNBO1FBQ0VXLFNBQVM7UUFDVEQsT0FBTztRQUNQRSxvQkFBTSw4REFBQ1gseUVBQWdCQTs7Ozs7SUFDekI7Q0FDRDtBQUVELE1BQU1ZLFdBQVc7SUFDZkgsT0FBTztBQUNUO0FBRUEsTUFBTUksaUJBQWlCO0lBQ3JCWCxNQUFNQSxxREFBQUE7SUFDTkMsT0FBT0Esc0RBQUFBO0FBQ1Q7QUFFQSxTQUFTVyxZQUFZLEVBQUVDLFFBQVEsRUFBaUM7SUFDOUQsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR1osMkRBQVVBO0lBRTdCLElBQUlZLFdBQVcsV0FBVztRQUN4QixxQkFBTyw4REFBQ1gsc0VBQWNBOzs7OztJQUN4QjtJQUVBLE9BQU9VO0FBQ1Q7QUFFQSxTQUFTRSxpQkFBaUJDLElBQXdCO0lBQ2hELHFCQUNFLDhEQUFDdkIsMEVBQWVBO2tCQUNkLDRFQUFDQyxzRUFBYUE7c0JBQUVzQjs7Ozs7Ozs7Ozs7QUFHdEI7QUFFQSxTQUFTQyxVQUFVLEVBQUVKLFFBQVEsRUFBaUM7SUFDNUQsTUFBTSxFQUFFSyxNQUFNQyxPQUFPLEVBQUUsR0FBR2pCLDJEQUFVQTtJQUNwQyxxQkFDRSw4REFBQ1gsMkNBQWM7OzBCQUNiLDhEQUFDSSxrREFBSUE7MEJBQ0gsNEVBQUMwQjtvQkFBS0MsTUFBSztvQkFBV0MsU0FBUTs7Ozs7Ozs7Ozs7MEJBRWhDLDhEQUFDL0IsNkRBQVdBO2dCQUNWZ0MsWUFBWW5CO2dCQUNab0IsVUFBVWY7Z0JBQ1ZTLFNBQVNBO2dCQUNUTyxnQkFBZ0JmO2dCQUNoQlAsT0FBT0EsOENBQUtBOzBCQUVYUzs7Ozs7Ozs7Ozs7O0FBSVQ7QUFFZSxTQUFTYyxJQUFJQyxLQUF5QjtJQUNuRCxNQUFNLEVBQ0pDLFNBQVMsRUFDVEMsV0FBVyxFQUFFWCxPQUFPLEVBQUUsR0FBR1csV0FBVyxFQUNyQyxHQUFHRjtJQUVKLE1BQU1HLFlBQVlGLFVBQVVFLFNBQVMsSUFBSWhCO0lBQ3pDLE1BQU1pQixjQUFjSCxVQUFVRyxXQUFXLElBQUk7SUFFN0MsSUFBSUMsY0FBY0Ysd0JBQVUsOERBQUNGO1FBQVcsR0FBR0MsU0FBUzs7Ozs7O0lBQ3BELElBQUlFLGFBQWE7UUFDZkMsNEJBQWMsOERBQUNyQjtzQkFBYXFCOzs7Ozs7SUFDOUI7SUFDQUEsNEJBQWMsOERBQUNoQjtrQkFBV2dCOzs7Ozs7SUFFMUIscUJBQ0UsOERBQUNyQyxrRkFBZ0JBO1FBQUUsR0FBR2dDLEtBQUs7a0JBQ3pCLDRFQUFDN0IsNERBQWVBO1lBQUNvQixTQUFTQTtzQkFBVWM7Ozs7Ozs7Ozs7O0FBRzFDIiwic291cmNlcyI6WyIvVXNlcnMvam9zaHNuYWlsei9jb2RlL3JlYWN0L2FkbWluLWVyaWNrc29ucGxhemEvcGFnZXMvX2FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcHBQcm92aWRlciB9IGZyb20gXCJAdG9vbHBhZC9jb3JlL25leHRqc1wiO1xuaW1wb3J0IHsgRGFzaGJvYXJkTGF5b3V0IH0gZnJvbSBcIkB0b29scGFkL2NvcmUvRGFzaGJvYXJkTGF5b3V0XCI7XG5pbXBvcnQgeyBQYWdlQ29udGFpbmVyIH0gZnJvbSBcIkB0b29scGFkL2NvcmUvUGFnZUNvbnRhaW5lclwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgQXBwQ2FjaGVQcm92aWRlciB9IGZyb20gXCJAbXVpL21hdGVyaWFsLW5leHRqcy92MTQtcGFnZXNSb3V0ZXJcIjtcbmltcG9ydCBEYXNoYm9hcmRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Rhc2hib2FyZFwiO1xuaW1wb3J0IFNob3BwaW5nQ2FydEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2hvcHBpbmdDYXJ0XCI7XG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB0eXBlIHsgTmF2aWdhdGlvbiB9IGZyb20gXCJAdG9vbHBhZC9jb3JlL0FwcFByb3ZpZGVyXCI7XG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIsIHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaW5lYXJQcm9ncmVzc1wiO1xuXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3RoZW1lXCI7XG5cbmV4cG9ydCB0eXBlIE5leHRQYWdlV2l0aExheW91dDxQID0ge30sIElQID0gUD4gPSBOZXh0UGFnZTxQLCBJUD4gJiB7XG4gIGdldExheW91dD86IChwYWdlOiBSZWFjdC5SZWFjdEVsZW1lbnQpID0+IFJlYWN0LlJlYWN0Tm9kZTtcbiAgcmVxdWlyZUF1dGg/OiBib29sZWFuO1xufTtcblxudHlwZSBBcHBQcm9wc1dpdGhMYXlvdXQgPSBBcHBQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0UGFnZVdpdGhMYXlvdXQ7XG59O1xuXG5jb25zdCBOQVZJR0FUSU9OOiBOYXZpZ2F0aW9uID0gW1xuICB7XG4gICAga2luZDogXCJoZWFkZXJcIixcbiAgICB0aXRsZTogXCJNYWluIGl0ZW1zXCIsXG4gIH0sXG4gIHtcbiAgICBzZWdtZW50OiBcIlwiLFxuICAgIHRpdGxlOiBcIkRhc2hib2FyZFwiLFxuICAgIGljb246IDxEYXNoYm9hcmRJY29uIC8+LFxuICB9LFxuICB7XG4gICAgc2VnbWVudDogXCJvcmRlcnNcIixcbiAgICB0aXRsZTogXCJPcmRlcnNcIixcbiAgICBpY29uOiA8U2hvcHBpbmdDYXJ0SWNvbiAvPixcbiAgfSxcbl07XG5cbmNvbnN0IEJSQU5ESU5HID0ge1xuICB0aXRsZTogXCJFcmlja3NvblBsYXphIFwiLFxufTtcblxuY29uc3QgQVVUSEVOVElDQVRJT04gPSB7XG4gIHNpZ25JbixcbiAgc2lnbk91dCxcbn07XG5cbmZ1bmN0aW9uIFJlcXVpcmVBdXRoKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgeyBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcblxuICBpZiAoc3RhdHVzID09PSBcImxvYWRpbmdcIikge1xuICAgIHJldHVybiA8TGluZWFyUHJvZ3Jlc3MgLz47XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRMYXlvdXQocGFnZTogUmVhY3QuUmVhY3RFbGVtZW50KSB7XG4gIHJldHVybiAoXG4gICAgPERhc2hib2FyZExheW91dD5cbiAgICAgIDxQYWdlQ29udGFpbmVyPntwYWdlfTwvUGFnZUNvbnRhaW5lcj5cbiAgICA8L0Rhc2hib2FyZExheW91dD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQXBwTGF5b3V0KHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8QXBwUHJvdmlkZXJcbiAgICAgICAgbmF2aWdhdGlvbj17TkFWSUdBVElPTn1cbiAgICAgICAgYnJhbmRpbmc9e0JSQU5ESU5HfVxuICAgICAgICBzZXNzaW9uPXtzZXNzaW9ufVxuICAgICAgICBhdXRoZW50aWNhdGlvbj17QVVUSEVOVElDQVRJT059XG4gICAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9BcHBQcm92aWRlcj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAocHJvcHM6IEFwcFByb3BzV2l0aExheW91dCkge1xuICBjb25zdCB7XG4gICAgQ29tcG9uZW50LFxuICAgIHBhZ2VQcm9wczogeyBzZXNzaW9uLCAuLi5wYWdlUHJvcHMgfSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGdldExheW91dCA9IENvbXBvbmVudC5nZXRMYXlvdXQgPz8gZ2V0RGVmYXVsdExheW91dDtcbiAgY29uc3QgcmVxdWlyZUF1dGggPSBDb21wb25lbnQucmVxdWlyZUF1dGggPz8gdHJ1ZTtcblxuICBsZXQgcGFnZUNvbnRlbnQgPSBnZXRMYXlvdXQoPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPik7XG4gIGlmIChyZXF1aXJlQXV0aCkge1xuICAgIHBhZ2VDb250ZW50ID0gPFJlcXVpcmVBdXRoPntwYWdlQ29udGVudH08L1JlcXVpcmVBdXRoPjtcbiAgfVxuICBwYWdlQ29udGVudCA9IDxBcHBMYXlvdXQ+e3BhZ2VDb250ZW50fTwvQXBwTGF5b3V0PjtcblxuICByZXR1cm4gKFxuICAgIDxBcHBDYWNoZVByb3ZpZGVyIHsuLi5wcm9wc30+XG4gICAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3Nlc3Npb259PntwYWdlQ29udGVudH08L1Nlc3Npb25Qcm92aWRlcj5cbiAgICA8L0FwcENhY2hlUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBcHBQcm92aWRlciIsIkRhc2hib2FyZExheW91dCIsIlBhZ2VDb250YWluZXIiLCJIZWFkIiwiQXBwQ2FjaGVQcm92aWRlciIsIkRhc2hib2FyZEljb24iLCJTaG9wcGluZ0NhcnRJY29uIiwiU2Vzc2lvblByb3ZpZGVyIiwic2lnbkluIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJMaW5lYXJQcm9ncmVzcyIsInRoZW1lIiwiTkFWSUdBVElPTiIsImtpbmQiLCJ0aXRsZSIsInNlZ21lbnQiLCJpY29uIiwiQlJBTkRJTkciLCJBVVRIRU5USUNBVElPTiIsIlJlcXVpcmVBdXRoIiwiY2hpbGRyZW4iLCJzdGF0dXMiLCJnZXREZWZhdWx0TGF5b3V0IiwicGFnZSIsIkFwcExheW91dCIsImRhdGEiLCJzZXNzaW9uIiwiRnJhZ21lbnQiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJuYXZpZ2F0aW9uIiwiYnJhbmRpbmciLCJhdXRoZW50aWNhdGlvbiIsIkFwcCIsInByb3BzIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ2V0TGF5b3V0IiwicmVxdWlyZUF1dGgiLCJwYWdlQ29udGVudCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./theme.ts":
/*!******************!*\
  !*** ./theme.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/node/styles/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    cssVariables: {\n        colorSchemeSelector: 'data-toolpad-color-scheme'\n    },\n    colorSchemes: {\n        light: true,\n        dark: true\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aGVtZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7NkRBRXFEO0FBRW5ELE1BQU1DLFFBQVFELGlFQUFXQSxDQUFDO0lBQ3hCRSxjQUFjO1FBQ1pDLHFCQUFxQjtJQUN2QjtJQUNBQyxjQUFjO1FBQUVDLE9BQU87UUFBTUMsTUFBTTtJQUFLO0FBQzFDO0FBRUEsaUVBQWVMLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3Noc25haWx6L2NvZGUvcmVhY3QvYWRtaW4tZXJpY2tzb25wbGF6YS90aGVtZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgXCJ1c2UgY2xpZW50XCI7XG4gIGltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuXG4gIGNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xuICAgIGNzc1ZhcmlhYmxlczoge1xuICAgICAgY29sb3JTY2hlbWVTZWxlY3RvcjogJ2RhdGEtdG9vbHBhZC1jb2xvci1zY2hlbWUnLFxuICAgIH0sXG4gICAgY29sb3JTY2hlbWVzOiB7IGxpZ2h0OiB0cnVlLCBkYXJrOiB0cnVlIH0sXG4gIH0pO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuICAiXSwibmFtZXMiOlsiY3JlYXRlVGhlbWUiLCJ0aGVtZSIsImNzc1ZhcmlhYmxlcyIsImNvbG9yU2NoZW1lU2VsZWN0b3IiLCJjb2xvclNjaGVtZXMiLCJsaWdodCIsImRhcmsiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./theme.ts\n");

/***/ }),

/***/ "@mui/material-nextjs/v14-pagesRouter":
/*!*******************************************************!*\
  !*** external "@mui/material-nextjs/v14-pagesRouter" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("@mui/material-nextjs/v14-pagesRouter");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ "@mui/system/DefaultPropsProvider":
/*!***************************************************!*\
  !*** external "@mui/system/DefaultPropsProvider" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@mui/system/DefaultPropsProvider");

/***/ }),

/***/ "@mui/system/InitColorSchemeScript":
/*!****************************************************!*\
  !*** external "@mui/system/InitColorSchemeScript" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("@mui/system/InitColorSchemeScript");

/***/ }),

/***/ "@mui/system/RtlProvider":
/*!******************************************!*\
  !*** external "@mui/system/RtlProvider" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/system/RtlProvider");

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@mui/system/colorManipulator");

/***/ }),

/***/ "@mui/system/createBreakpoints":
/*!************************************************!*\
  !*** external "@mui/system/createBreakpoints" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@mui/system/createBreakpoints");

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/system/createStyled");

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/system/createTheme");

/***/ }),

/***/ "@mui/system/cssVars":
/*!**************************************!*\
  !*** external "@mui/system/cssVars" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/system/cssVars");

/***/ }),

/***/ "@mui/system/spacing":
/*!**************************************!*\
  !*** external "@mui/system/spacing" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/system/spacing");

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/system/styleFunctionSx");

/***/ }),

/***/ "@mui/system/useThemeProps":
/*!********************************************!*\
  !*** external "@mui/system/useThemeProps" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/system/useThemeProps");

/***/ }),

/***/ "@mui/utils":
/*!*****************************!*\
  !*** external "@mui/utils" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("@mui/utils");

/***/ }),

/***/ "@mui/utils/capitalize":
/*!****************************************!*\
  !*** external "@mui/utils/capitalize" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/capitalize");

/***/ }),

/***/ "@mui/utils/composeClasses":
/*!********************************************!*\
  !*** external "@mui/utils/composeClasses" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/composeClasses");

/***/ }),

/***/ "@mui/utils/createChainedFunction":
/*!***************************************************!*\
  !*** external "@mui/utils/createChainedFunction" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/createChainedFunction");

/***/ }),

/***/ "@mui/utils/debounce":
/*!**************************************!*\
  !*** external "@mui/utils/debounce" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/debounce");

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/deepmerge");

/***/ }),

/***/ "@mui/utils/deprecatedPropType":
/*!************************************************!*\
  !*** external "@mui/utils/deprecatedPropType" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/deprecatedPropType");

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/formatMuiErrorMessage");

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/generateUtilityClass");

/***/ }),

/***/ "@mui/utils/generateUtilityClasses":
/*!****************************************************!*\
  !*** external "@mui/utils/generateUtilityClasses" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/generateUtilityClasses");

/***/ }),

/***/ "@mui/utils/isMuiElement":
/*!******************************************!*\
  !*** external "@mui/utils/isMuiElement" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/isMuiElement");

/***/ }),

/***/ "@mui/utils/ownerDocument":
/*!*******************************************!*\
  !*** external "@mui/utils/ownerDocument" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/ownerDocument");

/***/ }),

/***/ "@mui/utils/ownerWindow":
/*!*****************************************!*\
  !*** external "@mui/utils/ownerWindow" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/ownerWindow");

/***/ }),

/***/ "@mui/utils/requirePropFactory":
/*!************************************************!*\
  !*** external "@mui/utils/requirePropFactory" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/requirePropFactory");

/***/ }),

/***/ "@mui/utils/setRef":
/*!************************************!*\
  !*** external "@mui/utils/setRef" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/setRef");

/***/ }),

/***/ "@mui/utils/unsupportedProp":
/*!*********************************************!*\
  !*** external "@mui/utils/unsupportedProp" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/unsupportedProp");

/***/ }),

/***/ "@mui/utils/useControlled":
/*!*******************************************!*\
  !*** external "@mui/utils/useControlled" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/useControlled");

/***/ }),

/***/ "@mui/utils/useEnhancedEffect":
/*!***********************************************!*\
  !*** external "@mui/utils/useEnhancedEffect" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/useEnhancedEffect");

/***/ }),

/***/ "@mui/utils/useEventCallback":
/*!**********************************************!*\
  !*** external "@mui/utils/useEventCallback" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/useEventCallback");

/***/ }),

/***/ "@mui/utils/useForkRef":
/*!****************************************!*\
  !*** external "@mui/utils/useForkRef" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/useForkRef");

/***/ }),

/***/ "@mui/utils/useId":
/*!***********************************!*\
  !*** external "@mui/utils/useId" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@mui/utils/useId");

/***/ }),

/***/ "@toolpad/core/DashboardLayout":
/*!************************************************!*\
  !*** external "@toolpad/core/DashboardLayout" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@toolpad/core/DashboardLayout");

/***/ }),

/***/ "@toolpad/core/PageContainer":
/*!**********************************************!*\
  !*** external "@toolpad/core/PageContainer" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@toolpad/core/PageContainer");

/***/ }),

/***/ "@toolpad/core/nextjs":
/*!***************************************!*\
  !*** external "@toolpad/core/nextjs" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@toolpad/core/nextjs");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@auth/core/errors":
/*!************************************!*\
  !*** external "@auth/core/errors" ***!
  \************************************/
/***/ ((module) => {

module.exports = import("@auth/core/errors");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next-auth","vendor-chunks/@mui","vendor-chunks/@babel"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();