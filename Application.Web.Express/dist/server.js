/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/components/vue/MyComponent/MyComponent.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--13-0!./src/components/vue/MyComponent/MyComponent.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    name: {\n      type: String,\n      required: true\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/vue/MyComponent/MyComponent.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--13-0");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/components/vue/MyComponent/MyComponent.vue?vue&type=template&id=828d20ac":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--13-0!./src/components/vue/MyComponent/MyComponent.vue?vue&type=template&id=828d20ac ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction render() {\n  var _ctx = this;\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(\"div\", null, \"Hello, \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.name) + \" from React!\", 1\n  /* TEXT */\n  );\n}\n\n//# sourceURL=webpack:///./src/components/vue/MyComponent/MyComponent.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--13-0");

/***/ }),

/***/ "./src sync recursive ^.*$":
/*!***********************!*\
  !*** ./src sync ^.*$ ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\".\": \"./src/index.ts\",\n\t\"./\": \"./src/index.ts\",\n\t\"./components/react/MyComponent\": \"./src/components/react/MyComponent/index.ts\",\n\t\"./components/react/MyComponent/\": \"./src/components/react/MyComponent/index.ts\",\n\t\"./components/react/MyComponent/MyComponent\": \"./src/components/react/MyComponent/MyComponent.tsx\",\n\t\"./components/react/MyComponent/MyComponent.tsx\": \"./src/components/react/MyComponent/MyComponent.tsx\",\n\t\"./components/react/MyComponent/index\": \"./src/components/react/MyComponent/index.ts\",\n\t\"./components/react/MyComponent/index.ts\": \"./src/components/react/MyComponent/index.ts\",\n\t\"./components/vue/MyComponent\": \"./src/components/vue/MyComponent/index.ts\",\n\t\"./components/vue/MyComponent/\": \"./src/components/vue/MyComponent/index.ts\",\n\t\"./components/vue/MyComponent/MyComponent.vue\": \"./src/components/vue/MyComponent/MyComponent.vue\",\n\t\"./components/vue/MyComponent/index\": \"./src/components/vue/MyComponent/index.ts\",\n\t\"./components/vue/MyComponent/index.ts\": \"./src/components/vue/MyComponent/index.ts\",\n\t\"./helpers/vue/hypernova-bindings\": \"./src/helpers/vue/hypernova-bindings.ts\",\n\t\"./helpers/vue/hypernova-bindings.ts\": \"./src/helpers/vue/hypernova-bindings.ts\",\n\t\"./index\": \"./src/index.ts\",\n\t\"./index.ts\": \"./src/index.ts\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src sync recursive ^.*$\";\n\n//# sourceURL=webpack:///./src_sync_^.*$?");

/***/ }),

/***/ "./src/components/react/MyComponent/MyComponent.tsx":
/*!**********************************************************!*\
  !*** ./src/components/react/MyComponent/MyComponent.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction MyComponent(props) {\r\n    var style = {\r\n        backgroundColor: \"red\",\r\n        color: \"white\",\r\n        padding: '1em'\r\n    };\r\n    return react_1.default.createElement(\"div\", { style: style },\r\n        \"Hello, \",\r\n        props.name,\r\n        \" from React!\");\r\n}\r\nexports.default = MyComponent;\r\n\n\n//# sourceURL=webpack:///./src/components/react/MyComponent/MyComponent.tsx?");

/***/ }),

/***/ "./src/components/react/MyComponent/index.ts":
/*!***************************************************!*\
  !*** ./src/components/react/MyComponent/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar hypernova_react_1 = __webpack_require__(/*! hypernova-react */ \"hypernova-react\");\r\nvar MyComponent_1 = __importDefault(__webpack_require__(/*! ./MyComponent */ \"./src/components/react/MyComponent/MyComponent.tsx\"));\r\nexports.hypernova = hypernova_react_1.renderReact(\"MyComponent\", MyComponent_1.default);\r\nexports.default = MyComponent_1.default;\r\n\n\n//# sourceURL=webpack:///./src/components/react/MyComponent/index.ts?");

/***/ }),

/***/ "./src/components/vue/MyComponent/MyComponent.vue":
/*!********************************************************!*\
  !*** ./src/components/vue/MyComponent/MyComponent.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MyComponent_vue_vue_type_template_id_828d20ac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyComponent.vue?vue&type=template&id=828d20ac */ \"./src/components/vue/MyComponent/MyComponent.vue?vue&type=template&id=828d20ac\");\n/* harmony import */ var _MyComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyComponent.vue?vue&type=script&lang=js */ \"./src/components/vue/MyComponent/MyComponent.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */\n\n\n_MyComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render = _MyComponent_vue_vue_type_template_id_828d20ac__WEBPACK_IMPORTED_MODULE_0__[\"render\"]\n_MyComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].__file = \"src/components/vue/MyComponent/MyComponent.vue\"\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_MyComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./src/components/vue/MyComponent/MyComponent.vue?");

/***/ }),

