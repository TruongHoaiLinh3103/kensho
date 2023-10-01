import React from 'react';
import "../../Style/bhsolutions.css";
import {BHSOLUTION} from "../../Story/BHSOLUTION";
import useFetchAOS from '../../Utils/useFetchAOS';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
const BoxheaderSolutons = () => {
    useFetchAOS();
    return (
        <Router>
            <div className='BoxheaderSolutons'>
            <Switch>
                <Route path="/scribe">
                    {BHSOLUTION.map((item) => {
                        return(
                            item.id === 1 &&
                            <div key={item.id}>
                                <img src={item.background} alt='' className='BoxheaderSolutons-background'/>
                                <div className='BoxheaderSolutons-box'>
                                    <img src={item.img} alt='' data-aos="fade-up"/>
                                    <p data-aos="fade-up">{item.pra}</p>
                                    <button data-aos="fade-up">Get Started</button>
                                </div>
                            </div>
                        )
                    })}
                </Route>
                <Route path="/classify">
                    {BHSOLUTION.map((item) => {
                        return(
                            item.id === 3 &&
                            <div key={item.id}>
                                <img src={item.background} alt='' className='BoxheaderSolutons-background'/>
                                <div className='BoxheaderSolutons-box'>
                                    <img data-aos="fade-up" src={item.img} alt=''/>
                                    <p data-aos="fade-up">{item.pra}</p>
                                    <button data-aos="fade-up">Get Started</button>
                                </div>
                            </div>
                        )
                    })}
                </Route>
                <Route path="/extract">
                    {BHSOLUTION.map((item) => {
                        return(
                            item.id === 4 &&
                            <div key={item.id}>
                                <img src={item.background} alt='' className='BoxheaderSolutons-background'/>
                                <div className='BoxheaderSolutons-box'>
                                    <img data-aos="fade-up" src={item.img} alt=''/>
                                    <p data-aos="fade-up">{item.pra}</p>
                                    <button data-aos="fade-up">Get Started</button>
                                </div>
                            </div>
                        )
                    })}
                </Route>
                <Route path="/nerd">
                    {BHSOLUTION.map((item) => {
                        return(
                            item.id === 2 &&
                            <div key={item.id}>
                                <img src={item.background} alt='' className='BoxheaderSolutons-background'/>
                                <div className='BoxheaderSolutons-box'>
                                    <img data-aos="fade-up" src={item.img} alt=''/>
                                    <p data-aos="fade-up">{item.pra}</p>
                                    <button data-aos="fade-up">Get Started</button>
                                </div>
                            </div>
                        )
                    })}
                </Route>
            </Switch>
            </div>
        </Router>
    );
};

export default BoxheaderSolutons;