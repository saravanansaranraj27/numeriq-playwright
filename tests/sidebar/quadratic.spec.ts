import { test, expect } from "@playwright/test";
import { gotoReady } from "../utils/app";

test("opens Quadratic Solver", async ({ page }) => {
  await gotoReady(page, "/quadratic/");
  await expect(
    page.getByRole("heading", { name: "Quadratic Solver", exact: true }),
  ).toBeVisible();
});
