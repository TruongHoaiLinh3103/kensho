import React from 'react';
import Boxhearder from '../../Components/Boxhearder/Boxhearder';
import Aboutus from '../../Components/Aboutus/Aboutus';
import StatusLAK from '../../Layouts/StatusLAK/StatusLAK';
import Culture from '../../Layouts/Culture/Culture';
import KenshoDiversity from '../../Layouts/KenshoDiversity/KenshoDiversity';
import Picture from '../../Layouts/Picture/Picture';
import BenefitsAndPerks from '../../Layouts/BenefitsAndPerks/BenefitsAndPerks';
const LifeatKensho = () => {
    return (
        <div>
            <Boxhearder/>
            <Aboutus/>
            <StatusLAK/>
            <Culture/>
            <KenshoDiversity/>
            <Picture/>
            <BenefitsAndPerks/>
        </div>
    );
};

export default LifeatKensho;