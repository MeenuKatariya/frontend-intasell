/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonGroup } from "../ButtonGroup";
import "./style.css";

export const Integrations = ({
  className,
  headingClassName,
  text = "Discover a variety of popular integrations tailored for your convenience. <br/><br/>Click to explore and integrate these powerful tools, directing you to our comprehensive Integrations.",
}) => {
  return (
    <div className={`integrations ${className}`}>
      <div className={`heading-4 ${headingClassName}`}>
        <div className="text-wrapper-12">Explore Our Integrated Ecosystem</div>
        <p className="discover-a-variety">{text}</p>
      </div>
      <div className="frame-11">
        <div className="logos">
          <div className="paypal" />
          <div className="ali-reviews" />
          <div className="instagram-feed" />
          <div className="google-analytics" />
          <div className="shopify-flow" />
        </div>
        <ButtonGroup
          buttonButtonShineVariantPrimaryToneClassName="button-group-5"
          buttonDivClassName="button-group-6"
          buttonLabelContent1="Explore Integrations"
          buttonVariant="primary"
          className="button-group-4"
          gap="tight"
          visible={false}
        />
      </div>
    </div>
  );
};

Integrations.propTypes = {
  text: PropTypes.string,
};
