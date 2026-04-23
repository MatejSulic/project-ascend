'use client'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <nav>
        <a href="#" className="nav-logo">
          Project<span>Ascend</span>
        </a>
        <ul className="nav-links">
          <li><a href="#why-us">Proč my</a></li>
          <li><a href="#how-it-works">Jak to funguje</a></li>
          <li><a href="#services">Služby</a></li>
          <li><a href="#about">O mně</a></li>
          <li><a href="#contact">Kontakt</a></li>
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
