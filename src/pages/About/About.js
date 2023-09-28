import React from 'react';
import Boxhearder from '../../Components/Boxhearder/Boxhearder';
import WhoWeAre from '../../Layouts/WhoWeAre/WhoWeAre';
import WhatWeDo from '../../Layouts/WhatWeDo/WhatWeDo';
import WhereWeAre from '../../Layouts/WhereWeAre/WhereWeAre';
import OurValuas from '../../Layouts/OurValuas/OurValuas';
import LeardershipTeam from '../../Layouts/LeardershipTeam/LeardershipTeam';
import Diversity from '../../Layouts/Diversity/Diversity';
import KenshoAL from '../../Layouts/KenshoAL/KenshoAL';
const About = () => {
    return (
        <div>
            <Boxhearder/>
            <WhoWeAre/>
            <WhatWeDo/>
            <WhereWeAre/>
            <OurValuas/>
            <LeardershipTeam/>
            <Diversity/>
            <KenshoAL/>
        </div>
    );
};

export default About;