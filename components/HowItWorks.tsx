import Reveal from './Reveal'

const steps = [
  {
    num: '01',
    icon: '🔍',
    title: 'Najdu vás',
    desc: 'Podívám se na váš web. Když vidím prostor ke zlepšení připravím návrh ještě předtím, než se vůbec ozveme.',
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
    desc: 'Probereme návrh, zodpovím vaše otázky a doladíme detaily. Vše bez zbytečného čekání a několika kol zpětné vazby.',
    time: 'Den 2',
  },
  {
    num: '04',
    icon: '🚀',
    title: 'Vytvořím váš web',
    desc: 'Během pár dní vám pošlu hotový web. Rychle, kvalitně, bez zbytečných kompromisů.',
    time: 'Den 5–10',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works">
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
