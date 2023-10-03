import React from 'react';
import "../../Style/deigoals.css";
const DeiGoals = () => {
    return (
        <div className='DeiGoals'>
            <div className='maxWidth1400px DeiGoals-body'>
                <h3>DEI GOALS & HOW WE MEASURE THEM</h3>
                <p>Kensho has two primary goals for its DEI efforts with clear strategies for how to achieve and measure each.</p>
                <div className='DeiGoals-body_box'>
                    <div className='DeiGoals-body_box_item'>
                        <h5>Goal 1</h5>
                        <h5>We work to ensure that every Kenshin feels comfortable and confident to bring their full authentic self to work.</h5>
                    </div>
                    <div className='DeiGoals-body_box_item'>
                        <p>We tackle this goal through our policies, benefits, flexible work schedules, special programs and culture activities within Kensho, several of which are described in more detail on this page.</p>
                        <p>We measure progress on this goal through retention rates as well as bi-annual survey results, in particular, responses to how strongly different Kenshins agree with statements such as “I can be myself at work,” “My team has a climate in which different perspectives are valued,” and “I work in an environment where people with diverse backgrounds can succeed.”</p>
                    </div>
                </div>
                <div className='DeiGoals-body_box'>
                    <div className='DeiGoals-body_box_item'>
                        <h5>Goal 2</h5>
                        <h5>We work to broaden Kensho’s diversity by recruiting candidates from groups that are underserved in tech, specifically women and people of color.</h5>
                    </div>
                    <div className='DeiGoals-body_box_item'>
                        <p>Our approach to achieving this goal includes campus recruiting at historically Black colleges and universities, diversity-focused referral bonuses, working with recruiting platforms that focus on candidate diversity, creating an interview process that seeks to minimize unconscious bias, and efforts to improve our offer acceptance rate for candidates from these groups. To measure progress, we track all stages of our recruiting pipeline—from application through the interview process, offer stage and onboarding.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeiGoals;