/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonShine = ({ variant, tone, state, className, shineClassName }) => {
  return (
    <div className={`button-shine state-1-${state} tone-1-${tone} ${className}`}>
      {["critical", "success"].includes(tone) && <div className={`shine ${shineClassName}`} />}
    </div>
  );
};

ButtonShine.propTypes = {
  variant: PropTypes.oneOf(["primary"]),
  tone: PropTypes.oneOf(["critical", "success", "default"]),
  state: PropTypes.oneOf(["rest", "active", "hover"]),
};
