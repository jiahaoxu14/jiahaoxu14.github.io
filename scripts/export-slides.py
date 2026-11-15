#!/usr/bin/env python3
"""Export the existing Slidev projects as static, unminified website assets."""

import argparse
import json
import os
import re
import shutil
import subprocess
import tempfile
from pathlib import Path


SITE = Path(__file__).resolve().parents[1]


def write_export(path, content):
    lines = [re.sub(r"^[ \t]+", lambda match: match[0].expandtabs(2), line.rstrip())
             for line in content.splitlines()]
    path.write_text("\n".join(lines).rstrip() + "\n")


def run(command, directory):
    result = subprocess.run(command, cwd=directory, capture_output=True, text=True)
    if result.returncode:
        raise RuntimeError(result.stdout[-2000:] + result.stderr[:4000])


def link_modules(source, target):
    target.mkdir()
    for module in source.iterdir():
        if not module.name.startswith("."):
            (target / module.name).symlink_to(module, target_is_directory=module.is_dir())


def use_saved_canvases(target):
    components = target / "components"
    for name in ("ObservationProblems.vue", "EvaluationCaseStudy.vue"):
        path = components / name
        content = path.read_text().replace("computed, ref, watch, onMounted, onUnmounted", "computed")
        content = content.replace("$clicks, $nav", "$clicks")
        content = re.sub(r"const (?:canvas|frames) = ref\([^\n]+\)\n", "", content)
        content = re.sub(r"(?:const send =|function send\().*?</script>", "</script>", content, flags=re.S)
        if name == "ObservationProblems.vue":
            replacement = '<img class="canvas-view" :src="`/images/canvasobs-slides/observation-${step}.svg`" :alt="`${current.title}: ${revealed ? current.after : current.before}`" />'
        else:
            replacement = '<img class="canvas-view" :src="`/images/canvasobs-slides/${variant.id}-${step}.svg`" :alt="`${variant.label}: ${step ? task[0] : \'case-study overview\'}`" />'
        content, count = re.subn(r"<iframe\b.*?/>", lambda _: replacement, content, flags=re.S)
        if count != 1:
            raise ValueError(f"Expected one canvas embed in {name}, found {count}")
        content = content.replace("iframe {", ".canvas-view { object-fit: contain; background: #f9fafb;")
        path.write_text(content)


def export_deck(source, slug, staging, interactive=False):
    target = staging / slug
    target.mkdir()
    for name in ("slides.md", "package.json", "global-bottom.vue", "components", "styles", "public"):
        origin = source / name
        if origin.is_dir():
            shutil.copytree(origin, target / name, ignore=shutil.ignore_patterns("*.json", "README.md", ".DS_Store"))
        elif origin.exists():
            shutil.copy2(origin, target / name)
    link_modules(source / "node_modules", target / "node_modules")
    base = f"/slides/{slug}/"
    slides = target / "slides.md"
    content = slides.read_text()
    content = re.sub(r"<!--.*?-->", "", content, flags=re.S)
    content = content.replace("---\n", "---\nrouterMode: hash\npresenter: false\n", 1)
    content = content.replace("local: sans", "local: ['DC Sans', 'Fira Code']")
    if slug == "svs":
        # Existing recordings cover the same two cases without a local server.
        content = content.replace("<CaseStudyDemo ", "<CaseStudyVideos ")
        content = re.sub(r'(title: "Demo"\nclicks:) 0', r"\1 1", content)
        (target / "components/CaseStudyDemo.vue").unlink()
        (target / "components/LivePrototypeDemo.vue").unlink()
    slides.write_text(content)
    if slug == "canvasobs":
        case_study = target / "components/EvaluationCaseStudy.vue"
        content = case_study.read_text()
        content = content.replace('</h2>', '<span class="replay-note">Illustrative replay</span></h2>', 1)
        content = content.replace('</style>', '.replay-note { float: right; margin-left: 24px; font: 400 16px/1.8 sans-serif; color: #59665f; }\n</style>')
        case_study.write_text(content)
    if slug == "canvasobs" and not interactive:
        use_saved_canvases(target)
    for path in target.rglob("*"):
        if path.suffix not in {".md", ".vue", ".css"}:
            continue
        content = path.read_text()
        if slug == "canvasobs":
            content = content.replace("http://127.0.0.1:5173/", base + "demo/")
            content = content.replace("'http://127.0.0.1:5173'", "window.location.origin")
        path.write_text(content)
    (target / "vite.config.ts").write_text(
        "export default { build: { emptyOutDir: true, minify: false, cssMinify: false, sourcemap: false } }\n"
    )
    output = SITE / "slides" / slug
    run(["node", str(target / "node_modules/@slidev/cli/bin/slidev.mjs"), "build", "slides.md",
         "--base", base, "--out", str(output), "--without-notes"], target)
    # Vite rebases static assets; runtime strings need the same deployment prefix.
    for path in output.rglob("*"):
        if path.suffix in {".js", ".css", ".html", ".txt"}:
            content = re.sub(r"([\"'`(])/((?:images|videos|fonts|prototype)/)(?!canvasobs-slides/)",
                             rf"\1{base}\2", path.read_text())
            content = content.replace('href="https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png"',
                                      'href="/images/icon.png"')
            write_export(path, content)
    print(f"Exported {slug}: {output}", flush=True)


