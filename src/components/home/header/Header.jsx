import React, { useState } from "react";
import "./Header.css";
import SignupForm from "../signUp-form/SignUpForm";
import HeaderNavLinks from "../header-navLinks/HeaderNavLinks";
import HeaderMobileMenu from "../header-mobileMenu/HeaderMobileMenu";
import HeaderBrand from "../header-brand/HeaderBrand";
import Button from "../../shared/button/Button";

export default function Header() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  function toggleMenu() {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.classList.toggle("open");
  }
  return (
    <div className="header">
      <div className="container">
        <HeaderBrand />
        <HeaderNavLinks />

        <div className="cta-menu-buttons">
          {/* Call-To-Action Button */}
          <Button onClick={() => setIsSignupOpen(true)} className="cta-button">
            Get Started
          </Button>
          {isSignupOpen && (
            <SignupForm closeForm={() => setIsSignupOpen(false)} />
          )}

          {/* Hamburger menu for smaller screens */}
          <button className="menu-button" onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <HeaderMobileMenu toggleMenu={toggleMenu} />
    </div>
  );
}
