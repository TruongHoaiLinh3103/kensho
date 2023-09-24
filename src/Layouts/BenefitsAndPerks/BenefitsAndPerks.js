import React from 'react';
import "../../Style/benefitsandperks.css";
import { BENEFITSANDPERKS } from "../../Story/BENEFITSANDPERKS"
const BenefitsAndPerks = () => {
    return (
        <div className='BenefitsAndPerks'>
            <div className='BenefitsAndPerks-body maxWidth1400px'>
                <h3>BENEFITS & PERKS</h3>
                <div className='BenefitsAndPerks-body_box'>
                    {BENEFITSANDPERKS.map((item) => {
                        return(
                            <div className='BenefitsAndPerks-body_box_item' key={item.id}>
                                <img src={item.img} alt=''/>
                                <h4>{item.title}</h4>
                                <p>{item.pra}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='BenefitsAndPerks-body-btn'>
                    <button>See more on our Benefits page</button>
                </div>
            </div>
        </div>
    );
};

export default BenefitsAndPerks;