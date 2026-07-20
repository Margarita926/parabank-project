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



# How to use this project

## Installation steps

To install the project follow the next steps:

1. Install Node.js.
2. Run the installation command in the project root.:
```bash
npm ci
```
3. Run the browsers installation in the project root.
```bash
npx playwright install
```
4. Install Allure commandline tool (Allure requires Java 8 or higher).
```bash
npm install -g allure-commandline
```

# How to run tests
1. Run all tests across all configured browsers:
```bash
- Headless mode:
npx playwright test
```
```bash
- UI mode:
npx playwright test --ui
``` 

2. Run all tests in appropriate browser:
```bash
npx playwright test --project=firefox
```
3. Run specific tests file:
```bash
npx playwright test tests/auth/signIn/signInPositive.spec.js
```


## How to generate report
1. To generate an Allure report, you first need to run tests using the following command:
```bash
 npx playwright test
```
2. To create an HTML report, you need to use the command:
```bash
 allure serve allure-results
```
3. To run full tests for Allure (clean results first) use the command:
```bash
npm run test:allure
```
4. Open Allure report:
```bash
npm run report:open
```

## Additional Run Instructions

### 1) Adds all changed files, prepares them for commit
git add .  

### 2) Save the staged changes to the local repository
git commit -m "comment"

### 33) Sends the committed changes from the local master branch to the remote origin repository
git push origin master

### 4) Publish report to GitHub Pages
npm run deploy

## Good to Know
- By default, the configuration uses ENV_TYPE=local.
- The .env.local file should contain BASE_URL, for example:
BASE_URL=https://parabank.parasoft.com
