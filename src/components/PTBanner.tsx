import { useState, useEffect } from 'react'

export default function PTBanner() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Delay entrance for polish
    const timer = setTimeout(() => setVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  if (dismissed) return null

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="bg-brown text-warm-white/90">
        <div className="mx-auto max-w-6xl px-6 py-2.5 flex items-center justify-center gap-3 relative">
          {/* PT verified icon */}
          <svg className="w-4 h-4 text-sage flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8Z" />
            <path d="M5.5 8L7 9.5L10.5 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <p className="text-xs tracking-wide">
            <span className="text-warm-white/60">Verified on Psychology Today</span>
            <span className="mx-2 text-warm-white/20">|</span>
            <a href="#contact" className="text-sage hover:text-sage-light transition-colors font-medium">
              Schedule a free consultation
            </a>
          </p>

          {/* Dismiss */}
          <button
            onClick={() => setDismissed(true)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-warm-white/30 hover:text-warm-white/60 transition-colors"
            aria-label="Dismiss"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 2L12 12M12 2L2 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
