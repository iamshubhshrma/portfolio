import { useMemo } from 'react'

export default function SplitLetters({ text, className = '' }) {
  const chars = useMemo(() => text.split(''), [text])
  return (
    <span className={`split ${className}`}>
      {chars.map((c, i) => (
        <span
          key={i}
          className="reveal-letter"
          data-i={i}
          style={{ transitionDelay: `${i * 24}ms` }}
        >
          {c === ' ' ? ' ' : c}
        </span>
      ))}
    </span>
  )
}
