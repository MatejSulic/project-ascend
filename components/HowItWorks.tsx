import Reveal from './Reveal'

const steps = [
  {
    num: '01',
    icon: '🔍',
    title: 'Najdu vás',
    desc: 'Podívám se na váš web. Když vidím prostor ke zlepšení — a skoro vždy ho vidím — připravím návrh ještě předtím, než se vůbec ozveme.',
    time: 'Den 0',
  },
  {
    num: '02',
    icon: '✉️',
    title: 'Pošlu návrh',
    desc: 'Žádná úvodní schůzka. Dostanete vizuál rovnou do emailu. Výsledek vidíte dřív, než většina agentur domluví první call.',
    time: 'Den 1',
  },
  {
    num: '03',
    icon: '📞',
    title: 'Domluvíme se',
    desc: 'Patnáct minut. Projdeme návrh, doladíme detaily. Žádné týdenní email vlákno, žádné zbytečné schůzky.',
    time: 'Den 2',
  },
  {
    num: '04',
    icon: '🚀',
    title: 'Web je živý',
    desc: 'Pět dní od zálohy. Ne šest týdnů, ne osm. Pět dní — a máte web který se nestydí.',
    time: 'Den 5–7',
  },
]

export default function HowItWorks() {
  return (
    <section id="jak">
      <div className="section-tag">Proces</div>
      <h2>
        JAK TO<br />
        <span>FUNGUJE</span>
      </h2>
      <Reveal className="steps-grid">
        {steps.map((step) => (
          <div key={step.num} className="step-card" data-num={step.num}>
            <span className="step-icon">{step.icon}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
            <span className="step-time">{step.time}</span>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
