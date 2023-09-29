import React from 'react';
import "../../Style/ourproduct.css";
import useFetchAOS from '../../Utils/useFetchAOS';
const OurProduct = () => {
    useFetchAOS();
    return (
        <div className='OurProduct'>
            <div className='maxWidth1200px OurProduct-body'>
                <h3 data-aos="fade-up">OUR PRODUCTS</h3>
                <div className='OurProduct-body_box'>
                    <h4 data-aos="fade-right">Kensho’s AI and Machine Learning capabilities structure the world’s data.</h4>
                    <h5 data-aos="fade-left">Kensho’s world-class solutions discover, extract, link and enrich unstructured data, creating value for users at all levels and roles in an organization.</h5>
                </div>
            </div>
        </div>
    );
};

export default OurProduct;