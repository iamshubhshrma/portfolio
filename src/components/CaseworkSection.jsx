import CropMarks from './shared/CropMarks'
import Floaters from './shared/Floaters'

const FLOATERS = [
  { kind: 'dot',  anim: 'float-anim-a', top: '14%',   left: '62%', size: 6 },
  { kind: 'circ', anim: 'float-anim-b', bottom: '8%', left: '8%',  size: 32, opacity: 0.4 },
  { kind: 'circ', anim: 'float-anim-c', top: '20%',   right: '6%', size: 18 },
]

const CASES = [
  {
    n: '001',
    title: ['QLoRA ', { it: 'Customer' }, ' Support LLM'],
    desc: 'Fine-tuned Llama 3.1 8B Instruct with QLoRA on AWS SageMaker -- training only 0.75% of parameters -- then deployed via vLLM + FastAPI on EC2 behind an ALB with Auto Scaling and a real-time SQS escalation pipeline.',
    tags: ['Python', 'QLoRA', 'SageMaker', 'vLLM', 'FastAPI', 'AWS'],
    stat: '83.2% acc',
    year: '2025',
    demo: 'https://huggingface.co/spaces/iamshubhshrma/customer_agent',
    repo: 'https://github.com/iamshubhshrma/customer_support_agent',
  },
  {
    n: '002',
    title: ['LawApp ', { it: 'Legal Aid' }, ' RAG Agent'],
    desc: 'A RAG agent grounded in the Indian Constitution and Bharatiya Nyaya Sanhita -- combining Gemini 2.5 Flash, Pinecone retrieval, and BGE embeddings in a stateful LangGraph agent that refuses to hallucinate.',
    tags: ['LangGraph', 'Pinecone', 'Gemini', 'Docker', 'Streamlit'],
    stat: 'live on HF',
    year: '2025',
    demo: 'https://huggingface.co/spaces/iamshubhshrma/LawApp',
    repo: 'https://github.com/iamshubhshrma/LawApp',
  },
  {
    n: '003',
    title: ['Local ', { it: 'Multi-Agent' }, ' Dev System'],
    desc: 'A fully offline 7-agent software development pipeline on LangGraph -- orchestrating SLMs via Ollama to turn natural-language goals into runnable code, tests, migrations, and docs with an automated exec-debug loop.',
    tags: ['LangGraph', 'Ollama', 'Python', 'SLMs'],
    stat: '7 agents',
    year: '2025',
    demo: null,
    repo: 'https://github.com/iamshubhshrma/Local_multi_agent_system',
  },
  {
    n: '004',
    title: ['Diabetic ', { it: 'Ulcer' }, ' Detection'],
    desc: 'ResNet50 transfer learning on thermographic foot images for non-invasive diabetic ulcer screening -- 93.3% validation accuracy, 95.9% AUC, and 97.7% precision on the Kaggle thermography dataset.',
    tags: ['TensorFlow', 'ResNet50', 'Keras', 'OpenCV'],
    stat: '93.3% acc',
    year: '2025',
    demo: null,
    repo: 'https://github.com/iamshubhshrma/Diabetic_foot_ulcer',
  },
  {
    n: '005',
    title: ['Vani ', { it: 'Voice' }, ' AI Agent'],
    desc: 'A voice-first AI assistant built on LangGraph + MCP -- native STT/TTS, Gemini 2.5 Flash reasoning, Tavily web search, and Windows app orchestration. Ships as a standalone Windows executable with no Python runtime required.',
    tags: ['LangGraph', 'MCP', 'Gemini', 'STT/TTS', 'LangChain'],
    stat: 'voice + MCP',
    year: '2025',
    demo: null,
    repo: 'https://github.com/iamshubhshrma/voiceagent',
  },
  {
    n: '006',
    title: [{ it: 'nnscratch' }, ' — ML from Scratch'],
    desc: 'Pure-NumPy implementations of four neural-network families -- FFN, CNN, RNN, and Transformer -- written for readability, not speed. Every function maps directly to a mathematical formula. Zero PyTorch or TensorFlow.',
    tags: ['Python', 'NumPy', 'FFN', 'CNN', 'RNN', 'Transformer'],
    stat: '4 architectures',
    year: '2025',
    demo: null,
    repo: 'https://github.com/iamshubhshrma/ML-from-Scratch',
  },
]

function renderTitle(parts) {
  return parts.map((p, i) =>
    typeof p === 'string'
      ? <span key={i}>{p}</span>
      : <em key={i} className="italic">{p.it}</em>
  )
}

