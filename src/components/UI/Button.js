import React from "react";

const Button = (props) => {
  return (
    <button
      className={`btn ${props.primary ? "btn-primary" : "btn-secondary"}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
