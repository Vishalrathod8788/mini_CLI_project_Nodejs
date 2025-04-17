import fs from "fs";
import readline from "readline";

console.log("1. Create File");
console.log("2. Read File");
console.log("3. Delete File");
console.log("4. Exit");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Choose an option: ", (input) => {
  fileHandler(input);
});

const fileHandler = (input) => {
  if (input === "1") {
    rl.question("Enter File Name: ", (fileName) => {
      rl.question("Enter File Content: ", (fileContent) => {
        fs.writeFile(fileName, fileContent, (err) => {
          if (err) {
            console.log("Error:", err);
          } else {
            console.log(`${fileName}.txt created successfully.`);
          }
          rl.close();
        });
      });
    });
  } else if (input === "2") {
    rl.question("Enter File Name: ", (fileName) => {
      fs.readFile(fileName, "utf-8", (err, data) => {
        if (err) {
          console.log("Error:", err);
        } else {
          console.log("File Content:", data);
        }
        rl.close();
      });
    });
  } else if (input === "3") {
    rl.question("Enter File Name: ", (fileName) => {
      fs.unlink(fileName, (err) => {
        if (err) {
          console.log("Error:", err);
        } else {
          console.log(`${fileName}.txt deleted successfully.`);
        }
        rl.close();
      });
    });
  } else if (input === "4") {
    rl.close();
  } else {
    console.log("Invalid Option");
    rl.close();
  }
};
