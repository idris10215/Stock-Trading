import React from 'react'

import Navbar from '../Navbar'
import Footer from '../Footer'
import OpenAccount from '../OpenAccount'

import Hero from './Hero'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'



const HomePage = () => {
  return (
    <>
        <Hero />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
    </>
  )
}

export default HomePage