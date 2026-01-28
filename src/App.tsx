import { useEffect } from 'react'
import { Header, Footer } from '@/components/layout'
import { Hero, Projects, About, Skills, Contact } from '@/components/sections'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { initGsap } from '@/hooks/useGsapAnimations'

function App() {
  // Initialize GSAP
  useEffect(() => {
    initGsap()
  }, [])

  // Initialize smooth scroll
  useSmoothScroll({
    duration: 1.2,
    smoothWheel: true,
  })

  // Handle hash navigation on load
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Fixed Header */}
      <Header />

      {/* Main Content */}
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
