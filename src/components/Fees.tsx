import { useInView } from '../hooks/useInView'

export default function Fees() {
  const { ref, isInView } = useInView()

  return (
    <section id="fees" className="relative py-24 md:py-36 bg-sage-light/30 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 left-0 w-60 h-60 rounded-full bg-sage/[0.04] blur-2xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-terracotta/[0.03] blur-2xl" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-16 md:mb-20">
          <p className={`text-sm font-medium tracking-[0.2em] uppercase text-sage mb-4 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            Fees & Insurance
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl font-medium text-brown leading-tight ${isInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
            Fees &{' '}
            <span className="italic text-sage">insurance.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Session Fee */}
          <div className={`bg-warm-white rounded-2xl p-8 ${isInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
            <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-sage" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="10" cy="10" r="8" />
                <path d="M10 6V10L13 13" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-semibold text-brown mb-2">Individual Session</h3>
            <p className="font-serif text-3xl font-medium text-sage mb-3">$110</p>
            <p className="text-sm text-brown-light leading-relaxed">
              Per session. A free 15-minute phone consultation is available before your first appointment.
            </p>
          </div>

          {/* Insurance */}
          <div className={`bg-warm-white rounded-2xl p-8 ${isInView ? 'animate-fade-up delay-300' : 'opacity-0'}`}>
            <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-sage" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 2L3 6V10C3 14.4183 6.13401 18.2 10 19C13.866 18.2 17 14.4183 17 10V6L10 2Z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 10L9 12L13 8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-semibold text-brown mb-3">Insurance Accepted</h3>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2.5 text-brown-light">
                <div className="w-1.5 h-1.5 rounded-full bg-sage/60 flex-shrink-0" />
                BlueCross BlueShield
              </li>
              <li className="flex items-center gap-2.5 text-brown-light">
                <div className="w-1.5 h-1.5 rounded-full bg-sage/60 flex-shrink-0" />
                Out of Network
              </li>
            </ul>
            <p className="text-xs text-brown-light/60 mt-4">
              Please verify your coverage. I'm happy to help you check your benefits.
            </p>
          </div>

          {/* Payment */}
          <div className={`bg-warm-white rounded-2xl p-8 ${isInView ? 'animate-fade-up delay-400' : 'opacity-0'}`}>
            <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-sage" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="5" width="16" height="11" rx="2" />
                <path d="M2 9H18" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-semibold text-brown mb-3">Payment Methods</h3>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2.5 text-brown-light">
                <div className="w-1.5 h-1.5 rounded-full bg-sage/60 flex-shrink-0" />
                Cash &amp; Check
              </li>
              <li className="flex items-center gap-2.5 text-brown-light">
                <div className="w-1.5 h-1.5 rounded-full bg-sage/60 flex-shrink-0" />
                Visa, Mastercard, Discover
              </li>
              <li className="flex items-center gap-2.5 text-brown-light">
                <div className="w-1.5 h-1.5 rounded-full bg-sage/60 flex-shrink-0" />
                Health Savings Account (HSA)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
