const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.OPENWEATHER_API_KEY;

app.use(express.static(path.join(__dirname)));

app.get('/api/weather', async (req, res) => {
  const city = req.query.city || 'Minneapolis';
  if (!API_KEY) {
    return res.status(500).json({ error: 'API key not configured' });
  }
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=imperial&appid=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      return res.status(response.status).json({ error: await response.text() });
    }
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

