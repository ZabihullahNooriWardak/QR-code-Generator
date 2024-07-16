import inquirer from 'inquirer';
import qr from "qr-image";
import fs from 'fs'
inquirer
  .prompt([
   {message: "Please Enter an URL", name: "URL"},
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    let url=answers.URL;
    var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('url.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });