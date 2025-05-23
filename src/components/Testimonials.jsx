import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import client1 from "../assets/hamad.jpg";
import client2 from "../assets/taher.jpg";

const testimonials = [
  {
    name: "Hamad Ismail",
    feedback: "Absolutely loved it! A paradise on earth.Amazing staff ",
    avatar: client1,
  },
  {
    name: "Mahmud Ismail",
    feedback:
      "Incredible experience! The rooms were spotless and the view was breathtaking. Highly recommended!",
    avatar: client2,
  },
  {
    name: "Unkonw Guests",
    feedback:
      "Warm hospitality and top-notch service. Felt like a home away from home. Will visit again!",
    avatar: client2,
  },
];

const Testimonials = () => (
  <section className="w-11/12 mx-auto my-16 text-center">
    <h2 className="text-3xl font-bold mb-6">What Guests Say</h2>
    <p className="max-w-2xl mx-auto mb-10">
      Hear from real people building real communities through OrkidHills.
    </p>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="p-6 rounded-xl shadow hover:shadow-md transition text-left"
        >
          <FaQuoteLeft className="text-xl mb-4" />
          <p className="text-sm  mb-4 italic">"{testimonial.feedback}"</p>
          <div className="flex items-center gap-3">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-sm">{testimonial.name}</p>
              <p className="text-xs text-gray-400">Orkid Hills Guest</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
