/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://epam_js_prac_irina_andreeva/./src/styles/index.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _scripts_allVoices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/allVoices */ \"./src/scripts/allVoices.js\");\n/* harmony import */ var _scripts_Microphone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/Microphone */ \"./src/scripts/Microphone.js\");\n/* harmony import */ var _scripts_stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/stream */ \"./src/scripts/stream.js\");\n\r\n\r\n\r\n\r\n\r\nconst allVoicesButton = document.getElementById(\"AllVoicesButton\");\r\nconst microphoneButton = document.getElementById(\"MicrophoneButton\");\r\nconst streamButton = document.getElementById(\"StreamButton\");\r\n\r\nconst modeText = document.getElementsByClassName(\"mode\");\r\n\r\nfunction ActivateButton(element) {\r\n    let current = document.getElementsByClassName(\"active\");\r\n    current[0].className = current[0].className.replace(\" active\", \"\");\r\n    element.className += \" active\";\r\n}\r\n\r\nfunction DoNotDisplayModeText() {\r\n    for (let i = 0; i < modeText.length; i++) {\r\n        modeText[i].style.display = \"none\";\r\n    }\r\n}\r\n\r\n//Initial page in all voices mode\r\n//All other modes are disabled\r\nDoNotDisplayModeText();\r\n(0,_scripts_allVoices__WEBPACK_IMPORTED_MODULE_1__.showAllVoicesPage)();\r\n\r\nallVoicesButton.addEventListener(\"click\", function() {\r\n    ActivateButton(this);\r\n    DoNotDisplayModeText();\r\n    (0,_scripts_allVoices__WEBPACK_IMPORTED_MODULE_1__.showAllVoicesPage)();\r\n});\r\n\r\nmicrophoneButton.addEventListener(\"click\", function() {\r\n    ActivateButton(this);\r\n    DoNotDisplayModeText();\r\n    (0,_scripts_Microphone__WEBPACK_IMPORTED_MODULE_2__.showMicrophonePage)();\r\n});\r\n\r\nstreamButton.addEventListener(\"click\", function() {\r\n    ActivateButton(this);\r\n    DoNotDisplayModeText();\r\n    (0,_scripts_stream__WEBPACK_IMPORTED_MODULE_3__.showStreamPage)();\r\n});\n\n//# sourceURL=webpack://epam_js_prac_irina_andreeva/./src/index.js?");

/***/ }),

/***/ "./src/scripts/Microphone.js":
/*!***********************************!*\
  !*** ./src/scripts/Microphone.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showMicrophonePage\": () => (/* binding */ showMicrophonePage)\n/* harmony export */ });\nconst microphone = document.getElementById(\"Microphone\");\r\n\r\nfunction showMicrophonePage() {\r\n    microphone.style.display = \"block\";\r\n}\n\n//# sourceURL=webpack://epam_js_prac_irina_andreeva/./src/scripts/Microphone.js?");

/***/ }),

/***/ "./src/scripts/allVoices.js":
/*!**********************************!*\
  !*** ./src/scripts/allVoices.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showAllVoicesPage\": () => (/* binding */ showAllVoicesPage)\n/* harmony export */ });\nconst allVoices = document.getElementById(\"AllVoices\");\r\n\r\nfunction showAllVoicesPage() {\r\n    allVoices.style.display = \"block\";\r\n}\n\n//# sourceURL=webpack://epam_js_prac_irina_andreeva/./src/scripts/allVoices.js?");

/***/ }),

/***/ "./src/scripts/stream.js":
/*!*******************************!*\
  !*** ./src/scripts/stream.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showStreamPage\": () => (/* binding */ showStreamPage)\n/* harmony export */ });\nconst stream = document.getElementById(\"Stream\");\r\n\r\nfunction showStreamPage() {\r\n    stream.style.display = \"block\";\r\n}\n\n//# sourceURL=webpack://epam_js_prac_irina_andreeva/./src/scripts/stream.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;