import React from 'react';
import "../../Style/footer.css";
import {FOOTERDATA} from "../../Story/FOOTERDATA";
const Footer = () => {
    return (
        <div className="Footer">
            <div className='maxWidth1200px Footer-box'>
                <div className='Footer-box_logo'>
                    <img src='https://kensho.com/asset.3ab542ca5a13bf00807f.svg' alt=''/>
                </div>
                <div className='Footer-box_prfile'>
                    <div className='Footer-box_prfile_item'>
                        {FOOTERDATA.map((item) => {
                            return(
                                <div className='Prfile_item-detail' key={item.id}>
                                    <h3>{item.h3}</h3>
                                    <p>{item.p1}</p>
                                    <p>{item.p2}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='Footer-box_year'>
                    <p>Copyright © 2023 Kensho Technologies, LLC. Kensho marks are the property of Kensho Technologies, LLC. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;