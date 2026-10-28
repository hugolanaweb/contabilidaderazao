import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'e2e',
  webServer: {
    command: 'npm run build && npm run preview -- --port 4330',
    url: 'http://localhost:4330',
    reuseExistingServer: true,
    timeout: 120_000,
  },
  use: { baseURL: 'http://localhost:4330' },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
