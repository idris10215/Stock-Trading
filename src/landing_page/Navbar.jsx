import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container ">
        <header className="d-flex flex-wrap justify-content-center pt-3 mb-0 ">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <img src="assets/logo.svg" style={{width:"25%"}}></img>
          </Link>

          <form>
            <ul className="nav nav-pills ">
              <li className="nav-item">
                <Link to="/" className="nav-link fs-5 font-color">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link fs-5 font-color">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Products" className="nav-link fs-5 font-color">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Pricing" className="nav-link fs-5 font-color">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Support" className="nav-link fs-5 font-color">
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </header>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
