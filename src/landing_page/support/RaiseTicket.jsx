import React from "react";

const RaiseTicket = () => {
  return (
    <>
      <div className="container p-5  mt-4 ">
        <h3 className="text-muted mb-5 font-color">
          To create a ticket, select a relevant topic
        </h3>

        <div className="row mb-5 ">
          <div className="col">
            <a
              href="https://support.zerodha.com/category/account-opening"
              className="d-block mb-4 "
              style={{ textDecoration: "none", fontSize: "1.5rem" }}
            >
              Account Opening
            </a>
            <p>Resident individual</p>
            <p>Minor</p>
            <p>Non Resident Indian (NRI)</p>
            <p>Company, Partnership, HUF and LLP</p>
            <p>Glossary</p>
          </div>
          <div className="col">
            <a
              href="https://support.zerodha.com/category/your-zerodha-account"
              className="d-block mb-4 "
              style={{ textDecoration: "none", fontSize: "1.5rem" }}
            >
              Your Zerodha Account
            </a>
            <p>Your Profile</p>
            <p>Account modification</p>
            <p>Client Master Report (CMR) and Depository Participant (DP)</p>
            <p>Nomination</p>
            <p>Transfer and conversion of securities</p>
          </div>
          <div className="col">
            <a
              href="https://support.zerodha.com/category/trading-and-markets"
              className="d-block mb-4 "
              style={{ textDecoration: "none", fontSize: "1.5rem" }}
            >
              Kite
            </a>
            <p>IPO</p>
            <p>Trading FAQs</p>
            <p>Margin Trading Facility (MTF) and Margins</p>
            <p>Charts and orders</p>
            <p>Alerts and Nudges</p>
            <p>General</p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <a
              href="https://support.zerodha.com/category/funds"
              className="d-block mb-4 "
              style={{ textDecoration: "none", fontSize: "1.5rem" }}
            >
              Funds
            </a>
            <p>Add money</p>
            <p>Withdraw money</p>
            <p>Add bank accounts</p>
            <p>eMandates</p>
          </div>
          <div className="col">
            <a
              href="https://support.zerodha.com/category/console"
              className="d-block mb-4 "
              style={{ textDecoration: "none", fontSize: "1.5rem" }}
            >
              Console
            </a>
            <p>Portfolio</p>
            <p>Corporate actions</p>
            <p>Funds statement</p>
            <p>Reports</p>
            <p>Profile</p>
            <p>Segments</p>
          </div>
          <div className="col">
            <a
              href="https://support.zerodha.com/category/mutual-funds"
              className="d-block mb-4 "
              style={{ textDecoration: "none", fontSize: "1.5rem" }}
            >
              Coin
            </a>
            <p>Understanding mutual funds and Coin</p>
            <p>Coin app</p>
            <p>Coin web</p>
            <p>Transactions and reports</p>
            <p>National Pension Scheme (NPS)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RaiseTicket;
