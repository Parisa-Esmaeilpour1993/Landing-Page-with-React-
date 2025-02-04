import React, { useState } from "react";
import Button from "../../shared/button/Button";

import "./RepeatLearningOffer.css";
import SignupForm from "../signUp-form/SignUpForm";

export default function RepeatLearningOffer() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const features = [
    {
      id: 1,
      title: "Skills",
      text: "Improve your English speaking, listening, reading and writing",
    },
    { id: 2, title: "Grammar", text: "Practise verb tenses and grammar rules" },
    {
      id: 3,
      title: "Vocabulary",
      text: "Learn new words to understand and express yourself clearly",
    },
  ];

  return (
    <section className="learning-section">
      <p className="learning-description">
        Explore our site to improve your English with our bite-sized lessons,
        quizzes and games. With our varied selection of learning materials, you
        can practise your English for free.
      </p>
      <div className="learning-cards">
        {features.map((feature) => (
          <div key={feature.id} className="learning-card">
            <span className="check-icon">✔</span>
            <div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-text">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
      <Button className="get-started-btn" onClick={() => setIsSignupOpen(true)}>
        Get started
      </Button>
      {isSignupOpen && <SignupForm closeForm={() => setIsSignupOpen(false)} />}
    </section>
  );
}
