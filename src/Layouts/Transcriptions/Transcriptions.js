import React from 'react';
import "../../Style/transcriptions.css";
import useFetchAOS from '../../Utils/useFetchAOS';
const Transcriptions = () => {
    useFetchAOS();
    return (
        <div className='Transcriptions'>
            <div className='Transcriptions-body'>
                <h3 data-aos="fade-up">Transcriptions are only valuable when they’re right.</h3>
                <p data-aos="fade-up">That’s why we optimized our transcription technology to handle the complexities of messy, real-world audio for:</p>
                <div className='Transcriptions-body_box'>
                    <div className='Transcriptions-body_box_item' data-aos="fade-left">
                        <h4>NAMES & NUMBERS</h4>
                        <ul>
                            <li>Specific Numbers</li>
                            <li>Currencies</li>
                            <li>Stock Tickers</li>
                            <li>Product Names (e.g., pharmaceutical drugs and tech products)</li>
                            <li>Company Names</li>
                        </ul>
                    </div>
                    <div className='Transcriptions-body_box_item' data-aos="fade-right">
                        <h4>SPECIFIC SPEECH</h4>
                        <ul>
                            <li>Heavily Accented Speech</li>
                            <li>Multiple Speakers (speaker diarization)</li>
                            <li>Nuances of Spoken Language (including mumbling, stuttering, filler words, hesitation and self-correction)</li>
                            <li>Industry-Specific Jargon</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transcriptions;