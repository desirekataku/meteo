const apiKey = 'b004b632c6c88a8fed72e43175acc0ec'; // Remplacez par votre clé API OpenWeather
const searchButton = document.getElementById('search-button');
const cityInput = document.getElementById('city-input');
const weatherResult = document.getElementById('weather-result');

searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetchWeather(city);
    }
});

function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ville non trouvée');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            weatherResult.innerHTML = `<p>${error.message}</p>`;
        });
}

function displayWeather(data) {
    const { name, main, weather } = data;
    weatherResult.innerHTML = `
        <h2>${name}</h2>
        <p>Température : ${main.temp} °C</p>
        <p>Conditions : ${weather[0].description}</p>
    `;
}