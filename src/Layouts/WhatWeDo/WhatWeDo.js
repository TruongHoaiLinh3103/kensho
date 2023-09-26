import React from 'react';
import "../../Style/whatwedo.css";
const WhatWeDo = () => {
    return (
        <div className='WhatWeDo'>
            <div className='maxWidth1400px WhatWeDo-body'>
                <div className='WhatWeDo-body_item'>
                    <div className='WhatWeDo-body_item_prf'>
                        <h3>WHAT WE DO</h3>
                        <h2>Kensho leverages S&P’s world-class data to build machine learning applications internally for S&P Global and externally for our clients.</h2>
                        <p>We work primarily with natural language data, including complex documents and speech, and build machine learning models that add layers of structure to unstructured and semi-structured data.</p>
                        <p>These foundational AI services improve the breadth and speed of data collection, the depth of data enrichment, and the ease and relevance of data discovery, solving some of the most difficult challenges facing businesses today.</p>
                        <p>Kensho’s solutions transform unstructured data into meaningful and actionable business insights.</p>
                        <p><b>Learn more about Kensho’s cutting-edge technology solutions</b></p>
                    </div>
                    <div className='WhatWeDo-body_item_btn'>
                        <button>About Our Solutions</button>
                    </div>
                </div>
                <div className='WhatWeDo-body_item'>
                    <img src='https://kensho.com/asset.73efb848b284f05643eb.svg' alt=''/>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;