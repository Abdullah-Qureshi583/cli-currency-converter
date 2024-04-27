#! /usr/bin/env node

// Import inquirer and chalk
import inquirer from "inquirer";
import chalk from "chalk";

// Make an object of currencies conversion
let currency:any = {
    USD : 1, // base currency
    POUND : 0.79,
    PKR : 279,
    EURO : 0.93,
    INR : 83.40,
    BahrainiDinar : 0.38,
    TurkishLira : 32.51,
    EgyptianPound : 47.86
}

// taking input from user
const answers = await inquirer.prompt (
    [
        {
            name : "from",
            type : "list",
            message : "Convert currency from",
            choices : ["USD", "EURO", "PKR", "INR", "POUND", "BahrainiDinar", "TurkishLira", "EgyptianPound"]
        },
        {
            name : "to",
            type : "list",
            message : "Convert currency to",
            choices : ["USD", "EURO", "PKR", "INR", "POUND", "BahrainiDinar", "TurkishLira", "EgyptianPound"]
        },
        {
            name : "amount",
            type : "number",
            message : "Enter your amount",
        },
    ]
);

let userCurrency = answers.from;// user selected currency
let toCurrency = answers.to; // currency to convert
let fromAmount = currency[userCurrency];
let toAmount = currency[toCurrency];
let amount = answers.amount; // user entered amount
let baseAmount = amount / fromAmount ; // dollar
let convertedAmount = baseAmount * toAmount ;//user selected amount

//Printing currency conversion
console.log(`You convert ${amount} from ${userCurrency} to ${toCurrency} 
\n Your converted amount is ${convertedAmount}`);