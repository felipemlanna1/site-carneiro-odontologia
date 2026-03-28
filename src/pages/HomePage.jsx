import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Carneirinho from '../components/Carneirinho'
import SmileInteraction from '../components/SmileInteraction'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import Differentials from '../components/Differentials'
import CtaBanner from '../components/CtaBanner'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Carneiro Odontologia | Dentista em Florianópolis - SC</title>
        <meta
          name="description"
          content="Clinica odontologica em Florianópolis com equipe de especialistas. Implantes, ortodontia, odontopediatria, Invisalign e mais. Nota 5.0 no Google. Plantao 24h."
        />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Carneirinho />
      <SmileInteraction />
      <Team />
      <Testimonials />
      <Differentials />
      <CtaBanner />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
