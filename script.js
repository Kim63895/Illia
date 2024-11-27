document.querySelector('button').addEventListener('click', () => {
   fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=50.4504&lon=30.5245&units=metric&appid=b35ae478ca251ae31c4e7d589000a87b"
)
  .then((response) => {
    if(!response.ok) {
      throw new Error("Http error")
    }
    return response.json();
  })
  .then((data) => {
    const block = document.querySelector("h4");
    const h3 = document.querySelector("h3");
    const h2 = document.querySelector("h2");
    const city = document.getElementById("city");
    const currentWind = document.getElementById("current-wind");

    const temperature = Math.round(data.main.temp);
    const unixTime = data.dt + data.timezone;
    const dateObj = new Date(unixTime * 1000);
    const utcString = dateObj.toUTCString();
    const cityName = data.name;
    const humidity = data.main.humidity;
    const main = data.weather[0].main;
    const description = data.weather[0].description;
    const wind = Math.round(data.wind.speed);

    currentWind.textContent = `Wind: ${wind} m/s`;
    city.textContent = `${cityName} ${utcString}.`;
    h2.textContent = `description: ${description}.`;
    block.textContent = `humidity: ${humidity}%. `;
    h3.textContent = `Current weather: ${main} Temperature: ${temperature}°C.`;
  })
     .catch((error) => {
      console.error("Error fetching weather data:", error);
      const errorBlock = document.getElementById("error-message");
      errorBlock.textContent = "Failed to fetch weather data. Please try again later.";
    })
})
