import React from 'react';
import "../../Style/bythenumber.css";
const BytheNumber = () => {
    return (
        <div className='BytheNumber maxWidth1400px'>
            <div className='BytheNumber-box'>
                <div className='BytheNumber-item'>
                    <img src='https://kensho.com/asset.b120c5b08d6c161270a5.jpg' alt=''/>
                </div>
                <div className='BytheNumber-item'>
                    <h3>INNOVATION FROM KENSHO NLP</h3>
                    <p>Kensho Classify provides a superior, tailored product for your toughest classification use cases.</p>
                </div>
            </div>
            <div className='BytheNumber-box'>
                <h3>BY THE NUMBERS</h3>
                <h2>Superior custom concept creation</h2>
                <div className='BytheNumber-box_container'>
                    <div className='BytheNumber-box_item'>
                        <h1>≥10%</h1>
                        <p>≥10% Better prediction quality (F1 score)</p>
                    </div>
                    <div className='BytheNumber-box_item'>
                        <h1>8X</h1>
                        <p>Faster concept training time</p>
                    </div>
                    <div className='BytheNumber-box_item'>
                        <h1>2X</h1>
                        <p>Faster concept annotation time</p>
                    </div>
                    <div className='BytheNumber-box_item'>
                        <h1>1M</h1>
                        <p>Character API request capacity</p>
                    </div>
                    <div className='BytheNumber-box_item'>
                        <h1>30</h1>
                        <p>Only 30 text excerpts (sentence or more) needed for a custom concept</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BytheNumber;