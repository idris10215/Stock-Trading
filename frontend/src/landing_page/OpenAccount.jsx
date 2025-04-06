import React from "react";

const OpenAccount = () => {
  return (
    <div className="container p-5 mt-5 mb-4 font-color">
      <div className="row text-center">
        <h1 className="mt-5 mb-4"> Open a Zerodha account</h1>
        <p className="mb-5 fs-5">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        <button
          className="btn btn-primary fs-5 mb-5"
          style={{ width: "18%", margin: "0 auto", height: "3rem" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
};

export default OpenAccount;
