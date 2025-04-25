// Create Weather Application

import readline from "readline-sync";

const BASH_ =
  "https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const city = rl.question("Enter the City Name: ");
await getWeather(city);
