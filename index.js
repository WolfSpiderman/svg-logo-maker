const inquirer = require("inquirer");

// Questions to ask user
const questions = [
    {
        name: "text",
        message: "Insert up to three characters to be the text content of your symbol.",
        type: "input"
    },
    {
        name: "color",
        message: "What color would you like the text to be? Enter the name of a common color, or a hex-code.",
        type: "input"
    },
    {
        name: "shape",
        message: "What shape would you like the symbol to be?",
        type: "list",
        choices: ["circle", "square", "triangle"]
    },
    {
        name: "bgColor",
        message: "What color would you like the symbol's background, the shape, to be? Enter the name of a common color, or a hex-code.",
        type: "input"
    }
]



inquirer.prompt(questions).then(
    
)