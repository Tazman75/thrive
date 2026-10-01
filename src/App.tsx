import { useUTMSource, isPsychologyTodayVisitor } from './hooks/useUTMSource'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Who from './components/Who'
import How from './components/How'
import Fees from './components/Fees'
import Final from './components/Final'
import Footer from './components/Footer'
import PTBanner from './components/PTBanner'

function App() {
  const utmParams = useUTMSource()
  const fromPT = isPsychologyTodayVisitor(utmParams)

  return (
    <div className="tl" id="top">
      {fromPT && <PTBanner />}
      <Nav />
      <main>
        <Hero />
        <About />
        <Who />
        <How />
        <Fees />
        <Final />
      </main>
      <Footer />
    </div>
  )
}

export default App
