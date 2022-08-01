/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/blocks/components/icons/AlertsLogo.js":
/*!******************************************************!*\
  !*** ./src/js/blocks/components/icons/AlertsLogo.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var AlertsLogo = function AlertsLogo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    viewBox: "0 0 4167 4167",
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    style: {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeMiterlimit: 2
    },
    width: "32",
    height: "32"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4166.67 2083.33c0 1150.6-932.732 2083.33-2083.33 2083.33C932.75 4166.66.01 3233.927.01 2083.33.01 932.74 932.75 0 2083.34 0c1150.6 0 2083.33 932.741 2083.33 2083.33Z",
    style: {
      fill: '#a876bc',
      fillRule: 'nonzero'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2369.36 849.175c39.594 47.887 62.894 106.126 62.894 169.005l-218.076 1654.1h-259.66l224.689 224.689c64.656 26.058 116.252 77.633 142.309 142.31 11.941 29.622 18.574 61.961 18.574 95.854 0 141.812-114.967 256.758-256.758 256.758-61.67 0-118.242-21.746-162.5-57.981l749.026 749.025c171.372-50.186 333.582-121.807 483.541-211.774 468.594-281.053 817.537-741.107 952.301-1285.63L2369.36 849.171Z",
    style: {
      fill: '#874c9e',
      fillRule: 'nonzero'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M1952.49 2672.28h261.691l218.076-1654.1c0-62.879-23.3-121.118-62.894-169.005-12.375-14.963-26.326-28.918-41.687-41.673-62.956-52.276-149.171-84.554-244.341-84.554-192.703 0-348.922 132.18-348.922 295.232l217.766 1651.76.311 2.342ZM2179.21 2896.97c-29.643-11.94-61.982-18.573-95.875-18.573-141.791 0-256.758 114.946-256.758 256.737 0 61.671 21.767 118.242 57.981 162.5a258.698 258.698 0 0 0 36.277 36.277c44.258 36.235 100.83 57.981 162.5 57.981 141.791 0 256.758-114.946 256.758-256.758 0-33.893-6.633-66.232-18.574-95.854-26.057-64.677-77.653-116.252-142.309-142.31Z",
    style: {
      fill: '#F66562',
      fillRule: 'nonzero'
    }
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertsLogo);

/***/ }),

