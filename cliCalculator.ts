#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

// function for main calculator
let answers;
let calculator = async () => {
  answers = await inquirer.prompt([
    {
      name: "operator",
      type: "list",
      choices: ["+", "-", "*", "/"],
      message:
        "What do you want to do? Select your operation from the list below.",
    },
    {
      name: "value1",
      type: "number",
      message: "Write first value: ",
    },
    {
      name: "value2",
      type: "number",
      message: "Write second value: ",
    },
  ]);
  if (answers.operator === "+") {
    console.log(
      `${answers.value1} + ${answers.value2} = ` +
        (answers.value1 + answers.value2)
    );
  } else if (answers.operator === "-") {
    console.log(
      `${answers.value1} - ${answers.value2} = ` +
        (answers.value1 - answers.value2)
    );
  } else if (answers.operator === "*") {
    console.log(
      `${answers.value1} * ${answers.value2} = ` +
        answers.value1 * answers.value2
    );
  }
  if (answers.operator === "/") {
    console.log(
      `${answers.value1} / ${answers.value2} = ` +
        answers.value1 / answers.value2
    );
  }
};
let confirm;
do {
  await calculator();
  confirm = await inquirer.prompt([
    {
      name: "confirm",
      type: "confirm",
      message: "Do you want to continue? ",
    },
  ]);
} while (confirm.confirm);
console.log(
  chalk.redBright.bold(`
Thank you!
Submitted by: Muhammad Tahir Iqbal.
PIAIC 228935 Badge: 52. Lahore, Pakistan.
`)
);