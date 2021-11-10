// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//get badge urls

function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

//TODO: Create a function that returns the license section of README
//If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
This project is licensed under the ${license} license.`;
  }
  return '';
};

//TODO extra: submit an image

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.projectTitle}
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}
## Description 
${data.description}
      
*[Description](##description)

*[Usage](#usage)

*[Installation](#installation)

*[Instructions](#instructions)

*[License](#license)

*[Contributors](#contributors)

## Usage 
${data.usage}
# Installation
${data.installation}
## Instructions
${data.instructions}
## License
${data.license}
## Contributors 
${data.contributors}

# Contact
* GitHub :${data.githubUser}
* E-mail :${data.email}`;
}

module.exports = generateMarkdown;