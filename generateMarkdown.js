function generateMarkdown(data) {
  return `# ${data.title} 
by ${data.name} 

[![License: ${data.license}](https://img.shields.io/badge/License-ISC-blue.svg)](https://img.shields.io/badge/License-ISC-blue.svg)

[Link to License](https://img.shields.io/badge/License-ISC-blue.svg "License Badge")

## Table of Contents 
- [Description](#description) 
- [Installation](#installation)
- [Requirements](#requirements)
- [Usage](#usage)
- [Contact-Me](#contact-me)
- [Contributors](#contributors)
- [Testing](#tests)

## Description
${data.description}

## Requirements
${data.require}

## Usage
${data.usage}

## Contact-Me
- Name: ${data.name}
- Email: ${data.email} 
- Github: [${data.creator}](https://github.com/${data.creator}/) 

## Contributors 
${data.contributors}

## Testing 
\`\`\`
${data.test}
\`\`\`

## License
Licensed under the ${data.license} license.`;
}

module.exports = generateMarkdown;
