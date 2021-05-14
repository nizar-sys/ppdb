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
import $, { data } from "jquery";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Input from "../../components/input";

class Daftar extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const dataPendaftar = this.state;
    if (dataPendaftar != null) {
      console.log(dataPendaftar);
    }
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
  }
  render() {
    const dataPendaftar = this.state;
    if (dataPendaftar != null) {
      // console.log(dataPendaftar);
    }
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
                    <form id="msform" method="post">
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
                            name="namaSiswa"
                            id="namaSiswa"
                            placeholder="Nama Lengkap"
                            onChange={this.handleInput}
                          />
                          <select
                            name="jk"
                            id="jk"
                            className="custom-select custom-select-lg mb-3"
                            style={{ fontFamily: "montserrat" }}
                            onChange={this.handleInput}
                          >
                            <option value="">Jenis Kelamin</option>
                            <hr />
                            <option value="L">Laki-laki</option>
                            <option value="P">Perempuan</option>
                          </select>
                          <Input
                            type="text"
                            name="tempatLahir"
                            id="tempatLahir"
                            placeholder="Tempat Lahir"
                            onChange={this.handleInput}
                          />
                          <Input
                            type="text"
                            name="tglLahir"
                            id="tglLahir"
                            onFocus={(e) => (e.currentTarget.type = "date")}
                            onBlur={(e) => (e.currentTarget.type = "text")}
                            placeholder="Tanggal Lahir"
                            onChange={this.handleInput}
                          />
                          <select
                            name="agama"
                            id="agama"
                            className="custom-select custom-select-lg mb-3"
                            style={{ fontFamily: "montserrat" }}
                            onChange={this.handleInput}
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
                            name="anakKe"
                            id="anakKe"
                            placeholder="Anak ke"
                            onChange={this.handleInput}
                          />
                          <Input
                            type="number"
                            name="nisn"
                            id="nisn"
                            placeholder="NISN (*Pastikan NISN Terisi)"
                            onChange={this.handleInput}
                          />
                          <Input
                            type="number"
                            name="nik"
                            id="nik"
                            placeholder="NIK (*Pastikan NIK Terisi)"
                            onChange={this.handleInput}
                          />
                          <Input
                            type="text"
                            name="jalan"
                            id="jalan"
                            placeholder="Jalan"
                            onChange={this.handleInput}
                          />
                          <Input
                            type="number"
                            name="rt"
                            id="rt"
                            placeholder="RT"
                            onChange={this.handleInput}
                          />
                          <Input
                            type="number"
                            name="rw"
                            id="rw"
                            placeholder="RW"
                            onChange={this.handleInput}
                          />
                          <Input
                            type="number"
                            name="noRumah"
                            id="noRumah"
                            placeholder="No.Rumah"
                            onChange={this.handleInput}
                          />
                          <Input
                            type="text"
                            name="desa"
                            id="desa"
                            placeholder="Desa / Kelurahan"
                            onChange={this.handleInput}
                          />
                          <Input
                            type="text"
                            name="kecamatan"
                            id="kecamatan"
                            placeholder="Kecamatan"
                            onChange={this.handleInput}
                          />
                          <Input
                            type="text"
                            name="kota"
                            id="kota"
                            placeholder="Kota / Kabupaten"
                            onChange={this.handleInput}
                          />
                          <Input
                            type="number"
                            name="kodePos"
                            id="kodePos"
                            placeholder="Kode POS"
                            onChange={this.handleInput}
                          />
                          <Input
                            type="text"
                            name="alamat"
                            id="alamat"
                            placeholder="Alamat"
                            onChange={this.handleInput}
                          />
                          <Input
                            type="text"
                            name="asalSekolah"
                            id="asalSekolah"
                            placeholder="Asal Sekolah"
                            onChange={this.handleInput}
                          />
                          <Input
                            type="number"
                            name="tahunLulus"
                            id="tahunLulus"
                            placeholder="Tahun Lulus"
                            onChange={this.handleInput}
                          />
                          <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Alamat Email"
                            onChange={this.handleInput}
                          />
                          <Input
                            type="number"
                            name="noHp"
                            id="noHp"
                            placeholder="No.HP"
                            onChange={this.handleInput}
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
                            name="noKK"
                            id="noKK"
                            placeholder="No Kartu Keluarga"
                            onChange={this.handleInput}
                          />
                          <Input
                            type="number"
                            name="nikAyah"
                            id="nikAyah"
                            placeholder="NIK Ayah"
                            onChange={this.handleInput}
                          />
                          <Input
                            type="number"
                            name="noHpAyah"
                            id="noHpAyah"
                            placeholder="No HP Ayah"
                            onChange={this.handleInput}
                          />
                          <Input
                            type="text"
                            name="namaAyah"
                            id="namaAyah"
                            placeholder="Nama Ayah"
                            onChange={this.handleInput}
                          />
                          <Input
                            type="text"
                            name="pekerjaanAyah"
                            id="pekerjaanAyah"
                            placeholder="Pekerjaan Ayah"
                            onChange={this.handleInput}
                          />
                          <Input
                            type="number"
                            name="nikIbu"
                            id="nikIbu"
                            placeholder="NIK Ibu"
                            onChange={this.handleInput}
                          />
                          <Input
                            type="number"
                            name="noHpIbu"
                            id="noHpIbu"
                            placeholder="No HP Ibu"
                            onChange={this.handleInput}
                          />
                          <Input
                            type="text"
                            name="namaIbu"
                            id="namaIbu"
                            placeholder="Nama Ibu"
                            onChange={this.handleInput}
                          />
                          <Input
                            type="text"
                            name="pekerjaanIbu"
                            id="pekerjaanIbu"
                            placeholder="Pekerjaan Ibu"
                            onChange={this.handleInput}
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
                            name="program"
                            id="program"
                            className="custom-select custom-select-lg mb-3"
                            style={{ fontFamily: "montserrat" }}
                            onChange={this.handleInput}
                          >
                            <option value="">Pilih Program</option>
                            <hr />
                            <option value="reguler">Reguler</option>
                            <option value="unggulan">Unggulan</option>
                          </select>
                          <br /> <br />
                          <select
                            name="bidang"
                            id="bidang"
                            className="custom-select custom-select-lg mb-3"
                            style={{ fontFamily: "montserrat" }}
                            onChange={this.handleInput}
                          >
                            <option value="">
                              Pilih Minat Bidang Keahlian
                            </option>
                            <hr />
                            <option value="tik">
                              Teknik Informasi dan Komunikasi
                            </option>
                            <option value="bisnis">Bisnis Manajemen</option>
                            <option value="pariwisata">Pariwisata</option>
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
                            onClick={this.handleSubmit}
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
