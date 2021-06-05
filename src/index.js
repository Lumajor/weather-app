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