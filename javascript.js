const apiKey = "84d628116bd879716a2efad6bba9f224";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    if (!city || !city.trim()) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }

    const response = await fetch(apiUrl + city.trim() + `&appid=${apiKey}`);

    if (!response.ok) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }

    const data = await response.json();
    console.log(data);

    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity-value").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-value").innerHTML = data.wind.speed + " km/h";

    const condition = data.weather[0].main.toLowerCase();

    if (condition === "clouds") {
        weatherIcon.src = "cloud.webp";
    } else if (condition === "clear") {
        weatherIcon.src = "clear.webp";
    } else if (condition === "rain") {
        weatherIcon.src = "rain.png";
    } else if (condition === "drizzle") {
        weatherIcon.src = "drizzle.webp";
    } else if (condition === "mist") {
        weatherIcon.src = "mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        checkWeather(searchBox.value);
    }
});