/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domManipulator.js":
/*!*******************************!*\
  !*** ./src/domManipulator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "insertWeather": () => (/* binding */ insertWeather)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");



async function insertWeather() {
    const weatherContainer = document.getElementById('weatherInfo')
    const supportContainer = document.getElementById('weatherSupportingInfo')
    const divider = document.getElementById('divider')
    const tempContainer = document.getElementById('weatherTemp')
    const weatherVisibility = document.getElementById('weatherVisibility')
    const feelsLikeInfo = document.getElementById('feelsLike')
    const humidityInfo = document.getElementById('humidity')
    const lowTempInfo = document.getElementById('lowTemp')
    const highTempInfo = document.getElementById('highTemp')
    
    const weatherData = await (0,_index__WEBPACK_IMPORTED_MODULE_0__.getWeather)()
    weatherContainer.style.display = "flex"
    supportContainer.style.display = "flex"
    divider.style.display = "block";
    let temp = weatherData.temp
    let visibility = weatherData.visibility
    let feelsLike = weatherData.supportingInfo.feels_like
    let humidity = weatherData.supportingInfo.humidity
    let lowTemp = weatherData.supportingInfo.temp_min
    let highTemp = weatherData.supportingInfo.temp_max
    console.log(weatherData.supportingInfo)

    tempContainer.innerHTML = temp + '\u00B0'
    weatherVisibility.innerHTML = _helperFunctions__WEBPACK_IMPORTED_MODULE_1__.helperFunctions.toTitleCase(visibility) 
    feelsLikeInfo.innerHTML = feelsLike + '\u00B0'
    humidityInfo.innerHTML = humidity + "%"
    lowTempInfo.innerHTML = lowTemp + '\u00B0'
    highTempInfo.innerHTML = highTemp + '\u00B0'
    
}




/***/ }),

/***/ "./src/helperFunctions.js":
/*!********************************!*\
  !*** ./src/helperFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "helperFunctions": () => (/* binding */ helperFunctions)
/* harmony export */ });
const helperFunctions = (() => {
    function toTitleCase(str) {
        return str.replace(
          /\w\S*/g,
          function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        );
    }

    return { toTitleCase }
})();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactAPI": () => (/* binding */ contactAPI),
/* harmony export */   "getWeather": () => (/* binding */ getWeather)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulator */ "./src/domManipulator.js");


