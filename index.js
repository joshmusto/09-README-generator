//project needs stuff to run
const fs = require("fs");
const inquirer = require("inquirer");

//main README write-up
function writeMain(writeTitle, writeLicenseBadge, writeDesc, writeInstall, writeUsage, writeLicense, writeContribute, writeTests, writeGithub, writeEmail) { return `# ${writeTitle}

${writeLicenseBadge}

## Description

${writeDesc}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${writeInstall}

## Usage

${writeUsage}

## License

${writeLicense}

## Contribution

${writeContribute}

## Tests

${writeTests}

## Questions

Any questions about this software can be directed to the author via either
\nGithub: ${writeGithub}
\nor
\nEmail: [${writeEmail}](${writeEmail})`}

//use inquirer to get info
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Write a description for your project',
      name: 'desc',
    },
    {
        type: 'input',
        message: 'Write any necessary installation instructions',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Write instructions and examples on how to use your program',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Which license would you like your program to have?',
        name: 'license',
        choices: ['None', 'MIT', 'GNU General Public 3.0'],
    },
    {
        type: 'input',
        message: 'How can other developers contribute to your project?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Provide any tests for your project',
        name: 'tests',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is an email address where people can contact you?',
      name: 'email',
    },
  ])
  .then(function(response) {
    //set variables
    let writeTitle = response.title;
    let writeDesc = response.desc;
    let writeInstall = response.install;
    let writeUsage = response.usage;
    if (response.license === "MIT") {
        writeLicenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        writeLicense = "This software is covered by the MIT license."
    }
    else if (response.license === "GNU General Public 3.0") {
        writeLicenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        writeLicense = "This software is covered by the GNU General Public 3.0 license."
    }
    else {
        writeLicenseBadge = "";
        writeLicense = "No license specified."
    }
    let writeContribute = response.contribute;
    let writeTests = response.tests;
    let writeGithub = "https://github.com/" + response.github;
    let writeEmail = response.email;
    //create and write to README
    fs.writeFile("generatedREADME.md", writeMain(writeTitle, writeLicenseBadge, writeDesc, writeInstall, writeUsage, writeLicense, writeContribute, writeTests, writeGithub, writeEmail), (err) =>
    err ? console.log(err) : console.log('README generation complete.'));
  });