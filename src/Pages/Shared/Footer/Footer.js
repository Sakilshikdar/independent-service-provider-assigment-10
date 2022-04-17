import React, { useEffect, useState } from 'react';
import './Footer.css'
const Footer = () => {
    const [date, setDate] = useState();

    const getYear = () => setDate(new Date().getFullYear())

    useEffect(() => {
        getYear();
    }, [])

    return (
        <div>
            <footer className='footer text-center mt-5'>
                <p><small>©copyright-{date}</small></p>
            </footer>
        </div>
    );
};

export default Footer;