import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "../tests",
  retries: 0,
  workers: "100%",
  fullyParallel: true,
  testMatch: ["**/*.pw.js"],
  use: {
    baseURL: "http://localhost:8080",
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: "off",
  },
  webServer: {
    command: "bun run dev",
    port: 8080,
    reuseExistingServer: true,
    timeout: 120000,
  },
});
