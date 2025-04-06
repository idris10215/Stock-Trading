import React from 'react'

const Stats = () => {
  return (
    
    <>
      <div className="container mt-5 font-color">
      <div className="row">
        <div className="col-lg-5 col-md-12 col-sm-12 col-5 p-5 pb-3">
          <h1 className='mb-5'>Trust with confidence</h1>

          <div className='mb-5 lh-lg'>
            <h3>Customer-first always</h3>
            <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
          </div>

          <div className='mb-5 lh-lg'>
            <h3>No spam or gimmicks</h3>
            <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
          </div>

          <div className='mb-5 lh-lg'>
            <h3>The Zerodha universe</h3>
            <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          </div>

          <div className='mb-5 lh-lg '>
            <h3>Do better with money</h3>
            <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
          </div>

        </div>
        <div className="col-lg-7 col-md-12 col-sm-12 col-7 mt-5 pt-3">
          <img src="assets\ecosystem.png" style={{width:"90%"}} />
          <p className='text-center fs-5 '>
            <a className='link-underline link-underline-opacity-0' href=''>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a className='link-underline link-underline-opacity-0' href=''>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i> </a>
          </p>
        </div>
      </div>
    </div>

    <div className="container text-center pt-0 p-5 mb-5">
      <img src='assets\pressLogos.png' style={{width:"70%"}} ></img>
    </div>
    </>
  )
}

export default Stats