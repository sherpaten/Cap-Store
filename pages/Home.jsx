import '../styles/Home.css'

const FEATURES = [
  { icon: '🚚', title: 'Free Shipping', desc: 'On all orders over NRP 1000. Fast and reliable delivery to your door.' },
  { icon: '🎨', title: 'Custom Designs', desc: 'Personalize your cap with our in-store design service.' },
  { icon: '♻️', title: 'Quality Guarantee', desc: '100% satisfaction or your money back. No questions asked.' },
  { icon: '🏆', title: 'Premium Brands', desc: 'Only the best brands curated by our in-house style team.' },
]

const FEATURED_PRODUCTS = [
  { emoji: '🧢', name: 'Classic Snapback', category: 'Snapback', price: '$34.99', badge: 'hot', badgeLabel: '🔥 Hot' },
  { emoji: '👒', name: 'Vintage Dad Hat', category: 'Dad Hat', price: '$27.99', badge: 'new', badgeLabel: '✨ New' },
  { emoji: '🎩', name: 'Urban Fitted', category: 'Fitted', price: '$42.99', badge: 'limited', badgeLabel: '⚡ Limited' },
]

export default function Home({ onNavigate }) {
  const go = (page) => {
    onNavigate(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main>
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__grid" />
        <div className="container">
          <div className="hero__content">
            <p className="hero__eyebrow fade-up fade-up-1">New Collection 2025</p>
            <h1 className="hero__title fade-up fade-up-2">
              Wear Your<em>Game.</em>
            </h1>
            <p className="hero__desc fade-up fade-up-3">
              Premium caps for every head, every style, every moment.
              From the streets to the stadium — The Cap Store has you covered.
            </p>
            <div className="hero__actions fade-up fade-up-4">
              <button className="btn btn-primary" onClick={() => go('shop')}>Shop Now →</button>
              <button className="btn btn-outline" onClick={() => go('about')}>Our Story</button>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__cap-display">
              <div className="hero__cap-circle">
                <div className="hero__cap-emoji">🧢</div>
              </div>
              <div className="hero__cap-badge">New Drop ✦</div>
              <div className="hero__stats">
                <strong>500+</strong>
                <span>Cap Styles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-strip">
        <div className="marquee-inner">
          {[...Array(2)].map((_, i) => (
            ['Free Shipping $50+', 'New Arrivals Weekly', 'Custom Designs', 'Premium Quality', '500+ Styles', 'Worldwide Shipping'].map((t, j) => (
              <span key={`${i}-${j}`} className="marquee-item">{t}</span>
            ))
          ))}
        </div>
      </div>

      <section className="features">
        <div className="container">
          <div className="features__grid">
            {FEATURES.map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-card__icon">{f.icon}</div>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="section-label">Hand-Picked</p>
              <h2 className="section-title">Featured<br />Drops</h2>
            </div>
            <button className="btn btn-outline" onClick={() => go('shop')}>View All →</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {FEATURED_PRODUCTS.map((p, i) => (
              <div className="product-card" key={i} onClick={() => go('shop')}>
                <div className="product-card__img">
                  <span className={`product-card__badge badge-${p.badge}`}>{p.badgeLabel}</span>
                  <span style={{ fontSize: '7rem' }}>{p.emoji}</span>
                </div>
                <div className="product-card__info">
                  <p className="product-card__cat">{p.category}</p>
                  <h3 className="product-card__name">{p.name}</h3>
                  <div className="product-card__footer">
                    <span className="product-card__price">{p.price}</span>
                    <button className="add-to-cart" onClick={e => e.stopPropagation()}>+ Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--clr-border)', background: 'var(--clr-accent)', padding: '72px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16, opacity: 0.8 }}>Limited Time</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.95, marginBottom: 24 }}>
            Get 20% Off<br />Your First Order
          </h2>
          <p style={{ opacity: 0.85, marginBottom: 36, fontSize: '1.05rem' }}>Use code <strong>NEWCAP20</strong> at checkout</p>
          <button className="btn" style={{ background: '#fff', color: 'var(--clr-accent)', padding: '16px 40px' }} onClick={() => go('shop')}>
            Claim Offer →
          </button>
        </div>
      </section>
    </main>
  )
}