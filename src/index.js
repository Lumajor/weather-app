import { insertWeather } from "./domManipulator"

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
    insertWeather()
})

document.addEventListener('click', (e) => {
    if(e.target.matches('#fahrenheitRadio') || e.target.matches('#celciusRadio')) {
        insertWeather()
    }
})

export { contactAPI, getWeather }