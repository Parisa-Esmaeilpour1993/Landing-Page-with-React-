import React from "react";
import brandImage from "../../../assets/images/british-council-logo.png";

export default function HeaderBrand() {
  return (
    <div className="logo-section">
      <img src={brandImage} alt="" className="logo" />
      <span className="divider"></span>
      <div className="logo-text">LearnEnglish</div>
    </div>
  );
}
