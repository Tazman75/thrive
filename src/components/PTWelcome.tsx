import { useState } from 'react'

interface PTWelcomeProps {
  onViewFullSite: () => void
}

export default function PTWelcome({ onViewFullSite }: PTWelcomeProps) {
  const [formFocused, setFormFocused] = useState(false)

  return (
    <div className="min-h-screen bg-cream relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-[60%_40%_50%_50%/50%_60%_40%_50%] bg-sage/[0.05]"
          style={{ animation: 'gentle-float 10s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-20 -left-20 w-[400px] h-[400px] rounded-[40%_60%_50%_50%/60%_40%_50%_50%] bg-terracotta/[0.03]"
          style={{ animation: 'gentle-float 12s ease-in-out infinite 2s' }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-sage/20"
          style={{ animation: 'gentle-float 5s ease-in-out infinite 1s' }}
        />
      </div>

      {/* Top bar */}
      <header className="relative z-10 px-6 py-6">
        <div className="mx-auto max-w-5xl flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <svg width="22" height="22" viewBox="0 0 28 28" fill="none" className="text-sage">
              <path
                d="M14 3C14 3 6 8 6 16C6 20.4183 9.58172 24 14 24C18.4183 24 22 20.4183 22 16C22 8 14 3 14 3Z"
                fill="currentColor"
                opacity="0.2"
              />
              <path
                d="M14 3C14 3 6 8 6 16C6 20.4183 9.58172 24 14 24C18.4183 24 22 20.4183 22 16C22 8 14 3 14 3Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M14 24V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="font-serif text-lg font-semibold tracking-tight text-brown">
              Thrive Family Counseling
            </span>
          </div>
          <button
            onClick={onViewFullSite}
            className="text-sm text-brown-light hover:text-sage transition-colors duration-200 tracking-wide"
          >
            View Full Site &rarr;
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 mx-auto max-w-5xl px-6 pt-12 md:pt-20 pb-24">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">

          {/* Left — Welcome message */}
          <div>
            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 bg-sage-light/60 rounded-full mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-sage-dark">
                Welcome from Psychology Today
              </span>
            </div>

            <h1 className="animate-fade-up delay-100 font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] text-brown mb-6">
              I'm glad you{' '}
              <span className="italic text-sage">found me.</span>
            </h1>

            <p className="animate-fade-up delay-200 text-lg text-brown-light leading-relaxed mb-8">
              Taking this step shows real courage. Whether you're seeking support for
              yourself, your child, or your family — you're in the right place.
            </p>

            {/* Photo + intro */}
            <div className="animate-fade-up delay-300 flex items-start gap-5 mb-10">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-sage/10 ring-offset-2 ring-offset-cream">
                <img
                  src="/simone.jpeg"
                  alt="Simone Shepardson"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="text-brown-light leading-relaxed pt-1">
                I'm Simone, a Licensed Clinical Professional Counselor with nearly two decades
                of experience. I work with children, adolescents, adults, and families
                using a compassionate, collaborative approach tailored to your unique needs.
              </p>
            </div>

            {/* Quick specialties */}
            <div className="animate-fade-up delay-400 mb-10">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-sage/70 mb-4">
                Areas of Focus
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  'Anxiety & Depression',
                  'Child & Adolescent',
                  'Family Counseling',
                  'Trauma & EMDR',
                  'Gifted & Neurodivergent',
                  'Play Therapy',
                ].map((specialty) => (
                  <span
                    key={specialty}
                    className="px-3.5 py-1.5 bg-warm-white border border-sage/10 text-brown-light text-sm rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Trust signals */}
            <div className="animate-fade-up delay-500 flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm text-brown-light">
                <div className="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-sage" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 1.5C5 1.5 2.5 4 2.5 7C2.5 11 8 14.5 8 14.5C8 14.5 13.5 11 13.5 7C13.5 4 11 1.5 8 1.5Z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="8" cy="7" r="2" strokeLinecap="round" />
                  </svg>
                </div>
                <span>DuPage County, Illinois &middot; Telehealth available statewide</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-brown-light">
                <div className="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-sage" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8Z" strokeLinecap="round" />
                    <path d="M8 5V8L10 10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span>Free 15-minute consultation &middot; No pressure, no commitment</span>
              </div>
            </div>
          </div>

          {/* Right — Consultation CTA card */}
          <div className="animate-fade-up delay-300 md:sticky md:top-8">
            <div
              className={`bg-warm-white rounded-3xl p-8 md:p-10 shadow-sm transition-shadow duration-500 ${
                formFocused ? 'shadow-lg shadow-sage/[0.08]' : 'shadow-sage/[0.04]'
              }`}
            >
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-brown mb-2">
                Let's start with a{' '}
                <span className="italic text-sage">conversation.</span>
              </h2>
              <p className="text-sm text-brown-light/70 mb-8">
                Schedule a free 15-minute phone consultation. Tell me a little about what brings you here.
              </p>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="pt-name" className="block text-sm font-medium text-brown-light mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      id="pt-name"
                      onFocus={() => setFormFocused(true)}
                      onBlur={() => setFormFocused(false)}
                      className="w-full px-4 py-3 bg-cream border border-sage/10 rounded-xl text-brown placeholder:text-brown-light/40 focus:outline-none focus:border-sage/30 focus:ring-2 focus:ring-sage/10 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="pt-email" className="block text-sm font-medium text-brown-light mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        id="pt-email"
                        onFocus={() => setFormFocused(true)}
                        onBlur={() => setFormFocused(false)}
                        className="w-full px-4 py-3 bg-cream border border-sage/10 rounded-xl text-brown placeholder:text-brown-light/40 focus:outline-none focus:border-sage/30 focus:ring-2 focus:ring-sage/10 transition-all"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <label htmlFor="pt-phone" className="block text-sm font-medium text-brown-light mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="pt-phone"
                        onFocus={() => setFormFocused(true)}
                        onBlur={() => setFormFocused(false)}
                        className="w-full px-4 py-3 bg-cream border border-sage/10 rounded-xl text-brown placeholder:text-brown-light/40 focus:outline-none focus:border-sage/30 focus:ring-2 focus:ring-sage/10 transition-all"
                        placeholder="Phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="pt-interest" className="block text-sm font-medium text-brown-light mb-1.5">
                      I'm looking for help with
                    </label>
                    <select
                      id="pt-interest"
                      onFocus={() => setFormFocused(true)}
                      onBlur={() => setFormFocused(false)}
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
                    <label htmlFor="pt-message" className="block text-sm font-medium text-brown-light mb-1.5">
                      Anything you'd like to share <span className="text-brown-light/40">(optional)</span>
                    </label>
                    <textarea
                      id="pt-message"
                      rows={3}
                      onFocus={() => setFormFocused(true)}
                      onBlur={() => setFormFocused(false)}
                      className="w-full px-4 py-3 bg-cream border border-sage/10 rounded-xl text-brown placeholder:text-brown-light/40 focus:outline-none focus:border-sage/30 focus:ring-2 focus:ring-sage/10 transition-all resize-none"
                      placeholder="What's bringing you to counseling?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-sage text-warm-white font-medium rounded-full hover:bg-sage-dark transition-all duration-300 hover:shadow-lg hover:shadow-sage/20 tracking-wide text-base mt-2"
                  >
                    Request Free Consultation
                  </button>

                  <p className="text-xs text-brown-light/50 text-center">
                    Your information is kept strictly confidential.
                  </p>
                </div>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-sage/10" />
                <span className="text-xs text-brown-light/40 uppercase tracking-widest">or</span>
                <div className="flex-1 h-px bg-sage/10" />
              </div>

              {/* Direct contact */}
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+1234567890"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 border border-sage/20 text-sage font-medium rounded-full hover:bg-sage-light/40 transition-all duration-200 text-sm tracking-wide"
                >
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 2H6L7.5 5.5L5.5 7C6.5 9 8 10.5 10 11.5L11.5 9.5L15 11V14C15 14.5523 14.5523 15 14 15C7.37258 15 2 9.62742 2 3C2 2.44772 2.44772 2 3 2Z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Call (123) 456-7890
                </a>
                <a
                  href="mailto:hello@tfcthrive.com"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 border border-sage/20 text-sage font-medium rounded-full hover:bg-sage-light/40 transition-all duration-200 text-sm tracking-wide"
                >
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 4L8 9L14 4" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="1" y="3" width="14" height="10" rx="1.5" strokeLinecap="round" />
                  </svg>
                  Email Directly
                </a>
              </div>
            </div>

            {/* Explore full site link */}
            <button
              onClick={onViewFullSite}
              className="mt-6 w-full text-center text-sm text-brown-light/60 hover:text-sage transition-colors duration-200"
            >
              Want to learn more? Explore the full site &darr;
            </button>
          </div>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="relative z-10 border-t border-sage/[0.06] py-8 px-6">
        <div className="mx-auto max-w-5xl flex items-center justify-between text-xs text-brown-light/40">
          <span>&copy; {new Date().getFullYear()} Thrive Family Counseling</span>
          <span>DuPage County, Illinois</span>
        </div>
      </footer>
    </div>
  )
}
