import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer } from './components/footer'
import { AboutUs } from './components/about-us'
import { WhatWeOffer } from './components/what-we-offer'
import { GamesPreview } from './components/games-preview'
import { Hero } from './components/hero'
import { Navbar } from './components/navbar'
import { GamesPage } from './pages/games-page'

function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <GamesPreview />
      <AboutUs />
      <WhatWeOffer />
      <Footer /> {/* //react-router */}
    </div>
  )
}


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamesPage />} />
      </Routes>
    </Router>
  )
}
