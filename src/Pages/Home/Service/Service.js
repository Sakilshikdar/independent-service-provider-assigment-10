import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const{name, img, price,description} = service

    // const navigate = useNavigate();
    // const navigateToServiceDetails = id =>{
    //     navigate(`/service/${id}`)
    // }
    return (
        <div className='service-container'>
        <img src={img} alt="" />
        <h2>{name}</h2>
        <p>Price: {price}$</p>
        <h6>Description: {description}</h6>
        <Link to={'/checkout'}><button>checkout</button></Link>
    </div>
    );
};

export default Service;