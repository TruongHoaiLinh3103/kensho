import React from 'react';
import "../../Style/login.css";
import useFetchAOS from '../../Utils/useFetchAOS';
const Login = () => {
    useFetchAOS();
    return (
        <div className="Login">
            <form className="form" data-aos="fade-up">
                <div className="flex-column">
                    <label>Email </label>
                </div>
                <div className="inputForm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 32 32" height="20">
                        <g data-name="Layer 3" id="Layer_3">
                            <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                        </g>
                    </svg>
                    <input placeholder="Enter your Email" className="input" type="text" />
                </div>
                <div className="flex-column">
                    <label>Password </label>
                </div>
                <div className="inputForm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="-64 0 512 512" height="20">
                        <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
                        <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
                    </svg>
                    <input placeholder="Enter your Password" className="input" type="password"/>
                </div>
                <div className="flex-row">
                    <div className='flex-row_remember'>
                        <input type="checkbox" name='remember'id='remember'/>
                        <label htmlFor='remember' style={{cursor:"pointer"}}>Remember me </label>
                    </div>
                    <span className="span">Forgot password?</span>
                </div>
                <button className="button-submit">Sign In</button>
                <p className="p">Don't have an account? <span className="span">Sign Up</span>
                </p>
                <p className="p line">Or With</p>
                <div className="flex-row">
                    <button className="btn google">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 64 64">
                        <radialGradient id="95yY7w43Oj6n2vH63j6HJa_fQDK2sCN4Eh1_gr1" cx="31.998" cy="34.5" r="30.776" gradientTransform="matrix(1 0 0 -1 0 66)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f4e9c3"></stop><stop offset=".219" stopColor="#f8eecd"></stop><stop offset=".644" stopColor="#fdf4dc"></stop><stop offset="1" stopColor="#fff6e1"></stop></radialGradient><path fill="url(#95yY7w43Oj6n2vH63j6HJa_fQDK2sCN4Eh1_gr1)" d="M63.97,30.06C63.68,32.92,61.11,35,58.24,35H53c-1.22,0-2.18,1.08-1.97,2.34	c0.16,0.98,1.08,1.66,2.08,1.66h3.39c2.63,0,4.75,2.28,4.48,4.96C60.74,46.3,58.64,48,56.29,48H51c-1.22,0-2.18,1.08-1.97,2.34	c0.16,0.98,1.08,1.66,2.08,1.66h3.39c1.24,0,2.37,0.5,3.18,1.32C58.5,54.13,59,55.26,59,56.5c0,2.49-2.01,4.5-4.5,4.5h-44	c-1.52,0-2.9-0.62-3.89-1.61C5.62,58.4,5,57.02,5,55.5c0-3.04,2.46-5.5,5.5-5.5H14c1.22,0,2.18-1.08,1.97-2.34	C15.81,46.68,14.89,46,13.89,46H5.5c-2.63,0-4.75-2.28-4.48-4.96C1.26,38.7,3.36,37,5.71,37H13c1.71,0,3.09-1.43,3-3.16	C15.91,32.22,14.45,31,12.83,31H4.5c-2.63,0-4.75-2.28-4.48-4.96C0.26,23.7,2.37,22,4.71,22h9.79c1.24,0,2.37-0.5,3.18-1.32	C18.5,19.87,19,18.74,19,17.5c0-2.49-2.01-4.5-4.5-4.5h-6c-1.52,0-2.9-0.62-3.89-1.61S3,9.02,3,7.5C3,4.46,5.46,2,8.5,2h48	c3.21,0,5.8,2.79,5.47,6.06C61.68,10.92,60.11,13,57.24,13H55.5c-3.04,0-5.5,2.46-5.5,5.5c0,1.52,0.62,2.9,1.61,3.89	C52.6,23.38,53.98,24,55.5,24h3C61.71,24,64.3,26.79,63.97,30.06z"></path><linearGradient id="95yY7w43Oj6n2vH63j6HJb_fQDK2sCN4Eh1_gr2" x1="29.401" x2="29.401" y1="4.064" y2="106.734" gradientTransform="matrix(1 0 0 -1 0 66)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ff5840"></stop><stop offset=".007" stopColor="#ff5840"></stop><stop offset=".989" stopColor="#fa528c"></stop><stop offset="1" stopColor="#fa528c"></stop></linearGradient><path fill="url(#95yY7w43Oj6n2vH63j6HJb_fQDK2sCN4Eh1_gr2)" d="M47.46,15.5l-1.37,1.48c-1.34,1.44-3.5,1.67-5.15,0.6c-2.71-1.75-6.43-3.13-11-2.37	c-4.94,0.83-9.17,3.85-11.64,7.97l-8.03-6.08C14.99,9.82,23.2,5,32.5,5c5,0,9.94,1.56,14.27,4.46	C48.81,10.83,49.13,13.71,47.46,15.5z"></path><linearGradient id="95yY7w43Oj6n2vH63j6HJc_fQDK2sCN4Eh1_gr3" x1="12.148" x2="12.148" y1=".872" y2="47.812" gradientTransform="matrix(1 0 0 -1 0 66)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#feaa53"></stop><stop offset=".612" stopColor="#ffcd49"></stop><stop offset="1" stopColor="#ffde44"></stop></linearGradient><path fill="url(#95yY7w43Oj6n2vH63j6HJc_fQDK2sCN4Eh1_gr3)" d="M16.01,30.91c-0.09,2.47,0.37,4.83,1.27,6.96l-8.21,6.05c-1.35-2.51-2.3-5.28-2.75-8.22	c-1.06-6.88,0.54-13.38,3.95-18.6l8.03,6.08C16.93,25.47,16.1,28.11,16.01,30.91z"></path><linearGradient id="95yY7w43Oj6n2vH63j6HJd_fQDK2sCN4Eh1_gr4" x1="29.76" x2="29.76" y1="32.149" y2="-6.939" gradientTransform="matrix(1 0 0 -1 0 66)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#42d778"></stop><stop offset=".428" stopColor="#3dca76"></stop><stop offset="1" stopColor="#34b171"></stop></linearGradient><path fill="url(#95yY7w43Oj6n2vH63j6HJd_fQDK2sCN4Eh1_gr4)" d="M50.45,51.28c-4.55,4.07-10.61,6.57-17.36,6.71C22.91,58.2,13.66,52.53,9.07,43.92l8.21-6.05	C19.78,43.81,25.67,48,32.5,48c3.94,0,7.52-1.28,10.33-3.44L50.45,51.28z"></path><linearGradient id="95yY7w43Oj6n2vH63j6HJe_fQDK2sCN4Eh1_gr5" x1="46" x2="46" y1="3.638" y2="35.593" gradientTransform="matrix(1 0 0 -1 0 66)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#155cde"></stop><stop offset=".278" stopColor="#1f7fe5"></stop><stop offset=".569" stopColor="#279ceb"></stop><stop offset=".82" stopColor="#2cafef"></stop><stop offset="1" stopColor="#2eb5f0"></stop></linearGradient><path fill="url(#95yY7w43Oj6n2vH63j6HJe_fQDK2sCN4Eh1_gr5)" d="M59,31.97c0.01,7.73-3.26,14.58-8.55,19.31l-7.62-6.72c2.1-1.61,3.77-3.71,4.84-6.15	c0.29-0.66-0.2-1.41-0.92-1.41H37c-2.21,0-4-1.79-4-4v-2c0-2.21,1.79-4,4-4h17C56.75,27,59,29.22,59,31.97z"></path>
                        </svg>
                        Google 
                    </button>
                    <button className="btn apple">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 64 64">
                        <linearGradient id="z3Csneif8Y165Giu6z2_4a_48112_gr1" x1="38" x2="38" y1="4.583" y2="58.763" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#z3Csneif8Y165Giu6z2_4a_48112_gr1)" d="M41.932,6.399c-0.325,2.351-1.705,4.259-2.401,5.092c-1.372,1.648-3.435,2.871-5.478,3.321 c0.248-1.897,1.343-3.757,2.477-5.043C37.853,8.275,39.917,7.019,41.932,6.399 M43.891,4c-3.104,0.199-6.737,2.048-8.858,4.442 c-1.923,2.181-3.518,5.42-2.897,8.554C32.222,16.999,32.308,17,32.395,17c3.308,0,6.689-1.847,8.673-4.229 C42.972,10.493,44.416,7.276,43.891,4L43.891,4z"></path><linearGradient id="z3Csneif8Y165Giu6z2_4b_48112_gr2" x1="32.425" x2="32.425" y1="4.583" y2="58.763" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#z3Csneif8Y165Giu6z2_4b_48112_gr2)" d="M44.168,21.004c2.444,0,4.982,1.019,7.105,2.799C47.968,26.326,46,30.228,46,34.5 c0,5.074,2.827,9.639,7.216,11.943c-0.705,1.496-1.523,2.929-2.441,4.276c-1.99,2.91-4.663,6.253-7.702,6.278l-0.079,0 c-1.234,0-2.044-0.312-3.167-0.744c-1.435-0.552-3.221-1.239-6.172-1.254l-0.169,0.003L33.325,55 c-2.932,0.014-4.718,0.702-6.152,1.254c-1.122,0.432-1.933,0.744-3.167,0.744l-0.084,0c-3.034-0.025-5.707-3.368-7.695-6.276 c-6.304-9.252-6.31-19.274-3.113-24.009c2.335-3.467,6.15-5.708,9.72-5.708c1.919,0,3.48,0.477,5.134,0.982 C29.598,22.485,31.286,23,33.25,23h0.25h0.25c1.964,0,3.652-0.515,5.284-1.014C40.687,21.481,42.249,21.004,44.168,21.004 M44.168,19.004C39.935,19.004,37.248,21,33.75,21c-0.094,0-0.25,0-0.25,0s-0.156,0-0.25,0c-3.498,0-6.185-1.996-10.418-1.996 c-4.155,0-8.582,2.438-11.378,6.591c-3.954,5.856-3.28,16.86,3.12,26.252c2.287,3.345,5.344,7.117,9.332,7.149 c0.034,0,0.067,0.001,0.1,0.001c3.474,0,4.56-1.974,9.329-1.997c0.003,0,0.007,0,0.01,0c0.054,0,0.102,0.003,0.155,0.003 c0.053,0,0.101-0.003,0.155-0.003c0.003,0,0.007,0,0.01,0c4.769,0.023,5.856,1.997,9.329,1.997c0.033,0,0.067,0,0.1-0.001 c3.988-0.033,7.045-3.804,9.332-7.149c1.427-2.094,2.554-4.269,3.424-6.449C51.29,43.872,48,39.574,48,34.5 c0-4.544,2.642-8.46,6.467-10.328C51.686,20.892,47.822,19.004,44.168,19.004L44.168,19.004z"></path><linearGradient id="z3Csneif8Y165Giu6z2_4c_48112_gr3" x1="19.378" x2="19.378" y1="26.035" y2="51.961" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#z3Csneif8Y165Giu6z2_4c_48112_gr3)" d="M22.352,51.961c-0.88-0.867-1.829-2.042-2.82-3.491C16.652,44.242,15,39.333,15,35 c0-3.518,1.65-6.702,4.647-8.965l1.205,1.596C18.368,29.507,17,32.124,17,35c0,3.941,1.525,8.439,4.185,12.343 c0.917,1.342,1.783,2.417,2.571,3.194L22.352,51.961z"></path>
                        </svg>
                        Apple 
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;