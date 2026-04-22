import Reveal from './Reveal'

const services = [
  {
    num: '01',
    name: 'Nový web od základu',
    desc: 'Moderní design, mobilní verze, kontaktní formulář, hosting setup',
    price: '15 000–25 000 Kč',
  },
  {
    num: '02',
    name: 'Redesign stávajícího webu',
    desc: 'Zachování obsahu, nový vizuál, rychlost, SEO základ',
    price: '10 000–20 000 Kč',
  },
  {
    num: '03',
    name: 'Správa webu / Retainer',
    desc: 'Aktualizace, hosting, opravy, drobné změny každý měsíc',
    price: '2 500–3 500 Kč/měs',
  },
  {
    num: '04',
    name: 'Google Business profil',
    desc: 'Setup a optimalizace — více zobrazení v Mapách',
    price: '3 000–5 000 Kč',
  },
]

export default function Services() {
  return (
    <section id="sluzby">
      <div className="section-tag">Co nabízím</div>
      <h2>
        SLUŽBY &amp;<br />
        <span>CENY</span>
      </h2>
      <Reveal>
        {services.map((s) => (
          <div key={s.num} className="service-row">
            <div className="service-left">
              <span className="service-num">{s.num}</span>
              <div>
                <div className="service-name">{s.name}</div>
                <div className="service-desc">{s.desc}</div>
              </div>
            </div>
            <div className="service-price">{s.price}</div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
