import { test, expect } from "@playwright/test";
import { gotoReady } from "../utils/app";

test("renders the application at a mobile viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await gotoReady(page, "/");
  await expect(
    page.getByRole("button", { name: "Open navigation" }),
  ).toBeVisible();
  await expect(
    page.getByRole("combobox", { name: "Search Numeriq tools" }),
  ).toBeVisible();
});
