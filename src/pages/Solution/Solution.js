import React from 'react';
import Boxhearder from '../../Components/Boxhearder/Boxhearder';
import OurProduct from '../../Layouts/OurProduct/OurProduct';
import Slutiondata from '../../Layouts/SlutionData/SlutionData';
import AboutKenshoSolutions from "../../Layouts/AboutKenshoSolutions/AboutKenshoSolutions";

const Solution = () => {
    return (
        <div>
            <Boxhearder/>
            <OurProduct/>
            <Slutiondata/>
            <AboutKenshoSolutions/>
        </div>
    );
};

export default Solution;