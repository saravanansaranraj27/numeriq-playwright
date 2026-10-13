import { test, expect } from "@playwright/test";
import { gotoReady } from "../utils/app";

test("finds and opens a tool from global search", async ({ page }) => {
  await gotoReady(page, "/");

  const search = page.getByRole("combobox", { name: "Search Numeriq tools" });

  await search.fill("matrix");
  await expect(search).toHaveAttribute("aria-expanded", "true");

  const results = page.getByRole("listbox", { name: "Search results" });
  await expect(results).toBeVisible();

  const matrixResult = results
    .getByRole("option")
    .filter({ hasText: "Matrix Calculator" });

  await expect(matrixResult).toBeVisible();
  await matrixResult.click();

  await expect(page).toHaveURL(/\/matrix\/?$/);
  await expect(
    page.getByRole("heading", { name: "Matrix Calculator", exact: true }),
  ).toBeVisible();
});
