// Exercise 1: JSON Basics
const text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
const data = JSON.parse(text);
// Display employee first and last names
function showNames() {
    const output = document.getElementById("jsondata");
    let result = "";
    for (let employee of data.employees) {
        result += employee.firstName + " " + employee.lastName + "<br>";
    }
    output.innerHTML = result;
}
// Display all employee details
function showDetails() {
    const output = document.getElementById("jsondata");
    let result = "";
    for (let employee of data.employees) {
        result += "First Name: " + employee.firstName + "<br>";
        result += "Last Name: " + employee.lastName + "<br><br>";
    }
    output.innerHTML = result;
}
// Exercise 2: Fetching JSON from the web
function loadRawData() {
    const output = document.getElementById("rawdata");
    fetch("https://www.omdbapi.com/?s=star+wars&apikey=cbbc6750")
        .then(response => response.text())
        .then(data => {
            output.textContent = data;
        })
        .catch(error => {
            output.textContent = "Error loading data.";
            console.error(error);
        });
}
// Exercise 2: Load and parse movie data
function loadParsedData() {
    const output = document.getElementById("rawdata");
    fetch("https://www.omdbapi.com/?s=star+wars&apikey=cbbc6750")
        .then(response => response.json())
        .then(data => {
            let result = "<table border='1'>";
            result += "<tr><th>Title</th><th>Year</th><th>Poster</th></tr>";
            for (let movie of data.Search) {
                result += "<tr>";
                result += "<td>" + movie.Title + "</td>";
                result += "<td>" + movie.Year + "</td>";
                result += "<td><img src='" + movie.Poster + "' width='80' alt='Movie poster'></td>";
                result += "</tr>";
            }
            result += "</table>";
            output.innerHTML = result;
        })
        .catch(error => {
            output.textContent = "Error loading movie data.";
            console.error(error);
        });
}
// Exercise 3: Fetch weather data for Helsinki
function fetchWeather(city = "Helsinki") {
    const output = document.getElementById("weatherdata");
    output.textContent = "Loading weather data..."
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" +
    encodeURIComponent(city) +
    "&units=metric&appid=" + WEATHER_API_KEY;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error: " + response.status);
            }
            return response.json();
        })
        .then(data => {
            output.innerHTML =
    "<h3>Weather in " + data.name + "</h3>" +
    "<p>Temperature: " + data.main.temp + "°C</p>" +
    "<p>Humidity: " + data.main.humidity + "%</p>" +
    "<p>Cloud cover: " + data.clouds.all + "%</p>";
        })
        .catch(error => {
            output.textContent = "Error loading weather data.";
            console.error(error);
        });
}
// Search for weather by city name
function searchWeather() {
    const cityInput = document.getElementById("citysearch");
    const city = cityInput.value.trim();
    if (city === "") {
        document.getElementById("weatherdata").textContent =
            "Please enter a city name.";
        return;
    }
    fetchWeather(city);
}