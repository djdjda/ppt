const PptxGenJS = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

const PAGES_DIR = path.join(__dirname, '..', '..', 'artifacts', 'assets', 'images', 'posters', 'pages');
const OUTPUT_PATH = path.join(__dirname, '..', '..', 'artifacts', 'presentation.pptx');
const TOTAL_SLIDES = 10;

async function main() {
  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_16x9'; // 10" x 5.625"
  pptx.author = 'WorkBuddy';
  pptx.title = '将 d/dx 表示为矩阵 — 微分算子的矩阵表示';

  for (let i = 1; i <= TOTAL_SLIDES; i++) {
    const imgPath = path.join(PAGES_DIR, `page-${i}.png`);
    if (!fs.existsSync(imgPath)) {
      console.error(`Missing: ${imgPath}`);
      continue;
    }

    // Read image as base64 for faster embedding
    const imgData = fs.readFileSync(imgPath);
    const base64 = 'image/png;base64,' + imgData.toString('base64');

    const slide = pptx.addSlide();
    slide.addImage({
      data: base64,
      x: 0,
      y: 0,
      w: 10,
      h: 5.625,
    });
    console.log(`Added slide ${i}`);
  }

  await pptx.writeFile({ fileName: OUTPUT_PATH });
  console.log(`PPTX saved: ${OUTPUT_PATH}`);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
