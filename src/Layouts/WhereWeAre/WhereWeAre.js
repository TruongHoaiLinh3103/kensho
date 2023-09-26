import React from 'react';
import "../../Style/whereweare.css";
const WhereWeAre = () => {
    return (
        <div className='WhereWeAre'>
            <div className='WhereWeAre-body maxWidth1400px'>
                <div className='WhereWeAre-body_item'>
                    <img src='	https://kensho.com/asset.1fa42575a4cc25c8a2ea.jpg' alt=''/>
                </div>
                <div className='WhereWeAre-body_item'>
                    <div className='WhereWeAre-body_item_detail'>
                        <h3>WHERE WE ARE</h3>
                        <h2>Kensho is headquartered in Harvard Square in Cambridge, MA.</h2>
                        <h4>We also have offices in New York City and Washington, DC. Take a <a href='https://vimeo.com/760051398'>virtual tour</a> of our beautiful Cambridge office</h4>
                        <p>Kensho was acquired by S&P Global in 2018, and continues to operate independently, retaining its distinct brand, culture and technology stack.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhereWeAre;