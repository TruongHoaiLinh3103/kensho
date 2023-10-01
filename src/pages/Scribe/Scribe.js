import React from 'react';
import BoxheaderSolutons from '../../Components/BoxheaderSolutons/BoxheaderSolutons';
import Transcriptions from '../../Layouts/Transcriptions/Transcriptions';
import AboutSolutions from '../../Components/AboutSolutions/AboutSolutions';
const Scribe = () => {
    return (
        <div>
            <BoxheaderSolutons/>
            <Transcriptions/>
            <AboutSolutions/>
        </div>
    );
};

export default Scribe;