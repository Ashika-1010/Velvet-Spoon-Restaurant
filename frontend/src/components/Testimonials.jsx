import React from "react";
import { data } from "../restApi.json";

const Testimonials = () => {
  const reviews = data[0].testimonials;

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="heading_section center">
          <h1 className="heading">TESTIMONIALS</h1>
          <p>What our guests love about Velvet Spoon.</p>
        </div>

        <div className="testimonial_grid">
          {reviews.map((r) => (
            <div className="testimonial_card" key={r.id}>
              <div className="stars">
                {"★".repeat(r.rating)}
                {"☆".repeat(5 - r.rating)}
              </div>
              <p className="review">“{r.review}”</p>
              <div className="person">
                <p className="name">{r.name}</p>
                <p className="role">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;