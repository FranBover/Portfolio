import Hero from '../components/layout/Hero'
import Navbar from '../components/layout/Navbar'
import About from '../components/layout/About'
import Tools from '../components/layout/Tools'
import Vinto from '../components/layout/Vinto'
import Projects from '../components/layout/Projects'
import Contact from '../components/layout/Contact'
import Footer from '../components/layout/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Tools />
      <Vinto />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
