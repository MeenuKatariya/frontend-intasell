/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonGroup } from "../ButtonGroup";
import "./style.css";

export const Facts = ({
  className,
  headingClassName,
  text = "There are 8 shipments that have been in out for delivery for more than 3 days.<br/><br/>There are 5 shipments in exception right now<br/><br/>There are 5 shipments in exception right now",
  buttonGroupGapTightClassName,
}) => {
  return (
    <div className={`facts ${className}`}>
      <div className={`heading-2 ${headingClassName}`}>
        <p className="text-wrapper-10">Star Facts about your orders!!!</p>
        <div className="frame-10">
          <p className="there-are">{text}</p>
          <ButtonGroup
            buttonLabelContent1="Check Orders Page"
            buttonVariant="default"
            className={buttonGroupGapTightClassName}
            gap="tight"
            visible={false}
          />
        </div>
      </div>
      <div className="ellipse" />
      <div className="ellipse-2" />
    </div>
  );
};

Facts.propTypes = {
  text: PropTypes.string,
};
