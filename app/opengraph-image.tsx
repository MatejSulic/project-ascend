import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Project Ascend — Matěj Šulič'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#080808',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '80px',
        }}
      >
        {/* orange glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '560px',
            height: '560px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212,92,30,0.22) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* subtle grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            display: 'flex',
          }}
        />

        {/* tag */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#d45c1e',
            fontSize: '15px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}
        >
          WEB DESIGN · AI WORKFLOW · ČR
        </div>

        {/* headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            lineHeight: 0.88,
            letterSpacing: '-4px',
            marginBottom: '36px',
          }}
        >
          <span style={{ color: '#f0ece4', fontSize: '148px', fontWeight: 900 }}>PROJECT</span>
          <span style={{ color: '#d45c1e', fontSize: '148px', fontWeight: 900 }}>ASCEND</span>
        </div>

        {/* description */}
        <div style={{ display: 'flex', fontSize: '26px', color: '#666' }}>
          Moderní weby s AI workflow — dodání za 5–10 dní.
        </div>

        {/* domain */}
        <div
          style={{
            position: 'absolute',
            top: '80px',
            right: '80px',
            display: 'flex',
            fontSize: '18px',
            color: '#2a2a2a',
            letterSpacing: '0.08em',
          }}
        >
          projectascend.cz
        </div>
      </div>
    ),
    { ...size }
  )
}
