// HeroImage.js
import React from "react";
import image from "../../../assets/images/GettyImages.avif";

export default function HeroImage() {
  return (
    <div className="hero-image">
      <img src={image} alt="Adventure illustration" />
    </div>
  );
}
