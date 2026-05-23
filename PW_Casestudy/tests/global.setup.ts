import {test as setup, expect } from '@playwright/test'
import { STORAGE_STATE } from '../playwright.config'

setup('Demo balze test', async({page}) => {
    await page.goto('https://demoblaze.com/');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('ajay26');
    await page.locator('#loginpassword').fill('Ajay@2026');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.getByRole('link', {name: 'Welcome ajay26'})).toBeVisible();
    await page.context().storageState({path: STORAGE_STATE})
});


