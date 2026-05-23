import '../styles/Footer.css'

export default function Footer({ onNavigate }) {
  const go = (page) => {
    onNavigate(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">The <span>Cap</span> Store</div>
            <p className="footer__tagline">
              Premium caps for every style. From street to stadium — we've got your head covered.
            </p>
            <div className="footer__socials">
              {['📘','📸','🎵','▶️'].map((icon, i) => (
                <a key={i} href="#" className="social-btn" title="Social">{icon}</a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <p className="footer__col-title">Shop</p>
            <ul className="footer__links">
              {['All Caps','Snapbacks','Fitted','Dad Hats','Trucker Hats','New Arrivals'].map(l => (
                <li key={l}><a href="#" onClick={e => { e.preventDefault(); go('shop') }}>{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="footer__col-title">Company</p>
            <ul className="footer__links">
              {[['About Us','about'],['Contact','contact'],['Careers','contact'],['Press','contact']].map(([label, page]) => (
                <li key={label}><a href="#" onClick={e => { e.preventDefault(); go(page) }}>{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <p className="footer__col-title">Help</p>
            <ul className="footer__links">
              {['Sizing Guide','Shipping Info','Returns','Track Order','FAQ'].map(l => (
                <li key={l}><a href="#" onClick={e => e.preventDefault()}>{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © 2025 The <span>Cap</span> Store. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
