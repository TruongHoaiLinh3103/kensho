import React from 'react';
import "../../Style/seeforyou.css";
import video  from "../../Assets/video/3542897851763650032.mp4";
const Seeforyou = () => {
    return (
        <div className='Seeforyou'>
            <div className='maxWidth1400px Seeforyou-body'>
                <h3>SEE FOR YOURSELF</h3>
                <div className='Seeforyou-body_box'>
                    <h4>Add structure to unstructured documents.</h4>
                    <p>Kensho Extract is a fundamental machine learning (ML) capability that allows users to access both text and tables in a simple-to-use format for further analysis and action.</p>
                </div>
                <div className='Seeforyou-body_container'>
                    <div className='Seeforyou-body_item'>
                        <video autoPlay loop muted>
                            <source src={video} type="video/webm; codecs=&quot;vp9&quot;" />
                        </video>
                    </div>
                    <div className='Seeforyou-body_item'>
                        <p>Extract can be used independently or in conjunction with other services offered by Kensho. Combining our document layout analysis and table structure recognition models, Extract allows users to:</p>
                        <ul>
                            <li>Quickly transform unstructured documents into a machine-readable format that organizes the headers, titles, paragraphs, tables and footers detected within the document in natural reading order.</li>
                            <li>Interpret messy page layouts, structuring text into cohesive paragraphs that can then be effectively analyzed and searched.</li>
                        </ul>
                    </div>
                </div>
                <div className='Seeforyou-body_btn'>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Seeforyou;