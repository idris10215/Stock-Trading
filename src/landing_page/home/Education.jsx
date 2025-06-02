import React from 'react'

const Education = () => {
  return (
    <div className="container mt-5 font-color mb-5">
      <div className="row">

        <div className="col p-5 pt-0 mt-5">
          <img src='assets/education.svg'></img>
        </div>

        <div className="col p-5 pt-0 mt-5">
          <h1 className='mb-5'>Free and open market education</h1>
          <p className='mb-3 fs-5 lg-lh'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>

          <a className='link-underline link-underline-opacity-0 fs-5 d-inline-block mb-5' href=''>Varsity <i class="fa-solid fa-arrow-right-long"></i> </a>

          <p className='mb-3 fs-5 lg-lh'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a className='link-underline link-underline-opacity-0 fs-5' href=''>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i> </a>
        </div>
      </div>
    </div>
  )
}

export default Education