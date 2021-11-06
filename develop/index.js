// include packages needed for application 
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('../utils/generateMarkdown.js');
const path = require('path');
// const { features } = require('process');

//Create an array for prompts 
const promptQuestions = () => {
   return inquirer.prompt ([
            //figure out how to generate table of contents 
            {
                type: 'input',
                name: 'projectTitle',
                message: 'What is the title of your project? (required)',
                //validate to ensure they enter a value 
                validate: projectTitleInput => {
                 if (projectTitleInput) {
                 return true;
                 } else {
                    console.log('Please enter a valid project title!');
                    return false; 
                 }
               }  
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please enter a description of your project. (required)',
                validate: descriptionInput => {
                 if (descriptionInput) {
                 return true;
                 } else {
                 console.log('Please enter a description of your project!');
                 return false;
                }
               },
            },  
            {
                type: 'input',
                name: 'usage',
                message: 'Please describe the uses of this project.'
            },
            {
                type: 'confirm',
                name: 'installation',
                message: 'Do you need to install this application?',
                default: false
           }, 
           {
               type: 'input',
               name: 'instructions',
               message: 'Please provide instructions for installing your project.'
           },
           {
               type: 'list',
               name: 'license',
               message: 'What license did you use?',
               choices: ['MIT', 'apacheStyle', 'GNU', 'N/A']
           },
           {
               type: 'input',
               name: 'contributors',
               message: 'Who contributed to this project?'
           },
           {
               type: 'input',
               name: 'githubUser',
               message: 'What is your github username? (required)',
               validate: githubUserInput => {
                if (githubUserInput) {
                return true;
                } else {
                  console.log('Please enter a GitHub username!');
                  return false;
                }
               },
           },
           {
               type: 'input',
               name: 'email',
               message: 'What is your email? (required)',
               validate: emailInput => {
                 if (emailInput) {
                     return true;
                 } else {
                     console.log('Please enter a valid email!');
                     return false; 
                 }
               },
           }
        ])
        .then(function(data) {
            console.log(data);
            fs.writeFileSync(path.join(process.cwd(), 'readme.md'), generate({
                ...data
            }));
        })
        
    }

    promptQuestions();
    
        


