// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let licenseBadge;
  if (license === "Apache 2.0") {
    licenseBadge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === "GNU GPL v3") {
    licenseBadge = `![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`;
  } else if (license === "MIT") {
    licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "Mozilla Public License 2.0") {
    licenseBadge = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
  } else {
    licenseBadge = "";
  }
  return licenseBadge;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  if (license === 'Apache 2.0') {
    licenseLink = `[Apache 2.0](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'GNU GPL v3') {
    licenseLink = `[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'MIT') {
    licenseLink = `[MIT](https://opensource.org/licenses/MIT)`;
  } else if (license === 'Mozilla Public License 2.0') {
    licenseLink = `[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`;
  } else {
    licenseLink = '';
  }
  return licenseLink;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  switch (license) {
    case 'Apache 2.0':
      return `This project is licensed under the Apache 2.0 license.`;
    case 'GNU GPL v3':
      return `This project is licensed under the GNU GPL v3 license.`;
    case 'MIT':
      return `This project is licensed under the MIT license.`;
    case 'Mozilla Public License 2.0':
      return `This project is licensed under the Mozilla Public License 2.0.`;
    default:
      return ''; // No license provided
  }
};

// Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}
  ${licenseBadge}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [GitHub](#github)
  - [Email](#email)

  ## Installation
  ${data.install}

  ## Usage
  ${data.use}

  ## Credits
  ${data.credits}

  ## License
  ${licenseBadge}
  This project is licensed under the [${data.license}](${licenseLink}) license.

  ## How to Contribute
  ${data.contribute}

  ## Tests
  ${data.tests}

  ## GitHub
  [GitHub](https://github.com/${data.github})

  ## Email
  ${data.email}`;
}

export default generateMarkdown;