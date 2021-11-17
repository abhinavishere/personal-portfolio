import React from "react";

const Card = (props) => {
  return (
    <div className="bg-gray-50 w-11/12 max-w-xs md:max-w-max mx-auto my-4  p-3 rounded-md">
      {props.children}
    </div>
  );
};

export default Card;
