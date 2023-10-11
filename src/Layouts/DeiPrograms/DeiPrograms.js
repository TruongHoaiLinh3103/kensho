import React from 'react';
import "../../Style/deiprograms.css";
import { DEIPROGRAMS } from "../../Story/DEIPROGRAMS";
import useFetchAOS from '../../Utils/useFetchAOS';
const DeiPrograms = () => {
    useFetchAOS();
    return (
        <div className='DeiPrograms'>
            <div className='DeiPrograms-body maxWidth1400px'>
                <h3 data-aos="fade-up">DEI PROGRAMS & INITIATIVES</h3>
                <p className='DeiPrograms-body_p' data-aos="fade-up">DEI at Kensho is dynamic and evolving. Below are just a sample of the programs we sponsor.</p>
                <div className='DeiPrograms-body_box'>
                    {DEIPROGRAMS.map((item) => {
                        return(
                            <div className='DeiPrograms-body_item' key={item.id} data-aos="fade-up">
                                <img src={item.img} alt=''/>
                                <h4>{item.title}</h4>
                                <p>{item.p}</p>
                                <p>{item.p2}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default DeiPrograms;