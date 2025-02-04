import React, { useState } from "react";
import { toast } from "react-toastify";

export default function FooterNewsLetter() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      toast.error("Invalid email address ❌", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    toast.success("Email sent successfully! ✅", {
      position: "top-right",
      autoClose: 3000,
    });

    setEmail("");
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <div className="footer-column">
      <h3>Newsletter</h3>
      <p>Stay updated with our latest news and offers.</p>
      <form className="newsletter-form" onSubmit={handleFormSubmit} noValidate>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}
