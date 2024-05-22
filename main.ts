#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.cyanBright("Welcome to Age Calculator"));

let name = await inquirer.prompt([
  {
    name: "askquestion",
    type: "input",
    message: chalk.yellowBright("Please enter you name"),
  },
]);
let options = await inquirer.prompt([
  {
    name: "useroptions",
    type: "list",
    choices: ["Find age", "Find Born Year"],
    message: chalk.blueBright("Select any one"),
  },
]); 
if (options.useroptions === "Find age") {
  let bornyear = await inquirer.prompt([
    {
      name: "born",
      type: "input",
      message: chalk.yellowBright("Please enter your correct born year"),
    },
  ]);

  let currentyear = await inquirer.prompt([
    {
      name: "current",
      type: "input",
      message: chalk.greenBright("Please enter your correct current year"),
    },
  ]);
  if (bornyear.born < currentyear.current) {
    let final = currentyear.current - bornyear.born;
    console.log(chalk.magentaBright(`${name.askquestion} your age is ${final}`));
  } else if (bornyear.born > currentyear.current) {
    console.log(chalk.redBright("Re enter your correct bornyear and age"));
  } else if (bornyear.born === currentyear.current) {
    console.log(chalk.redBright("Re enter your correct bornyear and age"));
  }
} else if (options.useroptions === "Find Born Year") {
  let currentage = await inquirer.prompt([
    {
      name: "age",
      type: "input",
      message: chalk.yellowBright("Please enter you age"),
    },
  ]);
  let currentyears = await inquirer.prompt([
    {
      name: "findecurrentyear",
      type: "input",
      message: chalk.yellowBright("Please enter your current year"),
    },
  ]);
  if (currentage.age < currentyears.findecurrentyear) {
    let findborn = currentyears.findecurrentyear - currentage.age;
    console.log(chalk.magentaBright(`${name.askquestion} your age is ${findborn}`));
  } else if (currentage.age === currentyears.findecurrentyear) {
    console.log(chalk.redBright("Re enter your correct bornyear and age"));
  } else if (currentyears.findecurrentyear < currentage.age) {
    console.log(chalk.redBright("Re enter your correct bornyear and age"));
  } else {
    console.log("I think the mistake in my code Sorry");
  }
} else {
  console.log("I think the mistake in my code Sorry");
}
