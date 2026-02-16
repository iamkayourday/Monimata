import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../sections/Home'
// import Technology from '../sections/Technology'
import Pricing from '../sections/Pricing'
import Features from '../sections/Features'
import Faq from '../sections/Faq'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Home />
        // <Technology />
        <Features />
        <Pricing />
        <Faq />
        <Footer />
    </div>
  )
}

export default LandingPage