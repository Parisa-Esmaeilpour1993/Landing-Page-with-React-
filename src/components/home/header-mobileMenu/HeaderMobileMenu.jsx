import React from "react";
import PropTypes from "prop-types";

export default function HeaderMobileMenu({ toggleMenu }) {
  return (
    <div className="mobile-menu">
      <nav>
        <a href="#features" onClick={toggleMenu}>
          Features
        </a>
        <a href="#pricing" onClick={toggleMenu}>
          Pricing
        </a>
        <a href="#testimonials" onClick={toggleMenu}>
          Testimonials
        </a>
        <a href="#contact" onClick={toggleMenu}>
          Contact-Us
        </a>
      </nav>
    </div>
  );
}

HeaderMobileMenu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};
