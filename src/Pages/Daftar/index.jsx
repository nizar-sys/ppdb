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
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Input from "../../components/input";

class Daftar extends Component {
  constructor(props) {
    super(props);
  }

  tambahPendaftar = (e) => {
    $("#daftar").on("click", () => {
      let data = [$("#nama_siswa").val(), $("#jk").val()];
      // e.preventDefault();
      $.ajax({
        url: "http://localhost:8080/api/daftar/",
        method: "post",
        data: data,
        success: (result) => {
          console.log(result);
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  };

  wizard = () => {
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
  };
  componentDidMount() {
    this.wizard();
    this.tambahPendaftar();
  }
  render() {
    const year = new Date().getFullYear();
    return (
      <Fragment>
        <div className="container-fluid" id="grad1">
          <div className="row justify-content-center mt-0">
            <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
              <div className="card px-0 pt-4 pb-0 mb-3">
                <div className="row">
                  <div className="col-md-12 mx-0 header-content d-flex justify-content-center">
                    <img src={icon} className="icon" />
                    <div className="text-header">
                      <p className="text-center text-uppercase">
                        form pendaftaran
                      </p>
                      <h3 className="text-weight-bold">
                        PPDB SMK Wikrama Bogor Tahun {year}
                      </h3>
                      <p className="text-muted">
                        * Harap Isi Data Dengan Format Yang Sebenar - benar nya
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12 mx-0">
                    <div id="msform">
                      <ul id="progressbar">
                        <li className="active" id="personal">
                          <strong>Data Siswa</strong>
                        </li>
                        <li id="personal">
                          <strong>Data Orang Tua Siswa</strong>
                        </li>
                        <li id="personal">
                          <strong>Minat Bidang &amp; Program</strong>
                        </li>
                        <li id="confirm">
                          <strong>Selesai</strong>
                        </li>
                      </ul>
                      <fieldset>
                        <div className="form-card">
                          <h2 className="fs-title text-primary">Data Siswa</h2>
                          <Input
                            type="text"
                            name="nama_siswa"
                            id="nama_siswa"
                            placeholder="Nama Lengkap"
                          />
                          <select
                            name="jk"
                            id="jk"
                            className="custom-select custom-select-lg mb-3"
                            style={{ fontFamily: "montserrat" }}
                          >
                            <option value="">Jenis Kelamin</option>
                            <hr />
                            <option value="Laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                          </select>
                          <Input
                            type="text"
                            name="tempat_lahir"
                            id="tempat_lahir"
                            placeholder="Tempat Lahir"
                          />
                          <Input
                            type="text"
                            name="tanggal_lahir"
                            id="tanggal_lahir"
                            onFocus={(e) => (e.currentTarget.type = "date")}
                            onBlur={(e) => (e.currentTarget.type = "text")}
                            placeholder="Tanggal Lahir"
                          />
                          <select
                            name="agama"
                            id="agama"
                            className="custom-select custom-select-lg mb-3"
                            style={{ fontFamily: "montserrat" }}
                          >
                            <option value="">Pilih Agama</option>
                            <hr />
                            <option value="islam">Islam</option>
                            <option value="protestan">Protestan</option>
                            <option value="katolik">Katolik</option>
                            <option value="hindu">Hindu</option>
                            <option value="budha">Budha</option>
                            <option value="konghucu">Konghucu</option>
                          </select>
                          <Input
                            type="number"
                            name="anak_ke"
                            id="anak_ke"
                            placeholder="Anak ke"
                          />
                          <Input
                            type="number"
                            name="nisn_siswa"
                            id="nisn_siswa"
                            placeholder="NISN (*Pastikan NISN Terisi)"
                          />
                          <Input
                            type="number"
                            name="nik_siswa"
                            id="nik_siswa"
                            placeholder="NIK (*Pastikan NIK Terisi)"
                          />
                          <Input
                            type="text"
                            name="jalan"
                            id="jalan"
                            placeholder="Jalan"
                          />
                          <Input
                            type="number"
                            name="rt"
                            id="rt"
                            placeholder="RT"
                          />
                          <Input
                            type="number"
                            name="rw"
                            id="rw"
                            placeholder="RW"
                          />
                          <Input
                            type="number"
                            name="no_rumah"
                            id="no_rumah"
                            placeholder="No.Rumah"
                          />
                          <Input
                            type="text"
                            name="desa"
                            id="desa"
                            placeholder="Desa / Kelurahan"
                          />
                          <Input
                            type="text"
                            name="kecamatan"
                            id="kecamatan"
                            placeholder="Kecamatan"
                          />
                          <Input
                            type="text"
                            name="kota"
                            id="kota"
                            placeholder="Kota / Kabupaten"
                          />
                          <Input
                            type="number"
                            name="kode_pos"
                            id="kode_pos"
                            placeholder="Kode POS"
                          />
                          <Input
                            type="text"
                            name="alamat"
                            id="alamat"
                            placeholder="Alamat"
                          />
                          <Input
                            type="text"
                            name="asal_sekolah"
                            id="asal_sekolah"
                            placeholder="Asal Sekolah"
                          />
                          <Input
                            type="number"
                            name="tahun_lulus"
                            id="tahun_lulus"
                            placeholder="Tahun Lulus"
                          />
                          <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Alamat Email"
                          />
                          <Input
                            type="number"
                            name="no_hp"
                            id="no_hp"
                            placeholder="No.HP"
                          />
                        </div>
                        <button
                          className="btn next action-button"
                          type="button"
                          name="next"
                          value="next"
                        >
                          <i className="fa fa-arrow-right"></i>
                        </button>
                        <br />
                        <Link to="/">Kembali</Link>
                      </fieldset>
                      <fieldset>
                        <div className="form-card">
                          <h2 className="fs-title">Data Orang Tua Siswa</h2>
                          <Input
                            type="number"
                            name="no_kk"
                            id="no_kk"
                            placeholder="No Kartu Keluarga"
                          />
                          <Input
                            type="number"
                            name="nik_ayah"
                            id="nik_ayah"
                            placeholder="NIK Ayah"
                          />
                          <Input
                            type="number"
                            name="no_hp_ayah"
                            id="no_hp_ayah"
                            placeholder="No HP Ayah"
                          />
                          <Input
                            type="text"
                            name="nama_ayah"
                            id="nama_ayah"
                            placeholder="Nama Ayah"
                          />
                          <Input
                            type="text"
                            name="pekerjaan_ayah"
                            id="pekerjaan_ayah"
                            placeholder="Pekerjaan Ayah"
                          />
                          <Input
                            type="number"
                            name="nik_ibu"
                            id="nik_ibu"
                            placeholder="NIK Ibu"
                          />
                          <Input
                            type="number"
                            name="no_hp_ibu"
                            id="no_hp_ibu"
                            placeholder="No HP Ibu"
                          />
                          <Input
                            type="text"
                            name="nama_ibu"
                            id="nama_ibu"
                            placeholder="Nama Ibu"
                          />
                          <Input
                            type="text"
                            name="pekerjaan_ibu"
                            id="pekerjaan_ibu"
                            placeholder="Pekerjaan Ibu"
                          />
                        </div>
                        <button
                          className="btn previous action-button"
                          type="button"
                          name="previous"
                          value="previous"
                        >
                          <i className="fa fa-arrow-left"></i>
                        </button>
                        <button
                          className="btn next action-button"
                          type="button"
                          name="next"
                          value="next"
                        >
                          <i className="fa fa-arrow-right"></i>
                        </button>
                      </fieldset>
                      <fieldset>
                        <div className="form-card">
                          <h2 className="fs-title">
                            Minat Bidang &amp; Program
                          </h2>
                          <br />
                          <select
                            name="kode_program"
                            id="kode_program"
                            className="custom-select custom-select-lg mb-3"
                            style={{ fontFamily: "montserrat" }}
                          >
                            <option value="">Pilih Program</option>
                            <hr />
                            <option value="0">Reguler</option>
                            <option value="1">Unggulan</option>
                          </select>
                          <br /> <br />
                          <select
                            name="kode_bidang"
                            id="kode_bidang"
                            className="custom-select custom-select-lg mb-3"
                            style={{ fontFamily: "montserrat" }}
                          >
                            <option value="">
                              Pilih Minat Bidang Keahlian
                            </option>
                            <hr />
                            <option value="1">
                              Teknik Informasi dan Komunikasi
                            </option>
                            <option value="2">Bisnis Manajemen</option>
                            <option value="3">Pariwisata</option>
                          </select>
                        </div>
                        <button
                          className="btn previous action-button"
                          type="button"
                          name="previous"
                          value="previous"
                        >
                          <i className="fa fa-arrow-left"></i>
                        </button>
                        <button
                          className="btn next action-button"
                          type="button"
                          name="next"
                          value="next"
                        >
                          <i className="fa fa-arrow-right"></i>
                        </button>
                      </fieldset>
                      <fieldset>
                        <div className="form-card">
                          <h2 className="fs-title text-center">Berhasil !</h2>
                          <br />
                          <br />
                          <div className="row justify-content-center">
                            <div className="col-3">
                              <img
                                src="https://img.icons8.com/color/96/000000/ok--v2.png"
                                className="fit-image"
                              />
                            </div>
                          </div>
                          <br />
                          <br />
                          <div className="row justify-content-center">
                            <div className="col-7 text-center">
                              <h5>Data Pendaftaran Berhasil di Simpan</h5>
                            </div>
                          </div>
                          <Input
                            type="submit"
                            className="btn btn-primary"
                            value="Daftar"
                            name="daftar"
                            id="daftar"
                          />
                        </div>
                        <button
                          className="btn previous action-button"
                          type="button"
                          name="previous"
                          value="previous"
                        >
                          <i className="fa fa-arrow-left"></i>
                        </button>
                      </fieldset>
                    </div>
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
