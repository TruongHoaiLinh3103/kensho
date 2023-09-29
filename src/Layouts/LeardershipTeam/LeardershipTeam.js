import React from 'react';
import "../../Style/leardershipteam.css";
import { LEADERSHIPTEAM } from "../../Story/LEADERSHIPTEAM";
import useFetchAOS from '../../Utils/useFetchAOS';
const LeardershipTeam = () => {
    useFetchAOS();
    return (
        <div className='LeardershipTeam'>
            <div className='maxWidth1400px LeardershipTeam-body'>
                <h3 data-aos="fade-up">LEADERSHIP TEAM</h3>
                <div className='LeardershipTeam-body_box'>
                    {LEADERSHIPTEAM.map((item) => {
                        return(
                            <div className='LeardershipTeam-body_box_item' key={item.id}>
                                <img src={item.img} alt=''data-aos="fade-up"/>
                                <h3 data-aos="fade-up">{item.name}</h3>
                                <p data-aos="fade-up">{item.detail}</p>
                                <div className='LeardershipTeam-body_box_item_title' data-aos="fade-up">
                                    <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUxIiBoZWlnaHQ9IjEyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNODkuODg0IDEyMC4zMDNWNzkuNzIxYzAtMTcuMTIzIDEuODgzLTMyLjAyIDUuNjUtNDQuNjkyQzk5LjMwMSAyMi4zNTggMTA1LjEyMyAxMC43MTQgMTEzIC4wOThoMzcuNWMtOC41NjIgMTAuOTU5LTE1LjI0IDIyLjI2LTIwLjAzNCAzMy45MDQtNC43OTUgMTEuMzAxLTcuMTkyIDIxLjkxOC03LjE5MiAzMS44NWgyNi43MTJ2NTQuNDUxSDg5Ljg4NFptLTg5LjM4NCAwVjc5LjcyMWMwLTE2Ljc4IDEuNzEyLTMxLjUwNyA1LjEzNy00NC4xNzhDOS40MDQgMjIuNTI5IDE1LjIyNiAxMC43MTQgMjMuMTAzLjA5OGgzOC4wMTNjLTguNTYxIDEwLjk1OS0xNS4yNCAyMi4yNi0yMC4wMzQgMzMuOTA0LTQuNzk0IDExLjMwMS03LjE5MiAyMS45MTgtNy4xOTIgMzEuODVoMjYuNzEzdjU0LjQ1MUguNVoiIGZpbGw9InVybCgjYSkiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIuNSIgeTE9IjEyMC41NDciIHgyPSIyNDAuMzMzIiB5Mj0iLTcxLjMxOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiMwMDg1RkYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwNjAwNDAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=' alt=''/>
                                    <p>{item.title}</p>
                                </div>
                                <p data-aos="fade-up">{item.praone}</p>
                                <p data-aos="fade-up">{item.pratwo}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default LeardershipTeam;