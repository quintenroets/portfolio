import { defineConfig } from "@playwright/test";
import { DEV_PORT } from "./dev-port";

export default defineConfig({
  testDir: "../tests",
  retries: 0,
  workers: "100%",
  fullyParallel: true,
  testMatch: ["**/*.pw.js"],
  use: {
    baseURL: `http://localhost:${DEV_PORT}`,
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: "off",
  },
  webServer: {
    command: "bun run dev",
    port: DEV_PORT,
    reuseExistingServer: true,
    timeout: 120000,
  },
});
