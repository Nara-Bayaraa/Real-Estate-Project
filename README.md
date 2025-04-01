# Project Description
The Real Estate Project is a testing suite built to validate the functionality of a real estate web application. This project demonstrates my expertise in automated testing using Cypress and JavaScript, with a focus on two distinct approaches: Cypress API for browser-based testing and Axios for standalone API testing. By separating these tools, I showcase my ability to test both the frontend user experience and backend API interactions independently, ensuring a robust and reliable application.
This project is the first in my tester portfolio, highlighting my skills in writing modular tests, handling HTTP requests, and ensuring quality across different layers of a web application.

#Features

Cypress API Testing: End-to-end and integration tests for user flows like property browsing and form submissions, leveraging Cypress’s built-in API capabilities.
Axios API Testing: Standalone API tests to validate backend endpoints, focusing on data accuracy and response handling.
Frontend Validation: Browser-based tests to ensure UI elements and interactions work as expected.
Backend Validation: Independent API checks to confirm data consistency and server reliability.

#Tech Stack

Cypress: For browser-based end-to-end and UI testing.
Axios: For standalone HTTP requests and API testing.
JavaScript: Core language for scripting tests and logic.
Node.js: Runtime environment for executing the tests.
Design Pattern: Page Object Model.

# Installation

1. Clone the repository:
```bash
git clone https://github.com/Nara-Bayaraa/real-estate-project.git
cd real-estate-project
```
2. Install project dependencies: Ensure you have Node.js installed, then install the necessary libraries:
```bash
npm install
```
3. Run the tests: To execute all Cypress tests:
```bash
npx cypress open
```

# Project Structure
```

/real-estate-project/
  ├── cypress/
  │   ├── downloads/ - here you can find screenshots of failures when running in headless mode
  │   ├── e2e/  - where all of the tests are stored
  │   ├── fixures/  - is used to store data (users, listing etc)
  │   ├── pageObject  - for all of the locators and methods
  │   ├── support  - here you can find custom command for cypress
  ├── node_modules/
  ├── .gitignore
  ├── cypress.config.js
  ├── package-lock.json
  ├── package.json
  ├── README.md

```
