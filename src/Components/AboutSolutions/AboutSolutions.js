import React from 'react';
import "../../Style/aboutsolutions.css";
import {
    HashRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { ABOUTSOLUTIONS } from "../../Story/ABOUTSOLUTIONS";
import useFetchAOS from '../../Utils/useFetchAOS';
const AboutSolutions = () => {
    useFetchAOS();
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
                                        <h3 data-aos="fade-up">{item.title}</h3>
                                        <h2 data-aos="fade-up">{item.h3}</h2>
                                        <p data-aos="fade-up">{item.p}</p>
                                        <ul>
                                            <li data-aos="fade-right">{item.lione}</li>
                                            <li data-aos="fade-right">{item.litwo}</li>
                                            <li data-aos="fade-right">{item.lithree}</li>
                                            <li data-aos="fade-right">{item.lifour}</li>
                                        </ul>
                                        <button data-aos="fade-right">Talk to us <i className="fa-solid fa-angle-right"></i></button>
                                    </div>
                                    <div className='AboutSolutions-item' style={{backgroundColor :"#d2e0df"}}>
                                        <video data-aos="fade-up" autoPlay loop muted poster="https://static.kensho.com/video/HumanIntheloop.jpg">
                                            <source src="https://static.kensho.com/video/HumanIntheloop-VP9-400k.webm" type="video/webm; codecs=&quot;vp9&quot;" />
                                        </video>
                                    </div>
                                </div>}
                                {item.id === 5 &&
                                <div className='AboutSolutions AboutSolutions-flex maxWidth1400px' key={item.id}>
                                    <div className='AboutSolutions-item' style={{color: "black"}}>
                                        <h2 data-aos="fade-up">{item.h3}</h2>
                                        <p data-aos="fade-up">{item.p}</p>
                                        <ul>
                                            <li data-aos="fade-right">{item.lione}</li>
                                            <li data-aos="fade-right">{item.litwo}</li>
                                            <li data-aos="fade-right">{item.lithree}</li>
                                        </ul>
                                        <button data-aos="fade-left">Free Trial <i className="fa-solid fa-angle-right"></i></button>
                                    </div>
                                    <div className='AboutSolutions-item' style={{backgroundColor :"#d2e0df", zIndex: "2"}}>
                                        <video data-aos="zoom-out" autoPlay muted loop poster="https://static.kensho.com/video/ScribeAI.jpg" style={{width: "1420px"}}>
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
                                    <h3 data-aos="fade-up">{item.title}</h3>
                                    <h2 data-aos="fade-up">{item.h3}</h2>
                                    <p data-aos="fade-up">{item.p}</p>
                                </div>
                                <div className='AboutSolutions-item' data-aos="fade-left">
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
                                    <h3 data-aos="fade-up">{item.title}</h3>
                                    <h2 data-aos="fade-up">{item.h3}</h2>
                                    <p data-aos="fade-up">{item.p}</p>
                                    <p data-aos="fade-up">{item.p2}</p>
                                </div>
                                <div className='AboutSolutions-item'>
                                    <img src='https://kensho.com/asset.2de3362691ec9dfd80b4.jpg' alt='' data-aos="fade-left"/>
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
                                    <h3 data-aos="fade-up">{item.title}</h3>
                                    <h2 data-aos="fade-up">{item.h3}</h2>
                                    <p data-aos="fade-up">{item.p}</p>
                                </div>
                                <div className='AboutSolutions-item'>
                                    <video data-aos="fade-left" autoPlay loop muted poster="https://static.kensho.com/video/nerd-looping-video-1.jpg" style={{width: "1450px"}}>
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