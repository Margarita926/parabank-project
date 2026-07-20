import { test } from '../_fixtures/fixtures';
import { expect } from '@playwright/test';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { label, severity } from 'allure-js-commons';

test.describe('Account Activity', () => {
	test.beforeEach(async ({ page, user }) => {
		await signUpUser(page, user);
	});

	test('Filter account transactions by type shows results', async ({
		homePage,
		page,
	}) => {
		await label('parentSuite', 'Parabank');
		await label('suite', 'Account Overview');
		await label('subSuite', 'Account Activity');
		await severity('minor');

		await homePage.clickAccountOverviewButton();
		await page.locator('#accountTable a').first().click();

		await page.selectOption('#transactionType', 'Credit');
		await page.getByRole('button', { name: 'Go' }).click();

		await expect(page.locator('#transactionTable')).toBeVisible();
	});
});
