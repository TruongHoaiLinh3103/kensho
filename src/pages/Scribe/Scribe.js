import React from 'react';
import BoxheaderSolutons from '../../Components/BoxheaderSolutons/BoxheaderSolutons';
import Transcriptions from '../../Layouts/Transcriptions/Transcriptions';
import AboutSolutions from '../../Components/AboutSolutions/AboutSolutions';
import OurValuas from '../../Layouts/OurValuas/OurValuas';
import AboutScribe from '../../Layouts/AboutScribe/AboutScribe';
const Scribe = () => {
    return (
        <div>
            <BoxheaderSolutons/>
            <Transcriptions/>
            <AboutSolutions/>
            <OurValuas/>
            <AboutScribe/>
        </div>
    );
};

export default Scribe;