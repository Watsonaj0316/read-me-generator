const generateMarkdown = require('./generateMarkdown');

describe('generateMarkdown', () => {
  test('generates markdown correctly', () => {
    const testData = {
      title: 'Test Project',
      name: 'John Doe',
      license: 'MIT',
      description: 'This is a test project',
      require: 'Node.js',
      usage: 'For testing purposes',
      email: 'john@example.com',
      creator: 'johndoe',
      test: 'npm test',
      contributors: 'Alice, Bob'
    };

    const expectedMarkdown = `# Test Project 
by John Doe 

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

[Link to License](https://opensource.org/licenses/MIT)

## Table of Contents 
- [Description](#description) 
- [Installation](#installation)
- [Requirements](#requirements)
- [Usage](#usage)
- [Contact-Me](#contact-me)
- [Contributors](#contributors)
- [Tests](#tests)

## Description
This is a test project

## Requirements
Node.js

## Usage
For testing purposes

## Contact-Me
- Name: John Doe
- Email: john@example.com 
- Github: [johndoe](https://github.com/johndoe/) 

## Contributors 
Alice, Bob

## Testing 
\`\`\`
npm test
\`\`\`

## License
Licensed under the MIT license.`;

    const generatedMarkdown = generateMarkdown(testData);
    expect(generatedMarkdown).toEqual(expectedMarkdown);
  });
});
