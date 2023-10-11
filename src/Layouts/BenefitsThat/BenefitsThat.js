import React from 'react';
import "../../Style/benefitsthat.css";
import {
    HashRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import useFetchAOS from '../../Utils/useFetchAOS';
const BenefitsThat = () => {
    useFetchAOS();
    return (
        <Router>
            <Switch>
                <Route path="/benefits">
                    <div className='BenefitsThat' style={{backgroundColor: "var(--my-color)"}}>
                        <div className='BenefitsThat-body maxWidth1400px'>
                            <h3 data-aos="fade-up">BENEFITS THAT PUT EMPLOYEE WELLBEING AT THE CENTER</h3>
                            <div className='BenefitsThat-body_box'>
                                <h2 data-aos="fade-left">We want you to feel comfortable bringing your whole self to work.</h2>
                                <p data-aos="fade-right">This starts with providing best-in-class and innovative benefits to empower you to be your best self at both work and at home. With an emphasis on stability, flexibility and support -- Kensho will be with you throughout all facets of your life.</p>
                            </div>
                        </div>
                    </div>
                </Route>
                <Route path="/impact">
                    <div className='BenefitsThat'>
                        <div className='BenefitsThat-body maxWidth1400px'>
                            <h3 style={{color: "black"}} data-aos="fade-up">WHAT WE DO</h3>
                            <div className='BenefitsThat-body_box'>
                                <h2 style={{color: "black"}} data-aos="fade-right">Team Impact takes the lead on Kensho’s community involvement and skills-based volunteer efforts.</h2>
                                <p style={{color: "black"}} data-aos="fade-left">The cross-functional team currently has three working groups – Data Journalism, Environmental Impact and Educational Equity. These working groups have tackled projects large and small with a range of external partners and an eye towards initiatives that allow Kenshins to use their in-demand skills in data science, machine learning and software engineering and more to have maximum positive impact in their communities.</p>
                            </div>
                        </div>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
};

export default BenefitsThat;