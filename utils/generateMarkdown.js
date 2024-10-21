// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;


// ! README.md template here! Move this as req'd
// README.md template

// const = template`# ${data.title}

// ## Description
// ${data.description}

// ## Table of Contents
// - [Installation](#installation)
// - [Usage](#usage)
// - [Credits](#credits)
// - [License](#license)
// - [Badges](#badges)
// - [Features](#features)
// - [How to Contribute](#how-to-contribute)
// - [Tests](#tests)

// ## Installation
// ${data.install}

// ## Usage
// ${response.use}

// ## Credits
// ${response.credits}

// ## License
// ${response.license}

// ## Badges
// ${response.badges}

// ## Features
// ${response.features}

// ## How to Contribute
// ${response.contribute}

// ## Tests
// ${response.tests}`