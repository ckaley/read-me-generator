function generateMarkdown(data, picture, email) {
  return `
# ${data.title}
  
${data.description}

# Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [License](#License)
* [Tests](#Tests)
* [Quesrtions](#Questions)

# Installation

${data.installation}

# Usage

${data.usage}

# License

${data.license}

# Contributing

${data.contributing}

# Tests

${data.tests}

# Questions

${data.questions}

# Additional Information
Author of Program: <img src="${picture}"
alt="Program Auther Image"/>

Email: ${email}
`;
}


module.exports = {
  generateMarkdown: generateMarkdown
};


