

const apiKey = `555aa93efc424842a2575356240912`;  

async function getWeather() {
    const place = document.getElementById("placeInput").value;
    const weatherResult = document.getElementById("weatherResult");

    if (place == "") {
        weatherResult.innerHTML = "<p>Please enter a place name.</p>";
        return;
    }

    
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=555aa93efc424842a2575356240912&q=${place}&aqi=no`);
    
        const data = await response.json();

        if (data.cod === "404") {
            weatherResult.innerHTML = "<p>City not found. Please try again.</p>";
        } else {
            const weatherData = `
                <h3>Weather in ${data.name}</h3>
                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            `;
            weatherResult.innerHTML = weatherData;
        }
    } catch (error) {
        weatherResult.innerHTML = "<p>Unable to fetch data. Please try again later.</p>";
    }
}
