# 🏠 Real Estate Project – Cypress Automated Testing Suite

[![Real - Estate Parallel Test Build](https://github.com/Nara-Bayaraa/real-estate-project/actions/workflows/parallel-test-build.yml/badge.svg)](https://github.com/Nara-Bayaraa/real-estate-project/actions/workflows/parallel-test-build.yml)

## 🖥️ Project Description

The Real Estate Project is an automated testing suite for a real estate web application (`https://dev.delekhomes.com`).
It covers both **UI (browser-based) and API (backend)** testing using Cypress and JavaScript.

UI and API tests live in separate folders, so the suite validates the frontend user experience and backend data integrity independently.
UI tests use the **Page Object Model (POM)** for maintainable, reusable test code.

---

## ⚙️ Features

- **Cypress E2E UI Testing:**
  Browser-based user flows for login/logout, registration, home search, featured listings, property details, and the dashboard profile.
- **API Testing:**
  Listing CRUD (create, get, delete) using Cypress API commands and `cypress-plugin-api`.
- **API-Seeded UI Tests:**
  A `before` hook creates a listing through the API, so the home search tests check a known record instead of whatever data is on the site.
- **Modular Page Objects:**
  Reusable selectors and methods to keep UI tests DRY and organized.
- **Secure Test Credentials:**
  Logins are read from environment variables (`.env` locally, GitHub Secrets in CI). No real emails or passwords are stored in the repo.
- **Dynamic Test Data:**
  New users are generated with Faker, so registration tests don't collide with existing accounts.
- **Self-Cleaning Tests:**
  `after` hooks delete created listings and remove added favorites, so each run leaves the app in a clean state.
- **Parallel Test Execution:**
  Specs run in parallel with `cypress-parallel` (5 threads) for fast feedback.
- **Retries for Flaky Environments:**
  Failed tests retry up to 2 times in `cypress run` mode (no retries in `cypress open`).
- **Automated Reporting:**
  Mochawesome JSON reports are merged into one HTML report.
- **GitHub Actions CI/CD:**
  Runs on every push to `main`, every pull request, and on demand, with npm caching and an uploaded HTML report artifact.

---

## 🧪 Test Coverage

| Area                          | Type | Spec folder             | Tests         |
| ----------------------------- | ---- | ----------------------- | ------------- |
| Login / Logout                | UI   | `ui/login/`             | 5             |
| Registration (User + Realtor) | UI   | `ui/register/`          | 12            |
| Home Page Search              | UI   | `ui/home/`              | 9             |
| Featured Listings             | UI   | `ui/featured-listings/` | 3 (1 skipped) |
| Property Details              | UI   | `ui/property-listing/`  | 2             |
| Dashboard Profile             | UI   | `ui/dashboard/`         | 7             |
| Listings CRUD                 | API  | `api/listings/`         | 4             |
| **Total**                     |      | **16 spec files**       | **42**        |

---

## 🛠️ Tech Stack

- **Cypress** (UI and API testing)
- **JavaScript** (CommonJS)
- **Node.js** 22.x
- **Page Object Model (POM)**
- **Faker** (test data generation)
- **dotenv** (environment variables)
- **cypress-parallel** (parallel execution)
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

3. **Set up test credentials:**
   Copy the example file and fill in your own test account logins:

   ```bash
   cp .env.example .env
   ```

   ```env
   USER_EMAIL=
   USER_PASSWORD=
   REALTOR_EMAIL=
   REALTOR_PASSWORD=
   ```

   `cypress.config.js` loads these with `dotenv` and maps them to `Cypress.env()`, where the `userLogin` and `realtorLogin` commands read them.
   `.env` is git-ignored, so your credentials never get committed.

---

## 🚀 How to Run

- **Open Cypress Test Runner (GUI):**

  ```bash
  npm run cy:open
  ```

- **All tests (headless, terminal):**

  ```bash
  npm run cy:run
  ```

- **All UI and API tests in parallel (fastest):**

  ```bash
  npm run cy:parallel
  ```

---

## 📂 Project Structure

```
real-estate-project/
  ├── .github/workflows/
  │   └── parallel-test-build.yml      # GitHub Actions CI workflow
  ├── cypress/
  │   ├── e2e/                         # All Cypress test specs
  │   │   ├── api/
  │   │   │   └── listings/            # API tests for listings (create, get, delete)
  │   │   └── ui/
  │   │       ├── dashboard/           # Dashboard profile UI tests
  │   │       ├── featured-listings/   # Featured listings search and favorites
  │   │       ├── home/                # Homepage search UI tests (incl. API-seeded)
  │   │       ├── login/               # Login and logout UI tests
  │   │       ├── property-listing/    # Property details and inquiry form
  │   │       └── register/            # User and realtor registration UI tests
  │   ├── fixtures/                    # Test data (JSON)
  │   │   └── images/                  # Images uploaded when creating listings
  │   └── support/
  │       ├── helpers/                 # Data generators and state abbreviations
  │       ├── page-objects/            # Page Object Model files for each page/module
  │       ├── commands.js              # Custom Cypress commands (login, listings CRUD)
  │       └── e2e.js                   # Global imports and setup
  ├── reports/                         # Generated Mochawesome reports (git-ignored)
  ├── .env.example                     # Template for test credentials
  ├── .gitignore
  ├── cypress.config.js
  ├── package-lock.json
  ├── package.json
  └── README.md
```

---

## 📊 Reporting

Each spec writes a Mochawesome JSON file to `reports/mochawesome/`. The scripts below combine them into one HTML report.

- **Merge test reports:**

  ```bash
  npm run merge:reports
  ```

- **Generate HTML report:**

  ```bash
  npm run generate:report
  ```

- **Run tests and build the report in one step:**

  ```bash
  npm run test:report
  ```

- **Serve the HTML report locally:**

  ```bash
  npx serve reports/html
  ```

---

## ✅ Key NPM Scripts

```json
"scripts": {
  "cy:open": "cypress open",
  "cy:run": "cypress run --browser chrome",
  "cy:parallel": "cypress-parallel -s cy:run -t 5 -d 'cypress/e2e/**/*.cy.js' -e '**/*.DS_Store' -r mochawesome -o 'reportDir=reports/mochawesome,charts=true,overwrite=false,html=false,json=true'",
  "clean:reports": "rm -rf reports",
  "pretest": "npm run clean:reports",
  "merge:reports": "mochawesome-merge reports/mochawesome/*.json > reports/mochawesome.json",
  "generate:report": "marge reports/mochawesome.json -f report -o reports/html",
  "test:report": "npm run cy:run || true && npm run merge:reports && npm run generate:report"
}
```

`cy:parallel` passes the Mochawesome reporter to `cypress-parallel` with `-r` and `-o`, so reports are still generated when specs run in parallel.

---

## 🔄 Continuous Integration

This project uses **GitHub Actions** (`.github/workflows/parallel-test-build.yml`).

**Triggers:**

- Every push to `main`
- Every pull request (opened, reopened, edited, synchronize)
- Manually from the Actions tab (`workflow_dispatch`)

**Pipeline steps:**

1. Check out the code and set up Node.js 22.x
2. Restore the npm cache and install dependencies with `npm ci`
3. Run all specs in parallel with `npm run cy:parallel`
4. Merge the Mochawesome JSON reports
5. Generate the HTML report
6. Upload it as the `mochawesome-html` artifact

**Required GitHub Secrets:**

The test step reads credentials from repository secrets. Add these under **Settings → Secrets and variables → Actions**:

| Secret             | Used for              |
| ------------------ | --------------------- |
| `USER_EMAIL`       | Regular user login    |
| `USER_PASSWORD`    | Regular user password |
| `REALTOR_EMAIL`    | Realtor login         |
| `REALTOR_PASSWORD` | Realtor password      |

**Credentials step from the workflow:**

```yaml
- name: Run Cypress E2E tests in parallel
  env:
    USER_EMAIL: ${{ secrets.USER_EMAIL }}
    USER_PASSWORD: ${{ secrets.USER_PASSWORD }}
    REALTOR_EMAIL: ${{ secrets.REALTOR_EMAIL }}
    REALTOR_PASSWORD: ${{ secrets.REALTOR_PASSWORD }}
  run: npm run cy:parallel
```

---

## 🐞 Known Issues

- **`[FEATLIST-003]` is skipped.** The dev site's `GET /api/estate-favorite` endpoint returns a 500 error, so the dashboard can't show favorited listings. The test is marked `it.skip` with a comment in the spec and will be re-enabled once the API is fixed.
- **Uncaught app exceptions.** The application under test throws uncaught JavaScript errors on some pages. Specs that hit those pages call the custom `cy.errorHandler()` command so app-side errors don't fail the test.

---

## 📢 Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "feat: short description"`
4. Open a Pull Request against the `main` branch for review.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📝 Future Enhancements

- Re-enable `[FEATLIST-003]` once the favorites API is fixed
- Add visual regression and accessibility tests
- Expand negative and edge case scenarios
- Multi-browser cross-platform test execution

---

## Happy testing! 🚀
