export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grain-overlay">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large organic shape top right */}
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-[60%_40%_50%_50%/50%_60%_40%_50%] bg-sage/[0.06]"
          style={{ animation: 'gentle-float 8s ease-in-out infinite' }}
        />
        {/* Small circle accent */}
        <div
          className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-terracotta/30"
          style={{ animation: 'gentle-float 6s ease-in-out infinite 1s' }}
        />
        {/* Subtle line accent */}
        <div className="absolute bottom-1/4 left-12 w-px h-32 bg-gradient-to-b from-transparent via-sage/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl">
          {/* Small tagline */}
          <p className="animate-fade-up text-sm md:text-base font-medium tracking-[0.2em] uppercase text-sage mb-6">
            Licensed Clinical Professional Counselor, MSEd
          </p>

          {/* Main heading */}
          <h1 className="animate-fade-up delay-100 font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] text-brown mb-8">
            A safe place to{' '}
            <span className="italic text-sage">grow,</span>
            <br />
            heal, and{' '}
            <span className="italic text-sage">thrive.</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up delay-300 text-lg md:text-xl text-brown-light leading-relaxed max-w-xl mb-10">
            Compassionate counseling for children, adolescents, adults, and families.
            Nearly two decades of experience navigating life's challenges together.
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-sage text-warm-white font-medium rounded-full hover:bg-sage-dark transition-all duration-300 hover:shadow-lg hover:shadow-sage/20 text-base tracking-wide"
            >
              Schedule a Consultation
              <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8H13M9 4L13 8L9 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 border border-sage/30 text-sage font-medium rounded-full hover:bg-sage-light/50 transition-all duration-300 text-base tracking-wide"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in delay-700 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs tracking-[0.15em] uppercase text-brown-light/60">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-brown-light/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}
