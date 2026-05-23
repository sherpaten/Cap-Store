import '../styles/Pages.css'

const VALUES = [
  { icon: '🎯', title: 'Authenticity',  desc: 'Every cap we stock is 100% genuine. No replicas, no compromise — only the real deal.' },
  { icon: '🔥', title: 'Passion',       desc: 'We live and breathe cap culture. Our team sources only what we would wear ourselves.' },
  { icon: '🌍', title: 'Community',     desc: 'Born from the streets, built for everyone. We celebrate the culture behind the cap.' },
  { icon: '⚡', title: 'Innovation',    desc: 'Always ahead of the curve with new styles, collabs, and custom design options.' },
]

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <div>
            <p className="about-hero__label">Our Story</p>
            <h1 className="about-hero__title">
              More Than<br />A <em>Cap.</em>
            </h1>
            <p className="about-hero__text">
              The Cap Store was born from a simple idea: everyone deserves a cap that fits their personality.
              What started as a small booth at the local market has grown into the city's go-to destination
              for premium headwear.
            </p>
            <p className="about-hero__text">
              We believe a great cap isn't just an accessory — it's a statement. Whether you're hitting the
              gym, the streets, or the stadium, we've got the perfect fit for your lifestyle.
            </p>
          </div>
          <div className="about-visual">
            🧢
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="container">
        <div className="about-stats">
          {[
            { num: '500+', label: 'Cap Styles' },
            { num: '12K+', label: 'Happy Customers' },
            { num: '5★',   label: 'Average Rating' },
          ].map((s, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-item__num">{s.num}</div>
              <div className="stat-item__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <section className="values">
        <div className="container">
          <p className="section-label">What We Stand For</p>
          <h2 className="section-title">Our Values</h2>
          <div className="values__grid">
            {VALUES.map((v, i) => (
              <div className="value-card" key={i}>
                <div className="value-card__icon">{v.icon}</div>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
