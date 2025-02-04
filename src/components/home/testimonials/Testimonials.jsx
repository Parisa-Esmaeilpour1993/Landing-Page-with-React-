import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      text: "This platform has completely transformed the way I work. Highly recommended!",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "Amazing experience! The features and support are top-notch.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "David Brown",
      text: "I couldn't be happier with the results. Great job!",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What Our Users Say</h2>
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards, Navigation]}
        navigation={true}
        autoplay={false}
        className="testimonials-swiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="testimonial-slide">
            <div className="testimonial-card">
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
