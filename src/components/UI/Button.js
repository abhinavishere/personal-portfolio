import React from "react";

const Button = (props) => {
  return (
    <button className="bg-accent px-6 py-2 rounded-md text-gray-100 font-base hover:bg-accent transition ">
      {props.children}
    </button>
  );
};

export default Button;
