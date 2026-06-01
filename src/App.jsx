import { useEffect, useRef } from 'react'
import CoverSection from './components/CoverSection'
import IndexSection from './components/IndexSection'
import ProfileSection from './components/ProfileSection'
import StackSection from './components/StackSection'
import CaseworkSection from './components/CaseworkSection'
import PracticeSection from './components/PracticeSection'
import ColophonSection from './components/ColophonSection'
import Marquee from './components/Marquee'

export default function App() {
  const blobRef = useRef(null)

  useEffect(() => {
    /* 1) Scroll reveals */
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          e.target.querySelectorAll('.reveal-letter').forEach((el) => {
            setTimeout(() => el.classList.add('in'), 0)
          })
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))

    /* 2) Section theme tracking */
    const sections = [...document.querySelectorAll('section.spread[data-theme]')]
    const sectionTag = document.getElementById('sectionTag')
    const sectionIo = new IntersectionObserver((entries) => {
      let best = null
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const rect = e.target.getBoundingClientRect()
          const center = Math.abs((rect.top + rect.bottom) / 2 - window.innerHeight / 2)
          if (!best || center < best.center) best = { el: e.target, center }
        }
      })
      if (best) {
        const theme = best.el.dataset.theme
        const label = best.el.dataset.screenLabel || '—'
        document.body.dataset.theme = theme
        document.documentElement.dataset.theme = theme
        document.body.style.background = getComputedStyle(best.el).backgroundColor
        document.body.style.color = getComputedStyle(best.el).color
        if (sectionTag) sectionTag.textContent = '§ ' + label.toUpperCase()
      }
    }, { threshold: [0.25, 0.5, 0.75] })
    sections.forEach((s) => sectionIo.observe(s))

    /* 3) Scroll progress */
    const progress = document.getElementById('progressBar')
    const pct = document.getElementById('scrollPct')
    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = Math.min(1, Math.max(0, window.scrollY / max))
      if (progress) progress.style.width = (p * 100).toFixed(2) + '%'
      if (pct) pct.textContent = String(Math.round(p * 100)).padStart(3, '0') + '%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    /* 3b) Smooth parallax — rAF lerp loop */
    const parEls = [...document.querySelectorAll('[data-parallax]')].map((el) => ({
      el,
      k: parseFloat(el.dataset.parallax || '0'),
      current: 0,
      target: 0,
    }))

    /* 3c) Horizontal scroll-pin for [data-hcase] wrappers */
    const hcaseEls = [...document.querySelectorAll('[data-hcase]')].map((wrap) => ({
      wrap,
      track: wrap.querySelector('.hcase-track'),
      bar: wrap.querySelector('.hcase-progress span'),
      current: 0,
      target: 0,
    }))

    let parRafId
    function parTick() {
      const vh = window.innerHeight
      for (const p of parEls) {
        const rect = p.el.getBoundingClientRect()
        const center = (rect.top + rect.bottom) / 2
        p.target = -(center - vh / 2) * p.k
        p.current += (p.target - p.current) * 0.12
        p.el.style.setProperty('--py', `${p.current.toFixed(2)}px`)
      }
      for (const h of hcaseEls) {
        const rect = h.wrap.getBoundingClientRect()
        const total = rect.height - vh
        const prog = Math.min(1, Math.max(0, -rect.top / Math.max(1, total)))
        h.target = prog
        h.current += (h.target - h.current) * 0.18
        const trackW = h.track ? h.track.scrollWidth : 0
        const dist = trackW - window.innerWidth
        if (h.track) h.track.style.transform = `translate3d(${(-h.current * dist).toFixed(2)}px, 0, 0)`
        if (h.bar) h.bar.style.width = (h.current * 100).toFixed(2) + '%'
      }
      parRafId = requestAnimationFrame(parTick)
    }
    parRafId = requestAnimationFrame(parTick)

    /* 4) Cursor blob */
    const blob = blobRef.current
    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let bx = mx
    let by = my
    function onMouseMove(e) { mx = e.clientX; my = e.clientY }
    window.addEventListener('mousemove', onMouseMove)

    let cursorRafId
    function tick() {
      bx += (mx - bx) * 0.18
      by += (my - by) * 0.18
      if (blob) blob.style.transform = `translate(${bx}px, ${by}px) translate(-50%, -50%)`
      cursorRafId = requestAnimationFrame(tick)
    }
    cursorRafId = requestAnimationFrame(tick)

    function onEnter() { blob && blob.classList.add('is-hover') }
    function onLeave() { blob && blob.classList.remove('is-hover') }
    document.querySelectorAll('[data-hover], a, button, .chip, .case, .index-row').forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      io.disconnect()
      sectionIo.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(parRafId)
      cancelAnimationFrame(cursorRafId)
    }
  }, [])

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="cursor-blob" id="cursorBlob" ref={blobRef} aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true">
        <span id="progressBar" />
      </div>

      <header className="top-bar">
        <div className="masthead">
          <span className="mast-mark">◐</span>
          <span className="mast-id">SHUBHAM / S.</span>
        </div>
        <nav className="top-nav">
          <a href="#cover">00 · cover</a>
          <a href="#profile">01 · profile</a>
          <a href="#stack">02 · stack</a>
          <a href="#casework">03 · casework</a>
          <a href="#practice">04 · practice</a>
          <a href="#colophon">05 · contact</a>
          <a href="/assets/myresume.pdf" download="Shubham_Sharma_Resume.pdf" className="nav-resume" data-hover>resume ↓</a>
        </nav>
        <div className="edition">
          <span>VOL.&nbsp;01</span>
          <span className="dot">•</span>
          <span>EDITION 2026</span>
        </div>
      </header>

      <aside className="side-rail left" aria-hidden="true">
        <span>S/S</span>
        <span className="rule" />
        <span>BHOPAL · 23.25°N</span>
      </aside>
      <aside className="side-rail right" aria-hidden="true">
        <span id="sectionTag">§ 00 — COVER</span>
        <span className="rule" />
        <span id="scrollPct">000%</span>
      </aside>

      <main id="reel">
        <CoverSection />
        <Marquee theme="bone" words={[
          'AI · ML · DEEP LEARNING',
          'TRANSFORMERS',
          'COMPUTER VISION',
          'REINFORCEMENT LEARNING',
          'GENERATIVE SYSTEMS',
          'CLOUD NATIVE',
        ]} />
        <IndexSection />
        <ProfileSection />
        <Marquee theme="newsprint" reverse words={[
          'PYTHON', 'TENSORFLOW', 'KERAS', 'PYTORCH',
          'AWS · OCI', 'DOCKER', 'NEXT · REACT', 'LANGCHAIN',
        ]} />
        <StackSection />
        <CaseworkSection />
        <PracticeSection />
        <Marquee theme="noir" words={[
          'STILL BUILDING', 'STILL LEARNING', 'STILL SHIPPING', 'STILL CURIOUS',
        ]} />
        <ColophonSection />
      </main>
    </>
  )
}
