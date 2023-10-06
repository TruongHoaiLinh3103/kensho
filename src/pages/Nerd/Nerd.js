import React from 'react';
import BoxheaderSolutons from '../../Components/BoxheaderSolutons/BoxheaderSolutons';
import AboutSolutions from '../../Components/AboutSolutions/AboutSolutions';
import Entities from '../../Layouts/Entities/Entities';
import Questions from '../../Components/Questions/Questions';
import OurValuas from '../../Layouts/OurValuas/OurValuas';
const Nerd = () => {
    return (
        <div>
            <BoxheaderSolutons/>
            <AboutSolutions/>
            <Entities/>
            <OurValuas/>
            <Questions/>
        </div>
    );
};

export default Nerd;