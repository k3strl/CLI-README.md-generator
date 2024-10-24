// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let licenseBadge;
  if (license === "apache") {
    licenseBadge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === "gplv3") {
    licenseBadge = `![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`;
  } else if (license === "mit") {
    licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "mozilla") {
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
  if (license === "apache") {
    licenseLink = `[Apache 2.0](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "gplv3") {
    licenseLink = `[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "mit") {
    licenseLink = `[MIT](https://opensource.org/licenses/MIT)`;
  } else if (license === "mozilla") {
    licenseLink = `[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`;
  } else {
    licenseLink = "";
  }
  return licenseLink;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license, licenseBadge, licenseLink) => {
  if (!license) {
    return ""; // Return an empty string if no license is provided
  }

  switch (license) {
    case "apache":
      return `This project is licensed under the ${licenseBadge} ${licenseLink} license.`;
    case "gplv3":
      return `This project is licensed under the ${licenseBadge} ${licenseLink} license.`;
    case "mit":
      return `This project is licensed under the ${licenseBadge} ${licenseLink} license.`;
    case "mozilla":
      return `This project is licensed under the ${licenseBadge} ${licenseLink} license.`;
    default:
      return ""; // Return an empty string for unrecognized licenses
  }
};

// Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(
    data.license,
    licenseBadge,
    licenseLink
  );

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
  - [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.use}

  ## Credits
  ${data.credits}

  ## License
  ${licenseSection}

  ## How to Contribute
  ${data.contribute}

  ## Tests
  ${data.tests}

  ## Questions? 
  Contact me at
  [GitHub](https://github.com/${data.github}), or email me at: <${data.email}>`;
}

export default generateMarkdown;
