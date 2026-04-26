import Image from 'next/image'

const logos = [
  { left: '6%',  size: 28, dur: 28, delay: -4  },
  { left: '19%', size: 20, dur: 35, delay: -18 },
  { left: '37%', size: 38, dur: 24, delay: -10 },
  { left: '53%', size: 24, dur: 32, delay: -22 },
  { left: '68%', size: 18, dur: 30, delay: -8  },
  { left: '80%', size: 33, dur: 26, delay: -15 },
  { left: '91%', size: 22, dur: 38, delay: -28 },
]

export default function FloatingLogos() {
  return (
    <div className="floating-logos">
      {logos.map((l, i) => (
        <div
          key={i}
          className="floating-logo"
          style={{
            left: l.left,
            width: l.size,
            animationDuration: `${l.dur}s`,
            animationDelay: `${l.delay}s`,
          }}
        >
          <Image
            src="/pa-logo.png"
            alt=""
            width={l.size}
            height={l.size}
            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
          />
        </div>
      ))}
    </div>
  )
}
