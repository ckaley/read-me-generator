//function to generate the README.md file.  The format of the file is defined 
// with the parameters passed in to populate the dynamic data

function generateMarkdown(data, picture, email) {
  return `
# ${data.title}
  
${data.description}

# Badges

[![Generic badge](https://img.shields.io/badge/BootCamp%20Approved-yes-green.svg)](https://github.com/ckaley/read-me-generator)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/ckaley/read-me-generator)

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

# Author Information
 <img src="${picture}" alt="Program Auther Image"/>

Email: ${email}
`;
}

// export so this will can be included in other programs
module.exports = {
  generateMarkdown: generateMarkdown
};


