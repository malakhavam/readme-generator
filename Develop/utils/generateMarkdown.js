function generateMarkdown(data) {
  return ` 
   ${data.badge}
   # ${data.projectname}
   ## ${data.github}
   
   ## Description 
   
   ${data.description}
   
   ## Table of Contents  
   * [Installation](#installation)
   * [Usage](#usage)
   * [Contributors](#contibutors)
   * [License](#license)
   * [Test](#test)
   * [Questions](#questions)
   
   ## Installation 
   
   ${data.installation}

   ## Usage
   
   ${data.usage}

   ## Contributors

   ${data.collaborators}

   ## License

   ${data.license}
  
   ## Test
   
   ${data.test}
   
   ## Questions
   
   ${data.questions}

   https://github.com/${data.github}/${data.projectname}
   
   ${data.e_mail}
 `;
 }
 
 module.exports = generateMarkdown;
