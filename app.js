document.getElementById("get-weather-btn").addEventListener("click", function() {
  const city = document.getElementById("city-input").value;
  const apiKey = "5302facf75a7400b941100616251703"; // Use your API key
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Check if the city exists in the response
      if (data.error) {
        alert("City not found, please try again.");
      } else {
        // Update the DOM with weather information
        document.getElementById("city-name").textContent = `${data.location.name}, ${data.location.country}`;
        document.getElementById("temperature").textContent = `Temperature: ${data.current.temp_c}°C`;
        document.getElementById("condition").textContent = `Condition: ${data.current.condition.text}`;
        document.getElementById("air-quality").textContent = `Air Quality: ${data.current.air_quality.pm10} PM10`;
      }
    })
    .catch(error => {
      alert("An error occurred while fetching the weather data.");
    });
});

  
