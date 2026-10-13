import { test, expect } from "@playwright/test";
import { gotoReady } from "../utils/app";

test("opens the first matching search result with Enter", async ({ page }) => {
  await gotoReady(page, "/");

  const search = page.getByRole("combobox", { name: "Search Numeriq tools" });

  await search.fill("statistics");
  await expect(search).toHaveAttribute("aria-expanded", "true");
  await expect(
    page.getByRole("option").filter({ hasText: "Statistics" }).first(),
  ).toBeVisible();

  await search.press("Enter");

  await expect(page).toHaveURL(/\/statistics\/?$/);
  await expect(
    page.getByRole("heading", { name: "Statistics", exact: true }),
  ).toBeVisible();
});
