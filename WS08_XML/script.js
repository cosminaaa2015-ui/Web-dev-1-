// Workshop 08: Parsing XML with JavaScript
// GitHub repository: https://github.com/cosminaa2015-ui/Web-dev-1
// Workshop folder: WS08_XML
// OpenWeatherMap API key
const WEATHER_API_KEY = "YOUR_API_KEY";
// Exercise 1: Fetch raw XML weather data
function fetchWeather(city = "Helsinki") {
    const output = document.getElementById("weatherdata");
    output.textContent = "Loading weather data...";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" +
    encodeURIComponent(city) +
    "&units=metric&mode=xml&appid=" + WEATHER_API_KEY;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error: " + response.status);
            }
            return response.text();
        })
        .then(data => {
    // Convert XML text into an XML document
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "application/xml");
    // Extract weather information
    const city = xmlDoc.querySelector("city").getAttribute("name");
    const temperature = xmlDoc.querySelector("temperature").getAttribute("value");
    const humidity = xmlDoc.querySelector("humidity").getAttribute("value");
    const clouds = xmlDoc.querySelector("clouds").getAttribute("value");
    // Display the weather information
    output.innerHTML =
        "<h3>Weather in " + city + "</h3>" +
        "<p>Temperature: " + temperature + "°C</p>" +
        "<p>Humidity: " + humidity + "%</p>" +
        "<p>Cloud cover: " + clouds + "%</p>";
})
        .catch(error => {
            output.textContent = "Error loading weather data.";
            console.error(error);
        });
}
// Search for weather using a city name
function searchWeather() {
    const cityInput = document.getElementById("citysearch");
    const city = cityInput.value.trim();

    // Check if the input is empty
    if (city === "") {
        document.getElementById("weatherdata").textContent =
            "Please enter a city name.";
        return;
    }

    // Fetch weather for the entered city
    fetchWeather(city);
}