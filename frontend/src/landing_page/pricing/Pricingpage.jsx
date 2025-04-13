import React from 'react'


const Pricingpage = () => {
  return (
    <>
        <>
      <div className="container mb-5 p-5  text-center font-color">
        <h1 className="mb-4">Charges</h1>
        <p className="fs-4 text-muted ">
          List of all charges and taxes
        </p>
      </div>

      <div className="container mt-5 p-5 font-color text-center lh-lg ">
        <div className="row">
          <div className="col p-4">
            <img style={{height:"15rem"}} src="assets\pricing-eq2.png" />
            <h2>Free equity delivery</h2>
            <p style={{fontSize:"17px"}}>
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col p-4">
            <img style={{height:"15rem"}} src="assets\pricing-eq20.svg" />
            <h2>Intraday and F&O trades</h2>
            <p style={{fontSize:"17px"}}>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col p-4">
            <img style={{height:"15rem"}} src="assets\pricing-eq2.png" />
            <h2>Free direct MF</h2>
            <p style={{fontSize:"17px"}}>
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </>
    </>
  )
}

export default Pricingpage