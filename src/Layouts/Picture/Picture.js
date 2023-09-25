import React from 'react';
import "../../Style/picture.css";
import { PICTURE } from '../../Story/PICTURE';
const Picture = () => {
    return (
        <div className='Picture'>
            <div className='maxWidth1400px Picture-body'>
                {PICTURE.map((item) => {
                    return(
                        <div className='Picture-item' key={item.id}>
                            <img src={item.img} alt=''/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Picture;