import React from 'react';
import "../..//Style/deipolicies.css";
import { DEIPOLICIES } from "../../Story/DEIPOLICIES";
import useFetchAOS from '../../Utils/useFetchAOS';
const DeiPolicies = () => {
    useFetchAOS();
    return (
        <div className='DeiPolicies'>
            <div className='DeiPolicies-body maxWidth1400px'>
                <h3 data-aos="fade-up">DEI POLICIES & BENEFITS</h3>
                <p data-aos="fade-up">In additon to the benefits above we also have policies to support the employment environment we want. They are Equal Employment Opportunity, Code of Business Ethics Training and Annual Unconscious Bias Training.</p>
                <div className='DeiPolicies-body_box maxWidth1200px'>
                    {DEIPOLICIES.map((item) => {
                        return(
                            <div className='DeiPolicies-body_item' key={item.id} data-aos="fade-up">
                                <img src={item.img} alt=''/>
                                <h5>{item.title}</h5>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default DeiPolicies;