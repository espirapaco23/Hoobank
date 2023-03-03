import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      className={`font-poppins font-medium text-[18px] text-primary py-4 px-6 bg-blue-gradient outline-none ${styles} rounded-[10px] hover:text-secondary `}
      type="button"
    >
      Get Started
    </button>
  );
};

export default Button;
