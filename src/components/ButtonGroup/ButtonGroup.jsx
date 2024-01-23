/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import "./style.css";

export const ButtonGroup = ({
  gap,
  className,
  buttonLabelContent = "Label",
  buttonButtonShineVariantPrimaryToneClassName,
  buttonLabelContent1 = "Label",
  buttonDivClassName,
  visible = true,
  buttonVariant = "primary",
}) => {
  return (
    <div className={`button-group ${gap} ${className}`}>
      {visible && (
        <Button
          className="button-instance"
          labelContent={buttonLabelContent}
          size="medium-default"
          stateProp="rest"
          tone="default"
          variant="default"
        />
      )}

      <Button
        buttonShineVariantPrimaryToneClassName={buttonButtonShineVariantPrimaryToneClassName}
        className="button-instance"
        divClassName={buttonDivClassName}
        labelContent={buttonLabelContent1}
        size="medium-default"
        stateProp="rest"
        tone="default"
        variant={buttonVariant}
      />
    </div>
  );
};

ButtonGroup.propTypes = {
  gap: PropTypes.oneOf(["extra-tight", "loose", "tight"]),
  buttonLabelContent: PropTypes.string,
  buttonLabelContent1: PropTypes.string,
  visible: PropTypes.bool,
  buttonVariant: PropTypes.string,
};
