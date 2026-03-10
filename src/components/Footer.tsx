export default function Footer() {
  return (
    <footer className="bg-brown py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" className="text-sage">
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
            <span className="font-serif text-lg font-semibold text-warm-white/90">
              Thrive Family Counseling
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-warm-white/40">
            <a href="#about" className="hover:text-warm-white/70 transition-colors">About</a>
            <a href="#services" className="hover:text-warm-white/70 transition-colors">Services</a>
            <a href="#approach" className="hover:text-warm-white/70 transition-colors">Approach</a>
            <a href="#contact" className="hover:text-warm-white/70 transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-warm-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-warm-white/30">
            &copy; {new Date().getFullYear()} Thrive Family Counseling. All rights reserved.
          </p>
          <p className="text-xs text-warm-white/20">
            DuPage County, Illinois
          </p>
        </div>
      </div>
    </footer>
  )
}
