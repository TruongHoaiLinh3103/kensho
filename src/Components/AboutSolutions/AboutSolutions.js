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
                            <div key={item.id}>
                                {item.id === 1 &&
                                <div className='AboutSolutions maxWidth1400px' key={item.id}>
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
                                    <div className='AboutSolutions-item' style={{backgroundColor :"#d2e0df"}}>
                                        <video autoPlay loop muted poster="https://static.kensho.com/video/HumanIntheloop.jpg">
                                            <source src="https://static.kensho.com/video/HumanIntheloop-VP9-400k.webm" type="video/webm; codecs=&quot;vp9&quot;" />
                                        </video>
                                    </div>
                                </div>}
                                {item.id === 5 &&
                                <div className='AboutSolutions maxWidth1400px' key={item.id} style={{flexDirection:"row-reverse", display:"flex"}}>
                                    <div className='AboutSolutions-item' style={{color: "black"}}>
                                        <h2>{item.h3}</h2>
                                        <p>{item.p}</p>
                                        <ul>
                                            <li>{item.lione}</li>
                                            <li>{item.litwo}</li>
                                            <li>{item.lithree}</li>
                                        </ul>
                                        <button>Free Trial <i className="fa-solid fa-angle-right"></i></button>
                                    </div>
                                    <div className='AboutSolutions-item' style={{backgroundColor :"#d2e0df", zIndex: "2"}}>
                                        <video autoPlay muted loop poster="https://static.kensho.com/video/ScribeAI.jpg" style={{width: "1420px"}}>
                                            <source src="https://static.kensho.com/video/ScribeAI-VP9-400k.webm" type="video/webm; codecs=&quot;vp9&quot;"/>
                                        </video>
                                    </div>
                                </div>}
                            </div>
                        )
                    })}
                </Route>
                <Route path="/classify">
                    {ABOUTSOLUTIONS.map((item) => {
                        return(
                            item.id === 3 &&
                            <div className='AboutSolutions maxWidth1400px' key={item.id}>
                                <div className='AboutSolutions-item' style={{backgroundColor: "var(--my-color", color:"white"}}>
                                    <h3>{item.title}</h3>
                                    <h2>{item.h3}</h2>
                                    <p>{item.p}</p>
                                </div>
                                <div className='AboutSolutions-item'>
                                    <img src='https://kensho.com/asset.d32b5c136fcfb7a01599.jpg' alt=''/>
                                </div>
                            </div>
                        )
                    })}
                </Route>
                <Route path="/extract">
                    {ABOUTSOLUTIONS.map((item) => {
                        return(
                            item.id === 4 &&
                            <div className='AboutSolutions maxWidth1400px' key={item.id}>
                                <div className='AboutSolutions-item' style={{backgroundColor: "var(--my-color", color:"white"}}>
                                    <h3>{item.title}</h3>
                                    <h2>{item.h3}</h2>
                                    <p>{item.p}</p>
                                    <p>{item.p2}</p>
                                </div>
                                <div className='AboutSolutions-item'>
                                    <img src='https://kensho.com/asset.2de3362691ec9dfd80b4.jpg' alt=''/>
                                </div>
                            </div>
                        )
                    })}
                </Route>
                <Route path="/nerd">
                    {ABOUTSOLUTIONS.map((item) => {
                        return(
                            item.id === 2 &&
                            <div className='AboutSolutions maxWidth1400px' key={item.id}>
                                <div className='AboutSolutions-item' style={{backgroundColor: "var(--my-color", color:"white"}}>
                                    <h3>{item.title}</h3>
                                    <h2>{item.h3}</h2>
                                    <p>{item.p}</p>
                                </div>
                                <div className='AboutSolutions-item'>
                                    <video autoPlay loop muted poster="https://static.kensho.com/video/nerd-looping-video-1.jpg" style={{width: "1450px"}}>
                                        <source src="https://static.kensho.com/video/nerd-looping-video-1-VP9.webm" type="video/webm; codecs=&quot;vp9&quot;" />
                                    </video>
                                </div>
                            </div>
                        )
                    })}
                </Route>
            </Switch>
        </Router>
    );
};

export default AboutSolutions;