import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact">
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
        <p><strong>Zavolejte mi</strong> nebo <strong>pošlete odkaz na váš web</strong>. Ukážu vám jak by mohl vypadat — <strong>zdarma, bez závazku, bez čekání</strong>.</p>
      </Reveal>
      <Reveal>
        <div className="contact-actions">
          <a href="mailto:info@projectascend.cz" className="contact-btn">
            info@projectascend.cz
          </a>
          <a href="tel:+420728473221" className="contact-phone">
            +420 728 473 221
          </a>
        </div>
      </Reveal>
    </section>
  )
}
