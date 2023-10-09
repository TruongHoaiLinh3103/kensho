import React from 'react';
import "../../Style/whereweare.css";
import useFetchAOS from '../../Utils/useFetchAOS';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
const WhereWeAre = () => {
    useFetchAOS();
    return (
        <Router>
            <Switch>
                <Route path="/about">
                    <div className='WhereWeAre'>
                        <div className='WhereWeAre-body maxWidth1400px'>
                            <div className='WhereWeAre-body_item'>
                                <img src='https://kensho.com/asset.1fa42575a4cc25c8a2ea.jpg' alt='' data-aos="zoom-in-up"/>
                            </div>
                            <div className='WhereWeAre-body_item'>
                                <div className='WhereWeAre-body_item_detail'>
                                    <h3 data-aos="fade-up">WHERE WE ARE</h3>
                                    <h2 data-aos="fade-up">Kensho is headquartered in Harvard Square in Cambridge, MA.</h2>
                                    <h4 data-aos="fade-up">We also have offices in New York City and Washington, DC. Take a <a href='https://vimeo.com/760051398'>virtual tour</a> of our beautiful Cambridge office</h4>
                                    <p data-aos="fade-up">Kensho was acquired by S&P Global in 2018, and continues to operate independently, retaining its distinct brand, culture and technology stack.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Route>
                <Route path="/nerd">
                    <div className='WhereWeAre'>
                        <div className='WhereWeAre-body maxWidth1400px'>
                            <div className='WhereWeAre-body_item'>
                                <img src='https://kensho.com/asset.3d4e43cfe70fb19ed47c.png' alt='' data-aos="zoom-in-up"/>
                            </div>
                            <div className='WhereWeAre-body_item'>
                                <div className='WhereWeAre-body_item_detail'>
                                    <h3 data-aos="fade-up">WHY KENSHO NERD</h3>
                                    <p data-aos="fade-up">90% of data is unstructured, but 4 in 5 organizations can't effectively utilize it.</p>
                                    <ul>
                                        <li data-aos="fade-up">Unstructured data presents organizations with an opportunity to turn cost into intelligence and competitive differentiation.</li>
                                        <li data-aos="fade-up">Text is ubiquitous in unstructured data, whether emails, articles, documents, audio and/or video transcripts, reports, log files, presentations, social media posts, or any one of many other formats.</li>
                                        <li data-aos="fade-up">Like many organizations, S&P Global is awash with unstructured text data, with millions of documents, articles, transcripts, etc. generated each year. Effectively processing such data was a strategic imperative to find operational efficiencies, new revenue streams and business intelligence.</li>
                                        <li data-aos="fade-up">Kensho developed NERD to help S&P address this challenge. S&P Global has used NERD to great success. NERD has enriched 55M+ docs and has made 600M+ new connections to S&P Global’s company databases. NERD can do the same for your organization; we are eager to help!</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
};

export default WhereWeAre;