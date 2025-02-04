// HeroText.js
import React from "react";

export default function HeroText({ onGetStarted }) {
  return (
    <div className="hero-text">
      <h1 className="hero-title">
        Learn English online & improve your skills through our high-quality
        courses and resources.
      </h1>
      <p className="hero-subtitle">
        Everything you find here has been specially created by the British
        Council, the world's English teaching experts. We provide you with the
        right tools to help you interact confidently in the real world.
      </p>
      <a href="#get-started" className="cta-button" onClick={onGetStarted}>
        Get Started
      </a>
    </div>
  );
}
