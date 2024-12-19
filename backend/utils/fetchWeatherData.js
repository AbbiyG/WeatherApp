const axios = require("axios");

const fetchWeatherData = async (city) => {
  const API_KEY = process.env.WEATHER_API_KEY;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await axios.get(url);
  const { temp } = response.data.main;
  const { description } = response.data.weather[0];

  return { city, temperature: temp, description };
};

module.exports = fetchWeatherData;
