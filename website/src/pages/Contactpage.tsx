import React from "react";
import Left_Pannel_Contactpage from "../components/contactpage/left_panel_contactpage";
import Right_Pannel_Contactpage from "../components/contactpage/right_pannel_contactpage";

const ContactPage = () => {
    return (
        <div className="container">
            <Left_Pannel_Contactpage />
            <Right_Pannel_Contactpage />
        </div>
    );
};

export default ContactPage;