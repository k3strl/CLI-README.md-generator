// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//if/else statement 
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) 
{

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license)
{
  
}

// Create a function to generate markdown for README
function generateMarkdown(data) 
{
  return `# ${data.title}
  ${data.renderLicenseBadge}

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
  ${data.use}

  ## Credits
  ${data.credits}

  ## License
  ${data.license}

  ## Badges
  ${data.badges}

  ## Features
  ${data.features}

  ## How to Contribute
  ${data.contribute}

  ## Tests
  ${data.tests}`
};

export default generateMarkdown;