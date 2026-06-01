export default function Marquee({ words = [], reverse = false, theme = 'noir' }) {
  const content = (
    <span>
      {words.map((w, i) => (
        <span key={i}>
          {w}<span className="star"> ✦ </span>
        </span>
      ))}
    </span>
  )
  return (
    <section className="spread" style={{ minHeight: 0, padding: 0 }} data-theme={theme}>
      <div className={`marquee ${reverse ? 'reverse' : ''}`}>
        <div className="track">
          {content}{content}{content}
        </div>
      </div>
    </section>
  )
}
