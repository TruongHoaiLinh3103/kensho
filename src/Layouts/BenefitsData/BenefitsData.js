import React from 'react';
import "../../Style/benefitsdata.css";
import { BENEFITSDATA } from '../../Story/BENEFITSDATA';
const BenefitsData = () => {
    return (
        <div className='BenefitsData'>
            <div className='BenefitsData-box maxWidth1200px'>
                {BENEFITSDATA.map((item) => {
                    return(
                        <div className='BenefitsData_item' key={item.id}>
                            <img src={item.img} alt=''/>
                            <h3>{item.title}</h3>
                            <div className='BenefitsData_item-detail'>
                                <p>{item.p}</p>
                                <ul>
                                    <li>{item.li1}</li>
                                    <li>{item.li2}</li>
                                    <li>{item.li3}</li>
                                    <li>{item.li4}</li>
                                    <li style={{
                                        display: item.li5 === "" ? "none" : ""
                                    }}>{item.li5}</li>
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default BenefitsData;