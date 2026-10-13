import { test, expect } from "@playwright/test";
import { gotoReady } from "../utils/app";

const workspaces = [
  {
    label: "Scientific Calculator",
    path: /\/calculator\/?$/,
    heading: "Scientific workspace",
  },
  {
    label: "Equation Solver",
    path: /\/equation\/?$/,
    heading: "Equation Solver",
  },
  {
    label: "Quadratic Solver",
    path: /\/quadratic\/?$/,
    heading: "Quadratic Solver",
  },
  { label: "Statistics", path: /\/statistics\/?$/, heading: "Statistics" },
  {
    label: "Matrix Calculator",
    path: /\/matrix\/?$/,
    heading: "Matrix Calculator",
  },
  {
    label: "Function Plotter",
    path: /\/graphing\/?$/,
    heading: "Function Plotter",
  },
  { label: "Settings", path: /\/settings\/?$/, heading: "Settings" },
];

test("navigates between Numeriq workspaces", async ({ page }) => {
  await gotoReady(page, "/");

  for (const item of workspaces) {
    await page
      .getByRole("button", { name: item.label, exact: true })
      .first()
      .click();
    await expect(page).toHaveURL(item.path);
    await expect(
      page.getByRole("heading", { name: item.heading, exact: true }),
    ).toBeVisible();
  }
});
