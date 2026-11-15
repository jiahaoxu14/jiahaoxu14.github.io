// Run after export-slides.py --prepare-canvas-capture, with the site on port 8000.
const fs = require("node:fs/promises");
const path = require("node:path");
const { chromium } = require(path.resolve(__dirname, "../../CanvasAct/frontend/node_modules/playwright"));

(async () => {
  const output = path.resolve(__dirname, "../images/canvasobs-slides");
  await fs.mkdir(output, { recursive: true });
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  try {
    const page = await browser.newPage();
    const cases = [
      { name: "observation", query: "observation-slide", steps: 6, type: "canvasobs-slide-step" },
      { name: "original", query: "case-study-slide&variant=original", steps: 9, type: "case-study-step" },
      { name: "canvasobs", query: "case-study-slide&variant=canvasobs", steps: 9, type: "case-study-step" },
    ];
    for (const example of cases) {
      await page.setViewportSize(example.name === "observation" ? { width: 800, height: 440 } : { width: 1152, height: 440 });
      await page.goto(`http://127.0.0.1:8000/slides/canvasobs/demo/?${example.query}`);
      await page.waitForFunction(() => window.__canvasEditor);
      for (let step = 0; step < example.steps; step++) {
        if (example.name !== "observation" && step === 1) await page.setViewportSize({ width: 564, height: 390 });
        await page.evaluate(({ type, step }) => window.postMessage({ type, step }, location.origin), { type: example.type, step });
        await page.waitForTimeout(step > 0 && example.name !== "observation" && step % 2 === 0 ? 4400 : 1800);
        const result = await page.evaluate(async () => {
          const editor = window.__canvasEditor;
          return editor.getSvgString([...editor.getCurrentPageShapeIds()], {
            bounds: editor.getViewportPageBounds(), padding: 0, background: true,
          });
        });
        if (!result?.svg) throw new Error(`Canvas export failed: ${example.name} ${step}`);
        await fs.writeFile(path.join(output, `${example.name}-${step}.svg`), result.svg + "\n");
      }
      console.log(`Exported ${example.name}: ${example.steps} canvas views`);
    }
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
