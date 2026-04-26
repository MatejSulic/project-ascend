import Reveal from './Reveal'
import FloatingLogos from './FloatingLogos'

export default function WhyUs() {
  return (
    <section id="why-us" style={{ position: 'relative', overflow: 'hidden' }}>
      <FloatingLogos />
      <Reveal className="why-content">
        <div className="why-left">
          <div className="section-tag">Proč my</div>
          <h2>
            JINAK NEŽ<br />
            <span>OSTATNÍ</span>
          </h2>
          <p className="why-text">
            Agentura vám za <strong>50 000 Kč</strong> dodá web za dva měsíce a přiloží
            fakturu za „strategické konzultace". Já za <strong>méně </strong>peněz dodám <strong>více</strong> — a <strong>dříve</strong>.
            Tohle není levná alternativa. <strong>Je to využití moderních technologií.</strong>
          </p>
        </div>
        <div className="why-compare">
          <div className="why-col theirs">
            <div className="why-col-label">Klasická agentura</div>
            <span className="why-stat">8–12 týdnů</span>
            <div className="why-sublabel">doba dodání</div>
            <span className="why-stat" style={{ marginTop: '20px' }}>50 000 Kč</span>
            <div className="why-sublabel">průměrná cena</div>
          </div>
          <div className="why-col">
            <div className="why-col-label us"><strong style={{ color: 'var(--white)' }}>Project</strong><span className="accent-text">Ascend</span></div>
            <span className="why-stat accent">5-10 dní</span>
            <div className="why-sublabel">doba dodání</div>
            <span className="why-stat accent" style={{ marginTop: '20px' }}>od 10 000 Kč</span>
            <div className="why-sublabel">cena</div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
