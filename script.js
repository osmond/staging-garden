const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const themeToggle = document.querySelector('.theme-toggle');
    const isDarkMode = body.classList.contains('dark-mode');
    themeToggle.setAttribute('aria-pressed', isDarkMode.toString());
    themeToggle.setAttribute('aria-label', isDarkMode ? "Switch to light mode" : "Switch to dark mode");
    const newTheme = isDarkMode ? 'dark' : 'light';
    try {
        localStorage.setItem('theme', newTheme);
    } catch (e) {
        // Ignore private browsing errors
    }
};

function initTheme() {
    const storedTheme = (() => {
        try {
            return localStorage.getItem('theme');
        } catch (e) {
            return null;
        }
    })();
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    if (storedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.setAttribute('aria-pressed', 'true');
        themeToggle.setAttribute('aria-label', 'Switch to light mode');
    } else {
        themeToggle.setAttribute('aria-pressed', 'false');
        themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    }
}

function updateGreeting() {
    const greetingElement = document.getElementById('greeting');
    const hour = new Date().getHours();
    let greeting = 'Hello';
    if (hour < 12) greeting = 'Good Morning';
    else if (hour < 18) greeting = 'Good Afternoon';
    else greeting = 'Good Evening';
    greetingElement.textContent = `${greeting}`;
}

async function fetchWeather() {
    const weatherElement = document.getElementById('weather');
    const city = 'Minneapolis';
    const url = `/api/weather?city=${encodeURIComponent(city)}`;
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(res.status);
        const data = await res.json();
        const temp = data.main.temp;
        const desc = data.weather[0].description;
        const icon = data.weather[0].icon;
        weatherElement.innerHTML = `
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}" title="${desc}">
            <span>${city}: ${temp.toFixed(1)}°F, ${desc}</span>
        `;
    } catch {
        weatherElement.textContent = 'Unable to retrieve weather data.';
    }
}

function updateTime() {
    const timeElement = document.getElementById('current-time');
    timeElement.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
}

initTheme();
updateGreeting();
updateTime();
setInterval(updateTime, 1000);
fetchWeather();
setInterval(fetchWeather, 600000);
