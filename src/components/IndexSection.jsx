import CropMarks from './shared/CropMarks'
import Floaters from './shared/Floaters'

const FLOATERS = [
  { kind: 'circ', anim: 'float-anim-b', top: '12%', right: '8%', size: 20 },
  { kind: 'dot',  anim: 'float-anim-a', bottom: '20%', left: '30%', size: 5 },
]

const ROWS = [
  { n: '01', t: 'Profile',             m: 'A short note from the architect',       p: 'p.014', anchor: 'profile' },
  { n: '02', t: 'Stack & Instruments', m: 'Languages, frameworks, lifecycle',       p: 'p.028', anchor: 'stack' },
  { n: '03', t: 'Casework',            m: 'Selected projects, 2024 — 2026',         p: 'p.046', anchor: 'casework' },
  { n: '04', t: 'Practice',            m: 'Experience, education, certifications',  p: 'p.072', anchor: 'practice' },
  { n: '05', t: 'Colophon',            m: 'Contact, credits, fine print',           p: 'p.094', anchor: 'colophon' },
]

export default function IndexSection() {
  return (
    <section id="index" className="spread" data-theme="bone" data-screen-label="00b Index">
      <CropMarks />
      <Floaters items={FLOATERS} />

      <div className="reveal section-label">CONTENTS · INDEX</div>
      <h2
        className="reveal d1"
        style={{
          fontFamily: 'var(--font-serif)', fontWeight: 300,
          fontSize: 'clamp(72px, 14vw, 220px)', lineHeight: 0.85,
          letterSpacing: '-0.04em', margin: '20px 0 60px',
        }}
      >
        Table of <span style={{ fontStyle: 'italic' }}>contents.</span>
      </h2>

      <div className="reveal d2">
        {ROWS.map((r) => (
          <a key={r.n} href={`#${r.anchor}`} className="index-row" data-hover>
            <span className="ix-num">— {r.n}</span>
            <span className="ix-title">
              {r.t.split(' ').map((w, j) =>
                j % 2 ? <em key={j}> {w}</em> : <span key={j}>{w}</span>
              )}
            </span>
            <span className="ix-meta">{r.m}</span>
            <span className="ix-page">{r.p}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
