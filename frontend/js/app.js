document.getElementById("getWeather").addEventListener("click", async () => {
    const city = document.getElementById("city").value;
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Loading...";
  
    try {
      const response = await fetch(`http://localhost:5000/api/weather/${city}`);
      const data = await response.json();
  
      if (response.ok) {
        resultDiv.innerHTML = `
          <h2>${data.city}</h2>
          <p>Temperature: ${data.temperature}°C</p>
          <p>Description: ${data.description}</p>
        `;
      } else {
        resultDiv.innerHTML = `<p>${data.message}</p>`;
      }
    } catch (error) {
      resultDiv.innerHTML = "<p>Error fetching weather data.</p>";
    }
  });
  