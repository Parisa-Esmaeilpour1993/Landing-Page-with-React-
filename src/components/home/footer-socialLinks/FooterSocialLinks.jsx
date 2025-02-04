import React from "react";
import facebookIcon from "../../../assets/images/Icon-Facebook.svg";
import instagramIcon from "../../../assets/images/icon-instagram.svg";
import linkedinIcon from "../../../assets/images/Icon-Linkedin.svg";
import twitterIcon from "../../../assets/images/Icon-Twitter.svg";

export default function FooterSocialLinks() {
  return (
    <div className="social-links">
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <img src={facebookIcon} alt="facebook-icon" className="social-icons" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <img src={twitterIcon} alt="twitter-icon" className="social-icons" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <img
          src={instagramIcon}
          alt="instagram-icon"
          className="social-icons"
        />
      </a>
      <a href="https://linkedIn.com" target="_blank" rel="noreferrer">
        <img src={linkedinIcon} alt="linkedIn-icon" className="social-icons" />
      </a>
    </div>
  );
}
