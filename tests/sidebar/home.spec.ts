import { test, expect } from "@playwright/test";
import { gotoReady } from "../utils/app";

test.describe("Numeriq Home", () => {
  test.beforeEach(async ({ page }) => {
    await gotoReady(page, "/");
  });

  test("opens the Home workspace", async ({ page }) => {
    await expect(
      page.getByRole("heading", {
        name: "All-in-One Mathematics Toolkit",
        exact: true,
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("navigation", { name: "Primary navigation" }),
    ).toBeVisible();
  });

  test("shows the Numeriq brand", async ({ page }) => {
    await expect(
      page.getByText("Numeriq", { exact: true }).first(),
    ).toBeVisible();
  });
});
