import { test, expect } from "@playwright/test";
import { gotoReady } from "../utils/app";

test("opens Function Plotter", async ({ page }) => {
  await gotoReady(page, "/graphing/");
  await expect(
    page.getByRole("heading", { name: "Function Plotter", exact: true }),
  ).toBeVisible();
});
