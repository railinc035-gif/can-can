const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

    await page.goto(`file://${process.cwd()}/index.html`);
    await page.waitForTimeout(500);

    // Open first project to check app preview
    await page.click('.miwy-open-btn');
    await page.waitForTimeout(500);

    // Verify preview frame is visible
    const isFrameVisible = await page.isVisible('#previewFrame');
    console.log('Preview frame visible:', isFrameVisible);

    await page.screenshot({ path: 'app_preview_screenshot.png' });
    await browser.close();
    console.log('Screenshot saved.');
})();
