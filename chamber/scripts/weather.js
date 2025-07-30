const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('.current-temp');
const captionDesc = document.querySelector('#weather-description');
const weatherToday = document.querySelector('#weather-today');
const weatherTomorrow = document.querySelector('#weather-tomorrow');
const weatherTwoDays = document.querySelector('#weather-two-days');

const key = "800926848f2f3ca6025f737ee5afe86c";
const lat = 33.52400745538797;
const long = 9.808438587303431;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=imperial`;

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&units=imperial`;

async function apiCurrentFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayCurrentResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function apiForecastFetch() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayForecastResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayCurrentResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    desc = desc.charAt(0).toUpperCase() + desc.slice(1);
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

function displayForecastResults(data) {
    let todayDesc = data.list[0].weather[0].description;
    todayDesc = todayDesc.charAt(0).toUpperCase() + todayDesc.slice(1);

    let tomorrowDesc = data.list[1].weather[0].description;
    tomorrowDesc = tomorrowDesc.charAt(0).toUpperCase() + tomorrowDesc.slice(1);

    let twoDaysDesc = data.list[2].weather[0].description;
    twoDaysDesc = twoDaysDesc.charAt(0).toUpperCase() + twoDaysDesc.slice(1);

    weatherToday.innerHTML = ` H: ${Math.round(data.list[0].main.temp_max)}&deg;F, L: ${Math.round(data.list[0].main.temp_min)}&deg;F, ${todayDesc}`;
    weatherTomorrow.innerHTML = ` H: ${Math.round(data.list[1].main.temp_max)}&deg;F, L: ${Math.round(data.list[1].main.temp_min)}&deg;F, ${tomorrowDesc}`;
    weatherTwoDays.innerHTML = ` H: ${Math.round(data.list[2].main.temp_max)}&deg;F, L: ${Math.round(data.list[2].main.temp_min)}&deg;F, ${twoDaysDesc}`
}

apiCurrentFetch();
apiForecastFetch();