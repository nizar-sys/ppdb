// REACT
import React, { Component } from "react";

export default class SuccessDaftar extends Component {
  render() {
    const data = this.props.location.state;
    return (
      <div>
        <h1>hello {data.tglLahir}</h1>
      </div>
    );
  }
}
