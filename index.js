//Declaring fs and downloading inquirer and the version 8.2.4
const inquirer = require('inquirer');
const fs = require('fs');


//Function that contains a readme model that includes the answers by the user.
function generateMarkdown (answers) {
  return `
# ${answers.title}

## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.test}

## Questions
Contact me!
<br>[My Email Address](${answers.emailAddress})
<br>[My GitHub Profile](${answers.githubRepository})
  `;
}

//Using prompt the user will answer all the questions that will be included inside the readme file. 
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Please write the title of your project',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please describe the purpose of your project and functionalities',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please explain the installation process of your project',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please write the usage of your project, and the languages or technologies associated with it',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license choice',
      choices: ["APACHE2.0","Boost1.0","BSD3","BSD3","MIT","MPL2.0","none"],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Write how can contribuite to your project',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Explain how to test your project',
    },
    {
      type: 'input',
      name: 'emailAddress',
      message: 'Enter your email',
    },
    {
      type: 'input',
      name: 'githubRepository',
      message: 'Enter your github repository',
    }
  ])

//This then generates a readme file in another folder.This then connects the user answers and the readme model (inquierer).
  .then((answers) => {
    const readmeFile = generateMarkdown(answers);
    fs.writeFile('./dist/generated-ReadMe.md', readmeFile, (err) =>
      err ? console.log(err) : console.log('Successfully created ReadMe.md!')
    );
  });



