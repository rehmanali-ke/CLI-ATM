#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1001;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin Code",
        type: "number",
    },
]);
if (myPin == pinAnswer.pin) {
    console.log("Pin code Verified");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["Withdraw", "Fast Cash", "Balance Inquiry"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "Enter Your Amount",
                type: "number",
            }]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Fast Cash") {
        let fast = await inquirer.prompt([{
                name: "fastCash",
                message: "Select Your Amount",
                type: "list",
                choices: [500, 1000, 2000, 3000, 4000, 5000, 8000, 10000, 15000]
            }]);
        if (fast.fastCash > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= fast.fastCash;
            console.log(`You have succesfully withdraw ${fast.fastCash} \nYour remaining balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Balance Inquiry") {
        console.log(`Your Current Balance is ${myBalance}`);
    }
}
else {
    console.log("Invalid Pin Code");
}
