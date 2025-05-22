# 🖥️  Project Description
The Real Estate Project is a testing suite built to validate the functionality of a real estate web application. This project demonstrates my expertise in automated testing using Cypress and JavaScript, with a focus on two distinct approaches: Cypress API for browser-based testing and Axios for standalone API testing. By separating these tools, I showcase my ability to test both the frontend user experience and backend API interactions independently, ensuring a robust and reliable application.
This project is the first in my tester portfolio, highlighting my skills in writing modular tests, handling HTTP requests, and ensuring quality across different layers of a web application.

# ⚙️ Features

- Cypress API Testing: End-to-end and integration tests for user flows like property browsing and form submissions, leveraging Cypress’s built-in API capabilities.
- Frontend Validation: Browser-based tests to ensure UI elements and interactions work as expected.
- Backend Validation: Independent API checks to confirm data consistency and server reliability.

# 🛠️ Tech Stack

- Cypress: For UI and API testing.
- JavaScript: Core language for scripting tests and logic.
- Node.js: Runtime environment for executing the tests.
- Design Pattern: Page Object Model.
- Test Report: Mochawesome.
## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Nara-Bayaraa/real-estate-project.git
cd real-estate-project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run Tests

Run all tests:

```bash
npm run cy:run
```

Run tests in UI:

```bash
npm run cy:open
```

Run specific suites:

```bash
npm run test:LoginFolder
npm run test:RegisterFolder
```

Run in parallel:

```bash
npm run cy:parallel:register
npm run cy:parallel:login
```

### 4. Generate Test Report

```bash
npm run merge:reports
npm run generate:report
```

Serve the HTML report:

```bash
npx serve cypress/reports/html
```

# 📂 Project Structure
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
