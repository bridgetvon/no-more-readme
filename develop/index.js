// include packages needed for application 
const inquirer = require('inquirer');
const fs = require('fs');

//Create an array for prompts 
 inquirer
    .prompt ([
            {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the title of your project? (required)',
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
              message: "Please enter a description of your project. (required)",
              validate: descriptionInput => {
                if (descriptionInput) {
                return true;
                } else {
                  console.log('Please enter a description of your project!');
                  return false;
                }
            }  
         },    
     ]);
 

 //call function and do something with data
