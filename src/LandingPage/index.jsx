import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        id="home"
        data-spy="scroll"
        data-target="#navbarNav .up-toggle"
        data-offset="0"
      >
        <nav className="navbar navbar-expand-lg bg-light navbar-light fixed-top">
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
              <ul className="navbar-nav mx-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#tentang-kami">
                    Tentang Kami
                  </a>
                </li>
              </ul>
              <Link to="/daftar" className="btn uwuBtn">
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </nav>

        {/* HERO SECTION */}
        <section className="hero">
          <div className="container">
            <div
              class="alert alert-info alert-dismissible"
              data-aos="fade-left"
              data-aos-delay="2000"
            >
              <a href="#" class="close" data-dismiss="alert" aria-label="close">
                &times;
              </a>
              <strong>Selamat Datang!</strong> Daftar PPDB secara Online{" "}
              <Link to="/daftar">Di sini</Link>
            </div>
            <div className="row mt-5">
              <div className="col-md-7">
                <div className="icon mt-1" data-aos="zoom-in">
                  <img src={bg} alt="icon" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-5">
                <div className="greeting mx-auto mt-5" data-aos="fade-left">
                  <p className="greeting-header text-center">Selamat Datang</p>
                  <h1 className="greeting-main">
                    PPDB SMK <i>Wikrama</i>
                  </h1>
                  <p>Ilmu yang amaliah, Amal yang ilmiah, Akhlakul karimah</p>
                  <Link to="/daftar" className="btn btn-daftar mt-5 btn-lg">
                    <i className="fas fa-sign-in-alt"></i> Daftar Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END OF HERO */}

        <section className="section mt-5" id="tentang-kami" data-aos="fade-up">
          <div className="container mt-5">
            <div className="section-title mt-5">
              <h3 className="mt-5">Tentang Kami</h3>
            </div>
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-6 mt-2" data-aos="fade-right">
                  <h4 className="text-center">Sekolah Berprestasi</h4>
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/_V8ZWxAcGY4"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div className="col-md-6 mt-2" data-aos="fade-left">
                  <h4 className="text-center">Sekolah Berkarakter</h4>
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/BeIHXmayzIA"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div className="col-md-6 mt-2 mx-auto" data-aos="fade-up">
                  <h4 className="text-center">
                    Lulusan Berkualitas dan Siap Bekerjar
                  </h4>
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/BeIHXmayzIA"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="site-footer" data-aos="fade-in">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>SMK Wikrama Kota Bogor</h6>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>Tentang Kami</h6>
                <ul className="footer-links">
                  <li>
                    <a
                      href="https://goo.gl/maps/9uXHxzjRP2938zDQ6"
                      target="_blank"
                    >
                      Jl. Raya Wangun Kel. Sindangsari Kec. Bogor Timur Kota
                      Bogor 16146
                    </a>
                  </li>
                  <li>
                    <p>Telp./Fax : 0251 8242411</p>
                  </li>
                  <li>
                    <p>
                      Website :{" "}
                      <a href="http://smkwikrama.sch.id/" target="_blank">
                        http://smkwikrama.sch.id/
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>Email : prohumasi@smkwikrama.sch.id</p>
                  </li>
                </ul>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>Ikuti Kami</h6>
                <ul className="footer-links">
                  <li>
                    <a href="https://facebook.com/smkwikrama" target="_blank">
                      <i className="fa fa-facebook"></i> Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/smkwikrama" target="_blank">
                      <i className="fa fa-instagram"></i> Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCyhEUzlXbXet57qFnDfdWuw"
                      target="_blank"
                    >
                      <i className="fa fa-youtube"></i> YouTube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">
                  Copyright &copy; 2021 All Rights Reserved
                </p>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  <li>
                    <a
                      className="facebook"
                      href="https://facebook.com/smkwikrama"
                      target="_blank"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="instagram"
                      href="https://instagram.com/smkwikrama"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="youtube"
                      href="https://www.youtube.com/channel/UCyhEUzlXbXet57qFnDfdWuw"
                      target="_blank"
                    >
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        {/* GO TO TOP BTN */}
        <a href="#home" className="btn btn-primary up-toggle">
          <i className="fa fa-arrow-up"></i>
        </a>
      </div>
    );
  }
}
export default LandingPage;
