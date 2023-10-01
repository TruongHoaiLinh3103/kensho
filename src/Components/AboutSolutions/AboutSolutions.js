import React from 'react';
import "../../Style/aboutsolutions.css";
import {
    HashRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { ABOUTSOLUTIONS } from "../../Story/ABOUTSOLUTIONS";
const AboutSolutions = () => {
    return (
        <Router>
            <Switch>
                <Route path="/scribe">
                    {ABOUTSOLUTIONS.map((item) => {
                        return(
                            item.id === 1 &&
                            <div className='AboutSolutions' key={item.id}>
                                <div className='AboutSolutions-item' style={{color: "black"}}>
                                    <h3>{item.title}</h3>
                                    <h2>{item.h3}</h2>
                                    <p>{item.p}</p>
                                    <ul>
                                        <li>{item.lione}</li>
                                        <li>{item.litwo}</li>
                                        <li>{item.lithree}</li>
                                        <li>{item.lifour}</li>
                                    </ul>
                                    <button>Talk to us <i className="fa-solid fa-angle-right"></i></button>
                                </div>
                                <div className='AboutSolutions-item'></div>
                            </div>
                        )
                    })}
                </Route>
                <Route path="/classify">
                    {ABOUTSOLUTIONS.map((item) => {
                        return(
                            item.id === 3 &&
                            <div className='AboutSolutions' key={item.id}>
                                <div className='AboutSolutions-item' style={{backgroundColor: "var(--my-color", color:"white"}}>
                                    <h3>{item.title}</h3>
                                    <h2>{item.h3}</h2>
                                    <p>{item.p}</p>
                                </div>
                                <div className='AboutSolutions-item'></div>
                            </div>
                        )
                    })}
                </Route>
                <Route path="/extract">
                    {ABOUTSOLUTIONS.map((item) => {
                        return(
                            item.id === 4 &&
                            <div className='AboutSolutions' key={item.id}>
                                <div className='AboutSolutions-item' style={{backgroundColor: "var(--my-color", color:"white"}}>
                                    <h3>{item.title}</h3>
                                    <h2>{item.h3}</h2>
                                    <p>{item.p}</p>
                                    <p>{item.p2}</p>
                                </div>
                                <div className='AboutSolutions-item'></div>
                            </div>
                        )
                    })}
                </Route>
                <Route path="/nerd">
                    {ABOUTSOLUTIONS.map((item) => {
                        return(
                            item.id === 2 &&
                            <div className='AboutSolutions' key={item.id}>
                                <div className='AboutSolutions-item' style={{backgroundColor: "var(--my-color", color:"white"}}>
                                    <h3>{item.title}</h3>
                                    <h2>{item.h3}</h2>
                                    <p>{item.p}</p>
                                </div>
                                <div className='AboutSolutions-item'></div>
                            </div>
                        )
                    })}
                </Route>
            </Switch>
        </Router>
    );
};

export default AboutSolutions;