import React from 'react';
import Boxhearder from '../../Components/Boxhearder/Boxhearder';
import DeiGoals from '../../Layouts/DeiGoals/DeiGoals';
import DeiPrograms from '../../Layouts/DeiPrograms/DeiPrograms';
import DeiPolicies from '../../Layouts/DeiPolicies/DeiPolicies';
import Emloy from '../../Layouts/Emloy/Emloy';
import useFetchAOS from '../../Utils/useFetchAOS';
const Dei = () => {
    useFetchAOS();
    return (
        <div>
            <Boxhearder/>
            <div style={{
                padding: "50px 0px",
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
                }} data-aos="fade-up">
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