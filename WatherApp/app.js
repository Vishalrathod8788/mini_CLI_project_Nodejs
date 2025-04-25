// Create Weather Application
import dotenv from "dotenv";
dotenv.config();
import readlineSync from "readline-sync";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const getWeather = async (city) => {
  const url = `${BASE_URL}?q=${city}&appid=${process.env.API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();

    console.log(data);

    // Add more detailed weather information
    console.log(`
Weather in ${city}:
Temperature: ${data.main.temp}°C
Feels like: ${data.main.feels_like}°C
Humidity: ${data.main.humidity}%
Weather: ${data.weather[0].description}
wind speed: ${data.wind.speed * 3.6} km/h
Visibility: ${data.visibility / 1000} km

sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}
    `);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

const city = readlineSync.question("Enter the City Name: ");
await getWeather(city);