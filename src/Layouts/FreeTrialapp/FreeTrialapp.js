import React from 'react';
import "../../Style/freetrialapp.css";
const FreeTrialapp = () => {
    return (
        <div className="FreeTrialapp">
            <img className="FreeTrialapp_background" src='https://img.thuthuattinhoc.vn/uploads/2019/01/06/anh-3d-dung-nhan_101728795.jpg' alt=''/>
            <div className="maxWidth1200px FreeTrialapp-body">
                <div className="FreeTrialapp-body_item">
                    <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjIzMi45IDM4My4zIDE0Ny42IDI1IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjMDBCOUU4IiBkPSJNMjMzLjQgMzgzLjhoNS4zdjEwLjVsOS43LTEwLjVoNi40TDI0NSAzOTRsMTAuMiAxMy44aC02LjNsLTcuNC0xMC4yLTIuOCAyLjl2Ny4zaC01LjN2LTI0em0yNSAwaDE4LjF2NC43aC0xMi44djQuOUgyNzV2NC43aC0xMS4zdjVoMTN2NC43aC0xOC4ydi0yNHptMjIuOSAwaDQuOWwxMS4yIDE0Ljd2LTE0LjdoNS4ydjIzLjloLTQuNWwtMTEuNi0xNS4ydjE1LjJoLTUuMnYtMjMuOXptMjUuMyAyMC41IDMuMS0zLjdjMi4yIDEuOCA0LjQgMi45IDcuMSAyLjkgMi4yIDAgMy41LS45IDMuNS0yLjN2LS4xYzAtMS4zLS44LTItNC44LTMtNC44LTEuMi03LjktMi42LTcuOS03LjN2LS4xYzAtNC4zIDMuNS03LjIgOC40LTcuMiAzLjUgMCA2LjUgMS4xIDguOSAzbC0yLjcgNGMtMi4xLTEuNS00LjItMi40LTYuMi0yLjRzLTMuMS45LTMuMSAyLjF2LjFjMCAxLjYgMSAyLjEgNS4yIDMuMSA0LjkgMS4zIDcuNiAzIDcuNiA3LjJ2LjFjMCA0LjgtMy42IDcuNC04LjggNy40LTMuNyAwLTcuNC0xLjMtMTAuMy0zLjh6bTIzLjYtMjAuNWg1LjN2OS41aDkuN3YtOS41aDUuM3YyMy45aC01LjN2LTkuNmgtOS43djkuNmgtNS4zdi0yMy45em00OS44IDEyYzAgMi0uNSA0LTEuNCA1LjcgMCAuMS0uMS4xLS4xLjJsLS45LS41YzAtLjEuMS0uMS4xLS4yLjgtMS42IDEuMi0zLjMgMS4yLTUuMiAwLTIuNy0uOS01LjItMi41LTcuMmwtMS41IDEuMmMwLS4xLS4xLS4xLS4xLS4yLTEuNi0xLjktMy45LTMuMi02LjYtMy4zbC0uMiAyLjRoLS41Yy0zLjkgMC03IDMuMi03IDcgMCAzLjkgMy4yIDcgNyA3IDIuMyAwIDQuNC0xLjEgNS43LTIuOSAwLS4xLjEtLjEuMS0uMmwyIDEuNCAxLjYgMS4xLjguNmMwIC4xLS4xLjEtLjEuMi0yLjMgMy4xLTUuOSA1LjEtMTAgNS4xLTYuOCAwLTEyLjQtNS42LTEyLjQtMTIuNCAwLTYuOCA1LjYtMTIuNCAxMi40LTEyLjRoLjljMy41LjIgNi41IDEuOSA4LjYgNC40IDAgLjEuMS4xLjEuMiAxLjggMi4zIDIuOCA1IDIuOCA4eiIvPjwvc3ZnPg==' alt=''/>
                    <h2>We illuminate insights in the world's data</h2>
                </div>
                <div className="FreeTrialapp-body_item">
                    <div className="FreeTrialapp-body_item-title">
                        <h3>Start your free trial</h3>
                        <p>Try out all of the services in Kensho's AI Toolkit!</p>
                    </div>
                    <div className="FreeTrialapp-body_item-input">
                        <p>Work Email</p>
                        <div className="item-input-WE">
                            <input type='text' placeholder='Your email address'/>
                            <button>Continute</button>
                        </div>
                        <span>Invalid email. Please try again.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreeTrialapp;