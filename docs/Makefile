.PHONY: build watch publish clean

build:
	latexmk -pdf -interaction=nonstopmode -halt-on-error -outdir=build cv.tex

watch:
	latexmk -pdf -pvc -view=none -interaction=nonstopmode -halt-on-error -outdir=build cv.tex

publish: build
	cp build/cv.pdf Resume_Jiahao.pdf

clean:
	latexmk -C -outdir=build cv.tex
