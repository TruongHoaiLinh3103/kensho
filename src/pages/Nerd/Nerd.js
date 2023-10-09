import React from 'react';
import BoxheaderSolutons from '../../Components/BoxheaderSolutons/BoxheaderSolutons';
import AboutSolutions from '../../Components/AboutSolutions/AboutSolutions';
import Entities from '../../Layouts/Entities/Entities';
import Questions from '../../Components/Questions/Questions';
import OurValuas from '../../Layouts/OurValuas/OurValuas';
import See from '../../Layouts/See/See';
import WhereWeAre from '../../Layouts/WhereWeAre/WhereWeAre';
const Nerd = () => {
    return (
        <div>
            <BoxheaderSolutons/>
            <AboutSolutions/>
            <Entities/>
            <See/>
            <OurValuas/>
            <WhereWeAre/>
            <Questions/>
        </div>
    );
};

export default Nerd;