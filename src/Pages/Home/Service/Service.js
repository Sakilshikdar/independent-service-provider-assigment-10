import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const{name, img, price,description} = service

    return (
        <div className='service-container shadow-lg p-3 mb-5 bg-white rounded'>
        <img src={img} alt="" />
        <h2>{name}</h2>
        <p>Price: {price}$</p>
        <h6>Description: {description}</h6>
        <Link to={'/checkout'}><button className='button'>checkout</button></Link>
    </div>
    );
};

export default Service;