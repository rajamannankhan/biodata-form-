import chalk from "chalk";
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name:"name",
        message:"enter your name",
        type:"input"
    },
    {
        name:"age",
        type:"number",
        message:"Enter your age",
    },
    {
        name:"gender",
        type:"list",
        choices:["male","female","others"],

        message:"What is your gender",
    },
    {
        name:"education",
        message:"Enter your education level",
        type:"list",
        choices:["MATRIC","INTERMEDIATE","GRADUATION"],
    },
    {
        name:"SPORTS",
        message:"ENTER YOUR FAVOURITE SPORTS",
        type:"input",

    },
])
console.log(chalk.bold.redBright("*<----BIODATA FORM---->*"));

console.log(chalk.bold.yellowBright("YOUR NAME IS:") +answer.name)
console.log(chalk.bold.greenBright("YOUR AGE IS:")+ answer.age)
console.log(chalk.bold.blueBright("YOUR GENDER IS :")+ answer.gender)
console.log(chalk.bold.magentaBright("YOUR EDUCATION LEVEL:")+answer.education);
console.log(chalk.bold.cyanBright("YOUR FAVOURITE SPORTS:")+answer.SPORTS);
