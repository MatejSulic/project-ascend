import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="kontakt">
      <div className="section-tag" style={{ justifyContent: 'center' }}>
        Pojďme na to
      </div>
      <Reveal>
        <h2>
          CHCETE<br />
          <span>NOVÝ WEB?</span>
        </h2>
      </Reveal>
      <Reveal>
        <p>Napište mi — do 24 hodin pošlu ukázkový návrh vašeho webu zdarma.</p>
      </Reveal>
      <Reveal>
        <a href="mailto:ahoj@projectascend.cz" className="contact-btn">
          Napsat mi → ahoj@projectascend.cz
        </a>
      </Reveal>
    </section>
  )
}
