import React from 'react';
import "../../Style/extractdata.css";
import { EXTRACTDATA } from '../../Story/EXTRACTDATA';
import useFetchAOS from '../../Utils/useFetchAOS';
const ExtractData = () => {
    useFetchAOS();
    return (
        <div className='ExtractData'>
            <div className='ExtractData-body'>
                {EXTRACTDATA.map((item) => {
                    return(
                        <div className='ExtractData-body_box maxWidth1400px' key={item.id} style={{backgroundColor: item.id === 2 ? "#fafafa" : "white"}}>
                            <h2 style={{paddingTop: item.id === 2 && "50px"}} data-aos="fade-up">{item.name}</h2>
                            <div className='ExtractData-body_container'>
                                <div className='ExtractData-body_item' data-aos="fade-up">
                                    <img src={item.img1} alt=''/>
                                    <h4>{item.title1}</h4>
                                    <p>{item.p1}</p>
                                </div>
                                <div className='ExtractData-body_item' data-aos="fade-up">
                                    <img src={item.img2} alt=''/>
                                    <h4>{item.title2}</h4>
                                    <p>{item.p2}</p>
                                </div>
                                {item.img3 === "" && item.title3 === "" && item.p3 === "" ? "" :
                                <div className='ExtractData-body_item' data-aos="fade-up">
                                    <img src={item.img3} alt=''/>
                                    <h4>{item.title3}</h4>
                                    <p>{item.p3}</p>
                                </div>}
                                {item.img4 === "" && item.title4 === "" && item.p4 === "" ? "" :
                                <div className='ExtractData-body_item' data-aos="fade-up">
                                    <img src={item.img4} alt=''/>
                                    <h4>{item.title4}</h4>
                                    <p>{item.p4}</p>
                                </div>}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default ExtractData;