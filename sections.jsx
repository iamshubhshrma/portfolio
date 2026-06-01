/* =========================================================
   SECTIONS — Portfolio
   ========================================================= */

const { useEffect, useRef, useState, useMemo } = React;

/* ------------ helpers ------------ */

function SplitLetters({ text, className = "" }) {
  const chars = useMemo(() => text.split(""), [text]);
  return (
    <span className={`split ${className}`}>
      {chars.map((c, i) => (
        <span key={i} className="reveal-letter" data-i={i} style={{ transitionDelay: `${i * 24}ms` }}>
          {c === " " ? "\u00A0" : c}
        </span>
      ))}
    </span>
  );
}

function Floaters({ items }) {
  return (
    <>
      {items.map((f, i) => (
        <span
          key={i}
          className={`floater ${f.kind} ${f.anim}`}
          style={{
            top: f.top, left: f.left, right: f.right, bottom: f.bottom,
            width: f.size, height: f.h ?? f.size,
            transform: f.rotate ? `rotate(${f.rotate}deg)` : undefined,
            animationDelay: `${(i * 0.7).toFixed(2)}s`,
            opacity: f.opacity ?? 1,
          }}
        />
      ))}
    </>
  );
}

function CropMarks() {
  return (
    <>
      <span className="crop-mark tl" />
      <span className="crop-mark tr" />
      <span className="crop-mark bl" />
      <span className="crop-mark br" />
    </>
  );
}

/* ------------ COVER (00) — Noir ------------ */
function CoverSection() {
  return (
    <section id="cover" className="spread cover" data-theme="noir" data-screen-label="00 Cover">
      <CropMarks />

      <Floaters items={[
        { kind: "circ", anim: "float-anim-a", top: "16%", left: "6%", size: 12 },
        { kind: "dot",  anim: "float-anim-b", top: "30%", left: "12%", size: 6 },
        { kind: "circ", anim: "float-anim-c", bottom: "30%", right: "8%", size: 18, opacity: .55 },
        { kind: "dot",  anim: "float-anim-a", top: "44%", right: "10%", size: 4 },
        { kind: "circ", anim: "float-anim-b", bottom: "12%", left: "8%", size: 8, opacity: .5 },
      ]} />

      {/* orbit ring behind the figure */}
      <span className="orbit-ring float-anim-c" style={{ width: 780, height: 780, top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: .12 }} />
      <span className="orbit-ring float-anim-a" style={{ width: 460, height: 460, top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: .08 }} />

      <div className="header-row reveal d1">
        <div>A TECHNICAL JOURNAL</div>
        <div className="center">— ISSUE Nº 01 / 2026 —</div>
        <div className="right">SHUBH.SHRMA · VOL.01</div>
      </div>

      <div className="cover-stage">
        {/* line 1 — top */}
        <h1 className="cover-title-line top reveal d1">SHUBHAM</h1>

        {/* figure — anchored from below SHUBHAM down to bottom */}
        <div className="cover-photo reveal d3 parallax" data-parallax="0.04">
          <img src="assets/shubham-figure.png" alt="Shubham Sharma — portrait" />
        </div>

        {/* line 2 — outlined italic "Sharma" */}
        <h2 className="cover-title-line bottom italic outline reveal d2">Sharma</h2>
      </div>

      {/* Corner meta — bracketing the cover like a magazine masthead */}
      <div className="cover-corners">
        <div className="bl reveal d3">
          <div className="pull">"On architecting systems that learn, reason, and quietly do the work."</div>
          <div style={{ marginTop: 14 }}>FILED UNDER · AI · ML · DEEP LEARNING</div>
        </div>
        <div className="br reveal d4">
          <div>Scroll to begin</div>
          <div className="scroll-cue" style={{ marginTop: 8 }}>↓ open the index</div>
        </div>
      </div>
    </section>
  );
}

/* ------------ Marquee divider ------------ */
function Marquee({ words = [], reverse = false, theme = "noir" }) {
  const content = (
    <span>
      {words.map((w, i) => (
        <span key={i}>
          {w}<span className="star"> ✦ </span>
        </span>
      ))}
    </span>
  );
  return (
    <section className="spread" style={{ minHeight: 0, padding: 0 }} data-theme={theme}>
      <div className={`marquee ${reverse ? "reverse" : ""}`}>
        <div className="track">
          {content}{content}{content}
        </div>
      </div>
    </section>
  );
}

