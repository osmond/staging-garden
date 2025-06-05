# Staging Garden

This repository contains the source files for a simple personal homepage. The page is entirely static and relies only on HTML, CSS and a bit of JavaScript.

## Features

* Responsive design with a dark‑mode toggle
* Variable font loading using `ABCArizonaPlusVariable` (files included in the repo)
* Greeting message based on the current time of day
* Current time display updated every second
* Weather widget powered by the OpenWeather API

## Running locally

Install the dependencies and start the included Express server:

```bash
npm install
npm start
```

The server serves the static files and exposes an `/api/weather` endpoint used by the weather widget. Open [http://localhost:3000](http://localhost:3000) in your browser once the server is running.

## Customization

The weather widget fetches data for **Minneapolis** via the `/api/weather` endpoint. Provide your own OpenWeather API key by creating a `.env` file at the project root:

```env
OPENWEATHER_API_KEY=your_key_here
```

You can change the default city inside `script.js` or pass a `city` query parameter to the endpoint.

## License

This project does not currently include an explicit license. All fonts and images are provided for demonstration purposes.
