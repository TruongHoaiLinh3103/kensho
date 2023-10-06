import React from 'react';
import BoxheaderSolutons from '../../Components/BoxheaderSolutons/BoxheaderSolutons';
import AboutSolutions from '../../Components/AboutSolutions/AboutSolutions';
import Seeforyou from '../../Layouts/Seeforyou/Seeforyou';
import ExtractData from '../../Layouts/ExtractData/ExtractData';
import OurValuas from '../../Layouts/OurValuas/OurValuas';
import WhatWeDo from '../../Layouts/WhatWeDo/WhatWeDo';
import Questions from '../../Components/Questions/Questions';
const Extract = () => {
    return (
        <div>
            <BoxheaderSolutons/>
            <AboutSolutions/>
            <Seeforyou/>
            <ExtractData/>
            <OurValuas/>
            <WhatWeDo/>
            <Questions/>
        </div>
    );
};

export default Extract;