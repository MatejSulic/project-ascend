import HeroVideoSide from './HeroVideoSide'

export default function Hero() {
  return (
    <section className="hero">
      <HeroVideoSide />
      <div className="hero-bottom-fade" />
      <div className="hero-tag">Web Design · AI Workflow · ČR</div>
      <h1 className="hero-headline">
        PROJECT<br />
        <span className="line2">ASCEND</span>
      </h1>
      <div className="hero-bottom">
        <p className="hero-desc">
        Zapomeňte na čekání a kompromisy.<br />S <span className="hero-ai">AI workflow</span> stavíme přesně to co chcete — <span className="hero-highlight">rychleji</span> než si myslíte, <span className="hero-highlight">levněji</span> než očekáváte.
        </p>
        <div className="hero-stats">
          <div className="hstat">
            <span className="hstat-val">5-10</span>
            <span className="hstat-label">Dní dodání</span>
          </div>
          <div className="hstat">
            <span className="hstat-val">10k+</span>
            <span className="hstat-label">Cena od Kč</span>
          </div>
        </div>
        <a href="#contact" className="hero-mobile-cta">Spolupracovat →</a>
      </div>
    </section>
  )
}
