import { test, expect } from "@playwright/test";
import { gotoReady } from "../utils/app";

test.describe("Numeriq Finance", () => {
  test("opens EMI Calculator", async ({ page }) => {
    await gotoReady(page, "/emi/");
    await expect(
      page.getByRole("heading", { name: "EMI & Loan Calculator", exact: true }),
    ).toBeVisible();
  });

  test("opens Compound Interest", async ({ page }) => {
    await gotoReady(page, "/compound/");
    await expect(
      page.getByRole("heading", { name: "Compound Interest", exact: true }),
    ).toBeVisible();
  });

  test("opens Investment Calculator", async ({ page }) => {
    await gotoReady(page, "/investment/");
    await expect(
      page.getByRole("heading", { name: "Investment Calculator", exact: true }),
    ).toBeVisible();
  });
});
