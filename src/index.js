//Feature #1
//In your project, display the current date and time using JavaScript: Tuesday 16:00
function formatDate(date) {
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[dayIndex];

  return `${day}, ${hour}:${minute}`;
}
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#pressure").innerHTML = Math.round(
    response.data.main.pressure
  );
  document.querySelector("#humidity").innerHTML = Math.round(
    response.data.main.humidity
  );
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main; //let weatherDiv = document.querySelector("#temperature");
  //let temperature = Math.round(response.data.main.temp);
  //let description = response.data.weather[0].description;
  //weatherDiv.innerHTML = `${temperature}, ${description} `;
}
function searchCity(city) {
  let key = "58052cb4c21017f91e272601042f5231";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

let enterCity = document.querySelector("#search-form");
enterCity.addEventListener("submit", handleSubmit);

function searchLocation(position) {
  let key = "58052cb4c21017f91e272601042f5231";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${key}&units=metric`;
  //position.coords.latitude
  //position.coords.longitude
  axios.get(apiUrl).then(displayWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperaturaElement = document.querySelector("#temperature");
  temperaturaElement.innerHTML = 55;
}
function convertToCelsium(event) {
  event.preventDefault();
  let temperaturaElement = document.querySelector("#temperature");
  temperaturaElement.innerHTML = 13;
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Kyiv");
//👨‍🏫 Your task/ In your project, when a user searches for a city (example: New York), it should display the name of the city on the result page and the current temperature of the city.
