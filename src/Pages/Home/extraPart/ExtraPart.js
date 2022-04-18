import React from 'react';
import logo from '../../../images/practices.webp'
import './ExtraPart.css'

const ExtraPart = () => {
    return (
        <div>
            <section className="last-class">
                <div>
                    <h1 className="practice">practice! <span>practice!</span> <span className="Developer">practice!</span> </h1>
                </div>
                <div className="without-limits parent ">
                    <div>
                        <img className=" practice-img" src={logo} alt="" srcset="" />
                    </div>
                    <div className="header-style2">
                        <h2>Importance of Practices</h2>
                        <p className="para">Practice makes a person better. Practice makes a person perfect. You have to practice all the time. No one can learn anything easily without practice. Through practice one can improve oneself. So there is no alternative to practice.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExtraPart;