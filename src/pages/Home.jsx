import React from 'react'
import About from '../components/About'
import Academics from '../components/Academics'
import Admissions from '../components/Admissions'
import CoCurricular from '../components/CoCurricular'
import NewsEvents from '../components/NewsEvent'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Location from '../components/Location'
import Values from '../components/Values'


function Home() {
  return (
    <div>
      <About />
      <Values />
      <Academics />
      <Admissions />
      <CoCurricular />
      <NewsEvents />
      <ContactUs />
      <Location />
      <Footer />
    </div>
  )
}

export default Home
