import React from 'react';
import "../../Style/entities.css";
import useFetchEnti from '../../Utils/useFetchEnti';
const Entities = () => {
    const {number , hundredthousand, hundred} = useFetchEnti();
    return (
        <div className='Entities maxWidth1400px'>
            <p>No other solution offers NERD’s combination of accuracy, general breadth and business and financial depth. See for yourself!</p>
            <h3>{number},{hundredthousand},{hundred}</h3>
            <p><b>…entities recogizable by NERD!</b></p>
        </div>
    );
};

export default Entities;