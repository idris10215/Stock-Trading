import React from 'react'
import Hero from './Hero'
import Universe from './Universe'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const Productpage = () => {
  return (
    <>
        <Hero />
        <LeftSection imageUrl="assets/kite.png" productHeading="Kite"
            productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
            playstore="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
            appstore="https://apps.apple.com/in/app/kite-zerodha/id1449453802" />

        <RightSection productHeading="Console"
            productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
            learnMore="https://zerodha.com/products/console"
            imageUrl="assets/console.png" />

        <LeftSection imageUrl="assets/coin.png" productHeading="Coin"
            productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
            playstore="https://play.google.com/store/apps/details?id=com.zerodha.coin"
            appstore="https://apps.apple.com/in/app/coin-by-zerodha/id1392892554" />

        <RightSection productHeading="Kite Connect API"
            productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
            learnMore="https://zerodha.com/products/api/"
            imageUrl="assets/kiteconnectapi.svg" />

        <LeftSection imageUrl="assets/varsity.png" productHeading="Varsity mobile"
            productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
            playstore="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
            appstore="https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753" />

        <div className='text-center fs-4 mb-5 font-color'>
          <p>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
        </div>

        <Universe />
        
    </>
  )
}

export default Productpage