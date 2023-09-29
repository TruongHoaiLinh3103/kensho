import React from 'react';
import "../../Style/statuslak.css";
import useFetchAOS from '../../Utils/useFetchAOS';
const StatusLAK = () => {
    useFetchAOS();
    return (
        <div className='StatusLAK'>
            <div className='maxWidth1400px StatusLAK-body'>
                <h3 data-aos="fade-up">REASONS TO JOIN</h3>
                <p data-aos="fade-up">At Kensho, you have the opportunity to benefit from the collaboration and innovation of a startup environment while also leveraging the resources of one of the world’s largest and most successful financial institutions, S&P Global.</p>
                <p data-aos="fade-up">Kensho acts as S&P’s innovation and transformation hub, enabling S&P and its clients to use information more intelligently and effectively. Here, you have the opportunity to create impactful, scalable contributions that have the potential to transform the way the world thinks about data.</p>
                <p data-aos="fade-up">You get to work with a diverse and inclusive group of curious, highly accomplished engineers and business professionals who value collaboration, curiosity and mentorship at all levels. At Kensho, swinging for the fences is considered a team sport, and every Kenshin’s unique perspective and experiences are valued. You will never be “just a number” at Kensho.</p>
                <button data-aos="fade-up">If this sounds exciting to you, come join us!</button>
            </div>
        </div>
    );
};

export default StatusLAK;