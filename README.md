# Parabank Automation E2E Test

## Project Description
This is a pet project for E2E test automation of the Parabank web application.
The project covers key user flows: sign up, sign in, funds transfer, bill payment, opening a new account, loan request, transaction search, and profile update.

# Not logged in user:

- Positive and negative auth - register & sign-in.
- Forgot login info?

# Logged in user:
- Account Overview
- Account Overivew -> Account Details & Account Activity filtering
- Open New Account
- Transfer Funds
- Bill Pay
- Request Loan
- Update Contact Info
- Log out

## Technologies Used
- Playwright
- JavaScript and TypeScript (for fixtures)
- Playwright Test fixtures
- Page Object Model
- Data-driven / parameterized testing
- Browser contexts and page handling
- Test data generation with Faker
- Allure Report
- Node.js and npm
- GitHub Pages for report publishing
- ESLint and Prettier

## Preview Link
- Test report (GitHub Pages): https://margarita926.github.io/parabank-project/

## Design/Reference Link
- Reference application (test environment): https://parabank.parasoft.com/

## Additional Run Instructions

### 1) Install dependencies
npm install

### 2) Install Playwright browsers
npx playwright install

### 3) Run tests
- Headless mode:
npx playwright test

- UI mode:
npx playwright test --ui

### 4) Run full tests for Allure (clean results first)
npm run test:allure

### 5) Open Allure report
npm run report:open

### 6) Publish report to GitHub Pages
npm run deploy

## Good to Know
- By default, the configuration uses ENV_TYPE=local.
- The .env.local file should contain BASE_URL, for example:
BASE_URL=https://parabank.parasoft.com
