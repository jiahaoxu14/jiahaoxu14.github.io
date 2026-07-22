const year = document.querySelector("#year");
const reveals = [...document.querySelectorAll(".reveal")];
const progress = document.querySelector(".scroll-progress");

if (year) {
  year.textContent = new Date().getFullYear();
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );

  reveals.forEach((element) => revealObserver.observe(element));
} else {
  reveals.forEach((element) => element.classList.add("is-visible"));
}

function updateProgress() {
  if (!progress) return;

  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
  progress.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`;
}

updateProgress();
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
