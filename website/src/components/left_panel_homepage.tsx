import React from "react";
import { Link } from "react-router-dom";
import Left_Homepage_Info from "./left_homepage_info";

const Left_Pannel_Homepage = () => {
    return (
        <div className="left-panel">
            <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
            </div>

            <Left_Homepage_Info />
        </div>
    );
};


export default Left_Pannel_Homepage;