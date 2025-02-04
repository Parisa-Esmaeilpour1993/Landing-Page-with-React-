import React from "react";
import "./CourseSection.css";

export default function CourseSection() {
  const courses = [
    {
      title: "Live classes",
      description: "Group and one-to-one online classes with expert teachers.",
      icon: "📹",
    },
    {
      title: "IELTS preparation",
      description:
        "Get the score you need with private and group online classes.",
      icon: "⭐",
    },
    {
      title: "Personal tutoring",
      description: "One-to-one online sessions focused on a personal plan.",
      icon: "👨‍🏫",
    },
    {
      title: "Self-study courses",
      description: "Learn at your own pace with a self-study online course.",
      icon: "📖",
    },
  ];

  return (
    <section className="courses-section">
      <h2>Learn with one of our popular online courses</h2>
      <div className="courses-container">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <div className="icon">{course.icon}</div>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
