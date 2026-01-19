import { test } from "@playwright/test";

const desktopViewport = { width: 1280, height: 720 };
const mobileViewport = { width: 360, height: 720 };

const routes = [
  { name: "home", path: "/", label: "Home", viewport: "desktop" },
  {
    name: "experience",
    path: "/experience",
    label: "Experience",
    viewport: "desktop",
  },
  {
    name: "education",
    path: "/education",
    label: "Education",
    viewport: "desktop",
  },
  { name: "mission", path: "/mission", label: "Mission", viewport: "desktop" },
  {
    name: "portfolio",
    path: "/portfolio",
    label: "Portfolio",
    viewport: "desktop",
  },
  { name: "resume", path: "/resume", label: "Resume", viewport: "desktop" },
  { name: "contact", path: "/contact", label: "Contact", viewport: "mobile" },
];

test.describe("validate routes", () => {
  for (const route of routes) {
    test(`validates ${route.name}`, async ({ page }) => {
      const viewport =
        route.viewport === "mobile" ? mobileViewport : desktopViewport;
      await page.setViewportSize(viewport);
      await page.goto("/", { waitUntil: "networkidle" });
      await page.getByRole("link", { name: route.label }).click();
      await page.waitForURL(route.path);
      await page.waitForTimeout(500);
      await page.screenshot({
        path: `test-results/validate-routes/${route.name}.png`,
        fullPage: true,
      });
    });
  }
});
