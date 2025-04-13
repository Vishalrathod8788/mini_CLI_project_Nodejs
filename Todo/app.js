import Readline from "readline";

const rl = Readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [];

const showMenu = () => {
  console.log("1. Add Todo");
  console.log("2. View Todos");
  console.log("3. Delete Todo");
  console.log("4. Exit");

  rl.question("Choose an option: ", handleInput);
};

const handleInput = (input) => {
  if (input === "1") {
    rl.question("Enter todo:", (todo) => {
      todos.push(todo);
      console.log(`Todo added: ${todo}`);
      showMenu();
    });
  } else if (input === "2") {
    console.log("Todos:");
    todos.map((todo, index) => {
      console.log(`${index + 1}. ${todo}`);
    });
    rl.question("Press enter to continue...", () => {
      showMenu();
    });
  } else if (input === "3") {
    rl.question("Enter todo index to delete: ", (index) => {
      if (index < todos.length && index >= 0) {
        todos.splice(index - 1, 1);
        console.log("Todo deleted");
        showMenu();
      }
    });
  } else if (input === "4") {
    rl.close();
  } else {
    console.log("Invalid option");
    showMenu();
  }
};

showMenu();
