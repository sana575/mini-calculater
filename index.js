#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\nWelcome to our Mini calculator\n ");
let myloop = true;
while (myloop) {
    let userInput = await inquirer.prompt([
        {
            type: "number",
            name: "num1", //Q1
            message: "Enter your first number!"
        },
        {
            type: "number",
            name: "num2", //Q2
            message: "Enter your second number!"
        },
        {
            type: "list",
            name: "operator",
            message: "select the operator",
            choices: ["addition", "subtrection", "multiplication", "divion"] //Q3
        },
    ]); //(yaha inquirer ka kam end ho gaya he)
    let { num1, num2, operator } = userInput; //    <==this method call destructuring
    if (operator === "addition")
        add();
    if (operator === "subtraction")
        sub();
    if (operator === "multiplication")
        multiply();
    if (operator === "Divion")
        Divide();
    function add() {
        console.log(`\n${num1} + ${num2} = ${num1 + num2}`);
    }
    function sub() {
        console.log(`\n${num1} - ${num2} = ${num1 - num2}`);
    }
    function multiply() {
        console.log(`\n${num1} x ${num2} = ${num1 * num2}`);
    }
    function Divide() {
        console.log(`\n${num1} / ${num2} = ${num1 / num2}`);
    }
    //for more calculations
    let calculateAgain = await inquirer.prompt({
        type: "confirm",
        name: "more",
        message: "Do you want more calculations?",
        default: false
    });
    if (!calculateAgain.more) {
        myloop = false;
        console.log("\nThank you for using Mini calculator!");
    }
}
;
