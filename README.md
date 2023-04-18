# SVG Logo Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

## Description

I wanted to be able to quickly whip up basic logos for a project, organization, etc. This week, we were tasked with creating an application that could generate svg files containing up to three chosen characters on a background of the user's choosing, with the colors for the text and background also being chosen. This application enables one to quickly generate a circle, square, or triangle shaped logo, with an optional border, and up to three letters or numbers (the letters will be capitalized automatically) of the user's choosing.  While working on this project, I learned about creating and running tests for javascript code, as well as working with multiple different javascript files. I also learned more about and got more practice with importing and exporting modules, both my own and ones I can install through node that I've found or was recommended to me. 
  
## Table of Contents
  
[Installation](#Installation)
  
[Usage](#Usage)

[License](#License)

[Tests](#Tests)
    
[Credits](#Credits)

## Installation

You will want to fork this repo so that you can ```git pull``` it to you local directory. Then you will need to install the dependant packages with ```npm i``` or ```npm install```. Then you can run the application with nodejs by running ```node index.js```.

## Usage

Video of demonstration [here](https://drive.google.com/file/d/1ozFiHQk5mmiSMQOEdWkxTt4BftTIyop8/view)

After running the application with a ```node index.js```, you will be presented with a series of questions, starting with what the three characters on your to-be-generated logo to be. When giving input for the prompts regarding color, input can be answered as a common color name (any color name that css knows), or as a hex code. After answering the final prompt, the logo based on the user input will be generated in the images folder under the name "logo.svg". There will likely be a placeholder svg file with that name already in the folder, and it will be overwritten with the newly generated one. It is recommended the user move/rename/copy-paste/etc. their generated logo.

## License

Licensed under the [MIT License](https://opensource.org/licenses/MIT)

## Tests

After installing the required packages, tests can be ran using Jest by running ```npm run test```.

The tests verify that the svg logo is generated properly as a string, that it winds up in the right place, and that errors are handled gracefully.

## Credits

[Basic Shapes-SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes)

## Questions

[![GitHub](https://img.shields.io/badge/GitHub-WolfSpiderman-orange)](https://github.com/WolfSpiderman)

Contact me with any questions:
[Email](#)