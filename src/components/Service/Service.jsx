import React from "react";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css'; // Import the styles
import AOS from 'aos';


AOS.init();

const Service = ({ service }) => {
  const { id, image, name, description, price } = service;

  return (
<div data-aos="zoom-out-right">
  <div className="text-center mb-3">
      <img src={image} alt="" />
      <div className="text-center mt-4">
        <h3 className="text-2xl font-medium font-young text-[#A3A3A3]">
          {name}
        </h3>
        <p className="my-6 text-base font-young ">{description}</p>
        <div data-aos="zoom-in-down">
        <Link
          to={`service/${id}`}
          className="bg-[#FDBF05] p-3 text-white font-young rounded font-thin"
        >
          See Details
        </Link>
        </div>
      </div>
    </div>
    </div>
  
  );
};

export default Service;