/* ------------ INDEX section ------------ */
function IndexSection() {
  const rows = [
    { n: "01", t: "Profile", m: "A short note from the architect", p: "p.014" },
    { n: "02", t: "Stack & Instruments", m: "Languages, frameworks, lifecycle", p: "p.028" },
    { n: "03", t: "Casework", m: "Selected projects, 2024 — 2026", p: "p.046" },
    { n: "04", t: "Practice", m: "Experience, education, certifications", p: "p.072" },
    { n: "05", t: "Colophon", m: "Contact, credits, fine print", p: "p.094" },
  ];
  return (
    <section id="index" className="spread" data-theme="bone" data-screen-label="00b Index">
      <CropMarks />
      <Floaters items={[
        { kind: "circ", anim: "float-anim-b", top: "12%", right: "8%", size: 20 },
        { kind: "dot",  anim: "float-anim-a", bottom: "20%", left: "30%", size: 5 },
      ]} />

      <div className="reveal section-label">CONTENTS · INDEX</div>
      <h2 className="reveal d1" style={{
        fontFamily: "var(--font-serif)", fontWeight: 300,
        fontSize: "clamp(72px, 14vw, 220px)", lineHeight: .85,
        letterSpacing: "-0.04em", margin: "20px 0 60px"
      }}>
        Table of <span style={{ fontStyle: "italic" }}>contents.</span>
      </h2>

      <div className="reveal d2">
        {rows.map((r, i) => (
          <a key={i} href={"#" + ["profile","stack","casework","practice","colophon"][i]} className="index-row" data-hover>
            <span className="ix-num">— {r.n}</span>
            <span className="ix-title">{r.t.split(" ").map((w,j)=>j%2 ? <em key={j}> {w}</em> : <span key={j}>{w}</span>)}</span>
            <span className="ix-meta">{r.m}</span>
            <span className="ix-page">{r.p}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ------------ PROFILE (01) ------------ */
function ProfileSection() {
  return (
    <section id="profile" className="spread" data-theme="slate" data-screen-label="01 Profile">
      <CropMarks />
      <Floaters items={[
        { kind: "circ", anim: "float-anim-c", top: "16%", right: "12%", size: 80, opacity: .35 },
        { kind: "dot",  anim: "float-anim-a", bottom: "20%", left: "44%", size: 6 },
        { kind: "circ", anim: "float-anim-b", bottom: "12%", right: "28%", size: 14 },
      ]} />

      <div className="reveal section-label">§ 01 — PROFILE</div>

      <div className="profile-grid" style={{ marginTop: 32 }}>
        <div className="profile-photo reveal d1">
          <img src="assets/shubham-v3.jpeg" alt="Shubham Sharma" className="parallax" data-parallax="0.10" />
        </div>

        <div className="parallax" data-parallax="-0.08" style={{ position: "relative" }}>
          <h2 className="profile-headline reveal d1">
            Hello — I'm <span className="italic">Shubham,</span><br/>
            an <span className="italic">AI/ML</span> engineer<br/>
            in training.
          </h2>
          <div className="profile-body reveal d2">
            <p className="lead">
              My journey into Artificial Intelligence is driven by a deep fascination with architecting
              systems that can learn, reason, and solve complex challenges.
            </p>
            <p>
              I'm a Computer Science student at VIT Bhopal, specialising in AI &amp; Machine Learning,
              with a robust foundation in the end-to-end ML lifecycle — from data strategy and
              preprocessing to deploying sophisticated deep learning models. Proficient in Python,
              TensorFlow, and advanced neural network design.
            </p>
          </div>
          <div className="facts reveal d3 parallax" data-parallax="-0.05">
            <div className="fact"><div className="k">Based in</div><div className="v">Bhopal, <span style={{fontStyle:"italic"}}>India</span></div></div>
            <div className="fact"><div className="k">Studying</div><div className="v">B.Tech CSE <span style={{fontStyle:"italic"}}>(AI/ML)</span></div></div>
            <div className="fact"><div className="k">Class of</div><div className="v">2027</div></div>
            <div className="fact"><div className="k">Currently</div><div className="v"><span style={{fontStyle:"italic"}}>ML Lead</span>, GDSC</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------ STACK (02) ------------ */
function StackSection() {
  const chips = [
    { t: "Python",        x: "8%",  y: "8%",  solid: true,  n: "01" },
    { t: "TensorFlow",    x: "32%", y: "4%",  n: "02" },
    { t: "Keras",         x: "58%", y: "12%", n: "03" },
    { t: "Scikit-learn",  x: "78%", y: "6%",  n: "04" },
    { t: "NumPy",         x: "12%", y: "26%", n: "05" },
    { t: "Java",          x: "44%", y: "30%", solid: true, n: "06" },
    { t: "React.js",      x: "68%", y: "28%", n: "07" },
    { t: "Next.js",       x: "84%", y: "32%", n: "08" },
    { t: "Express.js",    x: "6%",  y: "48%", n: "09" },
    { t: "Oracle Cloud (OCI)", x: "26%", y: "52%", n: "10" },
    { t: "AWS",           x: "56%", y: "50%", solid: true, n: "11" },
    { t: "Docker",        x: "72%", y: "54%", n: "12" },
    { t: "Git · GitHub",  x: "14%", y: "70%", n: "13" },
    { t: "Bash",          x: "40%", y: "72%", n: "14" },
    { t: "LangChain",     x: "62%", y: "70%", n: "15" },
    { t: "Transformers",  x: "82%", y: "74%", solid: true, n: "16" },
  ];

  return (
    <section id="stack" className="spread" data-theme="newsprint" data-screen-label="02 Stack">
      <CropMarks />
      <Floaters items={[
        { kind: "circ", anim: "float-anim-a", top: "10%", left: "44%", size: 28 },
        { kind: "dot",  anim: "float-anim-b", top: "60%", left: "6%", size: 7 },
        { kind: "circ", anim: "float-anim-c", bottom: "8%", right: "10%", size: 60, opacity: .35 },
      ]} />

      <div className="stack-head">
        <h2 className="stack-title reveal">
          The<br/><span className="italic">instruments</span><br/>I play.
        </h2>
        <div className="stack-intro reveal d1">
          A working set of languages, frameworks, and clouds — gathered through coursework,
          coursework's hangover, and projects that refused to compile until 4am.
        </div>
      </div>

      <div className="stack-cluster reveal d2">
        {chips.map((c, i) => (
          <span
            key={i}
            className={`chip ${c.solid ? "solid" : ""} ${["float-anim-a","float-anim-b","float-anim-c"][i%3]}`}
            style={{ left: c.x, top: c.y, animationDelay: `${(i*0.3).toFixed(2)}s` }}
            data-hover
          >
            <span className="num">{c.n}</span> {c.t}
          </span>
        ))}
      </div>

      <div className="stack-cats">
        <div className="stack-cat reveal d1">
          <div className="cat-title">Core concepts</div>
          <ul>
            <li>Machine <span className="it">learning</span></li>
            <li>Deep <span className="it">learning</span></li>
            <li>Generative <span className="it">AI</span></li>
            <li>Reinforcement <span className="it">learning</span></li>
          </ul>
        </div>
        <div className="stack-cat reveal d2">
          <div className="cat-title">Architectures</div>
          <ul>
            <li><span className="it">Transformers</span></li>
            <li>CNNs &amp; <span className="it">vision</span></li>
            <li>RNNs &amp; <span className="it">LSTM</span></li>
            <li>Anomaly &amp; <span className="it">recommenders</span></li>
          </ul>
        </div>
        <div className="stack-cat reveal d3">
          <div className="cat-title">ML lifecycle</div>
          <ul>
            <li>Data <span className="it">preprocessing</span></li>
            <li>Feature <span className="it">engineering</span></li>
            <li>Hyperparameter <span className="it">tuning</span></li>
            <li>Model <span className="it">evaluation</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------ CASEWORK (03) ------------ */
function CaseworkSection() {
  const cases = [
    {
      n: "001",
      title: ["AI-Powered ", { it: "Legal Aid" }, " Agent"],
      desc: "Engineered an intelligent, context-aware legal aid agent using advanced NLP frameworks to interpret complex legal documents and provide simplified, accessible information.",
      tags: ["Python", "LangChain", "Transformers", "NLP"],
      stat: "context\u00a0aware",
      year: "2025",
      demo: "#",
      repo: "#",
    },
    {
      n: "002",
      title: ["Diabetic ", { it: "Ulcer" }, " Detection"],
      desc: "A high-precision CNN for classifying and detecting diabetic foot ulcers — a critical tool for early diagnosis, deployed with a clean inference pipeline.",
      tags: ["Python", "TensorFlow", "CNN", "Computer Vision"],
      stat: "95% acc",
      year: "2025",
      demo: "#",
      repo: "#",
    },
    {
      n: "003",
      title: ["E-Cell ", { it: "Website" }, " Pioneer"],
      desc: "Designed and shipped the Entrepreneurship Cell's first website, pairing event automations with a content layer that grew monthly engagement by 200%+.",
      tags: ["Next.js", "React", "Automation"],
      stat: "+200% engage",
      year: "2024",
      demo: "#",
      repo: "#",
    },
    {
      n: "004",
      title: ["GDSC ", { it: "ML Cohort" }, " Program"],
      desc: "Mentored 50+ students through 5+ ML projects and technical workshops, boosting active community engagement by 30% and turning curious freshers into shippers.",
      tags: ["Mentorship", "Curriculum", "Workshops"],
      stat: "50+ mentored",
      year: "2025",
      demo: "#",
      repo: "#",
    },
  ];

  const renderTitle = (parts) => parts.map((p, i) =>
    typeof p === "string" ? <React.Fragment key={i}>{p}</React.Fragment>
                          : <em key={i} className="italic">{p.it}</em>
  );

  return (
    <section id="casework" className="spread" data-theme="charcoal" data-screen-label="03 Casework">
      <CropMarks />
      <Floaters items={[
        { kind: "dot",  anim: "float-anim-a", top: "14%", left: "62%", size: 6 },
        { kind: "circ", anim: "float-anim-b", bottom: "8%", left: "8%", size: 32, opacity: .4 },
        { kind: "circ", anim: "float-anim-c", top: "20%", right: "6%", size: 18 },
      ]} />

      <div className="case-head reveal">
        <h2><span className="italic">Selected</span> casework.</h2>
        <div style={{
          fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".2em",
          textTransform: "uppercase", color: "var(--muted)", textAlign: "right",
          maxWidth: "32ch", lineHeight: 1.8
        }}>
          A short anthology — research<br/>experiments, shipped tools,<br/>and a few late-night detours.
        </div>
      </div>

      <div className="case-list reveal d1">
        {cases.map((c, i) => (
          <article key={i} className="case" data-hover>
            <div className="c-num">№ {c.n}</div>
            <h3 className="c-title">{renderTitle(c.title)}</h3>
            <div className="c-desc">
              {c.desc}
              <div className="tags">{c.tags.map((t,k) => <span key={k}>{t}</span>)}</div>
              <div className="case-links">
                <a href={c.demo} className="btn-pill" data-hover>↗ live demo</a>
                <a href={c.repo} className="btn-pill ghost" data-hover>view repo →</a>
              </div>
            </div>
            <div className="c-meta">
              <span className="stat">{c.stat}</span>
              <span>{c.year}</span>
            </div>
          </article>
        ))}
      </div>

      {/* HORIZONTAL SCROLL FEATURE STUDIES — scroll-jacked */}
      <div className="hcase-wrapper reveal d2" data-hcase>
        <div className="hcase-sticky">
          <div className="hcase-rail">
            <div className="section-label">FEATURE STUDIES · 02 / 02</div>
            <div className="hcase-progress"><span id="hcaseBar"></span></div>
          </div>
          <div className="hcase-track" id="hcaseTrack">
            <article className="hcase-slide">
              <div className="hcase-visual">
                <div className="placeholder">[ LEGAL AID AGENT<br/>— architecture render / UI screen ]</div>
              </div>
              <div className="hcase-body">
                <div className="section-label">FEATURE 01 · LEGAL AID AGENT</div>
                <h3>The <span className="italic">document</span> that<br/>could explain <span className="italic">itself.</span></h3>
                <p>
                  A context-aware NLP agent built on LangChain &amp; transformer pipelines that
                  unpacks dense legal prose into plain-language summaries, citations and next-step
                  guidance — a quiet attempt at making the law a little less expensive to read.
                </p>
                <div className="kv-grid">
                  <div className="kv"><span className="k">Role</span><span className="v">Architect &amp; engineer</span></div>
                  <div className="kv"><span className="k">Stack</span><span className="v">Python · LangChain · HF Transformers</span></div>
                  <div className="kv"><span className="k">Status</span><span className="v">Research prototype, 2025</span></div>
                  <div className="kv"><span className="k">Outcome</span><span className="v">Plain-language brief in seconds</span></div>
                </div>
                <div className="case-links" style={{ marginTop: 28 }}>
                  <a href="#" className="btn-pill" data-hover>↗ live demo</a>
                  <a href="#" className="btn-pill ghost" data-hover>view repo →</a>
                </div>
              </div>
            </article>

            <article className="hcase-slide">
              <div className="hcase-visual">
                <div className="placeholder">[ DIABETIC ULCER · CNN<br/>— confusion matrix / model preview ]</div>
              </div>
              <div className="hcase-body">
                <div className="section-label">FEATURE 02 · ULCER DETECTION CNN</div>
                <h3>Diagnosis you can <span className="italic">read in milliseconds.</span></h3>
                <p>
                  A computer-vision classifier built around a custom CNN architecture, trained on
                  curated dermatology imagery to detect diabetic foot ulcers at 95% accuracy — paired
                  with an inference pipeline lightweight enough for clinic-side deployment.
                </p>
                <div className="kv-grid">
                  <div className="kv"><span className="k">Role</span><span className="v">Model &amp; pipeline</span></div>
                  <div className="kv"><span className="k">Stack</span><span className="v">TensorFlow · Keras · OpenCV</span></div>
                  <div className="kv"><span className="k">Status</span><span className="v">Validated, 2025</span></div>
                  <div className="kv"><span className="k">Accuracy</span><span className="v">95.0% on held-out set</span></div>
                </div>
                <div className="case-links" style={{ marginTop: 28 }}>
                  <a href="#" className="btn-pill" data-hover>↗ live demo</a>
                  <a href="#" className="btn-pill ghost" data-hover>view repo →</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------ PRACTICE (04) ------------ */
function PracticeSection() {
  const work = [
    {
      y: "Sept 2025 —", t: ["Machine Learning ", {it:"Lead"}],
      org: "Google Developer Student Clubs",
      d: "Mentored 50+ students through 5+ ML projects and technical workshops, boosting active community engagement by 30%."
    },
    {
      y: "Sept 2024 —", t: ["Tech Team ", {it:"Member"}],
      org: "Entrepreneurship Cell, VIT Bhopal",
      d: "Enhanced operational efficiency by 40% through event automations and pioneered the club website, growing monthly user engagement by over 200%."
    },
    {
      y: "2023 — 2027", t: ["B.Tech in ", {it:"Computer Science"}],
      org: "VIT Bhopal University · AI/ML Specialisation",
      d: "Coursework spanning the full ML lifecycle — supervised, unsupervised, reinforcement learning, deep architectures, and cloud deployment."
    }
  ];
  const certs = [
    { t: ["Oracle Cloud Infrastructure ", {it:"Generative AI Professional"}], by: "Oracle", url: "#" },
    { t: ["Deep Learning ", {it:"Specialization"}], by: "DeepLearning.AI", url: "#" },
    { t: ["Machine Learning ", {it:"Specialization"}], by: "Stanford · DeepLearning.AI", url: "#" },
    { t: ["Java Certified ", {it:"Foundations Associate"}], by: "Oracle", url: "#" },
  ];

  const renderT = (parts) => parts.map((p, i) =>
    typeof p === "string" ? <React.Fragment key={i}>{p}</React.Fragment>
                          : <em key={i} className="italic">{p.it}</em>
  );

  return (
    <section id="practice" className="spread" data-theme="pure" data-screen-label="04 Practice">
      <CropMarks />
      <Floaters items={[
        { kind: "circ", anim: "float-anim-a", top: "10%", left: "40%", size: 22 },
        { kind: "dot",  anim: "float-anim-c", bottom: "16%", right: "20%", size: 5 },
      ]} />

      <div className="practice-head reveal">
        <div className="section-label">§ 04 — PRACTICE</div>
        <h2>Where I've<br/>been <span className="italic">working.</span></h2>
      </div>

      <div className="practice-grid">
        <div>
          <div className="section-label reveal" style={{ marginBottom: 18 }}>Experience &amp; education</div>
          <div className="timeline">
            {work.map((w, i) => (
              <div key={i} className="tl-row reveal" style={{ transitionDelay: `${i*80}ms` }}>
                <div className="tl-year">{w.y}</div>
                <div>
                  <h3 className="tl-title">{renderT(w.t)}</h3>
                  <div className="tl-org">{w.org}</div>
                  <div className="tl-desc">{w.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="section-label reveal" style={{ marginBottom: 18 }}>Certifications &amp; credentials</div>
          <div className="certs">
            {certs.map((c, i) => (
              <div key={i} className="cert-row reveal" style={{ transitionDelay: `${i*80}ms` }}>
                <div>— {renderT(c.t)}</div>
                <div className="cert-row-right">
                  <span className="by">{c.by}</span>
                  <a href={c.url} className="cert-link" data-hover aria-label="View certificate">↗</a>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ marginTop: 60, padding: 32, border: "1px solid var(--rule)" }}>
            <div className="section-label">FOCUS · RIGHT NOW</div>
            <h3 style={{
              fontFamily: "var(--font-serif)", fontWeight: 300,
              fontSize: 38, lineHeight: 1.1, letterSpacing: "-0.02em",
              margin: "16px 0 12px"
            }}>
              Quietly studying <span style={{fontStyle:"italic"}}>multimodal</span> models<br/>and <span style={{fontStyle:"italic"}}>agentic</span> system design.
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--fg)", maxWidth: "52ch" }}>
              Open to research collaborations, internship roles in applied ML, and side
              projects that genuinely need a thoughtful model — not just a wrapped one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------ COLOPHON (05) ------------ */
function ColophonSection() {
  return (
    <section id="colophon" className="spread colophon" data-theme="noir" data-screen-label="05 Colophon">
      <CropMarks />
      <Floaters items={[
        { kind: "circ", anim: "float-anim-c", top: "8%", right: "8%", size: 140, opacity: .2 },
        { kind: "dot",  anim: "float-anim-a", top: "44%", left: "6%", size: 6 },
        { kind: "circ", anim: "float-anim-b", bottom: "14%", left: "32%", size: 26, opacity: .5 },
      ]} />

      <div className="reveal section-label">§ 05 — COLOPHON</div>

      <div className="colophon-head">
        <h2 className="colophon-title reveal d1">
          Let's<br/>
          <span className="italic">build</span><br/>
          <span className="thin">something.</span>
        </h2>
        <div className="reveal d2" style={{
          fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300,
          fontSize: 24, lineHeight: 1.45, maxWidth: "40ch", color: "var(--fg)"
        }}>
          If you're working on something at the intersection of data, learning systems
          and the real world — I'd love to hear about it.
        </div>
      </div>

      <div className="contact-grid">
        <div className="contact-card reveal">
          <div className="lab">— write to me</div>
          <div className="val"><a href="mailto:shubh.shrma21.03@gmail.com" data-hover>shubh.shrma21.03<br/><span className="italic">@gmail.com</span></a></div>
        </div>
        <div className="contact-card reveal d1">
          <div className="lab">— call / signal</div>
          <div className="val">+91 79820 <span className="italic">31221</span></div>
        </div>
        <div className="contact-card reveal d2">
          <div className="lab">— elsewhere</div>
          <div className="val">
            <a href="#" data-hover>LinkedIn</a><span style={{ opacity: .4 }}> · </span>
            <a href="#" data-hover className="italic">GitHub</a><span style={{ opacity: .4 }}> · </span>
            <a href="#" data-hover>Portfolio</a>
          </div>
        </div>
      </div>

      <div className="colophon-foot">
        <div>© 2026 · SHUBHAM SHARMA</div>
        <div className="center">SET IN FRAUNCES · INTER · JETBRAINS MONO</div>
        <div className="right">PRINTED ON SCREEN, NEVER ON PAPER</div>
      </div>
    </section>
  );
}

/* ------------ Expose ------------ */
Object.assign(window, {
  CoverSection, IndexSection, ProfileSection, StackSection,
  CaseworkSection, PracticeSection, ColophonSection, Marquee
});
