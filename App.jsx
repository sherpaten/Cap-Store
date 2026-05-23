import { useState } from 'react'
import Navbar  from './components/Navbar.jsx'
import Footer  from './components/Footer.jsx'
import Home    from './pages/Home.jsx'
import Shop    from './pages/Shop.jsx'
import About   from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  const [page, setPage]      = useState('home')
  const [cartCount, setCart] = useState(0)

  const handleAddToCart = () => setCart(c => c + 1)

  const renderPage = () => {
    switch (page) {
      case 'home':    return <Home    onNavigate={setPage} />
      case 'shop':    return <Shop    onAddToCart={handleAddToCart} />
      case 'about':   return <About   />
      case 'contact': return <Contact />
      default:        return <Home    onNavigate={setPage} />
    }
  }

  return (
    <>
      <Navbar currentPage={page} onNavigate={setPage} cartCount={cartCount} />
      {renderPage()}
      <Footer onNavigate={setPage} />
    </>
  )
}