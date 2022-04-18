import React from 'react';
import Banner from '../Banner/Banner';
import ExtraPart from '../extraPart/ExtraPart';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ExtraPart></ExtraPart>
        </div>
    );
};

export default Home;