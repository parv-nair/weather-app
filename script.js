const apiKey = "YOUR_API_KEY"; // Get it from https://openweathermap.org/api

function getWeather() {
  const city = document.getElementById("cityInput").value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then((res) => res.json())
    .then((data) => {
      const weatherInfo = `
        <h2>${data.name}</h2>
        <p>🌡️ Temp: ${data.main.temp}°C</p>
        <p>🌬️ Wind: ${data.wind.speed} m/s</p>
        <p>🌧️ Weather: ${data.weather[0].description}</p>
      `;
      document.getElementById("weatherResult").innerHTML = weatherInfo;
    })
    .catch(() => {
      document.getElementById("weatherResult").innerHTML = "City not found!";
    });
}
