import React, { useState } from 'react';
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
    const DATA = EMPLOYEETESTIMONIALS.length - 1;
    const DATATWO = CEO.length - 1;
    const [number, setNumber] = useState(0);
    const [maxma] = useState(1);
    const prev = () => {
        if(number - 1 < 0){
            setNumber(DATA)
        }else{
            setNumber(number - 1);
        }
    }
    const next = () => {
        if(number + 1 > DATA){
            setNumber(0)
        }else{
            setNumber(number + 1)
        }
    }


    const prevDEI = () => {
        if(number - 1 < 0){
            setNumber(DATATWO)
        }else{
            setNumber(number - 1);
        }
    }
    const nextDEI = () => {
        if(number + 1 > DATATWO){
            setNumber(0)
        }else{
            setNumber(number + 1)
        }
    }
    return (
        <Router>
            <div className='Emloy'>
                <div className='maxWidth1400px Emloy-body'>
                    <Switch>
                        <Route Route path="/lifeatkensho">
                            <h3 data-aos="fade-up">EMPLOYEE TESTIMONIALS</h3>
                            <div className='Emloy-body_box' data-aos="fade-up">
                                {EMPLOYEETESTIMONIALS.map((item) => {
                                    return(
                                        <div className='Emloy-body_box_item' key={item.id} style={{
                                            "--atualAtivo": item.id === number ? 1 : 0,
                                            "--compensacao": (number - item.id) / 3,
                                            "--direcao": Math.sign(number - item.id),
                                            "--abs-compensacao": Math.abs(number - item.id) / 3,
                                            pointerEvents: number === item.id ? "auto" : "none",
                                            display:
                                            Math.abs(number - item.id) > maxma ? "none" : "flex",
                                        }}>
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
                                    )
                                })}
                            </div>
                            <div className='Emloy-body-btn'>
                                <button onClick={() => prev()}><i className="fa-solid fa-chevron-left"></i></button>
                                <button onClick={() => next()}><i className="fa-solid fa-chevron-right"></i></button>
                            </div>
                        </Route>
                        <Router path="/dei">
                            <div className='Emloy-body_box' data-aos="fade-up">
                                {CEO.map((item) => {
                                    return(
                                        <div className='Emloy-body_box_item' key={item.id} style={{
                                            "--atualAtivo": item.id === number ? 1 : 0,
                                            "--compensacao": (number - item.id) / 3,
                                            "--direcao": Math.sign(number - item.id),
                                            "--abs-compensacao": Math.abs(number - item.id) / 3,
                                            pointerEvents: number === item.id ? "auto" : "none",
                                            display:
                                            Math.abs(number - item.id) > maxma ? "none" : "flex",
                                        }}>
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
                                    )
                                })}
                            </div>
                            <div className='Emloy-body-btn'>
                                <button onClick={() => prevDEI()}><i className="fa-solid fa-chevron-left"></i></button>
                                <button onClick={() => nextDEI()}><i className="fa-solid fa-chevron-right"></i></button>
                            </div>
                        </Router>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default Emloy;