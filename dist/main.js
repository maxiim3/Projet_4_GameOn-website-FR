/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/nav */ \"./src/js/nav.js\");\n/* harmony import */ var _js_formValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/formValidation */ \"./src/js/formValidation.js\");\n/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/modal */ \"./src/js/modal.js\");\n\n\n\n\n_js_nav__WEBPACK_IMPORTED_MODULE_0__.menuBurger.addEventListener('click', function (e) {\n  e.preventDefault();\n  _js_nav__WEBPACK_IMPORTED_MODULE_0__.editNav();\n});\n_js_formValidation__WEBPACK_IMPORTED_MODULE_1__.form.addEventListener('submit', function (e) {\n  e.preventDefault();\n  (0,_js_formValidation__WEBPACK_IMPORTED_MODULE_1__.formValidation)();\n});\n\n//# sourceURL=webpack://oc_projet_4/./src/index.js?");

/***/ }),

/***/ "./src/js/formValidation.js":
/*!**********************************!*\
  !*** ./src/js/formValidation.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"birthdate\": function() { return /* binding */ birthdate; },\n/* harmony export */   \"checkboxCGU\": function() { return /* binding */ checkboxCGU; },\n/* harmony export */   \"email\": function() { return /* binding */ email; },\n/* harmony export */   \"feedback\": function() { return /* binding */ feedback; },\n/* harmony export */   \"firstname\": function() { return /* binding */ firstname; },\n/* harmony export */   \"form\": function() { return /* binding */ form; },\n/* harmony export */   \"formValidation\": function() { return /* binding */ formValidation; },\n/* harmony export */   \"isAdult\": function() { return /* binding */ isAdult; },\n/* harmony export */   \"isEmail\": function() { return /* binding */ isEmail; },\n/* harmony export */   \"lastname\": function() { return /* binding */ lastname; },\n/* harmony export */   \"quantity\": function() { return /* binding */ quantity; },\n/* harmony export */   \"radios\": function() { return /* binding */ radios; },\n/* harmony export */   \"setErrorTo\": function() { return /* binding */ setErrorTo; },\n/* harmony export */   \"setValidTo\": function() { return /* binding */ setValidTo; }\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar ageMinimum = 18;\nvar form = document.getElementById('form');\nvar firstname = document.getElementById('first');\nvar lastname = document.getElementById('last');\nvar email = document.getElementById('email');\nvar birthdate = document.getElementById('birthdate');\nvar quantity = document.getElementById('quantity');\nvar radios = _toConsumableArray(document.querySelectorAll('#radio .checkbox-input'));\nvar checkboxCGU = document.querySelector('#CGU #checkbox1');\nvar feedback = document.getElementById('feedback');\nfunction formValidation() {\n  var firstnameValue = firstname.value.trim();\n  var lastnameValue = lastname.value.trim();\n  var emailValue = email.value.trim();\n  var birthdateStrictValue = birthdate.value.trim();\n  var birthdateDateValue = new Date(birthdateStrictValue);\n  var birthdayYear = birthdateDateValue.getUTCFullYear();\n  var quantityValue = quantity.value.trim();\n  var count = 0;\n  var total = 0;\n\n  var checkUserInput = function checkUserInput() {\n    total++;\n\n    if (firstnameValue === '') {\n      setErrorTo(firstname, 'Le prénom doit être renseigner');\n    } else if (firstnameValue.length < 2) {\n      setErrorTo(firstname, \"Veuillez renseigner un prénom d'au moins deux lettres svp \");\n    } else {\n      setValidTo(firstname);\n      count++;\n    }\n\n    total++;\n\n    if (lastnameValue === '') {\n      setErrorTo(lastname, 'Le nom doit être renseigner');\n    } else if (lastnameValue.length < 2) {\n      setErrorTo(firstname, \"Veuillez renseigner un nom d'au moins deux lettres svp \");\n    } else {\n      setValidTo(lastname);\n      count++;\n    }\n\n    total++;\n\n    if (emailValue === '') {\n      setErrorTo(email, \"L'email doit être renseigner\");\n    } else if (!isEmail(emailValue)) {\n      setErrorTo(email, 'Veuillez renseigner un email valid svp ');\n    } else {\n      setValidTo(email);\n      count++;\n    }\n\n    total++;\n\n    if (birthdateStrictValue === '') {\n      setErrorTo(birthdate, 'La date de naissance doit être renseigner');\n    } else if (!isAdult(birthdayYear)) {\n      setErrorTo(birthdate, 'Vous devez avoir 18ans pour participer');\n    } else {\n      setValidTo(birthdate);\n      count++;\n    }\n\n    total++;\n\n    if (quantityValue === '') {\n      setErrorTo(quantity, 'Vous devez renseigner nombre de tournois');\n    } else {\n      setValidTo(quantity);\n      count++;\n    }\n\n    if (radios.every(function (radio) {\n      return !radio.checked;\n    })) {\n      setErrorTo(radios[0], 'Vous devez choisir un tournois');\n    } else {\n      setValidTo(radios[0]);\n      count++;\n    }\n\n    total++;\n\n    if (!checkboxCGU.checked) {\n      setErrorTo(checkboxCGU, \"Vous devez accepter les conditions d'utilisation\");\n    } else {\n      setValidTo(checkboxCGU);\n      count++;\n    }\n\n    total++;\n    return count === total;\n  };\n\n  checkUserInput();\n\n  if (checkUserInput()) {\n    form.dataset.formValid = true;\n    feedback.dataset.formValid = true;\n    postData();\n  } else {\n    form.dataset.formValid = false;\n    feedback.dataset.formValid = false;\n  }\n} // if error validation, set data-error to true to parent element and display error message\n\nfunction setErrorTo(input, message) {\n  var formData = input.parentElement;\n  formData.dataset.error = message;\n  formData.dataset.errorVisible = true;\n} // if validation succeed,  set data-error to false to parent element\n\nfunction setValidTo(input) {\n  var formData = input.parentElement;\n  formData.dataset.errorVisible = false;\n} // Check if email is valid using regex test\n\nfunction isEmail(email) {\n  return /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/.test(email);\n} // Check if the User is Adult\n\nfunction isAdult(input) {\n  var actualDate = new Date();\n  var actualYear = actualDate.getUTCFullYear();\n  var minimumDate = new Date();\n  minimumDate.setFullYear(ageMinimum);\n  var minimumYear = minimumDate.getUTCFullYear();\n  return input < actualYear - minimumYear;\n} // function postData() {\n//    fetch(\"./api/form.json\", {\n//       method: “POST”,\n//    headers: {\n//       'Accept': 'application/json',\n//          'Content-Type': 'application/json'\n//    },\n//    body: JSON.stringify(jsonBody)\n// });\n// }\n\n//# sourceURL=webpack://oc_projet_4/./src/js/formValidation.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": function() { return /* binding */ closeModal; },\n/* harmony export */   \"modal\": function() { return /* binding */ modal; },\n/* harmony export */   \"openModal\": function() { return /* binding */ openModal; },\n/* harmony export */   \"style\": function() { return /* binding */ style; }\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar style = {\n  fontSize: function fontSize(i) {\n    return \"font-size: \".concat(i, \"px\");\n  },\n  valid: 'color: green;',\n  error: 'color: red;',\n  errorAccent: 'color: red; text-decoration: underline;'\n};\nvar modal = document.querySelector('.modal');\nvar openModal = _toConsumableArray(document.getElementsByClassName('open-modal'));\nvar closeModal = _toConsumableArray(document.getElementsByClassName('close-modal'));\nopenModal.forEach(function (e) {\n  return e.addEventListener('click', function () {\n    modal.showModal();\n    console.log('Open Modal');\n  });\n});\ncloseModal.forEach(function (e) {\n  return e.addEventListener('click', function () {\n    modal.close();\n    console.log('close Modal');\n  });\n});\n\n//# sourceURL=webpack://oc_projet_4/./src/js/modal.js?");

/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"editNav\": function() { return /* binding */ editNav; },\n/* harmony export */   \"menuBurger\": function() { return /* binding */ menuBurger; }\n/* harmony export */ });\n//region 1.NAV SECTION\n\n/**\n * # function editNav()\n * Ajoute la classe 'responsive' en breakpoint mobile\n * Permet d'ouvrir le menu Nav\n */\nfunction editNav() {\n  var topNav = document.getElementById('myTopnav');\n\n  if (topNav.className === 'topnav') {\n    topNav.className += ' responsive';\n  } else {\n    topNav.className = 'topnav';\n  }\n}\nvar menuBurger = document.getElementById('burgerMenu'); //endregion\n\n//# sourceURL=webpack://oc_projet_4/./src/js/nav.js?");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
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