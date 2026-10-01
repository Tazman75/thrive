import Book from './Book'

export default function Hero() {
  return (
    <section className="tl-hero">
      <div className="wrap">
        <span className="eyebrow">Online therapy · All of Illinois</span>
        <h1>
          A safe place to grow, heal, and <em>thrive</em> — from wherever you are.
        </h1>
        <p className="lede">
          I'm Simone Shepardson, a Licensed Clinical Professional Counselor with more than two
          decades of experience. I meet with adults and teens across Illinois by secure video, with{' '}
          <strong>evening and weekend sessions Thursday through Sunday</strong> — and I'm in-network
          with <strong>Aetna and Blue Cross Blue Shield</strong>.
        </p>
        <div className="cta-row">
          <Book placement="hero" className="btn btn-primary">Book a Session Online</Book>
          <Book placement="hero_consult" className="btn btn-ghost">Free 15-minute consult</Book>
        </div>
        <ul className="tl-hero-facts">
          <li><span className="dot" />Telehealth across Illinois</li>
          <li><span className="dot" />Evenings &amp; weekends, Thu–Sun</li>
          <li><span className="dot" />Aetna &amp; BCBS in-network</li>
          <li><span className="dot" />Insurance checked before you book</li>
        </ul>
      </div>
    </section>
  )
}
