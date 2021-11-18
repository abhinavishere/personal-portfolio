import React from "react";

const Button = (props) => {
  return (
    <a
      href={props.link ? props.link : "#"}
      target="_blank"
      rel="noreferrer"
      className={`btn ${props.primary ? "btn-primary" : "btn-secondary"}`}
    >
      {props.children}
    </a>
  );
};

export default Button;
