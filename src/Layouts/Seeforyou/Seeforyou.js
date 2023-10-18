import React from 'react';
import "../../Style/seeforyou.css";
import video  from "../../Assets/video/3542897851763650032.mp4";
import useFetchAOS from '../../Utils/useFetchAOS';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Seeforyou = () => {
    const history = useHistory()
    useFetchAOS();
    return (
        <div className='Seeforyou'>
            <div className='maxWidth1400px Seeforyou-body'>
                <h3 data-aos="fade-up">SEE FOR YOURSELF</h3>
                <div className='Seeforyou-body_box'>
                    <h4 data-aos="fade-right">Add structure to unstructured documents.</h4>
                    <p data-aos="fade-left">Kensho Extract is a fundamental machine learning (ML) capability that allows users to access both text and tables in a simple-to-use format for further analysis and action.</p>
                </div>
                <div className='Seeforyou-body_container'>
                    <div className='Seeforyou-body_item'>
                        <video data-aos="fade-up" autoPlay loop muted>
                            <source src={video} type="video/webm; codecs=&quot;vp9&quot;" />
                        </video>
                    </div>
                    <div className='Seeforyou-body_item'>
                        <p data-aos="fade-up">Extract can be used independently or in conjunction with other services offered by Kensho. Combining our document layout analysis and table structure recognition models, Extract allows users to:</p>
                        <ul>
                            <li data-aos="fade-left">Quickly transform unstructured documents into a machine-readable format that organizes the headers, titles, paragraphs, tables and footers detected within the document in natural reading order.</li>
                            <li data-aos="fade-left">Interpret messy page layouts, structuring text into cohesive paragraphs that can then be effectively analyzed and searched.</li>
                        </ul>
                    </div>
                </div>
                <div className='Seeforyou-body_btn'>
                    <button data-aos="zoom-out" onClick={() => {history.push("/freetrial")}}>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Seeforyou;