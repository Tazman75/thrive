import { useUTMSource, isPsychologyTodayVisitor } from './hooks/useUTMSource'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Approach from './components/Approach'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PTBanner from './components/PTBanner'

function App() {
  const utmParams = useUTMSource()
  const fromPT = isPsychologyTodayVisitor(utmParams)

  return (
    <>
      {fromPT && <PTBanner />}
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
