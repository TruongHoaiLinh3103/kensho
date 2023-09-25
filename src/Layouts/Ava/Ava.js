import React from 'react';
import "../../Style/ava.css";
import { AVAILABLEPOSITIONS } from "../../Story/AVAILABLEPOSITIONS";
const Ava = () => {
    return (
        <div className='Ava'>
            <div className='maxWidth1400px Ava-body'>
                <h3>AVAILABLE POSITIONS</h3>
                <div className='Ava-body_box'>
                    {AVAILABLEPOSITIONS.map((item) => {
                        return(
                            <div className='Ava-body_box_item' key={item.id}>
                                <h4>{item.title}</h4>
                                <p>{item.role}</p>
                                <div className='Ava-body_box_item_btn'>
                                    <button>{item.link}</button>
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