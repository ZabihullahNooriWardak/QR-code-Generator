import inquirer from 'inquirer';

inquirer
  .prompt([
   {message: "Please Enter an URL", name: "URL"},
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    let url=answers.URL;
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });