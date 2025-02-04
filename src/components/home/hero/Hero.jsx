import React, { useState } from "react";
import HeroImage from "../hero-image/HeroImage";
import HeroText from "../hero-text/HeroText";
import SignupForm from "../signUp-form/SignUpForm";
import "./Hero.css";

export default function Hero() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Text Content */}
        <HeroText onGetStarted={() => setIsSignupOpen(true)} />

        {/* Image */}
        <HeroImage />
      </div>
      {isSignupOpen && <SignupForm closeForm={() => setIsSignupOpen(false)} />}
    </section>
  );
}
