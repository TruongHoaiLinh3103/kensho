import React from 'react';
import "../../Style/solutiondata.css";
import { SOLUTIONDATA } from "../../Story/SOLUTIONDATA";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useFetchAOS from '../../Utils/useFetchAOS';
const Slutiondata = () => {
    useFetchAOS();
    const history = useHistory();
    const nextFreeTrial = () => {
        history.push('/freetrial')
    }
    const nextPage = (page) => {
        history.push(page);
    }
    const nextContact = () => {
        history.push("/contactus")
    }
    return (
        <div className='Slutiondata'>
            <div className='Slutiondata-body maxWidth1400px'>
                <h5 data-aos="fade-up">Whether you’re looking to use Kensho’s solutions on your own data or to leverage the unparalleled breadth, depth and accuracy of S&P Global’s sources, Kensho unlocks insights in hard-to-get-to data, making it accessible, insightful, relevant and ultimately, transformative.</h5>
                <div className='Slutiondata-body_data'>
                    {SOLUTIONDATA.map((item) => {
                        return(
                            <div className='Slutiondata-body_data_item' key={item.id} data-aos="fade-up">
                                <div className='Slutiondata-body_data_item_colum' data-aos="fade-left">
                                    <div>
                                        <h4>{item.title}</h4>
                                        <h3>{item.h3}</h3>
                                        <p><b>{item.pOne}</b></p>
                                    </div>
                                    <button onClick={() => nextPage(item.page)}>Learn More</button>
                                </div>
                                <div className='Slutiondata-body_data_item_colum' data-aos="fade-right">
                                    <p>{item.pTwo}</p>
                                    <ul>
                                        <li style={{
                                            display: !item.lione ? "none" : "",
                                        }}><p>{item.lione}</p></li>
                                        <li style={{
                                            display: !item.litwo ? "none" : "",
                                        }}><p>{item.litwo}</p></li>
                                        <li style={{
                                            display: !item.lithree ? "none" : "",
                                        }}><p>{item.lithree}</p></li>
                                        <li style={{
                                            display: !item.lifive ? "none" : "",
                                        }}><p>{item.lifive}</p></li>
                                        <li style={{
                                            display: !item.lifour ? "none" : "",
                                        }}><p>{item.lifour} <a href={item.link}>{item.aone}</a></p></li>
                                    </ul>
                                </div>
                                <div className='Slutiondata-body_data_item_colum' data-aos="fade-left">
                                    <div style={{display: "flex", flexDirection: "column"}}>
                                        <h4 className='discover-more'>Discover more</h4>
                                        <button className='btn_a'>{item.atwo}</button>
                                        <button className='btn_a' onClick={() => nextContact()}>{item.athree}</button>
                                        <button className='btn_a'>{item.afour}</button>
                                    </div>
                                    <div className='Slutiondata-body_data_item_colum-btn'>
                                        <button onClick={() => nextFreeTrial()}>Free Trial</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Slutiondata;