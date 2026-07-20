import fs from 'fs-extra';

async function globalSetup() {
  await fs.remove('allure-results');
  await fs.ensureDir('allure-results');
}

export default globalSetup;
