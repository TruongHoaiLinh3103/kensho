import React, { useState } from 'react';
import "../../Style/see.css";
import { SEEDATA } from '../../Story/SEEDATA';
import useFetchAOS from '../../Utils/useFetchAOS';
const See = () => {
    useFetchAOS();
    const [data, setData] = useState(1)
    const btnPage = (item) => {
        setData(item)
    }
    return (
        <div className='See'>
            <div className='See-body maxWidth1400px'>
                <h3 data-aos="fade-up">SEE FOR YOURSELF</h3>
                <div className='See-body_pra'>
                    <h2 data-aos="fade-right">See the difference between NERD and the competition in the examples below.</h2>
                    <p data-aos="fade-left">While other solutions struggles with ambiguous names, abbreviations, nicknames and the like, NERD is able to disambiguate entities and connect them to S&P Capital IQ data.</p>
                </div>
                <div className='See-body_box maxWidth1200px'>
                    <div className='See-body_navbar'>
                        {SEEDATA.map((item) => {
                            return(
                                <button data-aos="fade-right" style={{
                                    backgroundColor: data === item.id ? "var(--my-color)" : "",
                                    color: data === item.id ? "white" : "",
                                    borderRadius: data === item.id ? "5px" : ""
                                }} key={item.id} onClick={() => btnPage(item.id)}>{item.btn}</button>
                            )
                        })}
                    </div>
                    <div className='See-body_item'>
                        {SEEDATA.map((item) => {
                            return(
                                data === item.id &&
                                <div className='See-body_item_detail' key={item.id} data-aos="fade-up">
                                    <div className='detail-item'>
                                        <h4>Input Text</h4>
                                        <p>{item.input}</p>
                                    </div>
                                    <div className='detail-item'>
                                        <h4>Competition</h4>
                                        <p>{item.competition}</p>
                                    </div>
                                    <div className='detail-item'>
                                        <h4>Kensho NERD</h4>
                                        <p>{item.KenshoNERD}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default See;