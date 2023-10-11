import React from 'react';
import "../../Style/entities.css";
import useFetchEnti from '../../Utils/useFetchEnti';
import { useState } from 'react';
import useFetchAOS from '../../Utils/useFetchAOS';
const Entities = () => {
    useFetchAOS();
    const {number , hundredthousand, hundred} = useFetchEnti();
    const [play, setPlay] = useState(false);
    const playVideo = () =>{
        setPlay(!play)
    }
    
    return (
        <div className='Entities maxWidth1400px'>
            <p data-aos="fade-up">No other solution offers NERD’s combination of accuracy, general breadth and business and financial depth. See for yourself!</p>
            <h3 data-aos="fade-up">{number},{hundredthousand},{hundred}</h3>
            <p data-aos="fade-up"><b>…entities recogizable by NERD!</b></p>
            <div className='Entities-video' data-aos="fade-up">
                <div className='Entities-video_overview' style={{
                    display: play === true ? "none" : "flex"
                }}>
                    <h4>NERD Overview</h4>
                    <button onClick={() => playVideo()}>Play video <i className="fa-solid fa-play"></i></button>
                </div>
                {   !play ? <img src='https://static.kensho.com/home/video/nerd-pitch.jpg' alt=''/>
                    :
                    <video autoPlay onClick={() => playVideo()}>
                        <source src="https://static.kensho.com/home/video/nerd-pitch-vp9.webm" type="video/webm; codecs=&quot;vp9&quot;" />
                        <source src="https://static.kensho.com/home/video/nerd-pitch.mp4" type="video/mp4" />
                    </video>}
            </div>
        </div>
    );
};

export default Entities;