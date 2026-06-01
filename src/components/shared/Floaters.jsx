export default function Floaters({ items }) {
  return (
    <>
      {items.map((f, i) => (
        <span
          key={i}
          className={`floater ${f.kind} ${f.anim}`}
          style={{
            top: f.top,
            left: f.left,
            right: f.right,
            bottom: f.bottom,
            width: f.size,
            height: f.h ?? f.size,
            transform: f.rotate ? `rotate(${f.rotate}deg)` : undefined,
            animationDelay: `${(i * 0.7).toFixed(2)}s`,
            opacity: f.opacity ?? 1,
          }}
        />
      ))}
    </>
  )
}
