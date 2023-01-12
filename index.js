//project needs stuff to run
const fs = require(fs);
const inquirer = require(inquirer);

//main README write-up
const writeMain = `# ${writeTitle}

## Description

${writeDesc}

${writeTOC}

${writeInstall}

## Usage

${writeUsage}

${writeCredits}

## License

${writeLicense}

${writeBadges}

${writeFeatures}

${writeContribute}

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
      type: 'confirm',
      message: 'Do you want to include a Table of Contents in your README?',
      name: 'tocConfirm',
    },
    {
        type: 'confirm',
        message: 'Do you want to include install instructions in your README?',
        name: 'installConfirm',
    },
  ])
  .then((response) => {
    const writeTitle = response.title;
    const writeDesc = response.desc;
    //only write a TOC if the user wants to include one
    if (response.tocConfirm=true) {
        //only include install instructions in TOC if the user includes them
        if (response.installConfirm=true) {
            var tocInstall = "- [Installation](#installation)";
        }
        //only include badges in TOC if the user includes them
        if (response.badgesConfirm=true) {
            var tocBadges = "- [Installation](#installation)";
        }
        //only include features in TOC if the user includes them
        if (response.featuresConfirm=true) {
            var tocFeatures = "- [Installation](#installation)";
        }
        //only include contribution instructions in TOC if the user includes them
        if (response.contributeConfirm=true) {
            var tocContribute = "- [Installation](#installation)";
        }
        //only include tests in TOC if the user includes them
        if (response.testsConfirm=true) {
            var tocTests = "- [Installation](#installation)";
        }
        const writeTOC = `## Table of Contents
        
        ${tocInstall}
        - [Usage](#usage)
        - [Credits](#credits)
        - [License](#license)
        ${tocBadges}
        ${tocFeatures}
        ${tocContribute}
        ${tocTests}`
    }
    //only write install instructions if the user wants to include them
    if (response.insallConfirm=true) {
        const writeInstall = response.install;
    }
  });