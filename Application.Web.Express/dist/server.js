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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/vue/MyComponent/MyComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue/MyComponent/MyComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    name: String\n  }\n});\n\n//# sourceURL=webpack:///./src/components/vue/MyComponent/MyComponent.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vue/MyComponent/MyComponent.vue?vue&type=template&id=828d20ac&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue/MyComponent/MyComponent.vue?vue&type=template&id=828d20ac& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      style: {\n        backgroundColor: \"green\",\n        color: \"white\",\n        padding: \"1em\"\n      }\n    },\n    [\n      _vm._ssrNode(\n        _vm._ssrEscape(\"\\n  Hello, \" + _vm._s(_vm.name) + \" from Vue!\\n\")\n      )\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/vue/MyComponent/MyComponent.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction MyComponent(props) {\r\n    var style = {\r\n        backgroundColor: \"blue\",\r\n        color: \"white\",\r\n        padding: '1em'\r\n    };\r\n    return react_1.default.createElement(\"div\", { style: style },\r\n        \"Hello, \",\r\n        props.name,\r\n        \" from React!\");\r\n}\r\nexports.default = MyComponent;\r\n\n\n//# sourceURL=webpack:///./src/components/react/MyComponent/MyComponent.tsx?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MyComponent_vue_vue_type_template_id_828d20ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyComponent.vue?vue&type=template&id=828d20ac& */ \"./src/components/vue/MyComponent/MyComponent.vue?vue&type=template&id=828d20ac&\");\n/* harmony import */ var _MyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyComponent.vue?vue&type=script&lang=js& */ \"./src/components/vue/MyComponent/MyComponent.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\nfunction injectStyles (context) {\n  \n  \n}\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _MyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _MyComponent_vue_vue_type_template_id_828d20ac___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _MyComponent_vue_vue_type_template_id_828d20ac___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  injectStyles,\n  null,\n  \"05a2ee8e\"\n  \n)\n\ncomponent.options.__file = \"src/components/vue/MyComponent/MyComponent.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/vue/MyComponent/MyComponent.vue?");

/***/ }),

/***/ "./src/components/vue/MyComponent/MyComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/components/vue/MyComponent/MyComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyComponent.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/vue/MyComponent/MyComponent.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/vue/MyComponent/MyComponent.vue?");

/***/ }),

/***/ "./src/components/vue/MyComponent/MyComponent.vue?vue&type=template&id=828d20ac&":
/*!***************************************************************************************!*\
  !*** ./src/components/vue/MyComponent/MyComponent.vue?vue&type=template&id=828d20ac& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyComponent_vue_vue_type_template_id_828d20ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyComponent.vue?vue&type=template&id=828d20ac& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vue/MyComponent/MyComponent.vue?vue&type=template&id=828d20ac&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyComponent_vue_vue_type_template_id_828d20ac___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyComponent_vue_vue_type_template_id_828d20ac___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/vue/MyComponent/MyComponent.vue?");

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
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar vue_1 = __importDefault(__webpack_require__(/*! vue */ \"vue\"));\r\nvar hypernova_1 = __importStar(__webpack_require__(/*! hypernova */ \"hypernova\"));\r\nvar vue_server_renderer_1 = __webpack_require__(/*! vue-server-renderer */ \"vue-server-renderer\");\r\nexports.renderVue = function (name, Component) {\r\n    return hypernova_1.default({\r\n        server: function () {\r\n            var _this = this;\r\n            return function (propsData) { return __awaiter(_this, void 0, void 0, function () {\r\n                var Constructor, componentInstance, renderer, contents;\r\n                return __generator(this, function (_a) {\r\n                    switch (_a.label) {\r\n                        case 0:\r\n                            Constructor = vue_1.default.extend(Component);\r\n                            componentInstance = new Constructor({\r\n                                propsData: propsData\r\n                            });\r\n                            renderer = vue_server_renderer_1.createRenderer();\r\n                            return [4 /*yield*/, renderer.renderToString(componentInstance)];\r\n                        case 1:\r\n                            contents = _a.sent();\r\n                            return [2 /*return*/, hypernova_1.serialize(name, contents, propsData)];\r\n                    }\r\n                });\r\n            }); };\r\n        },\r\n        client: function () {\r\n            return \"\";\r\n        }\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack:///./src/helpers/vue/hypernova-bindings.ts?");

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