def export_canvas_demo(project, staging, license_key=None, capture=False):
    source = project / "frontend/client"
    target = staging / "canvas-demo"
    target.mkdir()
    link_modules(project / "frontend/node_modules", target / "node_modules")
    (target / "package.json").write_text('{"private":true,"type":"module"}\n')
    (target / "usageScenario").mkdir()
    for name in ("ObservationSlideDemo.tsx", "CaseStudySlideDemo.tsx", "usageScenario/observationCaseStudies.ts"):
        content = (source / name).read_text()
        content = content.replace("['http://localhost:3033', 'http://127.0.0.1:3033']", "[window.location.origin]")
        if capture:
            content = content.replace("const onMount = useCallback((editor: Editor) => {",
                                      "const onMount = useCallback((editor: Editor) => { window.__canvasEditor = editor;")
        if license_key:
            content = content.replace("<Tldraw hideUi", f"<Tldraw licenseKey={json.dumps(license_key)} hideUi")
        (target / name).write_text(content)
    (target / "main.tsx").write_text(
        "import { createRoot } from 'react-dom/client'\n"
        "import Observation from './ObservationSlideDemo'\n"
        "import CaseStudy from './CaseStudySlideDemo'\n"
        "const root = document.getElementById('root')\n"
        "if (root) createRoot(root).render(new URLSearchParams(location.search).has('observation-slide') ? <Observation /> : <CaseStudy />)\n"
    )
    (target / "index.html").write_text(
        '<!doctype html><html lang="en"><head><meta charset="utf-8">'
        '<meta name="viewport" content="width=device-width, initial-scale=1">'
        '<title>CanvasObs presentation examples</title></head><body>'
        '<div id="root"></div><script type="module" src="/main.tsx"></script></body></html>\n'
    )
    (target / "vite.config.ts").write_text(
        "export default { base: '/slides/canvasobs/demo/', publicDir: false, "
        "esbuild: { jsx: 'automatic' }, build: { emptyOutDir: true, minify: false, cssMinify: false, sourcemap: false } }\n"
    )
    run(["node", str(target / "node_modules/vite/bin/vite.js"), "build", "--outDir",
         str(SITE / "slides/canvasobs/demo")], target)
    for path in (SITE / "slides/canvasobs/demo").rglob("*"):
        if path.suffix in {".js", ".css", ".html"}:
            write_export(path, path.read_text())
    print("Exported isolated CanvasObs examples (no backend or model calls).", flush=True)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--projects-root", type=Path, default=SITE.parent)
    parser.add_argument("--deck", choices=("svs", "canvasobs"), help="Export only one presentation.")
    parser.add_argument("--prepare-canvas-capture", action="store_true",
                        help="Build local-only canvases to refresh exported demo views. Do not publish this build.")
    parser.add_argument("--interactive", action="store_true",
                        help="Include live canvases using the public TLDRAW_LICENSE_KEY environment variable.")
    args = parser.parse_args()
    if args.interactive and args.prepare_canvas_capture:
        parser.error("Choose either the licensed public build or the local capture build.")
    license_key = os.environ.get("TLDRAW_LICENSE_KEY") if args.interactive else None
    if args.interactive and not license_key:
        parser.error("--interactive requires a valid TLDRAW_LICENSE_KEY for jiahaox.com.")
    interactive = args.interactive or args.prepare_canvas_capture
    if not interactive and args.deck != "svs":
        for name, count in (("observation", 6), ("original", 9), ("canvasobs", 9)):
            for step in range(count):
                if not (SITE / f"images/canvasobs-slides/{name}-{step}.svg").is_file():
                    parser.error("Export the CanvasObs views before building the public deck.")
    sources = {
        "svs": args.projects_root / "STT_Attributor/paper/vis2026",
        "canvasobs": args.projects_root / "CanvasAct/slides",
    }
    if args.deck:
        sources = {args.deck: sources[args.deck]}
    dependencies = list(sources.values())
    if interactive and "canvasobs" in sources:
        dependencies.append(args.projects_root / "CanvasAct/frontend")
    for source in dependencies:
        if not (source / "node_modules").is_dir():
            raise SystemExit(f"Missing installed dependencies: {source / 'node_modules'}")
    with tempfile.TemporaryDirectory(prefix="jiahao-slide-export-") as temporary:
        staging = Path(temporary)
        for slug, source in sources.items():
            export_deck(source, slug, staging, interactive)
        if interactive and "canvasobs" in sources:
            export_canvas_demo(args.projects_root / "CanvasAct", staging, license_key, args.prepare_canvas_capture)
        elif "canvasobs" in sources:
            assert not (SITE / "slides/canvasobs/demo").exists(), "Public export must not include local-only canvases."


if __name__ == "__main__":
    main()
