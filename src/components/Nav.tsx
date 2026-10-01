import Book from './Book'

export default function Nav() {
  return (
    <header className="tl-header">
      <div className="wrap tl-header-inner">
        <a className="tl-logo" href="#top">
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M16 29C16 29 5 22 5 12.5C5 7 9.5 3 16 3C22.5 3 27 7 27 12.5C27 22 16 29 16 29Z" fill="#5b7b6a" opacity=".16" />
            <path d="M16 27C16 27 7.5 21 7.5 13C7.5 8.3 11.3 5 16 5C20.7 5 24.5 8.3 24.5 13C24.5 21 16 27 16 27Z" fill="#5b7b6a" />
            <path d="M16 9V24M16 14L11.5 11M16 18.5L20.5 15.5" stroke="#fffcf8" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <span>
            <span className="name">Thrive Family Counseling</span>
            <span className="tag">Simone Shepardson, LCPC</span>
          </span>
        </a>
        <Book placement="nav" className="tl-header-cta">Book a Session Online</Book>
      </div>
    </header>
  )
}
