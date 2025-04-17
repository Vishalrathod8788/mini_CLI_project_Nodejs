import https from "https";
import chalk from "chalk";

const getJoke = async () => {
  const url = "https://official-joke-api.appspot.com/random_joke";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}`);
    }

    const data = await response.json();
    // console.log(data);
    const { type, setup, punchline } = data;

    console.log(`\n${chalk.cyanBright("Here's a random joke for you!")}\n`);
    console.log(`${chalk.magenta("Type")}: ${chalk.blue(type)}`);
    console.log(`${chalk.magenta("Setup")}: ${chalk.green(setup)}`);
    console.log(`${chalk.magenta("Punchline")}: ${chalk.yellow(punchline)}\n`);
  } catch (error) {
    console.error(chalk.red("Failed to fetch joke:"), error.message);
  }
};
getJoke();
