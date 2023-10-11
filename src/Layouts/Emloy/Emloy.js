import React from 'react';
import "../../Style/emloy.css";
import { EMPLOYEETESTIMONIALS } from "../../Story/EMPLOYEETESTIMONIALS";
import useFetchAOS from '../../Utils/useFetchAOS';
import { CEO } from '../../Story/CEO';
import {
    HashRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
const Emloy = () => {
    useFetchAOS();
    return (
        <Router>
            <div className='Emloy'>
                <div className='maxWidth1400px Emloy-body'>
                    <Switch>
                        <Route Route path="/lifeatkensho">
                            <h3 data-aos="fade-up">EMPLOYEE TESTIMONIALS</h3>
                            <div className='Emloy-container'>
                            {EMPLOYEETESTIMONIALS.map((item) => {
                                return(
                                    <div className='Emloy-body_box' data-aos="fade-up" key={item.id}>
                                        <div className='Emloy-body_box_item'>
                                            <div className='Emloy-body_box_item_img'>
                                                <img src={item.label} alt=''/>
                                            </div>
                                            <div className='Emloy-body_box_item_profile'>
                                                <div className='Emloy-body_box_item_profile_title'>
                                                    <img src={item.img} alt=''/>
                                                    <div className='Emloy-body_box_item_profile_title_detail'>
                                                        <h3>{item.name}</h3>
                                                        <h5>{item.role}</h5>
                                                    </div>
                                                </div>
                                                <p>{item.pra}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            </div>
                        </Route>
                        <Router path="/dei">
                            <div className='Emloy-container'>
                            {CEO.map((item) => {
                                return(
                                <div className='Emloy-body_box' data-aos="fade-up" key={item.id}>
                                    <div className='Emloy-body_box_item'>
                                        <div className='Emloy-body_box_item_img'>
                                            <img src={item.label} alt=''/>
                                        </div>
                                        <div className='Emloy-body_box_item_profile'>
                                            <div className='Emloy-body_box_item_profile_title'>
                                                <img src={item.img} alt=''/>
                                                <div className='Emloy-body_box_item_profile_title_detail'>
                                                    <h3>{item.name}</h3>
                                                    <h5>{item.role}</h5>
                                                </div>
                                            </div>
                                            <p>{item.pra}</p>
                                            <p><i>{item.comment}</i></p>
                                            <p>{item.ptwo}</p>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                            </div>
                        </Router>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default Emloy;