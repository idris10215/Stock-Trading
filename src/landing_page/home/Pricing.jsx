import React from 'react'

const Pricing = () => {
  return (
    <div className="container mt-5 font-color p-5">
      <div className="row">

        <div className="col-lg-5 col-md-12 col-sm-12 col-5 ">
          <h1 className='mb-3 lh-lg'>Unbeatable pricing</h1>
          <p className='fs-5'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a className='link-underline link-underline-opacity-0 fs-5' href=''>See Pricing <i class="fa-solid fa-arrow-right-long"></i> </a>
        </div>

        <div className="col-lg-7 col-md-12 col-sm-12 col-7 d-flex justify-content-around align-items-center flex-wrap mb-5">
          <div className="d-flex align-items-center ">
            <img src='assets/pricing-eq2.png' style={{height:"5rem"}}></img>
            <p className='pricing-font'>Free account<br/>opening</p>
          </div>
          <div className="d-flex align-items-center ">
            <img src='assets/pricing-eq2.png' style={{height:"5rem"}}></img>
            <p className='pricing-font'>Free equity delivery<br/>and direct mutual funds</p>
          </div>
          <div className="d-flex align-items-center ">
            <img src='assets/pricing-eq20.svg' style={{height:"5rem"}}></img>
            <p className='pricing-font'>Intraday and<br/>F&amp;O</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing