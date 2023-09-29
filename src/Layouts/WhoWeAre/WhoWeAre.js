import React from 'react';
import "../../Style/whoweare.css";
import useFetchAOS from '../../Utils/useFetchAOS';
const WhoWeAre = () => {
    useFetchAOS();
    return (
        <div className="WhoWeAre">
            <div className='WhoWeAre-body' data-aos="fade-left">
                <div className='WhoWeAre-body_item'>
                    <h3>WHO WE ARE</h3>
                    <h2>Driving Essential Intelligence Through AI & Machine Learning</h2>
                    <h5>Kensho is the AI and Innovation Hub for S&P Global. We develop cutting-edge technologies that transform businesses.</h5>
                    <p>By pairing the latest advances in machine learning with the unparalleled breadth and depth of data at S&P Global, Kensho gives customers comprehensive, timely, actionable insights for making decisions with conviction.</p>
                </div>
            </div>
            <div className='WhoWeAre-body' data-aos="fade-right">
                <img src='https://kensho.com/asset.3a0e3649b8f29f2fcdee.jpg' alt=''/>
            </div>
        </div>
    );
};

export default WhoWeAre;