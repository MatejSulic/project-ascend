import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Divider from '@/components/Divider'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Divider />
        <WhyUs />
        <HowItWorks />
        <Services />
       
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
