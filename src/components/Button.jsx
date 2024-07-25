import React from "react";

const Button = ({ title, classname }) => {
  return (
    <button
      className={`btn w-[150px] bg-black font-bold border-primaryBtn  ${classname}`}
    >
      {title}
    </button>
  );
};

export default Button;
