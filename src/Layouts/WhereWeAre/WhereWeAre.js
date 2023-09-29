import React from 'react';
import "../../Style/whereweare.css";
import useFetchAOS from '../../Utils/useFetchAOS';
const WhereWeAre = () => {
    useFetchAOS();
    return (
        <div className='WhereWeAre'>
            <div className='WhereWeAre-body maxWidth1400px'>
                <div className='WhereWeAre-body_item'>
                    <img src='	https://kensho.com/asset.1fa42575a4cc25c8a2ea.jpg' alt='' data-aos="zoom-in-up"/>
                </div>
                <div className='WhereWeAre-body_item'>
                    <div className='WhereWeAre-body_item_detail'>
                        <h3 data-aos="fade-up">WHERE WE ARE</h3>
                        <h2 data-aos="fade-up">Kensho is headquartered in Harvard Square in Cambridge, MA.</h2>
                        <h4 data-aos="fade-up">We also have offices in New York City and Washington, DC. Take a <a href='https://vimeo.com/760051398'>virtual tour</a> of our beautiful Cambridge office</h4>
                        <p data-aos="fade-up">Kensho was acquired by S&P Global in 2018, and continues to operate independently, retaining its distinct brand, culture and technology stack.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhereWeAre;