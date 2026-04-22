'use client'
import { useEffect, useRef } from 'react'

export default function HeroVideoSide() {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (ref.current) ref.current.playbackRate = 1
  }, [])

  return (
    <div className="hero-video-side-wrap">
      <video
        ref={ref}
        className="hero-video-side"
        src="/video2.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-video-side-tint" />
    </div>
  )
}
