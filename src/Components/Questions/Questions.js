import React from 'react';
import "../../Style/questions.css";
import { useState } from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {QUESTIONS} from "../../Story/QUESTIONS";

const Questions = () => {
    const [hideone, setHideone] = useState(false);
    const [hidetwo, setHidetwo] = useState(false);
    const [hidethree, setHidethree] = useState(false);
    const [hidefour, setHidefour] = useState(false);
    const [hidefive, setHidefive] = useState(false);
    const [hidesix, setHidesix] = useState(false);
    const [hideseven, setHideseven] = useState(false);
    const [hideeght, setHideeght] = useState(false);
    const [hidenive, setHidenive] = useState(false);
    const hidePageone = () => {
        setHideone(!hideone);
    }
    const hidePagetwo = () => {
        setHidetwo(!hidetwo);
    }
    const hidePagethree = () => {
        setHidethree(!hidethree);
    }
    const hidePagefour = () => {
        setHidefour(!hidefour);
    }
    const hidePagefive = () => {
        setHidefive(!hidefive);
    }
    const hidePagesix = () => {
        setHidesix(!hidesix);
    }
    const hidePageseven = () => {
        setHideseven(!hideseven);
    }
    const hidePageeght = () => {
        setHideeght(!hideeght);
    }
    const hidePagenive = () => {
        setHidenive(!hidenive);
    }
    return (
        <Router>
            <div className='Questions'>
                <div className='Questions-body maxWidth1400px'>
                    <h1>Frequently Asked Questions</h1>
                    <Switch>
                        <Route path="/extract">
                            <div className='Questions-body_box'>
                                {QUESTIONS.map((item) => {
                                    return(
                                        item.id < 5 &&
                                        <div key={item.id}>
                                            {item.id === 1 &&
                                            <div className='Questions-body_item' key={item.id}>
                                                <h4 onClick={() => hidePageone(item.detail)}>{item.title}</h4>
                                                {hideone &&
                                                <p>{item.detail}</p>}
                                            </div>}
                                            {item.id === 2 && 
                                            <div className='Questions-body_item' key={item.id}>
                                                <h4 onClick={() => hidePagetwo(item.detail)}>{item.title}</h4>
                                                {hidetwo &&
                                                <p>{item.detail}</p>}
                                            </div>}
                                            {item.id === 3 && 
                                            <div className='Questions-body_item' key={item.id}>
                                                <h4 onClick={() => hidePagethree(item.detail)}>{item.title}</h4>
                                                {hidethree &&
                                                <p>{item.detail}</p>}
                                            </div>}
                                            {item.id === 4 && 
                                            <div className='Questions-body_item' key={item.id}>
                                                <h4 onClick={() => hidePagefour(item.detail)}>{item.title}</h4>
                                                {hidefour &&
                                                <p>{item.detail}</p>}
                                            </div>}
                                        </div>
                                    )
                                })}
                            </div>
                        </Route>
                        <Route path="/nerd">
                            <div className='Questions-body_box'>
                                {QUESTIONS.map((item) => {
                                    return(
                                        item.id > 4 && item.id < 14 &&
                                        <div key={item.id}>
                                            {item.id === 5 &&
                                            <div className='Questions-body_item' key={item.id}>
                                                <h4 onClick={() => hidePageone(item.detail)}>{item.title}</h4>
                                                {hideone &&
                                                <p>{item.detail}</p>}
                                            </div>}
                                            {item.id === 6 && 
                                            <div className='Questions-body_item' key={item.id}>
                                                <h4 onClick={() => hidePagetwo(item.detail)}>{item.title}</h4>
                                                {hidetwo &&
                                                <p>{item.detail}</p>}
                                            </div>}
                                            {item.id === 7 && 
                                            <div className='Questions-body_item' key={item.id}>
                                                <h4 onClick={() => hidePagethree(item.detail)}>{item.title}</h4>
                                                {hidethree &&
                                                <p>{item.detail}</p>}
                                            </div>}
                                            {item.id === 8 && 
                                            <div className='Questions-body_item' key={item.id}>
                                                <h4 onClick={() => hidePagefour(item.detail)}>{item.title}</h4>
                                                {hidefour &&
                                                <p>{item.detail}</p>}
                                            </div>}
                                            {item.id === 9 &&
                                            <div className='Questions-body_item' key={item.id}>
                                                <h4 onClick={() => hidePagefive(item.detail)}>{item.title}</h4>
                                                {hidefive &&
                                                <p>{item.detail}</p>}
                                            </div>}
                                            {item.id === 10 && 
                                            <div className='Questions-body_item' key={item.id}>
                                                <h4 onClick={() => hidePagesix(item.detail)}>{item.title}</h4>
                                                {hidesix &&
                                                <p>{item.detail}</p>}
                                            </div>}
                                            {item.id === 11 && 
                                            <div className='Questions-body_item' key={item.id}>
                                                <h4 onClick={() => hidePageseven(item.detail)}>{item.title}</h4>
                                                {hideseven &&
                                                <p>{item.detail}</p>}
                                            </div>}
                                            {item.id === 12 && 
                                            <div className='Questions-body_item' key={item.id}>
                                                <h4 onClick={() => hidePageeght(item.detail)}>{item.title}</h4>
                                                {hideeght &&
                                                <p>{item.detail}</p>}
                                            </div>}
                                            {item.id === 13 && 
                                            <div className='Questions-body_item' key={item.id}>
                                                <h4 onClick={() => hidePagenive(item.detail)}>{item.title}</h4>
                                                {hidenive &&
                                                <p>{item.detail}</p>}
                                            </div>}
                                        </div>
                                    )
                                })}
                            </div>
                        </Route>
                        <Route path="/classify">
                            <div className='Questions-body_box'>
                                {QUESTIONS.map((item) => {
                                    return(
                                        item.id > 13 &&
                                        <div key={item.id}>
                                            {item.id === 14 &&
                                            <div className='Questions-body_item' key={item.id}>
                                                <h4 onClick={() => hidePageone(item.detail)}>{item.title}</h4>
                                                {hideone &&
                                                <p>{item.detail}</p>}
                                            </div>}
                                            {item.id === 15 && 
                                            <div className='Questions-body_item' key={item.id}>
                                                <h4 onClick={() => hidePagetwo(item.detail)}>{item.title}</h4>
                                                {hidetwo &&
                                                <p>{item.detail}</p>}
                                            </div>}
                                            {item.id === 16 && 
                                            <div className='Questions-body_item' key={item.id}>
                                                <h4 onClick={() => hidePagethree(item.detail)}>{item.title}</h4>
                                                {hidethree &&
                                                <p>{item.detail}</p>}
                                            </div>}
                                            {item.id === 17 && 
                                            <div className='Questions-body_item' key={item.id}>
                                                <h4 onClick={() => hidePagefour(item.detail)}>{item.title}</h4>
                                                {hidefour &&
                                                <p>{item.detail}</p>}
                                            </div>}
                                            {item.id === 18 &&
                                            <div className='Questions-body_item' key={item.id}>
                                                <h4 onClick={() => hidePagefive(item.detail)}>{item.title}</h4>
                                                {hidefive &&
                                                <p>{item.detail}</p>}
                                            </div>}
                                            {item.id === 19 && 
                                            <div className='Questions-body_item' key={item.id}>
                                                <h4 onClick={() => hidePagesix(item.detail)}>{item.title}</h4>
                                                {hidesix &&
                                                <p>{item.detail}</p>}
                                            </div>}
                                            {item.id === 20 && 
                                            <div className='Questions-body_item' key={item.id}>
                                                <h4 onClick={() => hidePageseven(item.detail)}>{item.title}</h4>
                                                {hideseven &&
                                                <p>{item.detail}</p>}
                                            </div>}
                                        </div>
                                    )
                                })}
                            </div>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default Questions;