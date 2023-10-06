import React from 'react';
import "../../Style/ourvaluas.css";
import { OURVALUES } from "../../Story/OURVALUES";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useFetchAOS from '../../Utils/useFetchAOS';
import { CASES } from '../../Story/CASES';
import {
HashRouter as Router,
Switch,
Route,
} from "react-router-dom";
const OurValuas = () => {
    useFetchAOS();
    const history = useHistory();
    const nextcareersCulture = () => {
        history.push("/lifeatkensho#Culture");
    }
    return (
        <Router>
            <Switch>
                <Route path="/about">
                    <div className='OurValuas'>
                        <div className='OurValuas-body maxWidth1400px'>
                            <h3 data-aos="fade-up">OUR VALUES</h3>
                            <div className='OurValuas-body_box'>
                                <div className='OurValuas-body_box_item'>
                                    <h4 data-aos="fade-right">We insist on action bias and minimizing unhelpful hierarchy and unnecessary process.</h4>
                                </div>
                                <div className='OurValuas-body_box_item'>
                                    <p data-aos="fade-left">We collaborate to understand our teammates’ diverse perspectives to solve hard problems together. We dedicate work time and resources to explore new ideas and to learn new things. We produce technology that is scalable, robust, and useful. We communicate openly, honestly, efficiently, and with kindness for one another.</p>
                                </div>
                            </div>
                            <div className='OurValuas-body_container'>
                                <h2 data-aos="fade-up">Our five core values are:</h2>
                                <div className='OurValuas-body_container_box'>
                                    {OURVALUES.map((item) => {
                                        return(
                                            <div className='OurValuas-body_container_box_item' key={item.id} data-aos="fade-up">
                                                <img src={item.img} alt=''/>
                                                <h4>{item.title}</h4>
                                                <p>{item.pra}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='OurValuas-body_container_btn'>
                                    <button onClick={() => nextcareersCulture()} data-aos="fade-down">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Route>
                <Route path="/impact">
                    <div className='OurWork'>
                        <div className='OurValuas-body maxWidth1400px'>
                            <h3 data-aos="fade-up" style={{color: "white"}}>OUR WORK</h3>
                            <div className='OurValuas-body_box'>
                                <div className='OurValuas-body_box_item'>
                                    <h4 data-aos="fade-right" style={{color: "white"}}>Team Impact is passionate about solving problems in arenas where there are opportunities to make meaningful contributions with our skills. The current working groups are Data Journalism, Climate Impact and Education Equity.</h4>
                                </div>
                                <div className='OurWork-body_box_item'>
                                    <button data-aos="fade-left">Read about Team Impact’s projects and events on our blog</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Route>
                <Route path="/extract">
                    <div className='OurWork'>
                        <div className='OurValuas-body maxWidth1400px'>
                            <h3 data-aos="fade-up" style={{color: "white"}}>FOR DEVELOPERS</h3>
                            <div className='OurValuas-body_box'>
                                <div className='OurValuas-body_box_item'>
                                    <h2 data-aos="fade-up">API Guides & Tutorials</h2>
                                    <h4 data-aos="fade-right" style={{color: "white"}}>See our developer documentation for information on how to transcribe your files, stream audio, and more with the Extract APIs</h4>
                                </div>
                                <div className='OurWork-body_box_item'>
                                    <button data-aos="fade-left">Extract Developer Docs</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Route>
                <Route path="/classify">
                    <div className='OurWork'>
                        <div className='OurValuas-body maxWidth1400px'>
                            <h3 data-aos="fade-up" style={{color: "white"}}>FOR DEVELOPERS</h3>
                            <div className='OurValuas-body_box'>
                                <div className='OurValuas-body_box_item'>
                                    <h2 data-aos="fade-up">API Guides & Tutorials</h2>
                                    <h4 data-aos="fade-right" style={{color: "white"}}>Check out our developer documentation, for building tools with the Classify APIs and more</h4>
                                </div>
                                <div className='OurWork-body_box_item'>
                                    <button data-aos="fade-left">Classify Developer Docs</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Route>
                <Route path="/nerd">
                    <div className='Cases' style={{backgroundColor: "white"}}>
                        <div className='OurValuas-body maxWidth1400px'>
                            <h3 data-aos="fade-up">KENSHO NERD USE CASES</h3>
                            <div className='OurValuas-body_box'>
                                <div className='OurValuas-body_box_item'>
                                    <h4 data-aos="fade-right">NERD is a valuable tool for anyone dealing with high volumes of text, documents, or unstructured data.</h4>
                                </div>
                                <div className='OurValuas-body_box_item'>
                                    <p data-aos="fade-left">For large enterprises, academics, financial or professional service providers, government bodies and more, NERD makes your text intelligible and searchable in a snap.</p>
                                </div>
                            </div>
                            <div className='OurValuas-body_container'>
                                <div className='OurValuas-body_container_box'>
                                    {CASES.map((item) => {
                                        return(
                                            <div className='OurValuas-body_container_box_item' key={item.id} data-aos="fade-up">
                                                <img src={item.img} alt=''/>
                                                <h4>{item.title}</h4>
                                                <p>{item.pra}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='OurValuas-body maxWidth1400px' style={{marginTop: "30px"}}>
                            <h3 data-aos="fade-up" style={{color: "black"}}>FOR DEVELOPERS</h3>
                            <div className='OurValuas-body_box'>
                                <div className='OurValuas-body_box_item'>
                                    <h2 data-aos="fade-up" style={{color: "black"}}>API Guides & Tutorials</h2>
                                    <h4 data-aos="fade-right" style={{color: "black"}}>Find our developer documentation, for building tools with the NERD’s APIs and more</h4>
                                </div>
                                <div className='OurWork-body_box_item'>
                                    <button data-aos="fade-left" style={{color: "black",border: "1px solid black", cursor: "pointer"}}>NERD Developer Docs</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
};

export default OurValuas;