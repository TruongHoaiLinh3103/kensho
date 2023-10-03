import React from 'react';
import "../../Style/benefitsandperks.css";
import { BENEFITSANDPERKS } from "../../Story/BENEFITSANDPERKS";
import useFetchAOS from '../../Utils/useFetchAOS';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const BenefitsAndPerks = () => {
    useFetchAOS();
    const history = useHistory();
    const nextBenefits = () => {
        history.push("/benefits")
    }
    return (
        <div className='BenefitsAndPerks'>
            <div className='BenefitsAndPerks-body maxWidth1400px'>
                <h3 data-aos="fade-up">BENEFITS & PERKS</h3>
                <div className='BenefitsAndPerks-body_box'>
                    {BENEFITSANDPERKS.map((item) => {
                        return(
                            <div className='BenefitsAndPerks-body_box_item' key={item.id} data-aos="fade-up">
                                <img src={item.img} alt=''/>
                                <h4>{item.title}</h4>
                                <p>{item.pra}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='BenefitsAndPerks-body-btn'>
                    <button data-aos="fade-up" onClick={() => nextBenefits()}>See more on our Benefits page</button>
                </div>
            </div>
        </div>
    );
};

export default BenefitsAndPerks;