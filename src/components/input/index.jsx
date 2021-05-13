// REACT
import React from "react";

// STYLES
import "./styles.scss";

const Input = ({...rest}) => {
  return (
    <div>
      <input {...rest}/>
    </div>
  );
};

export default Input;
