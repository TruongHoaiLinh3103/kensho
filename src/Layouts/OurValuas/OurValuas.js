import React from 'react';
import "../../Style/ourvaluas.css";
import { OURVALUES } from "../../Story/OURVALUES";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useFetchAOS from '../../Utils/useFetchAOS';
const OurValuas = () => {
    useFetchAOS();
    const history = useHistory();
    const nextcareersCulture = () => {
        history.push("/lifeatkensho#Culture");
    }
    return (
        <div className='OurValuas'>
            <div className='OurValuas-body maxWidth1400px'>
                <h3 data-aos="fade-up">OUR VALUES</h3>
                <div className='OurValuas-body_box'>
                    <div className='OurValuas-body_box_item'>
                        <h4 data-aos="fade-right">We insist on action bias and minimizing unhelpful hierarchy and unnecessary process.</h4>
                    </div>
                    <div className='OurValuas-body_box_item'>
                        <p data-aos="fade-left">We collaborate to understand our teammates’ diverse perspectives to solve hard problems together. We dedicate work time and resources to explore new ideas and to learn new things. We produce technology that is scalable, robust, and useful. We communicate openly, honestly, efficiently, and with kindness for one another.</p>
                    </div>
                </div>
                <div className='OurValuas-body_container'>
                    <h2 data-aos="fade-up">Our five core values are:</h2>
                    <div className='OurValuas-body_container_box'>
                        {OURVALUES.map((item) => {
                            return(
                                <div className='OurValuas-body_container_box_item' key={item.id} data-aos="fade-up">
                                    <img src={item.img} alt=''/>
                                    <h4>{item.title}</h4>
                                    <p>{item.pra}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='OurValuas-body_container_btn'>
                        <button onClick={() => nextcareersCulture()} data-aos="fade-down">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurValuas;