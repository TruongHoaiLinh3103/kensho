import React from 'react';
import "../../Style/navbar.css";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
const Navbar = () => {
    const history = useHistory();
    const backHome = () => {
        history.push('/');
    }
    const backFreeTrial = () => {
        history.push("/freetrial")
    }
    const backContactUs = () => {
        history.push("/contactus")
    }
    return (
        <div className="navbar">
            <div className="navbar-logoAndTabbar">
                <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjIzMi45IDM4My4zIDE0Ny42IDI1IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjMDBCOUU4IiBkPSJNMjMzLjQgMzgzLjhoNS4zdjEwLjVsOS43LTEwLjVoNi40TDI0NSAzOTRsMTAuMiAxMy44aC02LjNsLTcuNC0xMC4yLTIuOCAyLjl2Ny4zaC01LjN2LTI0em0yNSAwaDE4LjF2NC43aC0xMi44djQuOUgyNzV2NC43aC0xMS4zdjVoMTN2NC43aC0xOC4ydi0yNHptMjIuOSAwaDQuOWwxMS4yIDE0Ljd2LTE0LjdoNS4ydjIzLjloLTQuNWwtMTEuNi0xNS4ydjE1LjJoLTUuMnYtMjMuOXptMjUuMyAyMC41IDMuMS0zLjdjMi4yIDEuOCA0LjQgMi45IDcuMSAyLjkgMi4yIDAgMy41LS45IDMuNS0yLjN2LS4xYzAtMS4zLS44LTItNC44LTMtNC44LTEuMi03LjktMi42LTcuOS03LjN2LS4xYzAtNC4zIDMuNS03LjIgOC40LTcuMiAzLjUgMCA2LjUgMS4xIDguOSAzbC0yLjcgNGMtMi4xLTEuNS00LjItMi40LTYuMi0yLjRzLTMuMS45LTMuMSAyLjF2LjFjMCAxLjYgMSAyLjEgNS4yIDMuMSA0LjkgMS4zIDcuNiAzIDcuNiA3LjJ2LjFjMCA0LjgtMy42IDcuNC04LjggNy40LTMuNyAwLTcuNC0xLjMtMTAuMy0zLjh6bTIzLjYtMjAuNWg1LjN2OS41aDkuN3YtOS41aDUuM3YyMy45aC01LjN2LTkuNmgtOS43djkuNmgtNS4zdi0yMy45em00OS44IDEyYzAgMi0uNSA0LTEuNCA1LjcgMCAuMS0uMS4xLS4xLjJsLS45LS41YzAtLjEuMS0uMS4xLS4yLjgtMS42IDEuMi0zLjMgMS4yLTUuMiAwLTIuNy0uOS01LjItMi41LTcuMmwtMS41IDEuMmMwLS4xLS4xLS4xLS4xLS4yLTEuNi0xLjktMy45LTMuMi02LjYtMy4zbC0uMiAyLjRoLS41Yy0zLjkgMC03IDMuMi03IDcgMCAzLjkgMy4yIDcgNyA3IDIuMyAwIDQuNC0xLjEgNS43LTIuOSAwLS4xLjEtLjEuMS0uMmwyIDEuNCAxLjYgMS4xLjguNmMwIC4xLS4xLjEtLjEuMi0yLjMgMy4xLTUuOSA1LjEtMTAgNS4xLTYuOCAwLTEyLjQtNS42LTEyLjQtMTIuNCAwLTYuOCA1LjYtMTIuNCAxMi40LTEyLjRoLjljMy41LjIgNi41IDEuOSA4LjYgNC40IDAgLjEuMS4xLjEuMiAxLjggMi4zIDIuOCA1IDIuOCA4eiIvPjwvc3ZnPg==' alt='' onClick={() => backHome()}/>
                <ul className="navbar-Tabbar">
                    <li className="navbar-Tabbar_li solutions-box"><NavLink to="/solutions">Solution
                        <div className='solutions-box_navbar'>
                            <ul className='solutions-box_navbar_ul'>
                                <li className="solutions-box_navbar_ul_li"><NavLink to='/solutions'>All Slotions</NavLink></li>
                                <li className="solutions-box_navbar_ul_line"></li>
                                <li className="solutions-box_navbar_ul_li"><NavLink to='/scribe'>Scribe</NavLink></li>
                                <li className="solutions-box_navbar_ul_line"></li>
                                <li className="solutions-box_navbar_ul_li"><NavLink to='/nerd'>NERD</NavLink></li>
                                <li className="solutions-box_navbar_ul_line"></li>
                                <li className="solutions-box_navbar_ul_li"><NavLink to='/classify'>Classify</NavLink></li>
                                <li className="solutions-box_navbar_ul_line"></li>
                                <li className="solutions-box_navbar_ul_li"><NavLink to='/extract'>Extract</NavLink></li>
                                <li className="solutions-box_navbar_ul_line"></li>
                            </ul>
                        </div>
                    </NavLink></li>
                    <li className="navbar-Tabbar_li"><NavLink to="/about">About</NavLink></li>
                    <li className="navbar-Tabbar_li lifeatkensho-box"><NavLink to="/lifeatkensho">Life at Kensho
                        <div className='lifeatkensho-box_navbar'>
                            <ul className='lifeatkensho-box_navbar_ul'>
                                <li className="lifeatkensho-box_navbar_ul_li"><NavLink to='/lifeatkensho'>Available Positions</NavLink></li>
                                <li className="lifeatkensho-box_navbar_ul_line"></li>
                                <li className="lifeatkensho-box_navbar_ul_li"><NavLink to='/lifeatkensho'>Why Join Us?</NavLink></li>
                                <li className="lifeatkensho-box_navbar_ul_line"></li>
                                <li className="lifeatkensho-box_navbar_ul_li"><NavLink to='/dei'>DEI</NavLink></li>
                                <li className="lifeatkensho-box_navbar_ul_line"></li>
                                <li className="lifeatkensho-box_navbar_ul_li"><NavLink to='/benefits'>Benefits</NavLink></li>
                                <li className="lifeatkensho-box_navbar_ul_line"></li>
                                <li className="lifeatkensho-box_navbar_ul_li"><NavLink to='/impact'>Impact</NavLink></li>
                                <li className="lifeatkensho-box_navbar_ul_line"></li>
                            </ul>
                        </div>
                    </NavLink></li>
                </ul>
            </div>
            <div className="navbar-logAndContact">
                <ul className="navbar-log">
                    <li className="navbar-log_li"><NavLink to="/signin">Sign in</NavLink></li>
                    <button className="navbar-log-button" onClick={() => backFreeTrial()}>Free Trial</button>
                    <button className="navbar-log-button" onClick={() => backContactUs()}>Contacts us</button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;