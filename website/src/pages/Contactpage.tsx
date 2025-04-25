import React from "react";
import Left_Pannel_Contactpage from "../components/left_panel_contactpage";
import Right_Pannel_Contactpage from "../components/right_pannel_contactpage";

const ContactPage = () => {
    return (
        <div className="container">
            <Left_Pannel_Contactpage />
            <Right_Pannel_Contactpage />
        </div>
    );
};

export default ContactPage;