/***/ "./src/components/vue/MyComponent/MyComponent.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./src/components/vue/MyComponent/MyComponent.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_13_0_MyComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/dist??ref--13-0!./MyComponent.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/components/vue/MyComponent/MyComponent.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_13_0_MyComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/components/vue/MyComponent/MyComponent.vue?");

/***/ }),

/***/ "./src/components/vue/MyComponent/MyComponent.vue?vue&type=template&id=828d20ac":
/*!**************************************************************************************!*\
  !*** ./src/components/vue/MyComponent/MyComponent.vue?vue&type=template&id=828d20ac ***!
  \**************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_13_0_MyComponent_vue_vue_type_template_id_828d20ac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../../node_modules/vue-loader/dist??ref--13-0!./MyComponent.vue?vue&type=template&id=828d20ac */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/components/vue/MyComponent/MyComponent.vue?vue&type=template&id=828d20ac\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_13_0_MyComponent_vue_vue_type_template_id_828d20ac__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/vue/MyComponent/MyComponent.vue?");

/***/ }),

/***/ "./src/components/vue/MyComponent/index.ts":
/*!*************************************************!*\
  !*** ./src/components/vue/MyComponent/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar hypernova_bindings_1 = __webpack_require__(/*! ../../../helpers/vue/hypernova-bindings */ \"./src/helpers/vue/hypernova-bindings.ts\");\r\nvar MyComponent_vue_1 = __importDefault(__webpack_require__(/*! ./MyComponent.vue */ \"./src/components/vue/MyComponent/MyComponent.vue\"));\r\nexports.hypernova = hypernova_bindings_1.renderVue(\"MyComponent\", MyComponent_vue_1.default);\r\nexports.default = MyComponent_vue_1.default;\r\n\n\n//# sourceURL=webpack:///./src/components/vue/MyComponent/index.ts?");

/***/ }),

/***/ "./src/helpers/vue/hypernova-bindings.ts":
/*!***********************************************!*\
  !*** ./src/helpers/vue/hypernova-bindings.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar hypernova_1 = __importStar(__webpack_require__(/*! hypernova */ \"hypernova\"));\r\nvar vue_1 = __importDefault(__webpack_require__(/*! vue */ \"vue\"));\r\nvar vue_server_renderer_1 = __webpack_require__(/*! vue-server-renderer */ \"vue-server-renderer\");\r\nvar renderer = vue_server_renderer_1.createRenderer();\r\nexports.renderVue = function (name, Component) {\r\n    return hypernova_1.default({\r\n        server: function () {\r\n            return function (propsData) {\r\n                var Constructor = vue_1.default.extend(Component);\r\n                if (Constructor instanceof Function) {\r\n                    console.log(\"Is a function...\");\r\n                }\r\n                console.log({ Constructor: Constructor });\r\n                return renderer\r\n                    .renderToString(new Constructor({ propsData: propsData }))\r\n                    .then(function (contents) {\r\n                    return hypernova_1.serialize(name, contents, propsData);\r\n                });\r\n            };\r\n        },\r\n        client: function () {\r\n            return \"\";\r\n        }\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack:///./src/helpers/vue/hypernova-bindings.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! hypernova/server */ \"hypernova/server\"));\r\nvar frameworkMap = {\r\n    react: \"./components/react/\",\r\n    vue: \"./components/vue/\",\r\n};\r\nvar createGetFrameworkPrefix = function (frameworkMap) { return function (frameworkName) { return frameworkMap[frameworkName]; }; };\r\nvar getFrameworkPrefix = createGetFrameworkPrefix(frameworkMap);\r\nvar createRequire = function (prefix) { return function (componentName) {\r\n    return __webpack_require__(\"./src sync recursive ^.*$\")(\"\" + prefix + componentName).hypernova;\r\n}; };\r\nvar getComponentFromContext = function (componentName, context) {\r\n    var metadata = context.metadata;\r\n    var prefix = getFrameworkPrefix(metadata.framework);\r\n    return createRequire(prefix)(componentName);\r\n};\r\nserver_1.default({\r\n    getComponent: getComponentFromContext,\r\n    createApplication: function () {\r\n        var app = express_1.default();\r\n        app.get(\"/health\", function (_, res) {\r\n            return res.status(200).send(\"OK\");\r\n        });\r\n        return app;\r\n    },\r\n    port: 3030\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "hypernova":
/*!****************************!*\
  !*** external "hypernova" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"hypernova\");\n\n//# sourceURL=webpack:///external_%22hypernova%22?");

/***/ }),

/***/ "hypernova-react":
/*!**********************************!*\
  !*** external "hypernova-react" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"hypernova-react\");\n\n//# sourceURL=webpack:///external_%22hypernova-react%22?");

/***/ }),

/***/ "hypernova/server":
/*!***********************************!*\
  !*** external "hypernova/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"hypernova/server\");\n\n//# sourceURL=webpack:///external_%22hypernova/server%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vue\");\n\n//# sourceURL=webpack:///external_%22vue%22?");

/***/ }),

/***/ "vue-server-renderer":
/*!**************************************!*\
  !*** external "vue-server-renderer" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vue-server-renderer\");\n\n//# sourceURL=webpack:///external_%22vue-server-renderer%22?");

/***/ })

/******/ });