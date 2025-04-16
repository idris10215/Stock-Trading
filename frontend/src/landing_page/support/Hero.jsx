import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="p-5"
        style={{ backgroundColor: "#387ed1", color: "white" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-7 mb-5">
              <h4 className="mb-5">Support Portal</h4>
              <h3 className="mb-4">
                Search for an answer or browse help topics to create a ticket
              </h3>
              <input
                type="text"
                style={{ width: "90%", height: "3.5rem", padding: "1rem" }}
                placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
              ></input>
              <br />
              <div className="mt-3 fs-5">
                <a
                  href="https://zrd.sh/signup"
                  style={{ color: "white", marginRight: "2rem" }}
                  className="link-offset-3"
                >
                  Track account opening
                </a>
                <a
                  href="https://zrd.sh/segment-activation"
                  style={{ color: "white", marginRight: "2rem" }}
                  className="link-offset-3"
                >
                  Track segment activation
                </a>
                <a
                  href="https://zrd.sh/segment-activationF"
                  style={{ color: "white", marginRight: "2rem" }}
                  className="link-offset-3"
                >
                  Intraday margins
                </a>
                <br />
                <div className="mt-3">
                  <a
                    href="https://zrd.sh/kite-manual"
                    style={{ color: "white", marginRight: "2rem" }}
                    className="link-offset-3 "
                  >
                    Kite user manual
                  </a>
                </div>
              </div>
            </div>

            <div className="col-5">
              <div
                className=" row mb-5 pb-3 fs-5"
                style={{ marginLeft: "70%" }}
              >
                <a
                  href="https://support.zerodha.com/login?next=https%3A%2F%2Fsupport.zerodha.com%2Ftickets%2F"
                  style={{ color: "white" }}
                  className="link-offset-3"
                >
                  Track tickets
                </a>
              </div>
              <h3>Featured</h3>
              <ol>
                <li className="mt-3">
                  <a
                    href="Trading holiday on account of Dr. Baba Saheb Ambedkar Jayanti on April 14, 2025"
                    style={{ color: "white" }}
                    className="link-offset-3 fs-5"
                  >
                    Change in expiry day of NSE derivative contracts from April
                    04, 2025 [Withheld]
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href="https://zerodha.com/marketintel/bulletin/410695/trading-holiday-on-account-of-dr-baba-saheb-ambedkar-jayanti-on-april-14-2025"
                    style={{ color: "white" }}
                    className="link-offset-3 fs-5"
                  >
                    Trading holiday on account of Dr. Baba Saheb Ambedkar
                    Jayanti on April 14, 2025
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
