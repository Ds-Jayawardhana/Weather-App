const apikey = "a4fbebc8ac2800a4aab0193942e40f5b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather() {
    const response = await fetch(`${apiurl}&appid=${apikey}`);
    const data = await response.json();

    console.log(data);
}

checkWeather();
