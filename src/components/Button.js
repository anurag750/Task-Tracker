import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, color }) => {
  return (
    <div>
      <button className='btn' style={{ backgroundColor: color }}>
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
