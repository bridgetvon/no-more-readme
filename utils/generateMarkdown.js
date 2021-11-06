// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//get badge urls



function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   let chosenLicense = license.license;
//   let pickedLicense = ''
//   if(chosenLicense === 'MIT') {
//     pickedLicense = //`[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE);
//   } else if (chosenLicense === 'apacheStyle') {
//     pickedLicense = //
//   } else if (chosenLicense === 'GNU') {
//     pickedLicense = //
//   } else { (chosenLicense === 'N/A') 
// }
// return chosenLicense;
// };

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `### ${answer.data.title}
      ##description 
      ${answer.description}
      ##table of contents
      *[Description](##description)
      *[Usage](#usage)
      *[Installation](#installation)
      *[Instructions](#instructions)
      *[license](#license)
      *[Contributors](#contributors)
      ##usage 
      ${answer.usage}
      #Installation
      ${answer.installation}
      ### Instructions
      ${answer.instructions}
      ## License
      ${answer.license}
      ###Contributors 
      ${answer.contributors}

      # Contact
      * GitHub :${answer.githubUser}
      * E-mail :${answer.email}`;
}

module.exports = generateMarkdown;