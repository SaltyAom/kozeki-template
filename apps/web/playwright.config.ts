import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
    testDir: 'src',
    fullyParallel: true,
    testMatch: '**/*.e2e.tsx',
    // Fail the build on CI if you accidentally left test.only in the source code.
    forbidOnly: !!process.env.CI,
    // Retry on CI only.
    retries: process.env.CI ? 2 : 0,
    // Opt out of parallel tests on CI.
    workers: process.env.CI ? 1 : undefined,

    // Reporter to use
    reporter: 'html',

    use: {
        // Base URL to use in actions like `await page.goto('/')`.
        baseURL: 'http://localhost:3000',
        trace: 'on-first-retry'
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        }
    ],
    // Run local dev servers before starting the tests.
    webServer: [
        {
            command: 'cd ../api && bun run dev',
            url: 'http://localhost:3001',
            reuseExistingServer: !process.env.CI
        },
        {
            command: 'bun run dev',
            url: 'http://localhost:3000',
            reuseExistingServer: !process.env.CI
        }
    ]
})
