const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const getWeatherBtn = document.getElementById('getWeatherBtn');
const cityInput = document.getElementById('cityInput');
const weatherData = document.getElementById('weatherData');

getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const temperature = (data.main.temp - 273.15).toFixed(2); // Convert to Celsius
            const weatherDescription = data.weather[0].description;
            const cityName = data.name;
            weatherData.innerHTML = `
                <h2>${cityName}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Weather: ${weatherDescription}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
