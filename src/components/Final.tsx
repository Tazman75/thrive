import Book from './Book'

export default function Final() {
  return (
    <section id="book" className="tl-final">
      <div className="wrap">
        <span className="kicker">Ready when you are</span>
        <h2>
          Every journey is <em>easier with company</em>.
        </h2>
        <p>
          The easiest way to get started is booking online — it takes just a few minutes, and your
          insurance is checked automatically. Have a question first? A free 15-minute consult is a
          no-pressure place to begin.
        </p>
        <div className="cta-row">
          <Book placement="final" className="btn btn-primary">Book a Session Online</Book>
          <Book placement="final_consult" className="btn btn-ghost">Free 15-minute consult</Book>
        </div>
      </div>
    </section>
  )
}
