import { Header } from './components/Header'
import { AboutMe } from './components/sections/AboutMe'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/Footer'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'

function App() {
  return (
    <div className="app">
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
