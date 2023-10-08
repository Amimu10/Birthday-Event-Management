import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "What services do you offer for birthday events?",
      answer:
        "We offer a variety of services for birthday events, including event planning, theme selection, custom decorations, and entertainment options.",
    },
    {
      question: "Do you provide discounts or special offers?",
      answer:
        "Yes, we frequently run special offers and discounts. Check our website or contact us directly to learn about our current promotions.",
    },
    {
      question: "How can I book your services?",
      answer:
        "Booking our services is easy! Simply visit our website and fill out the booking form. We'll get in touch with you to discuss the details.",
    },
    {
      question: "Can I customize the theme for my birthday event?",
      answer:
        "Absolutely! We understand that each birthday is unique. You can choose from our existing themes or work with our team to create a custom theme tailored to your preferences.",
    },
    {
      question: "What age groups do you organize birthday events for?",
      answer:
        "We organize birthday events for all age groups, from children's parties to milestone celebrations for adults. No matter the age, we ensure a memorable and enjoyable experience.",
    },
  ];

  return (
    <div>
    <div className="text-center">
     <h2 className="lg:text-3xl text-2xl font-semibold font-young text-[#1A1919] text-center mt-14"> Frequently Asked Questions</h2>
     <p  className="text-lg text-[#555] text-center font-medium font-young mt-3 mb-6">Here are some common questions about our birthday event services. If you have any additional inquiries, feel free to contact us.</p>
       </div>
      {faqData.map((item, index) => (
        <div key={index} className="relative mb-3">
          <h6 className="mb-0">
            <button
              className="border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-xl font-thin font-young text-[#1A1919]">{item.question}</span>
              <i className="absolute right-0 pt-1 text-xs">
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </i>
            </button>
          </h6>
          <div
            className={`${
              activeIndex === index
                ? "h-auto py-4 transition-all duration-300 ease-in-out"
                : "h-0 overflow-hidden"
            }`}
          >
            <div className="p-2 leading-normal text-lg text-[#555] text-center font-extralight font-young">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
