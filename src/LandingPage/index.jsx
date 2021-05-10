import React, { Component } from "react";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

// FONT-AWESOME
import "font-awesome/css/font-awesome.min.css";

// STYLE
import "./style.scss";

// COMP
import bg from "../img/bgLanding.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

class LandingPage extends Component {
  componentDidMount() {
    AOS.init();
  }
  render() {
    return (
      <div className="landing-app">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
              <button className="btn uwuBtn">Daftar Sekarang</button>
            </div>
          </div>
        </nav>

        <div className="hero">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="icon">
                  <img src={bg} alt="icon" />
                </div>
              </div>
              <div className="col-md-5">
                <div
                  className="greeting mx-auto mt-5"
                  data-aos="fade-left"
                >
                  <p className="greeting-header text-center">Selamat Datang</p>
                  <h1 className="greeting-main">
                    PPDB SMK <i>Wikrama</i>
                  </h1>
                  <p>Ilmu yang amaliah, Amal yang ilmiah, Akhlakul karimah</p>
                  <button className="btn btn-daftar mt-5">
                    Daftar Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="wrap" />
      </div>
    );
  }
}
export default LandingPage;
