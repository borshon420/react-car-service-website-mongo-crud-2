import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId} = useParams(); 
    const [service, setService] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    return (
        <div className="mt-5">
            <h1>Details of: {service.name}</h1>
            <h1>This is booking {serviceId}</h1>
        </div>
    );
};

export default Booking;