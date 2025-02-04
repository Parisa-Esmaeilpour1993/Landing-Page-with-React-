import React from "react";
import FooterContactInfo from "../footer-contactInfo/FooterContactInfo";
import FooterDownload from "../footer-download/FooterDownload";
import FooterLinks from "../footer-links/FooterLinks";
import FooterNewsLetter from "../footer-newsletter/FooterNewsLetter";
import FooterSocialLinks from "../footer-socialLinks/FooterSocialLinks";
import "./Footer.css";

export default function Footer() {
  const aboutLinks = [
    { href: "/about", text: "Who We Are" },
    { href: "/team", text: "Our Team" },
    { href: "/careers", text: "Careers" },
    { href: "/contact", text: "Contact Us" },
  ];

  const serviceLinks = [
    { href: "/services", text: "Our Services" },
    { href: "/pricing", text: "Pricing" },
    { href: "/faq", text: "FAQs" },
    { href: "/support", text: "Support" },
  ];

  const quickLinks = [
    { href: "/privacy", text: "Privacy Policy" },
    { href: "/terms", text: "Terms of Service" },
    { href: "/blog", text: "Blog" },
    { href: "/news", text: "News" },
  ];

  return (
    <footer className="footer">
      {/* Links Section */}
      <div className="footer-sections">
        <FooterLinks title="About Us" links={aboutLinks} />
        <FooterLinks title="Services" links={serviceLinks} />
        <FooterLinks title="Quick Links" links={quickLinks} />
        <FooterDownload />
        <FooterNewsLetter />
      </div>

      {/* Social Media and Contact Info */}
      <div className="footer-bottom">
        <FooterContactInfo />
        <FooterSocialLinks />
      </div>
      {/* Copyright */}
      <div className="footer-copyright">
        <p>© 2025 MyBrand. All rights reserved.</p>
      </div>
    </footer>
  );
}
