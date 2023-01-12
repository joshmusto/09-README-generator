//project needs stuff to run
const fs = require("fs");
const inquirer = require("inquirer");

//set variables
let writeTitle = "";
let writeDesc = "";
let writeInstall = "";
let writeUsage = "";
let writeLicense = "";
let writeContribute = "";
let writeTests = "";

//main README write-up
const writeMain = `# ${writeTitle}

## Description

${writeDesc}

## Table of Contents

- [Install](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)

## Installation

${writeInstall}

## Usage

${writeUsage}

## License

${writeLicense}

## Contribution

${writeContribute}

## Tests

${writeTests};`

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
  ])
  .then((response) => {
    writeTitle = response.title;
    writeDesc = response.desc;
    writeInstall = response.install;
    writeUsage = response.usage;
    writeLicense = response.license;
    writeContribute = response.contribute;
    writeTests = response.tests;
    fs.writeFile("generatedREADME.md", writeMain, (err) =>
    err ? console.log(err) : console.log('README generation complete.'));
  });