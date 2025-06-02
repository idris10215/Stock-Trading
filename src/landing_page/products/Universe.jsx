import React from "react";

const Universe = () => {
  return (
    <>
      <div className="container p-5 pb-0 font-color">
        <div className="row text-center">
          <h1 className="mb-4">The Zerodha Universe</h1>
          <p className="fs-5 mb-5">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        <div className="row  text-center">
          <div className="col p-5">
            <img
              style={{ height: "50px", marginBottom: "1rem" }}
              src="assets\zerodhaFundhouse.png"
            ></img>
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col p-5">
            <img
              style={{ height: "50px", marginBottom: "1rem" }}
              src="assets/sensibullLogo.svg"
            ></img>
            <p>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col p-5 ">
            <img
              style={{ height: "50px", marginBottom: "1rem" }}
              src="assets\tijori.svg"
            ></img>
            <p>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>

        <div className="row  text-center">
          <div className="col p-5">
            <img
              style={{ height: "50px", marginBottom: "1rem" }}
              src="assets\streakLogo.png"
            ></img>
            <p>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col p-5">
            <img
              style={{ height: "50px", marginBottom: "1rem" }}
              src="assets\smallcaseLogo.png"
            ></img>
            <p>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col p-5 ">
            <img
              style={{ height: "50px", marginBottom: "1rem" }}
              src="assets\dittoLogo.png"
            ></img>
            <p>
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up for free
            </p>
          </div>
        </div>

        <div className="row text-center">
          <button
            className="btn btn-primary fs-5 mb-5"
            style={{ width: "18%", margin: "0 auto", height: "3rem" }}
          >
            <a href='https://zerodha.com/open-account/' style={{color:"white", textDecoration:"none"}}>Signup Now</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Universe;
