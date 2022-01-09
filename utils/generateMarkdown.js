// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ('');
  }
  let badge;
  switch (license) {
    case 'Apache License 2.0':
      badge = '![License](https://img.shields.io/badge/License-Apache_2.0-brightgreen)';
      break;
    case 'GNU General Public License v3.0':
      badge = '![License](https://img.shields.io/badge/License-GPLv3-brightgreen)';
      break;
    case 'MIT License':
      badge = '![License](https://img.shields.io/badge/License-MIT-brightgreen)';
      break;
    case 'Boost Software License 1.0':
      badge = '![License](https://img.shields.io/badge/License-BSL_1.0-brightgreen)';
      break;
    case 'GNU Affero General Public License v3.0':
      badge = '![License](https://img.shields.io/badge/License-AGPL_3.0-brightgreen)';
      break;
    case 'GNU Lesser General Public License v3.0':
      badge = '![License](https://img.shields.io/badge/License-LGPL_3.0-brightgreen)';
      break;
    case 'Mozilla Public License 2.0':
      badge = '![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen)';
      break;
    case 'The Unlicense':
      badge = '![License](https://img.shields.io/badge/License-Unlicense-brightgreen)';
      break;
  }
  return badge;
}

function renderLicenseNav(license) {
  if (!license) {
    return '';
  }
  return ('- [License](#license');
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ('');
  }
  let link;
  switch (license) {
    case 'Apache License 2.0':
      link = `[${license}](https://choosealicense.com/licenses/apache-2.0/)`;
      break;
    case 'GNU General Public License v3.0':
      link = `[${license}](https://choosealicense.com/licenses/gpl-3.0/)`;
      break;
    case 'MIT License':
      link = `[${license}](https://choosealicense.com/licenses/mit/)`;
      break;
    case 'Boost Software License 1.0':
      link = `[${license}](https://choosealicense.com/licenses/bsl-1.0/)`;
      break;
    case 'GNU Affero General Public License v3.0':
      link = `[${license}](https://choosealicense.com/licenses/agpl-3.0/)`;
      break;
    case 'GNU Lesser General Public License v2.1':
      link = `[${license}](https://choosealicense.com/licenses/lgpl-3.0/)`;
      break;
    case 'Mozilla Public License 2.0':
      link = `[${license}](https://choosealicense.com/licenses/mpl-2.0/)`;
      break;
    case 'The Unlicense':
      link = `[${license}](https://choosealicense.com/licenses/unlicense/)`;
      break;
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ('');
  }
  return `
  ## License
  This application is available under ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description ${renderLicenseBadge(data.license)}
  ${data.description}
  ## Table Of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseNav(data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  Github:  [${data.github}](https://github.com/${data.github}) /n
  For questions email ${data.email}
`;
}

module.exports = generateMarkdown;