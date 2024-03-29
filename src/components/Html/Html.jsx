/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { ButtonGroup } from "../ButtonGroup";
import { MultilineField } from "../MultilineField";
import "./style.css";

export const Html = ({ className }) => {
  return (
    <div className={`HTML ${className}`}>
      <div className="heading-7">
        <div className="heading-8">
          <p className="text-wrapper-17">Seamlessly Integrate Custom HTML Elements</p>
          <p className="text-wrapper-18">
            Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate
            the tracking page experience for your customers.
          </p>
        </div>
      </div>
      <MultilineField
        className="multiline-field-instance"
        inputClassName="multiline-field-2"
        labelContent="HTML Link"
        stateProp="rest"
        tone="default"
      />
      <ButtonGroup
        buttonButtonShineVariantPrimaryToneClassName="button-group-10"
        buttonDivClassName="button-group-11"
        buttonLabelContent="Preview"
        buttonLabelContent1="Apply changes"
        buttonVariant="primary"
        className="button-group-9"
        gap="tight"
      />
    </div>
  );
};
