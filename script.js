let weather = {
    apiKey: '26a847e3885eb255a904f5167027ed27',
    fetchWeather: function (cityName) { //unknown function
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${this.apiKey}`)
            .then(response => response.json())
            .then((data) => this.displayWeather(data))
    },
    displayWeather: function (data) {
        const { name } = data
        const { icon, description } = data.weather[0]
        const { speed } = data.wind
        const { humidity, temp } = data.main
        document.getElementById('weatherCity').innerText = `Weather in ${name}`
        document.getElementById('cityTemp').innerText = `${temp}°C`
        document.getElementById('weatherImg').innerHTML = `<img src= https://openweathermap.org/img/wn/${icon}@2x.png />`
        document.getElementById('cityWeather').innerText = description.toUpperCase()
        document.getElementById('cityHumidity').innerText = `Humidity : ${humidity}%`
        document.getElementById('cityWind').innerText = `Wind : ${speed} km/h`
        document.getElementById('weatherImg').style.display = 'block'
        document.querySelector('.weatherInfo').classList.remove('loading')
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/landscape/?" + description + "')"
    }
}

const searchByCity = () => {
    weather.fetchWeather(document.getElementById('searchCity').value)
}
document.getElementById('searchCity').addEventListener("keyup", function (event) {
    if (event.key == 'Enter') {
        searchByCity()
    }
})

weather.fetchWeather('Pune')