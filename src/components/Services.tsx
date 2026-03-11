import { useInView } from '../hooks/useInView'

const services = [
  {
    title: 'Children & Adolescents',
    description:
      'Play therapy, creative expression, and age-appropriate therapeutic approaches to help young people process emotions and build coping skills.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
        <path d="M20 12C17 12 14 14.5 14 18C14 22 17 24 20 28C23 24 26 22 26 18C26 14.5 23 12 20 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="18" r="2" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: 'Adults & Individuals',
    description:
      'Navigate life transitions, anxiety, depression, and personal growth. Discover clarity, peace, and a stronger sense of self through guided exploration.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
        <path d="M15 26C15 26 16.5 22 20 22C23.5 22 25 26 25 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Family Counseling',
    description:
      'Strengthen connections, improve communication, and work through challenges together. Helping families find their way back to each other.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
        <circle cx="14" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="26" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 26C10 23 12 22 14 22C15 22 16 22.5 17 23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M23 23C24 22.5 25 22 26 22C28 22 30 23 30 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="22" r="2" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: 'Gifted & Neurodivergent',
    description:
      'Specialized support for the gifted population, high-functioning autism, ADHD, and the unique emotional landscapes that come with neurodivergence.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
        <path d="M14 20L18 16L22 22L26 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="20" r="1.5" fill="currentColor" opacity="0.3" />
        <circle cx="26" cy="18" r="1.5" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: 'Anxiety & Depression',
    description:
      'Evidence-based approaches to help manage overwhelming feelings, find calm in the storm, and reconnect with hope and joy.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
        <path d="M13 22C13 22 15 18 20 18C25 18 27 22 27 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 14V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="24" r="1" fill="currentColor" opacity="0.3" />
        <circle cx="24" cy="24" r="1" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: 'Trauma-Informed Care',
    description:
      'Walk through deep pain and find release. Specialized trauma-informed care to help you move from survival to a place of peace and wholeness.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
        <path d="M20 12L20 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 18L20 12L26 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="28" r="2" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
]

export default function Services() {
  const { ref, isInView } = useInView()

  return (
    <section id="services" className="relative py-24 md:py-36 bg-brown overflow-hidden grain-overlay">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sage/30 to-transparent" />
      <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-sage/[0.05]" />
      <div className="absolute -bottom-16 right-20 w-40 h-40 rounded-full bg-terracotta/[0.05]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <p className={`text-sm font-medium tracking-[0.2em] uppercase text-sage-light/70 mb-4 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            Areas of Focus
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-warm-white leading-tight ${isInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
            Every journey is{' '}
            <span className="italic text-terracotta-light">unique.</span>
          </h2>
          <p className={`mt-5 text-lg text-warm-white/60 max-w-2xl mx-auto ${isInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
            Each person's path is different. I tailor my approach to your specific needs,
            drawing on nearly 20 years of clinical experience.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group p-8 rounded-2xl bg-warm-white/[0.04] border border-warm-white/[0.06] hover:bg-warm-white/[0.08] hover:border-warm-white/[0.12] transition-all duration-500 ${
                isInView ? `animate-fade-up delay-${(i + 2) * 100}` : 'opacity-0'
              }`}
            >
              <div className="text-terracotta-light mb-5 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-warm-white mb-3">
                {service.title}
              </h3>
              <p className="text-warm-white/50 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
