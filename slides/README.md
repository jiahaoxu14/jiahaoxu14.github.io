# Conference slides

- `/slides/svs/`: Spatial Visual Analytics for Multi-Document Summary
  Verification, IEEE VIS 2026. 23 main slides and 8 supporting slides.
- `/slides/canvasobs/`: CanvasObs, VISxGenAI at IEEE VIS 2026. 9 slides.

These are static exports of the author's existing Slidev presentations. The
website itself needs no package manager or build step. Hash-based slide URLs
allow navigation and refresh on GitHub Pages. The root `.nojekyll` file preserves
all exported assets, including filenames beginning with an underscore.

## Sources and rebuilding

The complete SVS deck lives in the neighboring project
`../../STT_Attributor/paper/vis2026/`; the older `SVS_2026VIS` project contains
only an opening slide. The CanvasObs deck lives in
`../../CanvasAct/slides/`, despite the prototype repository's CanvasAct name.

With each source project's existing dependencies installed, run from the
website repository root:

```sh
python3 scripts/export-slides.py
```

Use `--projects-root /absolute/path` if those project folders are elsewhere.
The exporter builds from temporary copies and leaves the source projects
unchanged. It exports readable, unminified JavaScript and CSS, excludes speaker
notes and capture manifests, preserves the bundled font licenses, and rebases
runtime asset paths for the two website routes. Commit the exports when updating
the published presentations; do not edit generated bundles manually.

## Public demo adaptations

SVS uses the deck's existing recordings for its two case-study demonstrations,
with playback controls. The public deck does not require the local SVS server.

CanvasObs uses native SVG exports of its isolated demonstration canvases,
retaining all six observation steps and nine case-study steps for each variant.
These views are in `../images/canvasobs-slides/`. They preserve the canvas objects
and camera views; visitors advance the slides rather than manipulating canvas
objects. The case-study sequence is an illustrative replay, as in the original
presentation. The public deck does not load the tldraw SDK or make model calls.

To refresh these exported views, run the local website server on port 8000 and:

```sh
python3 scripts/export-slides.py --prepare-canvas-capture
node scripts/capture-canvas-views.cjs
python3 scripts/export-slides.py
```

The intermediate capture build contains development-only canvases and must not
be published. The final command replaces it with the public view-only deck.
Capture uses installed Chrome and the CanvasAct project's Playwright dependency.

## Enabling live CanvasObs examples

The tldraw SDK requires a valid production license for live canvases on a public
domain: https://tldraw.dev/community/license. A hobby-license application was
submitted for `jiahaox.com` in November 2026; publication of live canvases remains
dependent on approval and a valid key. The key is designed to be public.

After receiving a key covering `jiahaox.com`, set `TLDRAW_LICENSE_KEY` in the
local environment and run:

```sh
python3 scripts/export-slides.py --interactive
```

This restores the isolated live examples with the same-origin message checks.
It preserves tldraw's required attribution and does not include the full
CanvasAct application, backend, model credentials, or saved user workspaces.
Verify the examples on the licensed domain before considering them deployed.
