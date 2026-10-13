import { test, expect } from "@playwright/test";
import { gotoReady } from "../utils/app";

test("opens Matrix Calculator", async ({ page }) => {
  await gotoReady(page, "/matrix/");
  await expect(
    page.getByRole("heading", { name: "Matrix Calculator", exact: true }),
  ).toBeVisible();
});
