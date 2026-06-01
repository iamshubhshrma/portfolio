import CropMarks from './shared/CropMarks'
import Floaters from './shared/Floaters'

const FLOATERS = [
  { kind: 'circ', anim: 'float-anim-c', top: '8%',     right: '8%',  size: 140, opacity: 0.2 },
  { kind: 'dot',  anim: 'float-anim-a', top: '44%',    left: '6%',   size: 6 },
  { kind: 'circ', anim: 'float-anim-b', bottom: '14%', left: '32%',  size: 26, opacity: 0.5 },
]

export default function ColophonSection() {
  return (
    <section id="colophon" className="spread colophon" data-theme="noir" data-screen-label="05 Colophon">
      <CropMarks />
      <Floaters items={FLOATERS} />

      <div className="reveal section-label">§ 05 — COLOPHON</div>

      <div className="colophon-head">
        <h2 className="colophon-title reveal d1">
          Let's<br />
          <span className="italic">build</span><br />
          <span className="thin">something.</span>
        </h2>
        <div
          className="reveal d2"
          style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300,
            fontSize: 24, lineHeight: 1.45, maxWidth: '40ch', color: 'var(--fg)',
          }}
        >
          If you're working on something at the intersection of data, learning systems
          and the real world — I'd love to hear about it.
        </div>
      </div>

      <div className="contact-grid">
        <div className="contact-card reveal">
          <div className="lab">— write to me</div>
          <div className="val">
            <a href="mailto:shubh.shrma21.03@gmail.com" data-hover target="_blank" rel="noreferrer">
              shubh.shrma21.03<br /><span className="italic">@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="contact-card reveal d1">
          <div className="lab">— call / signal</div>
          <div className="val">+91 79820 <span className="italic">31221</span></div>
        </div>
        <div className="contact-card reveal d2">
          <div className="lab">— elsewhere</div>
          <div className="val">
            <a href="https://linkedin.com/in/iamshubhshrma" data-hover target="_blank" rel="noreferrer">LinkedIn</a>
            <span style={{ opacity: 0.4 }}> · </span>
            <a href="https://github.com/iamshubhshrma" data-hover className="italic" target="_blank" rel="noreferrer">GitHub</a>
            <span style={{ opacity: 0.4 }}> · </span>
            <a href="https://huggingface.co/iamshubhshrma" data-hover target="_blank" rel="noreferrer">HuggingFace</a>
          </div>
        </div>
      </div>

      <div className="colophon-foot">
        <div>© 2026 · SHUBHAM SHARMA</div>
        <div className="center">SET IN FRAUNCES · INTER · JETBRAINS MONO</div>
        <div className="right">PRINTED ON SCREEN, NEVER ON PAPER</div>
      </div>
    </section>
  )
}
