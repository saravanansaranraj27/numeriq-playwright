import { test, expect } from "@playwright/test";
import { gotoReady } from "../utils/app";

const financeTools = [
  {
    label: "EMI Calculator",
    path: /\/emi\/?$/,
    heading: "EMI & Loan Calculator",
  },
  {
    label: "Compound Interest",
    path: /\/compound\/?$/,
    heading: "Compound Interest",
  },
  {
    label: "Investment Calculator",
    path: /\/investment\/?$/,
    heading: "Investment Calculator",
  },
];

test("navigates from Home to finance tools", async ({ page }) => {
  await gotoReady(page, "/");

  for (const item of financeTools) {
    await page
      .getByRole("button", { name: item.label, exact: true })
      .first()
      .click();
    await expect(page).toHaveURL(item.path);
    await expect(
      page.getByRole("heading", { name: item.heading, exact: true }),
    ).toBeVisible();
  }
});
