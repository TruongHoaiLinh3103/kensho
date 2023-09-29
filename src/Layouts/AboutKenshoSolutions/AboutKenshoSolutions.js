import React from 'react';
import "../../Style/aboutkenshosolutions.css";
import useFetchAOS from '../../Utils/useFetchAOS';
const AboutKenshoSolutions = () => {
    useFetchAOS();
    return (
        <div className='AboutKenshoSolutions'>
            <div className='maxWidth1200px AboutKenshoSolutions-body'>
                <h3 data-aos="fade-up">About Kensho Solutions</h3>
                <p data-aos="fade-up">Kensho pairs the latest techniques in machine learning with the unparalleled breadth and depth of data at S&P Global to give customers comprehensive, timely, actionable insights, empowering them to make decisions with conviction.</p>
                <p data-aos="fade-up">The world currently has more than a billion knowledge workers spanning hundreds of industries, and those workers deal with a massive uninterrupted flow of unstructured data requiring highly time-intensive manual processing. Workers are overwhelmed and miss insights.</p>
                <p data-aos="fade-up">Kensho solves this problem by building foundational tools that unlock the hard-to-get data and insights organizations and individuals need to make decisions with conviction. Users gain access to timely insights using our ML Toolkit—AI-driven software that extracts and enriches meaning from complex data—to make data more discoverable, collaborative, and useful.</p>
                <p data-aos="fade-up">With Kensho Solutions, knowledge workers quickly access the enterprise data they need and analyze, transform and shape it with our suite of tools, unlocking insights in hard-to-get data.</p>
            </div>
        </div>
    );
};

export default AboutKenshoSolutions;