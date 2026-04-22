import Reveal from './Reveal'

const steps = [
  {
    num: '01',
    icon: '🔍',
    title: 'Najdu vás',
    desc: 'Vidím že váš web potřebuje pomoct. Připravím ukázkový návrh ještě předtím, než se vůbec ozveme.',
    time: 'Den 0',
  },
  {
    num: '02',
    icon: '✉️',
    title: 'Pošlu návrh',
    desc: 'Email s vizuálem nového webu přímo v příloze. Žádné sliby — vidíte výsledek hned.',
    time: 'Den 1',
  },
  {
    num: '03',
    icon: '📞',
    title: 'Zavoláme',
    desc: 'Krátký hovor — projdeme návrh, doladíme detaily, domluvíme se na ceně a záloze.',
    time: 'Den 2',
  },
  {
    num: '04',
    icon: '🚀',
    title: 'Web je živý',
    desc: 'Do 5 pracovních dní od zálohy je váš nový web online. Rychlý, mobilní, připravený na Google.',
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
