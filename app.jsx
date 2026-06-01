/* =========================================================
   APP — wires sections, scroll observers, cursor, theme tag
   ========================================================= */

const { useEffect, useRef } = React;

function App() {
  return (
    <>
      <CoverSection />
      <Marquee theme="bone" words={[
        "AI · ML · DEEP LEARNING",
        "TRANSFORMERS",
        "COMPUTER VISION",
        "REINFORCEMENT LEARNING",
        "GENERATIVE SYSTEMS",
        "CLOUD NATIVE",
      ]} />
      <IndexSection />
      <ProfileSection />
      <Marquee theme="newsprint" reverse words={[
        "PYTHON",
        "TENSORFLOW",
        "KERAS",
        "PYTORCH",
        "AWS · OCI",
        "DOCKER",
        "NEXT · REACT",
        "LANGCHAIN",
      ]} />
      <StackSection />
      <CaseworkSection />
      <PracticeSection />
      <Marquee theme="noir" words={[
        "STILL BUILDING",
        "STILL LEARNING",
        "STILL SHIPPING",
        "STILL CURIOUS",
      ]} />
      <ColophonSection />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);

/* ---------- After-mount wiring ---------- */
setTimeout(() => {
  /* 1) Scroll reveals */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        // also stagger letter children
        e.target.querySelectorAll(".reveal-letter").forEach((el) => {
          setTimeout(() => el.classList.add("in"), 0);
        });
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* 2) Section theme tracking — write current theme to <body> + side rail */
  const sections = [...document.querySelectorAll("section.spread[data-theme]")];
  const sectionTag = document.getElementById("sectionTag");
  const themeNames = {
    noir: "NOIR", bone: "BONE", slate: "SLATE",
    newsprint: "NEWSPRINT", charcoal: "CHARCOAL", pure: "PURE"
  };
  const sectionIo = new IntersectionObserver((entries) => {
    // pick the entry most centered in viewport
    let best = null;
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const rect = e.target.getBoundingClientRect();
        const center = Math.abs((rect.top + rect.bottom) / 2 - window.innerHeight / 2);
        if (!best || center < best.center) best = { el: e.target, center };
      }
    });
    if (best) {
      const theme = best.el.dataset.theme;
      const label = best.el.dataset.screenLabel || "—";
      document.body.dataset.theme = theme;
      document.documentElement.dataset.theme = theme;
      document.body.style.background = getComputedStyle(best.el).backgroundColor;
      document.body.style.color = getComputedStyle(best.el).color;
      if (sectionTag) sectionTag.textContent = "§ " + label.toUpperCase();
    }
  }, { threshold: [0.25, 0.5, 0.75] });
  sections.forEach((s) => sectionIo.observe(s));

  /* 3) Scroll progress + scroll pct */
  const progress = document.getElementById("progressBar");
  const pct = document.getElementById("scrollPct");
  function onScroll() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = Math.min(1, Math.max(0, window.scrollY / max));
    if (progress) progress.style.width = (p * 100).toFixed(2) + "%";
    if (pct) pct.textContent = String(Math.round(p * 100)).padStart(3, "0") + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* 3b) Smooth parallax — rAF loop with eased interpolation.
         Each frame: read scroll, compute target offset per element,
         lerp current → target, write CSS var. Runs always, decoupled
         from scroll events so motion is silky regardless of input device. */
  const parEls = [...document.querySelectorAll("[data-parallax]")].map((el) => ({
    el,
    k: parseFloat(el.dataset.parallax || "0"),
    current: 0,
    target: 0,
  }));

  /* 3c) Horizontal scroll-pin for [data-hcase] wrappers */
  const hcaseEls = [...document.querySelectorAll("[data-hcase]")].map((wrap) => ({
    wrap,
    track: wrap.querySelector(".hcase-track"),
    bar: wrap.querySelector(".hcase-progress span"),
    current: 0,
    target: 0,
  }));

  function parTick() {
    const vh = window.innerHeight;
    for (const p of parEls) {
      const rect = p.el.getBoundingClientRect();
      const center = (rect.top + rect.bottom) / 2;
      p.target = -(center - vh / 2) * p.k;
      p.current += (p.target - p.current) * 0.12;
      p.el.style.setProperty("--py", `${p.current.toFixed(2)}px`);
    }
    for (const h of hcaseEls) {
      const rect = h.wrap.getBoundingClientRect();
      const total = rect.height - vh;
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, total)));
      h.target = progress;
      h.current += (h.target - h.current) * 0.18;
      // distance to travel = trackWidth - viewportWidth
      const trackW = h.track.scrollWidth;
      const dist = trackW - window.innerWidth;
      h.track.style.transform = `translate3d(${(-h.current * dist).toFixed(2)}px, 0, 0)`;
      if (h.bar) h.bar.style.width = (h.current * 100).toFixed(2) + "%";
    }
    requestAnimationFrame(parTick);
  }
  requestAnimationFrame(parTick);

  /* 4) Cursor blob */
  const blob = document.getElementById("cursorBlob");
  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let bx = mx, by = my;
  window.addEventListener("mousemove", (e) => { mx = e.clientX; my = e.clientY; });
  function tick() {
    bx += (mx - bx) * 0.18;
    by += (my - by) * 0.18;
    if (blob) blob.style.transform = `translate(${bx}px, ${by}px) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  }
  tick();

  document.querySelectorAll("[data-hover], a, button, .chip, .case, .index-row").forEach((el) => {
    el.addEventListener("mouseenter", () => blob && blob.classList.add("is-hover"));
    el.addEventListener("mouseleave", () => blob && blob.classList.remove("is-hover"));
  });
}, 50);
