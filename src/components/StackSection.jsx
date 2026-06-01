import CropMarks from './shared/CropMarks'
import Floaters from './shared/Floaters'

const FLOATERS = [
  { kind: 'circ', anim: 'float-anim-a', top: '10%',    left: '44%',  size: 28 },
  { kind: 'dot',  anim: 'float-anim-b', top: '60%',    left: '6%',   size: 7 },
  { kind: 'circ', anim: 'float-anim-c', bottom: '8%',  right: '10%', size: 60, opacity: 0.35 },
]

const CHIPS = [
  { t: 'Python',           x: '8%',  y: '8%',  solid: true, n: '01' },
  { t: 'LangGraph',        x: '32%', y: '4%',               n: '02' },
  { t: 'LangChain',        x: '58%', y: '12%',              n: '03' },
  { t: 'PyTorch',          x: '78%', y: '6%',               n: '04' },
  { t: 'TensorFlow',       x: '12%', y: '26%',              n: '05' },
  { t: 'QLoRA · LoRA',     x: '44%', y: '30%', solid: true, n: '06' },
  { t: 'HuggingFace',      x: '68%', y: '28%',              n: '07' },
  { t: 'vLLM',             x: '84%', y: '32%',              n: '08' },
  { t: 'Ollama',           x: '6%',  y: '48%',              n: '09' },
  { t: 'Pinecone · FAISS', x: '26%', y: '52%',              n: '10' },
  { t: 'AWS',              x: '56%', y: '50%', solid: true, n: '11' },
  { t: 'Docker',           x: '72%', y: '54%',              n: '12' },
  { t: 'FastAPI',          x: '14%', y: '70%',              n: '13' },
  { t: 'MLflow',           x: '40%', y: '72%', solid: true, n: '14' },
  { t: 'Scikit-learn',     x: '62%', y: '70%',              n: '15' },
  { t: 'Oracle Cloud OCI', x: '82%', y: '74%',              n: '16' },
]

const ANIMS = ['float-anim-a', 'float-anim-b', 'float-anim-c']

export default function StackSection() {
  return (
    <section id="stack" className="spread" data-theme="newsprint" data-screen-label="02 Stack">
      <CropMarks />
      <Floaters items={FLOATERS} />

      <div className="stack-head">
        <h2 className="stack-title reveal">
          The<br /><span className="italic">instruments</span><br />I play.
        </h2>
        <div className="stack-intro reveal d1">
          A working set of languages, frameworks, and clouds — gathered through coursework,
          coursework's hangover, and projects that refused to compile until 4am.
        </div>
      </div>

      <div className="stack-cluster reveal d2">
        {CHIPS.map((c, i) => (
          <span
            key={i}
            className={`chip ${c.solid ? 'solid' : ''} ${ANIMS[i % 3]}`}
            style={{ left: c.x, top: c.y, animationDelay: `${(i * 0.3).toFixed(2)}s` }}
            data-hover
          >
            <span className="num">{c.n}</span> {c.t}
          </span>
        ))}
      </div>

      <div className="stack-cats">
        <div className="stack-cat reveal d1">
          <div className="cat-title">AI / GenAI</div>
          <ul>
            <li>LLMs &amp; <span className="it">RAG</span></li>
            <li>Fine-tuning <span className="it">QLoRA/LoRA</span></li>
            <li>Agentic <span className="it">systems</span></li>
            <li>Multi-agent <span className="it">pipelines</span></li>
          </ul>
        </div>
        <div className="stack-cat reveal d2">
          <div className="cat-title">Architectures</div>
          <ul>
            <li><span className="it">Transformers</span></li>
            <li>CNNs &amp; <span className="it">vision</span></li>
            <li>ResNet &amp; <span className="it">transfer learning</span></li>
            <li>RNNs &amp; <span className="it">LSTM</span></li>
          </ul>
        </div>
        <div className="stack-cat reveal d3">
          <div className="cat-title">MLOps &amp; cloud</div>
          <ul>
            <li>MLflow &amp; <span className="it">W&amp;B</span></li>
            <li>SageMaker <span className="it">training</span></li>
            <li>vLLM <span className="it">deployment</span></li>
            <li>CI/CD &amp; <span className="it">Docker</span></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
