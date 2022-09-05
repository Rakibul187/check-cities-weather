const loadTemperature = city => {
    const apiKey = 'd108b993d4517b6c91aa5073dd8e8295'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperaure(data))
}
// display weather
const displayTemperaure = weather => {
    const temperatureField = document.getElementById('temperature');
    temperatureField.innerText = weather.main.temp
    // weather set 
    document.getElementById('weather').innerText = weather.weather[0].main
    // set city 
    document.getElementById('city-name').innerText = weather.name
}

// wather search click event handler
document.getElementById('btn-search').addEventListener('click', function () {
    const city = document.getElementById('btn-field').value;
    document.getElementById('btn-field').value = '';
    loadTemperature(city)
})

// wather search enter event handler
document.getElementById('btn-field').addEventListener('keypress', function (event) {
    const city = document.getElementById('btn-field').value;
    document.getElementById('btn-field').value = '';
    if (event.key === 'Enter') {
        loadTemperature(city)
    }
})
// by default weather set
loadTemperature('london')