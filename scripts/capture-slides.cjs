const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://localhost:3000';
const TOTAL_SLIDES = 10;
const OUTPUT_DIR = path.join(__dirname, '..', 'artifacts', 'assets', 'images', 'posters', 'pages');

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 810 },
    deviceScaleFactor: 2,
  });

  for (let i = 1; i <= TOTAL_SLIDES; i++) {
    const page = await context.newPage();
    const nocache = Date.now() + i;
    const url = `${BASE_URL}/slide-${i}.html?nocache=${nocache}`;
    
    console.log(`Capturing slide ${i}...`);
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);

    const screenshotPath = path.join(OUTPUT_DIR, `page-${i}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: false });
    console.log(`  Saved: ${screenshotPath}`);
    
    await page.close();
  }

  await browser.close();
  console.log('All slides captured!');
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
