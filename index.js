// Include packages needed for this application
import inquirer from 'inquirer';

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
        message: 'If applicable, explain how other developers can contribute to the project.',
    },
    // Prompt for test instructions
    {
        type: 'input',
        name: 'test',
        message: 'Provide instructions for testing your project.',
    },
    // Prompt
    question07 = {
        type: 'input',
        name: 'credits',
        message: 'List any collaborators, third-party assets, or tutorials used.',
    },
    // Prompt for license information
    {
        type: 'input',
        name: 'license',
        message: 'Provide the license for the project.',
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, (err) => {
        err ? console.error(err) : console.log('README.md created!');
    });
}

// TODO: Create a function to initialize app
function init() {

};

// Function call to initialize app
init();
