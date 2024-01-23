/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Slot } from "../Slot";
import "./style.css";

export const Card = ({
  showSlot = true,
  className,
  override = <Slot backgroundClassName="slot-2" className="slot-instance" />,
}) => {
  return <div className={`card ${className}`}>{showSlot && <>{override}</>}</div>;
};

Card.propTypes = {
  showSlot: PropTypes.bool,
};
