import { getWeather } from "./index"
import { helperFunctions } from "./helperFunctions"

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
    
    const weatherData = await getWeather()
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
    weatherVisibility.innerHTML = helperFunctions.toTitleCase(visibility) 
    feelsLikeInfo.innerHTML = feelsLike + '\u00B0'
    humidityInfo.innerHTML = humidity + "%"
    lowTempInfo.innerHTML = lowTemp + '\u00B0'
    highTempInfo.innerHTML = highTemp + '\u00B0'
    
}


export { insertWeather }