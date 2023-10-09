import React from "react";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import 'aos/dist/aos.css'; // Import the styles
import AOS from 'aos';


AOS.init();

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Happy Family 1",
    role: "Satisfied Customer",
    image: "https://source.unsplash.com/600x400/?family,birthday",
    quote:
      "We had an amazing experience with the birthday event organized by EventMagic! It was a joyous occasion, and everyone, from kids to adults, enjoyed every moment. The decorations, entertainment, and overall atmosphere were outstanding. Thank you for making our special day truly magical!",
    stars: 5,
  },
  {
    name: "Celebration Joy",
    role: "Delighted Customer",
    image: "https://source.unsplash.com/600x400/?birthday,celebration",
    quote:
      "EventMagic exceeded our expectations in organizing a fantastic birthday celebration. The attention to detail, creative decorations, and the professional team made the event stress-free for us. Our guests were thrilled, and we highly recommend EventMagic for any birthday event!",
    stars: 4.8,
  },
  {
    name: "Happy Kid",
    role: "Excited Customer",
    image: "https://source.unsplash.com/600x400/?kid,birthday",
    quote:
      "Our child's birthday party organized by EventMagic was a hit! The colorful decorations, fun activities, and friendly staff made the event unforgettable. EventMagic knows how to create magical moments, and we are grateful for the wonderful memories.",
    stars: 4.9,
  },
  {
    name: "Fantastic Teen Party",
    role: "Impressed Customer",
    image: "https://source.unsplash.com/600x400/?teen,birthday",
    quote:
      "EventMagic made our teen's birthday party fantastic! The trendy decor, cool entertainment, and energetic vibe created an atmosphere that the teenagers loved. It was a hassle-free experience, and we appreciate EventMagic for making the celebration a big success.",
    stars: 4.7,
  },
  {
    name: "Milestone Celebration",
    role: "Grateful Customer",
    image: "https://source.unsplash.com/600x400/?milestone,birthday",
    quote:
      "Celebrating a milestone birthday with EventMagic was a wonderful decision. The elegant decor, thoughtful details, and professional service made our milestone celebration truly special. Thank you, EventMagic, for turning our vision into a reality!",
    stars: 4.6,
  },
  {
    name: "Memorable Adult Party",
    role: "Happy Customer",
    image: "https://source.unsplash.com/600x400/?adult,birthday",
    quote:
      "EventMagic knows how to throw a memorable adult birthday party! The sophisticated decorations, entertainment options, and attention to detail impressed all our guests. It was a stress-free and enjoyable experience, and we highly recommend EventMagic for adult birthday events.",
    stars: 4.8,
  },
];

const BirthdayEvents = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div data-aos="zoom-out-left" className="py-5">
      <div className="mb-8 text-center mt-12">
        <h1 className="lg:text-3xl md:text-2xl text-xl font-semibold font-young text-[#1A1919] text-center mb-4">Unforgettable Birthday Events</h1>
        <p className="md:text-lg text-base font-young font-medium text-[#555]">
          Make your special day even more memorable with EventMagic! We specialize in creating
          magical birthday events for all ages. From creative decorations to engaging entertainment,
          we ensure a celebration filled with joy and laughter.
        </p>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="h-48 w-full object-cover object-center"
                src={testimonial.image}
                alt={`Event by ${testimonial.name}`}
              />
              <div className="p-6">
                <h2 className="tracking-widest text-sm title-font font-semibold text-gray-500 mb-1">
                  {testimonial.role}
                </h2>
                <h1 className="title-font font-young text-lg font-medium text-gray-900 mb-3">
                  {testimonial.name}
                </h1>
                <p className="leading-relaxed text-sm text-gray-500\ mb-3 font-young">{testimonial.quote}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-${i < testimonial.stars ? "yellow" : "gray"}-500`}
                      />
                    ))}
                    {testimonial.stars % 1 !== 0 && (
                      <FaStarHalfAlt className="text-yellow-500" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BirthdayEvents;
