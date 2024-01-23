/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Checkcircle1 } from "../../icons/Checkcircle1";
import { ButtonGroup } from "../ButtonGroup";
import "./style.css";

export const TrackingLink = ({
  className,
  icon = <Checkcircle1 className="check-circle" />,
  buttonGroupButtonButtonShineVariantPrimaryToneClassName,
  buttonGroupButtonLabelContent = "Preview Page",
}) => {
  return (
    <div className={`tracking-link ${className}`}>
      <div className="heading">
        <div className="frame">
          {icon}
          <p className="p">Your Tracking Link has been generated</p>
        </div>
        <p className="include-the-link-to">
          <span className="span">Include the </span>
          <a href="https://50d72d-5.myshopify.com/tools/tracking." rel="noopener noreferrer" target="_blank">
            <span className="text-wrapper-2">Link</span>
          </a>
          <span className="span"> to Your Store&#39;s Navigation Menu.</span>
        </p>
      </div>
      <ButtonGroup
        buttonButtonShineVariantPrimaryToneClassName={buttonGroupButtonButtonShineVariantPrimaryToneClassName}
        buttonDivClassName="design-component-instance-node"
        buttonLabelContent="Copy Link"
        buttonLabelContent1={buttonGroupButtonLabelContent}
        buttonVariant="primary"
        className="button-group-instance"
        gap="tight"
      />
    </div>
  );
};

TrackingLink.propTypes = {
  buttonGroupButtonLabelContent: PropTypes.string,
};
