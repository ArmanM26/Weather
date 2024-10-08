const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
// Replace with your actual OpenWeatherMap API key
const API_KEY = "fd48bdf8a8b87b3c140f17625f4e2d57";

// Function to fetch weather data
function fetchWeatherData(city) {
  fetch(`${API_URL}${city}&appid=${API_KEY}&units=metric`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      // Update your UI with the fetched data
      const cityName = document.getElementById("city-name");
      const countryName = document.getElementById("country-name");
      const temperature = document.getElementById("temperature");

      cityName.textContent = data.name; // City name
      countryName.textContent = data.sys.country; // Country code
      temperature.textContent = `${data.main.temp} °C`; // Temperature
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Event listener for the search button
document.getElementById("search-button").addEventListener("click", function () {
  const inputValue = document.getElementById("city-input").value;
  fetchWeatherData(inputValue);
});

// Event listener for the Enter key
document
  .getElementById("city-input")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const inputValue = this.value;
      fetchWeatherData(inputValue);
    }
  });
