const Weather = require("../models/weather");
const fetchWeatherData = require("../utils/fetchWeatherData");

const getWeather = async (req, res) => {
  const { city } = req.params;
  try {
    const weather = await fetchWeatherData(city);
    const savedWeather = await Weather.create(weather);
    res.status(200).json(savedWeather);
  } catch (error) {
    res.status(500).json({ message: "Error fetching weather data", error });
  }
};

module.exports = { getWeather };
