const { chromium } = require('playwright');
const path = require('path');

const BASE_URL = 'http://localhost:3000';
const TOTAL_SLIDES = 10;
const OUTPUT_PATH = path.join(__dirname, '..', '..', 'artifacts', 'presentation.pdf');

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 810 },
    deviceScaleFactor: 2,
  });

  // Generate HTML that embeds all slides as images for PDF generation
  const page = await context.newPage();
  
  // Build HTML with all slides
  let htmlContent = `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  .slide { width: 1440px; height: 810px; page-break-after: always; }
  .slide img { width: 100%; height: 100%; object-fit: cover; }
  @page { size: 1440px 810px; margin: 0; }
</style>
</head>
<body>`;

  for (let i = 1; i <= TOTAL_SLIDES; i++) {
    htmlContent += `<div class="slide"><img src="${BASE_URL}/slide-${i}.html?nocache=${Date.now() + i}" /></div>`;
  }
  htmlContent += `</body></html>`;

  // Alternative: use Playwright PDF from individual pages
  // Better approach: screenshot each slide and compose PDF
  const pages = [];
  for (let i = 1; i <= TOTAL_SLIDES; i++) {
    const p = await context.newPage();
    const nocache = Date.now() + i * 100;
    await p.goto(`${BASE_URL}/slide-${i}.html?nocache=${nocache}`, { waitUntil: 'networkidle' });
    await p.waitForTimeout(1500);
    pages.push(p);
  }

  // Generate PDF from the first page with all pages
  const pdfPage = await context.newPage();
  
  // Build a local HTML with embedded base64 images
  const fs = require('fs');
  const PAGES_DIR = path.join(__dirname, '..', '..', 'artifacts', 'assets', 'images', 'posters', 'pages');
  
  let imgHtml = `<!DOCTYPE html><html><head><style>
    * { margin: 0; padding: 0; }
    .slide { width: 100vw; height: 100vh; page-break-after: always; display: flex; align-items: center; justify-content: center; }
    .slide img { width: 100%; height: 100%; object-fit: contain; }
    @page { size: 25.4cm 14.2875cm; margin: 0; }
  </style></head><body>`;

  for (let i = 1; i <= TOTAL_SLIDES; i++) {
    const imgPath = path.join(PAGES_DIR, `page-${i}.png`);
    const imgData = fs.readFileSync(imgPath);
    const base64 = imgData.toString('base64');
    imgHtml += `<div class="slide"><img src="data:image/png;base64,${base64}" /></div>`;
  }
  imgHtml += `</body></html>`;

  await pdfPage.setContent(imgHtml, { waitUntil: 'networkidle' });
  await pdfPage.waitForTimeout(500);

  await pdfPage.pdf({
    path: OUTPUT_PATH,
    width: '25.4cm',
    height: '14.2875cm',
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
  });

  console.log(`PDF saved: ${OUTPUT_PATH}`);

  // Close all
  for (const p of pages) await p.close();
  await pdfPage.close();
  await browser.close();
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
