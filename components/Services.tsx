import Reveal from './Reveal'

const services = [
  {
    num: '01',
    name: 'Nový web od základu',
    desc: 'Moderní design, mobilní verze, kontaktní formulář',
    price: '10 000 – 25 000 Kč',
  },
  {
    num: '02',
    name: 'Redesign stávajícího webu',
    desc: 'Zachování obsahu, nový vizuál, rychlost, připravenost pro Google',
    price: '8000 – 15 000 Kč',
  },
  {
    num: '03',
    name: 'Správa webu / Retainer',
    desc: 'Aktualizace, opravy, drobné změny každý měsíc',
    price: '2 000 – 3 000 Kč/měs',
  },
  {
    num: '04',
    name: 'Jednoduchá webová aplikace',
    desc: 'Rezervační systém, kalkulačka, formulář s logikou — cokoliv co váš web potřebuje navíc',
    price: 'Dle rozsahu',
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
      <p className="services-intro">
        Žádné balíčky, žádné skryté poplatky. Víte přesně co dostanete — a zaplatíte za to, ne za kancelář a tým který váš web ani nevidí.
      </p>
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
