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
    AOS.init({
      duration: 1200,
    });
  }
  render() {
    return (
      <div
        className="landing-app"
        data-spy="scroll"
        data-target="#navbarNav"
        data-offset="0"
      >
        <nav className="navbar navbar-expand-lg navbar-light bg-inherit">
          <div className="container">
            <a className="navbar-brand" href="#home">
              SMK Wikrama
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
              <ul className="navbar-nav mx-auto"></ul>
              <button className="btn uwuBtn">Daftar Sekarang</button>
            </div>
          </div>
        </nav>

        {/* HERO SECTION */}
        <section className="hero">
          <div className="container bg-inherit">
            <div className="row mt-5">
              <div className="col-md-7">
                <div className="icon mt-1" data-aos="zoom-in">
                  <img src={bg} alt="icon" />
                </div>
              </div>
              <div className="col-md-5">
                <div className="greeting mx-auto mt-5" data-aos="fade-left">
                  <p className="greeting-header text-center">Selamat Datang</p>
                  <h1 className="greeting-main">
                    PPDB SMK <i>Wikrama</i>
                  </h1>
                  <p>Ilmu yang amaliah, Amal yang ilmiah, Akhlakul karimah</p>
                  <button className="btn btn-daftar mt-4">
                    <i className="fas fa-sign-in-alt"></i> Daftar Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END OF HERO */}

        <section className="tentang-kami section" id="tentang-kami">
          <h2 className="section-title">Tentang Kami</h2>
        </section>
      </div>
    );
  }
}
export default LandingPage;
