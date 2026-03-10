import { useState } from 'react'
import { useUTMSource, isPsychologyTodayVisitor } from './hooks/useUTMSource'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Approach from './components/Approach'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PTWelcome from './components/PTWelcome'

function App() {
  const utmParams = useUTMSource()
  const [showFullSite, setShowFullSite] = useState(false)

  if (isPsychologyTodayVisitor(utmParams) && !showFullSite) {
    return <PTWelcome onViewFullSite={() => setShowFullSite(true)} />
  }

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
