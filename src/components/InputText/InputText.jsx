/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const InputText = ({
  placeholderContent = "Placeholder",
  valueContent = "Value",
  type,
  typeValueClassName,
  className,
  inputType = "text",
}) => {
  return (
    <input
      className={`input-text ${type} ${type === "value" ? className : undefined}`}
      placeholder={type === "value" ? valueContent : type === "placeholder" ? placeholderContent : undefined}
      type={inputType}
    />
  );
};

InputText.propTypes = {
  placeholderContent: PropTypes.string,
  valueContent: PropTypes.string,
  type: PropTypes.oneOf(["value", "placeholder"]),
  inputType: PropTypes.string,
};
