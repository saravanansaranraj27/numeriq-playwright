import { test, expect } from "@playwright/test";
import { gotoReady } from "../utils/app";

test("opens Equation Solver", async ({ page }) => {
  await gotoReady(page, "/equation/");
  await expect(
    page.getByRole("heading", { name: "Equation Solver", exact: true }),
  ).toBeVisible();
});
