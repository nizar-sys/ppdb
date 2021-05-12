// react comp
import React, { Component, Fragment } from "react";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

// FONT-AWESOME
import "font-awesome/css/font-awesome.min.css";

// STYLES
import "./styles.scss";

// COMP
import icon from "../../img/wkIcon.png";
import $ from "jquery";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

class Daftar extends Component {
  componentDidMount() {
    $(document).ready(function () {
      let current_fs, next_fs, previous_fs; //fieldsets
      let opacity;

      $(".next").click(function () {
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li")
          .eq($("fieldset").index(next_fs))
          .addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate(
          { opacity: 0 },
          {
            step: function (now) {
              // for making fielset appear animation
              opacity = 1 - now;

              current_fs.css({
                display: "none",
                position: "relative",
              });
              next_fs.css({ opacity: opacity });
            },
            duration: 600,
          }
        );
      });

      $(".previous").click(function () {
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li")
          .eq($("fieldset").index(current_fs))
          .removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate(
          { opacity: 0 },
          {
            step: function (now) {
              // for making fielset appear animation
              opacity = 1 - now;

              current_fs.css({
                display: "none",
                position: "relative",
              });
              previous_fs.css({ opacity: opacity });
            },
            duration: 600,
          }
        );
      });

      $(".submit").click(function () {
        return false;
      });
    });
  }
  render() {
    const year = new Date().getFullYear();
    return (
      <Fragment>
        <div className="container-fluid" id="grad1">
          <div className="row justify-content-center mt-0">
            <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
              <div className="header-content d-flex">
                <img
                  src={icon}
                  className="float-left img-thumbnail mt-4 mx-4"
                />
                <div className="text-header mt-5 mb-4 mx-4 text-white">
                  <h4>Form Pendaftaran</h4>
                  <h3>PPDB SMK Wikrama {year}</h3>
                  <p className="text-danger">
                    * isi data dengan format yang sebenar-benar nya
                  </p>
                </div>
              </div>
              <div className="card px-0 pt-4 pb-0 mb-3">
                <div className="row">
                  <div className="col-md-12 mx-0">
                    <form id="msform">
                      <ul id="progressbar">
                        <li className="active" id="personal">
                          <strong>Data Siswa</strong>
                        </li>
                        <li id="personal">
                          <strong>Data Orang Tua Siswa</strong>
                        </li>
                        <li id="personal">
                          <strong>Minat Bidang & Program</strong>
                        </li>
                        <li id="confirm">
                          <strong>Finish</strong>
                        </li>
                      </ul>
                      <fieldset>
                        <div className="form-card">
                          <h2 className="fs-title">Data Siswa</h2>{" "}
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Id"
                          />
                        </div>{" "}
                        <input
                          type="button"
                          name="next"
                          className="next action-button"
                          value="Next >"
                        />
                        <br />
                        <Link to="/">Kembali</Link>
                      </fieldset>
                      <fieldset>
                        <div className="form-card">
                          <h2 className="fs-title">Data Orang Tua Siswa</h2>{" "}
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Id"
                          />
                        </div>{" "}
                        <input
                          type="button"
                          name="previous"
                          className="previous action-button"
                          value="< Prev"
                        />
                        <input
                          type="button"
                          name="next"
                          className="next action-button"
                          value="Next >"
                        />
                      </fieldset>
                      <fieldset>
                        <div className="form-card">
                          <h2 className="fs-title">Minat Bidang & Program</h2>{" "}
                          <label htmlFor="program">
                            Mendaftar Pada Program
                          </label>{" "}
                          <br />
                          <select name="program" id="program">
                            <option value="">Pilih Program</option>
                            <option value="reguler">Reguler</option>
                            <option value="unggulan">Unggulan</option>
                          </select>{" "}
                          <br /> <br />
                          <label htmlFor="bidang">
                            Minat Pada Bidang Keahlian
                          </label>{" "}
                          <br />
                          <select name="bidang" id="bidang">
                            <option value="">Pilih Bidang Keahlian</option>
                            <option value="reguler">Reguler</option>
                            <option value="unggulan">Unggulan</option>
                          </select>
                        </div>{" "}
                        <input
                          type="button"
                          name="previous"
                          className="previous action-button"
                          value="< Prev"
                        />
                        <input
                          type="button"
                          name="next"
                          className="next action-button"
                          value="Next >"
                        />
                      </fieldset>
                      <fieldset>
                        <div className="form-card">
                          <h2 className="fs-title text-center">Berhasil !</h2>{" "}
                          <br />
                          <br />
                          <div className="row justify-content-center">
                            <div className="col-3">
                              {" "}
                              <img
                                src="https://img.icons8.com/color/96/000000/ok--v2.png"
                                className="fit-image"
                              />{" "}
                            </div>
                          </div>{" "}
                          <br />
                          <br />
                          <div className="row justify-content-center">
                            <div className="col-7 text-center">
                              <h5>Data Pendaftaran Berhasil di Simpan</h5>
                            </div>
                          </div>
                          <a href="#" onClick={()=>alert('Yakin ?')} className="btn btn-primary">Daftar</a>
                        </div>
                        <input
                          type="button"
                          name="previous"
                          className="previous action-button"
                          value="< Prev"
                        />
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Daftar;
