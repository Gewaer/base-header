module.exports =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "151a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "160d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_company_logo_vue_vue_type_style_index_0_id_28a5931d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7436");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_company_logo_vue_vue_type_style_index_0_id_28a5931d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_company_logo_vue_vue_type_style_index_0_id_28a5931d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_company_logo_vue_vue_type_style_index_0_id_28a5931d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "401c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_notifications_vue_vue_type_style_index_0_id_0deab458_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("47b9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_notifications_vue_vue_type_style_index_0_id_0deab458_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_notifications_vue_vue_type_style_index_0_id_0deab458_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_notifications_vue_vue_type_style_index_0_id_0deab458_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "47b9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "659c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "672a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_user_options_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c245");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_user_options_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_user_options_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_user_options_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7436":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9268":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_companies_switcher_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d9e4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_companies_switcher_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_companies_switcher_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_companies_switcher_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "af9d":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAC3npUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHja7ZddktsgDMffOUWPgCSExHGwgZneoMfvH0Kcze52Z/rx0IeYCWBZSEI/4SSh//g+wjdcVCSGpOa55BxxpZIKV0w83q7bSDGtfl2yH+H+SR6uBwyRPDRz3/oVcn0ssLTlx7M82Lnt+Da0H9wNyvTMmGw934aEb3La96HsdTW92c79k5fPmO9hv7tPhmQ0hT3hwF1IIvo8vQgikCIVY0ZPAsfo51wlLYl+nrtwTd8l75q9y12sWy7PqQgxX2E/52jLST/P3crQ24jo4fnpgcnl4kPuxmg+Rr/trqaMTOWwN3XfyppB8UAqZS3LaLbS7BhnK2iOLZ4g1kDzQDsDFWJke1CiRpUG9TWedCLExJ0NI/PJsmQuxoXPBSXNRoMNeFoQB6sT1ARivmKh5bcsfyc5PDeCJhOMEVZ8aOEz4Z+0y9AYs3SJol+5Qlw8axphTHKzhxaA0Ng51ZXf1cKbuolvwAoI6kqzY4M1HjcTh9KjtmRxFuhpTCHejgZZ2waQIvhWBEMCAjGjmClTNGYjQh4dfCoiZ0l8gACpcqMwwEYkA47z9I01RkuXlW9ivFoAQnFQDGhwgAArJUX9WHLUUFXRFFQ1q6lr0Zolp6w5Z8vzHVVNLJlaNjO3YtXFk6tnN3cvXgsXwStMSy4WipdSaoXTCtMVqys0aj34kCMdeuTDDj/KUU+Uz5lOPfNpp5/lrI2bNBz/lpuF5q202qmjlHrq2nO37r30OlBrQ0YaOvKw4aOMelHbVJ+p0TtyX1OjTW0SS0vPHtQgNruboPk60ckMxDgRiNskgILmySw6pcST3GQWC+NQKIMa6YTTaBIDwdSJddDF7kHuS25B029x41+RCxPdvyAXJrpN7iO3T6i1ur5RZAGap3DmNMrAiw0K3St7nd9JfzyGvzXwMvQy9DL0MvQy9DL0MvT/GBr48YC/muEnkuSQ4bCBMzYAAAACYktHRAD/h4/MvwAAAAlwSFlzAAAFEwAABRMBWjvKTwAAAAd0SU1FB+MGDRM2Gzw3q0EAAAIMSURBVFjDrZg9SyNBGICfmCwGk/gJhwfHdhcucFpqK6J/wE5UbAT/gH9CrLUTBLW1sBWx0ebqiF/BIgiKhYTLFYH17rWS+5qdfXdmZsvNPs/Mu/PO+25AN8qscMQ9gnDPESuUCTiWeEL+uZ5YCgMvsfsf/P3apeQv2EvFC8KeL37diheEdR/8MJ1MQYdhG6LPKlhjKHMSQ6y5r+Aic/6CcGFDFKz3EoqKafwkQlxCNK7CQ5Fxt3cwoA7lgFuISiRKQcSrywpeuVPh79LxWdv0WCU4dt+mddU2rfvk8k4mfsfvLKpwacVfUvE97mJuUvE3xCEqQo0DI/6AWriaNs3hHydrh0OmdQ8WckgKfGEQ+M51+tnjKoiZZ4o6NaDLLd84oR0mOAUWOTe+g3MWc0XAOGYyt+mMTz+xpcrkLbfeosKZCi8IZ/nTraIsl7/LZi5FkdNceEE4VdY/ADZz4wVhU4ufc8ILwpyuj245C1qannvDGS8IG1n4Ki9egheq9pq8yohX5o+wav9B02v+gtC04Se88YIwkR6ihSDn70K6YDaIYDat4PTRIwogSCjzy7SCySB4iJg0h6gRrEVomAVjwQRjZsHnYIK6WRDuz4F+s6AbTNBN+xDapuedxz22bZ9Uoyyz71gRWuyzzKius6vS4CsfifnAJyJqxH9lSUKbLgkPPNPmkSZX/DCB3gDL/mt1oBj/BAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "c245":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d9e4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e555":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_header_vue_vue_type_style_index_0_id_27e6a6a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("151a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_header_vue_vue_type_style_index_0_id_27e6a6a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_header_vue_vue_type_style_index_0_id_27e6a6a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_header_vue_vue_type_style_index_0_id_27e6a6a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e7e9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_app_switcher_vue_vue_type_style_index_0_id_73b5530d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("659c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_app_switcher_vue_vue_type_style_index_0_id_73b5530d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_app_switcher_vue_vue_type_style_index_0_id_73b5530d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_app_switcher_vue_vue_type_style_index_0_id_73b5530d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"106c9c7c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gw-app-switcher.vue?vue&type=template&id=73b5530d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dropdown',{staticClass:"app-switcher"},[_c('template',{slot:"btn"},[_c('span',{staticClass:"app-mode"},[_vm._v("A1")]),_c('a',{staticClass:"grid-box"})]),_c('ul',{attrs:{"slot":"body"},slot:"body"},[_c('li',[_c('a',{attrs:{"href":"#","target":"_blank"}},[_c('span',{staticClass:"app-mode mode"},[_vm._v("A1")]),_c('p',[_vm._v("Application 1")])])]),_c('li',[_c('a',{attrs:{"href":"#","target":"_blank"}},[_c('span',{staticClass:"app-mode mode"},[_vm._v("A2")]),_c('p',[_vm._v("Application 2")])])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/gw-app-switcher.vue?vue&type=template&id=73b5530d&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gw-app-switcher.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var gw_app_switchervue_type_script_lang_js_ = ({
  name: "GwAppSwitcher"
});
// CONCATENATED MODULE: ./src/components/gw-app-switcher.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_gw_app_switchervue_type_script_lang_js_ = (gw_app_switchervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/gw-app-switcher.vue?vue&type=style&index=0&id=73b5530d&lang=scss&scoped=true&
var gw_app_switchervue_type_style_index_0_id_73b5530d_lang_scss_scoped_true_ = __webpack_require__("e7e9");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/gw-app-switcher.vue






