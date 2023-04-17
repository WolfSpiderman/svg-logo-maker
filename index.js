const inquirer = require("inquirer");
const colorString = require('color-string');
const { Shape, Circle, Square, Triangle } = require('./lib/shapes');

// Questions to ask user
const questions = [
    {
        name: "text",
        message: "Insert up to three characters to be the text content of your symbol.",
        type: "input",
        validate: function (input) {
            if (/^[a-zA-Z0-9]+$/.test(input) && input.length <= 3 && input.length >= 1) {
                return true;
            } else {
                return "Please enter a valid input. Can only contain letter and numbers and must be no more than 3 characters."
            }
        },
        filter: function(input) {
            // Convert input to uppercase
            return input.toUpperCase();
          }
    },
    {
        name: "color",
        message: "What color would you like the text to be? Enter the name of a common color, or a hex-code.",
        type: "input",
        validate: function(input) {
          if (/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(input)) {
            return `#${input}`;
          } else if (/^[a-zA-Z]+$/.test(input)) {
            const colorObject = colorString.get(input);
            if (colorObject !== null) {
                return true;
            }
          } else {
            return "Please enter a valid color name or hex-code.";
          }
        },
        filter: function(input) {
          // Convert input to lowercase
          return input.toLowerCase();
        }
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
        type: "input",
        validate: function(input) {
            if (/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(input)) {
                return `#${input}`;
              } else if (/^[a-zA-Z]+$/.test(input)) {
                const colorObject = colorString.get(input);
                if (colorObject !== null) {
                    return true;
                }
              } else {
                return "Please enter a valid color name or hex-code.";
              }
        },
        filter: function(input) {
          // Convert input to lowercase
          return input.toLowerCase();
        }
    },
    {
        name: "border",
        message: "Would you like to add a border the same color as your text to your logo?",
        type: "confirm"
    }
]



inquirer.prompt(questions).then(data => {
    const text = data.text;
    const color = data.color;
    const bgColor = data.bgColor;
    const border = data.border;
    const shape = data.shape;

    if (shape === "circle") {
        const circle = new Circle(text, color, bgColor, border);
        circle.renderSVG("./images/logo.svg");
    } else if (shape === "square") {
        const square = new Square(text, color, bgColor, border);
        square.renderSVG("./images/logo.svg");
    } else if (shape === "triangle") {
        const triangle = new Triangle(text, color, bgColor, border);
        triangle.renderSVG("./images/logo.svg");
    }
})