import { test } from '../_fixtures/fixtures';
import { expect } from '@playwright/test';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { label, severity } from 'allure-js-commons';

test.describe('Account Details', () => {
	test.beforeEach(async ({ page, user }) => {
		await signUpUser(page, user);
	});

	test('Account details page shows correct account info', async ({
		homePage,
		page,
	}) => {
		await label('parentSuite', 'Parabank');
		await label('suite', 'Account Overview');
		await label('subSuite', 'Account Details');
		await severity('normal');

		await homePage.clickAccountOverviewButton();

		const accountId = (
			await page.locator('#accountTable a').first().innerText()
		).trim();
		await page.locator('#accountTable a').first().click();

		await expect(
			page.getByRole('heading', { name: 'Account Details' }),
		).toBeVisible();
		await expect(page.locator('#accountId')).toHaveText(accountId);
		await expect(page.locator('#accountType')).toHaveText('CHECKING');
	});
});
