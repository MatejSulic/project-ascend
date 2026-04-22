import Reveal from './Reveal'

const chips = [
  { label: 'Next.JS', hot: true },
  { label: 'HTML/CSS', hot: true },
  { label: 'Claude Code', hot: true },
  { label: 'JavaScript', hot: false },
  { label: 'Python', hot: false },
  { label: 'Google Gemini', hot: false },
]

const stats = [
  { val: '5', accent: true, label: 'Dní dodání' },
  { val: '4×', accent: false, label: 'Levnější než agentura' },
  { val: '<24h', accent: true, label: 'Odpověď na dotaz' },
  { val: 'CZ', accent: false, label: 'Česky, lokálně, na telefonu' },
]

export default function About() {
  return (
    <section id="o-mne">
      <div className="about-grid">
        <Reveal className="about-left">
          <div className="section-tag">O mně</div>
          <h2>
            KDO<br />
            JSEM <span>JÁ</span>
          </h2>
          <p>
            Jsem <strong>Matěj Šulič</strong> a toto je <strong>Project</strong><span className="accent-text">Ascend</span>. Nepotřebuji tým deseti lidí ani pětipodlažní kancelář aby byl web dobrý. Kombinuji moderní AI nástroje s dobrým designem — a výsledek mluví za sebe.
          </p>
          <p>
            Když mi napíšete, odpovím do pár hodin. <strong>Ne za tři dny.</strong>
          </p>
          <div className="skills-chips">
            {chips.map((chip) => (
              <span key={chip.label} className={chip.hot ? 'chip hot' : 'chip'}>
                {chip.label}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal className="about-right">
          {stats.map((stat) => (
            <div key={stat.label} className="about-stat">
              <span className={stat.accent ? 'about-stat-val accent' : 'about-stat-val'}>
                {stat.val}
              </span>
              <span className="about-stat-label">{stat.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
