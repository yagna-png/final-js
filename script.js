// Lodash
import _update from 'lodash/update';
const { update } = require("lodash")

const cityInput = document.querySelector('.city-input')
const searchBtn = document.querySelector('.search-btn')

const weatherInfoSection = document.querySelector('.weather-info')
const notFoundSection = document.querySelector('.not-found')
const searchCitySection = document.querySelector('.search-city')

const apiKay = '2dcae6e892c91d6bf1801ad24bdf9d16'


searchBtn.addEventListener('click', () =>{
    if (cityInput.value.trim() !=''){
    updateWeatherInfo(cityInput.value)
    cityInput.value = ''
    cityInput.blur()
    }
})
cityInput.addEventListener('keydown', (event) =>{
    if (event.key == 'Enter' && cityInput.value.trim() != ''
){
    updateWeatherInfo(cityInput.value)
    cityInput.value = ''
    cityInput.blur()
}
})


async function getFetchData(endPoint, city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/${ndPoint}?q=${city}&appid=${apiKey}&units=metric`
    const response =  await fetch(apiUrl)

    return response.json()
}

async function updateWeatherInfo(city){
    const weatherData = await getFetchData('weather', city)

    if (weatherData.cod !=200){
        showDisplaySection(notFoundSection)
        return
    } 
    console.log(weatherData)
    showDisplaySection(weatherInfoSection)
}
function showDisplaySection(section){
   [weatherInfoSection, searchCitySection,notFoundSection]
   .forEach(section => section.computedStyleMap.display = 'none')
   section.styledisplay = 'flex'
}