import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import {BOXHEADER} from "../../Story/BOXHEADER";
import '../../Style/boxhearder.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Boxhearder = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing : "ease-in"
        })
    },[])
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    {BOXHEADER.map((item) => {
                        return(
                            item.id === 1 &&
                            <div className='Boxhearder Boxhearder_home' key={item.id}>
                                <img src={item.img} alt=''/>
                                <h1 data-aos="fade-up">{item.title}</h1>
                                <h3 data-aos="fade-up">EXPLORE</h3>
                                <button data-aos="fade-up"><i className="fa-solid fa-arrow-down"></i></button>
                                <p data-aos="fade-right">The overwhelming majority of the world’s data has no standardized format.</p>
                                <p data-aos="fade-left">Without structure, critical insights are hidden, and users are unable to make data-driven decisions.</p>
                            </div>
                        )
                    })}
                </Route>

                <Route path="/solutions">
                    {BOXHEADER.map((item) => {
                        return(
                            item.id === 2 &&
                            <div className='Boxhearder' key={item.id}>
                                <img src={item.img} alt=''/>
                                <h1 data-aos="fade-up">{item.title}</h1>
                            </div>
                        )
                    })}
                </Route>

                <Route path="/about">
                    {BOXHEADER.map((item) => {
                        return(
                            item.id === 3 &&
                            <div className='Boxhearder' key={item.id}>
                                <img src={item.img} alt=''/>
                                <h1 data-aos="fade-up">{item.title}</h1>
                            </div>
                        )
                    })}
                </Route>

                <Route path="/lifeatkensho">
                    {BOXHEADER.map((item) => {
                        return(
                            item.id === 4 &&
                            <div className='Boxhearder' key={item.id}>
                                <img src={item.img} alt=''/>
                                <h1 data-aos="fade-up">{item.title}</h1>
                            </div>
                        )
                    })}
                </Route>

                <Route path="/contactus">
                    {BOXHEADER.map((item) => {
                        return(
                            item.id === 5 &&
                            <div className='Boxhearder' key={item.id}>
                                <img src={item.img} alt=''/>
                                <h1 data-aos="fade-up">{item.title}</h1>
                            </div>
                        )
                    })}
                </Route>
            </Switch>
        </Router>
    );
};

export default Boxhearder;