export default function Hero() {
  return (
    <section className="hero">
      <div className="stickers">
        <div className="sticker s1">🔨 Weby pro<br />řemeslníky</div>
        <div className="sticker s2">✓ Moderní<br />design</div>
        <div className="sticker s3">⚡ Claude Code<br />workflow</div>
        <div className="sticker s4">📈 Více zákazníků<br />z Googlu</div>
        <div className="sticker s5">Hotovo<br />do 5 dní ©</div>
      </div>

      <div className="hero-tag">Web Design · AI Workflow · ČR</div>
      <h1 className="hero-headline">
        PROJECT<br />
        <span className="line2">ASCEND</span>
      </h1>
      <div className="hero-bottom">
        <p className="hero-desc">
          Dělám <strong>weby pro řemeslníky</strong> — instalatéry, elektrikáře, topenáře.
          Rychle, moderně, za cenu která dává smysl.
          <br /><br />
          Návrh dostanete ještě před podpisem smlouvy.
        </p>
        <div className="hero-stats">
          <div className="hstat">
            <span className="hstat-val">5</span>
            <span className="hstat-label">Dní dodání</span>
          </div>
          <div className="hstat">
            <span className="hstat-val">15k+</span>
            <span className="hstat-label">Cena od Kč</span>
          </div>
        </div>
      </div>
    </section>
  )
}
