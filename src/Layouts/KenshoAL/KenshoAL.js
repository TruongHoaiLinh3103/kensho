import React from 'react';
import "../../Style/kenshoal.css";
import { KENSHOAL } from "../../Story/KENSHOAL";
const KenshoAL = () => {
    return (
        <div className='KenshoAL'>
            <div className='maxWidth1400px KenshoAL-body'>
                <div className='KenshoAL-body_box'>
                    <h1>Kensho AI Lab</h1>
                    <p>Kensho’s AI Lab, located in our Harvard Square headquarters, is a state-of-the-art facility for hosting meetups, tech talks and hackathons for AI and machine learning enthusiasts, software developers, and the local tech community.</p>
                    <div className='KenshoAL-body_box_ctn'>
                        {KENSHOAL.map((item) => {
                            return(
                                <img src={item.img} alt='' key={item.id}/>
                            )
                        })}
                    </div>
                </div>
                <div className='KenshoAL-body_teamImpact'>
                    <h3>TEAM IMPACT</h3>
                    <div className='KenshoAL-body_teamImpact_detail'>
                        <h4>Team Impact takes the lead on Kensho‘s community involvement and skills-based volunteer efforts.</h4>
                        <p>The cross-functional team currently has three working groups – Data Journalism, Environmental Impact and Educational Equity.</p>
                        <p>These working groups have tackled projects large and small with a range of external partners and an eye towards initiatives that allow Kenshins to use their in-demand skills in data science, machine learning and software engineering and more to have maximum positive impact in their communities.</p>
                        <div className='teamImpact_detail_btn'>
                            <button>Read our Team Impact page</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KenshoAL;