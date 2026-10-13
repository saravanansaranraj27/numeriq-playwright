import { test, expect } from "@playwright/test";
import { gotoReady } from "../utils/app";

test.describe("Numeriq Scientific Calculator", () => {
  test.beforeEach(async ({ page }) => {
    await gotoReady(page, "/calculator/");
  });

  test("opens the scientific calculator", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Scientific workspace", exact: true }),
    ).toBeVisible();
  });

  test("shows the calculator keypad", async ({ page }) => {
    await expect(
      page.getByRole("button", { name: "AC", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "=", exact: true }),
    ).toBeVisible();
  });

  test("exposes degree and radian modes", async ({ page }) => {
    await expect(
      page.getByRole("button", { name: "DEG", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "RAD", exact: true }),
    ).toBeVisible();
  });
});
