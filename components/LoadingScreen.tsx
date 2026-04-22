'use client'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [hiding, setHiding] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setHiding(true), 1800)
    const t2 = setTimeout(() => setHidden(true), 2400)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (hidden) return null

  return (
    <div className={`loader${hiding ? ' loader-hide' : ''}`}>
      <div className="loader-inner">
        <svg className="loader-ring" viewBox="0 0 100 100" fill="none">
          <circle className="loader-track" cx="50" cy="50" r="44" />
          <circle className="loader-circle" cx="50" cy="50" r="44" />
        </svg>
        <div className="loader-logo">
          Project<span>Ascend</span>
        </div>
      </div>
    </div>
  )
}
