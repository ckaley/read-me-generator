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


module.exports = {
  generateMarkdown: generateMarkdown
};


