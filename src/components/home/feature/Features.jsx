import React from "react";
import "./Features.css";

export default function Features() {
  const features = [
    {
      id: 1,
      icon: "🚀",
      title: "Fast Performance",
      description:
        "Experience lightning-fast speeds with our optimized platform.",
    },
    {
      id: 2,
      icon: "🔒",
      title: "Secure Platform",
      description: "Your data is safe with our top-notch security measures.",
    },
    {
      id: 3,
      icon: "🌍",
      title: "Global Access",
      description: "Connect from anywhere in the world, anytime you want.",
    },
  ];

  return (
    <section className="features">
      <h2 className="features-title">Why Choose Us?</h2>
      <div className="features-list">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
