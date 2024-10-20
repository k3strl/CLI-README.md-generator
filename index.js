// Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// Create an array of questions for user input
const questions = [
    // Prompt for the project title
    { 
        type: 'input',
        name: 'title',
        message: 'Provide a title for your project.',
    },
    // Prompt for the project description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project.',
    },
    // Prompt for installation instructions
    {
        type: 'input',
        name: 'install',
        message: 'Provide a description of the steps required to install and/or run the application/project.',
    },
    // Prompt for usage instructions
    {
        type: 'input',
        name: 'use',
        message: 'Provide instructions for use.',
    },    
    // Prompt for contribution guidelines
    {
        type: 'input',
        name: 'contribute',
        message: 'Explain how other developers can contribute to the project.',
    },
    // Prompt for testing instructions
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions for testing your project.',
    },
    // Prompt for credits
    {
        type: 'input',
        name: 'credits',
        message: 'List any collaborators, third-party assets, or tutorials used.',
    },
    // Prompt for license
    {
        type: 'input',
        name: 'license',
        message: 'Provide the license for the project.',
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log('README.md created!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            console.log(data);
            writeToFile('README.md', data);
        });
};

// create markdown template
const = template`# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)

## Installation
${data.install}

## Usage
${response.use}

## Credits
${response.credits}

## License
${response.license}

## Badges
${response.badges}

## Features
${response.features}

## How to Contribute
${response.contribute}

## Tests
${response.tests}`

// Function call to initialize app
init();
