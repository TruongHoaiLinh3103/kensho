import React from 'react';
import "../../Style/aboutus.css";
import { ABOUTUS } from "../../Story/ABOUTUS";
import {
    HashRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
const Aboutus = () => {
    return (
        <Router>
            <div className='Aboutus'>
                <Switch>
                    <Route path="/" exact>
                        <div className='Aboutus_item'>
                            <h3>ABOUT US</h3>
                            <h1>Our AI Solutions unlock insights, enabling you to make decisions with conviction.</h1>
                            <p>In partnership with S&P Global, we have access to vast amounts of data, which we use to train and develop our machine learning algorithms and build data-centric solutions to the business world’s most pressing challenges.</p>
                        </div>
                    </Route>
                    <Route path="/lifeatkensho">
                        <div className='Aboutus_item'>
                            <h3>CAREERS</h3>
                            <div className='Aboutus_item-detail'>
                                <h1>Our team is growing!</h1>
                                <p>Positions currently open:</p>
                            </div>
                            <div className='Aboutus_item_chidren'>
                                {ABOUTUS.map((item) => {
                                    return(
                                        <div className='item_chidren-detail' key={item.id}>
                                            <h1>{item.number}</h1>
                                            <p>{item.title}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <button>All opportunities</button>
                        </div>
                    </Route>
                </Switch>
                <div className='Aboutus_video'>
                    <video autoPlay loop muted poster="https://static.kensho.com/home/video/gradient-gel-enso.jpg">
                        <source src="https://static.kensho.com/home/video/gradient-gel-enso-vp9.webm" type="video/webm; codecs=&quot;vp9&quot;" />
                        <source src="https://static.kensho.com/home/video/gradient-gel-enso.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </Router>
    );
};

export default Aboutus;