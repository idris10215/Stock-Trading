import React from 'react'

const Hero = () => {
  return (
    <div className="container p-5 mt-5 mb-4 font-color">
    <div className="row text-center">
      <img src="assets/homeHero.png" alt='HeroImage' className='mb-5' />
      <h1 style={{fontSize:"3.5rem"}} className="mt-5 mb-4">Invest in everything</h1>
      <p className="mb-5 fs-4">
      Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
      </p>
      <button
        className="btn btn-primary fs-5 mb-5"
        style={{ width: "18%", margin: "0 auto", height: "3rem" }}
      >
        <a href='https://zerodha.com/open-account/' style={{color:"white", textDecoration:"none"}}>Signup Now</a>
      </button>
    </div>
  </div>
  )
}

export default Hero
