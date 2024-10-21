// Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// Create an array of questions for user input
const questions = 
    [
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
    // Prompt for license
    {
        type: 'input',
        name: 'license',
        message: 'Provide the license for the project.',
    },
    // Prompt for credits
    {
        type: 'input',
        name: 'credits',
        message: 'List any collaborators, third-party assets, or tutorials used.',
    },
    // Prompt for github username
    {
        type: 'input',
        name: 'github',
        message: 'Provide your GitHub username.',
    },
    // Prompt for email address
    {
        type: 'input',
        name: 'email',
        message: 'Provide an email address for questions about the project.',
    }
];

// writeToFile function
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log('README.md created successfully!');
    });
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        data.getLicense = getLicense(data.license);
        writeToFile("./README.md", data);
    });
}

// Function call to initialize app
init();
