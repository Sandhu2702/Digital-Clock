const apiKey = "WeatherTest";
function getWeatherByCity() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) return alert("Please enter a city name!");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetchWeather(url);
}
function getWeatherByLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        fetchWeather(url);
      },
      () => {
        alert("Unable to retrieve your location.");
      }
    );
    } else {
    alert("Geolocation is not supported by your browser.");
  }
}
function fetchWeather(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const resultDiv = document.getElementById("weatherResult");

      if (data.cod !== 200) {
        resultDiv.innerHTML = `<p>❌ ${data.message}</p>`;
        return;
      }
      const weatherHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Feels Like:</strong> ${data.main.feels_like} °C</p>
        <p><strong>Weather:</strong> ${data.weather[0].main} - ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `;
      resultDiv.innerHTML = weatherHTML;
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
}