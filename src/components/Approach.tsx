import { useInView } from '../hooks/useInView'

const steps = [
  {
    number: '01',
    title: 'Reach Out',
    description: 'Book a free 15-minute phone consultation. No commitment, no pressure — just a conversation to see if we\'re the right fit.',
  },
  {
    number: '02',
    title: 'Connect',
    description: 'In our first full session, we\'ll explore what brings you in, your goals, and begin building a relationship of trust and safety.',
  },
  {
    number: '03',
    title: 'Grow Together',
    description: 'Through our collaborative work, we\'ll navigate challenges, build skills, and move toward the peace, clarity, and freedom you seek.',
  },
]

export default function Approach() {
  const { ref, isInView } = useInView()

  return (
    <section id="approach" className="relative py-24 md:py-36 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sage-light/20 blur-3xl -z-10" />

      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16 md:mb-20">
          <p className={`text-sm font-medium tracking-[0.2em] uppercase text-sage mb-4 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            The Process
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-brown leading-tight ${isInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
            How we begin{' '}
            <span className="italic text-sage">together.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative ${isInView ? `animate-fade-up delay-${(i + 2) * 100}` : 'opacity-0'}`}
            >
              {/* Connector line (not on last item) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-0 h-px bg-gradient-to-r from-sage/30 to-transparent" />
              )}
              <div className="text-center md:text-left">
                <span className="inline-block font-serif text-5xl font-medium text-sage/20 mb-4">
                  {step.number}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-brown mb-3">
                  {step.title}
                </h3>
                <p className="text-brown-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote section */}
        <div className={`mt-20 md:mt-28 text-center ${isInView ? 'animate-fade-up delay-600' : 'opacity-0'}`}>
          <div className="mx-auto max-w-3xl px-4">
            <div className="w-12 h-px bg-sage/40 mx-auto mb-8" />
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-brown leading-snug italic">
              "I hold the time spent with others as sacred. Each person's journey toward peace,
              clarity, and freedom is a privilege to be part of."
            </blockquote>
            <div className="w-12 h-px bg-sage/40 mx-auto mt-8" />
          </div>
        </div>
      </div>
    </section>
  )
}
