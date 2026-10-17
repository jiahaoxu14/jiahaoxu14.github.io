# Editing the CV

`cv.tex` is the editable, standalone LaTeX source for the academic CV, updated in
October 2026. It contains research interests, education, publications, and
teaching. The original resume supplied the degree dates and teaching history.
Research Experience and Technical Skills were removed at the author's request.
The author confirmed serving as a TA for Chris North's CS 5764: Information
Visualization. Dates are omitted from all TA entries at the author's request.

## Content sources

- The website and `../../DC_2026VIS/main.tex` in the neighboring project establish
  the current PhD focus: human-AI co-reasoning in shared 2D workspaces.
- [SVS on arXiv](https://arxiv.org/abs/2607.28853) and its camera-ready source in
  the neighboring `SVS_2026VIS` project support the full-paper citation.
- [CriterionSI on arXiv](https://arxiv.org/abs/2606.28517) and the
  [IEEE VIS 2026 program](https://aproxy.ieeevis.org/year/2026/program/papers/)
  confirm the short paper. Both VIS papers are listed as accepted; the conference
  is still upcoming as of this update.
- The [belief-elicitation article record](https://pubmed.ncbi.nlm.nih.gov/41150245/)
  supplies the journal volume, issue, pages, and February 2026 publication date.
  Some indexing records spell Jiahao's name "Jiaohao"; the CV retains the spelling
  used by the author and the existing website.
- [Overcoming Prior Barriers on arXiv](https://arxiv.org/abs/2610.12345) supplies
  the additional October 2026 preprint and author order. Its PDF identifies
  Jiahao Xu's affiliation as Virginia Tech, alongside Chris North and the
  collaborators named in the local Amazon proposal. It is not listed as accepted.

The original resume listed Virginia Tech research in September 2022-May 2023;
that historical appointment needs clarification if research experience is
restored. No candidacy milestone, graduation
date, new teaching appointment, service, award, grant award, or completed talk
has been inferred from a draft, proposal, presentation deck, or folder name.

## Layout and publication style

The CV uses Palatino, a left-aligned header, consistent institution/date columns,
and light section rules. Publication entries put authors, title, and venue on
separate lines. Full author lists and their original order are retained; only
Jiahao's name is bold within each citation. Published and accepted papers are
separate from preprints, acceptance status remains explicit, and paper links
use short arXiv or DOI labels. Bibliographic dates use years consistently.

The author-first citation style was informed by the public CVs of
[Minsuk Chang](https://www.minsukchang.info/documents/cv.pdf),
[Yiren Liu](https://yiren-liu.github.io/cv.pdf), and
[Zeyu Xiong](https://www.zeyuxiong.com/uploads/resume.pdf), reviewed in October
2026. Their formats vary; these references informed the citation conventions,
not the CV's factual content.

## Local tools

The terminal build uses `pdflatex`, `latexmk`, and `make`. TeX Live 2026 and
`latexmk` are already installed on this Mac. The document uses standard LaTeX
packages, with no external fonts, images, bibliography files, or shell escape.

Open `cv.tex` in Codex to edit it alongside the built-in PDF preview. That preview
does not replace the website's downloadable PDF. Use the commands below to build
and export with the installed TeX tools.

## Build and preview

Run these commands from the repository root:

```sh
make -C docs
open docs/build/cv.pdf
```

To rebuild automatically whenever you save the source:

```sh
make -C docs watch
```

Press `Ctrl+C` to stop watching. Build output and intermediate files stay in
`docs/build/`, which Git ignores. To remove those generated files:

```sh
make -C docs clean
```

## Update the website's CV

After reviewing the generated PDF:

```sh
make -C docs publish
```

This rebuilds the CV and copies it to `docs/Resume_Jiahao.pdf`, preserving the
website's existing download link. The command updates the local file only; it
does not commit, push, or deploy anything. Commit the source and published PDF
together when the content is ready.
