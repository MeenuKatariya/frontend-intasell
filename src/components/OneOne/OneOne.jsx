/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonGroup } from "../ButtonGroup";
import "./style.css";

export const OneOne = ({
  className,
  text = "Unlock personalized guidance! Book a one-on-one onboarding call to streamline your experience and maximize the potential of our services",
}) => {
  return (
    <div className={`one-one ${className}`}>
      <div className="heading-wrapper">
        <div className="heading-3">
          <p className="text-wrapper-11">Exclusive Onboarding Support for High-Volume Brands</p>
          <p className="unlock-personalized">{text}</p>
        </div>
      </div>
      <ButtonGroup
        buttonButtonShineVariantPrimaryToneClassName="button-group-3"
        buttonLabelContent1="Schedule A Call"
        buttonVariant="primary"
        className="button-group-2"
        gap="tight"
        visible={false}
      />
    </div>
  );
};

OneOne.propTypes = {
  text: PropTypes.string,
};
