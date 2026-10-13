import { test, expect } from "@playwright/test";
import { gotoReady } from "../utils/app";

const routes = [
  ["units", "Unit Converter"],
  ["percentage", "Percentage Calculator"],
  ["calculus", "Calculus"],
  ["complex", "Complex Numbers"],
  ["vectors", "Vectors"],
];

for (const [route, heading] of routes) {
  test(`opens ${heading}`, async ({ page }) => {
    await gotoReady(page, `/${route}/`);
    await expect(
      page.getByRole("heading", { name: heading, exact: true }),
    ).toBeVisible();
  });
}