async function contactAPI() {
    try {
        let city = document.getElementById('cityName').value
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=17cb72cb3bf794e208794e290c88cd94&units=${getRadioUnits()}`);
        const weatherData = await response.json()
        return weatherData
    } catch (error) {
        console.log(error)
    }
}

async function getWeather() {
    try {
        const weatherData = await contactAPI()
        const temp = weatherData.main.temp
        const visibility = weatherData.weather[0].description
        const supportingInfo = weatherData.main
        return {temp, visibility, supportingInfo}
    } catch (error) {
        console.log(error)
    }

}

function getRadioUnits() {
    if (document.getElementById('fahrenheitRadio').checked) {
        return 'imperial'
    } else {
        return 'metric'
    }
}

submitCity.addEventListener('click', () => {
    (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.insertWeather)()
})

document.addEventListener('click', (e) => {
    if(e.target.matches('#fahrenheitRadio') || e.target.matches('#celciusRadio')) {
        (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.insertWeather)()
    }
})



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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb21NYW5pcHVsYXRvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9oZWxwZXJGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFvQztBQUNlOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsa0RBQVU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MseUVBQTJCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1grQzs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0EseUZBQXlGLEtBQUssZ0RBQWdELGdCQUFnQjtBQUM5SjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksOERBQWE7QUFDakIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsUUFBUSw4REFBYTtBQUNyQjtBQUNBLENBQUM7Ozs7Ozs7O1VDMUNEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gXCIuL2luZGV4XCJcclxuaW1wb3J0IHsgaGVscGVyRnVuY3Rpb25zIH0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zXCJcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGluc2VydFdlYXRoZXIoKSB7XHJcbiAgICBjb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJJbmZvJylcclxuICAgIGNvbnN0IHN1cHBvcnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlclN1cHBvcnRpbmdJbmZvJylcclxuICAgIGNvbnN0IGRpdmlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2aWRlcicpXHJcbiAgICBjb25zdCB0ZW1wQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJUZW1wJylcclxuICAgIGNvbnN0IHdlYXRoZXJWaXNpYmlsaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJWaXNpYmlsaXR5JylcclxuICAgIGNvbnN0IGZlZWxzTGlrZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHNMaWtlJylcclxuICAgIGNvbnN0IGh1bWlkaXR5SW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eScpXHJcbiAgICBjb25zdCBsb3dUZW1wSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb3dUZW1wJylcclxuICAgIGNvbnN0IGhpZ2hUZW1wSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWdoVGVtcCcpXHJcbiAgICBcclxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlcigpXHJcbiAgICB3ZWF0aGVyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxyXG4gICAgc3VwcG9ydENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcclxuICAgIGRpdmlkZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGxldCB0ZW1wID0gd2VhdGhlckRhdGEudGVtcFxyXG4gICAgbGV0IHZpc2liaWxpdHkgPSB3ZWF0aGVyRGF0YS52aXNpYmlsaXR5XHJcbiAgICBsZXQgZmVlbHNMaWtlID0gd2VhdGhlckRhdGEuc3VwcG9ydGluZ0luZm8uZmVlbHNfbGlrZVxyXG4gICAgbGV0IGh1bWlkaXR5ID0gd2VhdGhlckRhdGEuc3VwcG9ydGluZ0luZm8uaHVtaWRpdHlcclxuICAgIGxldCBsb3dUZW1wID0gd2VhdGhlckRhdGEuc3VwcG9ydGluZ0luZm8udGVtcF9taW5cclxuICAgIGxldCBoaWdoVGVtcCA9IHdlYXRoZXJEYXRhLnN1cHBvcnRpbmdJbmZvLnRlbXBfbWF4XHJcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YS5zdXBwb3J0aW5nSW5mbylcclxuXHJcbiAgICB0ZW1wQ29udGFpbmVyLmlubmVySFRNTCA9IHRlbXAgKyAnXFx1MDBCMCdcclxuICAgIHdlYXRoZXJWaXNpYmlsaXR5LmlubmVySFRNTCA9IGhlbHBlckZ1bmN0aW9ucy50b1RpdGxlQ2FzZSh2aXNpYmlsaXR5KSBcclxuICAgIGZlZWxzTGlrZUluZm8uaW5uZXJIVE1MID0gZmVlbHNMaWtlICsgJ1xcdTAwQjAnXHJcbiAgICBodW1pZGl0eUluZm8uaW5uZXJIVE1MID0gaHVtaWRpdHkgKyBcIiVcIlxyXG4gICAgbG93VGVtcEluZm8uaW5uZXJIVE1MID0gbG93VGVtcCArICdcXHUwMEIwJ1xyXG4gICAgaGlnaFRlbXBJbmZvLmlubmVySFRNTCA9IGhpZ2hUZW1wICsgJ1xcdTAwQjAnXHJcbiAgICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IGluc2VydFdlYXRoZXIgfSIsImNvbnN0IGhlbHBlckZ1bmN0aW9ucyA9ICgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiB0b1RpdGxlQ2FzZShzdHIpIHtcclxuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoXHJcbiAgICAgICAgICAvXFx3XFxTKi9nLFxyXG4gICAgICAgICAgZnVuY3Rpb24odHh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0eHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eHQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyB0b1RpdGxlQ2FzZSB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBoZWxwZXJGdW5jdGlvbnMgfSIsImltcG9ydCB7IGluc2VydFdlYXRoZXIgfSBmcm9tIFwiLi9kb21NYW5pcHVsYXRvclwiXHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb250YWN0QVBJKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5TmFtZScpLnZhbHVlXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9MTdjYjcyY2IzYmY3OTRlMjA4Nzk0ZTI5MGM4OGNkOTQmdW5pdHM9JHtnZXRSYWRpb1VuaXRzKCl9YCk7XHJcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICByZXR1cm4gd2VhdGhlckRhdGFcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgY29udGFjdEFQSSgpXHJcbiAgICAgICAgY29uc3QgdGVtcCA9IHdlYXRoZXJEYXRhLm1haW4udGVtcFxyXG4gICAgICAgIGNvbnN0IHZpc2liaWxpdHkgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgY29uc3Qgc3VwcG9ydGluZ0luZm8gPSB3ZWF0aGVyRGF0YS5tYWluXHJcbiAgICAgICAgcmV0dXJuIHt0ZW1wLCB2aXNpYmlsaXR5LCBzdXBwb3J0aW5nSW5mb31cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSYWRpb1VuaXRzKCkge1xyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWhyZW5oZWl0UmFkaW8nKS5jaGVja2VkKSB7XHJcbiAgICAgICAgcmV0dXJuICdpbXBlcmlhbCdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICdtZXRyaWMnXHJcbiAgICB9XHJcbn1cclxuXHJcbnN1Ym1pdENpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpbnNlcnRXZWF0aGVyKClcclxufSlcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmKGUudGFyZ2V0Lm1hdGNoZXMoJyNmYWhyZW5oZWl0UmFkaW8nKSB8fCBlLnRhcmdldC5tYXRjaGVzKCcjY2VsY2l1c1JhZGlvJykpIHtcclxuICAgICAgICBpbnNlcnRXZWF0aGVyKClcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCB7IGNvbnRhY3RBUEksIGdldFdlYXRoZXIgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9