/***/ "./src/js/blocks/material/index.js":
/*!*****************************************!*\
  !*** ./src/js/blocks/material/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/js/blocks/material/block.json");
/* harmony import */ var _components_icons_AlertsLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/icons/AlertsLogo */ "./src/js/blocks/components/icons/AlertsLogo.js");



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__, {
  edit: function edit() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, "test");
  },
  save: function save() {
    return null;
  },
  icon: /*#__PURE__*/React.createElement(_components_icons_AlertsLogo__WEBPACK_IMPORTED_MODULE_2__["default"], null)
});

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "./src/js/blocks/material/block.json":
/*!*******************************************!*\
  !*** ./src/js/blocks/material/block.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","title":"AlertsDLX - Material UI","apiVersion":2,"name":"mediaron/alerts-dlx-material","category":"widgets","icon":"<svg width=\'100%\' height=\'100%\' viewBox=\'0 0 4167 4167\' version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' xml:space=\'preserve\' xmlns:serif=\'http://www.serif.com/\' style=\'fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;\'><g><path d=\'M4166.67,2083.33c-0,1150.6 -932.732,2083.33 -2083.33,2083.33c-1150.59,-0 -2083.33,-932.733 -2083.33,-2083.33c-0,-1150.59 932.74,-2083.33 2083.33,-2083.33c1150.6,0 2083.33,932.741 2083.33,2083.33Z\' style=\'fill:#a876bc;fill-rule:nonzero;\'/><path d=\'M2369.36,849.175c39.594,47.887 62.894,106.126 62.894,169.005l-218.076,1654.1l-259.66,0l224.689,224.689c64.656,26.058 116.252,77.633 142.309,142.31c11.941,29.622 18.574,61.961 18.574,95.854c0,141.812 -114.967,256.758 -256.758,256.758c-61.67,-0 -118.242,-21.746 -162.5,-57.981l749.026,749.025c171.372,-50.186 333.582,-121.807 483.541,-211.774c468.594,-281.053 817.537,-741.107 952.301,-1285.63l-1736.34,-1736.36Z\' style=\'fill:#874c9e;fill-rule:nonzero;\'/><path d=\'M1952.49,2672.28l261.691,0l218.076,-1654.1c0,-62.879 -23.3,-121.118 -62.894,-169.005c-12.375,-14.963 -26.326,-28.918 -41.687,-41.673c-62.956,-52.276 -149.171,-84.554 -244.341,-84.554c-192.703,-0 -348.922,132.18 -348.922,295.232l217.766,1651.76l0.311,2.342Z\' style=\'fill:#f8afac;fill-rule:nonzero;\'/><path d=\'M2179.21,2896.97c-29.643,-11.94 -61.982,-18.573 -95.875,-18.573c-141.791,-0 -256.758,114.946 -256.758,256.737c0,61.671 21.767,118.242 57.981,162.5c10.863,13.267 23.01,25.414 36.277,36.277c44.258,36.235 100.83,57.981 162.5,57.981c141.791,-0 256.758,-114.946 256.758,-256.758c0,-33.893 -6.633,-66.232 -18.574,-95.854c-26.057,-64.677 -77.653,-116.252 -142.309,-142.31Z\' style=\'fill:#F66562;fill-rule:nonzero;\'/></g></svg>","description":"An alert and notification block inspired by Material UI.","keywords":["alert","info","hint","success","error","notice","notification","warning","material"],"version":"1.0.0","textdomain":"alerts-dlx","attributes":{"show_copy":{"type":"boolean","default":true},"show_permalink":{"type":"boolean","default":true},"template":{"type":"string","default":"light"},"button_style":{"type":"string","default":"default"},"share_text":{"type":"string","default":""},"share_text_override":{"type":"string","default":""},"share_button_text":{"type":"string","default":"Click to Tweet"},"share_text_override_enabled":{"type":"boolean","default":false},"align":{"type":"string","default":"center"},"hashtags":{"type":"array","default":[]},"twitter_username":{"type":"string","default":""},"maximum_width":{"type":"number","default":850},"maximum_width_unit":{"type":"string","default":"px"},"rtl":{"type":"boolean","default":false},"tweet_button_alignment":{"type":"string","default":"right"},"tweet_icon_alignment":{"type":"string","default":"right"},"tweet_button_enabled":{"type":"boolean","default":true},"tweet_button_display":{"type":"string","default":"full"},"tweet_styles_disabled":{"type":"boolean","default":false},"anchor":{"type":"string","default":""},"anchor_prefix":{"type":"string","default":"qdlx"},"has_anchor":{"type":"boolean","default":true},"url_shortener":{"type":"boolean","default":true},"url_shortening_service":{"type":"string","default":"none"},"permalink":{"type":"string","default":""},"manualPermalink":{"type":"string","default":""},"enable_links_in_tweet":{"type":"boolean","default":true},"enable_contextual_menu":{"type":"boolean","default":true},"enable_copy_text":{"type":"boolean","default":true},"enable_copy_tweet":{"type":"boolean","default":true},"enable_copy_link":{"type":"boolean","default":true},"enable_tweet_this":{"type":"boolean","default":true},"preview":{"type":"boolean","default":false},"blockOnly":{"type":"boolean","default":false},"defaultsApplied":{"type":"boolean","default":false},"transforming":{"type":"boolean","default":false}},"example":{"attributes":{"preview":true,"blockOnly":true,"share_text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada dui id nisi vulputate semper. Nam sagittis ac nulla id pharetra. Maecenas congue, tellus a blandit cursus, lorem dolor hendrerit erat, sed luctus arcu velit eget ligula.","template":"purple-bliss","enable_contextual_menu":true,"enable_copy_text":true,"enable_copy_tweet":true,"enable_copy_link":true,"enable_tweet_this":true,"maximum_width":800,"maximum_width_unit":"px"}},"supports":{"anchor":true,"align":true,"className":true},"editorScript":"alerts-dlx-block","editorStyle":"alerts-dlx-block-editor-styles","style":"alerts-dlx-frontend"}');

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/js/blocks/index.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material */ "./src/js/blocks/material/index.js");

})();

/******/ })()
;
//# sourceMappingURL=alerts-dlx.js.map