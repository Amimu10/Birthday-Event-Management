import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <h2 className="lg:text-3xl md:text-2xl text-xl  font-semibold font-young text-[#1A1919] text-center mb-2 mt-16">Our Birthday Event Services</h2>
            <p className="md:text-lg text-base text-[#555] text-center font-medium font-young mb-6">Discover our amazing birthday event services tailored just for you!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    services.map(service => (
                        <Service key={service.id} service={service}></Service>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;