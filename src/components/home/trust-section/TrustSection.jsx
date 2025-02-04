import React from "react";
import cambridgeImg from "../../../assets/images/cambridge.jpg";
import ieltsImg from "../../../assets/images/ielts.png";
import toeflImg from "../../../assets/images/toefl.png";
import secureImg from "../../../assets/images/security.png";
import "./TrustSection.css";

export default function TrustSection() {
  const trustBadges = [
    { id: 1, src: cambridgeImg, alt: "Cambridge English" },
    { id: 2, src: ieltsImg, alt: "IELTS Official" },
    { id: 3, src: toeflImg, alt: "TOEFL" },
    { id: 4, src: secureImg, alt: "SSL Secure Site" },
  ];

  return (
    <section className="trust-section">
      <h2 className="trust-title">Trusted by Leading Organizations</h2>
      <div className="trust-logos">
        {trustBadges.map((badge) => (
          <img
            key={badge.id}
            src={badge.src}
            alt={badge.alt}
            className="trust-logo"
          />
        ))}
      </div>
    </section>
  );
}
