import Book from './Book'

const steps = [
  { step: 'one', title: 'Start with a free consult', body: "A free 15-minute phone or video call — we talk through what brings you in and whether we're a good fit, before you commit to anything." },
  { step: 'two', title: 'Book online in minutes', body: 'Schedule through Headway in just a few minutes. Your insurance coverage is checked automatically before your first appointment.' },
  { step: 'three', title: 'Meet by secure video', body: 'Sessions happen over a private, secure video link. Anywhere in Illinois — your couch, your office, your parked car between obligations.' },
  { step: 'four', title: 'Evenings & weekends', body: "I hold sessions Thursday through Sunday, including evening and weekend hours — so therapy doesn't have to compete with your workday." },
]

export default function How() {
  return (
    <section id="how" className="tl-how">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">How Online Sessions Work</span>
          <h2>
            Therapy that fits <em>around</em> your week.
          </h2>
          <p>No commute, no waiting room — just a private hour, from your own space.</p>
        </div>
        <div className="tl-how-grid">
          {steps.map((s) => (
            <div className="tl-how-card" key={s.step}>
              <span className="step">{s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
        <div className="cta-row">
          <Book placement="how" className="btn btn-primary">Book a Session Online</Book>
          <Book placement="how_consult" className="btn btn-ghost">Request a free consult</Book>
        </div>
      </div>
    </section>
  )
}
