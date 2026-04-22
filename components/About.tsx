import Reveal from './Reveal'

const chips = [
  { label: 'React', hot: true },
  { label: 'HTML/CSS', hot: true },
  { label: 'Claude Code', hot: true },
  { label: 'JavaScript', hot: false },
  { label: 'SEO základy', hot: false },
  { label: 'Figma', hot: false },
  { label: 'Playwright', hot: false },
]

const stats = [
  { val: '5', accent: true, label: 'Dní dodání webu' },
  { val: '100%', accent: false, label: 'Záloha před dodáním' },
  { val: '20+', accent: true, label: 'Hodin týdně pro tebe' },
  { val: 'CZ', accent: false, label: 'Lokální, česky, na telefonu' },
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
            Jmenuji se <strong>Matej</strong> a stavím weby které skutečně fungují. Nejde mi o krásný design pro design — jde mi o to, aby váš telefon začal zvonit víc.
          </p>
          <p>
            Pracuju rychle, komunikuju přímo a vždy dodám co slíbím. Každý projekt beru jako svůj vlastní byznys.
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
