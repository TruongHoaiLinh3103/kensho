import React from 'react';
import BoxheaderSolutons from '../../Components/BoxheaderSolutons/BoxheaderSolutons';
import AboutSolutions from '../../Components/AboutSolutions/AboutSolutions';
import Questions from '../../Components/Questions/Questions';
import OurValuas from '../../Layouts/OurValuas/OurValuas';
import BytheNumber from '../../Layouts/BytheNumber/BytheNumber';
const Classify = () => {
    return (
        <div>
            <BoxheaderSolutons/>
            <AboutSolutions/>
            <BytheNumber/>
            <OurValuas/>
            <Questions/>
        </div>
    );
};

export default Classify;