import React, { useState } from "react";
import "./SignUpForm.css";
import InputField from "../../shared/input/Input";
import HandleSubmit from "../../../utils/HandleSubmit";

export default function SignupForm({ closeForm }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div className="signup-overlay">
      <div className="signup-form">
        <h2>Sign Up</h2>

        <InputField
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />
        <InputField
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        <button
          className="submit-btn"
          onClick={() =>
            HandleSubmit(formData, setErrors, setFormData, closeForm)
          }
        >
          Register
        </button>

        <button className="close-btn" onClick={closeForm}>
          Close
        </button>
      </div>
    </div>
  );
}
