import { expect, type Page } from "@playwright/test";

export async function gotoReady(page: Page, path: string) {
  await page.goto(path);
  await expect(page.locator("#numeriq-initial-loading")).toBeHidden({
    timeout: 15_000,
  });
}
