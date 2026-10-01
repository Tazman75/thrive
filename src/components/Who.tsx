import type { ReactNode } from 'react'

const svgProps = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

const cards: { icon: ReactNode; title: string; body: ReactNode }[] = [
  {
    icon: <path d="M12 21C12 21 4 15.5 4 9.8C4 6.6 6.5 4 9.6 4C11 4 12 4.7 12 4.7S13 4 14.4 4C17.5 4 20 6.6 20 9.8C20 15.5 12 21 12 21Z" />,
    title: 'Adults navigating anxiety, depression & self-esteem',
    body: 'Evidence-based help to quiet overwhelming feelings, find calm in the storm, and reconnect with hope, confidence, and joy.',
  },
  {
    icon: (
      <>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
        <circle cx="12" cy="12" r="3.5" />
      </>
    ),
    title: 'Women facing overwhelm, grief & life transitions',
    body: 'A steady place to breathe when life shifts under you — loss, caregiving, career change, identity, or simply carrying too much for too long.',
  },
  {
    icon: (
      <>
        <path d="M12 3C8 3 5 6 5 9.5c0 2 1 3.5 2 4.5v3h10v-3c1-1 2-2.5 2-4.5C19 6 16 3 12 3Z" />
        <path d="M10 21h4" />
      </>
    ),
    title: 'Neurodivergent adults — gifted, ADHD, autistic',
    body: (
      <>
        Specialized support for the unique emotional landscape of neurodivergence. This includes
        parents of gifted and neurodivergent kids who need care for <em>themselves</em>.
      </>
    ),
  },
  {
    icon: <path d="M21 12c0 4-4 7-9 7-1 0-2-.1-2.9-.4L4 20l1.3-3.1C4 15.6 3 13.9 3 12c0-4 4-7 9-7s9 3 9 7Z" />,
    title: 'Teens, 13 and up',
    body: 'Age-appropriate, judgment-free therapy that helps teenagers process big emotions, build coping skills, and feel understood.',
  },
]

export default function Who() {
  return (
    <section id="who" className="tl-who">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Who I Work With</span>
          <h2>
            Support for the season <em>you're</em> in.
          </h2>
          <p>
            Each person's path is different. I tailor my approach to your specific needs, drawing
            on more than two decades of clinical experience.
          </p>
        </div>
        <div className="tl-who-grid">
          {cards.map((c) => (
            <div className="tl-card" key={c.title}>
              <span className="wc-icon">
                <svg {...svgProps}>{c.icon}</svg>
              </span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
