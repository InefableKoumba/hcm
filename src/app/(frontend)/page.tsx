import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Mission from '@/components/Mission'
import Preamble from '@/components/Preamble'
import Testimonials from '@/components/Testimonials'
import Values from '@/components/Values'
import Actions from '@/components/Actions'
import Partners from '@/components/Partners'
import Projects from '@/components/Projects'
import Founders from '@/components/Founders'
import Contact from '@/components/Contact'
import ImageBanner from '@/components/ImageBanner'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Preamble />
      <Mission />
      <Values />
      <ImageBanner />
      <Actions />
      <Projects />
      <Testimonials />
      <Founders />
      <Partners />
      <Contact />
      <Footer />
    </main>
  )
}
