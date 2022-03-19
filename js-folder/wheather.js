const API_KEY = "3edc621b2375494e428d942ebcd3c399";
const cityDisplay = document.querySelector(
  "#weather-container span:first-child"
);
const weatherDisplay = document.querySelector(
  "#weather-container span:nth-child(2)"
);
const tempDisplay = document.querySelector(
  "#weather-container span:last-child"
);

const success = function (locationObj) {
  const lat = locationObj.coords.latitude;
  const long = locationObj.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        const weatherObj = {
          temp: data.main.temp,
          city: data.name,
          weather: data.weather[0].main,
        };

        printWeather(weatherObj);
      })
    )
    .catch((error) => console.log("error:", error));
};

const fail = function () {
  alert("I can't find your location");
};

const printWeather = function (weatherObj) {
  cityDisplay.innerHTML = weatherObj.city;
  tempDisplay.innerHTML = weatherObj.temp;
  weatherDisplay.innerHTML = weatherObj.weather;
};

navigator.geolocation.getCurrentPosition(success, fail);