export default function CaseworkSection() {
  return (
    <section id="casework" className="spread" data-theme="charcoal" data-screen-label="03 Casework">
      <CropMarks />
      <Floaters items={FLOATERS} />

      <div className="case-head reveal">
        <h2><span className="italic">Selected</span> casework.</h2>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.2em',
          textTransform: 'uppercase', color: 'var(--muted)', textAlign: 'right',
          maxWidth: '32ch', lineHeight: 1.8,
        }}>
          A short anthology -- research<br />experiments, shipped tools,<br />and a few late-night detours.
        </div>
      </div>

      <div className="case-list reveal d1">
        {CASES.map((c, i) => (
          <article key={i} className="case" data-hover>
            <div className="c-num">No. {c.n}</div>
            <h3 className="c-title">{renderTitle(c.title)}</h3>
            <div className="c-desc">
              {c.desc}
              <div className="tags">
                {c.tags.map((t, k) => <span key={k}>{t}</span>)}
              </div>
              <div className="case-links">
                {c.demo && (
                  <a href={c.demo} className="btn-pill" data-hover target="_blank" rel="noreferrer">live demo</a>
                )}
                <a href={c.repo} className="btn-pill ghost" data-hover target="_blank" rel="noreferrer">view repo</a>
              </div>
            </div>
            <div className="c-meta">
              <span className="stat">{c.stat}</span>
              <span>{c.year}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Horizontal scroll-pinned feature studies */}
      <div className="hcase-wrapper reveal d2" data-hcase>
        <div className="hcase-sticky">
          <div className="hcase-rail">
            <div className="section-label">FEATURE STUDIES · 02 / 02</div>
            <div className="hcase-progress"><span id="hcaseBar"></span></div>
          </div>
          <div className="hcase-track" id="hcaseTrack">

            <article className="hcase-slide">
              <div className="hcase-visual">
                <img
                  src="/assets/customer_support_agent_architecture.png"
                  alt="QLoRA Customer Support LLM — architecture diagram"
                  className="hcase-img"
                />
              </div>
              <div className="hcase-body">
                <div className="section-label">FEATURE 01 · QLORA CUSTOMER SUPPORT LLM</div>
                <h3>A <span className="italic">production</span> LLM<br />fine-tuned on <span className="italic">a budget.</span></h3>
                <p>
                  Llama 3.1 8B Instruct fine-tuned with QLoRA (4-bit NF4) on a single A10G in 4.4 hours,
                  then served via vLLM + FastAPI on an auto-scaling EC2 fleet. A real-time SQS escalation
                  pipeline routes complaints and refunds to a human queue via Lambda and DynamoDB.
                </p>
                <div className="kv-grid">
                  <div className="kv"><span className="k">Role</span><span className="v">Architect &amp; engineer</span></div>
                  <div className="kv"><span className="k">Stack</span><span className="v">SageMaker · vLLM · FastAPI · AWS</span></div>
                  <div className="kv"><span className="k">Accuracy</span><span className="v">83.2% eval token accuracy</span></div>
                  <div className="kv"><span className="k">Cost</span><span className="v">Under $10 end-to-end</span></div>
                </div>
                <div className="case-links" style={{ marginTop: 22 }}>
                  <a href="https://huggingface.co/spaces/iamshubhshrma/customer_agent" className="btn-pill" data-hover target="_blank" rel="noreferrer">live demo</a>
                  <a href="https://github.com/iamshubhshrma/customer_support_agent" className="btn-pill ghost" data-hover target="_blank" rel="noreferrer">view repo</a>
                </div>
              </div>
            </article>

            <article className="hcase-slide">
              <div className="hcase-visual">
                <img
                  src="/assets/local_multi_agent_system_architecture.png"
                  alt="Local Multi-Agent Dev System — architecture diagram"
                  className="hcase-img"
                />
              </div>
              <div className="hcase-body">
                <div className="section-label">FEATURE 02 · LOCAL MULTI-AGENT DEV SYSTEM</div>
                <h3>Seven agents.<br /><span className="italic">No internet required.</span></h3>
                <p>
                  A fully offline LangGraph pipeline that decomposes a natural-language goal into subtasks
                  and routes them across seven specialist agents -- Orchestrator, Code, DB, Test, Docs,
                  Exec, and Debug -- all running SLMs locally via Ollama. The exec-debug loop patches
                  failures surgically without human intervention.
                </p>
                <div className="kv-grid">
                  <div className="kv"><span className="k">Role</span><span className="v">Architect &amp; engineer</span></div>
                  <div className="kv"><span className="k">Stack</span><span className="v">LangGraph · Ollama · Python</span></div>
                  <div className="kv"><span className="k">Models</span><span className="v">Qwen2.5 7B + Coder variants</span></div>
                  <div className="kv"><span className="k">Output</span><span className="v">Code, tests, migrations, docs</span></div>
                </div>
                <div className="case-links" style={{ marginTop: 22 }}>
                  <a href="https://github.com/iamshubhshrma/Local_multi_agent_system" className="btn-pill ghost" data-hover target="_blank" rel="noreferrer">view repo</a>
                </div>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}
