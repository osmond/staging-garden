# Staging Garden

This repository contains the source files for a simple personal homepage. The page is entirely static and relies only on HTML, CSS and a bit of JavaScript.

## Features

* Responsive design with a dark‑mode toggle
* Variable font loading using `ABCArizonaPlusVariable` (files included in the repo)
* Greeting message based on the current time of day
* Current time display updated every second
* Weather widget powered by the OpenWeather API

## Running locally

No build step is required. Any static file server will work. For quick testing you can run:

```bash
npx http-server .
```

Then open [http://localhost:8080](http://localhost:8080) in your browser. Alternatively, you can simply open `index.html` directly if you do not need the weather widget (which requires an internet connection).

## Customization

The weather widget fetches data for **Minneapolis** using an API key included inline in `index.html`. If you plan to deploy your own copy you should supply your own key and consider moving the request to a backend service.

## License

This project does not currently include an explicit license. All fonts and images are provided for demonstration purposes.
