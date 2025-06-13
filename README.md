---

# 🏠 Real Estate Project – Cypress Automated Testing Suite

## 🖥️ Overview

This project is an advanced automated testing suite for a real estate web application, demonstrating full-stack quality assurance through both **UI (browser-based)** and **API (backend)** testing with **Cypress** and **JavaScript**.

The framework is built with the **Page Object Model (POM)** for maintainable, reusable, and scalable test automation. Tests are separated for UI and API, proving coverage for both user experience and backend logic.

---

## ⚡ Features

* **E2E UI Testing:** Automated browser flows for login, registration, property listings, dashboards, and more.
* **API Testing:** Backend CRUD validation for listings, users, and search using Cypress's API commands.
* **Modular Page Objects:** Clean, DRY code via reusable selectors and methods.
* **Parallel Test Execution:** Fast, scalable runs using `cypress-parallel`.
* **Automated Reporting:** Beautiful HTML reports with Mochawesome.
* **CI/CD with GitHub Actions:** Modern pipelines, nightly runs, and dependency caching.

---

## ⏰ Automated CI/CD Schedule

* **Nightly runs:**
  Tests are **automatically executed every day at 5:00 AM CST** via [GitHub Actions scheduled workflow](https://crontab.guru/#0_11_*_*_*).
* **Purpose:**
  Ensures daily, automated health checks for the application—no need to run tests manually. Reports and logs are stored as workflow artifacts.

**Cron Example:**

```yaml
schedule:
  - cron: '0 11 * * *'   # 5:00 AM Chicago time (CST)
```

---

## 🛠️ Tech Stack

* **Cypress** (UI & API automation)
* **JavaScript** (CommonJS)
* **Node.js**
* **Page Object Model (POM)**
* **Mochawesome** (reporting)
* **GitHub Actions** (CI/CD)

---

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Nara-Bayaraa/real-estate-project.git
   cd real-estate-project
   ```
2. **Install dependencies** (requires Node.js):

   ```bash
   npm install
   ```

---

## 🚀 Running Tests

* **Open Cypress GUI:**

  ```bash
  npm run cy:open
  ```
* **Run all tests (headless):**

  ```bash
  npm run cy:run
  ```
* **Run in parallel (fastest):**

  ```bash
  npm run cy:parallel
  ```

---

## 📂 Project Structure

```
real-estate-project/
  ├── cypress/
  │   ├── e2e/
  │   │   ├── api/           # API test specs
  │   │   └── ui/            # UI test specs
  │   ├── fixtures/          # Test data (JSON, images)
  │   ├── reports/           # Mochawesome reports
  │   ├── screenshots/       # Failure screenshots
  │   └── support/           # Helpers, page objects, custom commands
  ├── .github/workflows/     # GitHub Actions CI
  ├── package.json
  ├── cypress.config.js
  └── README.md
```

---

## 📊 Reporting

* **Merge reports:**

  ```bash
  npm run merge:reports
  ```
* **Generate HTML report:**

  ```bash
  npm run generate:report
  ```
* **View report locally:**

  ```bash
  npx serve cypress/reports/html
  ```

---

## 📝 NPM Scripts

```json
"scripts": {
  "cy:open": "cypress open",
  "cy:run": "cypress run --browser chrome",
  "cy:parallel": "cypress-parallel -s cy:run -t 5 -d 'cypress/e2e/**/*.cy.js'",
  "clean:reports": "rm -rf cypress/reports",
  "pretest": "npm run clean:reports",
  "merge:reports": "mochawesome-merge cypress/reports/mochawesome/*.json > cypress/reports/mochawesome.json",
  "generate:report": "marge cypress/reports/mochawesome/*.json -f report -o cypress/reports/html",
  "test:report": "npm run cy:run || true && npm run merge:reports && npm run generate:report"
}
```

---

## 🔄 CI/CD Pipeline Example

This project leverages **GitHub Actions** for automated builds, parallel test execution, and publishing test artifacts.

<details>
<summary>Click to expand sample workflow</summary>

```yaml
name: Parallel Test Build

on:
  schedule:
    - cron: '0 11 * * *'
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
      - name: Set up Node.js
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

</details>

---

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch:
   `git checkout -b feature/your-feature`
3. Commit changes:
   `git commit -m "Add: feature or fix description"`
4. Push and open a Pull Request.

---

## 📄 License

[MIT License](./LICENSE)

---

## 🌱 Roadmap / Future Enhancements

* Add visual regression and accessibility tests
* Expand edge/negative case coverage
* Multi-browser and cross-platform support

---

**Happy testing! 🚀**

---
