import { test, expect } from "@playwright/test";
import { gotoReady } from "../utils/app";

test("opens Statistics", async ({ page }) => {
  await gotoReady(page, "/statistics/");
  await expect(
    page.getByRole("heading", { name: "Statistics", exact: true }),
  ).toBeVisible();
});
