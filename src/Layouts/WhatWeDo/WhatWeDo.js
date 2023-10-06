import React from 'react';
import "../../Style/whatwedo.css";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useFetchAOS from '../../Utils/useFetchAOS';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
const WhatWeDo = () => {
    useFetchAOS();
    const history = useHistory();
    const nextSolution = () => {
        history.push("/solutions")
    }
    const nextContactus = () => {
        history.push("/contactus");
    }
    return (
        <Router>
            <Switch>
                <Route path="/about">
                    <div className='WhatWeDo'>
                        <div className='maxWidth1400px WhatWeDo-body'>
                            <div className='WhatWeDo-body_item'>
                                <div className='WhatWeDo-body_item_prf'>
                                    <h3 data-aos="fade-up">WHAT WE DO</h3>
                                    <h2 data-aos="fade-up">Kensho leverages S&P’s world-class data to build machine learning applications internally for S&P Global and externally for our clients.</h2>
                                    <p data-aos="fade-up">We work primarily with natural language data, including complex documents and speech, and build machine learning models that add layers of structure to unstructured and semi-structured data.</p>
                                    <p data-aos="fade-up">These foundational AI services improve the breadth and speed of data collection, the depth of data enrichment, and the ease and relevance of data discovery, solving some of the most difficult challenges facing businesses today.</p>
                                    <p data-aos="fade-up">Kensho’s solutions transform unstructured data into meaningful and actionable business insights.</p>
                                    <p data-aos="fade-up"><b>Learn more about Kensho’s cutting-edge technology solutions</b></p>
                                </div>
                                <div className='WhatWeDo-body_item_btn'>
                                    <button onClick={() => nextSolution()} data-aos="fade-right">About Our Solutions</button>
                                </div>
                            </div>
                            <div className='WhatWeDo-body_item' data-aos="fade-left">
                                <img src='https://kensho.com/asset.73efb848b284f05643eb.svg' alt=''/>
                            </div>
                        </div>
                    </div>
                </Route>
                <Route path="/extract">
                    <div className='WhatWeDo'>
                        <div className='maxWidth1400px WhatWeDo-body'>
                            <div className='WhatWeDo-body_item'>
                                <div className='WhatWeDo-body_item_prf'>
                                    <h3 data-aos="fade-up">SEE HOW WE CAN HELP</h3>
                                    <h2 data-aos="fade-up">The fundamental block for all of these initiatives is having access to clean, structured data.</h2>
                                    <p data-aos="fade-up">Unfortunately, the data most companies have is neither structured nor clean - whether hidden in slide decks, pdfs, or in a database that has mutated a dozen times since inception, data is frequently all but inaccessible without investing a lot of incredibly valuable expert time in trying to understand the information and then attempt to structure it via liberal use of excel spreadsheets.</p>
                                    <p data-aos="fade-up">We feel your pain.</p>
                                    <p data-aos="fade-up">S&P Global employs thousands of trained analysts who process more than 5 million pages of financial content on a yearly basis. Luckily, all that effort has created one of the largest data sets of machine learning training data for corporate financial documents, allowing us to speed up our internal operations anywhere from 50% - 100% depending on the task at hand.</p>
                                </div>
                                <div className='WhatWeDo-body_item_btn'>
                                    <button onClick={() => nextContactus()} data-aos="fade-right">Contact Us</button>
                                </div>
                            </div>
                            <div className='WhatWeDo-body_item' data-aos="fade-left">
                                <img src='https://kensho.com/asset.730620af7e352f7bf473.jpg' alt=''/>
                            </div>
                        </div>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
};

export default WhatWeDo;