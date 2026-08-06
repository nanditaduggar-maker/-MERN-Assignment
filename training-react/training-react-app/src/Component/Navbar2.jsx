import React from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div style={{backgroundColor:"black" , height:"70px"}} className="container-fluid">
        <Link style={{color:"white"}} className="navbar-brand" to="/">
          My Website
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link style={{color:"white"}} className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <Link style={{color:"white"}} className="nav-link" to="/features">
              Features
            </Link>
            <Link style={{color:"white"}} className="nav-link" to="/pricing">
              Pricing
            </Link>
            <div className="d-flex">
              <Link  to="/login" className="btn btn-danger">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar2;