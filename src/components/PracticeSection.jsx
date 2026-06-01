import CropMarks from './shared/CropMarks'
import Floaters from './shared/Floaters'

const FLOATERS = [
  { kind: 'circ', anim: 'float-anim-a', top: '10%',    left: '40%',  size: 22 },
  { kind: 'dot',  anim: 'float-anim-c', bottom: '16%', right: '20%', size: 5 },
]

const WORK = [
  {
    y: 'Sept 2025 —',
    t: ['Machine Learning ', { it: 'Lead' }],
    org: 'Google Developer Student Clubs',
    d: 'Spearheaded 5+ end-to-end ML projects spanning Multi-Agent Systems, RAG Agents, and Agentic AI Workflows, driving a 30% increase in active community engagement. Designed and facilitated workshops on LangChain, LangGraph, and LLM deployment, mentoring 50+ students in building and shipping production-ready AI pipelines.',
  },
  {
    y: 'Sept 2024 —',
    t: ['Tech Team ', { it: 'Member' }],
    org: 'Entrepreneurship Cell, VIT Bhopal',
    d: 'Engineered end-to-end automation workflows for social media, email pipelines, and event management, boosting operational efficiency by 40%. Architected and launched the official club website using React.js and Next.js, growing monthly user engagement by over 200%.',
  },
  {
    y: '2023 — 2027',
    t: ['B.Tech in ', { it: 'Computer Science' }],
    org: 'VIT Bhopal University · AI/ML Specialisation',
    d: 'Coursework spanning the full ML lifecycle: supervised, unsupervised, and reinforcement learning; deep architectures; RAG and agentic system design; and cloud-native deployment on AWS and OCI.',
  },
]

const CERTS = [
  { t: ['OCI 2025 ', { it: 'Generative AI Professional' }], by: 'Oracle University', url: 'https://drive.google.com/file/d/1rOwL5tEZOJACB8kjsepoF9OTV_sbF48t/view?usp=drive_link' },
  { t: ['Deep Learning ', { it: 'Specialization' }], by: 'Coursera · DeepLearning.AI', url: 'https://coursera.org/verify/specialization/63P2SSYME4FF' },
  { t: ['Machine Learning ', { it: 'Specialization' }], by: 'Coursera · Stanford Online', url: 'https://coursera.org/verify/specialization/TM5CKNSH5ZM1' },
  { t: ['Java Certified ', { it: 'Foundations Associate' }], by: 'Oracle University', url: 'https://drive.google.com/file/d/1AZnLh3MhoAy2UK6UI_LEGp1OMqVL4G3u/view?usp=sharing' },
]

function renderT(parts) {
  return parts.map((p, i) =>
    typeof p === 'string'
      ? <span key={i}>{p}</span>
      : <em key={i} className="italic">{p.it}</em>
  )
}

export default function PracticeSection() {
  return (
    <section id="practice" className="spread" data-theme="pure" data-screen-label="04 Practice">
      <CropMarks />
      <Floaters items={FLOATERS} />

      <div className="practice-head reveal">
        <div className="section-label">§ 04 — PRACTICE</div>
        <h2>Where I've<br />been <span className="italic">working.</span></h2>
      </div>

      <div className="practice-grid">
        <div>
          <div className="section-label reveal" style={{ marginBottom: 18 }}>Experience &amp; education</div>
          <div className="timeline">
            {WORK.map((w, i) => (
              <div key={i} className="tl-row reveal" style={{ transitionDelay: `${i * 80}ms` }}>
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
            {CERTS.map((c, i) => (
              <div key={i} className="cert-row reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div>— {renderT(c.t)}</div>
                <div className="cert-row-right">
                  <span className="by">{c.by}</span>
                  <a href={c.url} className="cert-link" data-hover aria-label="View certificate" target="_blank" rel="noreferrer">↗</a>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ marginTop: 60, padding: 32, border: '1px solid var(--rule)' }}>
            <div className="section-label">FOCUS · RIGHT NOW</div>
            <h3 style={{
              fontFamily: 'var(--font-serif)', fontWeight: 300,
              fontSize: 38, lineHeight: 1.1, letterSpacing: '-0.02em',
              margin: '16px 0 12px',
            }}>
              Exploring <span style={{ fontStyle: 'italic' }}>multimodal</span> models,<br />
              MCP tooling &amp; <span style={{ fontStyle: 'italic' }}>agentic</span> infrastructure.
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--fg)', maxWidth: '52ch' }}>
              Open to research collaborations, internship roles in applied ML or LLM engineering,
              and side projects that genuinely need a thoughtful model -- not just a wrapped one.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
