import Head from 'next/head'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/home/Hero'
import Projects from '../components/home/Projects'
import Services from '../components/home/Services'
import ContactUs from '../components/home/ContactUs'
import Team from '../components/home/Team'
import Footer from '../components/layout/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TopCrew</title>
        <meta name="description" content="TopCrew Agency Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <ContactUs />
      <Team />
      <Footer />
    </div>
  )
}
