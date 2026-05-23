import { useState, useEffect } from 'react'
import '../styles/Navbar.css'

const NAV_LINKS = [
  { label: 'Home',    href: 'home'    },
  { label: 'Shop',    href: 'shop'    },
  { label: 'About',   href: 'about'   },
  { label: 'Contact', href: 'contact' },
]

export default function Navbar({ currentPage, onNavigate, cartCount }) {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (page) => {
    onNavigate(page)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          {/* Logo */}
          <button className="navbar__logo" onClick={() => go('home')}>
            <svg className="logo-icon" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 22 Q4 10 18 10 Q32 10 32 22 L30 22 Q28 14 18 14 Q8 14 6 22Z"/>
              <rect x="3" y="22" width="30" height="4" rx="2"/>
              <rect x="20" y="26" width="12" height="3" rx="1.5"/>
            </svg>
            The <span>Cap</span> Store
          </button>

          {/* Desktop Links */}
          <ul className="navbar__links">
            {NAV_LINKS.map(l => (
              <li key={l.href}>
                <a
                  href="#"
                  className={currentPage === l.href ? 'active' : ''}
                  onClick={e => { e.preventDefault(); go(l.href) }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="navbar__actions">
            <button className="navbar__cart-btn" title="Cart">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
            <button
              className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`navbar__mobile${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(l => (
          <a
            key={l.href}
            href="#"
            className={currentPage === l.href ? 'active' : ''}
            onClick={e => { e.preventDefault(); go(l.href) }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  )
}
