const axios = require("axios");
const generateAdvisory = require("../utils/advisoryLogic");

exports.getWeather = async (req, res) => {
  try {
    const location = req.query.location;

    if (!location)
      return res.status(400).json({ error: "Location is required" });

    const apiKey = process.env.WEATHER_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`;

    const result = await axios.get(url);

    const list = result.data.list;

    // Extract current weather (first 3-hour block)
    const current = list[0];

    const weatherData = {
      temp: current.main.temp,
      humidity: current.main.humidity,
      wind: current.wind.speed,
      pop: current.pop,
      forecast: list.slice(0, 8).map((slot) => ({
        time: slot.dt_txt,
        temp: slot.main.temp,
        pop: slot.pop,
      })),
    };

    const advisory = generateAdvisory(weatherData);

    res.json({ ...weatherData, advisory });
  } catch (err) {
    return res.status(500).json({ error: "Invalid location or API error" });
  }
};
