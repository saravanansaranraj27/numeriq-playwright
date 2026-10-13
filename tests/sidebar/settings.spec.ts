import { test, expect } from "@playwright/test";
import { gotoReady } from "../utils/app";

test("opens Settings", async ({ page }) => {
  await gotoReady(page, "/settings/");
  await expect(
    page.getByRole("heading", { name: "Settings", exact: true }),
  ).toBeVisible();
});
