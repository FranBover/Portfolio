import './App.css'
import Hero from './components/layout/Hero'
import Navbar from './components/layout/Navbar'
import About from './components/layout/About'
import Tools from './components/layout/Tools'
import Projects from './components/layout/Projects'
import Contact from './components/layout/Contact'
import Footer from './components/layout/Footer'

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Tools />
      <Projects />
      <Contact />
      <Footer/>
    </main>
  )
}

export default App
