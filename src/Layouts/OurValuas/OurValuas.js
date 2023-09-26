import React from 'react';
import "../../Style/ourvaluas.css";
import { OURVALUES } from "../../Story/OURVALUES";
const OurValuas = () => {
    return (
        <div className='OurValuas'>
            <div className='OurValuas-body maxWidth1400px'>
                <h3>OUR VALUES</h3>
                <div className='OurValuas-body_box'>
                    <div className='OurValuas-body_box_item'>
                        <h4>We insist on action bias and minimizing unhelpful hierarchy and unnecessary process.</h4>
                    </div>
                    <div className='OurValuas-body_box_item'>
                        <p>We collaborate to understand our teammates’ diverse perspectives to solve hard problems together. We dedicate work time and resources to explore new ideas and to learn new things. We produce technology that is scalable, robust, and useful. We communicate openly, honestly, efficiently, and with kindness for one another.</p>
                    </div>
                </div>
                <div className='OurValuas-body_container'>
                    <h2>Our five core values are:</h2>
                    <div className='OurValuas-body_container_box'>
                        {OURVALUES.map((item) => {
                            return(
                                <div className='OurValuas-body_container_box_item' key={item.id}>
                                    <img src={item.img} alt=''/>
                                    <h4>{item.title}</h4>
                                    <p>{item.pra}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='OurValuas-body_container_btn'>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurValuas;