import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id, image, name, description, price} = service;
    return (
        <div className="text-center">
            <img src={image} alt="" />
            <div className="text-center mt-4">
             <h3 className="text-2xl font-medium font-young text-[#A3A3A3]">{name}</h3>
             <p className="my-2 text-base font-young">{description}</p>
             <h4 className="text-3xl font-semibold text-[#FDBF05] mb-4">{price}</h4> 
             <Link to={`service/${id}`} className="bg-[#FDBF05] p-3 text-white font-young  font-thin">See Details</Link> 
           </div>
        </div>
    );
};

export default Service;