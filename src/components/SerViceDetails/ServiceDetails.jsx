import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

const ServiceDetails = () => {
  const items = useLoaderData([]);
  const { id } = useParams();
  const idInt = parseInt(id);
  const [item, setItem] = useState([]);
  useEffect(() => {
    const findItems = items?.find((item) => item.id === idInt);
    setItem(findItems);
    // console.log(findPhone);
  }, []);

  const { name, image, description, price, rating } = item;

  return (
    <div
      data-aos="zoom-out-left"
      className="flex flex-col justify-center items-center h-[70vh] mb-20"
    >
      <h2 className="text-center my-20 text-[#1A1919] text-3xl font-extrabold">
        Service Details
      </h2>
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={image} alt="image" className="h-full w-full object-cover" /> 
        </div>
        <div className="p-6">    
          <h6 className="mb-4 block font-young text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased"> 
            {name}
          </h6>
          <p className="mb-8 font-young block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            {description}
          </p>
          <p className="mb-8 text-lg  font-bold leading-relaxed text-gray-700 antialiased">  
            {price}  
          </p>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            <span className="font-semibold">Rating:{rating}</span> 
          </p>
          <a className="inline-block" href="#">
            <button
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-[#FDBF05] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Booking
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2" 
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
