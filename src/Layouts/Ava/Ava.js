import React from 'react';
import "../../Style/ava.css";
import { AVAILABLEPOSITIONS } from "../../Story/AVAILABLEPOSITIONS";
import useFetchAOS from '../../Utils/useFetchAOS';
const Ava = () => {
    useFetchAOS();
    return (
        <div className='Ava' id="Ava">
            <div className='maxWidth1400px Ava-body'>
                <h3 data-aos="fade-up">AVAILABLE POSITIONS</h3>
                <div className='Ava-body_box'>
                    {AVAILABLEPOSITIONS.map((item) => {
                        return(
                            <div className='Ava-body_box_item' key={item.id} data-aos="fade-up">
                                <h4>{item.title}</h4>
                                <p>{item.role}</p>
                                <div className='Ava-body_box_item_btn'>
                                    <button><a href='mailto:eagleremlinh@gmail.com'>{item.link}</a></button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Ava;