import React from "react";

const NumberButton = (props) => {
  if (props.button === "0") {
    return (
        <button className="number_button calc_button number_zero">
          {props.button}
        </button>
    );
  }
  return (
    <button className="number_button calc_button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.button}
    </button>
  );
};

export default NumberButton;
