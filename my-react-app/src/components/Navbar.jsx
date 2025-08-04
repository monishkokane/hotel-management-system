import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand royal-logo" to="/">
            <img src="public\logo7.png" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 fs-5">
              <li className="nav-item font-color">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item font-color">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item font-color">
                <Link
                  className="nav-link"
                  to="/rooms">
                  Rooms
                </Link>
              
              </li>
             
            </ul>
        
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
