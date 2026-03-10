import { useInView } from '../hooks/useInView'

export default function About() {
  const { ref, isInView } = useInView()

  return (
    <section id="about" className="relative py-24 md:py-36 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sage-light/30 rounded-l-[80px] -z-10" />

      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Left - Image placeholder with organic shape */}
          <div className={`relative ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="relative aspect-[4/5] rounded-[2rem_6rem_2rem_6rem] bg-sage/10 overflow-hidden">
              {/* Placeholder with warm gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-sage-light via-cream-dark to-sage-light/50" />
              {/* Decorative leaf pattern */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 400 500">
                <circle cx="200" cy="150" r="80" fill="currentColor" className="text-sage" />
                <circle cx="120" cy="280" r="50" fill="currentColor" className="text-sage" />
                <circle cx="300" cy="350" r="60" fill="currentColor" className="text-sage" />
                <circle cx="180" cy="420" r="40" fill="currentColor" className="text-sage" />
              </svg>
              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="font-serif text-6xl text-sage/30 mb-2">T</div>
                  <p className="text-sm text-sage/50 tracking-widest uppercase">Photo coming soon</p>
                </div>
              </div>
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-terracotta/10 -z-10" />
          </div>

          {/* Right - Content */}
          <div>
            <p className={`text-sm font-medium tracking-[0.2em] uppercase text-sage mb-4 ${isInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
              About the Therapist
            </p>
            <h2 className={`font-serif text-4xl md:text-5xl font-medium text-brown leading-tight mb-6 ${isInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
              I treasure the vulnerable,{' '}
              <span className="italic text-sage">courageous</span> moments.
            </h2>
            <div className={`space-y-5 text-brown-light leading-relaxed ${isInView ? 'animate-fade-up delay-300' : 'opacity-0'}`}>
              <p>
                Life presents challenging times. Some leave you with awe and peace; others leave you
                gasping for air and searing with pain, confusion or dread. I treasure the vulnerable,
                courageous moments I've shared in partnership with individuals and families.
              </p>
              <p>
                For nearly two decades, I have experienced the joy of meeting with children,
                adolescents, and adults as a Licensed Clinical Professional Counselor. I have served in diverse
                clinical settings, including inpatient care, partial hospitalization programs, and
                outpatient therapy centers.
              </p>
              <p>
                My approach is <strong className="text-brown font-medium">collaborative, compassionate, creative</strong> and
                tailored to each client's needs as we partner together to build resilience, strengthen
                relationships, establish peace within self, and move toward goals.
              </p>
            </div>

            {/* Credentials highlights */}
            <div className={`mt-10 flex flex-wrap gap-3 ${isInView ? 'animate-fade-up delay-400' : 'opacity-0'}`}>
              {['LCPC', 'Play Therapy', 'Gifted & Neurodivergent', 'Trauma-Informed'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-sage-light/60 text-sage-dark text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
