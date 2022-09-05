const loadTemperature = city => {
    const apiKey = 'd108b993d4517b6c91aa5073dd8e8295'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperaure(data))
}


const displayTemperaure = weather => {
    console.log(weather)
    const temperatureField = document.getElementById('temperature');
    temperatureField.innerText = weather.main.temp
    // weather set 
    document.getElementById('weather').innerText = weather.weather[0].main
    // set city 
    document.getElementById('city-name').innerText = weather.name
}

document.getElementById('btn-search').addEventListener('click', function () {
    const city = document.getElementById('btn-field').value;
    loadTemperature(city)
})

loadTemperature('london')





































/* const API_KEY = 'd108b993d4517b6c91aa5073dd8e8295'

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const displayTemperature = data => {
    const temperatureField = document.getElementById('temperature');
    temperatureField.innerText = data.main.temp
    console.log(data.main.temp)
}

document.getElementById('btn-search').addEventListener('click', function () {
    const btnField = document.getElementById('btn-field');
    const city = btnField.value;
    btnField.value = '';

    document.getElementById('city-name').innerText = city;
    loadTemperature(city)
}) */

// loadTemperature('dhaka')