/* normalize component */

var component = normalizeComponent(
  components_gw_app_switchervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "73b5530d",
  null
  
)

/* harmony default export */ var gw_app_switcher = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"106c9c7c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gw-companies-switcher.vue?vue&type=template&id=446dca26&
var gw_companies_switchervue_type_template_id_446dca26_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.showSwitcher)?_c('div',{staticClass:"company-switcher"},[_c('multiselect',{attrs:{"allow-empty":false,"options":_vm.companiesList,"searchable":false,"show-labels":false,"value":_vm.branchData,"group-values":"branches","group-label":"name","label":"name"},on:{"select":function (company) { return _vm.$emit('select', company); }}})],1):_vm._e()}
var gw_companies_switchervue_type_template_id_446dca26_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/gw-companies-switcher.vue?vue&type=template&id=446dca26&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gw-companies-switcher.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * @NOTE value is used instead of v-model because we are reloading the page
 * and we do not need VueMultiselect to update anything for us.
 * See also: switchCompany()
 */
/* harmony default export */ var gw_companies_switchervue_type_script_lang_js_ = ({
  name: "GwCompaniesSwitcher",
  props: {
    companyData: {
      type: Object,
      required: true
    },
    branchData: {
      type: Object,
      required: true
    },
    companiesList: {
      type: Array,

      default() {
        return [];
      }

    }
  },
  computed: {
    showSwitcher() {
      return this.companiesList.length > 1 || this.companyData.branches && this.companyData.branches.length > 1;
    }

  }
});
// CONCATENATED MODULE: ./src/components/gw-companies-switcher.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_gw_companies_switchervue_type_script_lang_js_ = (gw_companies_switchervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/gw-companies-switcher.vue?vue&type=style&index=0&lang=scss&
var gw_companies_switchervue_type_style_index_0_lang_scss_ = __webpack_require__("9268");

