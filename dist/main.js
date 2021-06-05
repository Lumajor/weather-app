/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
async function contactAPI() {
    let city = document.getElementById('cityName').value
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=17cb72cb3bf794e208794e290c88cd94&units=imperial`);
    const weatherData = await response.json();
    return weatherData
}

async function getWeather() {
    const weatherData = await contactAPI()
    const temp = weatherData.main.temp
    const visibility = weatherData.weather[0].main
    console.log(temp, visibility)
}

submitCity.addEventListener('click', () => {
    getWeather();
})
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQSxxRkFBcUYsS0FBSztBQUMxRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGNvbnRhY3RBUEkoKSB7XHJcbiAgICBsZXQgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5TmFtZScpLnZhbHVlXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0xN2NiNzJjYjNiZjc5NGUyMDg3OTRlMjkwYzg4Y2Q5NCZ1bml0cz1pbXBlcmlhbGApO1xyXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gd2VhdGhlckRhdGFcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcigpIHtcclxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgY29udGFjdEFQSSgpXHJcbiAgICBjb25zdCB0ZW1wID0gd2VhdGhlckRhdGEubWFpbi50ZW1wXHJcbiAgICBjb25zdCB2aXNpYmlsaXR5ID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5tYWluXHJcbiAgICBjb25zb2xlLmxvZyh0ZW1wLCB2aXNpYmlsaXR5KVxyXG59XHJcblxyXG5zdWJtaXRDaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZ2V0V2VhdGhlcigpO1xyXG59KSJdLCJzb3VyY2VSb290IjoiIn0=