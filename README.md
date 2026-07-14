---
# 🏠 Real Estate Project – Cypress Automated Testing Suite

## 🖥️ Project Description

The Real Estate Project is an automated testing suite designed to ensure the quality and reliability of a real estate web application.
It demonstrates expertise in both **UI (browser-based) and API (backend)** testing using Cypress and JavaScript.

By separating UI and API tests, this project showcases the ability to validate both the frontend user experience and backend data integrity.
All tests are modular, using the **Page Object Model (POM)** for maintainable and scalable test automation.
---

## ⚙️ Features

- **Cypress E2E UI Testing:**
  Automated, browser-based user flows for login, property listings, dashboard, registration, etc.
- **API Testing:**
  Standalone backend validation (CRUD for listings, users, search, etc.) using Cypress’s built-in API commands.
- **Modular Page Objects:**
  Reusable selectors and methods to keep UI tests DRY and organized.
- **Parallel Test Execution:**
  Run tests in parallel using `cypress-parallel` for fast feedback and scalable pipelines.
- **Automated Reporting:**
  Rich HTML test reports generated with Mochawesome.
- **GitHub Actions CI/CD:**
  Modern pipeline support with parallel execution and dependency caching.

---

## 🕒 Automated CI Schedule

```bash
schedule:
    - cron: '0 11 * * *'   #run every day at  5:00 AM Chicago time (CST)
```

- **Nightly runs:**  
  This project’s test suite is **automatically triggered every day at 5:00 AM Chicago time (CST)** via a scheduled GitHub Actions workflow.

- **Configuration:**  
  The schedule is managed using this [cron expression](https://crontab.guru/#0_11_*_*_*):

- **Purpose:**  
  Purpose:
  Automatically checks test health and coverage daily, so you don’t have to run tests manually.
  All test results and reports are generated and can be accessed in the GitHub Actions workflow logs and artifacts.

---

## 🛠️ Tech Stack

- **Cypress** (UI and API testing)
- **JavaScript** (CommonJS)
- **Node.js**
- **Page Object Model (POM)**
- **Mochawesome** (reporting)
- **GitHub Actions** (CI/CD)

---

## 🔧 Installation

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

---

## 🛠️ Tech Stack

- **Cypress** (UI and API testing)
- **JavaScript** (CommonJS)
- **Node.js**
- **Page Object Model (POM)**
- **Mochawesome** (reporting)
- **GitHub Actions** (CI/CD)

---

## 🔧 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Nara-Bayaraa/real-estate-project.git
   cd real-estate-project
   ```

2. **Install dependencies:**
   Ensure you have Node.js installed, then run:

   ```bash
   npm install
   ```

3. **Run all tests in Cypress UI:**

   ```bash
   npm run cy:open
   ```

4. **Run all tests in headless mode (terminal):**

   ```bash
   npm run cy:run
   ```

5. **Run all tests in parallel (fastest, uses all CPU cores):**

   ```bash
   npm run cy:parallel
   ```

---

## 📂 Project Structure

```
real-estate-project/
  ├── cypress/
  │   ├── e2e/                         # All Cypress test specs
  │   │   ├── api/
  │   │   │   ├── listings/            # API tests for property listings (CRUD)
  │   │   │   └── users/               # API tests for users (if any)
  │   │   └── ui/
  │   │       ├── dashboard/           # Dashboard-related UI tests
  │   │       ├── featured-listings/   # Featured listings UI tests
  │   │       ├── home/                # Homepage UI tests
  │   │       ├── listings/            # Listings-related UI tests
  │   │       ├── login/               # Login and logout UI tests
  │   │       ├── property-listing/    # Property details and actions
  │   │       └── register/            # Registration UI tests
  │   ├── fixtures/                    # Test data (JSON)
  │   │   └── images/                  # Image files or image fixtures
  │   ├── reports/                     # Generated test reports (Mochawesome)
  │   ├── screenshots/                 # Cypress screenshots for test failures
  │   └── support/
  │       ├── helpers/                 # Helper utility JS files (e.g., data generators)
  │       ├── page-objects/            # Page Object Model files for each page/module
  │       ├── commands.js              # Custom Cypress commands
  │       └── e2e.js                   # Common Cypress utilities
  ├── .github/workflows/               # GitHub Actions workflow YAMLs
  ├── .gitignore
  ├── cypress.config.js
  ├── package-lock.json
  ├── package.json
  ├── README.md
```

---

## 🚀 How to Run

- **All tests (headless, terminal):**

  ```bash
  npm run cy:run
  ```

- **All UI and API tests in parallel (fastest):**

  ```bash
  npm run cy:parallel
  ```

- **Open Cypress Test Runner (GUI):**

  ```bash
  npm run cy:open
  ```

---

## 📊 Reporting

- **Merge test reports:**

  ```bash
  npm run merge:reports
  ```

- **Generate HTML report:**

  ```bash
  npm run generate:report
  ```

- **Serve the HTML report locally:**

  ```bash
  npx serve cypress/reports/html
  ```

---

## ✅ Key NPM Scripts

```json
"scripts": {
  "cy:open": "cypress open",
  "cy:run": "cypress run --browser chrome",
  "cy:parallel": "cypress-parallel -s cy:run -t 5 -d 'cypress/e2e/**/*.cy.js' -e '**/*.DS_Store'",
  "clean:reports": "rm -rf cypress/reports",
  "pretest": "npm run clean:reports",
  "merge:reports": "mochawesome-merge cypress/reports/mochawesome/*.json > cypress/reports/mochawesome.json",
  "generate:report": "marge cypress/reports/mochawesome/*.json -f report -o cypress/reports/html",
  "test:report": "npm run cy:run || true && npm run merge:reports && npm run generate:report"
}
```

---

## 🔄 Continuous Integration

This project uses **GitHub Actions** for CI/CD.
The parallel workflow speeds up testing by running all Cypress specs in parallel on every push and PR.

**Workflow example:**

```yaml
name: Parallel Test Build

on:
  schedule:
    - cron: "0 11 * * *" #run every day at  5:00 AM Chicago time (CST)

  workflow_dispatch:
  pull_request:
    types: [opened, reopened, edited, synchronize]
  push:
    branches: [main]

jobs:
  cypress-parallel-e2e:
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4.2.0

      - name: Set up Node.js 20.x
        uses: actions/setup-node@v4
        with:
          node-version: "20.x"

      - name: Cache npm dependencies
        uses: actions/cache@v4
        with:
          path: ~/.npm
          key: ${{ runner.os }}-npm-cache-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-npm-cache-

      - name: Install dependencies
        run: npm ci

      - name: Run Cypress E2E tests in parallel
        run: npm run cy:parallel

      - name: Merge Mochawesome Reports
        run: npm run merge:reports

      - name: Generate HTML Report
        run: npm run generate:report

      - name: Upload HTML Report Artifact
        uses: actions/upload-artifact@v4
        with:
          name: mochawesome-html
          path: reports/html/
```

---

## 📢 Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add: feature or fix description"`
4. Open a Pull Request against the main branch for review.

---

## 📄 License

MIT License

---

## 📝 Future Enhancements

- Add visual regression and accessibility tests
- Expand negative and edge case scenarios
- Multi-browser cross-platform test execution

---

## Happy testing! 🚀
