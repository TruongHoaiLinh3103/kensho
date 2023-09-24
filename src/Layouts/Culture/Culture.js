import React from 'react';
import "../../Style/culture.css";
import { CULTURE } from "../../Story/CULTURE"
const Culture = () => {
    return (
        <div className='Culture'>
            <div className='maxWidth1400px Culture-body'>
                <h3>CULTURE AT KENSHO</h3>
                <div className='Culture-body_box'>
                    {
                        CULTURE.map((item) => {
                            return(
                                <div className='Culture-body_box_item' key={item.id}>
                                    <img src={item.img} alt=''/>
                                    <h2>{item.title}</h2>
                                    <h3>{item.comment}</h3>
                                    <p>{item.pra}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Culture;