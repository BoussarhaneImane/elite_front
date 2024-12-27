import React from "react";

const Button = ({ text, bgColor, textColor,w ,handler,ml = () => {} }) => {
  return (
    <button
      onClick={handler}
      className={`${bgColor} ${textColor} ${w}  ${ml}  cursor-pointer hover:scale-105 duration-300 py-2 px-4 rounded-xl relative text-sm font-medium z-10`}
    >
      {text}
    </button>
  );
};

export default Button;
