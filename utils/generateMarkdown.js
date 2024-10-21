// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//if/else statement 
function renderLicenseBadge(license)
{
  let licenseBadge;
  if (license === 'Apache 2.0')
  {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (license === 'GNU GPL v3')
  {
    licenseBadge =`[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  else if (license === 'MIT')
  {
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  else if (license === 'Mozilla Public License 2.0')
  {
    licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
  else {
    licenseBadge = '';
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) 
{
  let licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license)
{
  let licenseSection;
}

// Create a function to generate markdown for README
function generateMarkdown(data) 
{
  const licenseBadge = '';
  const licenseLink = '';
  const licenseSection = '';
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

  ## Features
  ${data.features}

  ## How to Contribute
  ${data.contribute}

  ## Tests
  ${data.tests}`
};

export default generateMarkdown;