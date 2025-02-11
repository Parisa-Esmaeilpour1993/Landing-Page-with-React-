import React from "react";
import CourseSection from "./home/course-section/CourseSection";
import Features from "./home/feature/Features";
import Footer from "./home/footer/Footer";
import Header from "./home/header/Header";
import Hero from "./home/hero/Hero";
import RepeatLearningOffer from "./home/repeat-learning-offer/RepeatLearningOffer";
import Testimonials from "./home/testimonials/Testimonials";
import TrustSection from "./home/trust-section/TrustSection";

export default function Index() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <CourseSection />
      <TrustSection />
      <RepeatLearningOffer />
      <Testimonials />
      <Footer />
    </>
  );
}
