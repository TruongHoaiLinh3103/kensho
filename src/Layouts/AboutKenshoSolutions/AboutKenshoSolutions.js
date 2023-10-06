import React from 'react';
import "../../Style/aboutkenshosolutions.css";
import useFetchAOS from '../../Utils/useFetchAOS';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
const AboutKenshoSolutions = () => {
    useFetchAOS();
    return (
        <Router>
            <Switch>
            <div className='AboutKenshoSolutions'>
                <Route path="/solutions">
                    <div className='maxWidth1200px AboutKenshoSolutions-body'>
                        <h3 data-aos="fade-up">About Kensho Solutions</h3>
                        <p data-aos="fade-up">Kensho pairs the latest techniques in machine learning with the unparalleled breadth and depth of data at S&P Global to give customers comprehensive, timely, actionable insights, empowering them to make decisions with conviction.</p>
                        <p data-aos="fade-up">The world currently has more than a billion knowledge workers spanning hundreds of industries, and those workers deal with a massive uninterrupted flow of unstructured data requiring highly time-intensive manual processing. Workers are overwhelmed and miss insights.</p>
                        <p data-aos="fade-up">Kensho solves this problem by building foundational tools that unlock the hard-to-get data and insights organizations and individuals need to make decisions with conviction. Users gain access to timely insights using our ML Toolkit—AI-driven software that extracts and enriches meaning from complex data—to make data more discoverable, collaborative, and useful.</p>
                        <p data-aos="fade-up">With Kensho Solutions, knowledge workers quickly access the enterprise data they need and analyze, transform and shape it with our suite of tools, unlocking insights in hard-to-get data.</p>
                    </div>
                </Route>
                <Route path="/impact">
                    <div className='maxWidth1200px AboutKenshoSolutions-body'>
                        <h3 data-aos="fade-up">HISTORY OF TEAM IMPACT</h3>
                        <p data-aos="fade-up">Kensho’s Team Impact was founded in 2019 based on employee feedback in our annual company survey. The message was clear: Kenshins wanted to do more and have a bigger impact in their communities. Contributing to holiday gift drives or helping to build houses was great but didn’t really use our skills. Kensho has one of the best teams in the worlds of data, ML and software engineering, and it was clear that we could have a much larger impact by putting down the hammers and picking up our keyboards. Our executive team listened to what employees were saying and supported the efforts whole-heartedly.</p>
                        <p data-aos="fade-up">Since its founding, Team Impact has worked on a wide range of projects, from targeted, one-day projects to longer-term, ongoing partnerships and initiatives. The team has hosted biannual Impactathon days, where employees from across the company contribute a day of their time to a community project.</p>
                        <p data-aos="fade-up">The team takes a grassroots approach. All of our projects originate from employees seeing an opportunity in their communities and finding a way to help—with support from other Kenshins.</p>
                        <p data-aos="fade-up">Today, the three working groups meet regularly to discuss plans and cowork on projects, and “help wanted” notices are posted in the company newsletter and Slack channels when projects need a volunteer.</p>
                    </div>
                </Route>
            </div>
            </Switch>
        </Router>
    );
};

export default AboutKenshoSolutions;