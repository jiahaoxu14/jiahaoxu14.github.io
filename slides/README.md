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
python3 scripts/export-slides.py --interactive
```

Set `TLDRAW_LICENSE_KEY` to the approved public hobby key for the live CanvasObs
examples. Use `--deck svs` or `--deck canvasobs` to rebuild just one deck, or
`--projects-root /absolute/path` if the project folders are elsewhere.
The exporter builds from temporary copies and leaves the source projects
unchanged. It exports readable, unminified JavaScript and CSS, excludes speaker
notes and capture manifests, preserves the bundled font licenses, and rebases
runtime asset paths for the two website routes. Commit the exports when updating
the published presentations; do not edit generated bundles manually.

## Public demo adaptations

SVS uses the deck's existing recordings for its two case-study demonstrations,
with playback controls. The public deck does not require the local SVS server.

CanvasObs includes isolated live tldraw canvases under `/slides/canvasobs/demo/`,
using the approved hobby license and preserving the required attribution.
The observation examples retain six reveal steps, and the case study has nine
steps for each variant. The case-study sequence is labeled as an illustrative
replay, as in the original presentation; it does not make live model calls.
Canvas changes are not persisted.

Native SVG exports remain in `../images/canvasobs-slides/` for an optional
view-only build, created by omitting `--interactive`. This mode retains the
reveal steps without loading the tldraw SDK.

To refresh these exported views, run the local website server on port 8000 and:

```sh
python3 scripts/export-slides.py --prepare-canvas-capture
node scripts/capture-canvas-views.cjs
python3 scripts/export-slides.py
```

The intermediate capture build contains development-only canvases and must not
be published. The final command replaces it with the public view-only deck.
Capture uses installed Chrome and the CanvasAct project's Playwright dependency.

## CanvasObs hobby license

The tldraw SDK requires a valid production license for live canvases on a public
domain: https://tldraw.dev/community/license. The author supplied an approved
hobby license for `jiahaox.com` on November 15, 2026, expiring November 15, 2027.
The key is designed to be public and is embedded only in the exported canvas
bundle. Keep the required tldraw watermark visible.

To update the live examples, set `TLDRAW_LICENSE_KEY` in the local environment
and run:

```sh
python3 scripts/export-slides.py --deck canvasobs --interactive
```

This restores the isolated live examples with the same-origin message checks.
It preserves tldraw's required attribution and does not include the full
CanvasAct application, backend, model credentials, or saved user workspaces.
Verify the examples on the licensed domain before considering them deployed.
