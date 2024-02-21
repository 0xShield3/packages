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

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _privy_io_react_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @privy-io/react-auth */ \"@privy-io/react-auth\");\n/* harmony import */ var _privy_io_react_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_privy_io_react_auth__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _0xshield3_privy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @0xshield3/privy */ \"@0xshield3/privy\");\n/* harmony import */ var _0xshield3_privy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_0xshield3_privy__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_5__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const privyProviderConfig = {\n        embeddedWallets: {\n            createOnLogin: \"users-without-wallets\",\n            noPromptOnSignature: false\n        },\n        loginMethods: [\n            \"email\",\n            \"google\",\n            \"twitter\",\n            \"discord\",\n            \"apple\"\n        ]\n    };\n    const shield3PrivyConfig = _0xshield3_privy__WEBPACK_IMPORTED_MODULE_7___default()(\"SsrNa315DU2O37cYzmQK36d7ABpBcFg2aynDlyWh\" || 0, privyProviderConfig);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preload\",\n                        href: \"/fonts/AdelleSans-Regular.woff\",\n                        as: \"font\",\n                        crossOrigin: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/isaacpatka/shield3/packages/apps/OFAC Example/pages/_app.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preload\",\n                        href: \"/fonts/AdelleSans-Regular.woff2\",\n                        as: \"font\",\n                        crossOrigin: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/isaacpatka/shield3/packages/apps/OFAC Example/pages/_app.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preload\",\n                        href: \"/fonts/AdelleSans-Semibold.woff\",\n                        as: \"font\",\n                        crossOrigin: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/isaacpatka/shield3/packages/apps/OFAC Example/pages/_app.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preload\",\n                        href: \"/fonts/AdelleSans-Semibold.woff2\",\n                        as: \"font\",\n                        crossOrigin: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/isaacpatka/shield3/packages/apps/OFAC Example/pages/_app.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicons/favicon.ico\",\n                        sizes: \"any\"\n                    }, void 0, false, {\n                        fileName: \"/Users/isaacpatka/shield3/packages/apps/OFAC Example/pages/_app.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicons/icon.svg\",\n                        type: \"image/svg+xml\"\n                    }, void 0, false, {\n                        fileName: \"/Users/isaacpatka/shield3/packages/apps/OFAC Example/pages/_app.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"apple-touch-icon\",\n                        href: \"/favicons/apple-touch-icon.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/isaacpatka/shield3/packages/apps/OFAC Example/pages/_app.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"manifest\",\n                        href: \"/favicons/manifest.json\"\n                    }, void 0, false, {\n                        fileName: \"/Users/isaacpatka/shield3/packages/apps/OFAC Example/pages/_app.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Privy x Shield3\"\n                    }, void 0, false, {\n                        fileName: \"/Users/isaacpatka/shield3/packages/apps/OFAC Example/pages/_app.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Privy x Shield3\"\n                    }, void 0, false, {\n                        fileName: \"/Users/isaacpatka/shield3/packages/apps/OFAC Example/pages/_app.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/isaacpatka/shield3/packages/apps/OFAC Example/pages/_app.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_privy_io_react_auth__WEBPACK_IMPORTED_MODULE_3__.PrivyProvider, {\n                appId: \"clmz8d2vn093wjs0fminy7b8g\" || 0,\n                onSuccess: ()=>router.push(\"/dashboard\"),\n                config: shield3PrivyConfig,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {\n                        position: \"top-right\"\n                    }, void 0, false, {\n                        fileName: \"/Users/isaacpatka/shield3/packages/apps/OFAC Example/pages/_app.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/isaacpatka/shield3/packages/apps/OFAC Example/pages/_app.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/isaacpatka/shield3/packages/apps/OFAC Example/pages/_app.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUVGO0FBQzJDO0FBQ2hDO0FBQ1E7QUFDRDtBQUNPO0FBRXRELFNBQVNLLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDL0MsTUFBTUMsU0FBU04sc0RBQVNBO0lBQ3hCLE1BQU1PLHNCQUF5QztRQUM3Q0MsaUJBQWlCO1lBQ2ZDLGVBQWU7WUFDZkMscUJBQXFCO1FBQ3ZCO1FBQ0FDLGNBQWM7WUFBQztZQUFVO1lBQVc7WUFBWTtZQUFZO1NBQVE7SUFDdEU7SUFDQSxNQUFNQyxxQkFBcUJWLHVEQUFzQkEsQ0FBQ1csMENBQXVDLElBQUksR0FBSU47SUFFakcscUJBQ0U7OzBCQUNFLDhEQUFDVCxrREFBSUE7O2tDQUNILDhEQUFDa0I7d0JBQ0NDLEtBQUk7d0JBQ0pDLE1BQUs7d0JBQ0xDLElBQUc7d0JBQ0hDLGFBQVk7Ozs7OztrQ0FFZCw4REFBQ0o7d0JBQ0NDLEtBQUk7d0JBQ0pDLE1BQUs7d0JBQ0xDLElBQUc7d0JBQ0hDLGFBQVk7Ozs7OztrQ0FFZCw4REFBQ0o7d0JBQ0NDLEtBQUk7d0JBQ0pDLE1BQUs7d0JBQ0xDLElBQUc7d0JBQ0hDLGFBQVk7Ozs7OztrQ0FFZCw4REFBQ0o7d0JBQ0NDLEtBQUk7d0JBQ0pDLE1BQUs7d0JBQ0xDLElBQUc7d0JBQ0hDLGFBQVk7Ozs7OztrQ0FHZCw4REFBQ0o7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7d0JBQXdCRyxPQUFNOzs7Ozs7a0NBQ3BELDhEQUFDTDt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzt3QkFBcUJJLE1BQUs7Ozs7OztrQ0FDaEQsOERBQUNOO3dCQUFLQyxLQUFJO3dCQUFtQkMsTUFBSzs7Ozs7O2tDQUNsQyw4REFBQ0Y7d0JBQUtDLEtBQUk7d0JBQVdDLE1BQUs7Ozs7OztrQ0FFMUIsOERBQUNLO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBRW5DLDhEQUFDM0IsK0RBQWFBO2dCQUNaNEIsT0FBT2QsMkJBQW9DLElBQUksQ0FBRTtnQkFDakRnQixXQUFXLElBQU12QixPQUFPd0IsSUFBSSxDQUFDO2dCQUM3QkMsUUFBUW5COztrQ0FFTiw4REFBQ1gsMERBQWNBO3dCQUFDK0IsVUFBUzs7Ozs7O2tDQUN6Qiw4REFBQzVCO3dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0FBSWxDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgUHJpdnlDbGllbnRDb25maWcsIFByaXZ5UHJvdmlkZXIgfSBmcm9tIFwiQHByaXZ5LWlvL3JlYWN0LWF1dGhcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcbmltcG9ydCBpbml0U2hpZWxkM1ByaXZ5Q29uZmlnIGZyb20gJ0AweHNoaWVsZDMvcHJpdnknO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBwcml2eVByb3ZpZGVyQ29uZmlnOiBQcml2eUNsaWVudENvbmZpZyA9IHtcbiAgICBlbWJlZGRlZFdhbGxldHM6IHtcbiAgICAgIGNyZWF0ZU9uTG9naW46IFwidXNlcnMtd2l0aG91dC13YWxsZXRzXCIsXG4gICAgICBub1Byb21wdE9uU2lnbmF0dXJlOiBmYWxzZSxcbiAgICB9LFxuICAgIGxvZ2luTWV0aG9kczogW1wiZW1haWxcIiAsIFwiZ29vZ2xlXCIgLCBcInR3aXR0ZXJcIiAsIFwiZGlzY29yZFwiICwgXCJhcHBsZVwiXSxcbiAgfTtcbiAgY29uc3Qgc2hpZWxkM1ByaXZ5Q29uZmlnID0gaW5pdFNoaWVsZDNQcml2eUNvbmZpZyhwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TSElFTEQzX0FQSV9LRVkgfHwgJycsIHByaXZ5UHJvdmlkZXJDb25maWcpO1xuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgaHJlZj1cIi9mb250cy9BZGVsbGVTYW5zLVJlZ3VsYXIud29mZlwiXG4gICAgICAgICAgYXM9XCJmb250XCJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cIlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgaHJlZj1cIi9mb250cy9BZGVsbGVTYW5zLVJlZ3VsYXIud29mZjJcIlxuICAgICAgICAgIGFzPVwiZm9udFwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgIGhyZWY9XCIvZm9udHMvQWRlbGxlU2Fucy1TZW1pYm9sZC53b2ZmXCJcbiAgICAgICAgICBhcz1cImZvbnRcIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPVwiXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICBocmVmPVwiL2ZvbnRzL0FkZWxsZVNhbnMtU2VtaWJvbGQud29mZjJcIlxuICAgICAgICAgIGFzPVwiZm9udFwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb25zL2Zhdmljb24uaWNvXCIgc2l6ZXM9XCJhbnlcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29ucy9pY29uLnN2Z1wiIHR5cGU9XCJpbWFnZS9zdmcreG1sXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIGhyZWY9XCIvZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvZmF2aWNvbnMvbWFuaWZlc3QuanNvblwiIC8+XG5cbiAgICAgICAgPHRpdGxlPlByaXZ5IHggU2hpZWxkMzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJQcml2eSB4IFNoaWVsZDNcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFByaXZ5UHJvdmlkZXJcbiAgICAgICAgYXBwSWQ9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BSSVZZX0FQUF9JRCB8fCBcIlwifVxuICAgICAgICBvblN1Y2Nlc3M9eygpID0+IHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKX1cbiAgICAgICAgY29uZmlnPXtzaGllbGQzUHJpdnlDb25maWd9XG4gICAgICA+XG4gICAgICAgICAgPFRvYXN0Q29udGFpbmVyIHBvc2l0aW9uPVwidG9wLXJpZ2h0XCIgLz5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1ByaXZ5UHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJIZWFkIiwiUHJpdnlQcm92aWRlciIsInVzZVJvdXRlciIsIlRvYXN0Q29udGFpbmVyIiwiaW5pdFNoaWVsZDNQcml2eUNvbmZpZyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwicHJpdnlQcm92aWRlckNvbmZpZyIsImVtYmVkZGVkV2FsbGV0cyIsImNyZWF0ZU9uTG9naW4iLCJub1Byb21wdE9uU2lnbmF0dXJlIiwibG9naW5NZXRob2RzIiwic2hpZWxkM1ByaXZ5Q29uZmlnIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NISUVMRDNfQVBJX0tFWSIsImxpbmsiLCJyZWwiLCJocmVmIiwiYXMiLCJjcm9zc09yaWdpbiIsInNpemVzIiwidHlwZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiYXBwSWQiLCJORVhUX1BVQkxJQ19QUklWWV9BUFBfSUQiLCJvblN1Y2Nlc3MiLCJwdXNoIiwiY29uZmlnIiwicG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@0xshield3/privy":
/*!***********************************!*\
  !*** external "@0xshield3/privy" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@0xshield3/privy");

/***/ }),

/***/ "@privy-io/react-auth":
/*!***************************************!*\
  !*** external "@privy-io/react-auth" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@privy-io/react-auth");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-toastify"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();