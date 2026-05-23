import { useState } from 'react'
import '../styles/Shop.css'

const ALL_PRODUCTS = [
  { id: 1, emoji: '🧢', name: 'Classic Snapback', category: 'Snapback', price: 34.99, badge: 'hot',  badgeLabel: '🔥 Hot'      },
  { id: 2, emoji: '👒', name: 'Vintage Dad Hat',  category: 'Dad Hat',  price: 27.99, badge: 'new',  badgeLabel: '✨ New'      },
  { id: 3, emoji: '🎩', name: 'Urban Fitted',     category: 'Fitted',   price: 42.99, badge: 'limited', badgeLabel: '⚡ Limited' },
  { id: 4, emoji: '🧢', name: 'Trucker Pro',      category: 'Trucker',  price: 31.99, badge: 'new',  badgeLabel: '✨ New'      },
  { id: 5, emoji: '👒', name: 'Sport Flex',        category: 'Fitted',   price: 38.99, badge: null,   badgeLabel: null          },
  { id: 6, emoji: '🎩', name: 'Street Snapback',  category: 'Snapback', price: 29.99, badge: 'sale', badgeLabel: '💚 Sale'    },
  { id: 7, emoji: '🧢', name: 'Retro Dad Cap',    category: 'Dad Hat',  price: 24.99, badge: null,   badgeLabel: null          },
  { id: 8, emoji: '👒', name: 'Trail Trucker',    category: 'Trucker',  price: 33.99, badge: 'hot',  badgeLabel: '🔥 Hot'      },
  { id: 9, emoji: '🎩', name: 'Athlete Fitted',   category: 'Fitted',   price: 44.99, badge: 'limited', badgeLabel: '⚡ Limited' },
]

const FILTERS = ['All', 'Snapback', 'Fitted', 'Dad Hat', 'Trucker']

export default function Shop({ onAddToCart }) {
  const [active, setActive] = useState('All')
  const [added, setAdded]   = useState({})

  const products = active === 'All' ? ALL_PRODUCTS : ALL_PRODUCTS.filter(p => p.category === active)

  const handleAdd = (e, product) => {
    e.stopPropagation()
    onAddToCart(product)
    setAdded(prev => ({ ...prev, [product.id]: true }))
    setTimeout(() => setAdded(prev => ({ ...prev, [product.id]: false })), 1400)
  }

  return (
    <main>
      <section className="shop-hero">
        <div className="container">
          <h1 className="shop-hero__title">The <span>Drop.</span></h1>
          <p className="shop-hero__sub">{ALL_PRODUCTS.length} styles. One obsession.</p>
        </div>
      </section>

      <div className="container">
        {/* Filters */}
        <div className="shop-filters">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn${active === f ? ' active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="products-grid">
          {products.map(p => (
            <div className="product-card" key={p.id}>
              <div className="product-card__img">
                {p.badge && (
                  <span className={`product-card__badge badge-${p.badge}`}>{p.badgeLabel}</span>
                )}
                <button className="product-card__wish" title="Wishlist">♡</button>
                <span style={{ fontSize: '6.5rem' }}>{p.emoji}</span>
              </div>
              <div className="product-card__info">
                <p className="product-card__cat">{p.category}</p>
                <h3 className="product-card__name">{p.name}</h3>
                <div className="product-card__footer">
                  <span className="product-card__price">${p.price.toFixed(2)}</span>
                  <button
                    className="add-to-cart"
                    onClick={e => handleAdd(e, p)}
                    style={added[p.id] ? { background: '#22c55e' } : {}}
                  >
                    {added[p.id] ? '✓ Added' : '+ Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
