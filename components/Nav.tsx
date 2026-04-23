'use client'
import { useState, useEffect } from 'react'

const sections = ['why-us', 'how-it-works', 'services', 'about', 'contact']

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const close = () => setOpen(false)

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.scrollY + window.innerHeight * 0.35
      let current = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= threshold) current = id
      }
      setActive(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const cls = (id: string) => id === active ? 'nav-link-active' : ''

  return (
    <>
      <nav>
        <a href="#" className="nav-logo">
          Project<span>Ascend</span>
        </a>
        <ul className="nav-links">
          <li><a href="#why-us" className={cls('why-us')}>Proč my</a></li>
          <li><a href="#how-it-works" className={cls('how-it-works')}>Jak to funguje</a></li>
          <li><a href="#services" className={cls('services')}>Služby</a></li>
          <li><a href="#about" className={cls('about')}>O mně</a></li>
          <li><a href="#contact" className={cls('contact')}>Kontakt</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Spolupracovat →</a>
        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
        >
          <span className={open ? 'ham-open' : ''} />
          <span className={open ? 'ham-open' : ''} />
          <span className={open ? 'ham-open' : ''} />
        </button>
      </nav>
      <div className={`nav-mobile-menu${open ? ' open' : ''}`}>
        <a href="#why-us" onClick={close}>Proč my</a>
        <a href="#how-it-works" onClick={close}>Jak to funguje</a>
        <a href="#services" onClick={close}>Služby</a>
        <a href="#about" onClick={close}>O mně</a>
        <a href="#contact" onClick={close} className="nav-mobile-cta">
          Spolupracovat →
        </a>
      </div>
    </>
  )
}
