import React from 'react'
import About from '../components/About'
import Academics from '../components/Academics'
import Admissions from '../components/Admissions'
import CoCurricular from '../components/CoCurricular'
import NewsEvents from '../components/NewsEvent'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'


function Home() {
  return (
    <div>
      <About />
      <Academics />
      <Admissions />
      <CoCurricular />
      <NewsEvents />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home
