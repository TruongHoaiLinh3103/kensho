import React from 'react';
import "../../Style/oproducts.css";
import {SOLUTIONDATA} from "../../Story/SOLUTIONDATA";
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const OProducts = () => {
    const history = useHistory();
    const nextSolution = () => {
        history.push("/solutions");
    }
    const nextFreeTrial = () => {
        history.push("/freetrial");
    }
    const nextPage = (page) => {
        history.push(page);
    }
    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing : "ease-in"
        })
    }, [])
    return (
        <div className='OProducts'>
            <div className='maxWidth1400px OProducts-body'>
                <h3 data-aos='fade-up'>OUR PRODUCTS</h3>
                <div className='OProducts-body_p'>
                    <h4 data-aos='fade-up'>Scale & advance your business with our AI solutions</h4>
                    <p data-aos='fade-up'>We provide solutions for audio transcription, structuring and enriching text documents, connecting data to external knowledge sources and more.</p>
                </div>
                <div className='OProducts-body_data' data-aos='fade-up'>
                    {SOLUTIONDATA.map((item) => {
                        return(
                            item.id <= 3 &&
                            <div className='OProducts-body_data_item' data-aos='fade-up' key={item.id}>
                                <h5>{item.title}</h5>
                                <h3>{item.h3}</h3>
                                <p>{item.pTwo}</p>
                                <ul>
                                    <li><p>{item.lione}</p></li>
                                    <li><p>{item.litwo}</p></li>
                                    <li><p>{item.lithree}</p></li>
                                </ul>
                                <div className='OProducts-body_data_item_btn'>
                                    <button onClick={() => nextFreeTrial()} data-aos='fade-up'>Free Trial</button>
                                    <button data-aos='fade-up' onClick={() => nextPage(item.page)}>Learn more</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button className='OProducts-body_btn' onClick={() => nextSolution()} data-aos='fade-right'>View all solutions <span>></span> </button>
            </div>
        </div>
    );
};

export default OProducts;