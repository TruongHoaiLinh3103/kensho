import React from 'react';
import "../../Style/bythenumber.css";
import useFetchAOS from '../../Utils/useFetchAOS';
const BytheNumber = () => {
    useFetchAOS();
    return (
        <div className='BytheNumber maxWidth1400px'>
            <div className='BytheNumber-box'>
                <div className='BytheNumber-item'>
                    <img data-aos="zoom-out" src='https://kensho.com/asset.b120c5b08d6c161270a5.jpg' alt=''/>
                </div>
                <div className='BytheNumber-item'>
                    <h3 data-aos="fade-up">INNOVATION FROM KENSHO NLP</h3>
                    <p data-aos="fade-up">Kensho Classify provides a superior, tailored product for your toughest classification use cases.</p>
                </div>
            </div>
            <div className='BytheNumber-box'>
                <h3 data-aos="fade-up">BY THE NUMBERS</h3>
                <h2 data-aos="fade-up">Superior custom concept creation</h2>
                <div className='BytheNumber-box_container'>
                    <div className='BytheNumber-box_item' data-aos="fade-left">
                        <h1>≥10%</h1>
                        <p>≥10% Better prediction quality (F1 score)</p>
                    </div>
                    <div className='BytheNumber-box_item' data-aos="fade-left">
                        <h1>8X</h1>
                        <p>Faster concept training time</p>
                    </div>
                    <div className='BytheNumber-box_item' data-aos="fade-left">
                        <h1>2X</h1>
                        <p>Faster concept annotation time</p>
                    </div>
                    <div className='BytheNumber-box_item' data-aos="fade-left">
                        <h1>1M</h1>
                        <p>Character API request capacity</p>
                    </div>
                    <div className='BytheNumber-box_item' data-aos="fade-left">
                        <h1>30</h1>
                        <p>Only 30 text excerpts (sentence or more) needed for a custom concept</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BytheNumber;