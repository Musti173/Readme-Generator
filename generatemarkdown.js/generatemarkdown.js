//This is the function to create the Markdwon
function generateMarkdown(data) {
    let markdown = `# ${data.title}
  ## Description
  ${data.description}
  ## the Contents
  - [Title](#title)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Contributers](#contributers)
  - [Questions](#questions)`;
  //The table of contents is navgational to the relevant sections
  
    // This is an if statement making sure a section IS NOT created if none is selected
    if (data.selectedLicense !== "none") {
      markdown += `
  - [License](#license)`;
    }
  
    markdown += `
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Tests
  ${data.tests}
  ## Contributing
  ${data.contributing}
  ## Questions
  Username: ${data.gitUsername},
  URL: ${data.gitUrl},
  You can send me any questions via email: ${data.questions}`;
  
    // This creates the license section, link and badge
    if (data.selectedLicense !== "none") {
      markdown += `
     
  ## License
  This project is licensed under the ${data.selectedLicense} license.
  ${renderLicenseBadge(data.selectedLicense)}
  `;
    }
  
    return markdown;
  }
  
  // This function returns a license badge based on which license is passed in
  // If there is no license, this returns an empty string
  function renderLicenseBadge(selectedLicense) {
    if (selectedLicense === "none") {
      return "";
    } else {
      return `![${selectedLicense}](https://img.shields.io/badge/LICENSE-${selectedLicense}-red)`;
    }
  }
  
  // This function returns the license link
  // If there is no license, this returns an empty string
  function renderLicenseLink(selectedLicense) {
    if (selectedLicense === "none") {
      return "";
    } else {
      return `- [License](#license)`;
    }
  }
  
  // This function returns the license section of README
  // If there is no license, this return an empty string
  function renderLicenseSection(selectedLicense) {
    if (selectedLicense === "none") {
      return "";
    } else {
      return `## License 
      
  This project is licensed under the ${selectedLicense} license.
      
      `;
    }
  }
  
  module.exports = generateMarkdown;