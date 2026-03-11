import { useInView } from '../hooks/useInView'

export default function Contact() {
  const { ref, isInView } = useInView()

  return (
    <section id="contact" className="relative py-24 md:py-36 bg-sage-light/40 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 right-0 w-80 h-80 rounded-full bg-sage/[0.06] blur-2xl" />
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-terracotta/[0.04] blur-2xl" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          {/* Left - Info */}
          <div>
            <p className={`text-sm font-medium tracking-[0.2em] uppercase text-sage mb-4 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
              Get Started
            </p>
            <h2 className={`font-serif text-4xl md:text-5xl font-medium text-brown leading-tight mb-6 ${isInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
              Book a free{' '}
              <span className="italic text-sage">consultation.</span>
            </h2>
            <p className={`text-lg text-brown-light leading-relaxed mb-10 ${isInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
              Schedule a complimentary 15-minute phone consultation to see if we're the right fit.
              There's no commitment, no pressure — just a conversation.
            </p>

            {/* Contact details */}
            <div className={`space-y-6 ${isInView ? 'animate-fade-up delay-300' : 'opacity-0'}`}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-sage" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 4L8 9L14 4" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="1" y="3" width="14" height="10" rx="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-brown-light/70 mb-0.5">Email</p>
                  <a href="mailto:hello@tfcthrive.com" className="text-brown font-medium hover:text-sage transition-colors">
                    hello@tfcthrive.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-sage" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 2H6L7.5 5.5L5.5 7C6.5 9 8 10.5 10 11.5L11.5 9.5L15 11V14C15 14.5523 14.5523 15 14 15C7.37258 15 2 9.62742 2 3C2 2.44772 2.44772 2 3 2Z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-brown-light/70 mb-0.5">Phone</p>
                  <a href="tel:+1234567890" className="text-brown font-medium hover:text-sage transition-colors">
                    (123) 456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-sage" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 1.5C5 1.5 2.5 4 2.5 7C2.5 11 8 14.5 8 14.5C8 14.5 13.5 11 13.5 7C13.5 4 11 1.5 8 1.5Z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="8" cy="7" r="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-brown-light/70 mb-0.5">Location</p>
                  <p className="text-brown font-medium">DuPage County, Illinois</p>
                  <p className="text-sm text-brown-light/70">Telehealth available statewide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact form */}
          <div className={`${isInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-warm-white rounded-3xl p-8 md:p-10 shadow-sm shadow-sage/[0.05]"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brown-light mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-cream border border-sage/10 rounded-xl text-brown placeholder:text-brown-light/40 focus:outline-none focus:border-sage/30 focus:ring-2 focus:ring-sage/10 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brown-light mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-cream border border-sage/10 rounded-xl text-brown placeholder:text-brown-light/40 focus:outline-none focus:border-sage/30 focus:ring-2 focus:ring-sage/10 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-brown-light mb-2">
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    className="w-full px-4 py-3 bg-cream border border-sage/10 rounded-xl text-brown focus:outline-none focus:border-sage/30 focus:ring-2 focus:ring-sage/10 transition-all"
                  >
                    <option value="">Select an area...</option>
                    <option value="child">Child & Adolescent Counseling</option>
                    <option value="adult">Adult & Individual Counseling</option>
                    <option value="family">Family Counseling</option>
                    <option value="gifted">Gifted & Neurodivergent Support</option>
                    <option value="anxiety">Anxiety & Depression</option>
                    <option value="trauma">Trauma & EMDR</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brown-light mb-2">
                    Message <span className="text-brown-light/40">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-cream border border-sage/10 rounded-xl text-brown placeholder:text-brown-light/40 focus:outline-none focus:border-sage/30 focus:ring-2 focus:ring-sage/10 transition-all resize-none"
                    placeholder="Tell me a little about what brings you here..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-sage text-warm-white font-medium rounded-full hover:bg-sage-dark transition-all duration-300 hover:shadow-lg hover:shadow-sage/20 tracking-wide"
                >
                  Send Message
                </button>
                <p className="text-xs text-brown-light/50 text-center">
                  Your information is kept strictly confidential.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
