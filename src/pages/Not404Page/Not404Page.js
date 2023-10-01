import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Not404Page = () => {
    const history = useHistory();
    const backHome = () => {
        history.push("/");
    }
    return (
        <div style={{textAlign:"center", height:"600px", display:'flex', alignItems:"center", justifyContent:'center', flexDirection:"column"}}>
            <i className="fa-solid fa-triangle-exclamation"
            style={{
                marginTop:"30px",
                fontSize:"70px",
                color: "red"
            }}
            ></i>
            <h3 style={{fontSize:"20px", color:"#65676b", fontWeight:"700", lineHeight:"24px", marginTop:"10px"}}>Bạn hiện không xem được nội dung này</h3>
            <p style={{fontSize:"17px", color:"#65676b", lineHeight:"20.0005px", marginTop:"10px"}}>Lỗi này thường do chủ sở hữu chỉ chia sẻ nội dung với một<br/> nhóm nhỏ, thay đổi người được xem hoặc đã xóa nội dung.</p>
            <button onClick={() => backHome()} 
            style={{
                backgroundColor: "var(--my-color)",
                borderRadius: "6px",
                color: "white",
                padding: "20px 40px",
                fontSize: "17px",
                outline: "none",
                border: "none",
                fontWeight: "600",
                marginTop: "50px",
                cursor:"pointer",
            }}
            >Trở về trang chủ</button>
        </div>
    );
};

export default Not404Page;