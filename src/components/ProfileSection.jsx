import CropMarks from './shared/CropMarks'
import Floaters from './shared/Floaters'

const FLOATERS = [
  { kind: 'circ', anim: 'float-anim-c', top: '16%',    right: '12%', size: 80, opacity: 0.35 },
  { kind: 'dot',  anim: 'float-anim-a', bottom: '20%', left: '44%',  size: 6 },
  { kind: 'circ', anim: 'float-anim-b', bottom: '12%', right: '28%', size: 14 },
]

export default function ProfileSection() {
  return (
    <section id="profile" className="spread" data-theme="slate" data-screen-label="01 Profile">
      <CropMarks />
      <Floaters items={FLOATERS} />

      <div className="reveal section-label">§ 01 — PROFILE</div>

      <div className="profile-grid" style={{ marginTop: 32 }}>
        <div className="profile-photo reveal d1">
          <img
            src="/assets/shubham-v3.jpeg"
            alt="Shubham Sharma"
            className="parallax"
            data-parallax="0.10"
          />
        </div>

        <div className="parallax" data-parallax="-0.08" style={{ position: 'relative' }}>
          <h2 className="profile-headline reveal d1">
            Hello — I'm <span className="italic">Shubham,</span><br />
            an <span className="italic">AI/ML</span> engineer<br />
            in training.
          </h2>

          <div className="profile-body reveal d2">
            <p className="lead">
              My work lives at the intersection of language models, agentic systems, and real-world
              problems — from fine-tuning LLMs on SageMaker to orchestrating multi-agent pipelines
              that run entirely offline.
            </p>
            <p>
              I'm a Computer Science student at VIT Bhopal, specialising in AI &amp; Machine Learning.
              My focus spans the full modern AI stack: RAG systems, QLoRA fine-tuning, LangGraph
              orchestration, and cloud-native deployment on AWS and OCI — built and shipped, not
              just studied.
            </p>
          </div>

          <div className="facts reveal d3 parallax" data-parallax="-0.05">
            <div className="fact">
              <div className="k">Based in</div>
              <div className="v">Bhopal, <span style={{ fontStyle: 'italic' }}>India</span></div>
            </div>
            <div className="fact">
              <div className="k">Studying</div>
              <div className="v">B.Tech CSE <span style={{ fontStyle: 'italic' }}>(AI/ML)</span></div>
            </div>
            <div className="fact">
              <div className="k">Class of</div>
              <div className="v">2027</div>
            </div>
            <div className="fact">
              <div className="k">Currently</div>
              <div className="v"><span style={{ fontStyle: 'italic' }}>ML Lead</span>, GDSC</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