// CONCATENATED MODULE: ./src/components/gw-companies-switcher.vue






/* normalize component */

var gw_companies_switcher_component = normalizeComponent(
  components_gw_companies_switchervue_type_script_lang_js_,
  gw_companies_switchervue_type_template_id_446dca26_render,
  gw_companies_switchervue_type_template_id_446dca26_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var gw_companies_switcher = (gw_companies_switcher_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"106c9c7c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gw-company-logo.vue?vue&type=template&id=28a5931d&scoped=true&
var gw_company_logovue_type_template_id_28a5931d_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('router-link',{staticClass:"app-logo",attrs:{"to":{ name: 'dashboard'}}},[(_vm.companyLogo)?_c('img',{attrs:{"src":_vm.companyLogo,"alt":_vm.companyName}}):_c('div',{staticClass:"company-name"},[_vm._v(" "+_vm._s(_vm.companyName)+" ")])])}
var gw_company_logovue_type_template_id_28a5931d_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/gw-company-logo.vue?vue&type=template&id=28a5931d&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gw-company-logo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var gw_company_logovue_type_script_lang_js_ = ({
  name: "GwCompanyLogo",
  props: {
    companyLogo: {
      type: String,
      default: ""
    },
    companyName: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/gw-company-logo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_gw_company_logovue_type_script_lang_js_ = (gw_company_logovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/gw-company-logo.vue?vue&type=style&index=0&id=28a5931d&lang=scss&scoped=true&
var gw_company_logovue_type_style_index_0_id_28a5931d_lang_scss_scoped_true_ = __webpack_require__("160d");

// CONCATENATED MODULE: ./src/components/gw-company-logo.vue






/* normalize component */

var gw_company_logo_component = normalizeComponent(
  components_gw_company_logovue_type_script_lang_js_,
  gw_company_logovue_type_template_id_28a5931d_scoped_true_render,
  gw_company_logovue_type_template_id_28a5931d_scoped_true_staticRenderFns,
  false,
  null,
  "28a5931d",
  null
  
)

/* harmony default export */ var gw_company_logo = (gw_company_logo_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"106c9c7c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gw-notifications.vue?vue&type=template&id=0deab458&scoped=true&
var gw_notificationsvue_type_template_id_0deab458_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"notification-badge",on:{"click":function($event){$event.preventDefault();return _vm.$emit('toggle-notifications')}}},[_c('span',{staticClass:"notification-bubble"}),_c('i',{staticClass:"fas fa-bell"})])}
var gw_notificationsvue_type_template_id_0deab458_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/gw-notifications.vue?vue&type=template&id=0deab458&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gw-notifications.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var gw_notificationsvue_type_script_lang_js_ = ({
  name: "GwNotifications",
  props: {
    count: {
      type: Number,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/gw-notifications.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_gw_notificationsvue_type_script_lang_js_ = (gw_notificationsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/gw-notifications.vue?vue&type=style&index=0&id=0deab458&lang=scss&scoped=true&
var gw_notificationsvue_type_style_index_0_id_0deab458_lang_scss_scoped_true_ = __webpack_require__("401c");

// CONCATENATED MODULE: ./src/components/gw-notifications.vue






/* normalize component */

var gw_notifications_component = normalizeComponent(
  components_gw_notificationsvue_type_script_lang_js_,
  gw_notificationsvue_type_template_id_0deab458_scoped_true_render,
  gw_notificationsvue_type_template_id_0deab458_scoped_true_staticRenderFns,
  false,
  null,
  "0deab458",
  null
  
)

/* harmony default export */ var gw_notifications = (gw_notifications_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"106c9c7c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gw-user-options.vue?vue&type=template&id=40a3f9b0&
var gw_user_optionsvue_type_template_id_40a3f9b0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dropdown',{staticClass:"user-bar",attrs:{"x":_vm.userDropdownCoordenates.x,"y":_vm.userDropdownCoordenates.y,"is-icon":false}},[_c('template',{slot:"btn"},[_c('div',{staticClass:"user-name"},[_c('span',{staticClass:"bold"},[_vm._v(_vm._s(_vm.userData.firstname))]),_c('span',[_vm._v(" "+_vm._s(_vm.userData.lastname))])]),_vm._t("icon",[_c('i',{staticClass:"fas fa-chevron-down"})]),_c('div',{staticClass:"profile-image"},[(_vm.userData.profile_image)?_c('img',{attrs:{"src":_vm.userData.profile_image}}):_c('img',{attrs:{"src":__webpack_require__("af9d")}})])],2),_c('template',{slot:"body"},[_c('span',{staticClass:"dropdown-title"},[_vm._v("My Profile")]),_c('router-link',{staticClass:"dropdown-item",attrs:{"to":{ name: 'settingsUsersProfile' }}},[_c('span',[_vm._v("Users Settings")])]),_c('router-link',{staticClass:"dropdown-item",attrs:{"to":{ name: 'settingsCompaniesProfile' }}},[_c('span',[_vm._v(_vm._s(_vm.companyData.name)+" Settings")])]),_c('router-link',{staticClass:"dropdown-item",attrs:{"to":{ name: 'settingsAppsCustomFieldsList' }}},[_c('span',[_vm._v("App Settings")])]),_c('router-link',{staticClass:"dropdown-item",attrs:{"to":{ name: 'settingsManagerList' }}},[_c('span',[_vm._v("Companies Manager")])]),_c('a',{staticClass:"dropdown-item logout-button",attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.logout()}}},[_c('span',[_vm._v("Logout")]),_c('i',{staticClass:"fas fa-sign-out-alt"})])],1)],2)}
var gw_user_optionsvue_type_template_id_40a3f9b0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/gw-user-options.vue?vue&type=template&id=40a3f9b0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gw-user-options.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var gw_user_optionsvue_type_script_lang_js_ = ({
  name: "GwUserOptions",
  props: {
    companyData: {
      type: Object,
      required: true
    },
    userData: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      userDropdownCoordenates: {
        x: -45,
        y: 0
      }
    };
  },

  created() {
    this.handleUserDropdownCoordenates();
  },

  methods: {
    handleUserDropdownCoordenates() {
      if (window.innerWidth <= 768) {
        this.userDropdownCoordenates.x = -145;
      }
    },

    logout() {
      axios({
        method: "PUT",
        url: "/auth/logout"
      }).then(() => {
        Cookies.remove("token", {
          path: "/",
          domain: Object({"NODE_ENV":"production","BASE_URL":"/"}).VUE_APP_DOMAIN
        });
        this.$store.dispatch("User/setToken", null);
        this.$store.dispatch("Application/resetGlobalData");
        this.$router.push({
          name: "login"
        });
      });
    }

  }
});
// CONCATENATED MODULE: ./src/components/gw-user-options.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_gw_user_optionsvue_type_script_lang_js_ = (gw_user_optionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/gw-user-options.vue?vue&type=style&index=0&lang=scss&
var gw_user_optionsvue_type_style_index_0_lang_scss_ = __webpack_require__("672a");

// CONCATENATED MODULE: ./src/components/gw-user-options.vue






/* normalize component */

var gw_user_options_component = normalizeComponent(
  components_gw_user_optionsvue_type_script_lang_js_,
  gw_user_optionsvue_type_template_id_40a3f9b0_render,
  gw_user_optionsvue_type_template_id_40a3f9b0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var gw_user_options = (gw_user_options_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"106c9c7c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gw-header.vue?vue&type=template&id=27e6a6a6&scoped=true&
var gw_headervue_type_template_id_27e6a6a6_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header app-header"},[_c('div',{staticClass:"sidebar-toggle",on:{"click":function($event){return _vm.$emit('handle-sidebar')}}},[_c('img',{attrs:{"src":"/img/icons/hamburguer-menu.png"}})]),_c('div',{staticClass:"header-container"},[_c('div',{staticClass:"left-side-header d-flex"},[_vm._t("company-logo",[_c('gw-company-logo',{attrs:{"company-logo":_vm.companyData.profile_image,"company-name":_vm.companyData.name}})]),_vm._t("app-switcher",[(false)?undefined:_vm._e()]),_vm._t("companies-switcher",[_c('gw-companies-switcher',{attrs:{"branch-data":_vm.companyBranchData,"company-data":_vm.companyData,"companies-list":_vm.companiesList},on:{"select":function (company) { return _vm.$emit('selected-company', company); }}})])],2),_c('div',{staticClass:"right-side-header d-flex"},[_c('gw-user-options',{attrs:{"company-data":_vm.companyData,"user-data":_vm.userData}}),_c('gw-notifications',{attrs:{"count":_vm.notificationsCount},on:{"toggle-notifications":function($event){return _vm.$emit('toggle-notifications')}}})],1)])])}
var gw_headervue_type_template_id_27e6a6a6_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/gw-header.vue?vue&type=template&id=27e6a6a6&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gw-header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var gw_headervue_type_script_lang_js_ = ({
  name: "GwHeader",
  components: {
    GwAppSwitcher: gw_app_switcher,
    GwCompaniesSwitcher: gw_companies_switcher,
    GwCompanyLogo: gw_company_logo,
    GwNotifications: gw_notifications,
    GwUserOptions: gw_user_options
  },
  props: {
    companyBranchData: {
      type: Object,
      required: true
    },
    companyData: {
      type: Object,
      required: true,

      validator(data) {
        return data.name;
      }

    },
    companiesList: {
      type: Array,

      default() {
        return [];
      }

    },
    notificationsCount: {
      type: Number,
      required: true
    },
    showSidebar: {
      type: Boolean,
      default: false
    },
    userData: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/gw-header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_gw_headervue_type_script_lang_js_ = (gw_headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/gw-header.vue?vue&type=style&index=0&id=27e6a6a6&lang=scss&scoped=true&
var gw_headervue_type_style_index_0_id_27e6a6a6_lang_scss_scoped_true_ = __webpack_require__("e555");

// CONCATENATED MODULE: ./src/components/gw-header.vue






/* normalize component */

var gw_header_component = normalizeComponent(
  components_gw_headervue_type_script_lang_js_,
  gw_headervue_type_template_id_27e6a6a6_scoped_true_render,
  gw_headervue_type_template_id_27e6a6a6_scoped_true_staticRenderFns,
  false,
  null,
  "27e6a6a6",
  null
  
)

/* harmony default export */ var gw_header = (gw_header_component.exports);
// CONCATENATED MODULE: ./src/index.js







/* harmony default export */ var src = (gw_header);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport GwAppSwitcher */__webpack_require__.d(__webpack_exports__, "GwAppSwitcher", function() { return gw_app_switcher; });
/* concated harmony reexport GwCompaniesSwitcher */__webpack_require__.d(__webpack_exports__, "GwCompaniesSwitcher", function() { return gw_companies_switcher; });
/* concated harmony reexport GwCompanyLogo */__webpack_require__.d(__webpack_exports__, "GwCompanyLogo", function() { return gw_company_logo; });
/* concated harmony reexport GwNotifications */__webpack_require__.d(__webpack_exports__, "GwNotifications", function() { return gw_notifications; });
/* concated harmony reexport GwUserOptions */__webpack_require__.d(__webpack_exports__, "GwUserOptions", function() { return gw_user_options; });
/* concated harmony reexport GwHeader */__webpack_require__.d(__webpack_exports__, "GwHeader", function() { return gw_header; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ });
//# sourceMappingURL=gw-header.common.js.map