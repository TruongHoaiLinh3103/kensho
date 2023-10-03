import React from 'react';
import Boxhearder from '../../Components/Boxhearder/Boxhearder';
import DeiGoals from '../../Layouts/DeiGoals/DeiGoals';
import DeiPrograms from '../../Layouts/DeiPrograms/DeiPrograms';
import DeiPolicies from '../../Layouts/DeiPolicies/DeiPolicies';
import Emloy from '../../Layouts/Emloy/Emloy';
const Dei = () => {
    return (
        <div>
            <Boxhearder/>
            <div style={{
                height: "200px",
                backgroundColor: "white",
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
            }}>
                <h3 style={{
                    width: "80%",
                    color: "#004d61",
                    fontFamily: "proxima-nova",
                    fontSize: "44px",
                    fontWeight: "700",
                    lineHeight: "55px",
                    margin: "0px 0px 18px",
                    textAlign: "center",
                }}>
                Creating a diverse environment, sense of belonging and a place where employees can bring their whole selves to work</h3>
            </div>
            <DeiGoals/>
            <DeiPrograms/>
            <DeiPolicies/>
            <Emloy/>
        </div>
    );
};

export default Dei;